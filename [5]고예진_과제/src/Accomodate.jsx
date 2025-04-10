import React, { useState, useEffect } from 'react';
import useCounter from './useCounter';

const MAX_CAPACITY = 10;

function Accomodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    // 의존성 배열이 없으면 컴포넌트가 마운트된 직후와 컴포넌트가 업데이트 될 때마다 실행된다.
    useEffect(() => {
        console.log("======useEffect is called.======")
        console.log(`isFull: ${isFull}`);
    });

    // 의존성 배열이 있으면, 컴포넌트가 마운트된 직후와 의존성 배열에 있는 값이 업데이트 될 때마다 실행된다.
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count: ${count}`);
    }, [count]);

    return (
        <div style={{ padding: '20px', border: '1px solid black' }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>

            <button onClick={increaseCount} disabled={isFull}>
                enter
            </button>
            <button onClick={decreaseCount} disabled={count === 0}>
                leave
            </button>

            {isFull && <p style={{ color: 'red' }}>수용 인원이 가득 찼습니다.</p>}
        </div>
    );
}

export default Accomodate;