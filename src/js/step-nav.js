let planPricesMo = ['$9/mo', '$12/mo', '$15/mo']
let planPricesYr = ['$90/yr', '$120/yr', '$150/yr']
let addonPricesMo = ['$1/mo', '$2/mo', '$2/mo']
let addonPricesYr = ['$10/yr', '$20/yr', '$20/yr']

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
let step4Summary
let step4Total

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
		document.querySelector('main .step-5'),
	]
	prevBtn = document.querySelector('.prev-step')
	nextBtn = document.querySelector('.next-step')

	step1Inputs = document.querySelectorAll('.step-1 input')
	step1Warnings = document.querySelectorAll('.step-1 div.warning')

	step2Inputs = document.querySelectorAll('.step-2 .input-plan')
	step2Switch = document.querySelector('.step-2 .period-switch')

	step3Checkboxes = document.querySelectorAll('.step-3 input')

	step4Summary = document.querySelector('.step-4 .summary')
	step4Total = document.querySelector('.step-4 .total')
}

const prepareDOMEvents = () => {
	// navSteps.forEach(step => step.addEventListener('click', navStepSelect))
	nextBtn.addEventListener('click', stepNext)
	prevBtn.addEventListener('click', stepPrev)
	step2Inputs.forEach(plan => plan.addEventListener('click', planSelect))
	step2Switch.querySelector('input').addEventListener('click', periodSelect)
	step3Checkboxes.forEach(addon => addon.addEventListener('click', addOnSelect))
	step4Summary.querySelector('.change').addEventListener('click', changePlan)
}

const test = () => {}

//STEP NAVIGATION and START FUNCS

const currentStep = () => {
	for (let i = 0; i < mainSteps.length; i++) {
		if (mainSteps[i].classList.contains('innactive')) {
		} else return i
	}
}

const activateStep = forward => {
	mainSteps.forEach(mainStep => mainStep.classList.add('innactive'))
	mainSteps[forward].classList.remove('innactive')

	navSteps.forEach(navStep => navStep.classList.remove('active'))
	if (forward == 4) {
		navSteps[3].classList.add('active')
	} else {
		navSteps[forward].classList.add('active')
	}

	if (forward != 0) {
		prevBtn.classList.remove('blank')
	} else {
		prevBtn.classList.add('blank')
	}

	if (forward == 3) {
		nextBtn.textContent = 'Confirm'
		nextBtn.style.backgroundColor = 'hsl(243, 100%, 62%)'
	} else {
		nextBtn.textContent = 'Next step'
		nextBtn.style.backgroundColor = 'hsl(213, 96%, 18%)'
	}

	if (forward == 4) {
		prevBtn.classList.add('blank')
		nextBtn.classList.add('blank')
	} else {
		prevBtn.classList.remove('blank')
		nextBtn.classList.remove('blank')
	}
}

