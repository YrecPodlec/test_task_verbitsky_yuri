import {TypedUseSelectorHook, useSelector} from "react-redux";
import {TypeRootState} from "../store/store.tsx";

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector