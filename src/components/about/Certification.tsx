import ListDot from "@/components/common/ListDot";
import Skeleton from "@/components/common/Skeleton";

interface CertificationItem {
  name: string;
  date: string;
}

interface CertificationProp {
  data: CertificationItem[];
  isLoading: boolean;
}

const CertificationSkeleton = () => {
  return (
    <>
      <h2 className="mb-8 text-xl font-medium tracking-tighter">
        <Skeleton className="w-32 h-6" />
      </h2>
      <ul>
        {Array.from({ length: 3 }).map((_, index) => (
          <li
            key={index}
            className="[&:not(:first-child)]:mt-6 flex items-start justify-start gap-5"
          >
            <div className="flex items-center flex-nowrap w-full md:w-[40%]">
              <Skeleton className="w-2 h-2 rounded-full" />
              <Skeleton className="w-80 h-8 ml-5" />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

const Certification = ({ data, isLoading }: CertificationProp) => {
  return (
    <article className="certification">
      {isLoading ? (
        <CertificationSkeleton />
      ) : (
        <>
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
                <span className="ml-3 text-sm text-gray-500 opacity-0 sm:opacity-100">
                  ({item.date} 취득)
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </article>
  );
};

export default Certification;
