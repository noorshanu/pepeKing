import Navbar from "./components/Navbar";
import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";
import Meme from "./sections/Meme";
import Roadmap from "./sections/Roadmap";

function AppLayout() {
  return (
    <>
      <main className="pb-5 pt-2 bg-main ">
        <Navbar />
        <Hero />
      </main>
      <div>
        <AboutUs />

        <div className=" mt-4">

         <Meme/>

        </div>

        <div>
          <Roadmap/>
        </div>


          <div className="bg-[#113a00] border-t border-[#dd3333] mt-8">
          <div className="container-wrapper  ">
          <div className=" flex items-center justify-center gap-2">
            <img
              src="/images/logo.png"
              className="max-w-[7rem] w-full rounded-full"
              alt=""
            />

            <p className=" text-2xl font-medium">PepeWitHat</p>
          </div>
        </div>
          </div>
  
      </div>
    </>
  );
}

export default AppLayout;
