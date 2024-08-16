module.exports = function toReadable(number) {
    const ones = [
        '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = [
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = 'hundred';

    if (number === 0) return 'zero';

    let result = '';

    if (number > 99) { // here we check if number has hundreds
        result += ones[Math.floor(number / 100)] + ' ' + hundred;
        number %= 100;
        if (number > 0) {
            result += ' ';
        }
    }

    if (number >= 10 && number < 20) {
        result += teens[number - 10];
    } else {
        if (number >= 20) {
            result += tens[Math.floor(number / 10)];
            number %= 10;
            if (number > 0) {
                result += ' ';
            }
        }
        result += ones[number];
    }
    return result.trim();

}
