import { IconType } from 'react-icons';

interface CardKnowledgeProps {
    knowledgeData: {
        Icon: IconType;
        title: string;
        description: string;
    }[]
}

const CardKnowledge = ({ knowledgeData }: CardKnowledgeProps) => {
    return (
        <>
        {knowledgeData.map((knowledge, index) => (
                <div className="flex flex-col bg-white items-center text-center pt-6 pb-10" key={index}>
                    <div className="relative text-amarillo ">
                        <knowledge.Icon className='text-7xl' />
                    </div>
                    <div className="space-y-4 mt-6">
                        <h4>{knowledge.title}</h4>
                        <p className="text-text-secondary self-center">{knowledge.description}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export { CardKnowledge }