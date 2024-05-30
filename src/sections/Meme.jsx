

function Meme() {
  return (
    <div  className=' container-wrapper py-4 px-4 mx-auto'>

        <h2 className=' text-5xl font-bold text-center py-4'>
     Tokenomics

        </h2>

        <p className="text-lg text-center mb-2">Total Supply : 1,000,000,000</p>

        <div className=' flex items-center justify-center gap-6 flex-col sm:flex-row '>

           <div className=" border-[#dd3333] border rounded-2xl bg-[#113a00]">

            <img src="images/anno.png" alt="" className=" mx-auto h-[200px]" />

            <p className=" text-xl font-bold text-center py-2">
              Renounced
            </p>

           </div>




           
           <div className=" border-[#dd3333] border rounded-2xl bg-[#113a00]">

            <img src="images/tax.png" alt="" className=" mx-auto h-[200px]" />

            <p className=" text-xl font-bold text-center py-2">
            taxes 0%
            </p>

           </div>




           
           <div className=" border-[#dd3333] border rounded-2xl bg-[#113a00]">

            <img src="images/fire.png" alt="" className=" mx-auto" />

            <p className=" text-xl font-bold text-center py-2">
            Lp burnt
            </p>

           </div>
           
        </div>

    </div>
  )
}

export default Meme