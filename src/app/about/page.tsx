import Certification from "@/components/about/Certification";
import Education from "@/components/about/Education";
import Profile from "@/components/about/Profile";
import Skills from "@/components/about/Skills";
import Work from "@/components/about/Work";
import Line from "@/components/Line";
import {
  certificationList,
  educationList,
  profile,
  skillsList,
  workList,
} from "@/store/store";

export default function About() {
  return (
    <section id="about" className="my-10 md:my-16">
      <h2 className="mb-8 text-2xl font-medium tracking-tighter">About</h2>
      <Profile data={profile} />
      <Education data={educationList} />
      <Line />
      <Work data={workList} />
      <Line />
      <Skills data={skillsList} />
      <Line />
      <Certification data={certificationList} />
    </section>
  );
}
