export default function Button({increment, reset, decrement, count}){
    return(
    <div>
        <button onClick={() => increment()}>+</button>
        <button onClick={() => reset()}>Reset</button>
        <button onClick={() => decrement()}>-</button>

    </div>
    );
}