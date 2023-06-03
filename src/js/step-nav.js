let navSteps
let mainSteps
let prevBtn
let nextBtn
let firstStepInputs
let firstStepWarnings

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

	firstStepInputs = document.querySelectorAll('.step-1 input')
	firstStepWarnings = document.querySelectorAll('.step-1 div.warning')
}

const prepareDOMEvents = () => {
	navSteps.forEach(step => step.addEventListener('click', navStepSelect))
	nextBtn.addEventListener('click', stepNext)
	prevBtn.addEventListener('click', stepPrev)
	// firstStepInputs.forEach(fSI => fSI.addEventListener('click', ifEmpty))
	nextBtn.addEventListener('click', ifEmpty)
}

const test = () => {
	// console.log(navSteps)
	// console.log(currentStep())
	console.log(firstStepInputs)
	console.log(firstStepWarnings)
}

//STEP NAVIGATION

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
		nextBtn.style.backgroundColor = 'hsl(228, 100%, 84%)'
	} else {
		nextBtn.textContent = 'Next step'
		nextBtn.style.backgroundColor = 'hsl(213, 96%, 18%)'
	}
}

const stepNext = () => {
	if (currentStep() < 3 && ifEmpty() == true) {
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

// 1 STEP

const ifEmpty = () => {
	let wrongInputs = 0
	for (let i = 0; i < firstStepInputs.length; i++) {
		if (firstStepInputs[i].value.trim().length != 0) {
			firstStepWarnings[i].classList.add('innactive')
			firstStepInputs[i].classList.remove('warning')
		} else {
			firstStepWarnings[i].classList.remove('innactive')
			firstStepInputs[i].classList.add('warning')
			wrongInputs++
		}
	}
	if (wrongInputs == 0) {
		return true
	}
}

document.addEventListener('DOMContentLoaded', () => {
	main()
	test()
	currentStep()
})
