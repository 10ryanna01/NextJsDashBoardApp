"use client";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CiCircleCheck } from "react-icons/ci";
// import Placeholder from "/react-select/dist/declarations/src/components/Placeholder";
type FormValues = {
  inputFirstName: string;
  inputLastName: string;
  inputEmail: string;
  inputConfirmEmail: string;
  inputJobPosition: string;
  inputDepartmentOptions: string;
};

const Profile = () => {
  const [useData, setUserData] = useState("");
  const [fNname, setFname] = useState("");
  const [lName, setLName] = useState("");
  const [emailAdd, setEmailAdd] = useState("");
  const [emailAddConfirm, setemailAddConfirm] = useState("");
  const [selectedDept, setselectedDept] = useState("");
  const [employPosition, setemployPosition] = useState("");
  const [iconCheck, setIconCheck] = useState(false);

  const [showSuccess, setshowSuccess] = useState("");

  const [cacheFormValues, setcacheFormValues] = useState({
    fNname: "",
    lName: "",
    emailAdd: "",
    emailAddConfirm: "",
    selectedDept: "",
    employPosition: "",
  });

  const departMentOptions = [
    "technology",
    "security",
    "marketing",
    "customer support",
    "accounting",
  ];

  let EMAIL_REGX = `/^(([^<>()\[\]\\.,;:\s@"]+(.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/`;

  const schema = yup.object({
    inputFirstName: yup
      .string()
      .min(3)
      .max(20)
      .required("* please enter a first name")
      .matches(
        /^[a-zA-Z ]+$/,
        "* this field cannot contain numers or special characters"
      ),

    inputLastName: yup
      .string()
      .min(3)
      .max(30)
      .required("please enter a last name")
      .matches(
        /^[a-zA-Z ]+$/,
        "* this field cannot contain numers or special characters"
      ),

    inputEmail: yup
      .string()
      .email(EMAIL_REGX)
      .required("* please enter a valid email address"),

    inputConfirmEmail: yup
      .string()
      .oneOf([yup.ref("inputEmail")], "* email addresses must be the same")
      .required(),

    inputJobPosition: yup.string().min(3).required("* please enter a job type"),
    inputDepartmentOptions: yup.string().required("* please choose an option"),
  });

  const form = useForm<FormValues>({
    defaultValues: {
      inputFirstName: "tom",
      inputLastName: "",
      inputEmail: "",
      inputConfirmEmail: "",
      inputJobPosition: "",
      inputDepartmentOptions: "",
    },
    mode: "all",
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, dirtyFields },
    trigger,
  } = form;

  const handleSendFormData = (data: FormValues) => {
    console.log(data);
    // send  back to API eg:  @  return axios.post("/api/profile details", data);
    console.log(
      "send  back to API @ return axios.post /api/profile details,  "
    );

    alert(JSON.stringify(data));
  };

  const handleFnameInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setcacheFormValues({ ...cacheFormValues, fNname: e.target.value });
    //  abillity to trigger other events on screen here if needed
  };

  useEffect(() => {
    const localProfileData = window.localStorage.getItem(
      "profile-inputed-data"
    ) as string;
    setcacheFormValues(JSON.parse(localProfileData));
  }, []);

  useEffect(() => {
    // console.log(selectedDept);
    console.log(cacheFormValues);
    //  cacheFormValues
    window.localStorage.setItem(
      "profile-inputed-data",
      JSON.stringify(cacheFormValues)
    );
  });

  return (
    <>
      <h2 className="dashApp__UI__utility__page__title">Edit Profile</h2>

      <form
        className="dashApp__UI__form"
        onSubmit={handleSubmit(handleSendFormData)}
      >
        <div className="dashApp__UI__form__row">
          <label htmlFor="inputFirstName" className="dashApp__UI__form__label">
            first name
          </label>
          <input
            type="text"
            id="inputFirstName"
            {...register("inputFirstName", { required: true })}
            value={cacheFormValues.fNname}
            className={`dashApp__UI__form__input-text ${
              !errors.inputFirstName || dirtyFields.inputFirstName
                ? " "
                : "dashApp__UI__form__fail animate__animated  animate__headShake animate__fast"
            } `}
            onChange={handleFnameInputChange}
          />

          {errors.inputFirstName && (
            <span
              className={`dashApp__UI__form__error ${
                errors.inputFirstName.message &&
                "dashApp__UI__form__fail animate__animated  animate__fadeIn "
              } `}
            >
              {errors.inputFirstName.message}
            </span>
          )}
        </div>
        <div className="dashApp__UI__form__row">
          <label htmlFor="inputLastName" className="dashApp__UI__form__label">
            last name
          </label>
          <input
            type="text"
            className={` dashApp__UI__form__input-text  ${
              !errors.inputLastName || dirtyFields.inputLastName
                ? "   "
                : "dashApp__UI__form__fail  animate__animated  animate__headShake animate__fast"
            } `}
            id="inputLastName"
            {...register("inputLastName", { required: true })}
            onChange={(e) =>
              setcacheFormValues({
                ...cacheFormValues,
                lName: e.target.value.trim(),
              })
            }
            value={cacheFormValues.lName}
          />
          {errors.inputLastName && (
            <span
              className={` dashApp__UI__form__error ${
                errors.inputLastName &&
                "dashApp__UI__form__fail animate__animated  animate__fadeIn "
              } `}
            >
              {errors.inputLastName.message}{" "}
            </span>
          )}
        </div>
        <div className="dashApp__UI__form__row">
          <label htmlFor="inputEmail" className="dashApp__UI__form__label">
            Email address
          </label>
          <input
            type="email"
            className={` dashApp__UI__form__input-text-email ${
              !errors.inputEmail || dirtyFields.inputEmail
                ? "   "
                : "dashApp__UI__form__fail  animate__animated  animate__headShake animate__fast"
            } `}
            id="inputEmail"
            {...register("inputEmail", { required: true })}
            onChange={(e) =>
              setcacheFormValues({
                ...cacheFormValues,
                emailAdd: e.target.value,
              })
            }
            value={cacheFormValues.emailAdd}
          />
          {errors.inputEmail && (
            <span
              className={` dashApp__UI__form__error ${
                errors.inputLastName &&
                "dashApp__UI__form__fail animate__animated  animate__fadeIn "
              } `}
            >
              {errors.inputEmail.message}
            </span>
          )}
        </div>

        <div className="dashApp__UI__form__row">
          <label
            htmlFor="inputConfirmEmail"
            className="dashApp__UI__form__label"
          >
            confirm Email address
          </label>
          <input
            type="email"
            className={` dashApp__UI__form__input-text-email  ${
              !errors.inputConfirmEmail || dirtyFields.inputConfirmEmail
                ? "   "
                : "dashApp__UI__form__fail  animate__animated  animate__headShake animate__fast"
            } `}
            id="inputConfirmEmail"
            {...register("inputConfirmEmail", { required: true })}
            onChange={(e) =>
              setcacheFormValues({
                ...cacheFormValues,
                emailAddConfirm: e.target.value,
              })
            }
            value={cacheFormValues.emailAddConfirm}
          />
          {errors.inputConfirmEmail && (
            <span
              className={` dashApp__UI__form__error ${
                errors.inputLastName &&
                "dashApp__UI__form__fail animate__animated  animate__fadeIn "
              } `}
            >
              {errors.inputConfirmEmail.message}
            </span>
          )}
        </div>

        <div className="dashApp__UI__form__row">
          <label
            htmlFor="inputJobPosition"
            className="dashApp__UI__form__label"
          >
            position
          </label>
          <input
            type="text"
            className={` dashApp__UI__form__input-text  ${
              !errors.inputJobPosition || dirtyFields.inputJobPosition
                ? "   "
                : "dashApp__UI__form__fail  animate__animated  animate__headShake animate__fast"
            } `}
            id="inputJobPosition"
            placeholder="eg: technology"
            {...register("inputJobPosition", { required: true })}
            onChange={(e) =>
              setcacheFormValues({
                ...cacheFormValues,
                employPosition: e.target.value.trim(),
              })
            }
            value={cacheFormValues.employPosition}
          />
          {errors.inputJobPosition && (
            <span
              className={` dashApp__UI__form__error ${
                errors.inputJobPosition &&
                "dashApp__UI__form__fail animate__animated  animate__fadeIn "
              } `}
            >
              {errors.inputJobPosition.message}
            </span>
          )}
        </div>
        <div className="dashApp__UI__form__row">
          <label
            htmlFor="inputDepartmentOptions"
            aria-label="select department"
            className="dashApp__UI__form__label"
          >
            select departnent
          </label>

          <select
            id="inputDepartmentOptions"
            className={` dashApp__UI__form__input-select  ${
              !errors.inputDepartmentOptions ||
              dirtyFields.inputDepartmentOptions
                ? "   "
                : "dashApp__UI__form__fail  animate__animated  animate__headShake animate__fast"
            } `}
            {...register("inputDepartmentOptions", { required: true })}
            onChange={(e) =>
              setcacheFormValues({
                ...cacheFormValues,
                selectedDept: e.target.value,
              })
            }
            value={cacheFormValues.selectedDept}
          >
            <option value="" defaultValue="please choose an option">
              please choose an option
            </option>
            {departMentOptions.map((opt, _indexDept) => (
              <option key={_indexDept} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.inputDepartmentOptions && (
            <span
              className={` dashApp__UI__form__error ${
                errors.inputDepartmentOptions &&
                "dashApp__UI__form__fail animate__animated  animate__fadeIn "
              }`}
            >
              {errors.inputDepartmentOptions.message}
            </span>
          )}
        </div>

        <div className="dashApp__UI__form__row">
          <button type="submit" className="dashApp__UI__form__button">
            save{" "}
          </button>
        </div>
      </form>
    </>
  );
};

export default Profile;
