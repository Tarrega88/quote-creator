function ClientRow({ client, odd }) {
  const colors = odd ? "bg-slate-500" : "bg-slate-600";

  console.log(client);

  const { clientName } = client;

  return (
    <div className={`flex h-10 items-center px-4 ${colors}`}>
      <div>{clientName}</div>
    </div>
  );
}

export default ClientRow;
