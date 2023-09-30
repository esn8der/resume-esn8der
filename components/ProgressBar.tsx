interface ProgressBarProps {
  name: string;
  progress: string;
}

const ProgressBar = ({ name, progress }: ProgressBarProps) => {
  const progressValue = parseFloat(progress);
  const barWidth = `${progressValue}%`;

  return (
    <div className="space-y-[4px]">
      <div className="flex justify-between text-[#c6c4d0]">
        <h4>{name}</h4>
        <h4>{progress}%</h4>
      </div>
      <div className="border border-[#00d68f] rounded-full h-[6px] p-[1px]">
        <div
          className="bg-[#00d68f] h-[2px] rounded-full"
          style={{ width: barWidth }}
        ></div>
      </div>
    </div>
  );
};

export { ProgressBar };
