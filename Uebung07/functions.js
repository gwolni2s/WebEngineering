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
// curry (currying) function
function curry(op, x) {
    return (y) => {
        if(op === "add") {
            return x + y;
        }
        if(op === "mul") {
            return x * y;
        }
        if(op === "inc") {
            y = 1;
            return x + y;
        }
    }
}
// inc function with add function
const inc = addf(0);
const x = inc(1);
console.log(x);

//methodize and demethodize from https://jsfiddle.net/daronwolff/o9u39hmr/
function methodize(f) {
    return function (x) {
        return f(this, x);
    }
}
Number.prototype.add = methodize(add);
console.log((3).add(4));

function demethodize(f) {
    return function(x,y) {
        return f.call(x,y);
    };
}
console.log(demethodize(Number.prototype.add)(5,6));

//twice function
function twice (f) {
    return (x) => {
        return f(x, x);
    }
}
const double = twice(add);
const square = twice(mul);
const y = double(11);
console.log(y);

// composeu function
function composeu(f, h) {
    return (x) => {
        return h(f(x));
    }
}
const compose = composeu(double, square)(4);
console.log(compose);

// composeb function
function composeb(f, h) {
    return (x, y, z) => {
        return h(f(x, y), z);
    }
}

const compob = composeb(add, mul)(2,3,5);
console.log(compob);

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

console.log(a(3, 4));
//console.log(a(5, 6));

// counterf function
function counterf(x) {
    var obj = {
        counter: x,
        inc: () => {
            return x += 1;
        },
        dec: () => {
            return x -= 1;
        },
        value: () => {
            return x;
        }
    };
    return obj;
}

const counterF = counterf(10);
console.log(counterF.value());

const counterInc = counterF.inc();
console.log(counterInc);

const counterDec = counterF.dec();
console.log(counterDec);

// revocable function
function revocable(f) {
    var revok = false;
    var obj = {
        revoked: revok,
        invoke: (x) => {
            if(!revok) {
                return f(x);
            } else {
                return f("Error");
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





