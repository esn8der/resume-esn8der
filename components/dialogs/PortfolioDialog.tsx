import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Image from "next/image";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Oxanium } from "next/font/google";

const oxanium = Oxanium({ subsets: ["latin"] });

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
}

const PortfolioDialog = ({
  open,
  onClose,
  title,
  img,
  projectStatus,
  additionalInfo,
}: CardDialogProps) => {
  return (
    <Dialog open={open} onClose={onClose} TransitionComponent={Transition} maxWidth={"sm"}>
      <DialogTitle
        className={`${oxanium.className} font-bold text-3xl text-center bg-[#4f4a75]`}
      >
        {title}
      </DialogTitle>
      <DialogContent className="flex flex-col gap-4 bg-[#4f4a75]">
        <Image
          className="self-center shadow-xl shadow-emerald-500"
          src={img}
          alt="Imagen del repositorio"
          width={470}
          height={198}
        />
        <span className={`${oxanium.className} inline px-2 w-fit rounded-full shadow-md shadow-black bg-emerald-500 text-sm text-white self-end`}>
          Estado: {projectStatus}
        </span>
        
        <p className={`${oxanium.className} font-bold text-lg text-[rgba(0,0,0,0.6)]`}>
          {additionalInfo}
        </p>
      </DialogContent>
      <DialogActions className="bg-[#4f4a75]">
        <Button onClick={onClose} color="primary" variant="outlined" className={`${oxanium.className} bg-background/50 text-black"`} >
          Cerrar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export { PortfolioDialog };
