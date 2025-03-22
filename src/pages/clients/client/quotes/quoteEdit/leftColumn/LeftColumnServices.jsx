import ServiceList from "./ServiceList";

function LeftColumnServices({ data }) {
  console.log("service data");
  console.log(data);

  console.log(Object.keys(data));

  const keys = Object.keys(data);

  return (
    <div className="flex flex-col gap-8 pt-12">
      {keys.map((e, i) => (
        <ServiceList title={e} data={data[e]} key={i} />
      ))}
    </div>
  );
}

export default LeftColumnServices;
