// 1. triangle
document.getElementById('triangle-calculate').addEventListener('click', function () {
    const b = getValue('triangle-b');
    const n = getValue('triangle-n');
    if (b === 0 || n === 0) {
        alert('Please give number.');
        return;
    }
    else if (b === -1 || n === -1) {
        alert('Please give numbers only.');
        return;
    }
    else if (b === -2 || n === -2) {
        alert('Please give positive numbers only.');
        return;
    }
    const areaString = (b * n * 0.5).toFixed(2);
    addToCalculationArea('Triangle', areaString);
});
// 2. rectangle
document.getElementById('rectangle-calculate').addEventListener('click', function () {
    const w = getValue('rectangle-w');
    const i = getValue('rectangle-i');
    if (w === 0 || i === 0) {
        alert('Please give number.');
        return;
    }
    else if (w === -1 || i === -1) {
        alert('Please give numbers only.');
        return;
    }
    else if (w === -2 || i === -2) {
        alert('Please give positive numbers only.');
        return;
    }
    const areaString = (w * i).toFixed(2);
    addToCalculationArea('Rectangle', areaString);
});
// 3. parallelogram
document.getElementById('parallelogram-calculate').addEventListener('click', function () {
    const b = getValue('parallelogram-b');
    const h = getValue('parallelogram-h');
    if (b === 0 || h === 0) {
        alert('Please give number.');
        return;
    }
    else if (b === -1 || h === -1) {
        alert('Please give numbers only.');
        return;
    }
    const areaString = (b * h).toFixed(2);
    addToCalculationArea('Parallelogram', areaString);
});
// 4. rhombus
document.getElementById('rhombus-calculate').addEventListener('click', function () {
    const d1 = getValue('rhombus-d1');
    const d2 = getValue('rhombus-d2');
    if (d1 === 0 || d2 === 0) {
        alert('Please give number.');
        return;
    }
    else if (d1 === -1 || d2 === -1) {
        alert('Please give numbers only.');
        return;
    }
    const areaString = (0.5 * d1 * d2).toFixed(2);
    addToCalculationArea('Rhombus', areaString);
});
// 5. pentagon
document.getElementById('pentagon-calculate').addEventListener('click', function () {
    const p = getValue('pentagon-p');
    const b = getValue('pentagon-b');
    if (b === 0 || p === 0) {
        alert('Please give number.');
        return;
    }
    else if (b === -1 || p === -1) {
        alert('Please give numbers only.');
        return;
    }
    const areaString = (0.5 * p * b).toFixed(2);
    addToCalculationArea('Pentagon', areaString);
});
// 6. ellipse
document.getElementById('ellipse-calculate').addEventListener('click', function () {
    const a = getValue('ellipse-a');
    const b = getValue('ellipse-b');
    if (b === 0 || a === 0) {
        alert('Please give number.');
        return;
    }
    else if (b === -1 || a === -1) {
        alert('Please give numbers only.');
        return;
    }
    const areaString = (3.1415 * a * b).toFixed(2);
    addToCalculationArea('Ellipse', areaString);
});

function randomColor(card) {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    const generatedColor = "#" + randomColor;
    card.style.backgroundColor = generatedColor;
}