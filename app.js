const Inputs = document.querySelectorAll(".input")

function FocusFunction() {
    let Parent = this.parentNode
    Parent.classList.add("focus")
}

function BlurFunction() {
    let Parent = this.parentNode
    if(this.value == "") {
        Parent.classList.remove("focus")
    }
}

Inputs.forEach((input) => {
    input.addEventListener("focus", FocusFunction)
    input.addEventListener("blur", BlurFunction)
})