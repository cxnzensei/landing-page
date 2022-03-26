const Information = () => {
  return (
    <div className="container max-w-7xl my-7 flex flex-col items-center p-4 mx-auto">
      <div className="text-4xl font-extrabold text-center text-[#1F2937]">Some <span className="text-yellow-600">Fan</span> Favorites</div>
      <div className="my-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
          <div className="flex flex-col items-center border-2 bg-[#fafafa] hover:scale-105 duration-300 py-5 px-3 rounded-xl space-y-2">
            <img className="w-72 h-96 rounded-xl border-4 border-[#3882F6] p-0.5" src="/images/viceCity.jpg" alt="Grand Theft Auto : Vice City" />
            <div className="text-lg font-semibold">Grand Theft Auto : Vice City</div>
          </div>
          <div className="flex flex-col items-center space-y-2 border-2 bg-[#fafafa] py-5 px-3 hover:scale-105 duration-300 rounded-xl">
            <img className="w-72 h-96 rounded-xl border-4 border-[#3882F6] p-0.5" src="/images/maxpayne3.jpg" alt="Max Payne 3" />
            <div className="text-lg font-semibold">Max Payne 3</div>
          </div>
          <div className="flex flex-col items-center hover:scale-105 duration-300 space-y-2 border-2 bg-[#fafafa] py-5 px-3 rounded-xl">
            <img className="w-72 h-96 rounded-xl border-4 border-[#3882F6] p-0.5" src="/images/rdr21.jpg" alt="Red Dead Redemption 2" />
            <div className="text-lg font-semibold">Red Dead Redemption 2</div>
          </div>
          <div className="flex flex-col items-center space-y-2 border-2 bg-[#fafafa] hover:scale-105 duration-300 py-5 px-3 rounded-xl">
            <img className="w-72 h-96 rounded-xl border-4 border-[#3882F6] p-0.5" src="/images/gta5.jpg" alt="Grand Theft Auto V" />
            <div className="text-lg font-semibold">Grand Theft Auto V</div>
          </div>
      </div>
    </div>
  )
}

export default Information
