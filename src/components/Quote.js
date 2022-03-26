const Quote = () => {
  return (
    <div className="bg-[#E5E7EB] text-4xl font-light text-[#1F2937] italic">
        <div className="container flex flex-col items-center justify-center space-y-4 md:space-x-9 md:flex-row mx-auto max-w-7xl px-28 py-20">
            <div className="md:w-4/12">
                <img className="sm:w-48 w-40 h-40 border-2 p-1 border-black sm:h-48 lg:w-64 lg:h-64 object-cover object-top rounded-full" src="/images/trevor.jpg" alt="Trevor" />
            </div>
            <div className="flex md:w-8/12 flex-col md:items-end md:justify-end space-y-4">
                <div className="text-3xl md:text-4xl">
                    What Kinda F****** Animal Do You Take Me For? No, I Didn't Kill Him! But I Did Kidnap His Wife.
                </div>
                <div className="text-2xl font-semibold">
                    - Trevor Philips, Grand Theft Auto V
                </div>
            </div>
        </div>
    </div>
  )
}

export default Quote
