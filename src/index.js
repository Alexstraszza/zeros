module.exports = function getZerosCount(number) {

    var result = 0;
    for (var i = 5; i < number; i = i*5) {
        result = result + (number - number % i) / i;
    }
    return result;
}
