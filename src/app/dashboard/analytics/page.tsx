import React from "react";
import DataTable from "@/app/components/DataTable/DataTable";

type Props = {};

const Analytics = (props: Props) => {
  return (
    <>
      <h2 className="dashApp__UI__utility__page__title">customer data</h2>

      <DataTable />
    </>
  );
};

export default Analytics;
