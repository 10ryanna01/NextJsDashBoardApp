import DataRibbon from "@/app/components/Dashboard/DataRibbon/DataRibbon";
import TransactionsRow from "@/app/components/Dashboard/TransactionsRow/TransactionsRow";
import TransactionsPerDay from "@/app/components/Dashboard/TransationsPerDay/TransactionsPerDay";
import Link from "next/link";
import React from "react";

type Props = {};

const Dashboard = (props: Props) => {
  // TODOS
  // data tabs -- shows data statistics independently of charts
  // graph -- graph displaying data in tabs
  // alternate graph displaying the data in a different way

  return (
    <>
      {/* <Link href="/dashboard/profile">link to profile</Link> */}
      <DataRibbon />
      <TransactionsPerDay />
      <TransactionsRow />
    </>
  );
};

export default Dashboard;
