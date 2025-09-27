"use client";

import { TfiAlignLeft } from "react-icons/tfi";
interface HeaderProps {
  setSidebarOpen: () => void;
}

export default function Header({ setSidebarOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 flex gap-6 items-center bg-white px-6 py-4 font-bold text-xl border z-50">
      <button onClick={setSidebarOpen}>
        <TfiAlignLeft />
      </button>
      Carbon Emissions
    </header>
  );
}