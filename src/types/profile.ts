export interface NotionProfileRaw {
  id: string;
  properties?: {
    name: { title: { plain_text: string }[] };
    photo: { rich_text: { plain_text: string }[] };
    phone: { rich_text: { plain_text: string }[] };
    email: { rich_text: { plain_text: string }[] };
    github: { rich_text: { plain_text: string }[] };
    address: { rich_text: { plain_text: string }[] };
    language: { rich_text: { plain_text: string }[] };
  };
}

export interface ProfileData {
  name: string;
  photo: string;
  phone: string;
  email: string;
  github: string;
  address: string;
  language: string;
}

export interface ProfileItem {
  id: string;
  properties: ProfileData | null;
}

export const transformProfileDataFromNotion = (
  rawData: NotionProfileRaw[] | null
): ProfileData[] => {
  if (!rawData) return [];

  return rawData.map((item) => {
    const properties = item.properties;
    if (!properties) {
      return {
        name: "",
        photo: "",
        phone: "",
        email: "",
        github: "",
        address: "",
        language: "",
      };
    }

    const { name, photo, phone, email, github, address, language } = properties;

    return {
      name: name.title.map((text) => text.plain_text).join(""),
      photo: photo.rich_text.map((text) => text.plain_text).join(""),
      phone: phone.rich_text.map((text) => text.plain_text).join(""),
      email: email.rich_text.map((text) => text.plain_text).join(""),
      github: github.rich_text.map((text) => text.plain_text).join(""),
      address: address.rich_text.map((text) => text.plain_text).join(""),
      language: language.rich_text.map((text) => text.plain_text).join(""),
    };
  });
};
