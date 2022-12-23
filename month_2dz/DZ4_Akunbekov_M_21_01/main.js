//1
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let h2 = document.querySelector('.h2')
let a = 0
plus.addEventListener('click', ()=>{
    a++
    if(a > 0){
        h2.innerText = a
        h2.style.color = 'green'
    }
})
minus.addEventListener('click', ()=>{
    a--
    if(a >= 0) {
        h2.innerText = a
        h2.style.color = 'red'
    }

})
//2
let coordinates = document.querySelector('.coordinates')
let x = document.querySelector('.x')
let y = document.querySelector('.y')


coordinates.addEventListener('mousemove' , (e) => {
    x.innerText = e.screenX
    y.innerText = e.screenY
})

// 3
let svtf = prompt('введите светофор').toLocaleLowerCase().trim()
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')
if (svtf === 'красный' || svtf === 'red'){
    alert('STOP')
    red.style.background = 'red';
} else if (svtf === 'желтый' || svtf === 'yellow') {
    alert('WAIT')
    yellow.style.background = 'yellow';
}
else if (svtf === 'зеленый' || svtf === 'green') {
    alert('GO')
    green.style.background = 'green';
} else {
    alert('надо было вести цвет')
}