let title = document.querySelector('.title')

document.addEventListener('keydown',function (event) {

    appendValueToDom(event)
    let userinput = event.key.toUpperCase()
    let result = document.getElementById(userinput)
    result.classList.add('hit')

    result.addEventListener('animationend', function () {
        result.classList.remove('hit')
    })
})


function appendValueToDom (event) {
    if (event.code === 'Backspace') {
        title.innerHTML = title.innerHTML.slice(0, -1)
        return
    }

    title.innerHTML += event.key

}