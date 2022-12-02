import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "./users-thunk";
import {useEffect} from "react";

const CurrentUser = ({children}) => {
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(profileThunk())
    }, [])
    return(children)
}
export default CurrentUser