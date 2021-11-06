function numberToString(number) {
    //3. Вводим число(0-999), получаем строку с прописью числа.

    if (number < 1000) {

        var arrNumbers = [];
        arrNumbers[1] = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать',
            'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
        arrNumbers[2] = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
        arrNumbers[3] = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
        function numberParser(num) {
            var string = '';
            var numHundred = '';
            if (num.length == 3) {
                numHundred = num.substr(0, 1);
                num = num.substr(1, 3);
                string = arrNumbers[3][numHundred] + ' ';
            }
            if (num < 20) string += arrNumbers[1][parseFloat(num)] + ' ';
            else {
                var firstNum = num.substr(0, 1);
                var secondNum = num.substr(1, 2);
                string += arrNumbers[2][firstNum] + ' ' + arrNumbers[1][secondNum] + ' ';
            }

            string = string.replace('  ', ' ');
            return string;
        }

        if (!number || number == 0) return 'Ноль';
        if (typeof number !== 'number') {
            number = number.replace(',', '.');
            number = parseFloat(number);
            if (isNaN(number)) return 'Ноль';
        }
        number = number.toFixed(2);
        if(number.indexOf('.') != -1) {
            var numberArr = number.split('.');
            var number = numberArr[0];
            var numberDecimals = numberArr[1];
        }
        var numberLength = number.length;
        var string = '';
        var numParser = '';
        var count = 0;
        for (var p = (numberLength - 1); p >= 0; p--) {
            var numDigit = number.substr(p, 1);
            numParser = numDigit +  numParser;
            if ((numParser.length == 3 || p == 0) && !isNaN(parseFloat(numParser))) {
                string = numberParser(numParser, count) + string;
                numParser = '';
                count++;
            }
        }
        if (numberDecimals) string ;
        string=string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
        return string;
    } return "Введите корректное число"
}
// console.log  (numberToString(999));

function stringToNumber(str) {
// 4. Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число
    var numbers  = {
        ноль: 0, один: 1, два: 2, три: 3, четыре: 4, пять: 5, шесть: 6, семь: 7, восемь: 8, девять: 9, десять: 10,
        одиннадцать: 11, двенадцать: 12, тринадцать: 13, четырнадцать: 14, пятнадцать: 15, шестнадцать: 16, семнадцать: 17, восемнадцать: 18, девятнадцать: 19, двадцать: 20,
        тридцать: 30, сорок: 40, пятьдесят: 50, шестьдесят: 60, семьдесят: 70, восемьдесят: 80, девяносто: 90, сто: 100,
        двести: 200, триста: 300, четыреста: 400, пятьсот: 500, шестьсот: 600, семьсот: 700, восемьсот: 800, девятьсот: 900,
    };
    var stringArr = str.split(' ');
    var myNumber = 0;

    for (var key in  numbers) {

        for (var i = 0; i < stringArr.length; i++){

            if (key === stringArr[i] && numbers[key] < 1000) {
                myNumber =  myNumber + numbers[key];
            }else if (key === stringArr[i]){
                myNumber = myNumber * numbers[key];
            }
        }
    }
    return myNumber;
}
// console.log( stringToNumber("триста двенадцать") );

