function App() {
return (
<main className="bg-dark-gray h-screen font-sans flex justify-center items-center">
  <div className="py-5 pl-10 pr-4 w-3/5 h-min bg-white grid grid-cols-1 md:grid-cols-2 rounded-3xl place-content-center">
    <div>
      <h1 className="mt-20 text-4xl font-bold">Stay updated!</h1>
      <p className="py-4">Join 60,000+ product managers receiving monthly updates on:</p>
      <ul>
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
          <button className="bg-dark-gray text-white py-3 mt-4 rounded-lg hover:bg-gradient-to-r from-tomato to-orange-500" type="submit">Subscribe to monthly newsletter</button>
      </form>

    </div>
    <div>
      <img className="max-w-96 h-auto float-right" src="../public/assets/illustration-sign-up-desktop.svg" alt="" />
    </div>
  </div>
</main>
)
}

export default App;