import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Image from "next/image";
import Slide from "@mui/material/Slide";
import Link from "next/link";
import { TransitionProps } from "@mui/material/transitions";
import {BiSolidTrafficBarrier, BiSolidFlagCheckered} from "react-icons/bi";
import { Oxanium } from "next/font/google";

const oxanium = Oxanium({ subsets: ["latin"] });

const backgroundColors = [
  "bg-purple-500",
  "bg-blue-500",
  "bg-red-500",
  "bg-orange-500",
];

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="left" ref={ref} {...props} />;
});

interface CardDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  img: string;
  projectStatus: string;
  additionalInfo: string;
  languages: string[];
  link: string;
}

const PortfolioDialog = ({
  open,
  onClose,
  title,
  img,
  projectStatus,
  additionalInfo,
  languages,
  link,
}: CardDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      maxWidth={"xs"}
      fullWidth={true}
    >
      <DialogTitle
        className={`${oxanium.className} font-bold text-3xl text-center border-x-2 border-t-2 border-gray-700 text-text-primary`}
        sx={{ bgcolor: "#1f2933" }}
      >
        {title}
      </DialogTitle>
      <DialogContent
        className="flex flex-col gap-4 border-x-2 border-gray-700"
        sx={{ bgcolor: "#1f2933" }}
      >
        <Image
          className="self-center shadow-lg shadow-black"
          src={img}
          alt="Imagen del repositorio"
          width={400}
          height={198}
        />
        <div className="flex gap-2 justify-center">
          {languages.length > 0 && (
            <div className="flex gap-2 justify-center">
              {languages.map((language, index) => (
                <span
                  key={language}
                  className={`${oxanium.className} ${
                    backgroundColors[index % backgroundColors.length]
                  } inline px-2 w-fit rounded-full shadow-md shadow-black text-sm text-text-primary self-end `}
                >
                  {language}
                </span>
              ))}
            </div>
          )}
        </div>
        <div>
          <h3 className={`${oxanium.className} text-xl text-text-primary`}>
            Descripción
          </h3>
          <p className={`${oxanium.className}  text-text-secondary `}>
            {additionalInfo}
          </p>
        </div>
        <div>
          <h3 className={`${oxanium.className} text-xl text-text-primary`}>
            Estado
          </h3>
          <span
            className={`${oxanium.className} ${
              projectStatus == "Terminado"
                ? 'bg-emerald-700' : 'bg-orange-700'
            } flex items-center gap-2 px-2 w-fit rounded-full shadow-md shadow-black text-sm text-text-primary self-end `}
            >
            {projectStatus == "Terminado" ? <BiSolidFlagCheckered className="text-black" /> : <BiSolidTrafficBarrier className="text-black" />}
            {projectStatus}
          </span>
        </div>
      </DialogContent>
      <DialogActions
        className="border-x-2 border-b-2 border-gray-700 space-x-2"
        sx={{ bgcolor: "#1f2933" }}
      >
        <Button
          onClick={onClose}
          className={`${oxanium.className} hover:text-black hover:scale-105 text-text-primary`}
        >
          Cerrar
        </Button>
        <Link href={link} target="_blank" arial-aria-label="Enlace al repositorio en github" >
          <Button
            color="primary"
            variant="contained"
            className={`${oxanium.className} bg-background/50 hover:scale-105 px-2 py-2 bg-gradient-to-l from-[#005639] group to-[#00d68f] transition-colors duration-200 ease-in text-text-primary hover:text-black font-semibold rounded-lg`}
          >
            Ver Repositorio
          </Button>
        </Link>
      </DialogActions>
    </Dialog>
  );
};

export { PortfolioDialog };
