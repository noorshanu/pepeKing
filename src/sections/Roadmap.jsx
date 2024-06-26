function Roadmap() {
  return (
    <section>
      <div className=" container-wrapper py-1 px-4 mx-auto">
        <h1 className="text-5xl text-center py-6">Roadmap</h1>

        <p className=" text-center py-2 max-w-full sm:max-w-[600px] mx-auto">
The roadmap for PepeWithAToken includes the launch of the token, establishing strategic partnerships, building a robust community through social media engagement, listing on major cryptocurrency exchanges.</p>

        <div className=" py-1 flex justify-center gap-8  bg-[#113a00] items-center px-4 border-[#a90303] border rounded-2xl flex-col sm:flex-row">
          <div>
            <h2>Phase 1</h2>

            <p>Launch</p>
            <p>Global Marketing</p>
            <p>100 to 1000 holders </p>
            <p>CMC & CG</p>

            <h2 className=" mt-4">Phase 2</h2>

            <p>Events, competitions, and giveaways</p>
            <p>Tier 1 exchange </p>
            <p>Influencer Partnerships </p>
            <p>Further work on utility and better feature </p>
          </div>

          <div>
            <img src="images/diamond.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
