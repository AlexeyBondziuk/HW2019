window.onload = function () {

    document.getElementById("inputButton").addEventListener("click", insert);
    document.getElementById("removeButton").addEventListener("click", remove);
    document.getElementById("findButton").addEventListener("click", find);
    document.getElementById("emptyButton").addEventListener("click", empty);
    document.getElementById("toArray").addEventListener("click", treeToArray);
    document.getElementById("tolList").addEventListener("click", treeToLinkedList);

};

// create new Tree
var tree = new BSTree();
var counter = 0;

// insert new Nodes
function insert() {
    let inputValue = document.getElementById("inputValue").value;

    if (isNaN(inputValue)) {

        tree.insert(inputValue);
    } else {

        tree.insert(+inputValue);
    }
    redrowLines();
}


// remove Nodes

function remove() {
    let removeValue = document.getElementById("removeValue").value;

    if (!isNaN(removeValue)) {

        removeValue = +removeValue;
    }


    tree.remove(removeValue);
    redrowLines();
}

// fined Nodes

function find() {
    let findValue = document.getElementById("findValue").value;
    let currenId;
    if (!isNaN(findValue)) {

        findValue = +findValue;
    }


    currenId = tree.find(findValue);

    if (currenId) {
        flash(currenId.id);
    } else {

        msg(`${findValue} not found`);
    }
}

// empty Tree

function empty() {
    let parent = document.getElementById("mainField");

    while (parent.hasChildNodes()) {

        parent.removeChild(parent.firstChild);
    }


    tree.empty();
}

// to Array

function treeToArray() {

    let array = tree.toArray();
    msgBottom('[ ' + array.toString() + ' ]');
}

// to Linked List

function treeToLinkedList() {

    let lList = tree.toLinkedList();
    msgBottom('[ ' + JSON.stringify(lList) + ' ]');
}


function msgBottom(text) {
    let e = document.getElementById('msgBottom');

    if (!e) {
        e = document.createElement("div");
        e.setAttribute('id', 'msgBottom');
        e.classList.add('mainField__msg');
        e.classList.add('mainField__msg__bottom');
        document.getElementById("mainField").appendChild(e);
    }

    e.innerText = text;

}

// flash  Node by id red color

function flash(id) {
    let currentNode = document.getElementById(id);
    currentNode.classList.add("mainField__node__red");
    setTimeout(function () {
        currentNode.classList.remove("mainField__node__red");
    }, 1000);
}

// flash  Node by id yellow color
function flashY(id) {
    let currentNode = document.getElementById(id);
    currentNode.classList.add("mainField__node__yellow");
    setTimeout(function () {
        currentNode.classList.remove("mainField__node__yellow");
    }, 2000);
}


// display message if can not find Node 
function msg(text) {
    let msg = document.createElement("div");
    msg.setAttribute("id", "msg");
    msg.classList.add("mainField__msg");
    msg.classList.add("mainField__msg__center");
    msg.innerText = text;
    document.getElementById("mainField").appendChild(msg);
    setTimeout(function () {
        document.getElementById("mainField").removeChild(msg);
    }, 2000);
}

// drow the Line between nodes
function drowLine(shiftX1, shiftX2, shiftY, param) {
    const topStart = 88;
    const LeftStart = -24;
    let lineRight = `<svg height="100%" width="100%">
                    <line x1="0" y1="0" x2="100%" y2="100%" style="stroke:rgb(0,100,0);stroke-width:1" />
                    </svg>`;
    let lineLeft = `<svg height="100%" width="100%">
                    <line x1="100%" y1="0" x2="0" y2="100%" style="stroke:rgb(0,100,0);stroke-width:1" />
                    </svg>`;

    let newLineContainer = document.createElement("div");
    newLineContainer.style.top = topStart + 50 * shiftY + 'px';

    if (shiftX1 < shiftX2) {

        let x = 24 + 50 * shiftX1;
        newLineContainer.style.left = `calc(50% + ${x}px)`;

    } else {
        let x = 50 * shiftX2 + 24;
        newLineContainer.style.left = `calc(50% + ${x}px)`;
    }


    if (param === 'r') {
        newLineContainer.innerHTML = lineRight;
    } else if (param === 'l') {
        newLineContainer.innerHTML = lineLeft;
    }

    newLineContainer.classList.add('mainField__line');
    newLineContainer.setAttribute('name', 'line');
    newLineContainer.style.width = 50 * Math.abs(shiftX1 - shiftX2) + 'px';
    document.getElementById("mainField").appendChild(newLineContainer);
}


