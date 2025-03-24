import RowDelete from "../../expenses/list/RowDelete";

function ServiceListRow({ data, odd, handleDelete }) {
  const { serviceCategory, serviceName } = data;

  const bgColor = odd ? "bg-slate-600" : "bg-slate-700";

  return (
    <div className={`grid grid-cols-[5fr_1fr] ${bgColor} py-1 pl-4`}>
      <span>{serviceName}</span>
      <RowDelete onClick={() => handleDelete(serviceCategory, serviceName)} />
    </div>
  );
}

export default ServiceListRow;
