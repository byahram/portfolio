import BadgeText from "@/components/BadgeText";
import ListDot from "@/components/ListDot";

interface WorkItem {
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

interface WorkProp {
  data: WorkItem[];
}

const Work = ({ data }: WorkProp) => {
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

export default Work;
