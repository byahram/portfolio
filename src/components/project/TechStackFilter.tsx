interface TechStackFilterProps {
  techStackOptions: string[];
  selectedStack: string;
  setSelectedStack: (stack: string) => void;
}

export default function TechStackFilter({
  techStackOptions,
  selectedStack,
  setSelectedStack,
}: TechStackFilterProps) {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      <button
        className={`px-4 py-1 text-sm sm:text-base rounded border transition-all shadow hover:shadow-lg ${
          selectedStack === ""
            ? "bg-neutral-600 text-light border-neutral-600 dark:bg-neutral-700 dark:border-neutral-600 dark:text-light"
            : "bg-white dark:bg-light dark:border-neutral-600 dark:text-dark"
        }`}
        onClick={() => setSelectedStack("")}
      >
        All
      </button>
      {techStackOptions.map((tech) => (
        <button
          key={tech}
          className={`px-4 py-1 text-sm sm:text-base rounded border transition-all shadow hover:shadow-lg ${
            selectedStack === tech
              ? "bg-neutral-600 text-light border-neutral-600 dark:bg-neutral-700 dark:border-neutral-600 dark:text-light"
              : "bg-white dark:bg-light dark:border-neutral-600 dark:text-dark"
          }`}
          onClick={() => setSelectedStack(tech)}
        >
          {tech}
        </button>
      ))}
    </div>
  );
}
