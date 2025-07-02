export const formatDate = (dateString: string | null | undefined): string => {
  if (!dateString) return "재직중";

  const [year, month] = dateString.split("-");
  return `${year}.${month}`;
};

export function sortByProperty<T>(
  data: T[],
  getKey: (item: T) => string | number | Date | null | undefined,
  order: "asc" | "desc" = "asc"
): T[] {
  return [...data].sort((a, b) => {
    const aKey = getKey(a);
    const bKey = getKey(b);

    if (aKey == null || bKey == null) return 0;

    const aValue = typeof aKey === "string" ? aKey.toString() : aKey;
    const bValue = typeof bKey === "string" ? bKey.toString() : bKey;

    if (typeof aValue === "string" && typeof bValue === "string") {
      return order === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    if (typeof aValue === "number" && typeof bValue === "number") {
      return order === "asc" ? aValue - bValue : bValue - aValue;
    }

    if (aValue instanceof Date && bValue instanceof Date) {
      return order === "asc"
        ? aValue.getTime() - bValue.getTime()
        : bValue.getTime() - aValue.getTime();
    }

    return 0;
  });
}
