import angatLogo from "../../assets/img/logo.svg";
import erm_actually from "../../assets/img/erm_actually.jpg";
import { useAuth } from "../../helpers/AuthContext";
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
              Erm... Actually, please verify your email
            </h1>
            <div className="w-96 h-96 m-0">
              <img src={erm_actually} alt="Angat Logo" />
            </div>
            <div className="px-32">
              <h3 className="text-lg text-wrap text-justify">
                Check your inbox at <b>{email}</b> and click the verification
                link inside to complete your registration. This link is set to
                expire shortly, so verify soon!
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
