import { Price, Room, Purpose } from "../types/search";

const priceInput: Price[] = [
  { title: "Less than 2000", value: 2000 },
  { title: "Less than 3000", value: 3000 },
  { title: "Less than 4000", value: 4000 },
  { title: "Less than 5000", value: 5000 },
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

export { priceInput, roomInput, purposeInput };
