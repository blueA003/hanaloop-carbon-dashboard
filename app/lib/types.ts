// 회사 데이터
export type Company = {
  id: string;
  name: string;
  country: Country["code"];     // Country.code
  emissions: GhgEmission[];
}

// 배출량 데이터
export type GhgEmission  = {
  yearMonth: string;   // "2025-01", "2025-02"...
  source: string;      // "gasoline", "lpg", "diesel"
  emissions: number;   // tons of CO2 equivalent
}

// 게시물
export type Post = {
  id: string;
  title: string;
  resourceUid: string; // Company.id ?
  dateTime: string;    // e.g., "2024-02"
  content: string;
}

export type Country = {
  code: string;
  name: string;
}