function numberToStringEnlarged(number) {
    //5. Для задания 3 расширить диапазон до 999 миллиардов


    var arrNumbers = [];
    arrNumbers[1] = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать',
        'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    arrNumbers[2] = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    arrNumbers[3] = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
    function numberParser(num, desc) {
        var string = '';
        var numHundred = '';
        if (num.length == 3) {
            numHundred = num.substr(0, 1);
            num = num.substr(1, 3);
            string = arrNumbers[3][numHundred] + ' ';
        }
        if (num < 20) string += arrNumbers[1][parseFloat(num)] + ' ';
        else {
            var firstNum = num.substr(0, 1);
            var secondNum = num.substr(1, 2);
            string += arrNumbers[2][firstNum] + ' ' + arrNumbers[1][secondNum] + ' ';
        }
        switch (desc){
            case 0:
                var lastNum = parseFloat(num.substr(-1));
                var preLastNum = num.substr(-2);
                preLastNum = preLastNum.split("");
                var preLastNum = parseFloat(preLastNum[0]);

                break;
            case 1:
                var lastNum = parseFloat(num.substr(-1));
                var preLastNum = num.substr(-2);
                preLastNum = preLastNum.split("");
                var preLastNum = parseFloat(preLastNum[0]);
                if (lastNum == 1 && 1!=preLastNum) string += 'тысяча ';
                else if (lastNum == 1 && 1 == preLastNum.length) string += 'тысяча ';
                else if (lastNum > 1 && lastNum < 5 && 1!=preLastNum) string += 'тысячи ';
                else string += 'тысяч ';
                string = string.replace('один ', 'одна ');
                string = string.replace('два ', 'две ');
                break;
            case 2:
                var lastNum = parseFloat(num.substr(-1));
                var preLastNum = num.substr(-2);
                preLastNum = preLastNum.split("");
                var preLastNum = parseFloat(preLastNum[0]);
                if (lastNum == 1 && 1!=preLastNum) string += 'миллион ';
                else if (lastNum == 1 && 1 == preLastNum.length) string += 'миллион ';
                else if (lastNum > 1 && lastNum < 5 && 1!=preLastNum) string += 'миллиона ';
                else string += 'миллионов ';
                break;
            case 3:
                var lastNum = parseFloat(num.substr(-1));
                var preLastNum = num.substr(-2);
                preLastNum = preLastNum.split("");
                var preLastNum = parseFloat(preLastNum[0]);
                if (lastNum == 1 && 1!=preLastNum) string += 'миллиард ';
                else if (lastNum == 1 && 1 == preLastNum.length) string += 'миллиард ';
                else if (lastNum > 1 && lastNum < 5 && 1!=preLastNum) string += 'миллиарда ';
                else string += 'миллиардов ';
                break;
        }
        string = string.replace('  ', ' ');
        return string;
    }

    if (!number || number == 0) return 'Ноль';
    if (typeof number !== 'number') {
        number = number.replace(',', '.');
        number = parseFloat(number);
        if (isNaN(number)) return 'Ноль';
    }
    number = number.toFixed(2);
    if(number.indexOf('.') != -1) {
        var numberArr = number.split('.');
        var number = numberArr[0];
        var numberDecimals = numberArr[1];
    }
    var numberLength = number.length;
    var string = '';
    var numParser = '';
    var count = 0;
    for (var p = (numberLength - 1); p >= 0; p--) {
        var numDigit = number.substr(p, 1);
        numParser = numDigit +  numParser;
        if ((numParser.length == 3 || p == 0) && !isNaN(parseFloat(numParser))) {
            string = numberParser(numParser, count) + string;
            numParser = '';
            count++;
        }
    }
    if (numberDecimals) string ;
    string=string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
    return string;
}
// console.log  (numberToStringEnlarged(564654654564214));

function stringToNumberEnlarged(str) {
// 6. Для задания 4 расширить диапазон до 999 миллиардов
    var numbers  = {
        ноль: 0, один: 1, одна: 1, два: 2, две: 2, три: 3, четыре: 4, пять: 5, шесть: 6, семь: 7, восемь: 8, девять: 9, десять: 10,
        одиннадцать: 11, двенадцать: 12, тринадцать: 13, четырнадцать: 14, пятнадцать: 15, шестнадцать: 16, семнадцать: 17, восемнадцать: 18, девятнадцать: 19, двадцать: 20,
        тридцать: 30, сорок: 40, пятьдесят: 50, шестьдесят: 60, семьдесят: 70, восемьдесят: 80, девяносто: 90, сто: 100,
        двести: 200, триста: 300, четыреста: 400, пятьсот: 500, шестьсот: 600, семьсот: 700, восемьсот: 800, девятьсот: 900,
        тысяч: 1000, тысяча: 1000, тысячи: 1000, миллионов: 1000000, миллион: 1000000, миллиона: 1000000,
        миллиардов: 1000000000, миллиард: 1000000000, миллиарда: 1000000000 };
    var stringArr = str.split(' ');
    var myNumber = 0;
    var myNumberBig = 0;

    for (var i = 0; i < stringArr.length; i++) {
        var key = stringArr[i];

        if (numbers[key] < 1000) {
            myNumber = myNumber + numbers[key];
        } else {
            myNumber = myNumber * numbers[key];
            myNumberBig = myNumberBig + myNumber;
            myNumber = 0;
        }
    }
    myNumberBig = myNumberBig + myNumber;

    return myNumberBig;

}
// console.log( stringToNumberEnlarged("девятьсот сорок два миллиарда девятьсот сорок два миллиона триста пять") );