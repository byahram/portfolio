import BadgeText from "@/components/common/BadgeText";
import ListDot from "@/components/common/ListDot";
import { CareerApiResponse } from "@/types/career";
import Link from "next/link";
import Skeleton from "@/components/common/Skeleton";
import { formatDate } from "@/utils/common";

interface CareerProp {
  data: CareerApiResponse[];
  isLoading: boolean;
}

const CareerSkeleton = () => {
  return (
    <>
      <h2 className="mb-8 text-xl font-medium tracking-tighter">
        <Skeleton className="w-32 h-6" />
      </h2>
      <ul>
        {Array.from({ length: 3 }).map((_, index) => (
          <li
            key={index}
            className="[&:not(:first-child)]:mt-6 flex items-start justify-start gap-5 md:gap-12"
          >
            <div className="flex items-center flex-nowrap md:w-[40%]">
              <Skeleton className="w-2 h-2 rounded-full" />
              <Skeleton className="w-32 h-4 ml-5" />
            </div>
            <div className="flex flex-col">
              <Skeleton className="w-48 sm:w-80 h-12" />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

const Career = ({ data, isLoading }: CareerProp) => {
  return (
    <article className="career">
      {isLoading ? (
        <CareerSkeleton />
      ) : (
        <>
          <div className="flex justify-between">
            <h2 className="mb-8 text-xl font-medium tracking-tighter">
              Work Experience
            </h2>
            <Link
              href="/career"
              className="mb-8 text-sm text-gray-700 dark:text-gray-300 cursor-pointer hover:text-blue-700 transition duration-300 flex items-center gap-1"
            >
              더보기
              <span className="opacity-0 hover:opacity-100 transition duration-300">
                +
              </span>
            </Link>
          </div>
          <ul>
            {data.map((item, index) => (
              <li
                key={index}
                className="[&:not(:first-child)]:mt-6 flex flex-col md:flex-row items-start justify-start gap-3 md:gap-12"
              >
                <div className="flex items-center flex-nowrap w-full md:w-[40%]">
                  <ListDot />
                  <p className="font-semibold">{item.properties?.company}</p>
                </div>
                <div className="flex flex-col md:w-full ml-9 md:ml-0">
                  <p className="text-gray-700 dark:text-gray-300">
                    {formatDate(item.properties?.employmentFrom)} ~{" "}
                    {formatDate(item.properties?.employmentTo)}
                  </p>
                  <p className="mt-0.5">
                    - {item.properties?.role} / {item.properties?.team}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.properties?.techs.map((tech, index) => (
                      <BadgeText key={index}>{tech}</BadgeText>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </article>
  );
};

export default Career;
