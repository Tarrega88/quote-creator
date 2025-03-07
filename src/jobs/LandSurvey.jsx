function LandSurvey() {
  const surveyTypes = [
    { type: "Boundary", minCost: 300, maxCost: 900 },
    { type: "Topographic", minCost: 400, maxCost: 1500 },
    { type: "Fence", minCost: 200, maxCost: 1200 },
    { type: "ALTA", minCost: 1200, maxCost: 4000 },
    { type: "Mortgage", minCost: 200, maxCost: 700 },
    { type: "New Construction", minCost: 400, maxCost: 1800 },
    { type: "As-Built", minCost: 400, maxCost: 1500 },
    { type: "Plat survey", minCost: 400, maxCost: 800 },
    { type: "Plot Plan", minCost: 100, maxCost: 250 },
    { type: "Subdivision", minCost: 300, maxCost: 1000 },
  ];

  return (
    <div>
      <select className="bg-slate-700">
        {surveyTypes.map((surveyType) => (
          <option>{surveyType.type}</option>
        ))}
      </select>
    </div>
  );
}

export default LandSurvey;
