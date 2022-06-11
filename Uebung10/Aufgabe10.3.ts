//Source: Solutions from WE App

var fallzahlen: number[];
fallzahlen = [
    50.798,
    52.447,
    11.348,
    16.652,
    1.502,
    4.290,
    16.328,
    7.069,
    13.078,
    49.613,
    11.089,
    3.571,
    41.565,
    17.628,
    4.728,
    21.896,
];

function minimum(zahlen: number[]): number {
    let min = zahlen[0];
    for (const x of zahlen) {
        if (x < min) min = x;
    }
    return min;
}

function maximum(zahlen: number[]): number {
    let max = zahlen[0];
    for (const x of zahlen) {
        if (x > max) max = x;
    }
    return max;
}

function summe(zahlen: number[]): number {
    let sum:number = 0;
    for (const x of zahlen) {
        sum += x;
    }
    return sum;
}

function durchschnitt(zahlen: number[]): number {
    return summe(zahlen) / zahlen.length;
}

console.log("Minimum: " + minimum(fallzahlen));
console.log("Maximum: " + maximum(fallzahlen));
console.log("Summe: " + summe(fallzahlen));
console.log("Durchschnitt: " + durchschnitt(fallzahlen));

