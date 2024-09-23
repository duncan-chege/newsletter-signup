import { useState } from "react";
import Success from "./Success";

function App() {

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false); // New state for success

  const handleEmailChange = (event) => {
    const emailV = event.target.value;
    setEmailValue(emailV);

    if (!emailPattern.test(emailV)){
      setEmailError("Valid email required");
    } else {
      setEmailError("");
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    if(emailValue !== "" && emailPattern.test(emailValue)){
      setSubmittedSuccess(true);
    }
  }

  const goBack = () => {
    setSubmitted(false);
    setSubmittedSuccess(false);
    setEmailValue("");
  }

  if (submittedSuccess){
    return <Success email = {emailValue} backToForm={goBack} />
  }

  return (
    <main className="bg-dark-gray h-screen font-sans flex justify-center items-center">
      <div className="lg:py-5 lg:pl-10 lg:pr-4 lg:w-3/5 md:w-4/6 w-5/6 h-min bg-white grid grid-cols-1 lg:grid-cols-2 rounded-3xl place-content-center">
        <div className="lg:order-1 order-2 lg:mt-20 my-10 mx-6">
          <h1 className="md:text-4xl text-3xl font-bold">Stay updated!</h1>
          <p className="md:text-base text-sm py-4">Join 60,000+ product managers receiving monthly updates on:</p>
          <ul className="md:text-base text-sm">
            <li className="mb-2 flex items-center">
              <img src="/assets/icon-list.svg" alt="icon" className="mr-4 w-4 h-4" />
              Product discovery and building what matters
            </li>
            <li className="mb-2 flex items-center">
              <img src="/assets/icon-list.svg" alt="icon" className="mr-4 w-4 h-4" />
              Measuring to ensure updates are a success
            </li>
            <li className="mb-2 flex items-center">
              <img src="/assets/icon-list.svg" alt="icon" className="mr-4 w-4 h-4" />
              And much more!
            </li>
          </ul>

          <form onSubmit={handleSubmit} className="mt-12 flex flex-col">
              <div className="flex justify-between">
                <label className="mb-2 text-sm font-bold" htmlFor="email">Email address</label>
                {submitted && (!emailValue || emailError) && <span className="text-tomato text-sm font-bold" role="alert">Valid email required</span>}
              </div>

              <input 
                className={submitted && (!emailValue || emailError) ? "py-3 px-8 rounded-md border-solid border-tomato/75 border-2 bg-tomato/30 placeholder:text-tomato" : "py-3 px-8 rounded-md border-solid border-grey/75 border-2"}
                type="text"
                id="email" 
                value={emailValue}
                onChange={handleEmailChange}
                name="email" 
                placeholder="email@company.com" 
                aria-required="true" 
              />
              <button className="bg-dark-gray text-white py-3 mt-4 rounded-lg hover:bg-gradient-to-r from-tomato to-orange-500" type="submit">Subscribe to monthly newsletter</button>
              
          </form>

        </div>
        <div className="lg:order-2 order-1">
          <img className="lg:block hidden max-w-96 h-auto float-right" src="../public/assets/illustration-sign-up-desktop.svg" alt="" />
          <img className="lg:hidden block h-auto w-full" src="../public/assets/illustration-sign-up-mobile.svg" alt="" />
        </div>
      </div>
    </main>
  )
}

export default App;