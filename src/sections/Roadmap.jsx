function Roadmap() {
  return (
    <section>
      <div className=" container-wrapper py-1 px-4 mx-auto">
        <h1 className="text-5xl text-center py-6">Roadmap</h1>

        <p className=" text-center py-2 max-w-full sm:max-w-[600px] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam laboriosam modi maiores debitis, id hic cupiditate ipsam alias qui? Magni non fuga error et tenetur cupiditate dolores dicta sit libero!</p>

        <div className=" py-1 flex justify-center gap-8  bg-[#113a00] items-center px-4 border-[#a90303] border rounded-2xl flex-col sm:flex-row">
          <div>
            <h2>Phase 1</h2>

            <p>Lorem ipsum dolor sit </p>
            <p>Lorem ipsum dolor sit </p>
            <p>Lorem ipsum dolor sit </p>
            <p>Lorem ipsum dolor sit </p>

            <h2 className=" mt-4">Phase 2</h2>

            <p>Lorem ipsum dolor sit </p>
            <p>Lorem ipsum dolor sit </p>
            <p>Lorem ipsum dolor sit </p>
            <p>Lorem ipsum dolor sit </p>
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
