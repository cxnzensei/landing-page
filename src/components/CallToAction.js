const CallToAction = () => {
  return (
    <div className="container mx-auto max-w-7xl p-4 my-16 text-white">
      <div className="bg-[#3882F6] rounded-lg space-y-3 md:space-y-0 p-16 flex flex-col md:flex-row items-start md:items-center md:justify-between">
          <div className="space-y-3">
            <div className="font-semibold text-4xl">Call to action! It's time!</div>
            <div>Sign up for our product by clicking that button right over there</div>
          </div>
          <button className="border-2 hover:scale-105 duration-300 hover:bg-white hover:text-black rounded-md px-7 py-2">Sign up</button>
      </div>
    </div>
  )
}

export default CallToAction
