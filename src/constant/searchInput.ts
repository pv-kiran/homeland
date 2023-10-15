import { Price, Room, Purpose } from "../types/search";

const priceRentInput: Price[] = [
  { title: "Between 6000 - 8000", value: 8000 },
  { title: "Between 8000 - 10000", value: 10000 },
  { title: "Between 10000 - 12000", value: 12000 },
  { title: "Between 12000 - 14000", value: 15000 },
];

const priceSaleInput: Price[] = [
  { title: "Between 6000 - 8000", value: 8000 },
  { title: "Between 1000000 - 2000000", value: 2000000 },
  { title: "Between 2000000 - 3000000", value: 3000000 },
  { title: "Between 3000000 - 4000000", value: 4000000 },
  { title: "Between 4000000 - 5000000", value: 5000000 },
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
