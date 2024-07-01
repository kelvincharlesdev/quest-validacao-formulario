let form = document.querySelector('#form')
let inputs = document.querySelectorAll('.campo')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    inputs.forEach(input => {
      let inputValue = input.value
      let mesage = document.querySelectorAll('.obrigatorio')

      verificaInput(mesage, inputValue)

    })
})

function verificaInput(mesage, inputValue ) {
    mesage.forEach(item =>{
        const mesageError = item.parentElement

        if (inputValue === '') {
            mesageError.classList.add('error')
            mesageError.classList.remove('correct')

        }else {
            mesageError.classList.remove('error')
            mesageError.classList.add('correct')
        }

    })
}