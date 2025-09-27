"use client";

import { Company } from "../../lib/types";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  companies: Company[];
}

export default function CountryBarChart({ companies }: Props) {
  if (!companies || companies.length === 0) {
    return (
      <div className="flex items-center justify-center h-40 bg-gray-100 rounded-lg text-gray-500">
        데이터 없음
      </div>
    );
  }

  const data = companies.map((c) => ({
    country: c.country,
    total: c.emissions.reduce((sum, e) => sum + e.emissions, 0),
  }));

  return (
    <div className="flex-1 bg-white rounded-lg shadow p-6 pb-12">
      <div className="text-2xl font-bold pb-2">Total Emissions by Country</div>
      <ResponsiveContainer width="100%">
        <BarChart data={data}>
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
