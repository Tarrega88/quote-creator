function ClientRow({ clientName, colorIndex = 0 }) {
  const color = {
    0: "bg-slate-700",
    1: "bg-slate-500",
  };

  return (
    <div className={`${color[colorIndex]} flex h-8 items-center px-4`}>
      {clientName}
    </div>
  );
}

export default ClientRow;
