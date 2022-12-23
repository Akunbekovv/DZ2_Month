// 1
const arr = []
for (let i = 0; i < 11; i++) {
    arr.push(i)
}
console.log(arr)

// 2
for (let g = 20; g > 0; g--) {
    console.log(g)
}

// 3
const svetofor = prompt('Выберите цвет, (красный, жёлтый, зелёный)')
switch (svetofor) {
    case 'красный':
        alert('Stop')
        break
    case 'жёлтый':
        alert('Wait')
        break
    case 'зелёный':
        alert('Go')
        break
    default:
        alert('Error')
}
