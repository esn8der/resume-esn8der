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
import { BiSolidTrafficBarrier, BiSolidFlagCheckered } from "react-icons/bi";
import { styled } from "@mui/material/styles";

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

// // Estilo para el botón de Cerrar
// const CloseButton = styled(Button)({
//   color: "#fff",
//   backgroundColor: "#e53e3e",
//   fontFamily: oxanium.style.fontFamily,
//   "&:hover": {
//     color: "#000",
//     transform: "scale(1.05)",

//   },
// });

// // Estilo para el botón de Ver Repositorio
// const RepositoryButton = styled(Button)({
//   color: "#fff",
//   "&:hover": {
//     backgroundColor: "#059669",
//     color: "text-black",
//     transform: "scale(1.05)",
//   },
// });

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
      sx={{ fontFamily: oxanium.style.fontFamily }}
    >
      <DialogTitle
        className="font-bold text-3xl text-center border-x-2 border-t-2 border-gray-700 text-text-primary"
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
        <div>
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
      <DialogActions
        sx={{
          bgcolor: "#1f2933",
          gap: "0.5rem",
          borderWidth: "2px",
          borderColor: "#374151",
          borderTopWidth: "0px",
        }}
      >
        <Button
          onClick={onClose}
          sx={{
            fontFamily: oxanium.style.fontFamily,
            color: "#fff",
            transition: "all",
            transitionTimingFunction: "ease-in",
            transitionDuration: "200ms",
            fontWeight: "semibold",
            "&:hover": { transform: "scale(1.05)", color: "#000" },
          }}
        >
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
            className="bg-gradient-to-l from-[#005639] to-[#00d68f]"
            sx={{
              color: "#fff",
              fontFamily: oxanium.style.fontFamily,
              transition: "all",
              transitionTimingFunction: "ease-in",
              transitionDuration: "200ms",
              fontWeight: "semibold",
              borderRadius: "8px",
              p: "0.5rem",
              "&:hover": { transform: "scale(1.05)", color: "#000" },
            }}
          >
            Ver Repositorio
          </Button>
        </Link>
        {/* <CloseButton onClick={onClose}>Cerrar</CloseButton>
        <RepositoryButton >
          Ver Repositorio
        </RepositoryButton> */}
      </DialogActions>
    </Dialog>
  );
};

export { PortfolioDialog };
