export default function Languages(props) {
  return (
    <div className=" flex justify-center items-center w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] bg-[#4a426a] rounded-lg m-5">
      <img
        className=" h-[80%] w-[80%] object-contain hover:scale-105"
        style={{ transition: "0.3s" }}
        src={props.url}
        alt="da"
      />
    </div>
  );
}
