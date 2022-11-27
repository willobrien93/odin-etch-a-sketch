// Generate static grid of elements
const container = document.getElementById('container');
const div = document.createElement('div');

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        // Create flexbox rows
        let row = div.cloneNode();
        row.setAttribute('class','row');
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            // Create pixels in each row
            let pixel = div.cloneNode();
            pixel.setAttribute('class', 'pixel');
            row.appendChild(pixel);
        }
    }
}

createGrid(50);

// Sketch on hover
pixels = document.querySelectorAll(".pixel");
pixels.forEach(pixel => pixel.addEventListener('mouseover', pixelFill ));

function pixelFill(e) {
    e.target.classList.add("pixelFill");
}

// Clear Pixels
function clearContainer() {
    const filled = document.querySelectorAll('.pixelFill');
    for(elem of filled) {
        elem.classList.remove('pixelFill');
    }
}