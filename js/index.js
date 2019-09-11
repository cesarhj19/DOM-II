// Your code goes here

// Load event
window.addEventListener('load', (event) => {
	alert('Page has fully loaded');
})

// mouseover and mouseout events
navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(x => {
	x.addEventListener('mouseover', (event) =>
	event.target.style.color = 'blue')
	x.addEventListener('mouseout', (event) =>
	event.target.style.color = '#212529')
	x.addEventListener('click', (event) =>
	event.preventDefault())
})

// Click event
headerImg = document.querySelector('.intro img');
headerImg.addEventListener('click', (event) => {
	event.target.src = 'https://images.unsplash.com/photo-1566160996175-f08b9991c8a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=1355&q=80'
})

// DoubleClick and contextmenu event 
contentImg = document.querySelectorAll('.img-content')
contentImg.forEach(x => {
	x.addEventListener('dblclick', (event) =>
	event.target.style.display = 'none')
	x.addEventListener('contextmenu', (event) =>
	event.target.style.background = 'red')
})

// Keydown and Keyup event
destHeader = document.querySelectorAll('.destination h4')
document.addEventListener('keydown', (event) => {
	if (event.keyCode === 81) {
		destHeader.forEach(x => {
			x.style.color = 'red'
		})
	}
})
document.addEventListener('keyup', (event) => {
	if (event.keyCode === 81) {
		destHeader.forEach(x => {
			x.style.color = 'green'
		})
	}
})

// Wheel event
destP = document.querySelectorAll('.destination p')
destP.forEach(x => {
	x.addEventListener('wheel', (event) => {
		event.target.style.color = 'purple'
	})
})

// resize event
windowSize = () => {
	console.log(`Window Height: ${window.innerHeight}`)
	console.log(`Window Width: ${window.innerWidth}`)
}
window.addEventListener('resize', windowSize)