// redraw all lines between nodes

function redrowLines() {

    let removeLines = document.getElementsByName('line');
    let parent = document.getElementById("mainField");

    for (let i = 0; i < removeLines.length; i++) {

        parent.removeChild(removeLines[0]);
    }

    current = tree.root;
    putLine(current);

    function putLine(current) {
        if (current.left) {
            drowLine(current.shiftX, current.left.shiftX, current.shiftY, 'l');
            putLine(current.left);
        }

        if (current.right) {
            drowLine(current.shiftX, current.right.shiftX, current.shiftY, 'r');
            putLine(current.right);
        }
        return;
    }
}


// shift nodes to left
BSTree.prototype.shiftLeftAnDRedrow = function (min) {

    shiftLeft(this.root, min);

    function shiftLeft(current, min) {

        if (current.value <= min) {
            current.shiftX--;

            document.getElementById(current.id).style.left = 'calc(50% + ' + 50 * current.shiftX + 'px)';
        }


        if (current.left) {
            shiftLeft(current.left, min);
        }


        if (current.right) {
            shiftLeft(current.right, min)
        }


        return;
    }

    redrowLines();
};

// shift nodes right and up
BSTree.prototype.shiftRightUp = function (entry) {

    shiftRhUp(entry);

    function shiftRhUp(current) {

        current.shiftX++;
        current.shiftY--;
        document.getElementById(current.id).style.left = 'calc(50% + ' + 50 * current.shiftX + 'px)';
        document.getElementById(current.id).style.top = 'calc(50px + ' + 50 * current.shiftY + 'px)';

        if (current.left) {

            shiftRhUp(current.left);
        }


        if (current.right) {

            shiftRhUp(current.right)
        }


        return;
    }

    redrowLines();
};


// shift nodes left and up
BSTree.prototype.shiftLeftUp = function (entry) {

    shiftLhUp(entry);

    function shiftLhUp(current) {
        current.shiftX--;
        current.shiftY--;
        document.getElementById(current.id).style.left = 'calc(50% + ' + 50 * current.shiftX + 'px)';
        document.getElementById(current.id).style.top = 'calc(50px + ' + 50 * current.shiftY + 'px)';

        if (current.left) {

            shiftLhUp(current.left);
        }


        if (current.right) {

            shiftLhUp(current.right)
        }


        return;
    }

    redrowLines();
};


// shift nodes right 
BSTree.prototype.shiftRightAnDRedrow = function (max) {

    shiftRight(this.root, max);

    function shiftRight(current, max) {

        if (current.value >= max) {
            current.shiftX++;
            document.getElementById(current.id).style.left = 'calc(50% + ' + 50 * current.shiftX + 'px)';
        }


        if (current.left) {
            shiftRight(current.left, max);
        }

        if (current.right) {
            shiftRight(current.right, max);
        }


        return;
    }

    redrowLines();
};

// drow a new Node
function drawNode(id, value, shiftX, shiftY) {
    let resultShiftX = 50 * shiftX;
    let resultShiftY = 50 * shiftY;
    let newNode = document.createElement("div");
    newNode.setAttribute("id", id);
    newNode.setAttribute("class", "mainField__node");
    newNode.style.top = `calc(50px + ${resultShiftY}px)`;
    newNode.style.left = `calc(50% + ${resultShiftX}px)`;
    newNode.innerText = value;
    document.getElementById("mainField").appendChild(newNode);
    flash(id);

}


// remove Node By Id 
function removeNodeById(id) {
    let currentNode = document.getElementById(id);
    flash(id);
    setTimeout(function () {
        currentNode.parentNode.removeChild(currentNode);
    }, 300);
    setTimeout(function () {
        redrowLines()
    }, 50);

}

// BS TREE

function Entry(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.id = "";
    this.shiftX = null;
    this.shiftY = null;
}

function BSTree() {
    this.root = null;
}


