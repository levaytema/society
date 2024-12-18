window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
   document.documentElement.style.setProperty('--scrollTop1', `${this.scrollY - (1*window.innerHeight-0.1*window.innerHeight)}px`)
   document.documentElement.style.setProperty('--scrollTop2', `${this.scrollY - (2*window.innerHeight-0.1*window.innerHeight)}px`)
   document.documentElement.style.setProperty('--scrollTop3', `${this.scrollY - (3*window.innerHeight-0.1*window.innerHeight)}px`)
   document.documentElement.style.setProperty('--scrollTop4', `${this.scrollY - (4*window.innerHeight-0.1*window.innerHeight)}px`)
   document.documentElement.style.setProperty('--scrollTop5', `${this.scrollY - (5*window.innerHeight-0.1*window.innerHeight)}px`)
   document.documentElement.style.setProperty('--scrollTop6', `${this.scrollY - (6*window.innerHeight-0.1*window.innerHeight)}px`)
   document.documentElement.style.setProperty('--scrollTopLast', `${this.scrollY - 7*window.innerHeight}px`)
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})
