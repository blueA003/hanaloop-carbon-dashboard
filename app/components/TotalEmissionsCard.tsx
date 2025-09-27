import { Company } from "../lib/types";

interface Props {
  companyId: string;
  companies: Company[];
}

export default function TotalEmissionsCard({ companyId, companies }: Props) {
  const company = companies.find((c) => c.id === companyId);
  if (!company)
    return (
      <div className="flex items-center justify-center h-40 bg-gray-100 rounded-lg text-gray-500">
        데이터 없음
      </div>
    );

  const total = company.emissions.reduce((sum, e) => sum + e.emissions, 0);
  const target = 700;
  const percentage = ((total / target) * 100).toFixed(2);

  const totalEmissionsTax = total * 75;
  const month = company.emissions.length;
  const projectedAnnualEmissions = (total / month * 12).toFixed(2);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div>
        <div className="text-2xl font-bold pb-1">Total Emissions</div>
        <div className="text-4xl font-bold text-gray-900">
          {total.toLocaleString()} <span className="text-lg">tCO2eq</span>
        </div>
        <div className="text-sm text-gray-600 pt-2">
          목표치 {target.toLocaleString()} 대비{" "}
          <span className="text-red-500 font-semibold">{percentage}% 배출</span>
        </div>
        <div className="text-xl font-bold pt-4 pb-1">Estimated Carbon Tax</div>
        <div className="text-4xl font-bold text-gray-900">
          ${totalEmissionsTax.toLocaleString()}
        </div>
        <div className="text-xl font-bold pt-4 pb-1">Year-End Projection</div>
        <div className="text-4xl font-bold text-gray-900 ">
          {projectedAnnualEmissions} <span className="text-lg">tCO2eq</span>
        </div>
      </div>
    </div>
  );
}
