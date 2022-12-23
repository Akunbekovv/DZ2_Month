//1
let number = (a, b) => {
    if (a < b){
        console.log('минимальное число:', a)
    }else if (b < a){
        console.log('минимальное число:', b)
    }else if (a === b){
        console.log('числа ' + a + ' и ' + b + ' равны')
    } else {
        console.log('error')
    }
}

number(10,5)

// 2

let arrow = (arr = prompt('vvedite chto nibud')) =>{
    return console.log(arr.length)
}
arrow()



// 3
let calc1 = Number(prompt('введите первое число'))
let calc2 = prompt('введите математическое выражение')
let calc3 = Number(prompt('введите второе число'))
let rezult = 'rez'
let calculator = (calc1, calc2, calc3, rezult) =>{
    switch (calc2){
        case '+':
            alert(rezult = calc1 + calc3)
            break
        case '-':
            alert(rezult = calc1 - calc3)
            break
        case '/':
            if (calc3 === 0){
                alert('nelzaya delit na 0')
                break
            }
            alert(rezult = calc1 / calc3)
            break
        case '*':
            alert(rezult = calc1 * calc3)
            break
        default:
            alert('error')
            break
    }
}

calculator(calc1, calc2, calc3, rezult)
