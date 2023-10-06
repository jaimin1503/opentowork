
import work_img from './assets/—Pngtree—people characters work near a_7516385.png'
import './style.css'
import ai from './assets/ai.png'
import it from './assets/IT.png'
import business from './assets/business.png'
import design from './assets/design.png'
import worker from './assets/worker.jpg'
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
		<div className="row1">
			<div className="info_home">
				<h1 ref = {el => {textAnimation = el}} className="gradient_text ">
					Explore the sea of Talent,
				</h1>
				<h1 ref = {el => {textAnimation2 = el}} className="gradient_text ">
					Find the work that suits you.
				</h1>
			</div>
			<div className="home_img">
				<img ref = {el => {imgAnimation = el}} src={work_img} alt="work" />
			</div>
		</div>
		<div className="row2">
			<div>
				<div ref = {el => {listAnimation = el}} className="row2info">
					<span className=" symbol material-symbols-outlined ">select_check_box</span>
					<h1 className=" text-white">No cost to join</h1>
				</div>
				<div ref = {el => {listAnimation2 = el}} className="row2info">
				<span className=" symbol material-symbols-outlined">push_pin</span>
					<h1 className=" text-white">Post a job and hire top talent</h1>
				</div>
				<div ref = {el => {listAnimation3 = el}} className="row2info">
					<span className=" symbol material-symbols-outlined ">stars</span>
					<h1 className=" text-white">Work with the best—without breaking the bank</h1>
				</div>
			</div>
		</div>
		<div className="catagories">
			<h1 className=" gradient_text">Brows by caragories:</h1>
			<div className="cata-row1">
				<div className="cata_boxes">
					<div className="the-box" style={{transition:'0.3s'}}>
					<img className="the_img" src={it} alt="ai" />
						<h2 className="box-w-text">Development & IT</h2>
						<p className="box-g-text">1000+ Skills</p>
					</div>
					<div className="the-box" style={{transition:'0.3s'}}>
						<img className="the_img" src={ai} alt="ai" />
						<h2 className="box-w-text">AI Services</h2>
						<p className="box-g-text">600+ Skills</p>
					</div>
				</div>
				<div className="cata_boxes2">
					<div className="the-box" style={{transition:'0.3s'}}>
					<img className="the_img" src={design} alt="ai" />
						<h2 className="box-w-text">Design & Creation</h2>
						<p className="box-g-text">900+ Skills</p>
					</div>
					<div className="the-box" style={{transition:'0.3s'}}>
					<img className="the_img" src={business} alt="ai" />
						<h2 className="box-w-text">Sales & Marketing</h2>
						<p className="box-g-text">200+ Skills</p>
					</div>
				</div>
			</div>
		</div>
			<div className="class">
				<div className="row5">
				
					<img src={worker} alt="worker" className="worker"/>
				<div className="z-10">
					<h1>
						Find Talent your way!
					</h1>
					<h2>
						Work with huge network of individual professionals.From quick fixes to lasting solutions.
					</h2>
					<div className="find">
						<h3 className=" text-white text-xl p-4">
						Your Project, Our Expertise.
						<p>&rarr;</p>
						</h3>
					</div>
					<div className="find">
						<h3 className=" text-white">
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