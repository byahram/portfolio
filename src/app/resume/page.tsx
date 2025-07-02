"use client";

import {
  fetchCareerData,
  fetchCertificationData,
  fetchEducationData,
  fetchProfileData,
  fetchSkillsData,
} from "@/lib/apiList";
import ErrorMessage from "@/components/common/ErrorMessage";
import { CareerItem } from "@/types/career";
import { CertificationItem } from "@/types/certification";
import { EducationItem } from "@/types/education";
import { ProfileItem } from "@/types/profile";
import { SkillsItem } from "@/types/skills";
import React, { useEffect, useState } from "react";
import Profile from "@/components/resume/Profile";
import Line from "@/components/common/Line";
import Education from "@/components/resume/Education";
import Career from "@/components/resume/Career";
import Skills from "@/components/resume/Skills";
import Certification from "@/components/resume/Certification";

export default function Resume() {
  const [profile, setProfile] = useState<ProfileItem[]>([]);
  const [education, setEducation] = useState<EducationItem[]>([]);
  const [career, setCareer] = useState<CareerItem[]>([]);
  const [skills, setSkills] = useState<SkillsItem[]>([]);
  const [certification, setCertification] = useState<CertificationItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [profile, education, career, skills, certification] =
          await Promise.all([
            fetchProfileData(),
            fetchEducationData(),
            fetchCareerData(),
            fetchSkillsData(),
            fetchCertificationData(),
          ]);

        const filteredProfile = profile.filter(
          (item) => item.properties?.language === "ko"
        );

        const filteredEducation = education.filter(
          (item) => item.properties?.language === "ko"
        );

        const filteredCareer = career.filter(
          (item) => item.properties?.language === "ko"
        );

        const filteredCertification = certification.filter(
          (item) => item.properties?.language === "ko"
        );

        setProfile(filteredProfile);
        setEducation(filteredEducation);
        setCareer(filteredCareer);
        setSkills(skills);
        setCertification(filteredCertification);

        console.log("filteredCareer ---> ", filteredCareer);
      } catch (err) {
        console.error("Error fetching resume data:", err);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAll();
  }, []);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <section id="resume" className="my-10 md:my-16">
      <h2 className="mb-8 text-2xl font-medium tracking-tighter">About</h2>
      <Profile data={profile[0]} isLoading={isLoading} />
      <Line />
      <Education data={education} isLoading={isLoading} />
      <Line />
      <Career data={career} isLoading={isLoading} />
      <Line />
      <Skills data={skills} isLoading={isLoading} />
      <Line />
      <Certification data={certification} isLoading={isLoading} />
    </section>
  );
}
