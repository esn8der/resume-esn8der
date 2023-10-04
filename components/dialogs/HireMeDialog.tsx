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
        className={`${oxanium.className} bg-gradient-to-l from-[#005639] group to-[#00d68f] transition-colors duration-200 ease-in text-[#353333] hover:text-text-primary font-semibold rounded-lg px-8 py-3 mt-10`}
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
          className={`${oxanium.className} font-bold text-3xl text-center`}
        >
          Formulario de Contacto
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            className={`${oxanium.className} font-semibold text-lg text-center`}
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
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            className={`font-semibold ${oxanium.className} hover:text-black hover:scale-105 `}
          >
            Cerrar
          </Button>
          <Button
            onClick={handleSubmit}
            className={`font-semibold ${oxanium.className} hover:scale-105 px-4 py-3 bg-gradient-to-l from-[#005639] group to-[#00d68f] transition-colors duration-200 ease-in text-[#353333] hover:text-text-primary font-semibold rounded-lg`}
          >
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export { HireMeDialog };
