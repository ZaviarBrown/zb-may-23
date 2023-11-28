import { useEffect, useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    console.log('heyyeoeyuoeyuoey');

    useEffect(() => {
        const myTimeout = setTimeout(() => {
            console.log('Timeout just ran!');
            setCount((n) => n + 1);
        }, 1000);

        return () => clearTimeout(myTimeout);
    }, [count]);

    return (
        <>
            <h1>This is the number of seconds that have passed</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Make number go up!
            </button>
        </>
    );
}

export default App;
