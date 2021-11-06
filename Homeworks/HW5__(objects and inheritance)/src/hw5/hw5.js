//_________________Класс - родитель_________
function ListFirst(arr) {
    this.arr = arr;
}

//___________Методы хранятся в прототипе (функции без реализации)____________
ListFirst.prototype.push = function (value) {};
ListFirst.prototype.pop = function () {};
ListFirst.prototype.shift = function () {};
ListFirst.prototype.unshift = function () {};
ListFirst.prototype.isArray = function () {};
ListFirst.prototype.length = function () {};
ListFirst.prototype.remove = function () {};
ListFirst.prototype.splice = function () {};
ListFirst.prototype.some = function () {};
ListFirst.prototype.every = function () {};



//__________Класс-потомок 1.1___________
function ArrayList() {
    ListFirst.apply(this,arguments);
}

//__________Унаследовать_______
ArrayList.prototype = Object.create(ListFirst.prototype);

//_________Сохраняем конструктор___________
ArrayList.prototype.constructor = ArrayList;

//____________Методы потомка 1.1____________
ArrayList.prototype.push = function (value) {
    this.arr [this.arr.length] = value;
};
ArrayList.prototype.pop = function () {
    this.arr.length = this.arr.length-1;
};
ArrayList.prototype.shift = function () {
    for (let i= 0; i < this.arr.length; i++) {
        this.arr[i] = this.arr[i+1];

    }
    this.arr.length = this.arr.length-1;
};
ArrayList.prototype.unshift = function (value) {
    let temp = this.arr[0];
    const dl = this.arr.length+1;
    for (let i = 1; i < dl; i++) {
        this.arr[0] = this.arr[i];
        this.arr[i] = temp;
        temp = this.arr[0]
    }
    this.arr[0] = value;
};
ArrayList.prototype.isArray = function () {
    if (typeof (this.arr) == "object" && this.arr.length >= 0) {
        return true;
    } return false;
};
ArrayList.prototype.length = function (arr) {
    if (this.isArray (this.arr)) {
        let size = 0;
        for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i] != undefined) size = i;
        }
        return size + 1;
    } return false
};
ArrayList.prototype.remove = function (index) {
    for (let i= index; i < this.arr.length; i++) {
        this.arr[i] = this.arr[i+1];
    }
    this.arr.length = this.arr.length-1;
};
ArrayList.prototype.splice = function (arr) {
    var start = arguments[0];
    var deleteCount = arguments[1];
    var resultArr = [];


    if (arguments.length === 0) {
        this.arr;

    };
    if (start > this.arr.length) {
        start = this.arr.length;

    }else if (start < 0) {
        start = start + this.arr.length;
    };
    if (arguments.length === 1) {
        for (var i = 0; i < start; i++) {
            resultArr [i] = this.arr [i];
        }
    };
    if (arguments.length===2) {
        for (let i = 0; i < deleteCount; i++) {
            resultArr[i] = this.arr[start];
            for (let i = start; i < this.arr.length; i++) {
                this.arr[i] = this.arr[i+1];
            }
            this.arr.length = this.arr.length-1;
        };
    };
    if (arguments.length> 2) {
        var items = [];
        for (let i = 0; i < deleteCount; i++) {
            resultArr[i] = this.arr[start];
            for (let i = start; i < this.arr.length; i++) {
                this.arr[i] = this.arr[i+1];
            }
            this.arr.length = this.arr.length-1;
        };

        for (var i = 2; i < arguments.length; i++) {

            items[i - 2] = arguments[i];

        }
        ;
        if (items.length > 0) {
            for (var i = 0; i < items.length; i++) {
                var end = this.arr.length;
                for (var j = end; j >= start + i; j--) {
                    this.arr[j] = this.arr[j - 1];
                }
                ;
                this.arr[start + i] = items[i];
            }
            ;


        }
    }
    return resultArr
};