const stepNext = () => {
	if (ifCorrect1() == false && currentStep() == 0) {
		console.log('warunek 1 niespelniony')
	} else {
		if (ifCorrect2() == false && currentStep() == 1) {
			console.log('warunek 2 niespelniony')
		} else {
			if (ifCorrect3() == false && currentStep() == 2) {
				console.log('warunek 3 niespelniony')
			} else {
				activateStep(currentStep() + 1)
			}
		}
	}
}
const stepPrev = () => {
	if (currentStep() > 0) {
		activateStep(currentStep() - 1)
	}
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

		// step2Inputs[0].querySelectorAll('div p')[0].textContent = '$90/yr'
		step2Inputs[0].querySelectorAll('div p')[0].textContent = planPricesYr[0]
		step2Inputs[1].querySelectorAll('div p')[0].textContent = planPricesYr[1]
		step2Inputs[2].querySelectorAll('div p')[0].textContent = planPricesYr[2]

		step2Inputs.forEach(input => (input.querySelector('.bonus').style.display = 'flex'))

		step3Checkboxes[0].closest('.input-addon').querySelector('.price').textContent = '+ ' + addonPricesYr[0]
		step3Checkboxes[1].closest('.input-addon').querySelector('.price').textContent = '+ ' + addonPricesYr[1]
		step3Checkboxes[2].closest('.input-addon').querySelector('.price').textContent = '+ ' + addonPricesYr[2]
	} else {
		selections.period = 'Monthly'
		step2Switch.querySelectorAll('div')[2].classList.toggle('selected')
		step2Switch.querySelectorAll('div')[0].classList.toggle('selected')

		step2Inputs[0].querySelectorAll('div p')[0].textContent = planPricesMo[0]
		step2Inputs[1].querySelectorAll('div p')[0].textContent = planPricesMo[1]
		step2Inputs[2].querySelectorAll('div p')[0].textContent = planPricesMo[2]

		step2Inputs.forEach(input => (input.querySelector('.bonus').style.display = 'none'))

		step3Checkboxes[0].closest('.input-addon').querySelector('.price').textContent = '+ ' + addonPricesMo[0]
		step3Checkboxes[1].closest('.input-addon').querySelector('.price').textContent = '+ ' + addonPricesMo[1]
		step3Checkboxes[2].closest('.input-addon').querySelector('.price').textContent = '+ ' + addonPricesMo[2]
	}
	console.log(selections)
}

const ifCorrect2 = () => {
	if (selections.plan === undefined || selections.period === undefined) {
		return false
	} else {
		sumUp()
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
// 4 STEP

const sumUp = () => {
	let planPrices
	let planPrice
	let addonPrices
	let periodShortcut
	if (selections.period == 'Yearly') {
		planPrices = planPricesYr
		addonPrices = addonPricesYr
		periodShortcut = 'yr'
	} else {
		planPrices = planPricesMo
		addonPrices = addonPricesMo
		periodShortcut = 'mo'
	}
	if (selections.plan === 'Arcade') {
		planPrice = planPrices[0]
	}
	if (selections.plan === 'Advanced') {
		planPrice = planPrices[1]
	}
	if (selections.plan === 'Pro') {
		planPrice = planPrices[2]
	}
	let selectedPlan = step4Summary.querySelector('h2')
	selectedPlan.textContent = selections.plan + ' (' + selections.period + ')'
	step4Summary.querySelector('.plan-price').textContent = planPrice
	let totalCost = Number(planPrice.slice(1, -3))

	let addon1 = step4Summary.querySelector('.addon1')
	let addon2 = step4Summary.querySelector('.addon2')
	let addon3 = step4Summary.querySelector('.addon3')
	let addons = [addon1, addon2, addon3]
	addons.forEach(addon => addon.classList.add('innactive'))

	if (selections.addon1 != undefined) {
		addon1.classList.remove('innactive')
		addon1.querySelector('.addon-price').textContent = '+' + addonPrices[0]
		totalCost = totalCost + Number(addonPrices[0].slice(1, -3))
	}
	if (selections.addon2 != undefined) {
		addon2.classList.remove('innactive')
		addon2.querySelector('.addon-price').textContent = '+' + addonPrices[1]
		totalCost = totalCost + Number(addonPrices[1].slice(1, -3))
	}
	if (selections.addon3 != undefined) {
		addon3.classList.remove('innactive')
		addon3.querySelector('.addon-price').textContent = '+' + addonPrices[2]
		totalCost = totalCost + Number(addonPrices[2].slice(1, -3))
	}

	step4Total.querySelector('div').textContent = 'Total (per ' + selections.period.slice(0, -2) + ')'
	step4Total.querySelector('.total-price').textContent = '$' + totalCost + '/' + periodShortcut
}

const changePlan = () => {
	activateStep(1)
}

document.addEventListener('DOMContentLoaded', () => {
	main()
	test()
	currentStep()
	wipeout()
})
