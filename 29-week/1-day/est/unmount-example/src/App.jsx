import { useEffect, useState } from 'react';

function App() {
    const [num, setNum] = useState(0);

    console.log('WOOWOWOWOWOWO');

    useEffect(() => {
        const myTimeout = setTimeout(() => {
            console.log('setTimeout is running!');
            setNum((prev) => prev + 1);
        }, 1000);

        return () => clearTimeout(myTimeout);
    }, [num]);

    return (
        <>
            <h1>{"This is how many times we've waited for 1 second"}</h1>
            <h2>{num}</h2>
            <button onClick={() => setNum((prevNum) => prevNum + 1)}>
                Click for +1
            </button>
        </>
    );
}

export default App;
