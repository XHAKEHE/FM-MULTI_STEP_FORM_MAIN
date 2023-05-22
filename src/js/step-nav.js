let navSteps
let mainSteps

let activeIndex

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
}

const prepareDOMElements = () => {
	navSteps = document.querySelectorAll('nav .step button')
	mainSteps = [
		document.querySelector('main .step-1'),
		document.querySelector('main .step-2'),
		document.querySelector('main .step-3'),
		document.querySelector('main .step-4'),
	]
}

const prepareDOMEvents = () => {
	navSteps.forEach(step => step.addEventListener('click', stepSelect))
}

const test = () => {
	console.log(mainSteps)
}

const stepSelect = e => {
	navSteps.forEach(navStep => navStep.classList.remove('active'))
	e.target.classList.add('active')

	for (let i = 0; i < navSteps.length; i++) {
		if (navSteps[i].classList.contains('active')) {
			activeIndex = i
			console.log(activeIndex)
		}
	}
	mainSteps.forEach(mainStep => mainStep.classList.add('innactive'))
	mainSteps[activeIndex].classList.remove('innactive')

	// array.forEach(mainStep => mainStep.classList.remove() {
	// console.log(navSteps.indexOf(e.target))
}

document.addEventListener('DOMContentLoaded', () => {
	main()
	test()
})
