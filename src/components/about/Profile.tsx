import Image from "next/image";
import Skeleton from "@/components/common/Skeleton";

interface ProfileItem {
  photo: string;
  phone: string;
  email: string;
  github: string;
}

interface ProfileProp {
  data: ProfileItem;
  isLoading: boolean;
}

const ProfileSkeleton = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
      <Skeleton className="rounded-full w-48 md:w-56 h-48 md:h-56" />
      <ul className="flex flex-col justify-center gap-4 sm:text-left text-center sm:items-start items-center">
        <Skeleton className="h-6 w-32 sm:w-40 md:w-48" />
        <Skeleton className="h-6 w-40 sm:w-48 md:w-64" />
        <Skeleton className="h-6 w-24 sm:w-32 md:w-40" />
      </ul>
    </div>
  );
};

const Profile = ({ data, isLoading }: ProfileProp) => {
  return (
    <article className="profile">
      {isLoading ? (
        <ProfileSkeleton />
      ) : (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
          <Image
            alt="Profile picture"
            src={data.photo}
            className="rounded-full object-cover aspect-square w-48 md:w-56 object-top grayscale transition-all duration-300 hover:grayscale-0"
            width={224}
            height={224}
          />
          <ul className="flex flex-col justify-center gap-4 text-center sm:text-left">
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
      )}
    </article>
  );
};

export default Profile;
