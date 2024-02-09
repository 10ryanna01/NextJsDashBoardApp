"use client";
import React, { useMemo, useState, useEffect, useRef } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import Link from "next/link";
import USER_DATA from "./customerdata.json";
import { COLUMNS } from "./ColumnHeaders";
import { v4 } from "uuid";

import {
  CiCircleChevDown,
  CiCircleChevUp,
  CiSquareChevLeft,
  CiSquareChevRight,
} from "react-icons/ci";
type Props = {};

const DataTable = (props: Props) => {
  let dropDownRef = useRef<HTMLInputElement>(null);
  const [dropDownList, setDropDownList] = useState(false);
  const [animateDropdown, setAnimateDropdown] = useState("");
  const uuid = require("uuid").v4;
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => USER_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    pageOptions,
    state,
    canNextPage,
    canPreviousPage,
  } = useTable(
    {
      //@ts-ignore
      columns,
      data,
      //   set start point in page skip for pagination
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  );

  const handlePageSkip = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const eventTarget = e.target.value;
    const pageNumber = eventTarget ? Number(eventTarget) - 1 : 0;
    gotoPage(pageNumber);
  };

  const { pageIndex, pageSize } = state;

  const handlePageSizeOption = (
    e: React.MouseEvent<Element, MouseEvent>
  ): void => {
    setPageSize(Number((e.target as HTMLTextAreaElement).value));
  };

  const pageJumpAmount = [10, 25, 50];

  const handleDropdown = () => {
    setDropDownList((dropDownList) => !dropDownList);

    setAnimateDropdown(
      " animate__animated  animate__bounceIn   animate__faster "
    );
  };

  useEffect(() => {
    const dropDownTarget = dropDownRef.current as any;
    let handleExitDropdown = (e: any) => {
      if (!dropDownTarget.contains(e.target)) {
        setAnimateDropdown(
          "animate__animated  animate__bounceOut   animate__faster   "
        );

        // set timeout  delay for animation to phase out state
        const timer = setTimeout(() => {
          setDropDownList(false);
        }, 330);

        return () => clearTimeout(timer);
      }
    };
    document.addEventListener("mousedown", handleExitDropdown);

    return () => {
      document.removeEventListener("mousedown", handleExitDropdown);
    };
  });

  return (
    <>
      <div className="dashApp__UI__responsive-table">
        <table {...getTableProps()} tabIndex={1}>
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={v4()}
                  >
                    <>
                      {column.render("Header")}

                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <CiCircleChevDown className="dashApp__UI__utility__sort__icon" />
                        ) : (
                          <CiCircleChevUp className="dashApp__UI__utility__sort__icon" />
                        )
                      ) : (
                        ""
                      )}
                    </>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={v4()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()} key={v4()}>
                        <> {cell.render("Cell")} </>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="dashApp__UI__responsive-table__footer">
          <div className="dashApp__UI__form__paginate-button-group">
            <button
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
              className="dashApp__UI__form__paginate-button-group__button--text"
            >
              first
            </button>
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              className="dashApp__UI__form__paginate-button-group__button"
            >
              <CiSquareChevLeft className="dashApp__UI__utility__icon" />
            </button>

            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className="dashApp__UI__form__paginate-button-group__button"
            >
              <CiSquareChevRight className="dashApp__UI__utility__icon" />
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={canPreviousPage}
              className="dashApp__UI__form__paginate-button-group__button--text"
            >
              last
            </button>

            <Link
              className="dashApp__UI__form__dropdown"
              href="#/"
              tabIndex={1}
              onClick={handleDropdown}
              aria-pressed={dropDownList}
            >
              <span className={``} ref={dropDownRef}>
                show {pageSize} rows
                {dropDownList ? (
                  <CiCircleChevUp className="dashApp__UI__form__dropdown__icon" />
                ) : (
                  <CiCircleChevDown className="dashApp__UI__form__dropdown__icon" />
                )}
                <ul
                  className={`dashApp__UI__form__dropdown__list  ${
                    dropDownList ? "" : "dashApp__UI__utility__border--off"
                  } ${animateDropdown} `}
                  aria-hidden={!dropDownList}
                >
                  {dropDownList ? (
                    <span className="dashApp__UI__utility__no-overflow">
                      {pageJumpAmount.map((pageSize) => (
                        <button
                          className={`dashApp__UI__form__dropdown__item `}
                          key={v4()}
                          value={pageSize}
                          tabIndex={2}
                          onClick={handlePageSizeOption}
                        >
                          show {pageSize} rows
                        </button>
                      ))}
                    </span>
                  ) : null}
                </ul>
              </span>
            </Link>
          </div>

          <div className="dashApp__UI__responsive-table__footer__pagination">
            <div className="dashApp__UI__form__gotopage">
              <label
                htmlFor="inputJumpToPage"
                className="dashApp__UI__form__gotopage__label"
              >
                go to page:
              </label>
              <input
                type="number"
                id="inputJumpToPage"
                className="dashApp__UI__form__gotopage__number"
                defaultValue={pageIndex + 1}
                onChange={handlePageSkip}
              />
            </div>

            <div className="dashApp__UI__responsive-table__footer__pagenumber">
              <span className="dashApp__UI__responsive-table__footer__pagenumber__copy">
                {" "}
                page {pageIndex + 1} of {pageOptions.length}{" "}
              </span>
            </div>
          </div>
        </div>
        {/* close footer */}
      </div>
    </>
  );
};

export default DataTable;
