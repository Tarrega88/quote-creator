import ServiceList from "../leftColumn/ServiceList";
import RightColServiceList from "./RightColServiceList";

function RightColServices({ data }) {
  //   console.log("TEST");
  //   console.log(data);
  const keys = Object.keys(data);
  //   console.log(keys);

  console.log("DATA");
  console.log(data);
  return (
    <div className="flex flex-col gap-8 pt-4">
      {keys.map((e, i) => (
        <RightColServiceList key={i} title={e} data={data[e]} />
      ))}
    </div>
  );
}

export default RightColServices;

{
  /*
    import ServiceList from "./ServiceList";

function LeftColumnServices({ data }) {
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

    */
}
