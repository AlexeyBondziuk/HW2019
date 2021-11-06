function displayFromAtoZ() {
//1) Вывести в одну строку символы:
// 1. английского алфавита от ‘A’ до ‘Z’
    var str = "";
    for (var i = 65; i<=90; i++) {
        str = str + String.fromCharCode(i);
    }
    console.log(str)
    return str;
}
displayFromAtoZ()

function displayFrom_z_to_a() {
// 2. английского алфавита от ‘z’ до ‘a’
    var str = "";
    for (var i = 122; i>=97; i--) {
        str = str + String.fromCharCode(i);
    }
    console.log(str)
    return str;
}
displayFrom_z_to_a();

function displayFrom_a_to_ya() {
//3. русского алфавита от ‘а’ до ‘я’
    var str = "";
    for (var i = 1072; i<= 1103; i++) {
        str = str + String.fromCharCode(i);
    }
    console.log(str)
    return str;
}
displayFrom_a_to_ya();

function displayFrom0to9() {
//4. цифры от ‘0’ до ‘9’
    var str = "";
    for (var i = 48; i<= 57; i++) {
        str = str + String.fromCharCode(i);
    }
    console.log(str)
    return str;
}
displayFrom0to9();

function displayPrintRange() {
//5. печатного диапазона таблицы ASCII
    var str = "";
    for (var i = 32; i <= 127; i++) {
        str = str + String.fromCharCode(i);
    }
    console.log(str)
    return str;
}
displayPrintRange();

function numberToString(value) {
//2) Написать и протестировать функции преобразования:
// ● целого числа в строку
// ● вещественного числа в строку
    var str= "";
    str = str + value;
    console.log(str)
    return str;
}
numberToString(333)

function stringToInt(value) {
//2) Написать и протестировать функции преобразования:
//● строки в целое число
    let resultInt = parseInt(value, 10);
    console.log(resultInt)
    return resultInt;
}
stringToInt('015')

function stringToFloat(value) {
//2) Написать и протестировать функции преобразования:
//● строки в вещественное число
    let resultInt = parseFloat (value);
    console.log(resultInt)
    return resultInt;
}
stringToFloat('01.5')

function findMinWordInString(value) {

    var curString = value;
    var masString = curString.trim().split(" ");
    masString.sort( function (a, b) {
        return a.length - b.length;
    });
    var findMinWord = masString[0];
    console.log(findMinWord.length);
    return findMinWord.length;
}
findMinWordInString("Hi everyone");displayFrom_z_to_a()

//
// function replaceThreeLastSymbols(arr, length, symbol) {
//     const newArr = arr;
//     const newEnd = symbol;
//     const resArr = [];
//     newArr.forEach(word => {
//         if (word.length === length) {
//             word = word.slice(0, -3);
//             word = word + newEnd;
//             resArr.push(word);
//         }
//     });
//     console.log(resArr)
//     return resArr;
// }
// replaceThreeLastSymbols(["Привет", "мир"], 6, "$")

