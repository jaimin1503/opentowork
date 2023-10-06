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
		<div className="row1">
			<div className="row1imagearea">
				<div className="textarea">
					<h1 className='row1_text'>Developers and IT experts to scale your org.</h1>
					<h2 className='row1_text'>Hire the particular experts and get your work done within your timeline.</h2>
				</div>
				<div className="imagearea">
					<img className='rounded-xl' src={solodev} alt="developer" />
				</div>
			</div>
		</div>
		<div className="row2">
			<h1>
				Find the best Developers and IT experts
			</h1>
			<div className="types">
				<div className="type1">
					<img style={{transition:'0.3s'}} src={web} alt="da" />
				</div>
				<div className="type1">
					<img style={{transition:'0.3s'}} src={react} alt="dd" />
				</div>
				<div className="type1">
					<img style={{transition:'0.3s'}} src={ruby} alt="dd" />
				</div>
				<div className="type1">
					<img style={{transition:'0.3s'}} src={nodejs} alt="ds" />
				</div>
			</div>
			<div className="types flex justify-between">	
				<div className="type1">
					<img style={{transition:'0.3s'}} src={mysql} alt="sd" />
				</div>
				<div className="type1">
					<img style={{transition:'0.3s'}} src={python} alt="dsd" />
				</div>
				<div className="type1">
					<img style={{transition:'0.3s'}} src={cpp} alt="sd" />
				</div>
				<div className="type1">
					<img style={{transition:'0.3s'}} src={java} alt="dsd" />
				</div>
			</div>
		</div>
		<div className="row3">
			<div className="text">
				<h1>
					Development and IT projects for all yoour need.
				</h1>
			</div>
			<div className="imageandtext">
				<div className="text2">
					<ul>
						<li className='li' onClick={() => changeImage(app)}>Mobile app Development</li>
						<li className='li' onClick={() => changeImage(shopify)}>Shopify Development</li>
						<li className='li' onClick={() => changeImage(workpress)}>WordPress Development</li>
						<li className='li' onClick={() => changeImage(data)}>Data Visualization</li>
						<li className='li' onClick={() => changeImage(ml)}>Machine Learning</li>
					<button className='bg-purple-500'>Browse Projects</button>
					</ul>
				<div className="image w-[70%]">
					<img src={currentImage} alt="dfg" />
				</div>
				</div>
			</div>
		</div>
		<div className="row4">
			<div className="button">
				<button>Join Now</button>
			</div>
			<div className="row3-photos">
				<img src={display1} alt="img" />
				<img src={display2} alt="img" />
			</div>
			<div className="row3-photos">
				<img src={display3} alt="img" />
				<img src={display4} alt="img" />
			</div>
		</div>
	</div>
  )
}