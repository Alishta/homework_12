let userName = prompt('Enter your name');
let surname = prompt ('Enter your surname');
let live = prompt('Enter your city');

let info = userName + ' ' + surname + ' ' + live;
document.write(info);

let numb = +prompt('Enter a five-digit number');
while(numb < 10000 || numb > 99999) {
    numb = +prompt('Enter a five-digit number');
}

let result = numb.toString().split('');
document.write(result.join(' '));