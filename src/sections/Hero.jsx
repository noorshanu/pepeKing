function Hero() {
  return (
    <section className=" pb-12 sm:pb-32">
      <div className="container-wrapper">
        <div className="relative z-50">
      
          <h4 className="mt-4 text-xl text-center">
           PepeKing is the real king of the Solana meme world
          </h4>

          <div>
            <img src="images/hero.png" alt="" className=" mx-auto" />
          </div>

          <a href="https://solscan.io/token/EXkeqPf6S2hfxkqjSUtgtVwGjtJ1iezeYgz2YYgBCTDT" target="_blank" className="my-2 flex justify-center text-base text-center text-white  sm:text-xl">
            {" "}
            Contract : EXkeqPf6S2hfxkqjSUtgtVwGjtJ1iezeYgz2YYgBCTDT
          </a>
        </div>

        <div className="relative z-40 flex items-center justify-center my-4 max-sm:flex-col max-sm:space-y-4 sm:space-x-5">
          <a
            href="https://www.dextools.io/app/en/solana/pair-explorer/8tJrb3UeeoGgF1X74WwH8V62kmsKH5MFKeVAoo6M8a7T?t=1715155421934"
            target="_blank"
            className="py-2 text-base uppercase px-10 rounded-full bg-gradient-to-b from-[#000000] to-[#2B0000] shadow-lg shadow-black/40 text-white  font-bold border border-white"
          >
         DexTools
          </a>
          <a
            href="https://t.me/pepekingso"
            className="text-base py-2 uppercase px-10 rounded-full bg-gradient-to-b from-[#FFD600] to-[#C9A900] shadow-lg shadow-black/40 text-black  font-bold border border-yellow"
          >
            join telegram
          </a>
        </div>

        {/* <p className="mt-4 text-xl text-center">
         PepeKing on Solana isn't just a random meme; it's backed by a team
          with a track record of success. WithPepeKing, you're not just buying
          into a coin; you're joining a legacy of meme greatness.
        </p> */}
      </div>
    </section>
  );
}

export default Hero;