// arr = new ArrayList([1,2]);
// arr.doPush(15)
// console.log(arr);


//__________Класс-потомок 1.2___________
function LinkedList() {
    ListFirst.apply(this,arguments);
    this.root = null;
    this.last = null;
    this.length = 0;

    function Entry (value, next) {
        this.value = value;
        this.next = next;
    };
}

//__________Унаследовать_______
LinkedList.prototype = Object.create(ListFirst.prototype);

//_________Сохраняем конструктор___________
LinkedList.prototype.constructor = LinkedList;

//____________Методы потомка 1.2____________
LinkedList.prototype.Entry = function (value, next) {
    this.value = value;
    this.next = next;
};
LinkedList.prototype.unshift = function (value) {
    var e = new LinkedList.prototype.Entry(value, this.root)
    if (!this.last) {

        this.last =  e;

    };
    this.root = e;
    this.length++;
};
LinkedList.prototype.push = function (value) {
    var e = new LinkedList.prototype.Entry(value, null);
    if(this.last) {

        this.last.next = e;

    };
    if(!this.root) {

        this.root = e;
    }
    this.last = e;
    this.length++;
};
LinkedList.prototype.pop = function () {
    if(!this.last) {

        return null;

    };

    if(this.last === this.root) {

        var e = this.last;
        this.root = null;
        this.last = null;
        this.length--;
        return e;

    };

    var e = this.last;
    var current = this.root;

    while (current.next !== e) {

        current = current.next;

    };

    current.next = null;
    this.last = current;
    this.length--;
    return e;
};
LinkedList.prototype.shift = function () {
    if(!this.root) {

        return null;

    };
    var e = this.root;
    this.root = this.root.next;
    if (!this.root) {

        this.last = null;

    };

    this.length--;
    return e;
};
LinkedList.prototype.remove = function (removeValue) {
    if (this.root.value === removeValue) {
        var result = this.root;
        this.root = this.root.next;
        this.length--;
        return result;
    };

    var current = this.root.next;
    var previous = this.root;

    while(current !== null) {

        if(current.value === removeValue) {

            var result = current;

            if (current === this.last) {

                previous.next = null;
                this.last = previous;

            } else {

                previous.next = current.next;

            };

            this.length--;
            return result;
        };

        previous = current;
        current = current.next;
    };
    return null;
};
LinkedList.prototype.splice = function () {
    var index = arguments[0];
    var deleteCount = arguments[1];
    var elem = [];
    var resultList = new LinkedList();

    for (var i = 2; i < arguments.length; i++) {

        elem[i-2] = arguments[i];

    };

    if (index > this.length) {

        index = this.length;

    } else if (index < 0) {

        index = this.length + index;

    } else if (index === null || index === undefined) {

        index = 0;

    };

    //fined index node

    var current = this.root;
    var prev = null;

    while (index > 0) {
        prev = current;
        current = current.next;
        index--;
    };

    // remove

    if (deleteCount > 0) {

        for (var i = 0; i < deleteCount; i++) {

            if (current == this.root) {

                resultList.push(current.value);
                current = current.next;
                this.root = current;
                this.length--;

            } else {

                resultList.push(current.value);
                prev.next = current.next;
                current = current.next;
                this.length--;

            };
        };
    };

    //insert

    if (elem.length > 0) {

        for (var i = 0; i < elem.length; i++) {
            var e = new Entry(elem[i], null);

            if (current === this.root) {

                e.next = current;
                prev = e;
                this.root = e;
                this.count++;

            } else {

                e.next = current;
                prev.next = e;
                prev = e;
                current = prev.next;
                this.count++;
            };
        };
    };
    return resultList;
};
LinkedList.prototype.showAll = function (value) {
    var current = this.root;
    while(current !== null) {

        console.log(current);
        current = current.next;
    };
};

var obj = new LinkedList();
// obj.unshift(1);
// obj.push(2);
// obj.push(3);
// obj.push(4);
// obj.push(5);
// obj.pop();
// obj.remove(1)
// obj.splice(1, 1)
// obj.showAll();




