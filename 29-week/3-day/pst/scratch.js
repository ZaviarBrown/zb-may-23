// let num1 = 5;
// let num2 = num1;

// console.log(num1, num2);

// num1++;

// console.log(num1, num2);

// const myArr = [1, 2, 3];

//! --------------------------------------------------------------------
//*                           Reference 1 layer
//! --------------------------------------------------------------------

// const myObj = {
//     a: 'a',
//     b: 'b',
//     c: 'c',
//     innerArr: [1, 2, 3],
// };

// const myOtherObj = { ...myObj };

// console.log(myObj, '\n', myOtherObj);

// myObj.d = 'd';
// myObj.innerArr.push(4);

// console.log(myObj, '\n', myOtherObj);

//! --------------------------------------------------------------------
//*                          Reference 2 layer
//! --------------------------------------------------------------------

const myObj = {
    a: 'a',
    b: 'b',
    c: 'c',
    innerArr: [1, 2, 3],
};

const myOtherObj = { ...myObj, innerArr: [...myObj.innerArr] };

console.log(myObj, '\n', myOtherObj);

myObj.d = 'd';
myObj.innerArr.push(4);

console.log(myObj, '\n', myOtherObj);
