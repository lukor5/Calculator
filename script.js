class Calculator {
	constructor(previousNumberInner, currentNumberInner) {
		this.previousNumberInner = previousNumberInner
		this.currentNumberInner = currentNumberInner
		this.clear()
		
	}

	clear() {
		this.currentNumber = ''
		this.previousNumber = ''
		this.operator = undefined

	}



	calculate() {
		let compute
		const prev = parseFloat(this.previousNumber)
		const curr = parseFloat(this.currentNumber)
		switch (this.operator) {
			case "+":
				compute = prev + curr
				
				break;
			case "-":
				compute = prev - curr
				
				break;
			case "*":
				compute = prev * curr
				
				break;
			case "/":
				compute = prev / curr
				
				break;
		}
		if (this.previousNumber == '' || this.currentNumber == '') return
		this.currentNumber = compute
		this.previousNumber = ''
		this.operator = undefined
	}

	addOperator(operator) {
		if (this.currentNumber == '') {
			return;
		}
		
			if (this.operator != null) {
				this.calculate()
			}
			this.operator = operator
			this.previousNumber = this.currentNumber
			this.currentNumber = ''
		
	}

	delete(){
		this.currentNumber = this.currentNumber.toString().slice(0,-1)
	}

	appendNumber(number) {
		let len = this.currentNumber.toString().length
		if(len > 15) return
		if(number =='.' && this.currentNumber.includes('.')) return
		this.currentNumber = this.currentNumber.toString() + number.toString()
	}

	displayNumber() {
		this.previousNumberInner.innerText = this.previousNumber
		this.currentNumberInner.innerText = this.currentNumber
		if (this.operator != undefined) {
			this.previousNumberInner.innerText = `${this.previousNumber} ${this.operator}`
		}
	}
}







const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalButton = document.querySelector('[data-equal]')
const previousNumberInner = document.querySelector('[data-previousNumber]')
const currentNumberInner = document.querySelector('[data-currentNumber]')
const clearButton = document.querySelector('[data-clear]')
const deleteButton = document.querySelector('[data-delete]')
const calculator = new Calculator(previousNumberInner, currentNumberInner)

numberButtons.forEach(button => {
	button.addEventListener('click', () => {
		calculator.appendNumber(button.innerText)
		calculator.displayNumber()
	})
})

operatorButtons.forEach(button => {
	button.addEventListener('click', () => {
		calculator.addOperator(button.innerText)
		calculator.displayNumber()
	})
})

equalButton.addEventListener('click', () => {
	calculator.calculate()
	calculator.displayNumber()
})

clearButton.addEventListener('click', button => {
	calculator.clear()
	calculator.displayNumber()
})

deleteButton.addEventListener('click', button => {
	calculator.delete()
	calculator.displayNumber()
})


