interface EducationItem {
  college: string;
  degree: string;
  major: string;
  status: string;
  duration: {
    from: string;
    to: string;
  };
}

interface EducationProp {
  data: EducationItem[];
}

const Education = ({ data }: EducationProp) => {
  return (
    <article className="education mt-20">
      <h2 className="mb-8 text-xl font-medium tracking-tighter">Education</h2>
      <ul>
        {data.map((item, index) => (
          <li
            key={index}
            className="[&:not(:first-child)]:mt-6 flex items-start justify-start gap-12"
          >
            <div className="flex items-center flex-nowrap">
              <div className="relative w-1.5 h-1.5 bg-dark dark:bg-light ml-3 mr-5 rounded-full"></div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {item.duration.from} ~ {item.duration.to}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold">{item.college}</p>
              <p className="text-gray-700 dark:text-gray-300 mt-0.5">
                - {item.degree} in {item.major} ({item.status})
              </p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Education;
