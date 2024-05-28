import React from "react";
import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
    ListItem,
    ListItemSuffix,
} from "@material-tailwind/react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

export function DialogAddCategoria({ onSubmit = () => { } }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
    const [categoria, setCategoria] = React.useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name: categoria, autor: 1, notes: [] });
        handleOpen()
    }

    return (
        <>
            <ListItem id="categorias" onClick={handleOpen}>
                Categorias
                <ListItemSuffix>
                    <PlusCircleIcon className="h-5 w-5" />
                </ListItemSuffix>

            </ListItem>
            <Dialog
                size="xs"
                open={open}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardBody className="flex flex-col gap-4">
                        <Typography variant="h4" color="blue-gray">
                            Agregar categoria
                        </Typography>
                        <Typography
                            className="mb-3 font-normal"
                            variant="paragraph"
                            color="gray"
                        >
                            Ingrese la informacion de la categorias
                        </Typography>
                        <Typography className="-mb-2" variant="h6">
                            Nombre de la categoria
                        </Typography>
                        <Input label="Nombre" size="lg" onChange={(e) => setCategoria(e.target.value)} />

                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" onClick={handleSubmit} fullWidth>
                            Agregar categoria
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
}