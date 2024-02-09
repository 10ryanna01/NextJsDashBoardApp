"use client";

import React, { useState, useRef, useEffect } from "react";
import { CiCircleQuestion } from "react-icons/ci";
export type DataCardProps = {
  title: string;
  value: string;
  description: string;
};

const DataCard = (props: DataCardProps) => {
  const { title, value, description } = props;
  const [dataCardToolTip, setDataCardToolTip] = useState(false);
  const [animateItem, setAnimateItem] = useState("");
  const toolTipRef = useRef(null);

  const handleShowToolTip = () => {
    setDataCardToolTip(true);
    setAnimateItem("   animate__animated animate__fadeIn");
  };

  useEffect(() => {
    const toolTipTarget = toolTipRef.current as any;
    let handleExitNavMenu = (e: any) => {
      if (!toolTipTarget.contains(e.target)) {
        // setSidebarAnimate("");

        setDataCardToolTip(false);
      }
    };
    document.addEventListener("mousedown", handleExitNavMenu);

    return () => {
      document.removeEventListener("mousedown", handleExitNavMenu);
    };
  });

  return (
    <div className="dashApp__UI__datacard">
      <div className="dashApp__UI__datacard__header">
        <h3 className="dashApp__UI__datacard__title"> {title} </h3>

        <div className="dashApp__UI__datacard__tooltip" ref={toolTipRef}>
          <button
            className="dashApp__UI__datacard__tooltip__button "
            onClick={handleShowToolTip}
            aria-pressed={dataCardToolTip}
          >
            <CiCircleQuestion className="dashApp__UI__utility__icon" />
          </button>

          {dataCardToolTip ? (
            <div className={`${animateItem}`}>
              <span
                className={`dashApp__UI__datacard__tooltip__info `}
                aria-hidden={dataCardToolTip}
              >
                {" "}
                {description} is ${value}{" "}
              </span>{" "}
            </div>
          ) : null}
        </div>
      </div>
      <div className="dashApp__UI__datacard__footer">
        <h3 className="dashApp__UI__datacard__data"> ${value}</h3>
      </div>
    </div>
  );
};

export default DataCard;
