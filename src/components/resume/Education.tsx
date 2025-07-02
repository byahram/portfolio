import Skeleton from "@/components/common/Skeleton";
import ListDot from "@/components/common/ListDot";
import { EducationItem } from "@/types/education";
import { sortByProperty } from "@/utils/common";

interface EducationProp {
  data: EducationItem[];
  isLoading: boolean;
}

const EducationSkeleton = () => {
  return (
    <>
      <h2 className="mb-8 text-xl font-medium tracking-tighter">
        <Skeleton className="w-32 h-6" />
      </h2>
      <ul>
        {[...Array(3)].map((_, index) => (
          <li
            key={index}
            className="[&:not(:first-child)]:mt-6 flex items-start justify-start gap-5 sm:gap-12"
          >
            <div className="flex items-center flex-nowrap w-[40%] sm:w-[20%]">
              <Skeleton className="w-2 h-2 rounded-full" />
              <Skeleton className="w-32 h-4 ml-5" />
            </div>
            <div className="flex flex-col">
              <Skeleton className="w-40 sm:w-80 h-8" />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

const Education = ({ data, isLoading }: EducationProp) => {
  const sortedEducation = sortByProperty<EducationItem>(
    data,
    (item) => parseInt(item.properties?.no || "0"),
    "desc"
  );

  return (
    <article className="education">
      {isLoading ? (
        <EducationSkeleton />
      ) : (
        <>
          <h2 className="mb-8 text-xl font-medium tracking-tighter">
            Education
          </h2>
          <ul>
            {sortedEducation.map((item, index) => (
              <li
                key={index}
                className="[&:not(:first-child)]:mt-6 flex flex-col md:flex-row items-start justify-start gap-3 md:gap-12 sm:flex"
              >
                <div className="flex items-center flex-nowrap">
                  <ListDot />
                  <p className="text-sm text-gray-700 dark:text-gray-300 sm:max-w-[120px] sm:break-words">
                    {item.properties?.from} ~ {item.properties?.to}
                  </p>
                </div>
                <div className="flex flex-col ml-9 md:ml-0">
                  <p className="font-semibold">{item.properties?.name}</p>
                  <p className="text-gray-700 dark:text-gray-300 mt-0.5">
                    - {item.properties?.degree} in {item.properties?.major} (
                    {item.properties?.status})
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </article>
  );
};

export default Education;
