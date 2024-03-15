function Hero() {
  return (
    <section className=" pb-36">
      <div className="container-wrapper">
        <div className="relative z-50">
      
          <h4 className="mt-4 text-xl text-center">
            King PEPE is the real king of the Solana meme world
          </h4>

          <div>
            <img src="images/hero.png" alt="" className=" mx-auto" />
          </div>

          <a href="https://solscan.io/token/nPQTtFaZXWJNCshUAhTh67Vqb2RoGoEr4z8n5fVp9pN" target="_blank" className="my-2 text-base text-center text-white  sm:text-xl">
            {" "}
            Contract : nPQTtFaZXWJNCshUAhTh67Vqb2RoGoEr4z8n5fVp9pN
          </a>
        </div>

        <div className="relative z-40 flex items-center justify-center my-4 max-sm:flex-col max-sm:space-y-4 sm:space-x-5">
          <a
            href="https://app.uniswap.org/tokens/ethereum/0xd66368c0c1fdaa8a7eebcbe87e0ffa2ed0deb563"
            target="_blank"
            className="py-2 text-base uppercase px-10 rounded-full bg-gradient-to-b from-[#000000] to-[#2B0000] shadow-lg shadow-black/40 text-white  font-bold border border-white"
          >
            buy now
          </a>
          <a
            href="https://t.me/luckyerc404"
            className="text-base py-2 uppercase px-10 rounded-full bg-gradient-to-b from-[#FFD600] to-[#C9A900] shadow-lg shadow-black/40 text-black  font-bold border border-yellow"
          >
            join telegram
          </a>
        </div>

        {/* <p className="mt-4 text-xl text-center">
          King Pepe on Solana isn't just a random meme; it's backed by a team
          with a track record of success. With King Pepe, you're not just buying
          into a coin; you're joining a legacy of meme greatness.
        </p> */}
      </div>
    </section>
  );
}

export default Hero;
