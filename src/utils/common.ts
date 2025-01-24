export const formatDate = (dateString: string | null): string => {
  const [year, month] = dateString
    ? dateString.split("-")
    : ["present", "present"];
  return `${year}.${month}`;
};
