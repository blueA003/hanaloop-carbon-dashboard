"use client";

import { Company } from "../lib/types";

interface SidebarProps {
  companies: Company[];
  setSelectId: React.Dispatch<React.SetStateAction<string | null>>;
  // setState의 타입은 React.Dispatch<React.SetStateAction<T>>으로 정리
  isOpen: boolean;
}

export default function Sidebar({ companies, setSelectId, isOpen }: SidebarProps) {
  return (
    <aside
      className={`fixed left-0 h-screen bg-emerald-600 p-4 
              transition-transform duration-200 ease-in-out z-20 w-64
              ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="font-semibold text-3xl mt-6 mb-6 pt-9 text-white">Companies</div>
      <ul>
        {companies.map((company) => (
          <li
            key={company.id}
            onClick={() => setSelectId(company.id)}
            className="text-white text-2xl ml-4 pl-4 mr-2 py-3 my-1 rounded-lg hover:bg-emerald-500 cursor-pointer"
          >
            {company.name}
            <span className="pl-1 text-sm text-white">{company.country}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
