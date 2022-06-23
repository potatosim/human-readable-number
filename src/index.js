module.exports = function toReadable(number) {
    const num = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
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
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };

    const lessThanHundred = (digits) => { 
        if (digits in num) {
            return num[digits];
        }
        const firstNum = Math.floor(digits / 10) * 10;
        const secondNum = digits - firstNum;
        return `${num[firstNum]} ${num[secondNum]}`;
    }

    if (number >= 100) {
        const hundreds = Math.floor(number / 100);
        if (number % 100 === 0) {
            return `${num[hundreds]} hundred`;
        }
        const digits = number - hundreds * 100;
        return `${num[hundreds]} hundred ${lessThanHundred(digits)}`
    }
    return lessThanHundred(number);
}
