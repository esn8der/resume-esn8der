import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import TextField from "@mui/material/TextField";
import { BsArrowRightShort } from "react-icons/bs";
import DialogContentText from "@mui/material/DialogContentText";
import { Oxanium } from "next/font/google";
import {enqueueSnackbar } from "notistack";

const oxanium = Oxanium({ subsets: ["latin"] });

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const HireMeDialog = () => {

  const [isDialogOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    handleClose();
    enqueueSnackbar('Mensaje Enviado!', { variant: 'success' })
  };

  return (
    <div>
      <Button
        sx={{
          color: "#C4C4FF",
          fontFamily: oxanium.style.fontFamily,
          transition: "all",
          transitionTimingFunction: "ease-in",
          transitionDuration: "200ms",
          fontWeight: "semibold",
          borderRadius: "8px",
          px: "1rem",
          py: "0.75rem",
          mt: "2.5rem",
          "&:hover": { transform: "scale(1.05)", color: "#fff" },
        }}
        className="bg-gradient-to-l from-[#005639] group to-[#00d68f]"
        onClick={handleOpen}
      >
        Contrátame
        <BsArrowRightShort className="inline-block ml-1 text-2xl group-hover:translate-x-1 transition-transform duration-300 ease-in" />
      </Button>
      <Dialog
        open={isDialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth={"xs"}
      >
        <DialogTitle
          sx={{
            color: "#fff",
            bgcolor: "#1f2933",
            fontFamily: oxanium.style.fontFamily,
            fontSize: "1.875rem",
            lineHeight: "2.25rem",
            fontWeight: "bold",
            borderWidth: "2px",
            borderColor: "#374151",
            borderBottomWidth: "0px",
            textAlign: "center",
          }}
        >
          Formulario de Contacto
        </DialogTitle>
        <DialogContent
          sx={{
            bgcolor: "#1f2933",
            borderWidth: "2px",
            borderColor: "#374151",
            borderTopWidth: "0px",
            borderBottomWidth: "0px",
          }}
          className="flex flex-col gap-4 "
        >
          <DialogContentText
            sx={{
              fontFamily: oxanium.style.fontFamily,
              textAlign: "center",
              color: "#C4C4FF",
            }}
          >
            Por favor, completa el formulario de contacto.
          </DialogContentText>
          <form >
            <TextField
              fullWidth
              label="Nombre"
              name="name"
              variant="filled"
              margin="normal"
              required
              sx={{ backgroundColor: "#283542" }}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              variant="filled"
              margin="normal"
              required
              sx={{ backgroundColor: "#283542" }}
            />
            <TextField
              fullWidth
              label="Mensaje"
              name="message"
              multiline
              rows={4}
              variant="filled"
              margin="normal"
              required
              sx={{ backgroundColor: "#283542" }}
            />
          </form>
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
            sx={{
              fontFamily: oxanium.style.fontFamily,
              color: "#fff",
              transition: "all",
              transitionTimingFunction: "ease-in",
              transitionDuration: "200ms",
              fontWeight: "semibold",
              "&:hover": { transform: "scale(1.05)", color: "#000" },
            }}
            onClick={handleClose}
          >
            Cerrar
          </Button>
          <Button
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
            onClick={handleSubmit}
            className="bg-gradient-to-l from-[#005639] to-[#00d68f]"
          >
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export { HireMeDialog };
