import BadgeText from "@/components/BadgeText";
import Line from "@/components/Line";
import ListDot from "@/components/ListDot";
import {
  certificationList,
  educationList,
  experienceList,
  profile,
  skillList,
} from "@/store/store";
import Image from "next/image";

interface ProfileItem {
  photo: string;
  phone: string;
  email: string;
  github: string;
}
interface EducationItem {
  college: string;
  degree: string;
  major: string;
  status: string;
  duration: {
    from: string;
    to: string;
  };
}
interface ExperienceItem {
  company: string;
  team: string;
  position: string;
  role: string;
  details: string[];
  skills: string[];
  duration: {
    from: string;
    to: string;
  };
}
interface SkillItem {
  technical: {
    frontend: string[];
    backend: string[];
    mobile: string[];
    tools: string[];
  };
  soft: string[];
}
interface CertificationItem {
  name: string;
  date: string;
}

interface ProfileProp {
  data: ProfileItem;
}
interface EducationProp {
  data: EducationItem[];
}
interface ExperienceProp {
  data: ExperienceItem[];
}
interface SkillsProp {
  data: SkillItem;
}
interface CertificationProp {
  data: CertificationItem[];
}

const Profile = ({ data }: ProfileProp) => {
  return (
    <article className="profile">
      <div className="flex justify-center gap-10">
        <Image
          alt="Profile picture"
          src={data.photo}
          className="rounded-full object-cover aspect-square w-48 md:w-56 object-top grayscale transition-all duration-300 hover:grayscale-0"
          width={224}
          height={224}
        />
        <ul className="flex flex-col justify-center gap-4">
          <li>
            <span className="font-bold">Phone:</span> {data.phone}
          </li>
          <li>
            <span className="font-bold">Email:</span> {data.email}
          </li>
          <li>
            <span className="font-bold">Github:</span>{" "}
            <a href={data.github} className="hover:underline">
              {data.github}
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};
const Education = ({ data }: EducationProp) => {
  return (
    <article className="education mt-20">
      <h2 className="mb-8 text-xl font-medium tracking-tighter">Education</h2>
      <ul>
        {data.map((item, index) => (
          <li
            key={index}
            className="[&:not(:first-child)]:mt-6 flex items-start justify-start gap-12"
          >
            <div className="flex items-center flex-nowrap">
              <div className="relative w-1.5 h-1.5 bg-dark dark:bg-light ml-3 mr-5 rounded-full"></div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {item.duration.from} ~ {item.duration.to}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">{item.college}</p>
              <p className="text-gray-700 dark:text-gray-300 mt-0.5">
                - {item.degree} in {item.major} ({item.status})
              </p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};
const Experience = ({ data }: ExperienceProp) => {
  return (
    <article className="experience">
      <h2 className="mb-8 text-xl font-medium tracking-tighter">
        Work Experience
      </h2>
      <ul>
        {data.map((item, index) => (
          <li
            key={index}
            className="[&:not(:first-child)]:mt-6 flex items-start justify-start gap-12"
          >
            <div className="flex items-center flex-nowrap w-[40%]">
              <ListDot />
              <p className="font-semibold">{item.company}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-gray-700 dark:text-gray-300">
                {item.duration.from} ~ {item.duration.to || "Present"}
              </p>
              <p className="mt-0.5">
                - {item.role} / {item.team}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {item.skills.map((skill, skillIndex) => (
                  <BadgeText key={skillIndex}>{skill}</BadgeText>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};
const Skills = ({ data }: SkillsProp) => {
  return (
    <article className="skills">
      <h2 className="mb-8 text-xl font-medium tracking-tighter">Skills</h2>
      <div className="flex flex-col flex-wrap gap-3">
        {/* Frontend Skills */}
        {Object.entries(data.technical).map(([category, skills], index) => (
          <div key={index} className="skill-category mb-5">
            <div className="flex items-center flex-nowrap w-[32%] mb-3">
              <ListDot />
              <p className="font-semibold capitalize">{category}</p>
            </div>
            <div className="flex flex-wrap gap-2 ml-8">
              {skills.map((tech, index) => (
                <BadgeText key={index}>{tech}</BadgeText>
              ))}
            </div>
          </div>
        ))}
        {/* Soft Skills */}
        <div className="skill-category">
          <div className="flex items-center flex-nowrap w-[32%] mb-3">
            <ListDot />
            <p className="font-semibold capitalize">Soft Skills</p>
          </div>
          <div className="flex flex-wrap gap-2 ml-8">
            {data.soft.map((soft, index) => (
              <BadgeText key={index}>{soft}</BadgeText>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
const Certification = ({ data }: CertificationProp) => {
  return (
    <article className="certification">
      <h2 className="mb-8 text-xl font-medium tracking-tighter">
        Certification
      </h2>
      <ul>
        {data.map((item, index) => (
          <li
            key={index}
            className="[&:not(:first-child)]:mt-2.5 flex items-center"
          >
            <ListDot />
            <p className="mr-2">{item.name}</p>
            <span className="ml-3 text-sm text-gray-500">
              ({item.date} 취득)
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default function About() {
  return (
    <section id="about" className="my-10 md:my-16">
      <h2 className="mb-8 text-2xl font-medium tracking-tighter">About</h2>
      <Profile data={profile} />
      <Education data={educationList} />
      <Line />
      <Experience data={experienceList} />
      <Line />
      <Skills data={skillList} />
      <Line />
      <Certification data={certificationList} />
    </section>
  );
}
