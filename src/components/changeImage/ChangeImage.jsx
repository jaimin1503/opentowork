import { useState, useEffect, useCallback } from "react";

export default function ChangeImage(props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = props.images;
  const texts = props.texts;

  const changeImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const intervalId = setInterval(changeImage, 3000);
    return () => clearInterval(intervalId);
  }, [changeImage]);

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="flex justify-center">
      <div className="h-[50vh] w-[90vw] rounded-lg md:h-[65vh] my-5 bg-[#4a426a] ">
        <div className="h-[50%] w-full">
          <img
            className="h-[100%] w-[100%] object-cover rounded-t-xl"
            src={images[currentImageIndex]}
            alt="dfg"
          />
        </div>
        <ul className=" items-center justify-center flex flex-col">
          {texts.map((text, index) => (
            <li
              key={index}
              className="text-white py-1 cursor-pointer text-xl hover:text-purple-500"
              onClick={() => handleImageChange(index)}
            >
              {text}
            </li>
          ))}
          <button className="bg-purple-500 mx-20 mt-2 hover:bg-purple-600 py-2 px-5 text-white rounded-full">
            Browse Projects
          </button>
        </ul>
      </div>
    </div>
  );
}
