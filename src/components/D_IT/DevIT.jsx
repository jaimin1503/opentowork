import './style.css'
import solodev from './assets/per-loov-4wOkqiXNP7M-unsplash.jpg'
import python from './assets/python.png'
import java from './assets/java.png'
import cpp from './assets/cpp.png'
import mysql from './assets/mysql.png'
import nodejs from './assets/nodejs.png'
import react from './assets/react.png'
import ruby from './assets/ruby.png'
import web from './assets/web.png'
import app from './assets/app.jpg'
import data from './assets/data.jpg'
import shopify from './assets/shopify.jpg'
import ml from './assets/ml.jpg'
import workpress from './assets/wordpress.jpg'
import display1 from './assets/display1.jpg'
import display2 from './assets/display2.jpg'
import display3 from './assets/display3.jpg'
import display4 from './assets/display4.jpg'
import { useState } from 'react'

export default function DevIT() {
	const [currentImage, setCurrentImage] = useState(app);

	// Define a function to handle image changes
	const changeImage = (newImage) => {
	  setCurrentImage(newImage);
	};
  return (
	<div className='gradient_dev'>
		<div className="row1  flex justify-center  py-10 ">
			<div className="row1imagearea w-[90vw] h-[70vh] bg-[#4a426a] rounded-xl flex justify-between">
				<div className="textarea w-[40%] flex items-center justify-center flex-col ">
					<h1 className=' text-5xl mx-5 my-4 text-white max-w-[80%]'>Developers and IT experts to scale your org.</h1>
					<h2 className=' text-xl mx-5 my-4 text-gray-400 max-w-[80%]'>Hire the particular experts and get your work done within your timeline.</h2>
				</div>
				<div className="imagearea w-[60%] flex items-center">
					<img className=' rounded-xl object-cover h-[95%] ml-10' src={solodev} alt="developer" />
				</div>
			</div>
		</div>
		<div className="row2  flex flex-col items-center justify-center py-10">
			<h1 className=' text-6xl font-extrabold text-white my-10' >
				Find the best Developers and IT experts
			</h1>
			<div className="types flex ">
				<div className="type1 flex justify-center items-center w-[20vw] h-[20vh] bg-[#4a426a] rounded-xl mx-5 my-5">
					<img className='h-[80%] w-[80%] object-contain hover:scale-105' style={{transition:'0.3s'}} src={web} alt="da" />
				</div>
				<div className="type1 flex justify-center items-center w-[20vw] h-[20vh] bg-[#4a426a] rounded-xl mx-5 my-5">
					<img className='h-[80%] w-[80%] object-contain hover:scale-105' style={{transition:'0.3s'}} src={react} alt="dd" />
				</div>
				<div className="type1 flex justify-center items-center w-[20vw] h-[20vh] bg-[#4a426a] rounded-xl mx-5 my-5">
					<img className='h-[80%] w-[80%] object-contain hover:scale-105' style={{transition:'0.3s'}} src={ruby} alt="dd" />
				</div>
				<div className="type1 flex justify-center items-center w-[20vw] h-[20vh] bg-[#4a426a] rounded-xl mx-5 my-5">
					<img className='h-[80%] w-[80%] object-contain hover:scale-105' style={{transition:'0.3s'}} src={nodejs} alt="ds" />
				</div>
			</div>
			<div className="types flex justify-between">	
				<div className="type1 flex justify-center items-center w-[20vw] h-[20vh] bg-[#4a426a] rounded-xl mx-5 my-5">
					<img className='h-[80%] w-[80%] object-contain hover:scale-105' style={{transition:'0.3s'}} src={mysql} alt="sd" />
				</div>
				<div className="type1 flex justify-center items-center w-[20vw] h-[20vh] bg-[#4a426a] rounded-xl mx-5 my-5">
					<img className='h-[80%] w-[80%] object-contain hover:scale-105' style={{transition:'0.3s'}} src={python} alt="dsd" />
				</div>
				<div className="type1 flex justify-center items-center w-[20vw] h-[20vh] bg-[#4a426a] rounded-xl mx-5 my-5">
					<img className='h-[80%] w-[80%] object-contain hover:scale-105' style={{transition:'0.3s'}} src={cpp} alt="sd" />
				</div>
				<div className="type1 flex justify-center items-center w-[20vw] h-[20vh] bg-[#4a426a] rounded-xl mx-5 my-5">
					<img className='h-[80%] w-[80%] object-contain hover:scale-105' style={{transition:'0.3s'}} src={java} alt="dsd" />
				</div>
			</div>
		</div>
		<div className="row3">
			<div className="text flex justify-center py-10">
				<h1 className='text-white text-6xl font-extrabold my-5'>
					Development and IT projects for all yoour need.
				</h1>
			</div>
			<div className="imageandtext flex justify-center">
				<div className="text2 h-[50vh] w-[90vw] rounded-xl my-10 bg-[#4a426a] flex">
					<ul className='flex-col flex w-[30%] pt-10 pb-5 pl-10'>
						<li className=' text-white text-xl py-2 active:text-purple-400 hover:text-purple-500 cursor-pointer' onClick={() => changeImage(app)}>Mobile app Development</li>
						<li className=' text-white text-xl py-2 active:text-purple-400 hover:text-purple-500 cursor-pointer' onClick={() => changeImage(shopify)}>Shopify Development</li>
						<li className=' text-white text-xl py-2 active:text-purple-400 hover:text-purple-500 cursor-pointer' onClick={() => changeImage(workpress)}>WordPress Development</li>
						<li className=' text-white text-xl py-2 active:text-purple-400 hover:text-purple-500 cursor-pointer' onClick={() => changeImage(data)}>Data Visualization</li>
						<li className=' text-white text-xl py-2 active:text-purple-400 hover:text-purple-500 cursor-pointer' onClick={() => changeImage(ml)}>Machine Learning</li>
					<button className='bg-purple-500 mr-10 mt-10 text-white hover:bg-purple-600 rounded-full py-2 px-4'>Browse Projects</button>
					</ul>
				<div className="image w-[70%]">
					<img className='w-[100%] h-[100%] object-cover rounded-xl' src={currentImage} alt="dfg" />
				</div>
				</div>
			</div>
		</div>
		<div className="row">
			<div className="button flex justify-center py-10">
				<button className="bg-purple-500 py-3 px-10 text-white rounded-full hover:scale-105" style={{transition:'0.3s'}}>Join Now</button>
			</div>
			<div className="row3-photos flex justify-center">
				<img className=' w-[30vw] my-5 mx-5 mt-20 h-[40vh] rounded-xl ' src={display1} alt="img" />
				<img className=' w-[30vw] my-5 mx-5 h-[40vh] rounded-xl ' src={display2} alt="img" />
			</div>
			<div className="row3-photos flex justify-center">
				<img className=' w-[30vw] my-5 mx-5 mt-20 h-[40vh] rounded-xl ' src={display3} alt="img" />
				<img className=' w-[30vw] my-5 mx-5 h-[40vh] rounded-xl ' src={display4} alt="img" />
			</div>
		</div>
	</div>
  )
}