import { useState } from "react";
import banner from "../assets/img/banner.png";
import "./components/header";
import donate from "../assets/img/donate.jpg";
import partner from "../assets/img/partner.png";
import volunteer from "../assets/img/volunteer.png";
import contribute from "../assets/img/contribute.png";
import PNB from "../assets/img/PNB.png";

function Linkages() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full bg-base-300" class="scroll-smooth">
        <div className="w-[90%] max-w-9xl mx-auto my-10">
          {/* Three Columns for Partner, Contribute, Volunteer */}
          <div className="grid grid-flow-row lg:grid-flow-col gap-8">
            {/* Partner Section */}
            <div className="bg-gray-100 p-6 shadow-md rounded-lg">
              <img
                src={partner}
                className="object-cover w-full h-full max-h-60"
                alt="Contribute"
              />
              <a
                class="email-link"
                href="mailto:angatcembo.org@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="text-2xl font-semibold mt-4 text-center">
                  Partner
                </h3>
              </a>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Join us as a partner and help expand our impact.
              </p>
            </div>

            {/* Contribute Section */}
            <div className="bg-gray-100 p-6 shadow-md rounded-lg">
              <img
                src={contribute}
                className="object-cover w-full h-full max-h-60"
                alt="Contribute"
              />
              <a href="#donation">
                <h3 className="text-2xl font-semibold mt-4 text-center">
                  Contribute
                </h3>
              </a>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Support our cause through contributions and donations.
              </p>
            </div>

            {/* Volunteer Section */}
            <div className="bg-gray-100 p-6 shadow-md rounded-lg">
              <img
                src={volunteer}
                className="object-cover w-full h-full max-h-60"
                alt="Contribute"
              />
              <a
                class="email-link"
                href="mailto:angatcembo.org@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="text-2xl font-semibold mt-4 text-center">
                  Volunteer
                </h3>
              </a>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Be a part of our mission by volunteering your time and skills.
              </p>
            </div>
          </div>
          {/* How to Donate Instructions */}
          <div className="text-left mt-12 px-8">
            <h2 className="mt-15 text-gray-700 space-y-2 text-xl mb-10 flex justify-center">
              <strong>
                We, the Angat Cembo Community Inc., are a non-government
                organization based in Cembo, Taguig City that aims to help,
                serve, and uplift our fellow people by empowering them towards
                becoming active citizens of the Cembo community advocating for
                volunteerism and social welfare.
              </strong>
            </h2>
          </div>

          {/* Additional Content - Centered */}

          <div className="text-center my-16">
            {/* Donation Header */}
            <h2 className="text-3xl font-semibold text-pink-600 mb-20 mt-20">
              Thank you for supporting our cause!
            </h2>

            {/* Donation Methods Tabs */}
            <section id="donation">
              {/* name of each tab group should be unique */}
              <div className="tabs tabs-lift tabs-lg">
                <span className="tab [--border:3px]"></span>
                <input
                  type="radio"
                  name="my_tabs_3"
                  className="tab [--tab-bg:#fff4e4] [--tab-border-color:#18c6d2] [--border:3px]"
                  aria-label="GCash"
                  defaultChecked
                />
                <div className="tab-content bg-base-300 border-primary p-6 [--border:3px]">
                  <div className="flex justify-center ">
                    <div className="bg-teal-500 p-6 rounded-lg mt-4">
                      <img
                        src={donate}
                        alt="QR Code"
                        className="w-100 h-100 mx-auto"
                      />
                    </div>
                  </div>

                  {/* How to Donate Instructions */}
                  <div className="text-left mt-12 px-8">
                    <h3 className="mt-10 text-3xl font-bold text-pink-600 text-center">
                      How to Donate via GCash QR Code
                    </h3>
                    <h2 className="mt-15 text-gray-700 space-y-2 flex justify-center text-xl mb-10">
                      <strong>
                        <ol className="mx-10 list-decimal space-y-2">
                          <li>
                            Open the GCash app and log in using your PIN or
                            biometric authentication.
                          </li>
                          <li>Tap the "QR" icon on the home screen.</li>
                          <li>
                            Choose "Scan QR Code" to use your phone's camera
                            to scan the QR code displayed in front.
                          </li>
                          <li>
                            Align your phone’s camera with the QR code to
                            scan it.
                          </li>
                          <li>
                            Enter the amount you want to pay or donate.
                          </li>
                          <li>
                            Tap "Next" and review the transaction details.
                          </li>
                          <li>
                            Confirm the payment by tapping "Pay" or
                            "Confirm".
                          </li>
                          <li>
                            Receive an SMS confirmation and an in-app receipt
                            for proof of payment.
                          </li>
                          <li>
                            Take a screenshot of the receipt if needed for
                            future reference.
                          </li>
                        </ol>
                      </strong>
                    </h2>
                  </div>
                </div>

                <input
                  type="radio"
                  name="my_tabs_3"
                  className="tab [--tab-bg:#fff4e4] [--tab-border-color:#18c6d2] [--border:3px]"
                  aria-label="Bank Transfer"
                />
                <div className="tab-content bg-base-300 border-primary [--border:3px] p-6">
                  <div className="mb-12 flex gap-2 w-full justify-center items-center">
                    <div className="flex flex-col gap-5 justify-center p-4">
                      <img
                        src={PNB}
                        alt="QR Code"
                        className="w-50 h-15 mx-auto"
                      />
                      <div className="font-extrabold text-lg text-wrap text-center">
                        Bank Name: PNB
                        <br />
                        Account Name: Concepcion A. Garcia <br />
                        Account Number: 150370012010
                      </div>
                    </div>
                  </div>
                  <div className="text-left px-8">
                    <h3 className="mt-10 text-3xl font-bold text-pink-600 text-center">
                      For PNB (Philippine National Bank) Transfers:
                    </h3>
                    <h2 className="mt-15 text-gray-700 space-y-2 flex justify-center text-xl mb-10">
                      <strong>
                        <ol className="mx-10 list-decimal space-y-3">
                          <li>Select the Transfer option</li>
                          <li>Select your preferred source account.</li>
                          <li>
                            Choose <b>Others PNB</b> as the destination.
                          </li>
                          <li>
                            Enter the recipient's bank account details and the
                            amount to transfer. You can schedule the transfer
                            for a future date or set it to repeat (daily,
                            weekly, monthly, quarterly, or annually):
                            <ul className="font-medium list-disc list-inside space-y-2">
                              <li>Bank Name: PNB</li>
                              <li> Account Name: Concepcion A. Garcia</li>
                              <li> Account Number: 150370012010</li>
                            </ul>
                          </li>
                          <li>
                            Enter the 6-digit One-Time PIN (OTP) sent to your
                            registered mobile number.
                            <ul className="font-medium list-disc list-inside italic space-y-2">
                              <li>
                                Note: If you have enabled the PNB Digital Key, simply
                                tap “Approve” on the notification screen instead
                                of entering an OTP.
                              </li>
                            </ul>
                          </li>
                          <li>
                            Review the confirmation page with transaction
                            details.
                            <ul className="font-medium list-disc list-inside space-y-2">
                              <li>
                                Tap “Share” to send a screenshot to the
                                recipient.
                              </li>
                              <li>
                                Tap “Save Payee” to store the account details
                                for future transfers.
                              </li>
                              <li>
                                A transaction confirmation will also be sent to
                                your registered email and mobile number.
                              </li>
                            </ul>
                          </li>
                        </ol>
                      </strong>
                    </h2>
                  </div>
                </div>

                <span className="tab border-primary  [--tab-border-color:#18c6d2] [--border:3px] mr-4"></span>
              </div>
            </section>

            {/* QR Code Section */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Linkages;
