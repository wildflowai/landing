"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const SubscribeForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");
  const [hasAttemptedTyping, setHasAttemptedTyping] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const emailRegex = /^[\w-.+]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const nameRegex = /^[\p{L} \-]+$/u;

  const isNameValid = nameRegex.test(name) || !hasAttemptedTyping;
  const isEmailValid = emailRegex.test(email) || !hasAttemptedTyping;

  useEffect(() => {
    if (name || email) {
      setHasAttemptedTyping(true);
    }
  }, [name, email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!isNameValid) {
      setNameError("Please enter a valid name.");
    } else {
      setNameError("");
    }

    if (!isEmailValid) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }

    if (isNameValid && isEmailValid) {
      try {
        const response = await axios.post(
          "https://us-central1-wildflow-demo.cloudfunctions.net/addAudienceSubscriber",
          { name, email }
        );
        setSubscribed(true);
      } catch (err: any) {
        console.error(err);
        const errorMessage =
          err.response?.data || "Something went wrong! Please try again.";
        setError(errorMessage);
      }
    }

    setLoading(false);
  };

  const sectionClass = subscribed
    ? "flex w-full items-center justify-center p-8 bg-green-100 dark:bg-green-700 h-[100px]"
    : "flex w-full items-center justify-center p-8";

  const textClass = subscribed
    ? "text-xl font-bold text-green-700 dark:text-white"
    : "text-2xl font-bold";

  const inputClass = subscribed
    ? "w-full rounded-md px-3 py-2 dark:text-black focus:outline-none sm:w-64"
    : `w-full rounded-md px-3 py-2 bg-gray-100 dark:bg-gray-800 placeholder-gray-500 focus:outline-none sm:w-64 ${
        (!isNameValid || nameError) && "border border-red-500 text-red-500"
      }`;

  return (
    <section className={sectionClass}>
      <div className="w-full max-w-3xl">
        {!subscribed ? (
          <>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            >
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
                placeholder="Your name"
                required
              />
              <p className="mt-1 text-red-500">{nameError}</p>

              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
                placeholder="Your email address"
                required
              />
              <p className="mt-1 text-red-500">{emailError}</p>

              <button
                type="submit"
                className={`rounded-md bg-blue-600 px-4 py-2 text-white focus:outline-none sm:whitespace-nowrap ${
                  (!isNameValid || !isEmailValid) &&
                  "cursor-not-allowed bg-gray-400"
                }`}
                disabled={!isNameValid || !isEmailValid}
              >
                {loading ? "Please wait..." : "Express Interest"}
              </button>
            </form>
            {error && (
              <p className="mt-4 text-red-500 sm:mt-0 sm:block">{error}</p>
            )}
          </>
        ) : (
          <div className="rounded-md p-8 text-center">
            <p className={textClass}>
              Welcome to <b>wildflow</b> family! 🤗
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SubscribeForm;
