
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
// console.log(sumOrMulti(2,3))


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
// console.log(quarterCoordinate (-1,1));


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
// console.log(sumPositive(-1,2,5));


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
// console.log(maxMultiOrSum(-1,2,5));


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
// console.log( ratingMark(78));



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
// console.log(sumQuantity());


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
// console.log(checkPrimeNumber(10));


function findSqrt (number){
// 3.    Найти корень натурального числа с точностью до целого
// (рассмотреть вариант последовательного подбора и метод бинарного поиска)

    for (var i = 0; i*i < number; i++) {
        var s = i*i;
        var r = (i-1)*(i-1);
        var t1 = s-number;
        var t2 = number-r;
    }
    if (t1>t2) {
        return i-1
    }else{
        return i
    }
}
// console.log(findSqrt (35));

function findSqrtBinary (number){
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
// console.log(findSqrtBinary (101));

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
// console.log(calFactorial(6));


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
//console.log(sumNumbers(224));


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
// console.log(mirrorNumbers(123));



//__________________ОДНОМЕРНЫЕ МАССИВЫ_____________________

function minElement(arr) {
//1.	Найти минимальный элемент массива0

    var min = arr [0];

    for (var i = 1; i < arr.length; ++i) {

        if (arr[i] < min) min = arr[i];
    }
    return min;
}
// console.log( minElement([-1, 1000, -11, 1, 2, 3, 4, 5]));


function maxElement(arr) {
//2.	Найти максимальный элемент массива

    var max = arr [0];

    for (var i = 1; i < arr.length; ++i) {

        if (arr[i] > max) max = arr[i];
    }
    return max;
}
// console.log( maxElement([-1, 1000, -11, 1, 2, 3, 4, 5]));


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
// console.log( findIndexMinEl([-1, 1000, -11, 1, 2, 3, 4, 5]));


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
// console.log( findIndexMaxEl([-1, 1000, -11, 1, 2, 3, 4, 5]));


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
// console.log( sumElOddIndex([1,2,3,-1,-5]));



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
// console.log( reverse([1,2,3,-1,-5]));


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
// console.log(sumOdd ([1,2,3,-1,-5]));


function mediumReverse (arr) {
//8.	Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4, результат 3 4 1 2

    var medium = arr.length/2;
    var firstHalf = arr.slice(0, medium);
    var secondHalf = arr.slice(medium);

    secondHalf = secondHalf.concat(firstHalf);

    return secondHalf;
}
// console.log(mediumReverse ([4,3,2,1,0,10]));


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
// console.log(sortBubble([1,23,34,5,6,9,8,7,6,5,5,4,3,3,2]));


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
// console.log(sortSelect([1,23,34,5,6,9,8,7,6,5,5,4,3,3,2]));


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
// console.log(sortInsert([1,23,34,5,6,9,8,7,6,5,5,4,3,3,2]));



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
// console.log(quickSort([1,243,34]));

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
// console.log(mergeSortMain ());


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
// console.log(ShellSort([1,3,4,53,2,1,4]));


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
// console.log (heapSortMain());


//__________________ФУНКЦИИ_____________________


function getWeekDay(date) {
    //1.    Получить строковое название дня недели по номеру дня.

    var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    return days[date.getDay()];
}
// console.log(getWeekDay(new Date(2014, 0, 3)));


function distance (x1, y1, x2, y2){
    //2.    Найти расстояние между двумя точками в двухмерном декартовом пространстве.

    var a = x1 - x2;
    var b = y1 - y2;

    var c = Math.sqrt( a*a + b*b );
    return c
}
// console.log (distance (2,2,1,1));