// insert
BSTree.prototype.insert = function (value) {
    var newEntry = new Entry(value);
    counter++;
    newEntry.id = counter;
    var self = this;

    if (this.root === null) {
        this.root = newEntry;
        newEntry.shiftX = 0;
        newEntry.shiftY = 0;
        drawNode(newEntry.id, newEntry.value, newEntry.shiftX, newEntry.shiftY);

        return;
    } else {

        insertEntry(this.root, newEntry);
    }


    function insertEntry(entry, newEntry) {

        if (newEntry.value < entry.value) {

            newEntry.shiftY++;
            flashY(entry.id);

            if (entry.left === null) {

                entry.left = newEntry;

                if (newEntry.shiftX >= 0) {
                    newEntry.shiftX = 0;
                }

                newEntry.shiftX = entry.shiftX - 1;
                drawNode(newEntry.id, newEntry.value, newEntry.shiftX, newEntry.shiftY);

                // РАЗДВИГАЕМ
                if (newEntry.value > self.root.value) {
                    self.shiftRightAnDRedrow(newEntry.value);

                }

            } else {
                insertEntry(entry.left, newEntry);
            }

        } else {

            newEntry.shiftY++;
            flashY(entry.id);

            if (entry.right === null) {

                entry.right = newEntry;

                if (newEntry.shiftX <= 0) {
                    newEntry.shiftX = 0;
                }

                newEntry.shiftX = entry.shiftX + 1;
                drawNode(newEntry.id, newEntry.value, newEntry.shiftX, newEntry.shiftY);

                // РАЗДВИГАЕМ
                if (newEntry.value < self.root.value) {
                    self.shiftLeftAnDRedrow(newEntry.value);

                }

            } else {
                insertEntry(entry.right, newEntry);
            }
        }
    }
}

// find
BSTree.prototype.find = function (serchValue) {
    let current = this.root;
    while (current.value !== serchValue) {
        if (serchValue < current.value) {
            current = current.left;
        } else {
            current = current.right;
        }

        if (current === null) {
            return null;
        }

    }

    return current;
};

//  remove
BSTree.prototype.remove = function (removeValue) {
    let current = this.root;
    var self = this;
    this.root = removeCurrent(current, removeValue);

    function removeCurrent(current, removeValue) {

        if (current === null) {
            return null;
        }

        if (current.value === removeValue) {
            if (current.left === null && current.right === null) {

                removeNodeById(current.id);
                current = null;
                return current;
            } else if (current.right === null) {

                self.shiftRightUp(current);
                removeNodeById(current.id);

                return current.left;
            } else if (current.left === null) {

                self.shiftLeftUp(current);
                removeNodeById(current.id);
                return current.right;
            } else {
                let minRight = current.right;

                while (minRight.left !== null) {
                    minRight = minRight.left;
                }
                current.value = minRight.value;

                document.getElementById(current.id).innerText = current.value;

                current.right = removeCurrent(current.right, minRight.value);

                return current;
            }
        }

        if (current.value > removeValue) {
            current.left = removeCurrent(current.left, removeValue);

            return current;
        } else {
            current.right = removeCurrent(current.right, removeValue);

            return current;
        }
    }
};

//empty() 
BSTree.prototype.empty = function () {
    this.root = null;
};

//minValue() 
BSTree.prototype.minValue = function () {
    let current = this.root;

    while (current.left !== null) {
        current = current.left;
    }

    return current;
};

//toString() = строка {1,2,3}
BSTree.prototype.toString = function () {
    let str = '';
    let count = 0;
    inOrder(this.root);

    function inOrder(current) {
        if (current) {
            inOrder(current.left);

            if (count > 0) {
                str += ',';
            }

            str += current.value;
            count++;
            inOrder(current.right);
        }
    }

    return str + '';
};

//toArray()
BSTree.prototype.toArray = function () {
    let arr = [];
    let index = 0;
    inOrder(this.root);

    function inOrder(current) {

        if (current) {
            inOrder(current.left);
            arr[index] = current.value;
            index++;
            inOrder(current.right);
        }

    }

    return arr;
};

//toArray2()
BSTree.prototype.toArrayPreOrder = function () {
    let arr = [];
    let index = 0;
    preOrder(this.root);

    function preOrder(current) {

        if (current) {
            arr[index] = current.value;
            index++;
            preOrder(current.left);
            preOrder(current.right);
        }

    }

    return arr;
};


// toLinkedList()
BSTree.prototype.toLinkedList = function () {
    let LList0 = new LList();

    inOrder(this.root);

    function inOrder(current) {

        if (current) {
            inOrder(current.left);
            LList0.push(current.value);
            inOrder(current.right);
        }

    }

    return LList0;
};


// LinkedList class
function LList() {
    this.root = null;
    this.last = null;
    this.length = 0;
}

function LListEntry(value, next) {
    this.value = value;
    this.next = next;
}

//add new value to tail
LList.prototype.push = function (value) {
    var e = new LListEntry(value, null);
    if (this.last) {

        this.last.next = e;

    }

    if (!this.root) {

        this.root = e;
    }
    this.last = e;
    this.length++;
};


