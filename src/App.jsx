import IllustrationDesktop from "./assets/illustration-sign-up-desktop.svg";
import IllustrationMobile from "./assets/illustration-sign-up-mobile.svg";
import IconList from "./assets/icon-success.svg";
import { useState } from "react";

export default function App() {
  const [errorEmail, setErrorEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [formSubmit, setFormSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let validEmail = email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    if (validEmail) {
      setErrorEmail(false);
      setFormSubmit(true);
    } else {
      setErrorEmail(true);
    }
  };

  if (!formSubmit) {
    return (
      <div className="wrapper min-h-screen flex justify-center md:items-center bg-charcoal-grey md:p-5">
        <div className="news-form bg-white flex flex-col-reverse justify-end md:flex-row md:gap-5 md:p-5 md:rounded-[30px]">
          <div className="form-container flex items-center">
            <div className="form max-w-[480px] md:px-8 px-4 py-12">
              <h1 className="text-dark-slate-grey text-4xl md:text-6xl font-bold">
                Stay Updated!
              </h1>
              <p className="mt-6">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              <div className="lists mt-8 md:mt-6">
                <div className="list flex items-start md:items-center gap-3 mt-5 md:mt-2">
                  <img src={IconList} className="w-5" alt="" />
                  <p>Product discovery and building what matters</p>
                </div>
                <div className="list flex items-start md:items-center gap-3 mt-5 md:mt-2">
                  <img src={IconList} className="w-5" alt="" />
                  <p>Measuring to ensure updates are a success</p>
                </div>
                <div className="list flex items-start md:items-center gap-3 mt-5 md:mt-2">
                  <img src={IconList} className="w-5" alt="" />
                  <p>And much more!</p>
                </div>
              </div>
              <form className="mt-12 md:mt-8" onSubmit={handleSubmit}>
                <div>
                  <div className="flex justify-between">
                    <label className="text-xs font-bold text-dark-slate-grey">
                      Email address
                    </label>
                    {errorEmail ? (
                      <label className="text-xs font-bold text-tomato">
                        Valid email required
                      </label>
                    ) : (
                      ""
                    )}
                  </div>
                  <input
                    type="text"
                    className={`px-5 py-3 border block rounded-md w-full mt-2 ${
                      errorEmail && "border-tomato bg-[#ffecec] text-red-500"
                    }`}
                    placeholder="email@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button className="bg-dark-slate-grey text-white w-full rounded-lg py-4 mt-6 shadow-xl hover:shadow-red-300 hover:bg-gradient-to-r from-pink-600 to-orange-600">
                  Subscribe to monthly newsletter
                </button>
              </form>
            </div>
          </div>
          <img
            src={IllustrationDesktop}
            className="max-w-[500px] rounded-b-xl hidden md:inline-block"
            alt=""
          />
          <img
            src={IllustrationMobile}
            className="rounded-b-xl w-full md:hidden"
            alt=""
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="wrapper min-h-screen flex justify-center md:items-center bg-charcoal-grey md:p-5">
        <div className="success-message w-[530px] bg-white py-16 px-5 md:p-16 md:rounded-[30px]">
          <img src={IconList} alt="" className="w-16 mt-24" />
          <h1 className="text-5xl md:text-6xl font-bold text-dark-slate-grey mt-10">
            Thanks for subscribing!
          </h1>
          <p className="mt-8">
            A confirmation email has been sent to{" "}
            <span className="font-bold">{email}</span>. Please open it and click
            the button inside to confirm your subscription.
          </p>
          <button
            onClick={() => {
              setFormSubmit(false);
              setEmail("");
            }}
            className="bg-dark-slate-grey text-white w-full rounded-lg py-4 shadow-xl hover:shadow-red-300 mt-52 md:mt-10 hover:bg-gradient-to-r from-pink-600 to-orange-600"
          >
            Dismiss message
          </button>
        </div>
      </div>
    );
  }
}
