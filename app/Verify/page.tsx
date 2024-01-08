import React from 'react';
import Navbar from '../Components/Navbar'
// import Image from 'next/image';
// import verifyImage from '../../public/images/verifyImage.png';
import UploadBlock from '../../public/images/UploadBlock.png';

export default function Verify() {
  return (
    <div>
      <Navbar/>
       <div className="flex items-center justify-center">
        <h1 className="text-6xl font-bold tracking-widest">Verify Certificate</h1>
       </div>

       <div>
            {/* <Image
            alt="Verify"
            className='fixed left-10 bottom-0'
            src={verifyImage}>
            </Image> */}
             <img src={"/images/verifyImage.png"} className="fixed left-10 bottom-0" alt="Example" />
        </div>
     
     <div className='fixed right-20 bottom-10 '>
     <input type="file" style={{display:'none'}} id="file" />
      <label htmlFor="file">
           {/* <Image
           alt="Upload"
            src={UploadBlock}
            height={400}> */}
            {/* </Image> */}
            <img src={"/images/UploadBlock.png"} className="" height={350} alt="Example" />
      </label>

<div className='flex items-center justify-center' >
    <button className=' border-sky-800 bg-sky-800 text-gray-50 rounded-lg w-60 py-2 font-bold'>Verify and Proceed</button>
</div>
    </div>
     </div>
  )
}
