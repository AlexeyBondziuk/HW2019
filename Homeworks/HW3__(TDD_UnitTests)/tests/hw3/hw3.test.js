//__________________УСЛОВНЫЕ ОПЕРАТОРЫ_____________________


describe('sumOrMulti №1.Если а – четное посчитать а*б, иначе а+б', function () {
   it('1. Если а – нечетное посчитать а+б', function () {
      const a = 1;
      const b = 2;
      const expected = 3;

      const actual = sumOrMulti(a, b);

       assert.equal(actual, expected);
   });

   it('1. Если а – четное посчитать а*б', function () {
       const a = 2;
       const b = 3;
       const expected = 6;

       const actual = sumOrMulti(a, b);

       assert.equal(actual, expected);
   });
});

describe ('quarterCoordinate №2. Определить какой четверти принадлежит точка с координатами (х,у)', function() {


            const testData =[
                {x: 1, y: 2, expected: "Первая четверть"},
                {x: -1, y: 2, expected: "Вторая четверть"},
                {x: -1, y: -2, expected: "Третья четверть"},
                {x: 1, y: -2, expected: "Четвертая четверть"},
            ];
            testData.forEach(function (data) {
                const {x,y, expected} = data;
                it('определяет в какой четверти точка по координатам', function () {
                    const actual = quarterCoordinate (x, y);

                    assert.strictEqual (actual, expected);
                });

            });



});

describe('sumPositive №3. Найти суммы только положительных из трех чисел', function () {

        it('1', function () {
            const a = 1;
            const b = 2;
            const c = 2;
            const expected = 5;

            const actual = sumPositive(a, b, c);

            assert.equal(actual, expected);
        });

        it('2', function () {
            const a = -2;
            const b = 3;
            const c = 2;
            const expected = 5;

            const actual = sumPositive(a, b, c);

            assert.equal(actual, expected);
        });

        it('3', function () {
            const a = -2;
            const b = -3;
            const c = 2;
            const expected = 2;

            const actual = sumPositive(a, b, c);

            assert.equal(actual, expected);
        });
        it('4', function () {
            const a = -2;
            const b = -3;
            const c = -2;
            const expected = 0;

            const actual = sumPositive(a, b, c);

            assert.equal(actual, expected);
        });

});


describe('maxMultiOrSum №4. Посчитать выражение макс(а*б*с, а+б+с)+3', function () {

        it('1', function () {
            const a = 1;
            const b = 2;
            const c = 2;
            const expected = 8;

            const actual = maxMultiOrSum(a, b, c);

            assert.equal(actual, expected);
        });

        it('2', function () {
            const a = -2;
            const b = 3;
            const c = 2;
            const expected = 6;

            const actual = maxMultiOrSum(a, b, c);

            assert.equal(actual, expected);
        });

        it('3', function () {
            const a = -2;
            const b = -3;
            const c = 2;
            const expected = 15;

            const actual = maxMultiOrSum(a, b, c);

            assert.equal(actual, expected);
        });
        it('4', function () {
            const a = -2;
            const b = -3;
            const c = -2;
            const expected = -4;

            const actual = maxMultiOrSum(a, b, c);

            assert.equal(actual, expected);
        });

});
describe('ratingMark №5. Написать программу определения оценки студента по его рейтингу, на основе правил', function () {


        const testData =[
            {mark: 0, expected: "F"},
            {mark: 1, expected: "F"},
            {mark: 10, expected: "F"},
            {mark: 18, expected: "F"},
            {mark: 19, expected: "F"},
            {mark: 20, expected: "E"},
            {mark: 21, expected: "E"},
            {mark: 30, expected: "E"},
            {mark: 38, expected: "E"},
            {mark: 39, expected: "E"},
            {mark: 40, expected: "D"},
            {mark: 50, expected: "D"},
            {mark: 58, expected: "D"},
            {mark: 59, expected: "D"},
            {mark: 60, expected: "C"},
            {mark: 70, expected: "C"},
            {mark: 74, expected: "C"},
            {mark: 75, expected: "B"},
            {mark: 80, expected: "B"},
            {mark: 89, expected: "B"},
            {mark: 90, expected: "A"},
            {mark: 100, expected: "A"},
            {mark: -1, expected: "нет такой оценки)"},
            {mark: 101, expected: "нет такой оценки)"},
        ];
        testData.forEach(function (data) {
            const {mark, expected} = data;
            it('пройдено', function () {
                const actual = ratingMark (mark);

                assert.strictEqual (actual, expected);
            });

        });

});

