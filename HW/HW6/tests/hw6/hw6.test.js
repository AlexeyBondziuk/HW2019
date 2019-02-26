describe('BinarySearchTree', function () {
    describe('insert', function () {
        const testData = [
            {value: 2, expected: 2},
            {value: 10, expected: 10},
            {value: 100, expected: 100},
            {value: 999, expected: 999}


        ];


        testData.forEach(function (data) {

            const {value, expected} = data;

            it(`Добавляет новый элемент ${value} в дерево, получаем ${expected}`, function () {

                const tree = new BinarySearchTree();
                tree.insert(value);
                tree.toString()
                const actual = tree;

                assert.equal(actual, expected);


            });
        });
    });
    describe('find', function () {
        const testData = [
            {value: 2, expected: true},
            {value: 10, expected: true},
            {value: 100, expected: true},
            {value: 999, expected: true}


        ];


        testData.forEach(function (data) {

            const {value, expected} = data;

            it(`Имеет ли дерево значение ${value} -  ${expected}`, function () {

                const tree = new BinarySearchTree();
                tree.insert(value)

                const actual = tree.find(value);

                assert.equal(actual, expected);


            });
        });
    });
    describe('remove', function () {
        const testData = [
            {value: 2, expected: "1,3,4,5"},
            {value: 1, expected: "2,3,4,5"},
            {value: 3, expected: "1,2,4,5"},
            {value: 4, expected: "1,2,3,5"},


        ];


        testData.forEach(function (data) {

            const {value, expected} = data;

            it(`Начальные занчения: 1,2,3,4,5. Удаляет значение ${value}, получаем  ${expected}`, function () {

                const tree = new BinarySearchTree();
                tree.insert(1);
                tree.insert(2);
                tree.insert(3);
                tree.insert(4);
                tree.insert(5);

                tree.remove(value);
                tree.toString();
                const actual = tree.toString ();

                assert.deepEqual(actual, expected);


            });
        });
    });
    describe('empty', function () {
        const testData = [
            {expected: ""},
            {expected: ""},
            {expected: ""},
            {expected: ""},


        ];


        testData.forEach(function (data) {

            const {expected} = data;

            it(`Начальные занчения: 1,2,3,4,5. Удаляет все значения получаем  ${expected}`, function () {

                const tree = new BinarySearchTree();
                tree.insert(1);
                tree.insert(2);
                tree.insert(3);
                tree.insert(4);
                tree.insert(5);

                tree.empty();

                const actual = tree.toString ();

                assert.deepEqual(actual, expected);


            });
        });
    });
    describe('toString', function () {
        const testData = [
            {expected: "1,2,3,4,5"},
        ];


        testData.forEach(function (data) {

            const {expected} = data;

            it(`Приводит все значения к строке, получаем  ${expected}`, function () {

                const tree = new BinarySearchTree();
                tree.insert(1);
                tree.insert(2);
                tree.insert(3);
                tree.insert(4);
                tree.insert(5);



                const actual = tree.toString ();

                assert.deepEqual(actual, expected);


            });
        });
    });
});
