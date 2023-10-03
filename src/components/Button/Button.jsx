import { useDispatch} from "react-redux";
import { fetchTask } from "redux/store";
export const Button =() =>{
    const dispatch = useDispatch()
    return (
        <button type="button" onClick={dispatch(fetchTask)}> dispatch middleware</button>
    )

}