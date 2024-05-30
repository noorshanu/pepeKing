import Navbar from "./components/Navbar";
import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";
import Meme from "./sections/Meme";

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

        <div className="container-wrapper mt-8">
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
    </>
  );
}

export default AppLayout;
