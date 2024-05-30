import React from "react";

function AboutUs() {
  return (
    <div className=" container-wrapper  px-4 mt-[-7%]">
      <div className=" bg-[#113a00] items-center px-4 border-[#a90303] border rounded-2xl flex justify-between flex-col sm:flex-row ">
        <div>
          <h1 className=" max-w-xl text-2xl font-medium pt-2 sm:pt-0">
            Welcome to the kingdom of PepeWitHat, where memes meet crypto in a
            fusion of fun and fortune! PepeWitHat is not just another meme coin;
            we're on a mission to become the one true ruler of Solana's meme
            realm. PepeWitHat brings you endless excitement, hype on every pump,
            and best of all, a 0% fee on all purchases for our beloved holders!
          </h1>
        </div>

        <div>
          <img src="images/about.png" alt="" className=" h-auto sm:h-[350px]" />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
