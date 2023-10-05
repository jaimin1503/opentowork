import './style.css'
import interior from './assets/spacejoy-KSfe2Z4REEM-unsplash.jpg'
import house from './assets/house.jpg'
import brand from './assets/brand.jpg'
import design from './assets/designing.jpg'
import photoshop from './assets/photoshop.jpg'
import presentation from './assets/presentation.jpg'
import videoedit from './assets/videoedit.jpg'
import { useState } from 'react'
import photography from './assets/photography.jpg'
import video from './assets/videoediting.mp4'

export default function DevIT() {
	const [currentImage, setCurrentImage] = useState(brand);

	// Define a function to handle image changes
	const changeImage = (newImage) => {
	  setCurrentImage(newImage);
	};
  return (
	<div className='gradient_dev'>
		<div className="design-row-1 mx-16 flex justify-center  py-10">
			<div id='roww1' className="row1imagearea w-[90vw] h-[70vh] bg-[#4a426a] rounded-xl flex">
				<div className="textarea w-[40%] flex items-center justify-center flex-col ">
					<h1 className=' text-5xl mx-5 my-4 text-white max-w-[80%] font-bold'>Best Designers and Creators for your business.</h1>
					<h2 className=' text-xl mx-5 my-4 text-gray-400 max-w-[80%]'>Find the best design that suits your work and personality.</h2>
				</div>
				<div className="imagearea w-[60%] flex items-center mr-3">
					<img className=' rounded-xl object-cover h-[95%] ' src={interior} alt="interior" />
				</div>
			</div>
		</div>
		<div className="row">
			
			<div className="row3-photos flex justify-center items-center pb-10">
				<img className=' h-[50vh] w-[70vw] object-cover my-5 mx-5 mt-20 rounded-xl ' src={photography} alt="img" />
				<h1 className=' text-white text-5xl font-bold mx-10'>Photography</h1>

			</div>
			<hr className='mb-5' />
			<div className="row3-photos flex justify-center items-center py-10">
				<h1 className=' text-white text-5xl font-bold mx-10'>Video Editing</h1>
				<video autoPlay className='w-[70vw] h-[50vh]' muted controls>
					<source  src={video} type="video/mp4"  />
				</video>

			</div>
		</div>
		<div className="row3">
			<div className="text flex justify-center py-10">
				<h1 className='text-white text-6xl font-extrabold my-5'>
				Design and creative projects for your most pressing work.
				</h1>
			</div>
			<div className="imageandtext flex justify-center">
				<div className="text2 h-[50vh] w-[90vw] rounded-xl my-10 bg-[#4a426a] flex">
					<ul className='flex-col flex w-[30%] pt-10 pb-5 pl-10'>
						<li className=' text-white text-xl py-2 active:text-purple-400 hover:text-purple-500 cursor-pointer' onClick={() => changeImage(brand)}>Logo Design</li>
						<li className=' text-white text-xl py-2 active:text-purple-400 hover:text-purple-500 cursor-pointer' onClick={() => changeImage(photoshop)}>Photoshop Editing</li>
						<li className=' text-white text-xl py-2 active:text-purple-400 hover:text-purple-500 cursor-pointer' onClick={() => changeImage(design)}>Web & Mobile Design</li>
						<li className=' text-white text-xl py-2 active:text-purple-400 hover:text-purple-500 cursor-pointer' onClick={() => changeImage(presentation)}>Presentation Design</li>
						<li className=' text-white text-xl py-2 active:text-purple-400 hover:text-purple-500 cursor-pointer' onClick={() => changeImage(house)}>Architecture & Interior Design</li>
						<li className=' text-white text-xl py-2 active:text-purple-400 hover:text-purple-500 cursor-pointer' onClick={() => changeImage(videoedit)}>Video Editing</li>
					<button className='bg-purple-500 mr-10 mt-10 text-white hover:bg-purple-600 rounded-full py-2 px-4'>Browse Projects</button>
					</ul>
				<div className="image w-[70%]">
					<img className='w-[100%] h-[100%] object-cover rounded-xl' src={currentImage} alt="dfg" />
				</div>
				</div>
			</div>
		</div>
		<div className="button flex justify-center py-10">
				<button className="bg-purple-500 py-3 px-10 text-white rounded-full hover:scale-105" style={{transition:'0.3s'}}>Join Now</button>
			</div>

			<div className="try">
				<div className="try1 w-48 h-48 bg-green-200">

				</div>
				<div className="try1 w-48 h-48 bg-blue-400">

				</div>
			</div>
		
	</div>
  )
}

// Import React and other necessary dependencies
// import React, { useEffect, useState } from 'react';
// import './YourComponent.css'; // Import your CSS file

// function YourComponent() {
//   const [isSmallScreen, setIsSmallScreen] = useState(false);

//   useEffect(() => {
//     // Update the state based on the screen width
//     const handleResize = () => {
//       setIsSmallScreen(window.innerWidth <= 980);
//     };

//     // Initial check and add event listener
//     handleResize();
//     window.addEventListener('resize', handleResize);

//     // Clean up the event listener when the component unmounts
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div className={`row1imagearea ${isSmallScreen ? 'small-screen' : ''}`}>
//       {/* Your component content */}
//     </div>
//   );
// }

// export default YourComponent;
