/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Property {
  price: number;
  externalID: string;
  title: string;
  area: string;
  coverPhoto: Photo;
  baths: number;
  rooms: number;
  location: Location[];
}

export interface SelectedProperty extends Property {
  agency: Agency;
  amenities: RootObjectAmenity[];
  category: Category[];
  contactName: string;
  createdAt: number;
  description: string;
  rentFrequency: string;
  furnishingStatus: string;
  geography: Geography;
  phoneNumber: PhoneNumber;
  photos: Photo[];
}

interface Agency {
  active: boolean;
  commercialNumber: null;
  createdAt: Date;
  externalID: string;
  id: number;
  licenses: License[];
  logo: Logo;
  name: string;
  name_l1: string;
  name_l2: string;
  name_l3: string;
  objectID: number;
  performanceCohort: string;
  product: string;
  productScore: number;
  roles: any[];
  shortNumber: null;
  slug: string;
  slug_l1: string;
  slug_l2: string;
  slug_l3: string;
  tier: number;
  tr: number;
}

interface License {
  authority: string;
  number: string;
}

interface Logo {
  id: number;
  url: string;
}

interface RootObjectAmenity {
  amenities: AmenityAmenity[];
  externalGroupID: number;
  groupRank: number;
  text: string;
  text_l1: string;
  text_l2: string;
  text_l3: string;
}

interface AmenityAmenity {
  externalID: number;
  format: string;
  rank: number;
  slug: string;
  text: string;
  text_l1: string;
  text_l2: string;
  text_l3: string;
  value: string;
}

interface Category {
  externalID: string;
  id: number;
  level: number;
  name: string;
  nameSingular: string;
  nameSingular_l1: string;
  nameSingular_l2: string;
  nameSingular_l3: string;
  name_l1: string;
  name_l2: string;
  name_l3: string;
  slug: string;
  slug_l1: string;
  slug_l2: string;
  slug_l3: string;
}

interface Geography {
  lat: number;
  lng: number;
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
  type?: string;
}

interface PhoneNumber {
  mobile: string;
  mobileNumbers: string[];
  phone: string;
  phoneNumbers: string[];
  whatsapp: string;
}

interface Photo {
  externalID: string;
  id: number;
  main: boolean;
  nimaScore: number;
  orderIndex: number;
  title: null | string;
  url: string;
}
