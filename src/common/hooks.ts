import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {AppRootStateType, AppDispatch} from "../store/store";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;