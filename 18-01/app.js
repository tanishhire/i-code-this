const buttons = document.querySelectorAll(".slider-btn")


buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("Clicked")
    })
})