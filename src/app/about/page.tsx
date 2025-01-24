"use client";

import Certification from "@/components/about/Certification";
import Education from "@/components/about/Education";
import Profile from "@/components/about/Profile";
import Skills from "@/components/about/Skills";
import Career from "@/components/about/Career";
import Line from "@/components/Line";
import {
  certificationList,
  educationList,
  profile,
  skillsList,
} from "@/store/store";
import { CareerData, NotionCareerProps } from "@/types/interface";
import { useEffect, useState } from "react";
import ErrorMessage from "@/components/common/ErrorMessage";

const processCareerData = (rawData: NotionCareerProps[]): CareerData[] => {
  return rawData.map((item) => {
    const {
      careerId,
      projectId,
      company,
      description,
      team,
      position,
      role,
      rnr,
      techs,
      employment_period,
      tenure,
      status,
    } = item;

    return {
      careerId: careerId.title.map((text) => text.plain_text).join(""),
      projectId: projectId.relation.map((rel) => rel.id),
      company: company.rich_text.map((text) => text.plain_text).join(""),
      description: description.rich_text
        .map((text) => text.plain_text)
        .join(""),
      team: team.rich_text.map((text) => text.plain_text).join(""),
      position: position.rich_text.map((text) => text.plain_text).join(""),
      role: role.rich_text.map((text) => text.plain_text).join(""),
      rnr: rnr.multi_select.map((item) => item.name),
      techs: techs.multi_select.map((techItem) => techItem.name),
      employmentFrom: employment_period?.date?.start || null,
      employmentTo: employment_period?.date?.end || null,
      tenure: tenure.rich_text.map((text) => text.plain_text).join(""),
      status: status.status.name,
    };
  });
};

export default function About() {
  const [experience, setExperience] = useState<CareerData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCareerData = async () => {
    try {
      const response = await fetch("/api/career", { method: "GET" });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: { properties: NotionCareerProps }[] = await response.json();
      const propertiesOnly = data.map((item) => item.properties);
      const processedData = processCareerData(propertiesOnly);
      console.log(" processedData :: ", processedData);
      setExperience(processedData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCareerData();
  }, []);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  return (
    <section id="about" className="my-10 md:my-16">
      {!isLoading && (
        <h2 className="mb-8 text-2xl font-medium tracking-tighter">About</h2>
      )}
      <Profile data={profile} isLoading={isLoading} />
      <Line />
      <Education data={educationList} isLoading={isLoading} />
      <Line />
      <Career data={experience} isLoading={isLoading} />
      <Line />
      <Skills data={skillsList} isLoading={isLoading} />
      <Line />
      <Certification data={certificationList} isLoading={isLoading} />
    </section>
  );
}
