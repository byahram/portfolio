import ListDot from "@/components/ListDot";
import BadgeText from "@/components/BadgeText";

interface SkillsItem {
  technical: {
    frontend: string[];
    backend: string[];
    mobile: string[];
    tools: string[];
  };
  soft: string[];
}

interface SkillsProp {
  data: SkillsItem;
}

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

export default Skills;
