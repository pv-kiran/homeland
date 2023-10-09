import { Price, Room, Purpose } from "../types/search";

const priceRentInput: Price[] = [
  { title: "Less than 8000", value: 8000 },
  { title: "Less than 10000", value: 10000 },
  { title: "Less than 13000", value: 13000 },
  { title: "Less than 15000", value: 15000 },
];

const priceSaleInput: Price[] = [
  { title: "Less than 8000", value: 8000 },
  { title: "Less than 2000000", value: 2000000 },
  { title: "Less than 3000000", value: 3000000 },
  { title: "Less than 4000000", value: 4000000 },
  { title: "Less than 5000000", value: 5000000 },
];

const roomInput: Room[] = [
  { title: "1 Room", value: 1 },
  { title: "2 Room", value: 2 },
  { title: "3 room", value: 3 },
  { title: "4 room", value: 4 },
];

const purposeInput: Purpose[] = [
  { title: "For rent", value: "for-rent" },
  { title: "For sale", value: "for-sale" },
];

export { priceRentInput, priceSaleInput, roomInput, purposeInput };
