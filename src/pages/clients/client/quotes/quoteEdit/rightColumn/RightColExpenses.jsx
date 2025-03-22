import RightColExpenseList from "./RightColExpenseList";

function RightColExpenses({ data }) {
  const keys = Object.keys(data);

  return (
    <div className="flex flex-col gap-8 pt-4">
      {keys.map((e, i) =>
        Object.keys(data[e]).length ? (
          <RightColExpenseList key={i} title={e} data={data[e]} />
        ) : null,
      )}
    </div>
  );
}

export default RightColExpenses;
