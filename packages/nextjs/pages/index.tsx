import { useEffect, useState } from "react";
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

// TODO:
// NEXT_BACKEND_URL=...
const URL = "http://localhost:8080";
const PATH_TKN_ADDR = "/token-contract-address";
const PATH_TKN_ABI = "/token-contract-abi";
const PATH_TRK_ADDR = "/tracker-contract-address";
const PATH_TKR_ABI = "/tracker-contract-abi";

const Home: NextPage = () => {
  const [isLoading, setLoading] = useState(true);

  const [tokenContractAddress, setTokenContractAddress] = useState("");
  const [tokenContractAbi, setTokenContractAbi] = useState([]);
  const [trackerContractAddress, setTrackerContractAddress] = useState("");
  const [trackerContractAbi, setTrackerContractAbi] = useState([]);

  useEffect(() => {
    async function fetchAllAbisAndAddresses() {
      const dataTknAddr = await (await fetch(URL + PATH_TKN_ADDR)).json();
      const dataTknAdi = await (await fetch(URL + PATH_TKN_ABI)).json();
      const dataTrkAddr = await (await fetch(URL + PATH_TRK_ADDR)).json();
      const dataTrlAbi = await (await fetch(URL + PATH_TKR_ABI)).json();
      const data = {
        tokenContractAddress: dataTknAddr.result,
        tokenContractAbi: dataTknAdi.result,
        trackerContractAddress: dataTrkAddr.result,
        trackerContractAbi: dataTrlAbi.result,
      };
      return data;
    }
    fetchAllAbisAndAddresses().then(data => {
      setTokenContractAddress(data.tokenContractAddress);
      setTokenContractAbi(data.tokenContractAbi);
      setTrackerContractAddress(data.trackerContractAddress);
      setTrackerContractAbi(data.trackerContractAbi);
      setLoading(false);
    });
  }, []);

  if (isLoading) return <div className="col-md-12 text-center">Loading...</div>;
  // if (!data) return <p>Content</p>;

  return (
    <>
      <MetaHeader />
      <OverviewSection />
      <MaintenanceExplorer />
      {trackerContractAddress && trackerContractAbi.length && (
        <AdminPanel trackerContractAddress={trackerContractAddress} trackerContractAbi={trackerContractAbi} />
      )}
      {trackerContractAddress && trackerContractAbi.length && tokenContractAddress && tokenContractAbi.length && (
        <BuyTokens
          trackerContractAddress={trackerContractAddress}
          trackerContractAbi={trackerContractAbi}
          tokenContractAddress={tokenContractAddress}
          tokenContractAbi={tokenContractAbi}
        />
      )}
    </>
  );
};

export default Home;
