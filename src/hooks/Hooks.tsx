import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, appDispatch } from "../redux/store";

export const useAppDispatch = () => useDispatch<appDispatch>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
