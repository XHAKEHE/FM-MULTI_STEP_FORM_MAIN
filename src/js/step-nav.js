let navSteps
let mainSteps
let prevBtn
let nextBtn

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
	prevBtn = document.querySelector('.prev-step')
	nextBtn = document.querySelector('.next-step')
}

const prepareDOMEvents = () => {
	navSteps.forEach(step => step.addEventListener('click', navStepSelect))
	nextBtn.addEventListener('click', stepNext)
	prevBtn.addEventListener('click', stepPrev)
}

const test = () => {
	// console.log(navSteps)
	console.log(currentStep())
}

const currentStep = () => {
	for (let i = 0; i < navSteps.length; i++) {
		if (navSteps[i].classList.contains('active')) {
			// console.log(i)
			return i
		}
	}
}

const activateStep = forward => {
	navSteps.forEach(navStep => navStep.classList.remove('active'))
	navSteps[forward].classList.add('active')
	mainSteps.forEach(mainStep => mainStep.classList.add('innactive'))
	mainSteps[forward].classList.remove('innactive')

	if (forward != 0) {
		prevBtn.classList.remove('blank')
	} else {
		prevBtn.classList.add('blank')
	}

	if (forward == 3) {
		nextBtn.textContent = 'Confirm'
	} else {
		nextBtn.textContent = 'Next step'
	}
}

const stepNext = () => {
	if (currentStep() < 3) {
		activateStep(currentStep() + 1)
	}
}
const stepPrev = () => {
	if (currentStep() > 0) {
		activateStep(currentStep() - 1)
	}
}

const navStepSelect = e => {
	activateStep(e.target.textContent - 1)
}

document.addEventListener('DOMContentLoaded', () => {
	main()
	test()
	currentStep()
})
