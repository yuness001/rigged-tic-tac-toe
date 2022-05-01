let title = document.querySelector('.title');
let turn = 'X';
function end(num1, num2, num3) {
    title.innerHTML = `${this.square[num1]} is the winner.`;
    document.getElementById('item' + num1).style.background = '#000';
    document.getElementById('item' + num2).style.background = '#000';
    document.getElementById('item' + num3).style.background = '#000';

    setTimeout(function () { location.reload() }, 3000)
}
function winner() {
    var square1 = document.getElementById('item1').innerHTML;
    var square2 = document.getElementById('item2').innerHTML;
    var square3 = document.getElementById('item3').innerHTML;
    var square4 = document.getElementById('item4').innerHTML;
    var square5 = document.getElementById('item5').innerHTML;
    var square6 = document.getElementById('item6').innerHTML;
    var square7 = document.getElementById('item7').innerHTML;
    var square8 = document.getElementById('item8').innerHTML;
    var square9 = document.getElementById('item9').innerHTML;
    if (square1 == square2 && square2 == square3 && square1 != '') {
        title.innerHTML = `${square1} is the winner.`;
        document.getElementById('item1').style.background = '#2c7b7c';
        document.getElementById('item2').style.background = '#2c7b7c';
        document.getElementById('item3').style.background = '#2c7b7c';
        setInterval(function () { title.innerHTML += '.' }, 1000)
        setTimeout(function () { location.reload() }, 2000)
    } else if (square4 == square5 && square5 == square6 && square4 != '') {
        title.innerHTML = `${square4} is the winner.`;
        document.getElementById('item4').style.background = '#2c7b7c';
        document.getElementById('item5').style.background = '#2c7b7c';
        document.getElementById('item6').style.background = '#2c7b7c';
        setInterval(function () { title.innerHTML += '.' }, 1000)
        setTimeout(function () { location.reload() }, 2000)
    } else if (square7 == square8 && square8 == square9 && square7 != '') {
        title.innerHTML = `${square7} is the winner.`;
        document.getElementById('item7').style.background = '#2c7b7c';
        document.getElementById('item8').style.background = '#2c7b7c';
        document.getElementById('item9').style.background = '#2c7b7c';
        setInterval(function () { title.innerHTML += '.' }, 1000)
        setTimeout(function () { location.reload() }, 2000)
    } else if (square1 == square5 && square5 == square9 && square1 != '') {
        title.innerHTML = `${square1} is the winner.`;
        document.getElementById('item1').style.background = '#2c7b7c';
        document.getElementById('item5').style.background = '#2c7b7c';
        document.getElementById('item9').style.background = '#2c7b7c';
        setInterval(function () { title.innerHTML += '.' }, 1000)
        setTimeout(function () { location.reload() }, 2000)
    } else if (square3 == square5 && square5 == square7 && square3 != '') {
        title.innerHTML = `${square3} is the winner.`;
        document.getElementById('item3').style.background = '#2c7b7c';
        document.getElementById('item5').style.background = '#2c7b7c';
        document.getElementById('item7').style.background = '#2c7b7c';
        setInterval(function () { title.innerHTML += '.' }, 1000)
        setTimeout(function () { location.reload() }, 2000)
    } else if (square1 == square4 && square4 == square7 && square1 != '') {
        title.innerHTML = `${square1} is the winner.`;
        document.getElementById('item1').style.background = '#2c7b7c';
        document.getElementById('item4').style.background = '#2c7b7c';
        document.getElementById('item7').style.background = '#2c7b7c';
        setInterval(function () { title.innerHTML += '.' }, 1000)
        setTimeout(function () { location.reload() }, 2000)
    } else if (square2 == square5 && square5 == square8 && square2 != '') {
        title.innerHTML = `${square2} is the winner.`;
        document.getElementById('item2').style.background = '#2c7b7c';
        document.getElementById('item5').style.background = '#2c7b7c';
        document.getElementById('item8').style.background = '#2c7b7c';
        setInterval(function () { title.innerHTML += '.' }, 1000)
        setTimeout(function () { location.reload() }, 2000)
    } else if (square3 == square6 && square6 == square9 && square3 != '') {
        title.innerHTML = `${square3} is the winner.`;
        document.getElementById('item3').style.background = '#2c7b7c';
        document.getElementById('item6').style.background = '#2c7b7c';
        document.getElementById('item9').style.background = '#2c7b7c';
        setInterval(function () { title.innerHTML += '.' }, 1000)
        setTimeout(function () { location.reload() }, 2000)
    } else if (square1 != '' && square2 != '' && square3 != '' && square4 != '' && square5 != '' && square6 != '' && square7 != '' && square8 != '' && square9 != '') {
        title.innerHTML = `DRAW.`;
        setInterval(function () { title.innerHTML += '.' }, 1000)
        setTimeout(function () { location.reload() }, 2000)
    }
}
function game(id) {
    let element = document.getElementById(id);
    if (turn === 'X' && element.innerHTML == '') {
        element.innerHTML = 'X';
        turn = 'O';
        title.innerHTML = 'O';
    } else if (turn === 'O' && element.innerHTML == '') {
        element.innerHTML = 'O';
        turn = 'X';
        title.innerHTML = 'X';
    }
    winner()
}