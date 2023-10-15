export interface PropertyItem {
  _geoloc: Geo;
  _highlightResult: HighlightResult;
  agency: HitAgency;
  amenities: string[];
  amenities_l1: string[];
  amenities_l2: string[];
  amenities_l3: string[];
  area: number;
  baths: number;
  category: Category[];
  cityLevelScore: number;
  completionStatus: string;
  contactName: string;
  coverPhoto: CoverPhoto;
  coverVideo?: CoverVideo;
  createdAt: number;
  externalID: string;
  extraFields: ExtraFields;
  floorPlanID: number | null;
  furnishingStatus: string | null;
  geography: Geo;
  hasMatchingFloorPlans: boolean;
  hasTransactionHistory?: boolean;
  hash: string;
  hidePrice: boolean;
  id: number;
  indyScore: number;
  indyScore_l1: number;
  indyScore_l2: number;
  indyScore_l3: number;
  isVerified: boolean;
  keywords: string[];
  location: Location[];
  locationPurposeTier: number;
  objectID: string;
  occupancyStatus?: string;
  ownerAgent: OwnerAgent;
  ownerID: number;
  panoramaCount: number;
  permitNumber: null | string;
  phoneNumber: PhoneNumber;
  photoCount: number;
  photoIDs: number[];
  plotArea: null;
  price: number;
  product: string;
  productLabel: string;
  productScore: number;
  projectNumber: null;
  purpose: string;
  randBoostScore: number;
  randBoostScore_l1: number;
  randBoostScore_l2: number;
  randBoostScore_l3: number;
  reactivatedAt: number;
  referenceNumber: string;
  rentFrequency: string;
  rooms: number;
  score: number;
  score_l1: number;
  score_l2: number;
  score_l3: number;
  slug: string;
  slug_l1: string;
  slug_l2: string;
  slug_l3: string;
  sourceID: number;
  state: string;
  title: string;
  title_l1: string;
  title_l2: string;
  title_l3: string;
  type: string;
  updatedAt: number;
  userExternalID: string;
  verification: Verification;
  verifiedScore: number;
  videoCount: number;
}

interface Geo {
  lat: number;
  lng: number;
}

interface HighlightResult {
  agency: HighlightResultAgency;
  externalID: ExternalID;
  keywords: ExternalID[];
  referenceNumber: ExternalID;
  title: ExternalID;
  title_l1: ExternalID;
  title_l2: ExternalID;
  title_l3: ExternalID;
}

interface HighlightResultAgency {
  name: ExternalID;
  name_l1: ExternalID;
  name_l2: ExternalID;
  name_l3: ExternalID;
}

interface ExternalID {
  matchLevel: string;
  matchedWords: any[];
  value: string;
}

interface HitAgency {
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

interface CoverPhoto {
  externalID: string;
  id: number;
  main: boolean;
  nimaScore: number;
  orderIndex: number;
  title: null | string;
  url: string;
}

interface CoverVideo {
  externalID: number;
  host: string;
  orderIndex: number;
  title: null | string;
  url: string;
}

interface ExtraFields {
  dldBuildingNK?: string;
  dldPropertySK?: string;
  hasRentTransactions?: boolean;
  hasSaleTransactions?: boolean;
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

interface OwnerAgent {
  externalID: string;
  isTruBroker: boolean;
  name: string;
  name_l1: string;
  name_l2: string;
  name_l3: string;
  user_image: string;
  user_image_id: number;
}

interface PhoneNumber {
  mobile: string;
  mobileNumbers: string[];
  phone: string;
  phoneNumbers: string[];
  proxyMobile?: string;
  whatsapp: string;
}

interface Verification {
  eligible: boolean;
  status: string;
  trucheckedAt: number;
  updatedAt: number;
  verifiedAt: number;
}
