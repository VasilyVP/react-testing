import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function PageOne() {
    const [count, setCount] = useState(0);

    const handleClick = (num: number) => {
        setCount(count + num);
    }

    return (
        <div data-testid='page_one'>
            <h1>Page one</h1>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '50px', height: '50px' }}>
                <button onClick={() => handleClick(1)} data-testid='click+'>Click +</button>
                <button onClick={() => handleClick(-1)} data-testid='click-'>Click -</button>
            </div>
            <p data-testid='count'>Count: {count}</p>
            <Link to='/' data-testid='back_link'>Back</Link>
        </div>
    )
}
