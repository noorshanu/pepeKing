import { FaTwitter, FaTelegram } from "react-icons/fa";


function Hero() {
  return (
    <section className=" pb-12 sm:pb-32">
      <div className="container-wrapper">
        <div className="relative z-50">
      
          <h4 className="mt-4 text-xl text-center">
           PepeWitHat is the real king of the Solana meme world
          </h4>

          <div>
            <img src="images/hero.png" alt="" className=" mx-auto floating " />
          </div>

          <a href="https://solscan.io/token/EmnLZtmoe3D8VhDU4PERUycaRtxac9b51P4n18Nr4NUB" target="_blank" className="my-2 flex justify-center text-base text-center text-white  sm:text-xl">
            {" "}
            Contract : EmnLZtmoe3D8VhDU4PERUycaRtxac9b51P4n18Nr4NUB
          </a>
        </div>

        <div className="relative z-40 flex items-center justify-center my-4 max-sm:flex-col max-sm:space-y-4 sm:space-x-5">
          <a
            href="https://www.dextools.io/app/en/solana/pair-explorer/CvNDrD6cX4fFTJ1ogQxetkguSbvMAVyCnJpBVikNLmSg?t=1717160907986"
            target="_blank"
            className="py-2 text-base uppercase px-6 rounded-full bg-gradient-to-b from-[#000000] to-[#2B0000] shadow-lg shadow-black/40 text-white  font-bold border border-white"
          >
      <img src="images/dex.svg" alt="" className="h-[30px]" />
          </a>
          <div className="flex items-center space-x-4 text-xl [&_a:hover]:opacity-70">
          <a target="_blank" href="https://x.com/pepewithatsol">
              <FaTwitter />
            </a>
            <a target="_blank" href="https://t.me/Pepewithredhat">
              <FaTelegram />
            </a>
          </div>
        </div>

        {/* <p className="mt-4 text-xl text-center">
         PepeWitHat on Solana isn't just a random meme; it's backed by a team
          with a track record of success. WithPepeWitHat, you're not just buying
          into a coin; you're joining a legacy of meme greatness.
        </p> */}
      </div>
    </section>
  );
}

export default Hero;
