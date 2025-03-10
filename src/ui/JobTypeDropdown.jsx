import InstructionText from "./InstructionText";

function JobTypeDropdown({ onChange }) {
  const jobTypes = [
    "",
    "Land Survey",
    "Land Grading",
    "Leveling",
    "Installation",
    "Soil Removal",
    "Dirt Removal",
  ];

  return (
    <div className="flex flex-col gap-4">
      <InstructionText text="Select a job type" />
      <select className="w-full bg-slate-700" onChange={onChange}>
        {jobTypes.map((job, i) => (
          <option key={i}>{job}</option>
        ))}
      </select>
    </div>
  );
}

export default JobTypeDropdown;
