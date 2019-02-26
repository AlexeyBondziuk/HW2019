//__________________УСЛОВНЫЕ ОПЕРАТОРЫ_____________________

function sumOrMulti (a,b) {
//1.	Если а – четное посчитать а*б, иначе а+б

    if (a % 2 == 0) {
        var c = a * b;
    } else {
        var c = a + b;
    }
    return  c
}

function quarterCoordinate (x,y) {
//2.	Определить какой четверти принадлежит точка с координатами (х,у)

    if (x > 0 && y > 0) {
        return "Первая четверть";
    } else if (x < 0 && y > 0) {
        return "Вторая четверть";
    } else if (x < 0 && y < 0) {
        return "Третья четверть";
    } else if (x > 0 && y < 0) {
        return "Четвертая четверть";
    }
}
function sumPositive(a,b,c) {
//3.	Найти суммы только положительных из трех чисел

    var sum;
    var d;
    var e;
    var f;

    if (a > 0) {
        d = a;
    } else {
        d = 0;
    }
    if (b > 0) {
        e = b;
    } else {
        e = 0;
    }
    if (c > 0) {
        f = c;
    } else {
        f = 0;
    }

    sum = d + e + f;
    return sum;
}
function maxMultiOrSum(a,b,c) {
//4.	Посчитать выражение макс(а*б*с, а+б+с)+3

    var sum;
    var multi;
    var result;

    sum = a + b + c;
    multi = a * b * c;

    if (sum > multi) {
        result = sum + 3;
    } else if (multi > sum) {
        result = multi + 3;
    }
    return result;
}
function ratingMark(mark) {
//5.	Написать программу определения оценки студента по его рейтингу, на основе следующих правил

    if (mark < 0 || mark > 100) {
        return "нет такой оценки)";
    } else if (mark <= 19 || mark == 0) {
        return "F";
    } else if (mark <= 39) {
        return "E";
    } else if (mark <= 59) {
        return "D";
    } else if (mark <= 74) {
        return "C";
    } else if (mark <= 89) {
        return "B";
    } else if (mark <= 100) {
        return "A";
    }
}

//__________________ЦИКЛЫ_____________________

function sumQuantity() {
    <!-- 1.	Найти сумму четных чисел и их количество в диапазоне от 1 до 99 -->

    var i = 0;
    var s = 0;
    var n = 0;

    for (i = 1; i < 100; i++) {
        if (i % 2 == 0) {
            s = s + i;
            n++;
        }
    }
    var result = "Сумма равна " + s + ". " +  "Количество равно " + n;
    return result;
}
function checkPrimeNumber(n) {
    <!-- 2.	Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)-->

    var j;
    var p = 0;

    if (n == 2) {
        return n + " - простое число";
    } else {
        metka:
            for (j = 2; j < n; j++) {
                if (n % j == 0) {
                    return n + " - составное число";
                    p++;
                    break;
                } else continue metka;
            }
        if (p == 0) {
            return n + " - простое число";
        }
    }
}
function findSqrt (number){
// 3.    Найти корень натурального числа с точностью до целого
// (вариант последовательного подбора)

    for (var i = 0; i*i < number; i++) {
        var s = i*i;
        var t=i;
    }

    var r = (t+1)*(t+1);
    var t1 = number-s;
    var t2 = r - number;

    if (t1>t2) {
        return t+1
    }else{
        return t
    }
}
function findSqrtBinary (number){
    // 3.    Найти корень натурального числа с точностью до целого
// (вариант метод бинарного поиска)
    var sqrt = 1 ;
    var max = number;
    var min = 0;
    while(max - min > 1) {

        var middle = min + (max - min)/2;

        //Выделяем целое
        middle = middle * 10;
        var rest = middle % 10;
        middle = (middle - rest) / 10;

        if ( middle * middle <= number){

            min = middle;

        } else {
            max = middle;
        }
    }
    if (max * max - number > number - min * min) {
        sqrt = min
    } else {
        sqrt = max
    };

    return sqrt;

};
function calFactorial(n) {
    //4.	Вычислить факториал числа n. n! = 1*2*…*n-1*n;!

    var s = 1;
    var i = 1;
    do {
        s = s * i;
        i++;
    }while (i <= n);
    return s;
}
function sumNumbers(n) {
//5.	Посчитать сумму цифр заданного числа

    var s=0, d;
    while (n>0) {
        d = n % 10;
        n = (n - d) / 10;
        s = s+ d;
    }
    return s;
}
function mirrorNumbers(n) {
//6.	Вывести число, которое является зеркальным отображением
// последовательности цифр заданного числа, например, задано число 123, вывести 321.

    var s = " ", d;
    while (n > 0) {
        d = n % 10;
        n = (n - d) / 10;

        s = s + String(d);
    }
    return s;
}

//__________________ОДНОМЕРНЫЕ МАССИВЫ_____________________


