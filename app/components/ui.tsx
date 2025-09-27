"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import EmissionLineChart from "./Charts/EmissionLineChart";
import EmissionPieChart from "./Charts/EmissionPieChart";
import { Company } from "../lib/types";
import { fetchCompanies } from "../lib/api";
import TotalEmissionsCard from "./TotalEmissionsCard";
import Header from "./Header";
import Posts from "./post/Posts";
import CountryBarChart from "./Charts/CountryBarChart";

export default function UI() {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectId, setSelectId] = useState<string | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    fetchCompanies()
      .then((data) => {
        setCompanies(data);
        if (data.length > 0) setSelectId(data[0].id);
      })
      .catch(() => setError("회사 데이터를 불러오는 데 실패했습니다."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-400 border"></div>
        <span className="ml-3 text-blue-400 font-semibold text-lg">
          Loading data...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-md">
          <strong className="font-bold">Error: </strong>
          <span>{error}</span>
        </div>
      </div>
    );
  }

  if (!selectId) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600 font-medium">
        데이터 없음
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      <Header setSidebarOpen={() => setSidebarOpen((prev) => !prev)} />
      <Sidebar
        companies={companies}
        setSelectId={setSelectId}
        isOpen={sidebarOpen}
      />
      <main
        className={`flex-1 bg-gray-50 pt-20 px-6 transition-all duration-200 ${
          sidebarOpen ? "ml-64" : "ml-0"
        }`}
      >
        <div className="font-semibold text-sky-600 text-3xl">
          Carbon Emissions Dashboard
        </div>
        <div>
          <div className="flex gap-4 pt-6">
            <TotalEmissionsCard companyId={selectId} companies={companies} />
            <CountryBarChart companies={companies} />
            <Posts />
          </div>
          <div className="flex gap-4 pt-6">
            <EmissionLineChart companyId={selectId} companies={companies} />
            <EmissionPieChart companyId={selectId} companies={companies} />
          </div>
        </div>
      </main>
    </div>
  );
}
