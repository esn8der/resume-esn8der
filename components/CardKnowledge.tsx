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
          className="card-knowledge group"
          key={index}
        >
          <knowledge.Icon className="text-8xl text-emerald-500 group-hover:text-[#005639]" />
          <div className="space-y-4 mt-6">
            <h3>{knowledge.title}</h3>
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
