class Cars {
    constructor(options) {
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
    }
    start(){
        console.log('Машина заведена')
    }
}
const BMW = new Cars({
    model: 'X6',
    color: 'black',
    wheels: 4
})
console.log(BMW)
BMW.start()

//1
class Lexus extends Cars{
    constructor(port) {
        super(port);
        this.volume = port.volume
    }
}
const lexus570 = new Lexus({
    model: 'LX570',
    color: 'black',
    wheels: 4,
    volume: 5.7
})
console.log(lexus570)
lexus570.start()

//2
class Toyota extends Cars{
    constructor(port) {
        super(port);
        this.steeringWheel = port.steeringWheel
    }
}
const toyota200 = new Toyota({
    model: 'Land Cruiser',
    color: 'grey',
    wheels: 4,
    volume: 4.7,
    steeringWheel: 'left'
})
console.log(toyota200)
toyota200.start()

//3
class ToyotaC extends Cars{
    constructor(port) {
        super(port);
        this.yearOfIssue = port.yearOfIssue
    }
}
const camry50 = new ToyotaC({
    model: 50,
    color: 'red',
    wheels: 4,
    volume: 2.5,
    steeringWheel: 'left',
    yearOfIssue: 2011
})
console.log(camry50)
camry50.start()

//dop dz
class Light
{
    constructor(selector)
    {
        this.$element = document.getElementById(selector)
    }
}

class Circle extends Light
{
    constructor(options)
    {
        super(options.selector)
        this.$element.style.backgroundColor = options.color
        this.$element.textContent = options.text
    }
}

let color = prompt('Введите цвет светофора:').toLowerCase() .trim();
if (color === 'красный' || color === 'red') {
    const red = new Circle({
        selector: 'red',
        color: 'red',
        text: 'stop'
    })
}
else if (color === 'желтый' || color === 'жёлтый' || color === 'yellow') {
    const yellow = new Circle({
        selector: 'yellow',
        color: 'yellow',
        text: 'wait'
    })
}
else if (color === 'зеленный' || color === 'зеленый' || color === 'зелённый' || color === 'зелёный' || color === 'green') {
    const green = new Circle({
        selector: 'green',
        color: 'green',
        text: 'go'
    })
}
else alert('Вы должны ввести цвет светофора: красный, желтый или зеленный')
