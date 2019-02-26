function AList0() {
    this.arr = [];

    this.push = function (value) {
        this.arr [this.arr.length] = value;
    };

    this.pop = function () {
        this.arr.length = this.arr.length-1;
    };

    this.shift = function () {
        for (let i= 0; i < this.arr.length; i++) {
            this.arr[i] = this.arr[i+1];

        }
        this.arr.length = this.arr.length-1;
    };
    this.unshift = function (value) {
        let temp = this.arr[0];
        const dl = this.arr.length+1;
        for (let i = 1; i < dl; i++) {
            this.arr[0] = this.arr[i];
            this.arr[i] = temp;
            temp = this.arr[0]
        }
        this.arr[0] = value;
    };
    this.isArray = function () {
        if (typeof (this.arr) == "object" && this.arr.length >= 0) {
            return true;
        } return false;
    };
    this.length = function () {
        if (this.isArray (this.arr)) {
            let size = 0;
            for (var i = 0; i < this.arr.length; i++) {
                if (this.arr[i] != undefined) size = i;
            }
            return size + 1;
        } return false
    };
    this.remove = function (index) {
        for (let i= index; i < this.arr.length; i++) {
            this.arr[i] = this.arr[i+1];
        }
        this.arr.length = this.arr.length-1;
    };
    this.splice = function () {

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
    this.some = function (callback) {
        for (var i = 0; i < this.arr.length; i++) {
            if (callback(this.arr[i])) {
                return true;
            };
        };
        return false;
    };
    this.every = function (callback) {
        for (var i = 0; i < this.arr.length; i++) {
            if (!callback(this.arr[i])) {
                return false;
            };
        };
        return true;
    };



};
// //
// var obj = new AList0 ();
// obj.arr = [1, 2, 3, 4];
//
// console.log(obj.arr.every(isPosstive));


function isPosstive(number) {
    return number > 0;
}

// var myarr = [-1, 1, 2, 3, 4, 5, 6, 7, 8];
// // myarr.some(isPosstive );
// console.log(myarr.some(isPosstive ));



function LList0() {
    this.root = null;
    this.last = null;
    this.length = 0;
    //add new value to head
    this.unshift = function (value) {
        var e = new Entry(value, this.root)
        if (!this.last) {

            this.last =  e;

        };
        this.root = e;
        this.length++;
    };
    //add new value to tail
    this.push = function (value) {
        var e = new Entry(value, null);
        if(this.last) {

            this.last.next = e;

        };
        if(!this.root) {

            this.root = e;
        }
        this.last = e;
        this.length++;
    };

    //return value from tail and delete it

    this.pop = function () {

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

    //return value from head and delete it

    this.shift = function() {

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

    //remove value from LList

    this.remove = function (removeValue) {

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

    //search and returne value from LList

    this.search = function (searchValue) {
        var current = this.root;
        while (current !== null) {

            if (current.value === searchValue) {

                return current;

            };
            current = current.next;
        };
        return null;
    };

    //splice
    this.splice = function () {
        var index = arguments[0];
        var deleteCount = arguments[1];
        var elem = [];
        var resultList = new LList0();

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

    //Displays the entire LList in the console

    this.showAll = function () {
        var current = this.root;
        while(current !== null) {

            console.log(current);
            current = current.next;
        };
    };
};

function Entry (value, next) {
    this.value = value;
    this.next = next;
};


var obj = new LList0();
obj.unshift(1);
obj.unshift(2);
obj.unshift(3);
obj.unshift(4);
obj.splice(0,1,100);



obj.showAll();