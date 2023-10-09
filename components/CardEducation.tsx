interface CardEducationProps {
  institution: string;
  date: string;
  participantStatus: string;
  courseName: string;
  description: string;
}

const CardEducation = ({
  institution,
  date,
  description,
  courseName,
  participantStatus,
}: CardEducationProps) => {
  return (
    <div className="flex bg-primaryBG px-14 my-10 text-text-primary">
      <div className="flex flex-row flex-wrap basis-2/3 gap-x-5 ">
        <h3 className="basis-full text-lg font-semibold">{institution}</h3>
        <span className="self-center">{participantStatus}</span>
        <span className="bg-gradient-to-l from-gradient-primary to-emerald-500 text-xs self-center p-1 text-white ">
          {date}
        </span>
      </div>
      <div className="space-y-8 basis-full">
        <h3 className="text-lg font-semibold">{courseName}</h3>
        <p className="text-text-secondary ">{description}</p>
      </div>
    </div>
  );
};

export { CardEducation };
