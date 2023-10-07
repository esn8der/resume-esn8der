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

const oxanium = Oxanium({ subsets: ["latin"] });

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function HireMeDialog() {
  const [isDialogOpen, setOpen] = useState(false);

  // Función para abrir el diálogo
  const handleOpen = () => {
    setOpen(true);
  };

  // Función para cerrar el diálogo
  const handleClose = () => {
    setOpen(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario o realizar otras acciones
    console.log(formData);
    // Cerrar el modal después de enviar el formulario
    handleClose();
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
          sx={{ bgcolor: "#1f2933", fontFamily: oxanium.style.fontFamily }}
          className="font-bold text-3xl text-center border-x-2 border-t-2 border-gray-700 text-text-primary"
        >
          Formulario de Contacto
        </DialogTitle>
        <DialogContent
          sx={{ bgcolor: "#1f2933" }}
          className="flex flex-col gap-4 border-x-2 border-gray-700 "
        >
          <DialogContentText
            className="text-md text-center text-text-secondary"
            sx={{ fontFamily: oxanium.style.fontFamily }}
          >
            Por favor, completa el formulario de contacto.
          </DialogContentText>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Nombre"
              name="name"
              variant="filled"
              margin="normal"
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.message}
              onChange={handleChange}
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
