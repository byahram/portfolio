"use client";

import { useEffect, useState } from "react";
import Certification from "@/components/about/Certification";
import Education from "@/components/about/Education";
import Profile from "@/components/about/Profile";
import Skills from "@/components/about/Skills";
import Career from "@/components/about/Career";
import Line from "@/components/common/Line";
import ErrorMessage from "@/components/common/ErrorMessage";
import { ApiResponse } from "@/types/career";
import { fetchCareerData } from "@/lib/apiList";
import {
  certificationList,
  educationList,
  profile,
  skillsList,
} from "@/store/store";

export default function About() {
  const [careers, setCareers] = useState<ApiResponse[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCareer = async () => {
    try {
      const processedData = await fetchCareerData();
      console.log("fetchCareerData processedData ---> ", processedData);
      setCareers(processedData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCareer();
  }, []);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <section id="about" className="my-10 md:my-16">
      <h2 className="mb-8 text-2xl font-medium tracking-tighter">About</h2>
      <Profile data={profile} isLoading={isLoading} />
      <Line />
      <Education data={educationList} isLoading={isLoading} />
      <Line />
      <Career data={careers} isLoading={isLoading} />
      <Line />
      <Skills data={skillsList} isLoading={isLoading} />
      <Line />
      <Certification data={certificationList} isLoading={isLoading} />
    </section>
  );
}
