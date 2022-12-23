const input = document.querySelector('.text')
const button = document.querySelector('#buttons')
const div = document.querySelector('.second')
const zero = () => {
    if (input.value.trim() === '')
        return false
    else {
         let one = []
        one.push(input.value)
        one.map((e)=>{
            const h2 = document.createElement('h2')
            div.append(h2)
            h2.append(e, '-', e.split('').reverse().join())
        })
        input.value = ''
    }
}

button.onclick = () =>  zero()

input.onkeydown = (e) => {
    if (e.keyCode === 13) zero()
}

