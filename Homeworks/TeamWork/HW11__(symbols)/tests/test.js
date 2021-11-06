describe('displayFromAtoZ . Вывести в одну строку символы: английского алфавита от ‘A’ до ‘Z’', function () {

    const expected = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    it(`Выведено "${expected}"`, function () {
        const actual = displayFromAtoZ();
        assert.deepEqual(actual, expected);
    });
});
describe('displayFrom_z_to_a . Вывести в одну строку символы: английского алфавита от ‘z’ до ‘a’', function () {

    const expected = 'zyxwvutsrqponmlkjihgfedcba';

    it(`Выведено "${expected}"`, function () {
        const actual = displayFrom_z_to_a();

        assert.deepEqual(actual, expected);
    });
});
describe('displayFrom_a_to_ya . Вывести в одну строку символы: русского алфавита от ‘а’ до ‘я’', function () {

    const expected = 'абвгдежзийклмнопрстуфхцчшщъыьэюя';

    it(`Выведено "${expected}"`, function () {
        const actual = displayFrom_a_to_ya();

        assert.deepEqual(actual, expected);
    });
});
describe('displayFrom0to9 . Вывести в одну строку символы: цифры от ‘0’ до ‘9’', function () {

    const expected = '0123456789';

    it(`Выведено "${expected}"`, function () {
        const actual = displayFrom0to9();

        assert.deepEqual(actual, expected);
    });
});
describe('displayPrintRange . Вывести в одну строку символы: печатного диапазона таблицы ASCII', function () {

    const expected = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

    it(`Выведено "${expected}"`, function () {
        const actual = displayPrintRange();

        assert.deepEqual(actual, expected);
    });
});
describe('numberToString Написать и протестировать функции преобразования: целого и вещественного числа в строку', function () {
    const testData = [
        {value: 9, expected: "9"},
        {value: 34, expected: "34"},
        {value: 3456, expected: "3456"},
        {value: 9089544545454, expected: "9089544545454"},
        {value: 3.456, expected: "3.456"},
        {value: 9.089544545454, expected: "9.089544545454"},
    ];

    testData.forEach(function (data) {

        const {value, expected} = data;

        it(`Введено число ${value}, получена строка "${expected}"`, function () {
            numberToString(value);
            const actual = numberToString(value);

            assert.deepEqual(actual, expected);
        });
    });
})
describe('stringToInt Написать и протестировать функции преобразования: строки в целое и вещественное число', function () {
    const testData = [
        {value: "9", expected: 9},
        {value: "34", expected: 34},
        {value: "3456", expected: 3456},
        {value: "9089544545454", expected: 9089544545454},
    ];

    testData.forEach(function (data) {

        const {value, expected} = data;

        it(`Введено число ${value}, получена строка "${expected}"`, function () {
            stringToInt(value);
            const actual = stringToInt(value);

            assert.deepEqual(actual, expected);
        });
    });
})
describe('stringToFloat Написать и протестировать функции преобразования: строки в целое и вещественное число', function () {
    const testData = [
        {value: "3.456", expected: 3.456},
        {value: "-9.089544545454", expected: -9.089544545454},
    ];

    testData.forEach(function (data) {

        const {value, expected} = data;

        it(`Введено число ${value}, получена строка "${expected}"`, function () {
            stringToFloat(value);
            const actual = stringToFloat(value);

            assert.deepEqual(actual, expected);
        });
    });
})
describe('findMinWordInString Дана строка, состоящая из слов, разделенных пробелами и знаками препинания. Определить длину самого короткого слова.', function () {
    const testData = [
        {value: "Hi everyone", expected: 2},
        {value: "Good evening everyone", expected: 4},
        {value: " Good evening everyone ", expected: 4},
    ];

    testData.forEach(function (data) {

        const {value, expected} = data;

        it(`Введено строка "${value}", получена длина ${expected}`, function () {
            findMinWordInString(value);
            const actual = findMinWordInString(value);

            assert.deepEqual(actual, expected);
        });
    });
})
// describe('replaceThreeLastSymbols Дан массив слов. Заменить последние три символа слов, имеющих заданную длину на символ "$";', function () {
//     describe('Заменить последние три символа слов, имеющих длину 6 символов на символ "$";', function () {
//         const testData = [
//         {arr: ["Привет", "мир"], expected: 2},
//         {arr: "Good evening everyone", expected: 4},
//         {arr: " Good evening everyone ", expected: 4},
//         ];
//
//         testData.forEach(function (data) {
//
//         const {value, expected} = data;
//
//         it(`Введено строка "${value}", получена длина ${expected}`, function () {
//             findMinWordInString(value);
//             const actual = findMinWordInString(value);
//
//             assert.deepEqual(actual, expected);
//         });
//         });
//     })
//     describe('replaceThreeLastSymbols Дан массив слов. Заменить последние три символа слов, имеющих заданную длину на символ "$";', function () {
//         const testData = [
//             {value: "Hi everyone", expected: 2},
//             {value: "Good evening everyone", expected: 4},
//             {value: " Good evening everyone ", expected: 4},
//         ];
//
//         testData.forEach(function (data) {
//
//             const {value, expected} = data;
//
//             it(`Введено строка "${value}", получена длина ${expected}`, function () {
//                 findMinWordInString(value);
//                 const actual = findMinWordInString(value);
//
//                 assert.deepEqual(actual, expected);
//             });
//         });
//     })
// })