describe("Function init()", () => {
    it(`should return true, when flag is true`, function () {
        assert.equal(init(), true);
    });
    it(`should throw Error when div not found`, function () {
        assert.throw(function () {
            let divBalls = document.getElementById('ball');
            divBalls.id='bal';
            init();
        }, 'div element not found at DOM!!!');
    });
    after(() => {
        let divAdd = document.getElementById('bal');
        divAdd.id = 'ball';
    });
});

describe("Function getMousePosition()", () => {
    it(`should return true, when function done`, function () {
        let event = {
            pageX: '10',
            pageY: '10',
            offsetLeft: '5',
            offsetTop: '4'
        };
        let actual = getMousePosition(event);
        assert.equal(actual, true);
    });
    it(`should return false, when function not done`, function () {
        let event = {
            pageX: 'null',
            pageY: 'undefined',
            offsetLeft: '5',
            offsetTop: '4'
        };
        let actual = getMousePosition(event);
        assert.equal(actual, true);
    });
});

describe('Constructor Ball', () => {
    const testData = [{
        expected: `r`
    }, {
        expected: `deltaX`
    }, {
        expected: `deltaY`
    }, {
        expected: `cx`
    }, {
        expected: `cy`
    }, {
        expected: `color`
    }];
    testData.forEach(function (data) {
        const {
            expected
        } = data;
        let ball = new Ball();
        it(`should return True, when Ball has ${expected} prop/method`, function () {
            const actual = expected in ball;
            assert.deepEqual(actual, true);
        });
    });
});

describe("Function getRandomColor()", function () {
    const expected = getRandomColor();
    const actual = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    for (let i = 1; i < expected.length - 1; i++) {
        let currentActual = false;
        for (let j = 0; j < actual.length; j++) {
            if (expected[i] === actual[j]) {
                currentActual = actual[j];
                continue;
            }
        }
        it(`should return value ${currentActual} if it located in ${expected}`, function () {
            assert.deepEqual(currentActual, expected[i]);
        });
    }
});

describe('Function getRandomInt()', () => {
    const testData = [{
        expected: true,
        min: 1,
        max: 360
    }, {
        expected: false,
        min: 390,
        max: 360
    }, {
        expected: false,
        min: 0,
        max: 1
    }, {
        expected: true,
        min: 1,
        max: 360
    }, {
        expected: false,
        min: null,
        max: null
    } , {
        expected: false,
        min: null,
        max: undefined
    }];
    testData.forEach(function (data) {
        const {
            expected, min, max
        } = data;
        it(`should return ${expected}, when getRandomInt() return number between range ${min} - ${max}`, function () {
            const actual = getRandomInt(min,max);
            const reference = actual => {
                if (actual >= 1 && actual < 360) {
                    return true;
                }
                return false;
            }
            assert.deepEqual(reference(actual), expected);
        });
    });
});

describe('Function randomDirectionX()', () => {
    describe('return number between range', () => {
        const testData = [{
            expected: true,
            min: -1,
            max: 1
        }];
        testData.forEach(function (data) {
            const {
                expected, min, max
            } = data;
            it(`should return ${expected}, when randomDirectionX() return direction between range ${min} to ${max}`, function () {
                const actual = randomDirectionX();
                const reference = actual => {
                    if (actual > -1 && actual < 1) {
                        return true;
                    }
                    return false;
                }
                assert.deepEqual(reference(actual), expected);
            });
        });
    });
    describe('return value type of Number', () => {
        const testData = [{
            value: 'number',
        }];
        testData.forEach(function (data) {
            const {
                expected, value
            } = data;
            it(`should return true, when randomDirectionX() return direction value type of Number`, function () {
                const actual = typeof(randomDirectionX());
                assert.deepEqual(actual, value);
            });
        });
    });
});

describe('Function randomDirectionY()', () => {
    describe('return number between range', () => {
        const testData = [{
            expected: true,
            min: -1,
            max: 1
        }];
        testData.forEach(function (data) {
            const {
                expected, min, max
            } = data;
            it(`should return ${expected}, when randomDirectionY() return direction between range ${min} to ${max}`, function () {
                const actual = randomDirectionX();
                const reference = actual => {
                    if (actual > -1 && actual < 1) {
                        return true;
                    }
                    return false;
                }
                assert.deepEqual(reference(actual), expected);
            });
        });
    });
    describe('return value type of Number', () => {
        const testData = [{
            value: 'number',
        }];
        testData.forEach(function (data) {
            const {
                expected, value
            } = data;
            it(`should return true, when randomDirectionY() return direction value type of Number`, function () {
                const actual = typeof(randomDirectionY());
                assert.deepEqual(actual, value);
            });
        });
    });
});

describe('Function move()', () => {
    it('should return false, when function - not done', () => {
        const actual = move();
        assert.equal(actual, false);
    });
    it('should return true, when function - done', () => {
        addBall();
        const actual = move();
        assert.equal(actual, true);
    });
    after(() => {
        let svg = document.getElementById('ball');
        let masCircle = svg.getElementsByTagName('circle');
        for(let i = 0; i < masCircle.length; i++) {
            masCircle[i].remove();
        }
    });
});

describe('Function addBall()', () => {
    const testData = [{
        expected: 1
    }, {
        expected: 2
    }, {
        expected: 3
    }, {
        expected: 4
    }, {
        expected: 5
    }];
    testData.forEach(function (data) {
        const {
            expected
        } = data;
        it(`should return True, when addBall() return mas Ball with length ${expected}`, function () {
            addBall();
            const actual = masBalls.length;
            assert.deepEqual(actual, expected);
        });
    });
});

