function App() {
return (
<main className="bg-dark-gray h-screen font-sans flex justify-center items-center">
  <div className="lg:py-5 lg:pl-10 lg:pr-4 lg:w-3/5 w-5/6 h-min bg-white grid grid-cols-1 lg:grid-cols-2 rounded-3xl place-content-center">
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

      <form onSubmit="" className="mt-12 flex flex-col">
          <label className="mb-2 text-sm font-bold" htmlFor="email">Email address</label>
          <input className="py-3 px-8 rounded-md border-solid border-grey/75 border-2" type="text" id="email" name="email" placeholder="email@company.com" aria-required="true" />
          <button className="bg-dark-gray text-white py-3 mt-4 rounded-lg hover:bg-gradient-to-r from-tomato to-orange-500 transition duration-300" type="submit">Subscribe to monthly newsletter</button>

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