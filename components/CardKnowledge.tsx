import { IconType } from "react-icons";

interface CardKnowledgeProps {
  knowledgeData: {
    Icon: IconType;
    title: string;
    description: string;
  }[];
}

const CardKnowledge = ({ knowledgeData }: CardKnowledgeProps) => {
  return (
    <>
      {knowledgeData.map((knowledge, index) => (
        <div
          className="flex flex-col group bg-primaryBG items-center text-center text-text-primary pt-6 pb-10 mx-2 shadow-lg shadow-emerald-500 rounded-lg hover:scale-95"
          key={index}
        >
          <knowledge.Icon className="text-8xl text-emerald-500 group-hover:text-[#005639]" />
          <div className="space-y-4 mt-6">
            <h4>{knowledge.title}</h4>
            <p className="text-text-secondary">
              {knowledge.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export { CardKnowledge };
