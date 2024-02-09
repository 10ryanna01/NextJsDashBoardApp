import React from "react";
import {
  doughnutChartData,
  doughnutChartDataB,
  doughnutChartDataC,
  polarChartData,
  hBartData,
} from "@/app/components/mockData";
import DataChart from "@/app/components/DataChart/DataChart";
type Props = {};

const TransactionsRow = (props: Props) => {
  return (
    <>
      <div className="dashApp__UI__utility__grid--x2">
        <div className="dashApp__UI__utility__grid--x2__itemA">
          <h2 className="dashApp__UI__utility__grid--x2__title">
            {" "}
            national customer statistics{" "}
          </h2>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </div>
        <div className="dashApp__UI__utility__grid--x2__itemB">
          <h2 className="dashApp__UI__utility__grid--x2__title">
            advertising spend budget{" "}
          </h2>
          <DataChart type={"polarArea"} data={polarChartData} />
        </div>
        <div className="dashApp__UI__utility__grid--x2__itemC">
          <h2 className="dashApp__UI__utility__grid--x2__title">
            market capture{" "}
          </h2>
          <DataChart
            type={"bar"}
            data={hBartData}
            options={{ indexAxis: "y", aspectRatio: 1 }}
          />
        </div>
      </div>
    </>
  );
};

export default TransactionsRow;
