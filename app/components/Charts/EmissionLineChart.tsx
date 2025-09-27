"use client";

import { Company } from "../../lib/types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  companyId: string;
  companies: Company[];
}

export default function EmissionLineChart({ companyId, companies }: Props) {
  const company = companies.find((c) => c.id === companyId);
  if (!company)
    return (
      <div className="flex items-center justify-center h-40 bg-gray-100 rounded-lg text-gray-500">
        데이터 없음
      </div>
    );

  const data = company.emissions.map((e) => ({
    month: e.yearMonth,
    emissions: e.emissions,
  }));

  return (
    <div className="bg-white flex-[2] rounded-lg shadow border h-[25rem] p-6 pb-10">
      <div className="text-2xl font-bold pb-2">{company.name} Monthly Emissions</div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 50, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="emissions"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
