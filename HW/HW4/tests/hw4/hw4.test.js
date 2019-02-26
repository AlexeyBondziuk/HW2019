describe('AList0', function () {
    describe('push. Добавляет новый элемент в конец массива', function () {

        const testData = [
            {arr: [], value: 1, expected: [1]},
            {arr: [1, 2], value: 3, expected: [1, 2, 3]},
            {arr: [1, 2, 3], value: 4, expected: [1, 2, 3, 4]},
            {arr: [1, 2, 3, 4], value: "СТРОКА", expected: [1, 2, 3, 4, "СТРОКА"]},
            {arr: [1, 2, 3, 4, "СТРОКА"], value: {}, expected: [1, 2, 3, 4, "СТРОКА", {}]},
            {arr: [1, 2, 3, 4, "СТРОКА", {}], value: [5, 6], expected: [1, 2, 3, 4, "СТРОКА", {}, [5, 6]]},
        ];


        testData.forEach(function (data) {

            const {arr, value, expected} = data;

            it(`Добавляет новый элемент ${value} в конец массива [${arr}], получаем [${expected}]`, function () {

                const obj = new AList0();
                obj.arr = arr;
                obj.push(value);
                const actual = obj.arr;

                assert.deepEqual(actual, expected);


            });
        });
    });

    describe('pop. Удаляет один элемент в конце массива', function () {

        const testData = [
            {arr: [1, 2], expected: [1]},
            {arr: [1, 2, 3], expected: [1, 2]},
            {arr: [1, 2, 3, 4], expected: [1, 2, 3]},
            {arr: [1, 2, 3, 4, "СТРОКА"], expected: [1, 2, 3, 4]},
            {arr: [1, 2, 3, 4, "СТРОКА", {}], expected: [1, 2, 3, 4, "СТРОКА"]},
        ];


        testData.forEach(function (data) {

            const {arr, expected} = data;

            it(`Удаляет элемент в конце массива [${arr}], получаем [${expected}]`, function () {

                const obj = new AList0();
                obj.arr = arr;
                obj.pop();
                const actual = obj.arr;

                assert.deepEqual(actual, expected);


            });
        });
    });

    describe('shift. Удаляет из массива первый элемент', function () {

        const testData = [
            {arr: [1, 2], expected: [2]},
            {arr: [1, 2, 3], expected: [2, 3]},
            {arr: [1, 2, 3, 4], expected: [2, 3, 4]},
            {arr: ["СТРОКА", 1, 2, 3, 4], expected: [1, 2, 3, 4]},
            {arr: [{}, 1, 2, 3, 4, "СТРОКА"], expected: [1, 2, 3, 4, "СТРОКА"]}, ,
        ];


        testData.forEach(function (data) {

            const {arr, expected} = data;

            it(`Удалило первый элемент массиве [${arr}], получили [${expected}]`, function () {

                const obj = new AList0();
                obj.arr = arr;
                obj.shift();
                const actual = obj.arr;

                assert.deepEqual(actual, expected);


            });
        });
    });

    describe('unshift. Добавляет элемент в начало массива', function () {

        const testData = [
            {arr: [], value: 1, expected: [1]},
            {arr: [1, 2], value: 0, expected: [0, 1, 2]},
            {arr: [1, 2, 3], value: 4, expected: [4, 1, 2, 3]},
            {arr: [1, 2, 3, 4], value: "СТРОКА", expected: ["СТРОКА", 1, 2, 3, 4]},
            {arr: [1, 2, 3, 4, "СТРОКА"], value: {}, expected: [{}, 1, 2, 3, 4, "СТРОКА"]},
            {arr: [1, 2, 3, 4, "СТРОКА", {}], value: [5, 6], expected: [[5, 6], 1, 2, 3, 4, "СТРОКА", {}]},
        ];


        testData.forEach(function (data) {

            const {arr, value, expected} = data;

            it(`Добавили в 0-й элемент значение ${value} в массив [${arr}], получили массив [${expected}]`, function () {

                const obj = new AList0();
                obj.arr = arr;
                obj.unshift(value);
                const actual = obj.arr;

                assert.deepEqual(actual, expected);


            });
        });
    });


    describe('isArray. Проверяет является ли переданный элемент массивом', function () {

        const testData = [
            {arr: 1, expected: false},
            {arr: 'str', expected: false},
            {arr: {}, expected: false},
            {arr: [], expected: true},
            {arr: [1, 2, 3], expected: true},
        ];


        testData.forEach(function (data) {

            const {arr, expected} = data;

            it(`Полученное значение ${arr} массив - ${expected}`, function () {

                const obj = new AList0();
                obj.arr = arr;
                obj.isArray(obj.arr);
                const actual = obj.isArray();


                assert.equal(actual, expected);


            });
        });
    });
    describe('length. Последний индекс (true) + 1', function () {

        const testData = [
            {arr: [1], expected: 1},
            {arr: [1, 2], expected: 2},
            {arr: [undefined, undefined, 1], expected: 3},
            {arr: {}, expected: false},
        ];


        testData.forEach(function (data) {

            const {arr, expected} = data;

            it(`Полученный массив [${arr}] length = ${expected}`, function () {

                const obj = new AList0();
                obj.arr = arr;
                obj.length(obj.arr);
                const actual = obj.length(obj.arr);

                assert.equal(actual, expected);


            });
        });
    });
    describe('remove. Удаляет один элемент в массиве', function () {

        const testData = [
            {arr: [1, 2], index: 2, expected: [1]},
            {arr: [1, 2, 3], index: 1, expected: [1, 3]},
            {arr: [1, 2, 3, 4], index: 1, expected: [1, 3, 4]},
            {arr: [1, 2, 3, 4, "СТРОКА"], index: 2, expected: [1, 2, 4, "СТРОКА"]},
            {arr: [1, 2, 3, 4, "СТРОКА", {}], index: 5, expected: [1, 2, 3, 4, "СТРОКА"]},
        ];


        testData.forEach(function (data) {

            const {arr, index, expected} = data;

            it(`Удаляет элемент в массиве [${arr}], получаем [${expected}]`, function () {

                const obj = new AList0();
                obj.arr = arr;
                obj.remove(index);
                const actual = obj.arr;

                assert.deepEqual(actual, expected);


            });
        });
    });
    describe('splice. Добавляет, удаляет элементы в массиве', function () {
        describe('Удаление элементов в массиве (задано start и deleteCount)', function () {
            const testData = [
                {arr: [1, 2], start: 1, deleteCount: 1, expected: [1]},
                {arr: [1, 2, 3], start: 0, deleteCount: 1, expected: [2, 3]},
                {arr: [1, 2, 3, 4], start: 3, deleteCount: 1, expected: [1, 2, 3]},
                {arr: [1, 2, 3, 4, "СТРОКА"], start: 0, deleteCount: 5, expected: []},
            ];


            testData.forEach(function (data) {

                const {arr, start, deleteCount, expected} = data;

                it(`Удаляет начиная с ${start} элемента ${deleteCount} элемента в массиве [${arr}], получаем [${expected}]`, function () {

                    const obj = new AList0();
                    obj.arr = arr;
                    obj.splice(start, deleteCount);
                    const actual = obj.arr;

                    assert.deepEqual(actual, expected);


                });
            });
        });
        describe('Добавление и удаление элементов в массиве (задано start, deleteCount и arguments)', function () {
            const testData = [
                {arr: [1, 2], start: 1, deleteCount: 1, argument: 10, expected: [1, 10]},
                {arr: [1, 2, 3], start: 1, deleteCount: 2, argument: 10, expected: [1, 10]},
                {arr: [1, 2, 3, 4], start: 3, deleteCount: undefined, argument: 10, expected: [1, 2, 3, 10, 4]},
                {arr: [1, 2, 3, 4], start: 3, deleteCount: 0, argument: 10, expected: [1, 2, 3, 10, 4]},
            ];


            testData.forEach(function (data) {

                const {arr, start, deleteCount, argument, expected} = data;

                it(`Удаляет начиная с ${start} элемента ${deleteCount} элемента в 
                массиве [${arr}] и добавляет ${argument}, получаем [${expected}]`, function () {

                    const obj = new AList0();
                    obj.arr = arr;
                    obj.splice(start, deleteCount, argument);
                    const actual = obj.arr;

                    assert.deepEqual(actual, expected);


                });
            });
        });
    });
    describe('some. Проверяет, имеет ли массив хотя бы один элемент, который возвращает true для callback', function () {

        const testData = [
            {arr: [1, 2, 3], expected: true},
            {arr: [1, 2, 3, 4, "СТРОКА", {}], expected: true},
            {arr: ['str'], expected: false},
            {arr: [{}], expected: false},
            {arr: [], expected: false},

        ];

        testData.forEach(function (data) {

            const {arr, expected} = data;

            it(`Массив [${arr}] имеет элемент, который возвращает true для callback - ${expected}`, function () {

                const obj = new AList0();
                obj.arr = arr;
                const actual = obj.arr.some(isPosstive);

                assert.equal(actual, expected);

            });
        });
    });
    describe('every. Проверяет, имеет ли массив хотя бы один элемент, который возвращает true для callback', function () {

        const testData = [
            {arr: [1, 2, 3], expected: true},
            {arr: [1, 2, 3, 4, "СТРОКА", {}], expected: false},
            {arr: ['str'], expected: false},
            {arr: [{}], expected: false},
        ];

        testData.forEach(function (data) {

            const {arr, expected} = data;

            it(`Массив [${arr}] имеет элемент, который возвращает true для callback - ${expected}`, function () {

                const obj = new AList0();
                obj.arr = arr;
                obj.arr.every(isPosstive);
                const actual = obj.arr.every(isPosstive);

                assert.equal(actual, expected);

            });
        });
    });
});
describe('LList0', function () {

    describe('unshift. Добавляет элемент в начало массива', function () {
        const obj = new LList0();
        const testData = [
            {pushValue: 1, expectedRootValue: 1, expectedLength: 1},
            {pushValue: {a: 2}, expectedRootValue: {a: 2}, expectedLength: 2},
            {pushValue: 'third', expectedRootValue: 'third', expectedLength: 3},
            {pushValue: 4, expectedRootValue: 4, expectedLength: 4},
        ];


        testData.forEach(function (data) {

            const {pushValue, expectedRootValue, expectedLength} = data;

            it(`Добавили в 0-й элемент значение ${pushValue}]`, function () {

                obj.unshift(pushValue);
                const actualRootValue =  obj.root.value;
                const actualLength =  obj.length;
                assert.deepEqual(actualRootValue, expectedRootValue);
                assert.deepEqual(actualLength, expectedLength);

            });
        });
    });

    describe('push. Добавляет новый элемент в конец массива', function () {
        const obj = new LList0();
        const testData = [
            {pushValue: 1, expectedLastValue: 1, expectedLength: 1},
            {pushValue: {a: 2}, expectedLastValue: {a: 2}, expectedLength: 2},
            {pushValue: 'third', expectedLastValue: 'third', expectedLength: 3},
            {pushValue: 4, expectedLastValue: 4, expectedLength: 4},
        ];


        testData.forEach(function (data) {

            const {pushValue, expectedLastValue, expectedLength} = data;

            it(`Добавляет новый элемент ${pushValue} в конец массива`, function () {

                obj.push(pushValue);
                const actualLastValue =  obj.last.value;
                const actualLength =  obj.length;
                assert.deepEqual(actualLastValue, expectedLastValue);
                assert.deepEqual(actualLength, expectedLength);

            });
        });
    });

    describe('pop. Удаляет один элемент в конце массива', function () {
        const obj = new LList0();
        obj.push(1);
        obj.push({a: 2});
        obj.push('third');
        obj.push(4);
        const testData = [
            {expectedValue: 4, expectedLength: 3},
            {expectedValue: 'third', expectedLength: 2},
            {expectedValue: {a: 2}, expectedLength: 1},
            {expectedValue: 1, expectedLength: 0},
        ];


        testData.forEach(function (data) {

            const {expectedValue, expectedLength} = data;

            it(`Удаляет элемент в конце массива`, function () {

                const actualValue =  obj.pop().value;
                const actualLength =  obj.length;
                assert.deepEqual(actualValue, expectedValue);
                assert.deepEqual(actualLength, expectedLength);

            });
        });
    });

    describe('shift. Удаляет из массива первый элемент', function () {
        const obj = new LList0();
        obj.push(1);
        obj.push({a: 2});
        obj.push('third');
        obj.push(4);
        const testData = [
            {expectedValue: 1, expectedLength: 3},
            {expectedValue: {a: 2}, expectedLength: 2},
            {expectedValue: 'third', expectedLength: 1},
            {expectedValue: 4, expectedLength: 0}
        ];


        testData.forEach(function (data) {

            const {expectedValue, expectedLength} = data;

            it(`Удалило первый элемент массиве`, function () {

                const actualValue =  obj.shift().value;
                const actualLength =  obj.length;
                assert.deepEqual(actualValue, expectedValue);
                assert.deepEqual(actualLength, expectedLength);

            });
        });
    });

    describe('remove. Удаляет один элемент в массиве', function () {
        const obj = new LList0();
        obj.push(1);
        obj.push(2);
        obj.push('third');
        obj.push(4);
        obj.push('five');
        const testData = [
            {removeValue: 4, expectedValue: 4, expectedLength: 4},
            {removeValue: 2, expectedValue: 2, expectedLength: 3},
            {removeValue: 'third', expectedValue: 'third', expectedLength: 2},
            {removeValue: 4, expectedValue: null, expectedLength: 2}
        ];


        testData.forEach(function (data) {

            const {removeValue, expectedValue, expectedLength} = data;

            it(`Удаляет элемент в массиве`, function () {
                var actualValue = null;
                const actualResult = obj.remove(removeValue);

                if (actualResult) {

                    actualValue =  actualResult.value;

                };

                const actualLength =  obj.length;
                assert.deepEqual(actualValue, expectedValue);
                assert.deepEqual(actualLength, expectedLength);

            });
        });
    });
});