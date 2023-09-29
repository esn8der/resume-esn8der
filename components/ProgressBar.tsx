interface ProgressBarProps {
  name: string;
  progress: string;
}

const ProgressBar = ({ name, progress }: ProgressBarProps) => {
  const progressValue = parseFloat(progress);
  const barWidth = `${progressValue}%`;

  return (
    <div className="space-y-[4px]">
      <div className="flex justify-between text-text-secondary">
        <h4>{name}</h4>
        <h4>{progress}%</h4>
      </div>
      <div className="border border-amarillo rounded-full h-[6px] p-[1px]">
        <div
          className="bg-amarillo h-[2px] rounded-full"
          style={{ width: barWidth }}
        ></div>
      </div>
    </div>
  );
};

export { ProgressBar };
