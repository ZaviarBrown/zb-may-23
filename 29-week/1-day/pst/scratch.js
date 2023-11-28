useEffect(() => {
    const myTimeout = setTimeout(() => {
        setCount(5);
    }, 5000);

    return () => clearTimeout(myTimeout);
}, []);

useEffect(() => {
    console.log('hello world!');
}, [count]);

/**
 * When does a useEffect cleanup function run?
 *
 * 1. When the component leaves the screen
 * 2. When the component updates
 * 3. When the component leaves or updates
 * 4. Never
 * 5. Genuinely no clue ggs only
 */
