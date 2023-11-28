let one = 'hey';
let two = 500;

const myVals = [one, two];

// const myVersionOfUseEffect = (callBack, myVals) => {
//     myVals.forEach((el) => {
//         if (el !== previous.el) {
//             callBack()
//         }
//     });
// };

// const myCB = () => 'does some cool stuff';

// useEffect(myCB, [one, two]);
// useEffect(() => {
//     return 'does some cool stuff';
// }, [one, two]);

useEffect(() => {
    setTimeout(() => {
        this.setState({ count: 5 });
    }, 5000);

    return () => 'some function';
}, []);

useEffect(() => {
    console.log('hello world!');

    return () => 'some function';
}, [one, two]);

/**
 * When does a component run "componentWillUnmount()" / leave the stack?
 *
 * 1. When it leaves the page
 * 2. When it updates
 * 3. When it leaves the page or updates
 * 4. Never
 * 5. Genuinely have no clue ggs only
 */

const giveMe5 = () => 5;

let num1 = giveMe5();
let num2 = giveMe5();

console.log(num1 === num2); // true

num1++;

console.log(num1 === num2); // false