//__________________ЦИКЛЫ_____________________

describe('sumQuantity №1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99. Сумма равна 2450. Количество равно 49', function () {
    it('Найдено', function () {
        const s = 2450;
        const n = 49;
        const expected = "Сумма равна " + s + ". " +  "Количество равно " + n;


        const actual = sumQuantity();

        assert.equal(actual, expected);
    });

});

describe('checkPrimeNumber №2. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)', function () {
        it('Число простое', function () {

            const n = 5;
            const expected = n + " - простое число";


            const actual = checkPrimeNumber(5);

            assert.equal(actual, expected);
        });
        it('Число составное', function () {

            const n = 6;
            const expected = n + " - составное число";


            const actual = checkPrimeNumber(n);

            assert.equal(actual, expected);
        });
});
describe('findSqrt №3. Найти корень натурального числа с точностью до целого (вариант последовательного подбора)', function () {

        it('Корень вычислен', function () {

            const number = 5;
            const expected = 2;


            const actual = findSqrt(number);

            assert.equal(actual, expected);
        });
        it('Корень вычислен', function () {

            const number = 8;
            const expected = 3;


            const actual = findSqrt(number);

            assert.equal(actual, expected);
        });
});
describe('findSqrtBinary №3. Найти корень натурального числа с точностью до целого (вариант метод бинарного поиска)', function () {

        it('Корень вычислен', function () {

            const number = 5;
            const expected = 2;


            const actual = findSqrtBinary(number);

            assert.equal(actual, expected);
        });
        it('Корень вычислен', function () {

            const number = 8;
            const expected = 3;


            const actual = findSqrtBinary(number);

            assert.equal(actual, expected);
        });
});
describe('calFactorial №4. Вычислить факториал числа n. n! = 1*2*…*n-1*n;!', function () {

        it('факториал вычислен', function () {

            const n = 5;
            const expected = 120;


            const actual = calFactorial(n);

            assert.equal(actual, expected);
        });
        it('факториал вычислен', function () {

            const n = 8;
            const expected = 40320;


            const actual = calFactorial(n);

            assert.equal(actual, expected);
        });
});
describe('sumNumbers №5. Посчитать сумму цифр заданного числа', function () {

        it('сумма вычислена', function () {

            const n = 55;
            const expected = 10;


            const actual = sumNumbers(n);

            assert.equal(actual, expected);
        });
        it('сумма вычислена', function () {

            const n = 40320;
            const expected = 9;


            const actual = sumNumbers(n);

            assert.equal(actual, expected);
        });
});
describe('mirrorNumbers №6. Вывести число, которое является зеркальным отображением ' +
            'последовательности цифр заданного числа, например, задано число 123, вывести 321.', function () {

        it('выведено', function () {

            const n = 123;
            const expected = 321;


            const actual = mirrorNumbers(n);

            assert.equal(actual, expected);
        });
        it('выведено', function () {

            const n = 40320;
            const expected = 2304;


            const actual = mirrorNumbers(n);

            assert.equal(actual, expected);
        });
});


//__________________ОДНОМЕРНЫЕ МАССИВЫ_____________________


