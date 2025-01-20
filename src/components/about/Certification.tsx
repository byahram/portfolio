import ListDot from "@/components/ListDot";

interface CertificationItem {
  name: string;
  date: string;
}

interface CertificationProp {
  data: CertificationItem[];
}

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

export default Certification;
