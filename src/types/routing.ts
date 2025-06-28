export interface NotionRoutingRaw {
  id: string;
  properties?: {
    no: { number: number };
    path: { title: { plain_text: string }[] };
    name: { rich_text: { plain_text: string }[] };
  };
}

export interface RoutingData {
  no: string;
  path: string;
  name: string;
}

export interface RoutingItem {
  id: string;
  properties: RoutingData | null;
}

export const transformRoutingDataFromNotion = (
  rawData: NotionRoutingRaw[] | null
): RoutingData[] => {
  if (!rawData) return [];

  return rawData.map((item) => {
    const properties = item.properties;
    if (!properties) {
      return {
        no: "",
        path: "",
        name: "",
      };
    }

    const { no, path, name } = properties;

    return {
      no: no.number.toString(),
      path: path.title.map((text) => text.plain_text).join(""),
      name: name.rich_text.map((text) => text.plain_text).join(""),
    };
  });
};