describe('minElement №1. Найти минимальный элемент массива', function () {

        it('найдено', function () {

            const arr = [-1, 1000, -11, 1, 2, 3, 4, 5];
            const expected = -11;


            const actual = minElement(arr);

            assert.equal(actual, expected);
        });
});
describe('maxElement №2.Найти максимальный элемент массива', function () {
        it('найдено', function () {

            const arr = [-1, 1000, -11, 1, 2, 3, 4, 5];
            const expected = 1000;


            const actual = maxElement(arr);

            assert.equal(actual, expected);
        });
});
describe('findIndexMinEl №3. Найти индекс минимального элемента массива', function () {

        it('найдено', function () {

            const arr = [-1, 1000, -11, 1, 2, 3, 4, 5];
            const expected = 2;


            const actual = findIndexMinEl(arr);

            assert.equal(actual, expected);
        });
});
describe('findIndexMaxEl №4. Найти индекс максимального элемента массива', function () {
        it('найдено', function () {

            const arr = [-1, 1000, -11, 1, 2, 3, 4, 5];
            const expected = 1;


            const actual = findIndexMaxEl(arr);

            assert.equal(actual, expected);
        });
});
describe('sumElOddIndex №5. Посчитать сумму элементов массива с нечетными индексами ', function () {
        it('посчитано', function () {

            const arr = [1,2,3,-1,-5];
            const expected = 1;


            const actual = sumElOddIndex(arr);

            assert.equal(actual, expected);
        });
});
describe('reverse №6. Сделать реверс массива (массив в обратном направлении) ', function () {
        it('сделано', function () {

            const arr = [1,2,3,-1,-5];
            const expected = [-5,-1,3,2,1];


            const actual = reverse(arr);

            assert.deepEqual(actual, expected);
        });
});
describe('sumOdd №7. Посчитать количество нечетных элементов массива) ', function () {

        it('сделано', function () {

            const arr = [1,2,3,-1,-5];
            const expected = 4;


            const actual = sumOdd(arr);

            assert.equal(actual, expected);
        });
});
describe('mediumReverse №8. Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2', function () {
         it('сделано', function () {

            const arr = [4,3,2,1,0,10];
            const expected = [1,0,10,4,3,2];


            const actual = mediumReverse(arr);

            assert.deepEqual(actual, expected);
        });
});
describe('№9. Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))', function () {
    describe('Отсортировать массив пузырьком (Bubble)', function () {
        it('сделано', function () {

            const arr = [1,23,34,5,6,9,8,7,6,5,5,4,3,3,2];
            const expected = [ 1, 2, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 9, 23, 34 ];


            const actual = sortBubble(arr);

            assert.deepEqual(actual, expected);
        });

    });


    describe('Отсортировать массив выбором (Select)', function () {
        it('сделано', function () {

            const arr = [1,23,34,5,6,9,8,7,6,5,5,4,3,3,2];
            const expected = [ 1, 2, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 9, 23, 34 ];


            const actual = sortSelect(arr);

            assert.deepEqual(actual, expected);
        });

    });


    describe('Отсортировать массив вставками (Insert)', function () {
        it('сделано', function () {

            const arr = [1,23,34,5,6,9,8,7,6,5,5,4,3,3,2];
            const expected = [ 1, 2, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 9, 23, 34 ];


            const actual = sortInsert(arr);

            assert.deepEqual(actual, expected);
        });

    });
});
describe('№10.   Отсортировать массив (Quick, Merge, Shell, Heap)', function () {
    describe('Отсортировать массив Quick', function () {
        it('сделано', function () {

            const arr = [3,3,45,2,2,5,9];
            const expected = [ 2, 2, 3, 3, 5, 9, 45 ];


            const actual = quickSort(arr);

            assert.deepEqual(actual, expected);
        });

    });
    describe('Отсортировать массив Merge', function () {
        it('сделано', function () {

            const arr = [3,3,45,2,2,5,9];
            const expected = [ 2, 2, 3, 3, 5, 9, 45 ];


            const actual = mergeSortMain(arr);

            assert.deepEqual(actual, expected);
        });

    });
    describe('Отсортировать массив Shell', function () {
        it('сделано', function () {

            const arr = [3,3,45,2,2,5,9];
            const expected = [ 2, 2, 3, 3, 5, 9, 45 ];


            const actual = ShellSort(arr);

            assert.deepEqual(actual, expected);
        });

    });
    describe('Отсортировать массив Heap', function () {
        it('сделано', function () {

            const arr = [3, 0, 2, 5, -1, 4, 1];
            const expected = [ -1, 0, 1, 2, 3, 4, 5 ];


            const actual = heapSortMain(arr);

            assert.deepEqual(actual, expected);
        });

    });
});


//__________________ФУНКЦИИ_____________________

