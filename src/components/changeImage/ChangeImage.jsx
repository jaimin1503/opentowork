import { useState } from "react";

export default function ChangeImage(props) {
	const [currentImage, setCurrentImage] = useState(props.initial);

	// Define a function to handle image changes
	const changeImage = (newImage) => {
	  setCurrentImage(newImage);
	};
  return (
	<div className="imageandtext">
		<div className="text2">
			<ul>
				<li className='li' onMouseEnter={() => changeImage(props.url1)}>{props.text1}</li>
				<li className='li' onMouseEnter={() => changeImage(props.url2)}>{props.text2}</li>
				<li className='li' onMouseEnter={() => changeImage(props.url3)}>{props.text3}</li>
				<li className='li' onMouseEnter={() => changeImage(props.url4)}>{props.text4}</li>
				<li className='li' onMouseEnter={() => changeImage(props.url5)}>{props.text5}</li>
				<button className='bg-purple-500'>Browse Projects</button>
			</ul>
			<div className="image w-[70%]">
				<img src={currentImage} alt="dfg" />
			</div>
		</div>
	</div>
  )
}