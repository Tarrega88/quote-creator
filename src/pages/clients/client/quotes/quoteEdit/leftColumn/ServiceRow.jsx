import { useDispatch, useSelector } from "react-redux";
import {
  setSelection,
  setSubCategory,
  setTempData,
} from "../../../../../../store/slices/columnSlice";

function ServiceRow({ data, odd, visible, subCategory }) {
  const dispatch = useDispatch();
  const colors = odd
    ? "bg-slate-700 hover:bg-slate-600"
    : "bg-slate-900 hover:bg-slate-800";

  const services = useSelector((state) => state.service.services);
  const serviceData = services[subCategory][data];

  function handleClick() {
    dispatch(setSubCategory(subCategory));
    dispatch(setSelection(data));
    dispatch(
      setTempData({ ...serviceData, multiple: 1, category: "services" }),
    );
  }

  return (
    <li
      onClick={handleClick}
      className={`flex gap-1 pl-2 ${colors} ${visible ? "h-8" : "h-0"} cursor-pointer items-center transition-all duration-300`}
    >
      {visible && <div>{data}</div>}
    </li>
  );
}

export default ServiceRow;
