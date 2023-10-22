export default function Display(props) {
  return (
	<div className="row1">
			<div className="row1imagearea">
				<div className="textarea">
					<h1 className='row1_text'>{props.heading1}</h1>
					<h2 className='row1_text'>{props.heading2}</h2>
				</div>
				<div className="imagearea">
					<img className='rounded-xl' src={props.url} alt="developer" />
				</div>
			</div>
	</div>
  )
}