function getNumber () {
    var resultNumber = document.getElementById('result');
    resultNumber.innerHTML = ''; 
    var number = '';
    var i = 0;

    var intervalId = setInterval(function () {
        if (i < 4) {
            var digit = Math.floor(Math.random() * 10);
            number += digit;
            resultNumber.innerHTML = number;
            i++;
        } else {
            clearInterval(intervalId); 
        }
    }, 1000); 
}
