import { useState } from "react";

function Success() {

    // const [userEmail, setUserEmail] = useState(props.emailValue);

    return (
        <main className="bg-dark-gray h-screen font-sans flex justify-center items-center">
            <div className="p-10 bg-white w-1/4 rounded-3xl">
                <img src="/assets/icon-success.svg" alt="icon" className="w-1/6 pb-4" />
                <h1 className="text-4xl font-bold pb-4">Thanks for subscribing!</h1>
                <p>A confirmation email has been sent to  . Please open it and click the button inside to confirm your subscription</p>
                <button className="bg-dark-gray text-white w-full py-3 mt-4 rounded-lg hover:bg-gradient-to-r from-tomato to-orange-500">Dismiss Message</button>
            </div>
        </main>
    )
}

export default Success;