describe ('getWeekDay №1.    Получить строковое название дня недели по номеру дня', function() {
        const testData =[
            {day: 1, expected: 'пн'},
            {day: 2, expected: 'вт'},
            {day: 3, expected: 'ср'},
            {day: 4, expected: 'чт'},
            {day: 5, expected: 'пт'},
            {day: 6, expected: 'сб'},
            {day: 7, expected: 'вс'},
        ];
        testData.forEach(function (data) {
            const {day, expected} = data;
            it('День получен', function () {
                const actual = getWeekDay (day);

                assert.strictEqual (actual, expected);
            });

        });
});
describe('distance №2. Найти расстояние между двумя точками в двухмерном декартовом пространстве.', function () {
    it('Найдено', function () {
        const x1 = 2;
        const y1 = 2;
        const x2 = 1;
        const y2 = 1;
        const expected = 1.4142135623730951;

        const actual = distance(x1, y1, x2, y2);

        assert.equal(actual, expected);
    });
});
describe('numberToString №3. Вводим число(0-999), получаем строку с прописью числа.', function () {
    const testData = [
        {number: 9, expected: "Девять "},
        {number: 99, expected: "Девяносто девять "},
        {number: 399, expected: "Триста девяносто девять "},
        {number: 1399, expected: "Введите корректное число"}

    ];

    testData.forEach(function (data) {

        const {number, expected} = data;

        it(`Введено ${number}, получено "${expected}"`, function () {
            numberToString(number);
            const actual = numberToString(number);

            assert.equal(actual, expected);
        });
    });
});

describe('stringToNumber №4. Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число', function () {
    const testData = [
        {str: "девять ", expected: 9},
        {str: "девяносто девять ", expected: 99},
        {str: "триста девяносто девять ", expected: 399},
        {str: "девятьсот девяносто девять ", expected: 999}
    ];

    testData.forEach(function (data) {

        const {str, expected} = data;

        it(`Введено "${str}", получено ${expected}`, function () {
            stringToNumber(str);
            const actual = stringToNumber(str);

            assert.equal(actual, expected);
        });
    });
});
describe('numberToStringEnlarged №5. Для задания 3 расширить диапазон до 999 миллиардов', function () {
    const testData = [
        {number: 9, expected: "Девять "},
        {number: 99, expected: "Девяносто девять "},
        {number: 399, expected: "Триста девяносто девять "},
        {number: 2399, expected: "Две тысячи триста девяносто девять "},
        {number: 12399, expected: "Двенадцать тысяч триста девяносто девять "},
        {number: 912399, expected: "Девятьсот двенадцать тысяч триста девяносто девять "},
        {number: 9912399, expected: "Девять миллионов девятьсот двенадцать тысяч триста девяносто девять "},
        {number: 3339912399, expected: "Три миллиарда триста тридцать девять миллионов девятьсот двенадцать тысяч триста девяносто девять "},
    ];

    testData.forEach(function (data) {

        const {number, expected} = data;

        it(`Введено ${number}, получено "${expected}"`, function () {
            numberToStringEnlarged(number);
            const actual = numberToStringEnlarged(number);

            assert.equal(actual, expected);
        });
    });
});
describe('stringToNumberEnlarged №6. Для задания 4 расширить диапазон до 999 миллиардов', function () {
    const testData = [
        {str: "девять", expected: 9},
        {str: "девяносто девять", expected: 99},
        {str: "триста девяносто девять", expected: 399},
        {str: "девятьсот девяносто девять", expected: 999},
        {str: "две тысячи триста девяносто девять", expected: 2399},
        {str: "двенадцать тысяч триста девяносто девять", expected: 12399},
        {str: "девятьсот двенадцать тысяч триста девяносто девять", expected: 912399},
        {str: "девять миллионов девятьсот двенадцать тысяч триста девяносто девять", expected: 9912399},
        {str: "три миллиарда триста тридцать девять миллионов девятьсот двенадцать тысяч триста девяносто девять", expected: 3339912399}
    ];

    testData.forEach(function (data) {

        const {str, expected} = data;

        it(`Введено "${str}", получено ${expected}`, function () {
            stringToNumberEnlarged(str);
            const actual = stringToNumberEnlarged(str);

            assert.equal(actual, expected);
        });
    });
});