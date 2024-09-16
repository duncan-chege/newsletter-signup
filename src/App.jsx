function App() {
return (
<main className="bg-dark-gray h-screen font-sans">
  <div className="px-10 w-2/3 bg-white grid grid-cols-2">
    <div>
      <h1 className="text-4xl font-bold">Stay updated!</h1>
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
          <label htmlFor="email" className="">Email address</label>
          <input type="text" id="email" name="email" className="" aria-required="true" />
          <button type="submit">Subscribe to monthly newsletter</button>
      </form>

    </div>
    <div>
      <img src="../public/assets/illustration-sign-up-desktop.svg" alt="" />
    </div>
  </div>
</main>
)
}

export default App;