//__________Класс-потомок 2___________
function ListSecond() {
    ListFirst.apply(this,arguments);
    ListSecond.prototype.some = function (value) {};
    ListSecond.prototype.every = function (arr) {};

}
//__________Класс-потомок 3.1___________
function ArrayList2() {
    ListSecond.apply(this,arguments);
}

//__________Унаследовать_______
ArrayList2.prototype = Object.create(ListSecond.prototype);

//_________Сохраняем конструктор___________
ArrayList2.prototype.constructor = ArrayList2;

//____________Методы потомка 3.1____________
ArrayList2.prototype.push = function (value) {
    this.arr [this.arr.length] = value+10;
};
ArrayList2.prototype.pop = function () {
    this.arr.length = this.arr.length-1;
};
ArrayList2.prototype.shift = function () {
    for (let i= 0; i < this.arr.length; i++) {
        this.arr[i] = this.arr[i+1];

    }
    this.arr.length = this.arr.length-1;
};
ArrayList2.prototype.unshift = function (value) {
    let temp = this.arr[0];
    const dl = this.arr.length+1;
    for (let i = 1; i < dl; i++) {
        this.arr[0] = this.arr[i];
        this.arr[i] = temp;
        temp = this.arr[0]
    }
    this.arr[0] = value;
};
ArrayList2.prototype.isArray = function (arr) {
    return (!!arr) && (arr.constructor === Array);
};
ArrayList2.prototype.length = function (arr) {
    let size = 0;
    for (var i = 0; i < arr.length; i++) {
        if (this.arr[i] != undefined) size = i;
    }
    return size+1;
};
ArrayList2.prototype.remove = function (arr) {
    for (let i= index; i < this.arr.length; i++) {
        this.arr[i] = this.arr[i+1];
    }
    this.arr.length = this.arr.length-1;
};
ArrayList2.prototype.splice = function (arr) {
    var start = arguments[0];
    var deleteCount = arguments[1];
    var resultArr = [];


    if (arguments.length === 0) {
        this.arr;

    };
    if (start > this.arr.length) {
        start = this.arr.length;

    }else if (start < 0) {
        start = start + this.arr.length;
    };
    if (arguments.length === 1) {
        for (var i = 0; i < start; i++) {
            resultArr [i] = this.arr [i];
        }
    };
    if (arguments.length===2) {
        for (let i = 0; i < deleteCount; i++) {
            resultArr[i] = this.arr[start];
            for (let i = start; i < this.arr.length; i++) {
                this.arr[i] = this.arr[i+1];
            }
            this.arr.length = this.arr.length-1;
        };
    };
    if (arguments.length> 2) {
        var items = [];
        for (let i = 0; i < deleteCount; i++) {
            resultArr[i] = this.arr[start];
            for (let i = start; i < this.arr.length; i++) {
                this.arr[i] = this.arr[i+1];
            }
            this.arr.length = this.arr.length-1;
        };

        for (var i = 2; i < arguments.length; i++) {

            items[i - 2] = arguments[i];

        }
        ;
        if (items.length > 0) {
            for (var i = 0; i < items.length; i++) {
                var end = this.arr.length;
                for (var j = end; j >= start + i; j--) {
                    this.arr[j] = this.arr[j - 1];
                }
                ;
                this.arr[start + i] = items[i];
            }
            ;


        }
    }
    return resultArr
};
ArrayList2.prototype.some = function (arr) {
    for (var i = 0; i < this.arr.length; i++) {
        if (callback(this.arr[i])) {
            return true;
        };
    };
    return false;
};
ArrayList2.prototype.every = function (arr) {
    for (var i = 0; i < this.arr.length; i++) {
        if (!callback(this.arr[i])) {
            return false;
        };
    };
    return true;
};

function isPosstive(number) {
    return number > 0;
}

