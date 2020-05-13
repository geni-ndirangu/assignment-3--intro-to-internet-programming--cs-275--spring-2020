const cells = document.querySelectorAll(`td`);
let lastRotatedCell;

function rotateCell(){
    const rotated = this.classList.contains(`rotate`);
    if (!rotated){
        this.classList.add(`rotate`);
        if (lastRotatedCell) lastRotatedCell.classList.remove(`rotate`);
        lastRotatedCell = this;
    } else {
        this.classList.remove(`rotate`);
        lastRotatedCell = null;
    }
}

cells.forEach(cell => cell.addEventListener(`click`, rotateCell));
