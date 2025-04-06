import useCounter from '../hooks/use-counter';
import Button from '../components/Button'


const CounterPage = ({ initialCount }) => {
    const {count, increment} = useCounter(initialCount);
    return <>
        <h1>Count is: {count}</h1>
        <Button primary onClick={increment} >increment Counter</Button>
    </>
}

export default CounterPage;