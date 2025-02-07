import ListDot from "@/components/common/ListDot";
import BadgeText from "@/components/common/BadgeText";
import Skeleton from "@/components/common/Skeleton";

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
  isLoading: boolean;
}

const SkillsSkeleton = () => {
  return (
    <>
      <h2 className="mb-8 text-xl font-medium tracking-tighter">
        <Skeleton className="w-32 h-6" />
      </h2>
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="[&:not(:first-child)]:mt-6">
          <div className="flex items-center flex-nowrap w-[40%] mb-3">
            <Skeleton className="w-4 h-4 rounded-full" />
            <Skeleton className="w-16 h-5 ml-2" />
          </div>
          <div className="flex flex-wrap gap-2 ml-8">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} className="w-24 h-6 rounded-md" />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

const Skills = ({ data, isLoading }: SkillsProp) => {
  return (
    <article className="skills">
      {isLoading ? (
        <SkillsSkeleton />
      ) : (
        <>
          <h2 className="mb-8 text-xl font-medium tracking-tighter">Skills</h2>
          <div className="flex flex-col flex-wrap gap-3">
            {/* Frontend Skills */}
            {Object.entries(data.technical).map(([category, skills], index) => (
              <div key={index} className="skill-category mb-5">
                <div className="flex items-center flex-nowrap w-full md:w-[32%] mb-3">
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
              <div className="flex items-center flex-nowrap w-full md:w-[32%] mb-3">
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
        </>
      )}
    </article>
  );
};

export default Skills;
