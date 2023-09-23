import Navbar from "../navbar/Navbar";
import work_img from './—Pngtree—people characters work near a_7516385.png'
import './style.css'

export default function Home() {
  return (
	<div className="gradient_home">
		<Navbar/>
		<div className="row1 flex justify-around mt-10">
		<div className="info_home flex flex-col justify-center">
			<h1 className=" gradient_text text-5xl font-bold">
				Explore the sea of Talent,
			</h1>
			<h1 className=" gradient_text text-5xl mt-5 font-bold">
				Find the work that suits you.
			</h1>
		</div>
		<div className="home_img">
			<img className="w-[45vw]" src={work_img} alt="work" />
		</div>
		</div>
	</div>
  )
}