import React from 'react'

function Meme() {
  return (
    <div  className=' container-wrapper py-4 px-4 mx-auto'>

        <h2 className=' text-2xl py-2'>
        A Meme Saga begins...

        </h2>

        <div className=' flex items-center gap-4 justify-between flex-col sm:flex-row'>

            <img src="images/meme1.jpeg" alt="" className=' rounded-xl border border-[#fed403] h-[350px]' />
            <img src="images/meme2.jpeg" alt="" className=' rounded-xl border border-[#fed403] h-[350px]' />
            <img src="images/meme3.jpeg" alt="" className=' rounded-xl border border-[#fed403] h-[350px]' />
           
        </div>

    </div>
  )
}

export default Meme