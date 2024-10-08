function Success({email, backToForm}) {
return (
<main className="bg-dark-gray h-screen font-sans flex justify-center items-center">
    <div className="p-10 bg-white lg:w-1/4 md:w-4/6 md:h-auto h-screen md:rounded-3xl grid grid-cols-1 place-content-around">
        <div>
            <img src="./assets/icon-success.svg" alt="icon" className="w-1/6 pb-4" />
            <h1 className="text-4xl font-bold pb-4">Thanks for subscribing!</h1>
            <p>A confirmation email has been sent to <span className="font-bold">{email}</span> Please open it and click
                the button inside to confirm your subscription</p>
        </div>
        <div>
            <button
                className="place-self-end mt-8 bg-dark-gray text-white w-full py-3 rounded-lg hover:bg-gradient-to-r from-tomato to-orange-500"
                onClick={backToForm}>
                Dismiss Message
            </button>
        </div>
    </div>
</main>
)
}

export default Success;