import ListDot from "@/components/common/ListDot";
import BadgeText from "@/components/common/BadgeText";
import Skeleton from "@/components/common/Skeleton";
import { SkillsItem } from "@/types/skills";
import { sortByProperty } from "@/utils/common";

interface SkillsProp {
  data: SkillsItem[];
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
  // no 오름차순 정렬
  const sortedSkills = sortByProperty<SkillsItem>(
    data,
    (item) => parseInt(item.properties?.no || "0"),
    "asc"
  );

  return (
    <article className="skills">
      {isLoading ? (
        <SkillsSkeleton />
      ) : (
        <>
          <h2 className="mb-8 text-xl font-medium tracking-tighter">Skills</h2>
          <div className="flex flex-col flex-nowrap gap-3">
            {sortedSkills.map((item) => {
              if (!item.properties) return null;

              const { category, skills } = item.properties;
              const skillList = skills
                .split(",")
                .map((skill) => skill.trim())
                .filter(Boolean);

              return (
                <div key={item.id} className="skill-category mb-5">
                  <div className="flex items-center w-full md:w-[32%] mb-3">
                    <ListDot />
                    <p className="font-semibold capitalize">{category}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-8">
                    {skillList.map((skill, idx) => (
                      <BadgeText key={idx}>{skill}</BadgeText>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </article>
  );
};

export default Skills;
