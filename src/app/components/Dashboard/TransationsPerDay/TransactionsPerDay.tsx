import DataChart from "@/app/components/DataChart/DataChart";
import { lineChartData } from "@/app/components/mockData";

import React from "react";

export type TransactionsCardType = {
  title: string;
  value: string;
  changeValue: string;
};

export type TransactionsPerDayProps = {
  data?: TransactionsCardType;
};

const TransactionsPerDay = (props: TransactionsPerDayProps) => {
  const { data } = props;

  return (
    <>
      <div className="dashApp__UI__utility__chartGrid">
        <div className="dashApp__UI__utility__chartGrid__itemA">
          <div className="dashApp__UI__chartcards">
            <div className="dashApp__UI__chartcards__item">
              <h2 className="dashApp__UI__chartcards__item__title">
                transactions per day{" "}
              </h2>

              <DataChart type={"line"} data={lineChartData} />
            </div>
          </div>
        </div>

        <div className="dashApp__UI__utility__chartGrid__itemB ">
          <div className="dashApp__UI__chartcards dashApp__UI__utility__p-left__desktop">
            <div className="dashApp__UI__chartcards__item  ">
              <h2 className="dashApp__UI__chartcards__item__title">
                total products
              </h2>
              <h4 className="dashApp__UI__chartcards__item__subtitle">1.275</h4>
              <h5 className="dashApp__UI__chartcards__item__highlight">
                438.7%
              </h5>
            </div>

            <div className="dashApp__UI__chartcards__item">
              <h2 className="dashApp__UI__chartcards__item__title">
                buy-to-detail
              </h2>
              <h4 className="dashApp__UI__chartcards__item__subtitle">8.8%</h4>
              <h5 className="dashApp__UI__chartcards__item__highlight">
                877.6%
              </h5>
            </div>
            <div className="dashApp__UI__chartcards__item">
              <h2 className="dashApp__UI__chartcards__item__title">refunds</h2>
              <h4 className="dashApp__UI__chartcards__item__subtitle">12</h4>
              <h5 className="dashApp__UI__chartcards__item__highlight">4</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionsPerDay;
