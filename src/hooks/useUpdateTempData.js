import { useDispatch } from "react-redux";
import { setTempData } from "../store/slices/columnSlice";

export const useUpdateTempData = () => {
    const dispatch = useDispatch();

    return (type, update, tempData) => {
        dispatch(setTempData({ ...tempData, [type]: update }));
    };
};
