let box = document.querySelector(".box")
let btn = document.querySelector("button")

btn.addEventListener("click", function () {
    let num1 = Math.floor(Math.random()*255)
    let num2 = Math.floor(Math.random()*255)
    let num3 = Math.floor(Math.random()*255)

    box.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`
})