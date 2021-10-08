// #1
var userObj = {
    firstName: 'Mary',
    lastName: 'Lemish',
    age: 20
};
console.log(userObj);

// #2
var userObj = {
    firstName: 'Mary',
    lastName: 'Lemish',
    age: 20,
    fullName() {
        return `${userObj.firstName} ${userObj.lastName}`;
    }
};
console.log(userObj.fullName());

// #3
function defUpperStr(str) {
    return (str || 'default text').toUpperCase();
}

console.log(defUpperStr('My text'));
console.log(defUpperStr());

// #4
function evenFn(n) {
    var arr = [];

    for (var i = 1; i <= n; i++)
        if (i % 2 === 0)
            arr.push(i);

    return arr;
}

console.log(evenFn(10));
console.log(evenFn(5));
console.log(evenFn(25));


// #5
function weekFn(n) {
    var day;
    switch (n) {
        case 1: day = 'Понедельник';
            break;
        case 2: day = 'Вторник';
            break;
        case 3: day = 'Среда';
            break;
        case 4: day = 'Четверг';
            break;
        case 5: day = 'Пятница';
            break;
        case 6: day = 'Суббота';
            break;
        case 7: day = 'Воскресенье';
            break;
        default: day = null;
    }
    return day;
}

console.log(weekFn(1));
console.log(weekFn(2));
console.log(weekFn(3));
console.log(weekFn(4));
console.log(weekFn(5));
console.log(weekFn(6));
console.log(weekFn(7));

// #6
function ageClassification(n) {
    return n > 0
        ? n > 24
            ? n > 44
                ? n > 65
                    ? n > 75
                        ? n > 90
                            ? n > 122
                                ? null
                                : 'долгожители'
                            : 'старческий возраст'
                        : 'пожилой возраст'
                    : 'средний возраст'
                : 'молодой возраст'
            : 'детский возраст'
        : null;
}


console.log(ageClassification(1));
console.log(ageClassification(44));
console.log(ageClassification(65));
console.log(ageClassification(75));
console.log(ageClassification(90));
console.log(ageClassification(122));
console.log(ageClassification(144));


// #7
function oddFn(n) {
    var arr = [];
    var i = 0;

    while (i++ < n)
        if (i % 2 !== 0)
            arr.push(i);

    return arr;
}

console.log(oddFn(10));
console.log(oddFn(15));
console.log(oddFn(20));

// #8
function mainFunc(a, b, cb) {
    if (cb && typeof cb === 'function') return cb(a, b);

    return false;
}

function cbRandom(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function cbPow(a, b) {
    return Math.pow(a, b);
}

function cbAdd(a, b) {
    return a + b;
}

console.log(mainFunc(2, 5, cbRandom));
console.log(mainFunc(2, 5, cbPow));
console.log(mainFunc(2, 5, cbAdd));
console.log(mainFunc(2, 5, 'not a func'));