let slidesQuantity = document.querySelectorAll(".slider_items").length;
let currentSlide = 0;

document.querySelector(".slider_container").style.width = `calc(100vw * ${slidesQuantity})`;


function selectSlide(element) {
    document.querySelector(".selected_slide").classList.remove("selected_slide");
    element.classList.add("selected_slide");

    let controlsList = document.querySelectorAll(".controls");
    controlsList.forEach((item, index) => {
        if(item.classList.contains("selected_slide")) {
            updateMargin(index);
            currentSlide = index;
        }
    });
}

function goNextSlide() {
    currentSlide++;
    if(currentSlide > (slidesQuantity - 1)) {
        currentSlide = 0;
    }

    document.querySelector(".selected_slide").classList.remove("selected_slide");
    let controlsList = document.querySelectorAll(".controls");
    controlsList[currentSlide].classList.add("selected_slide");
    updateMargin(currentSlide);
}

function updateMargin(selectedSlide) {
    let newMargin = selectedSlide * document.querySelector(".slider_items").clientWidth;
    document.querySelector(".slider_container").style.marginLeft = `-${newMargin}px`;
}

setInterval(goNextSlide, 5000);