
import { useDispatch, useSelector } from 'react-redux';
import { incrementLike, decrementLike } from './Actions';


const LikeCounter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(incrementLike())}>Like</button>
            <button onClick={() => dispatch(decrementLike())}>Unlike</button>
        </div>
    );
};


export default LikeCounter;
