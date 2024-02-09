"use client";
import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  CiHome,
  CiEdit,
  CiViewList,
  CiLogout,
  CiCircleChevRight,
  CiCircleChevLeft,
  CiWavePulse1,
} from "react-icons/ci";
import NextLink from "next/link";

type Props = {
  text: string;
};

const SideMenu = (props: Props) => {
  let sideNavMenuRef = useRef<HTMLInputElement>(null);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [sidebarAnimate, setSidebarAnimate] = useState("");
  const [navMenuTrigger, setNavMenuTrigger] = useState(false);
  let myuuid = uuidv4();
  const menuLinks = ["/", "analytics", "profile", "settings", "/"];
  const menuLinksTranslations = [
    "Home",
    "Analytics",
    "Profile",
    "Settings",
    "Sign Out",
  ];
  const MenuLinkIcons = [
    <CiHome key={uuidv4()} className="dashApp__UI__utility__icon" />,
    <CiWavePulse1 key={uuidv4()} className="dashApp__UI__utility__icon" />,
    <CiEdit key={uuidv4()} className="dashApp__UI__utility__icon" />,
    <CiViewList key={uuidv4()} className="dashApp__UI__utility__icon" />,

    <CiLogout
      // onClick={() => (session ? signOut() : signIn())}
      key={uuidv4()}
      className="dashApp__UI__utility__icon"
    />,
  ];

  const handleSidebarToggle = (text: string) => {
    setSidebarVisible((sidebarVisible) => !sidebarVisible);
    {
      !sidebarVisible
        ? (setSidebarAnimate("dashApp__UI__sidebar__active"),
          setNavMenuTrigger(true))
        : (setSidebarAnimate(""), setNavMenuTrigger(false));

      {
        // text === "Sign Out" ? signOut() : null;
      }
    }
  };
  const handleSidebarExit = () => {
    {
      sidebarVisible &&
        (setSidebarVisible(false),
        setNavMenuTrigger(false),
        setSidebarAnimate(""));
    }
  };

  useEffect(() => {
    const navMenuTarget = sideNavMenuRef.current as any;
    let handleExitNavMenu = (e: any) => {
      if (!navMenuTarget.contains(e.target)) {
        setSidebarAnimate("");
        // set timeout for animation to phase out state
        setNavMenuTrigger(false);
        setSidebarVisible(false);
      }
    };
    document.addEventListener("mousedown", handleExitNavMenu);

    return () => {
      document.removeEventListener("mousedown", handleExitNavMenu);
    };
  });

  return (
    <>
      <div>
        <nav
          className={` dashApp__UI__sidebar ${sidebarAnimate}`}
          ref={sideNavMenuRef}
        >
          <button
            role="button"
            aria-pressed={navMenuTrigger}
            className="dashApp__UI__sidebar__toggler"
            onClick={(event: React.MouseEvent<HTMLElement>) =>
              handleSidebarToggle
            }
          >
            {sidebarVisible ? (
              <>
                {" "}
                <CiCircleChevRight className="dashApp__UI__utility__icon" />{" "}
                {!navMenuTrigger}
              </>
            ) : (
              <>
                <CiCircleChevLeft className="dashApp__UI__utility__icon" />{" "}
                {navMenuTrigger}
              </>
            )}
          </button>

          <ul
            className="dashApp__UI__sidebar__navList"
            role="Site Navigation List"
          >
            {menuLinksTranslations.map((text: string, index: number) => (
              <li
                key={text}
                className="dashApp__UI__sidebar__navList__item"
                role="Site Navigation List Item"
              >
                <NextLink
                  className="dashApp__UI__sidebar__navList__item__link"
                  href={`/dashboard/${menuLinks[index]}`}
                  aria-label={text}
                  title={text}
                  onClick={handleSidebarExit}
                >
                  <button
                    role="button"
                    className="dashApp__UI__sidebar__navList__item__button"
                    aria-pressed="false"
                  >
                    {MenuLinkIcons[index]}{" "}
                  </button>
                  <div className="dashApp__UI__sidebar__navList__item__copy">
                    {menuLinksTranslations[index]}{" "}
                  </div>
                </NextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SideMenu;
