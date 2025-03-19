function ClientQuoteList({ clientData }) {
  console.log("clientData");
  console.log(clientData);

  const { quotes } = clientData;
  console.log(quotes);

  return <div className="grid grid-cols-2"></div>;
}

export default ClientQuoteList;
