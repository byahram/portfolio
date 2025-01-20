import Image from "next/image";

interface ProfileItem {
  photo: string;
  phone: string;
  email: string;
  github: string;
}

interface ProfileProp {
  data: ProfileItem;
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

export default Profile;
