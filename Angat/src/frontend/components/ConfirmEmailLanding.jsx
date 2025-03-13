import angatLogo from "../../assets/img/logo.svg";
import erm_actually from "../../assets/img/erm_actually.jpg";
import { useState } from "react";
import supabase from "../../helpers/supabaseClient";

const ConfirmEmailLanding = () => {
  const email = localStorage.getItem("pending_email"); // Retrieve email for resending
  const [message, setMessage] = useState("");

  const handleResendEmail = async () => {
    if (!email) {
      setMessage("No email found. Try signing up again.");
      return;
    }

    const { error } = await supabase.auth.resend({
      type: "signup",
      email,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Verification email sent again!");
    }
  };

  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto m-10">
        <div className=" flex  flex-col items-center">
          <div className="w-24 h-24">
            <img src={angatLogo} alt="Angat Logo" />
          </div>
          <h1 className="font-bold my-10 text-3xl">
            Please verify your email!
          </h1>
          <div className="border-8 border-red-500 flex justify-center mb-6">
            <svg
              class="h-52 w-52 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
              />
            </svg>
          </div>
          <div className="px-32">
            <h3 className="text-lg text-wrap text-justify">
              Check your inbox at <b>{email}</b> and click the verification link
              inside to complete your registration. This link is set to expire
              shortly, so verify soon!
            </h3>

            <h3 className="mt-10 text-lg">
              <b>Don't see an email? </b> Check your spam folder.
            </h3>
            <h3 className="mt-10 text-lg">
              <b>Link Expired? </b>{" "}
              <button
                className="text-blue-700 cursor-pointer hover:underline"
                onClick={handleResendEmail}
              >
                Resend verficiation email
              </button>
              {message && <p className="text-sm">{`(${message})`}</p>}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmEmailLanding;