function minElement(arr) {
//1.	Найти минимальный элемент массива0

    var min = arr [0];

    for (var i = 1; i < arr.length; ++i) {

        if (arr[i] < min) min = arr[i];
    }
    return min;
}
function maxElement(arr) {
//2.	Найти максимальный элемент массива

    var max = arr [0];

    for (var i = 1; i < arr.length; ++i) {

        if (arr[i] > max) max = arr[i];
    }
    return max;
}
function findIndexMinEl (arr) {
//3.	Найти индекс минимального элемента массива

    var min = arr [0];

    for (var i = 1; i < arr.length; ++i) {

        if (arr[i] < min) {
            min = arr[i];
            var index = i;
        }
    }
    return index;
}
function findIndexMaxEl (arr) {
//4.	Найти индекс максимального элемента массива

    var max = arr [0];

    for (var i = 1; i < arr.length; ++i) {

        if (arr[i] > max) {
            max = arr[i];
            var index = i;
        }
    }
    return index;
}
function sumElOddIndex (arr) {
//5.	Посчитать сумму элементов массива с нечетными индексами

    var sum = 0;

    for (var i = 0; i < arr.length; ++i) {
        var index = i;

        if (index % 2 != 0) {
            sum = sum + arr[i];
        }
    }

    return sum;
}
function reverse (arr) {
//6.	Сделать реверс массива (массив в обратном направлении)

    var temp;

    for (var i = 0, j = arr.length-1; i<j; i++,j--) {
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }

    return arr;
}
function sumOdd (arr) {
//7.	Посчитать количество нечетных элементов массива

    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        var index = i;

        if (arr [i] % 2 != 0) {
            sum ++
        }
    }
    return sum
}
function mediumReverse (arr) {
//8.	Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2

    var medium = arr.length/2;
    var firstHalf = arr.slice(0, medium);
    var secondHalf = arr.slice(medium);

    secondHalf = secondHalf.concat(firstHalf);

    return secondHalf;
}
function sortBubble (arr) {
    //9.	Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))

    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}
function sortSelect (arr) {
    //9.	Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Inser

    for (var i = 0; i <  arr.length - 1; i++) {
        var indexMin = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[indexMin] > arr[j]) {
                indexMin = j;
            }
        }
        if (indexMin !== i) {
            [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
        }
    }
    return arr;
}
function sortInsert (arr) {
    //9.	Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Inser

    for (var i = 1; i < arr.length; i++) {
        var current = arr[i];
        var j = i;
        while (j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = current;
    }
    return arr;
}
function quickSort(items, left, right) {
    //10.   Отсортировать массив (Quick, Merge, Shell, Heap)

    var index;
    if (items.length > 1) {
        left = typeof left != "number" ? 0 : left;
        right = typeof right != "number" ? items.length - 1 : right;
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call

function swap(items, firstIndex, secondIndex){
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;

    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}
function mergeSortMain() {
//10.   Отсортировать массив (Quick, Merge, Shell, Heap)

    function merge(arrFirst, arrSecond) {

        var arrSort = [];
        var i = j = 0;
        // сравниваем два массива, поочередно сдвигая указатели
        while (i < arrFirst.length && j < arrSecond.length) {
            arrSort.push(
                (arrFirst[i] < arrSecond[j]) ?
                    arrFirst[i++] : arrSecond[j++]
            );
        }
        // обрабатываем последний элемент при разной длине массивов
        // и возвращаем один отсортированный массив
        return [
            ...arrSort,
            ...arrFirst.slice(i),
            ...arrSecond.slice(j)
        ];
    }

    function mergeSort(arr) {
        // Проверяем корректность переданных данных
        if (!arr || !arr.length) {
            return null;
        }
        //Если массив содержит один элемент просто возвращаем его
        if (arr.length <= 1) {
            return arr;
        }
        // Находим середину массива и делим его на два
        var middle = Math.floor(arr.length / 2);
        var arrLeft = arr.slice(0, middle);
        var arrRight = arr.slice(middle);
        // Для новых массивов снова вызываем сортировку,
        // сливаем их и возвращаем снова единый массив
        return merge(mergeSort(arrLeft), mergeSort(arrRight));
    }
    return mergeSort ([3,3,45,2,2,5,9]);
}
function ShellSort(arr ) {
    //10.   Отсортировать массив (Quick, Merge, Shell, Heap)

    var gap = Math.floor(arr.length / 2);
    while (gap >= 1) {
        for (var i = gap; i < arr.length; i++) {
            var current = arr[i];
            var j = i;
            while (j > 0 && arr[j - gap] > current) {
                arr[j] = arr[j - gap];
                j -= gap;
            }
            arr[j] = current;
        }
        gap = Math.floor(gap / 2);
    }
    return arr;
}
function heapSortMain() {
//10.   Отсортировать массив (Quick, Merge, Shell, Heap)

    var array_length;

    /* to create MAX  array */
    function heap_root(input, i) {
        var left = 2 * i + 1;
        var right = 2 * i + 2;
        var max = i;

        if (left < array_length && input[left] > input[max]) {
            max = left;
        }

        if (right < array_length && input[right] > input[max]) {
            max = right;
        }

        if (max != i) {
            swap(input, i, max);
            heap_root(input, max);
        }
    }

    function swap(input, index_A, index_B) {
        var temp = input[index_A];

        input[index_A] = input[index_B];
        input[index_B] = temp;
    }

    function heapSort(input) {

        array_length = input.length;

        for (var i = Math.floor(array_length / 2); i >= 0; i -= 1) {
            heap_root(input, i);
        }

        for (i = input.length - 1; i > 0; i--) {
            swap(input, 0, i);
            array_length--;


            heap_root(input, 0);
        }
    }

    var arr = [3, 0, 2, 5, -1, 4, 1];
    heapSort(arr);
    return arr;
}



//__________________ФУНКЦИИ_____________________


function getWeekDay(day) {
    //1.    Получить строковое название дня недели по номеру дня.

    var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    if (day == 1) return days [1];
    if (day == 2) return days [2];
    if (day == 3) return days [3];
    if (day == 4) return days [4];
    if (day == 5) return days [5];
    if (day == 6) return days [6];
    if (day == 7) return days [0];

}
function distance (x1, y1, x2, y2){
    //2.    Найти расстояние между двумя точками в двухмерном декартовом пространстве.

    var a = x1 - x2;
    var b = y1 - y2;

    var c = Math.sqrt( a*a + b*b );
    return c
}
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
function numberToStringEnlarged(number) {
    //5. Для задания 1 расширить диапазон до 999 миллиардов


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
function stringToNumberEnlarged(str) {
//6. Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число
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
