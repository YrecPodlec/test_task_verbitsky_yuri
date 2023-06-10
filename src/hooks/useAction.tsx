import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {likeAction} from "../store/likes/like.slice.tsx";

const allActions = {
    ...likeAction
}
export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}