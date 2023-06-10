let navSteps
let mainSteps
let prevBtn
let nextBtn

let selections = {}

let step1Inputs
let step1Warnings
let step2Inputs
let step2Switch
let step3Checkboxes

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

	step3Checkboxes = document.querySelectorAll('.step-3 input')
}

const prepareDOMEvents = () => {
	navSteps.forEach(step => step.addEventListener('click', navStepSelect))
	nextBtn.addEventListener('click', stepNext)
	prevBtn.addEventListener('click', stepPrev)
	step2Inputs.forEach(plan => plan.addEventListener('click', planSelect))
	step2Switch.querySelector('input').addEventListener('click', periodSelect)
	// step3Checkboxes.querySelector('input[type="checkbox"]').addEventListener('click', addOnSelect)
	step3Checkboxes.forEach(addon => addon.addEventListener('click', addOnSelect))
}

const test = () => {}

//STEP NAVIGATION and START FUNCS

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
	// if (currentStep() < 3 && ifCorrect1() == true) {
	// 	activateStep(1)
	// }
	// if (currentStep() < 3 && ifCorrect2() == true) {
	// 	activateStep(2)
	// }

	// if (currentStep() < 3 && ifCorrect3() == true) {
	// 	activateStep(3)
	// }

	// if (currentStep() == 0 && ifCorrect1() == true) {
	// 	activateStep(currentStep() + 1)
	// }
	// if (currentStep() == 1 && ifCorrect2() == true) {
	// 	activateStep(currentStep() + 1)
	// }
	// if (currentStep() == 2 && ifCorrect3() == true) {
	// 	activateStep(currentStep() + 1)
	// }
	if (ifCorrect1() == false && currentStep() == 0) {
		console.log('warunek 1 niespelniony')
	} else {
		if (ifCorrect2() == false && currentStep() == 1) {
			console.log('warunek 2 niespelniony')
		} else {
			if (ifCorrect3() == false && currentStep() == 2) {
				console.log('warunek 3 niespelniony')
			} else activateStep(currentStep() + 1)
		}
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

// COMMON
const wipeout = () => {
	step2Switch.querySelector('input').checked = false
	selections.period = 'Monthly'
	step3Checkboxes.forEach(checkbox => (checkbox.checked = false))
	delete selections.addon1
	delete selections.addon2
	delete selections.addon3
}
const addActive = input => {
	input.classList.add('active')
}
const removeActive = input => {
	input.classList.remove('active')
}

// 1 STEP

const ifCorrect1 = () => {
	let wrongInputs = 0
	for (let i = 0; i < step1Inputs.length; i++) {
		if (step1Inputs[i].value.trim().length == 0) {
			step1Warnings[i].classList.remove('innactive')
			step1Inputs[i].classList.add('warning')
			wrongInputs++
		} else {
			step1Warnings[i].classList.add('innactive')
			step1Inputs[i].classList.remove('warning')
		}
	}
	if (wrongInputs == 0) {
		return true
	} else return false
}

// 2 STEP

const planSelect = e => {
	step2Inputs.forEach(input => removeActive(input))
	let inputPlan = e.target.closest('.input-plan')
	addActive(inputPlan)
	let planName = inputPlan.querySelector('h2').textContent
	selections.plan = planName
	console.log(selections)
}

const periodSelect = () => {
	if (step2Switch.querySelector('input').checked) {
		selections.period = 'Yearly'
		step2Switch.querySelectorAll('div')[2].classList.toggle('selected')
		step2Switch.querySelectorAll('div')[0].classList.toggle('selected')

		step2Inputs[0].querySelectorAll('div p')[0].textContent = '$90/yr'
		step2Inputs[1].querySelectorAll('div p')[0].textContent = '$120/yr'
		step2Inputs[2].querySelectorAll('div p')[0].textContent = '$150/yr'

		step2Inputs.forEach(input => (input.querySelector('.bonus').style.display = 'flex'))

		step3Checkboxes[0].closest('.input-addon').querySelector('.price').textContent = '$10/yr'
		step3Checkboxes[1].closest('.input-addon').querySelector('.price').textContent = '$20/yr'
		step3Checkboxes[2].closest('.input-addon').querySelector('.price').textContent = '$20/yr'
	} else {
		selections.period = 'Monthly'
		step2Switch.querySelectorAll('div')[2].classList.toggle('selected')
		step2Switch.querySelectorAll('div')[0].classList.toggle('selected')

		step2Inputs[0].querySelectorAll('div p')[0].textContent = '$9/mo'
		step2Inputs[1].querySelectorAll('div p')[0].textContent = '$12/mo'
		step2Inputs[2].querySelectorAll('div p')[0].textContent = '$15/mo'

		step2Inputs.forEach(input => (input.querySelector('.bonus').style.display = 'none'))

		step3Checkboxes[0].closest('.input-addon').querySelector('.price').textContent = '$1/mo'
		step3Checkboxes[1].closest('.input-addon').querySelector('.price').textContent = '$2/mo'
		step3Checkboxes[2].closest('.input-addon').querySelector('.price').textContent = '$2/mo'
	}
	console.log(selections)
}

const ifCorrect2 = () => {
	if (selections.plan === undefined || selections.period === undefined) {
		return false
	} else {
		return true
	}
}

// 3 STEP

const addOnSelect = e => {
	// console.log(e.target);

	if (step3Checkboxes[0].checked == true) {
		selections.addon1 = 'Online services'
		step3Checkboxes[0].closest('.input-addon').classList.add('active')
	} else {
		delete selections.addon1
		step3Checkboxes[0].closest('.input-addon').classList.remove('active')
	}
	if (step3Checkboxes[1].checked == true) {
		selections.addon2 = 'Larger storage'
		step3Checkboxes[1].closest('.input-addon').classList.add('active')
	} else {
		delete selections.addon2
		step3Checkboxes[1].closest('.input-addon').classList.remove('active')
	}
	if (step3Checkboxes[2].checked == true) {
		selections.addon3 = 'Customizable profile'
		step3Checkboxes[2].closest('.input-addon').classList.add('active')
	} else {
		delete selections.addon3
		step3Checkboxes[2].closest('.input-addon').classList.remove('active')
	}
	console.log(selections)
}

const ifCorrect3 = () => {
	return true
}

document.addEventListener('DOMContentLoaded', () => {
	main()
	test()
	currentStep()
	wipeout()
})
