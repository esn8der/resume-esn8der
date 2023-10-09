import React, { useState } from "react";
import Image from "next/image";
import { PortfolioDialog } from "./dialogs/PortfolioDialog";

interface CardPortfolioProps {
  img: string;
  title: string;
  description: string;
  projectStatus: string;
  additionalInfo: string;
  languages: string[];
  link: string;
}

const CardPortfolio = ({
  img,
  title,
  description,
  projectStatus,
  additionalInfo,
  languages,
  link,
}: CardPortfolioProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="rounded-lg text-text-primary bg-primaryBG hover:bg-[#4a4a7a] transition-colors duration-300 ease-in max-w-fit min-w-fit basis-1/3 group">
      <div className="p-4">
        <Image
          className="rounded-lg group-hover:scale-105 transition-all duration-300 ease-in grayscale shadow-md group-hover:shadow-emerald-500  group-hover:grayscale-0 group-hover:saturate-200"
          src={img}
          alt="Imagen del repositorio"
          width={352}
          height={198}
        />
      </div>
      <div className="flex flex-col p-4 max-w-[384px] items-start">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-text-secondary">{description}</p>
        <button
          className="mt-2 text-text-secondary text-md font-semibold links"
          onClick={handleOpenDialog}
        >
          Saber más
        </button>
      </div>

      <PortfolioDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        title={title}
        img={img}
        projectStatus={projectStatus}
        additionalInfo={additionalInfo}
        languages={languages}
        link={link}
      />
    </div>
  );
};

export { CardPortfolio };
