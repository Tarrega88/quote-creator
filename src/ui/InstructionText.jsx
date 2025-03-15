function InstructionText({ text, alignment = "center" }) {
  const aligntments = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  };

  return (
    <div className={`text-2xl ${aligntments[alignment]} px-8`}>{text}</div>
  );
}

export default InstructionText;
