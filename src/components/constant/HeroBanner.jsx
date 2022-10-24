import React from 'react'

const HeroBanner = () => {
  return (
    <section className="bg-gray-900 text-white">
  <div
    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="text-white sm:text-5xl font-bold"
      >
        B2B & B2C Growth

        <span className="sm:block text-white">Experts. </span>
      </h1>



      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="bg-transparent-500 border text-white border-slate-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          href="/get-started"
        >
          LET US HELP
        </a>

    
      </div>
    </div>
  </div>
</section>

  )
}

export default HeroBanner