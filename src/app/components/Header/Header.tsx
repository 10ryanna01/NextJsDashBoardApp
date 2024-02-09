"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { CiUser, CiSettings } from "react-icons/ci";
import { MdDashboard, MdAccountCircle } from "react-icons/md";

const Header = () => {
  let profileMenuRef = useRef<HTMLInputElement>(null);
  const [showElement, setShowElement] = useState(true);
  const [profileMenuTrigger, setProfileMenuTrigger] = useState(false);
  const [animateItem, setAnimateItem] = useState("");

  const sandboxUser = "Generic Profile";

  const HandleProfileMenu = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setProfileMenuTrigger(!profileMenuTrigger);
    setAnimateItem("   animate__animated animate__bounceIn animate__faster");
    console.log(" phasing out state after animation ");
  };

  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 3000);
  }, []);
  useEffect(() => {
    const profileMenuTarget = profileMenuRef.current as any;
    let handleExitMenu = (e: any) => {
      if (!profileMenuTarget.contains(e.target)) {
        setAnimateItem("animate__animated animate__bounceOut animate__faster");
        // set timeout  delay for animation to phase out state
        const timer = setTimeout(() => {
          setProfileMenuTrigger(false);
        }, 500);
        return () => clearTimeout(timer);
      }
    };
    document.addEventListener("mousedown", handleExitMenu);

    return () => {
      document.removeEventListener("mousedown", handleExitMenu);
    };
  });

  return (
    <div className="dashApp__UI__header">
      <div className="dashApp__UI__header__logo">
        <MdDashboard />{" "}
      </div>
      <div className="dashApp__UI__utility__offset__40px">
        <h1 className="dashApp__UI__utility__copy__h1">
          TechData Inc. Dashboard{" "}
        </h1>
        {/* {session && (
          <>
            {" "}
            {showElement ? (
              <h3 className="dashApp__UI__utility__copy__body">
                thanks for logging in{" "}
              </h3>
            ) : null}
          </>
        )} */}
      </div>
      {/* nav menu split appart to component */}{" "}
      <div className="dashApp__UI__header__profile">
        <div ref={profileMenuRef}>
          <button
            className="dashApp__UI__header__profile__button"
            onClick={HandleProfileMenu}
            disabled={profileMenuTrigger}
            aria-pressed={profileMenuTrigger}
          >
            <CiSettings className="dashApp__UI__utility__icon" />
            {/* {session ? (
              <CiUser className="dashApp__UI__utility__icon" />
            ) : (
              <CiSettings className="dashApp__UI__utility__icon" />
            )} */}
          </button>
          {profileMenuTrigger ? (
            <>
              <nav
                aria-hidden={!profileMenuTrigger}
                className={`dashApp__UI__header__profile__nav ${animateItem}`}
              >
                <ul className="dashApp__UI__header__profile__nav__list">
                  <li className="dashApp__UI__header__profile__nav__item">
                    <p className="dashApp__UI__utility__copy__body">
                      {/* {session ? (
                        <>{session?.user?.email}</>
                      ) : (
                        <>not signed in</>
                      )} */}
                    </p>
                  </li>

                  <li className="dashApp__UI__header__profile__nav__list__item">
                    <Link
                      className="dashApp__UI__header__profile__nav__list__item__link"
                      href="/"
                    >
                      settings
                    </Link>
                  </li>
                  <li className="dashApp__UI__header__profile__nav__item">
                    <Link
                      className="dashApp__UI__header__profile__nav__list__item__link"
                      href="/#"
                    >
                      about
                    </Link>
                  </li>
                  <li className="dashApp__UI__header__profile__nav__item">
                    <button
                      className="dashApp__UI__utility__primary-button"
                      // onClick={() => (session ? signOut() : signIn())}
                    >
                      {/* {session ? "Logout" : "Login"} */}
                      Sign in
                    </button>
                  </li>
                </ul>
              </nav>
            </>
          ) : null}
        </div>
        <p className=" dashApp__UI__utility__signin__copy ">
          {/* {session ? (
            <>
          
              <span> {session?.user?.email}</span>
            </>
          ) : 
          
          null} */}
        </p>
      </div>
      {/* end  nav menu split appart to component */}
    </div>
  );
};

export default Header;
