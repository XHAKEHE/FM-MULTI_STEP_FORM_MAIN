let navSteps
let mainSteps
let prevBtn
let nextBtn

let selections = {
	plan: '',
	period: '',
}

let step1Inputs
let step1Warnings
let step2Inputs
let step2Switch

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

	step1Inputs = document.querySelectorAll('.step-1 input')
	step1Warnings = document.querySelectorAll('.step-1 div.warning')

	step2Inputs = document.querySelectorAll('.step-2 .input-plan')
	step2Switch = document.querySelector('.step-2 .period-switch')
}

const prepareDOMEvents = () => {
	navSteps.forEach(step => step.addEventListener('click', navStepSelect))
	nextBtn.addEventListener('click', stepNext)
	prevBtn.addEventListener('click', stepPrev)
	nextBtn.addEventListener('click', ifCorrect1)
	// step2Inputs.forEach(plan => plan.addEventListener('click', console.log('step2 input dziala')))
	step2Inputs.forEach(plan => plan.addEventListener('click', planSelect))
	step2Switch.querySelector('input').addEventListener('click', periodSelect)
}

const test = () => {}
// console.log(step2Inputs)
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
	if (currentStep() < 3 && ifCorrect1() == true) {
		activateStep(1)
	}
	if (currentStep() < 3 && ifCorrect2() == true) {
		activateStep(2)
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

const ifCorrect1 = () => {
	let wrongInputs = 0
	for (let i = 0; i < step1Inputs.length; i++) {
		if (step1Inputs[i].value.trim().length != 0) {
			step1Warnings[i].classList.add('innactive')
			step1Inputs[i].classList.remove('warning')
		} else {
			step1Warnings[i].classList.remove('innactive')
			step1Inputs[i].classList.add('warning')
			wrongInputs++
		}
	}
	if (wrongInputs == 0) {
		return true
	} else false
}

// 2 STEP
const addActive = input => {
	input.classList.add('active')
}
const removeActive = input => {
	input.classList.remove('active')
}

const uncheck = () => {
	step2Switch.querySelector('input').checked = false
	selections.period = 'Monthly'
}

const planSelect = e => {
	step2Inputs.forEach(input => removeActive(input))
	addActive(e.target)
	console.log(e.target)
	let planName = e.target.querySelector('h2').textContent
	selections.plan = planName
	console.log(selections)
}

const periodSelect = () => {
	if (step2Switch.querySelector('input').checked) {
		selections.period = 'Yearly'
		step2Switch.querySelectorAll('div')[2].classList.toggle('selected')
		step2Switch.querySelectorAll('div')[0].classList.toggle('selected')
		// step2Inputs.querySelector('div h2')textContent('hejka')

		step2Inputs[0].querySelectorAll('div p')[0].textContent = '$90/yr'
		step2Inputs[1].querySelectorAll('div p')[0].textContent = '$120/yr'
		step2Inputs[2].querySelectorAll('div p')[0].textContent = '$150/yr'

		step2Inputs.forEach(input => (input.querySelector('.bonus').style.display = 'flex'))
	} else {
		selections.period = 'Monthly'
		step2Switch.querySelectorAll('div')[2].classList.toggle('selected')
		step2Switch.querySelectorAll('div')[0].classList.toggle('selected')

		step2Inputs[0].querySelectorAll('div p')[0].textContent = '$9/mo'
		step2Inputs[1].querySelectorAll('div p')[0].textContent = '$12/mo'
		step2Inputs[2].querySelectorAll('div p')[0].textContent = '$15/mo'

		step2Inputs.forEach(input => (input.querySelector('.bonus').style.display = 'none'))
	}
	console.log(selections)
	// console.log(step2Switch.querySelector('input').checked)
}

const ifCorrect2 = () => {
	if (selections.plan.length === 0 || selections.period.length === 0) {
		return false
	} else {
		return true
	}
}

document.addEventListener('DOMContentLoaded', () => {
	main()
	test()
	currentStep()
	uncheck()
})
