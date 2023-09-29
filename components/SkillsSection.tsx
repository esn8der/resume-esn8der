import { TbLayersIntersect } from "react-icons/tb";

interface SkillsSectionProps {
  skills: string[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => (
  <div className="flex flex-col gap-1 max-w-full self-start px-10">
    <h3 className="text-lg font-[550] mb-2">Extra Skills</h3>
    {skills.map((skill, index) => (
      <div key={index} className="flex gap-4">
        <TbLayersIntersect className="text-amarillo text-xl scale-x-[-1]" />
        <p className="text-text-secondary">{skill}</p>
      </div>
    ))}
  </div>
);

export default SkillsSection;
