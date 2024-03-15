import Navbar from "./components/Navbar";
import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";



function AppLayout() {
   return (
      <>
         
         <main className="pb-5 pt-2 bg-main">
         <Navbar />
            <Hero />
       

          
         </main>
         <div>
               <AboutUs/>

               <div className="container-wrapper">
               <img
                  src="/images/logo.png"
                  className="max-w-[16rem] w-full mx-auto"
                  alt=""
               />
            </div>
            </div>

      </>
   );
}

export default AppLayout;
