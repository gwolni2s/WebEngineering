// identity function
function identity_function(arg) {
    return () => {
        return arg;
    }
}
// addition and multiplication function
function add(x, y) {
    return x + y;
}
function mul(x, y) {
    return x * y;
}
// add function
function addf(y) {
    return (x) => {
        return y + x;
    }
}
// apply function
function applyf(f) {
    return (x) => {
        return (y) => {
            return f(x, y);
        }
    }
}
const result = applyf(add);
console.log("Result: " + result(4)(7));

// curry (currying) function
function curry(f, x) {
    return (y) => {
        return f(x, y);
    }
}
//curry test
console.log("Curry mit 3 und 4 ergibt: " + curry(add, 3)(4));

// inc function with add function
const inc = curry(add, 1);
console.log("inc Funktion auf 6 angewendet ergibt: " + inc(6));

//methodize and demethodize from https://jsfiddle.net/daronwolff/o9u39hmr/
function methodize(f) {
    return function (x) {
        return f(this, x);
    }
}
Number.prototype.add = methodize(add);
console.log("Funktion methodize mit 3 und 4 ergibt: " + (3).add(4));

function demethodize(f) {
    return function(x,y) {
        return f.call(x,y);
    };
}
console.log("Funktion demethodize ergibt mit 5 und 6: " + demethodize(Number.prototype.add)(5,6));

//twice function
function twice (f) {
    return (x) => {
        return f(x, x);
    }
}
const square = twice(mul);
const double = twice(add);
console.log("Twice mit mul und 11 ergibt: " + square(11));


// composeu function
function composeu(f, h) {
    return (x) => {
        return h(f(x));
    }
}
const compose = composeu(double, square)(4);
console.log("ComposeU mit double und square mit 4 ergibt: " + compose);

// composeb function
function composeb(f, h) {
    return (x, y, z) => {
        return h(f(x, y), z);
    }
}

const compob = composeb(add, mul)(2,3,5);
console.log("ComposeB mit add und mul mit 2, 3, und 5 ergibt: " + compob);

// once function
function once(f) {
    var executed = false;
    return function(x, y) {
        if (!executed) {
            executed = true;
            return x + y// do something
        } else {
            return new Error("Once already called once");
        }
    };
};

const a = once(add);

console.log("Funktion once mit 3 und 4 ergibt beim ersten Mal: " + a(3, 4));
console.log("Funktion once mit 5 und 6 ergibt beim zweiten Mal: " + a(5, 6));

// counterf function
function counterf(x) {
    var obj = {
        counter: x,
        inc: () => {
            return x = x + 1;
        },
        dec: () => {
            return x = x - 1;
        },
        value: () => {
            return x;
        }
    };
    return obj;
}

const counterF = counterf(10);
console.log("Funktion counterF hat den aktuellen Wert: " + counterF.value());

console.log("Funktion counterF nach .inc Aufruf hat den Wert: " + counterF.inc());

console.log("Funktion counterF nach .dec Aufruf hat den Wert: " + counterF.dec());

// revocable function
function revocable(f) {
    let revok = false;
    const obj = {
        revoked: revok,
        invoke: (x) => {
            if (!revok) {
                return f(x);
            } else {
                return f("Error: function is already revoked");
            }
        },
        revoke: () => {
            revok = true;
        }
    };
    return obj;
}
// identity
function identity(arg) {
    console.log(arg);
}
temp = revocable(identity);
temp.invoke(7);
temp.revoke();
temp.invoke(8);

// array wrapper object from https://stackoverflow.com/questions/28542496/javascript-private-array
var items = new WeakMap();

function vector() {
    var obj = {
        array: items = [],
        get: (x) => {
            return items[x];
        },
        append: (x) => {
            items.push(x);
        },
        store: (x, y) => {
            items[x] = y;
        }
    };
    return obj;
};

my_vector = vector();
my_vector.append(7);
my_vector.store(1, 8);
let vectorGet = my_vector.get(0) // 7
console.log(vectorGet);
vectorGet = my_vector.get(1) // 8
console.log(vectorGet);





