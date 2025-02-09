export const formatDate = (dateString: string | null | undefined): string => {
  if (!dateString) return "재직중";

  const [year, month] = dateString.split("-");
  return `${year}.${month}`;
};
