"use client";
import React, { useState } from 'react'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { data } from 'autoprefixer';
import axios from "axios";

const FILE_SIZE = 1024 * 1024 * 5;// 5MB
const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "application/pdf",
]

// create schema 

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password must be 6 characters or longer")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  file: Yup.mixed()
    .test("fileSize", "File too large", (value) => {
      console.log("value", value);
      if (!value) {
        return true;
      }
      return value.size <= FILE_SIZE;
    }).test("fileFormat", "Unsupported Format", (value) => {
      if (!value) {
        return true;
      }
      return SUPPORTED_FORMATS.includes(value.type);
    }).required("Required"),
});

//  initialValues

export default function Login() {

  const createUser = async (user) => {
    const { name, email, password, role, avatar } = user;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      name,
      email,
      password,
      role,
      avatar,
    });

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/users", requestOptions)
      if (!res.ok) {
        alert("Somthing went worng ");
      } else {
        alert(" User created successfully");
        const data = await res.json()
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
    return data;
  };

  const uploadImage = async (values) => {
    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/files/upload",
        values.file
      );
      console.log(response);
      return response?.data?.location || "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="  mx-96 mt-24  flex  justify-center items-center h-screen">
      <div className='bg-indigo-500 flex rounded-md fixed top-1/4 left-1/5'>
      <div className='w-50 flex '>
      <Formik initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "customer",
        file: undefined,

      }}
        // injection schema in Formik 
        validationSchema={validationSchema}
        // create onSubmit
        onSubmit={async (values, { setSubmitting, resetForm }) => {

          const formData = new FormData();
          formData.append("file", values.file);
          const avatar = await uploadImage({ file: formData });
          console.log("avatar", avatar);
          values.avatar = avatar;
          createUser(values);
          setSubmitting(false);
          resetForm();
        }}
      >
        {/* create form for validation */}
        {({ isSubmitting, setFieldValue }) => (
          <Form>
            <div className="mx-5 py-5 px-5 flex-col justify-center items-center">
              {/* Name  */}
              <div className="mb-6">
                <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Name</label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md
                         focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                         dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                {/* message Errors feedback */}
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              {/* email */}
              <div className="mb-6">
                <label htmlFor='Email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md
               focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
               dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {/* message Errors feedback */}
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              {/* password */}
              <div className="mb-6">
                <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                {/* message Errors feedback */}
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              {/* confirm password */}
              <div className="mb-6">
                <label htmlFor='Confirm password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Confirm Password</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                {/* message Errors feedback */}
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              {/* avatar */}
              <div className='mb-6'>
                <Field
                  name="file"
                  type="file"
                  title="Select a file"
                  setFieldValue={setFieldValue} // Set Formik value
                  component={CustomInput} // component prop used to render the custom input
                />
                <ErrorMessage name="file">
                  {(msg) => <div className="text-red-500">{msg}</div>}
                </ErrorMessage>
              </div>
              {/* create button for validation */}
              <div className='mt-5'>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      </div>
      <div className='w-50 mt-5 mx-20'>
        <img src="https://vijethaiasacademyvja.com/assets/images/student-login-2.svg"/>
      </div>
      </div>
    </div>
  )
}
// custom validation
function CustomInput({ field, form, ...props }) {
  const [preview, setPreview] = useState(null);
  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          //  console.log(event.currentTarget.files);
          form.setFieldValue(field.name, event.currentTarget.files[0]);
          setPreview(URL.createObjectURL(event.currentTarget.files[0]));
        }}
        {...props}
      />
      {preview && (
        <img
          className="w-20 h-20 rounded-full object-cover mt-4"
          src={preview}
          alt={preview}
        />
      )}
    </div>
  )
}