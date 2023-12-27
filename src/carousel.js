const titles = ["Baba Arra", "A A A", "Bar Bar", "Bra", "Rabar", "Arra R", "Rarrabar", "Rara Bara", "Arab", "B"];

let buttons = document.querySelectorAll(".choice > label");
let slides  = document.querySelectorAll(".carousel .slide");
let title   = document.querySelector(".title");
let previousSlide = 0;

buttons.forEach(button => {
    button.addEventListener("click", ()=>{
        let btnString = button.getAttribute("for");
        let slideNumber = Number(btnString[3]);
        
        slides[previousSlide].setAttribute("data-active", "false");
        slides[slideNumber].setAttribute("data-active", "true");
        title.textContent = titles[slideNumber];
        previousSlide = slideNumber;
    });
});