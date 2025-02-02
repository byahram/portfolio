export const formatDate = (dateString: string | null | undefined): string => {
  const [year, month] = dateString
    ? dateString.split("-")
    : ["present", "present"];
  return `${year}.${month}`;
};
