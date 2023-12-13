import type { NextPage } from "next";
import { BuyTokens } from "~~/components/BuyTokens";
// import { useState } from "react";
// useEffect,
// import Image from "next/image";
// import Link from "next/link";
// import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";
import { OverviewSection } from "~~/components/OverviewSection";
import { AdminPanel } from "~~/components/admin/AdminPanel";
import { MaintenanceExplorer } from "~~/components/maintenance/MaintenanceExplorer";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <OverviewSection />
      <MaintenanceExplorer />
      <AdminPanel />
      <BuyTokens />
    </>
  );
};

export default Home;
