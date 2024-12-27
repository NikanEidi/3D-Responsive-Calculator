const display = document.getElementById("Display");
const modeSwitcher = document.getElementById("modeSwitcher");
const modes = [
    { class: "modern-mode", icon: "fas fa-mars" },
    { class: "light-mode", icon: "fas fa-sun" },
    { class: "dark-mode", icon: "fas fa-moon" },
];
let currentMode = 0;

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

modeSwitcher.addEventListener("click", () => {
    // Remove current mode
    document.body.classList.remove(modes[currentMode].class);
    // Switch to the next mode
    currentMode = (currentMode + 1) % modes.length;
    document.body.classList.add(modes[currentMode].class);
    // Update button icon
    modeSwitcher.innerHTML = `<i class="${modes[currentMode].icon}"></i>`;
});