import RightColServiceList from "./RightColServiceList";

function RightColServices({ data }) {
  const keys = Object.keys(data);

  return (
    <div className="flex flex-col gap-8 pt-4">
      {keys.map((e, i) => (
        <RightColServiceList key={i} title={e} data={data[e]} />
      ))}
    </div>
  );
}

export default RightColServices;
