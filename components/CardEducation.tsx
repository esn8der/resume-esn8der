import {HiOutlineExternalLink} from 'react-icons/hi'
interface CardEducationProps {
  institution: string;
  date: string;
  participantStatus: string;
  courseName: string;
  description: string;
  certificate?: string;
}

const CardEducation = ({
  institution,
  date,
  description,
  courseName,
  participantStatus,
  certificate,
}: CardEducationProps) => {
  return (
    <div className="space-y-10 mb-10">
      <div className="flex bg-primaryBG px-14 my-10 text-text-primary">
        <div className="flex flex-row flex-wrap basis-2/3 content-between">
          <h3 className="basis-full text-lg font-semibold">{institution}</h3>
          <div className="space-x-4 basis-full">
            <span className="self-center">{participantStatus}</span>
            <span className="bg-gradient-to-l from-gradient-primary to-emerald-500 text-xs self-center p-1 text-white">
              {date}
            </span>
          </div>
        </div>

        <div className="space-y-8 basis-full">
          <h3 className="text-lg font-semibold">{courseName}</h3>
          <p className="text-text-secondary ">{description}</p>
        </div>
      </div>
      {certificate && (
          <a href={certificate} target="_blank" className="flex items-center links mx-14 w-fit px-1">
            Certificado
            <HiOutlineExternalLink className="ml-1 " />
          </a>
        )}
    </div>
  );
};

export { CardEducation };
