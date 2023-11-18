import brand from "./assets/brand.jpg";
import "./imageFlip.css";

export default function ImageFlip() {
  return (
    <div className=" text-white">
      <div className="container flex">
        <div className="flip_img flex ">
          <img
            className=" h-[40vh] w-[40vh] object-cover rounded-xl absolute"
            src={brand}
            alt=""
          />
        </div>
        <div className="flip_text h-[40vh] w-[40vh] bg-blue-600">
          <h1 className=" relative">after flip</h1>
        </div>
      </div>
    </div>
  );
}
