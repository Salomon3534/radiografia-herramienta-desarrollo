const p = document.getElementById("down")
const yappington = document.getElementById("yap")

p.addEventListener("click", 
    function () {
        let da_message = document.getElementById("msg")

        da_message.textContent = "Chachi pistachi"
    }
)

p.addEventListener("dblclick",
    function () {
        console.log("mezuzu")
    }
)

yappington.addEventListener("click", function () {
    const HIDDEN_CLASS = "h"
    let yaap = document.getElementById("yapyapyap");

    yaap.classList.toggle(HIDDEN_CLASS);

    if (yaap.classList.contains(HIDDEN_CLASS)) {
        yappington.textContent = "Show show show";
    } else {
        yappington.textContent = "Hide it";
    }
});