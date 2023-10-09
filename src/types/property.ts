export interface Property {
  price: number;
  title: string;
  area: number;
  phoneNumber: PhoneNumber;
  contactName: string;
  amenities: string[];
  location: Location[];
  coverPhoto: CoverPhoto;
  baths: number;
  rooms: number;
}

interface PhoneNumber {
  mobile: string;
  mobileNumbers: string[];
  phone: string;
  phoneNumbers: string[];
  proxyMobile?: string;
  proxyPhone?: string;
  whatsapp: string;
}

interface Location {
  externalID: string;
  id: number;
  level: number;
  name: string;
  name_l1: string;
  name_l2: string;
  name_l3: string;
  slug: string;
  slug_l1: string;
  slug_l2: string;
  slug_l3: string;
  type?: LocationType;
}
interface LocationType {
  CondoBuilding: string;
  Neighbourhood: string;
}

interface CoverPhoto {
  externalID: string;
  id: number;
  main: boolean;
  nimaScore: number;
  orderIndex: number;
  title: null | string;
  url: string;
}
