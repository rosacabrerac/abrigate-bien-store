export const SIZE_CHART: SizeChartRow[] = [
  {
    name: "S",
    chest: "88 - 94",
    waist: "76 - 82",
    hip: "88 - 94",
  },
  {
    name: "M",
    chest: "95 - 101",
    waist: "83 - 89",
    hip: "95 - 101",
  },
  {
    name: "L",
    chest: "102 - 108",
    waist: "90 - 96",
    hip: "102 - 108",
  },
  {
    name: "XL",
    chest: "109 - 115",
    waist: "97 - 103",
    hip: "109 - 115",
  },
];

export interface SizeChartRow {
  name: string;
  chest: string;
  waist: string;
  hip: string;
}
