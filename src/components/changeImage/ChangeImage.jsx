import { useState, useEffect } from "react";

export default function ChangeImage(props) {
  const [currentImage, setCurrentImage] = useState(props.initial);

  // Define a function to handle image changes
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Call your function here
      changeImage();
    }, 2000); // Interval in milliseconds (2 seconds)

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  const changeImage = (newImage) => {
    setCurrentImage(newImage);
  };
  return (
    <div className=" flex justify-center">
      <div className="h-[50vh] w-[90vw] rounded-xl my-5 bg-[#4a426a] flex justify-center items-center">
        <ul className=" flex flex-col w-[30%] mt-10 mb-5 ml-6 list-none">
          <li
            className=" text-white py-2 cursor-pointer text-xl hover:text-purple-500"
            onClick={() => changeImage(props.url1)}
          >
            {props.text1}
          </li>
          <li
            className=" text-white py-2 cursor-pointer text-xl hover:text-purple-500"
            onClick={() => changeImage(props.url2)}
          >
            {props.text2}
          </li>
          <li
            className=" text-white py-2 cursor-pointer text-xl hover:text-purple-500"
            onClick={() => changeImage(props.url3)}
          >
            {props.text3}
          </li>
          <li
            className=" text-white py-2 cursor-pointer text-xl hover:text-purple-500"
            onClick={() => changeImage(props.url4)}
          >
            {props.text4}
          </li>
          <li
            className=" text-white py-2 cursor-pointer text-xl hover:text-purple-500"
            onClick={() => changeImage(props.url5)}
          >
            {props.text5}
          </li>
          <button className="bg-purple-500 mx-20 mt-10 hover:bg-purple-600 py-2 px-5 text-white rounded-full">
            Browse Projects
          </button>
        </ul>
        <div className="w-[70%] h-[100%]">
          <img
            className=" h-[100%] w-[100%] object-cover rounded-r-xl"
            src={currentImage}
            alt="dfg"
          />
        </div>
      </div>
    </div>
  );
}
