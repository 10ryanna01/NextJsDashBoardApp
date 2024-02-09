import React from "react";
import Link from 'next/link'
type Props = {};

const Settings = (props: Props) => {
  return (
    <>
      <h2 className="dashApp__UI__utility__page__title">Account Settings</h2>

      <form className="dashApp__UI__form">
        <div className="dashApp__UI__form__row">

          <ul className="dashApp__UI__utility__list__wrapper">
   <li className="dashApp__UI__utility__list__wrapper__item"><button className="dashApp__UI__utility__primary-button"> deactivate account</button></li>
   <li className="dashApp__UI__utility__list__wrapper__item"><Link href="#/">  <button className="dashApp__UI__utility__secondary-button">get support</button> </Link></li>
    <li className="dashApp__UI__utility__list__wrapper__item"><button className="dashApp__UI__utility__danger-button"> delete account</button></li>
          </ul>
        </div>
      </form>
    </>
  );
};

export default Settings;