// var obj = new ArrayList();
// obj.arr = [1,2];
// obj.push(8);
// console.log(obj.arr);


function LinkedList2() {
    ListSecond.apply(this,arguments);
}

//__________Унаследовать_______
LinkedList2.prototype = Object.create(ListSecond.prototype);

//_________Сохраняем конструктор___________
LinkedList2.prototype.constructor = LinkedList2;

//____________Методы потомка 3.1____________
LinkedList2.prototype.Entry = function (value, next) {
    this.value = value;
    this.next = next;
};
LinkedList2.prototype.unshift = function (value) {
    var e = new LinkedList2.prototype.Entry(value, this.root)
    if (!this.last) {

        this.last =  e;

    };
    this.root = e;
    this.length++;
};
LinkedList2.prototype.push = function (value) {
    var e = new LinkedList2.prototype.Entry(value, null);
    if(this.last) {

        this.last.next = e;

    };
    if(!this.root) {

        this.root = e;
    }
    this.last = e;
    this.length++;
};
LinkedList2.prototype.pop = function () {
    if(!this.last) {

        return null;

    };

    if(this.last === this.root) {

        var e = this.last;
        this.root = null;
        this.last = null;
        this.length--;
        return e;

    };

    var e = this.last;
    var current = this.root;

    while (current.next !== e) {

        current = current.next;

    };

    current.next = null;
    this.last = current;
    this.length--;
    return e;
};
LinkedList2.prototype.shift = function () {
    if(!this.root) {

        return null;

    };
    var e = this.root;
    this.root = this.root.next;
    if (!this.root) {

        this.last = null;

    };

    this.length--;
    return e;
};
LinkedList2.prototype.remove = function (removeValue) {
    if (this.root.value === removeValue) {
        var result = this.root;
        this.root = this.root.next;
        this.length--;
        return result;
    };

    var current = this.root.next;
    var previous = this.root;

    while(current !== null) {

        if(current.value === removeValue) {

            var result = current;

            if (current === this.last) {

                previous.next = null;
                this.last = previous;

            } else {

                previous.next = current.next;

            };

            this.length--;
            return result;
        };

        previous = current;
        current = current.next;
    };
    return null;
};
LinkedList2.prototype.splice = function () {
    var index = arguments[0];
    var deleteCount = arguments[1];
    var elem = [];
    var resultList = new LinkedList();

    for (var i = 2; i < arguments.length; i++) {

        elem[i-2] = arguments[i];

    };

    if (index > this.length) {

        index = this.length;

    } else if (index < 0) {

        index = this.length + index;

    } else if (index === null || index === undefined) {

        index = 0;

    };

    //fined index node

    var current = this.root;
    var prev = null;

    while (index > 0) {
        prev = current;
        current = current.next;
        index--;
    };

    // remove

    if (deleteCount > 0) {

        for (var i = 0; i < deleteCount; i++) {

            if (current == this.root) {

                resultList.push(current.value);
                current = current.next;
                this.root = current;
                this.length--;

            } else {

                resultList.push(current.value);
                prev.next = current.next;
                current = current.next;
                this.length--;

            };
        };
    };

    //insert

    if (elem.length > 0) {

        for (var i = 0; i < elem.length; i++) {
            var e = new Entry(elem[i], null);

            if (current === this.root) {

                e.next = current;
                prev = e;
                this.root = e;
                this.count++;

            } else {

                e.next = current;
                prev.next = e;
                prev = e;
                current = prev.next;
                this.count++;
            };
        };
    };
    return resultList;
};
LinkedList2.prototype.showAll = function (value) {
    var current = this.root;
    while(current !== null) {

        console.log(current);
        current = current.next;
    };
};



// var obj = new LinkedList2();
// obj.unshift(1);
// obj.push(2);
// obj.push(3);
// obj.push(4);
// obj.push(5);
// obj.pop();
// obj.remove(1)
// obj.splice(1, 1)
// obj.showAll();