import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { Oxanium } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSolidFlagCheckered, BiSolidTrafficBarrier } from "react-icons/bi";

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

interface PortfolioDialogProps {
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
}: PortfolioDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      maxWidth={"xs"}
      fullWidth={true}
      sx={{ fontFamily: oxanium.style.fontFamily }}
    >
      <DialogTitle className="font-bold text-3xl text-center border-x-2 border-t-2 border-gray-700 text-text-primary">
        {title}
      </DialogTitle>
      <DialogContent className="flex flex-col gap-4 border-x-2 border-gray-700">
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
                  className={`${
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
          <h3 className=" text-xl text-text-primary">Descripción</h3>
          <p className=" text-text-secondary ">{additionalInfo}</p>
        </div>
        <div className="space-y-2">
          <h3 className=" text-xl text-text-primary">Estado</h3>
          <span
            className={`${
              projectStatus == "Terminado" ? "bg-emerald-700" : "bg-orange-700"
            } flex items-center gap-2 px-2 w-fit rounded-full shadow-md shadow-black text-sm text-text-primary self-end `}
          >
            {projectStatus == "Terminado" ? (
              <BiSolidFlagCheckered className="text-black" />
            ) : (
              <BiSolidTrafficBarrier className="text-black" />
            )}
            {projectStatus}
          </span>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={{ p: "0.5rem" }}>
          Cerrar
        </Button>
        <Link
          href={link}
          target="_blank"
          arial-aria-label="Enlace al repositorio en github"
        >
          <Button
            color="primary"
            variant="contained"
            className="bg-gradient-to-b from-gradient-primary to-[#00d68f]"
            sx={{ p: "0.5rem" }}
          >
            Ver Repositorio
          </Button>
        </Link>
      </DialogActions>
    </Dialog>
  );
};

export { PortfolioDialog };
