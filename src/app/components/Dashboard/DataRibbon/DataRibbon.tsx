import React from "react";
import DataCard from "../DataCard/DataCard";
import TransactionsPerDay from "../TransationsPerDay/TransactionsPerDay";

type Props = {};

const DataRibbon = (props: Props) => {
  return (
    <>
      <div className="dashApp__UI__utility__grid">
        <div className="dashApp__UI__utility__grid__itemA">
          {" "}
          <DataCard
            title={"total sales"}
            value={"480"}
            description={"Totals of TechData products in current financial year"
            }
          />{" "}
        </div>
        <div className="dashApp__UI__utility__grid__itemB">
          {" "}
          <DataCard
            title={"conversion rate"}
            value={"22.52%"}
            description={"Conversion through sales"}
          />{" "}
        </div>
        <div className="dashApp__UI__utility__grid__itemC">
          {" "}
          <DataCard
            title={"Total value"}
            value={"260,400,53"}
            description={
              "The total value of TechData in the current financial year"
            }
          />
        </div>
        <div className="dashApp__UI__utility__grid__itemD">
          {" "}
          <DataCard
            title={"Avg. order value"}
            value={"120.16"}
            description={
              "Average order value of TechData products this year"
            }
          />
        </div>
        {/* <div className="dashApp__UI__utility__grid__footer">  <DataCard /> </div> */}
 
      </div>
    </>
  );
};

export default DataRibbon;
