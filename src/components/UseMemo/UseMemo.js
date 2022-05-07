import {useMemo, useState} from "react";

const summator = (n) => {
    let sum = 0
    for (let i = 0; i < 100000; i++) {
        sum += n
    }
    return sum
}

const UseMemo = () => {
    const [n, setN] = useState(5);
    const [count, setCount] = useState(0);

    // const number = summator(n);
    const number = useMemo(() => summator(n), [n])

    return (
        <div>
            <h1>sum: {number}</h1>
            <h1>counter: {count}</h1>
            <button onClick={() => setN(prevState => prevState + 1)}>incN</button>
            <button onClick={() => setCount(prevState => prevState + +1)}>incCount</button>
        </div>
    );
};

export {UseMemo};