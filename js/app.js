const cells = document.querySelectorAll(`td`);
let lastRotatedElement;

function rotateCell(){
    const rotated = this.classList.contains(`rotate`);
    if (!rotated){
        this.classList.add(`rotate`);
        if (lastRotatedElement) lastRotatedElement.classList.remove(`rotate`);
        lastRotatedElement = this;
    } else {
        this.classList.remove(`rotate`);
        lastRotatedElement = null;
    }
}

cells.forEach(cell => cell.addEventListener(`click`, rotateCell));
