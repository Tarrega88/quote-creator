function PriceRange({ min, max }) {
  return (
    <div className="flex justify-center">
      <input min={min} max={max} type="range" className="w-56"></input>
    </div>
  );
}

export default PriceRange;
