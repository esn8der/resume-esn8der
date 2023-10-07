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
        sx={{ fontFamily: oxanium.style.fontFamily }}
        className="bg-gradient-to-l from-[#005639] group to-[#00d68f] transition-colors duration-200 ease-in text-text-secondary hover:text-text-primary font-semibold rounded-lg px-4 py-3 mt-10"
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
          sx={{ bgcolor: "#1f2933" }}
          className="border-x-2 border-b-2 border-gray-700 space-x-2 "
        >
          <Button
            sx={{ fontFamily: oxanium.style.fontFamily }}
            onClick={handleClose}
            className="hover:text-black hover:scale-105 text-text-primary"
          >
            Cerrar
          </Button>
          <Button
            sx={{ fontFamily: oxanium.style.fontFamily }}
            onClick={handleSubmit}
            className="bg-background/50 hover:scale-105 px-2 py-2 bg-gradient-to-l from-[#005639] group to-[#00d68f] transition-colors duration-200 ease-in text-text-primary hover:text-black font-semibold rounded-lg"
          >
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export { HireMeDialog };
