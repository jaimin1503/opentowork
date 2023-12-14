export default function Display(props) {
  return (
    <div className="py-2 flex items-center justify-center">
      <div className=" w-[90vw] h-[70vh] bg-[#4a426a] rounded-lg md:flex md:justify-between ">
        <img
          className=" object-cover rounded-t-lg w-full h-[50%] md:h-full md:w-[50%] md:rounded-l-lg"
          src={props.url}
          alt="developer"
        />

        <div className=" w-[90%] p-6">
          <h1 className=" text-white text-3xl">{props.heading1}</h1>
          <h2 className=" text-gray-200 text-xl pt-3 ">- {props.heading2}</h2>
        </div>
      </div>
    </div>
  );
}
