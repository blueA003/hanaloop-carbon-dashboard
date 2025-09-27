"use client";

import { Company } from "../../lib/types";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

interface Props {
  companyId: string;
  companies: Company[];
}

const COLORS = [
  "#99f6e4",
  "#5eead4",
  "#34d399",
  "#15803d",
  "#3b82f6",
  "#1d4ed8",
  "#1e3a8a",
];

export default function EmissionPieChart({ companyId, companies }: Props) {
  const company = companies.find((c) => c.id === companyId);
  if (!company)
    return (
      <div className="flex items-center justify-center h-40 bg-gray-100 rounded-lg text-gray-500">
        데이터 없음
      </div>
    );

  const data = company.emissions.map((e) => ({
    name: e.source,
    value: e.emissions,
  }));

  return (
    <div className="bg-white flex-[1] rounded-lg shadow border h-[25rem] p-6 pb-14">
      <div className="text-2xl font-bold">{company.name} Emissions by Source</div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart tabIndex={-1}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="7.5rem"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
