let current_step = 0;
let n_steps = 7;

function changeStep() {
    let slider = document.getElementById("slider");
    let cross = document.getElementById("tutorial-cross");
    let arrowleft = document.getElementById("tutorial-arrow-left");
    let arrowright = document.getElementById("tutorial-arrow-right");
    let width = slider.offsetWidth + 4;
    console.log(width);
    console.log(current_step);

    if (current_step == 0) {
        arrowleft.style.display = "none";
    } else {
        arrowleft.style.display = "block";
    }
    if (current_step == n_steps-1) {
        arrowright.style.display = "none";
    } else {
        arrowright.style.display = "block";
    }

    cross.style.opacity = 0.4;
    arrowleft.style.opacity = 0.4;
    arrowright.style.opacity = 0.4;
    slider.style.transform = "translateX(calc(0px - ("+String(current_step)+" * "+width+"px))";
    setTimeout(function() {
        cross.style.opacity = 1;
        arrowleft.style.opacity = 1;
        arrowright.style.opacity = 1;
    }, 1000); // tempo della transizione per effettuare il translate
}

function next() {
    if (current_step != n_steps-1) {
        current_step++;
        changeStep();
    }
}

function prev() {
    if (current_step > 0) {
        current_step--;
        changeStep();
    }
}

function exit() {
    return;
}