
import work_img from './—Pngtree—people characters work near a_7516385.png'
import './style.css'
import ai from './ai.png'
import it from './IT.png'
import business from './business.png'
import design from './design.png'
import worker from './worker.jpg'
import './script.js'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'


export default function Home() {
	let textAnimation = useRef(null)
	let textAnimation2 = useRef(null)
	let imgAnimation = useRef(null)
	let listAnimation = useRef(null)
	let listAnimation2 = useRef(null)
	let listAnimation3 = useRef(null)

	useEffect(()=>{
		gsap.from([textAnimation,textAnimation2,listAnimation,listAnimation2,listAnimation3],{
			x: -100,
			opacity: 0,
			delay: 0.2,
			duration: 0.5,
			stagger: 0.2
		})
		gsap.from([imgAnimation],{
			x: 100,
			opacity: 0,
			delay: 0.2,
			duration: 0.8,
		})
	},[])
  return (
	<div className="gradient_home">
		<div className="row1 flex flex-col items-center py-5">
			<div className="info_home flex flex-col justify-center">
				
				<h1 ref = {el => {textAnimation = el}} className=" gradient_text text-4xl font-bold">
					Explore the sea of Talent,
				</h1>
				<h1 ref = {el => {textAnimation2 = el}} className=" gradient_text text-4xl mt-5 font-bold">
					Find the work that suits you.
				</h1>
			</div>
			<div className="home_img">
				<img ref = {el => {imgAnimation = el}} className="w-[80vw]" src={work_img} alt="work" />
			</div>
		</div>
		<div className="row2 flex justify-center">
			<div className="row2info flex flex-col justify-center items-start mx-20">
				<div ref = {el => {listAnimation = el}} className=" flex justify-center py-5">
					<span className="material-symbols-outlined text-white px-5 text-3xl">select_check_box</span>
					<h1 className=" text-white text-2xl">No cost to join</h1>
				</div>
				<div ref = {el => {listAnimation2 = el}} className=" flex justify-center py-5">
				<span className="material-symbols-outlined text-white px-5 text-3xl">push_pin</span>
					<h1 className=" text-white text-2xl">Post a job and hire top talent</h1>
				</div>
				<div ref = {el => {listAnimation3 = el}} className=" flex justify-center py-5">
					<span className="material-symbols-outlined text-white px-5 text-3xl">stars</span>
					<h1 className=" text-white text-2xl">Work with the best—without breaking the bank</h1>
				</div>
			</div>
		</div>
		<div className="catagories">
			<h1 className=" text-white text-5xl my-5 mt-16 font-bold ml-10 gradient_text">Brows by caragories:</h1>
			<div className="cata-row1 flex flex-col">
				<div className=" mx-10">
					<div className=" my-3 h-[40vh] w-[70vw] border-2 border-purple-600 rounded-xl mx-auto hover:scale-105" style={{transition:'0.3s'}}>
					<img className=" h-[30vh] w-[60vw] mx-5 my-9 object-cover absolute" src={it} alt="ai" />
						<h1 className="text-white text-3xl p-5 relative">Development & IT</h1>
						<p className=" text-gray-300 px-5 relative">1000+ Skills</p>
					</div>
					<div className=" my-3 h-[40vh] w-[70vw] border-2 border-purple-600 rounded-xl mx-auto hover:scale-105" style={{transition:'0.3s'}}>
						<img className=" h-[30vh] w-[60vw] my-9 mx-5 object-cover absolute" src={ai} alt="ai" />
						<h1 className="text-white text-3xl p-5 relative">AI Services</h1>
						<p className=" text-gray-300 px-5 relative">600+ Skills</p>
					</div>
				</div>
				<div className="mx-5">
					<div className=" h-[40vh] w-[70vw] border-2 border-purple-600 rounded-xl mx-auto hover:scale-105" style={{transition:'0.3s'}}>
					<img className=" h-[30vh] w-[60vw] my-9 mx-5 object-cover absolute" src={design} alt="ai" />
						<h1 className="text-white text-3xl p-5 relative">Design & Creation</h1>
						<p className=" text-gray-300 px-5 relative">900+ Skills</p>
					</div>
					<div className=" my-3 h-[40vh] w-[70vw] border-2 border-purple-600 rounded-xl mx-auto hover:scale-105" style={{transition:'0.3s'}}>
					<img className=" h-[30vh] w-[60vw] my-9 mx-5 object-cover absolute" src={business} alt="ai" />
						<h1 className="text-white text-3xl p-5 relative">Sales & Marketing</h1>
						<p className=" text-gray-300 px-5 relative">200+ Skills</p>
					</div>
				</div>
			</div>
		</div>
			<div className="row5">
				<div className="flex items-center flex-col">
				
					<img src={worker} alt="worker" className=" w-[80vw] h-[60vh] object-cover mt-10 rounded-xl absolute"/>
				<div className=" z-10 pt-20 pl-20">
					<h1 className=" text-4xl text-white">
						Find Talent your way!
					</h1>
					<h2 className=" text-xl text-gray-400 max-w-[60%] pt-10">
						Work with huge network of individual professionals.From quick fixes to lasting solutions.
					</h2>
					<div className=" h-[100px] w-[200px] my-5 rounded-xl bg-[#4a426a] hover:bg-purple-800">
						<h3 className=" text-white text-xl p-4">
						Your Project, Our Expertise.
						<p>&rarr;</p>
						</h3>
					</div>
					<div className=" h-[100px] w-[200px] my-5 rounded-xl bg-[#4a426a] hover:bg-purple-800">
						<h3 className=" text-white text-xl p-4">
						Quality Freelancers, Quality Work.
						<p>&rarr;</p>
						</h3>
					</div>
				</div>
				</div>
			</div>
	</div>
  )
}