import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Slide,
} from "@mui/material";
import React, { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { enqueueSnackbar } from "notistack";
import { TransitionProps } from "@mui/material/transitions";

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
    enqueueSnackbar("Mensaje Enviado!", { variant: "success" });
  };

  return (
    <div>
      <Button
        sx={{
          mt: "2.5rem",
        }}
        className="bg-gradient-to-b from-[#005639] group to-[#00d68f]"
        onClick={handleOpen}
      >
        Contrátame
        <BsArrowRightShort className="arrows ml-1 text-2xl" />
      </Button>
      <Dialog
        open={isDialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        maxWidth={"xs"}
      >
        <DialogTitle>Formulario de Contacto</DialogTitle>
        <DialogContent className="flex flex-col gap-4">
          <DialogContentText>
            Por favor, completa el formulario de contacto.
          </DialogContentText>
          <form>
            <TextField
              fullWidth
              label="Nombre"
              name="name"
              variant="filled"
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              variant="filled"
              margin="normal"
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
              required
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
          <Button
            onClick={handleSubmit}
            className="bg-gradient-to-l from-[#005639] to-[#00d68f]"
          >
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { HireMeDialog };
