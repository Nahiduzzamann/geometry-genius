// link up blog section 
document.getElementById('blog').addEventListener('click', function () {
    window.location.href = 'blog.html';
})

// base and height related calculating functin 
function baseHeightCalculate(base, height) {
    const result = base * height;
    return result.toFixed(2);
}
//three parameter related calculation 
function otherCalculate(other, base, height) {
    const result = other * base * height;
    return result.toFixed(2);
}

//setting value
var SL = 1;
function setValue(name, result) {
    const div = document.createElement('div');
    div.className = 'p-4 flex items-center';
    const p = document.createElement('p');
    p.className = 'text-xs';
    const sup = document.createElement('sup');
    sup.innerText = '2';
    p.innerText = SL + '.' + '\xa0' + name + '\xa0\xa0\xa0\xa0' + result + 'cm';
    p.appendChild(sup);
    div.appendChild(p);
    console.log('final', div);

    const button = document.createElement('button');
    button.className = 'bg-sky-500 text-white rounded font-bold p-1 ml-4';
    button.innerText = 'Convert to m';
    const sup1 = document.createElement('sup');
    sup1.innerText = '2';
    button.appendChild(sup1);
    div.appendChild(button)
    document.getElementById('result-section').appendChild(div);

    SL++;

}
//triangle section
document.getElementById('triangle').addEventListener('click', function () {
    const base = parseFloat(document.getElementById('tbi').value);
    const height = parseFloat(document.getElementById('thi').value);
    if (base === null || height === null) {
        alert('Please inter value');
    }
    else if (base <= 0 || height <= 0) {
        alert('please enter positive value');
    }
    else if (base > 0 && height > 0) {
        const result = otherCalculate(0.5, base, height);
        setValue('Triangle', result);
    }
    else {
        alert('please input correct value')
    }
})

// rectangle
document.getElementById('rectangle').addEventListener('click', function () {
    const base = parseFloat(document.getElementById('rwi').value);
    const height = parseFloat(document.getElementById('rli').value);
    if (base === null || height === null) {
        alert('Please inter value');
    }
    else if (base <= 0 || height <= 0) {
        alert('please enter positive value');
    }
    else if (base > 0 && height > 0) {
        const result = baseHeightCalculate(base, height);
        setValue('Rectangle', result);
    }
    else {
        alert('please input correct value')
    }
})

// Parallelogram 

document.getElementById('parallelogram').addEventListener('click', function () {
    const base = parseFloat(document.getElementById('pbi').value);
    const height = parseFloat(document.getElementById('phi').value);
    if (base === null || height === null) {
        alert('Please inter value');
    }
    else if (base <= 0 || height <= 0) {
        alert('please enter positive value');
    }
    else if (base > 0 && height > 0) {
        const result = baseHeightCalculate(base, height);
        setValue('Parallelogram', result);
    }
    else {
        alert('please input correct value')
    }
})
// Rhombus
document.getElementById('Rhombus').addEventListener('click', function () {
    const base = parseFloat(document.getElementById('rd1').value);
    const height = parseFloat(document.getElementById('rd2').value);
    if (base === null || height === null) {
        alert('Please inter value');
    }
    else if (base <= 0 || height <= 0) {
        alert('please enter positive value');
    }
    else if (base > 0 && height > 0) {
        const result = otherCalculate(0.5, base, height);
        setValue('Rhombus', result);
    }
    else {
        alert('please input correct value')
    }
})
// Pentagon
document.getElementById('Pentagon').addEventListener('click', function () {
    const base = parseFloat(document.getElementById('ppi').value);
    const height = parseFloat(document.getElementById('pan-bi').value);
    if (base === null || height === null) {
        alert('Please inter value');
    }
    else if (base <= 0 || height <= 0) {
        alert('please enter positive value');
    }
    else if (base > 0 && height > 0) {
        const result = otherCalculate(0.5, base, height);
        setValue('Pentagon', result);
    }
    else {
        alert('please input correct value')
    }
})
// Ellipse
document.getElementById('Ellipse').addEventListener('click', function () {
    const base = parseFloat(document.getElementById('eai').value);
    const height = parseFloat(document.getElementById('ebi').value);
    if (base === null || height === null) {
        alert('Please inter value');
    }
    else if (base <= 0 || height <= 0) {
        alert('please enter positive value');
    }
    else if (base > 0 && height > 0) {
        const result = otherCalculate(3.14, base, height);
        setValue('Ellipse', result);
    }
    else {
        alert('please input correct value')
    }
})

//for change background color
document.getElementById('triangle-C').addEventListener('mouseover', function () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var col = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("triangle-C").style.backgroundColor = col;
})
document.getElementById('Rectangle-C').addEventListener('mouseover', function () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var col = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("Rectangle-C").style.backgroundColor = col;
})
document.getElementById('Parallelogram-C').addEventListener('mouseover', function () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var col = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("Parallelogram-C").style.backgroundColor = col;
})
document.getElementById('Rhombus-C').addEventListener('mouseover', function () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var col = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("Rhombus-C").style.backgroundColor = col;
})
document.getElementById('Pentagon-C').addEventListener('mouseover', function () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var col = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("Pentagon-C").style.backgroundColor = col;
})
document.getElementById('Ellipse-C').addEventListener('mouseover', function () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    var col = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("Ellipse-C").style.backgroundColor = col;
})