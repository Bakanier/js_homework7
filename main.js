const user = {
    name: "Beka",
    age: 21,
    showInformation: function() {
      console.log(`Имя: ${this.name}, Возраст: ${this.age}`)
    }
}

user.showInformation();

const car = {
    brand: "Aston Martin",
    description: function() {
      return `Моя машина - ${this.brand}`
    }
  }

const carDescription = car.description()
console.log(carDescription)


const circle = {
    radius: 5,
    calculateArea: function() {
      const radius = Math.PI * Math.pow(this.radius, 2)
      return radius;
    }
}

const circleRadius = circle.calculateArea()
console.log(`Площадь круга: ${circleRadius}`)


const calculator = {
    number1: 5,
    number2: 3,
    add: function() {
      return this.number1 + this.number2
    },
    multiply: function() {
      return this.number1 * this.number2
    }
}
  
const sum = calculator.add()
const product = calculator.multiply()
  
console.log(`Сумма чисел: ${sum}`)
console.log(`Произведение чисел: ${product}`)


const DaysOfWeek = {
    days: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
    currentDayIndex: null,
    getCurrentDay: function() {
      const today = new Date()
      this.currentDayIndex = today.getDay()
      return `Сегодня: ${this.days[this.currentDayIndex]}`
    }
  }
  
const today = DaysOfWeek.getCurrentDay()
console.log(today)


const product1 = {
    name: "GALAX GeForce RTX 4090 SG 1-Click OC 24GB GDDR6X 384bit 2595Mhz/21000Mhz RGB TRIPPLE Fan HDMI 3xDisplayPort [49NXM5MD6DSG]",
    price: 209259,
    information: function() {
      return `Продукт: ${this.name} стоит ${this.price} сом.`
    }
}
  
const product1Information =product1.information()
console.log(product1Information)


const animal = {
    name: "Собака",
    makeSound: function(sound) {
      return `${this.name} издает звук ${sound}`
    }
}
    
const sound = animal.makeSound("BAU BAU")
console.log(sound)


//!


function myReduce(arr, reducer, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0]
    const startIndex = initialValue !== undefined ? 0 : 1
  
    for (let i = startIndex; i < arr.length; i++) {
      accumulator = reducer(accumulator, arr[i])
    }
  
    return accumulator
}
  

function mySort(arr, compareFunction) {
    const arrCopy = [...arr]
    if (compareFunction) {
      arrCopy.sort(compareFunction)
    } else {
      arrCopy.sort()
    }
    return arrCopy
}
