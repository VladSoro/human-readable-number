module.exports = function toReadable(number) {
    let ones = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
      };
    let two = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
      };
    let tens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
      };


    if (number < 10) {
        return ones[number];
    } else if (number >= 10 && number < 20) {
        return two[number];
    } else if (number >= 20 && number < 100 && String(number)[1] === '0') {  //целые десятки
        return tens[String(number)[0]];
    } else if (number > 20 && number < 100) {
        return tens[String(number)[0]] + ' ' + ones[String(number)[1]];
    } else if (number >= 100 && String(number)[1] === '0' && String(number)[2] === '0') {
        return ones[String(number)[0]] + ' ' + 'hundred';
    } else if (number > 100 && String(number)[1] === '0') {
        return ones[String(number)[0]] + ' ' + 'hundred' + ' ' + ones[String(number)[2]];
    } else if (number >= 110 && String(number)[1] === '1') {
        return ones[String(number)[0]] + ' ' + 'hundred' + ' ' + two[String(number)[1] + String(number)[2]];
    } else if (number >= 120 && String(number)[2] === '0') {
        return ones[String(number)[0]] + ' ' + 'hundred' + ' ' + tens[String(number)[1]];
    } else if (number > 120) {
        return ones[String(number)[0]] + ' ' + 'hundred' + ' ' + tens[String(number)[1]] + ' ' + ones[String(number)[2]];
    }
}