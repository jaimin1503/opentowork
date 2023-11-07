export default function Display(props) {
  return (
    <div className="py-2 flex items-center">
      <div className=" w-[90vw] h-[70vh] bg-[#4a426a] rounded-lg flex justify-between">
        <div className=" flex flex-col items-center justify-center w-[40%]">
          <h1 className=" text-white text-[2.5rem] max-w-[80%]">
            {props.heading1}
          </h1>
          <h2 className=" text-gray-200 text-xl my-5 max-w-[80%]">
            {props.heading2}
          </h2>
        </div>
        <div className="imagearea w-[60%] flex items-center">
          <img
            className="rounded-xl w-[95%] h-[95%] ml-5"
            src={props.url}
            alt="developer"
          />
        </div>
      </div>
    </div>
  );
}
