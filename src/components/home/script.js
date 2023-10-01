// var textAnimation = document.querySelectorAll("#animation")

// textAnimation.addEvevtListner('mouseenter',function(){
// 	textAnimation.style.opacity = 0.5;
// })

import gsap from "gsap"

gsap.from(".info_home h1",{
	y: 100,
	opacity: 0,
	delay: 0,
	duration: 0.5,
	stagger: 0.2
})

gsap.from('.home_img img',{
	y:100,
	opacity:0.5,
	delay:0,
	duration:0.5,
	stagger:0.2
})