import { Company, Country, Post } from "./types";

export const countries: Country[] = [
  { code: "US", name: "United States" },
  { code: "DE", name: "Germany" },
  { code: "JP", name: "Japan" },
  { code: "KR", name: "South Korea" },
  { code: "FR", name: "France" },
  { code: "ES", name: "Spain" },
  { code: "SE", name: "Sweden" },
  { code: "BR", name: "Brazil" },
];

export const companies: Company[] = [
  {
    id: "c1",
    name: "Acme Corp",
    country: "US",
    emissions: [
      { yearMonth: "2024-01", source: "gasoline", emissions: 111 },
      { yearMonth: "2024-02", source: "diesel", emissions: 107 },
      { yearMonth: "2024-03", source: "lpg", emissions: 95 },
      { yearMonth: "2024-04", source: "etc", emissions: 91 },
      { yearMonth: "2024-05", source: "renewable", emissions: 85 },
      { yearMonth: "2024-06", source: "carbonCapture", emissions: 72 },
      { yearMonth: "2024-07", source: "wasteManagement", emissions: 118 },
    ],
  },
  {
    id: "c2",
    name: "Globex",
    country: "DE",
    emissions: [
      { yearMonth: "2024-01", source: "gasoline", emissions: 82 },
      { yearMonth: "2024-02", source: "diesel", emissions: 107 },
      { yearMonth: "2024-03", source: "lpg", emissions: 116 },
      { yearMonth: "2024-04", source: "etc", emissions: 79 },
      { yearMonth: "2024-05", source: "renewable", emissions: 95 },
      { yearMonth: "2024-06", source: "carbonCapture", emissions: 77 },
      { yearMonth: "2024-07", source: "wasteManagement", emissions: 111 },
    ],
  },
  {
    id: "c3",
    name: "EcoCarbon",
    country: "JP",
    emissions: [
      { yearMonth: "2024-01", source: "gasoline", emissions: 105 },
      { yearMonth: "2024-02", source: "diesel", emissions: 119 },
      { yearMonth: "2024-03", source: "lpg", emissions: 91 },
      { yearMonth: "2024-04", source: "etc", emissions: 87 },
      { yearMonth: "2024-05", source: "renewable", emissions: 113 },
      { yearMonth: "2024-06", source: "carbonCapture", emissions: 84 },
      { yearMonth: "2024-07", source: "wasteManagement", emissions: 71 },
    ],
  },
  {
    id: "c4",
    name: "Zero",
    country: "KR",
    emissions: [
      { yearMonth: "2024-01", source: "gasoline", emissions: 121 },
      { yearMonth: "2024-02", source: "diesel", emissions: 118 },
      { yearMonth: "2024-03", source: "lpg", emissions: 85 },
      { yearMonth: "2024-04", source: "etc", emissions: 93 },
      { yearMonth: "2024-05", source: "renewable", emissions: 74 },
      { yearMonth: "2024-06", source: "carbonCapture", emissions: 120 },
      { yearMonth: "2024-07", source: "wasteManagement", emissions: 89 },
    ],
  },
  {
    id: "c5",
    name: "Green",
    country: "FR",
    emissions: [
      { yearMonth: "2024-01", source: "gasoline", emissions: 95 },
      { yearMonth: "2024-02", source: "diesel", emissions: 102 },
      { yearMonth: "2024-03", source: "lpg", emissions: 117 },
      { yearMonth: "2024-04", source: "etc", emissions: 72 },
      { yearMonth: "2024-05", source: "renewable", emissions: 82 },
      { yearMonth: "2024-06", source: "carbonCapture", emissions: 107 },
      { yearMonth: "2024-07", source: "wasteManagement", emissions: 93 },
    ],
  },
  {
    id: "c6",
    name: "Solaris Energy",
    country: "ES",
    emissions: [
      { yearMonth: "2024-01", source: "gasoline", emissions: 88 },
      { yearMonth: "2024-02", source: "diesel", emissions: 97 },
      { yearMonth: "2024-03", source: "lpg", emissions: 90 },
      { yearMonth: "2024-04", source: "etc", emissions: 85 },
      { yearMonth: "2024-05", source: "renewable", emissions: 120 },
      { yearMonth: "2024-06", source: "carbonCapture", emissions: 98 },
      { yearMonth: "2024-07", source: "wasteManagement", emissions: 87 },
    ],
  },
  {
    id: "c7",
    name: "Renewables",
    country: "SE",
    emissions: [
      { yearMonth: "2024-01", source: "gasoline", emissions: 79 },
      { yearMonth: "2024-02", source: "diesel", emissions: 83 },
      { yearMonth: "2024-03", source: "lpg", emissions: 88 },
      { yearMonth: "2024-04", source: "etc", emissions: 91 },
      { yearMonth: "2024-05", source: "renewable", emissions: 125 },
      { yearMonth: "2024-06", source: "carbonCapture", emissions: 99 },
      { yearMonth: "2024-07", source: "wasteManagement", emissions: 92 },
    ],
  },
  {
    id: "c8",
    name: "TerraFuture",
    country: "BR",
    emissions: [
      { yearMonth: "2024-01", source: "gasoline", emissions: 112 },
      { yearMonth: "2024-02", source: "diesel", emissions: 105 },
      { yearMonth: "2024-03", source: "lpg", emissions: 101 },
      { yearMonth: "2024-04", source: "etc", emissions: 94 },
      { yearMonth: "2024-05", source: "renewable", emissions: 118 },
      { yearMonth: "2024-06", source: "carbonCapture", emissions: 110 },
      { yearMonth: "2024-07", source: "wasteManagement", emissions: 97 },
    ],
  },
];

export const posts: Post[] = [
  {
    id: "p1",
    title: "Acme Corp Report",
    resourceUid: "c1",
    dateTime: "2024-01",
    content: "Quarterly CO2 update"
  },
  {
    id: "p2",
    title: "Globex Report",
    resourceUid: "c2",
    dateTime: "2024-02",
    content: "Quarterly CO2 update"
  },
  {
    id: "p3",
    title: "EcoCarbon Report",
    resourceUid: "c3",
    dateTime: "2024-03",
    content: "Quarterly CO2 update"
  },
  {
    id: "p4",
    title: "Zero Report",
    resourceUid: "c4",
    dateTime: "2024-04",
    content: "Quarterly CO2 update"
  },
  {
    id: "p5",
    title: "Green Report",
    resourceUid: "c5",
    dateTime: "2024-05",
    content: "Quarterly CO2 update"
  },
];