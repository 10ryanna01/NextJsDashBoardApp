"use client";
import React, { useRef, useEffect } from "react";
import { themeStyleA } from "@/app/components/DataChart/Themes";
import { Chart, registerables } from "chart.js";
import { months } from "@/app/helper/Util";
import { ChartConfiguration } from "chart.js";
const DataChart = (props: ChartConfiguration) => {
  let chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const { data, options } = props;
    const labels = months({ count: 7 });
    if (chartRef.current) {
      const chart = new Chart(chartRef.current, {
        ...props,
        options: {
          ...options,
          ...themeStyleA,
        },
      });
      return () => {
        chart.destroy();
      };
    }
  }, [props]);

  return (
    <>
      <canvas ref={chartRef} className="dashApp__UI__utility__d-flex-col" />
    </>
  );
};
Chart.register(...registerables);
export default DataChart;
