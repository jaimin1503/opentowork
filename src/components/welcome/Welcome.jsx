import { useState } from "react"

export default function Welcome() {
	const [text,setText] = useState('Apply as freelancer')
	const handleChange = () => {
		if(text === 'Apply as freelancer'){
			setText('Continue an client')
		}
		else{
			setText('Apply as freelancer')
		}
	}
	const mystyle = {
		fontFamily: `'Lobster', cursive`
	}
  return (
	<div>
		<div className="navbar">
			<h1 className=" text-2xl px-5 pt-3 text-blue-600" style={{mystyle}}>OpenToWork</h1>
		</div>
		<div className="flex pt-20 flex-col text-center bg-cyan- w-[100vw] h-[100vh]">
			<h1 className=" pt-5 text-5xl font-semibold" style={{fontFamily:`'Dosis', 'sans-serif'`}}>Welcome Hustler!</h1>
			<h2 className=" pt-5 text-4xl font-semibold" style={{fontFamily:`'Dosis', 'sans-serif'`}}>Get Started!</h2>
		<div className="check_boxes flex justify-center pt-10 py-10 ">
			<div className="welcome_form border-2 h-40 w-[271px]  mx-5 rounded-xl border-gray-300 cursor-pointer hover:border-green-600">
				<input on className=" mt-5 ml-[6rem] absolute " type="radio" name="client" id="client" onChange={handleChange} />
				<label className="cursor-pointer" htmlFor="client"><p className=" mx-auto text-xl font-semibold pt-10 text-left h-[100%] w-[100%] relative max-w-[70%]">
					I am a client hiring for project.
				</p></label>
				
			</div>
			<div className=" welcome_form border-2 border-gray-300 mx-5 h-40 w-[271px] rounded-xl cursor-pointer hover:border-green-600">
				<input className=" mt-5 ml-[6rem] absolute" type="radio" name="client" id="clien"  onChange={handleChange}/>
				<label className="cursor-pointer" htmlFor="clien"><p className=" mx-auto text-xl font-semibold pt-10 text-left h-[100%] w-[100%] relative max-w-[70%]">
					I am freelancer, looking for work.
				</p></label>
			</div>
		</div>
		<div>
			<button className="py-3 px-10 rounded-full cursor-pointer bg-green-600 text-white" type="submit" >{text}</button>
			<p className="mt-5">Already have an account <a className=" text-green-600" href="/">Log in</a></p>
		</div>
		</div>
	</div>
  )
}