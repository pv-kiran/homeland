export type Price = {
  title: string;
  value: number;
};

export type Room = {
  title: string;
  value: number;
};

export type Purpose = {
  title: string;
  value: string;
};

export type Location = {
  label: string;
  externalID: number;
};

export type PropertyFilter = {
  locationExternalID: number;
  purpose: string;
  priceMax: number;
  roomsMax: number;
  page: number;
};
