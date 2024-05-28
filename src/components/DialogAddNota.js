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

export function DialogAddNota({ onSubmit = () => { } }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen((cur) => !cur);
    const [nota, setNota] = React.useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title: nota, autor: 1, content: "" });
        handleOpen()
    }

    return (
        <>
            <ListItem onClick={handleOpen} id="notas">
                Notas
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
                            Agregar nota
                        </Typography>
                        <Typography
                            className="mb-3 font-normal"
                            variant="paragraph"
                            color="gray"
                        >
                            Ingrese un titulo para identificar la nota
                        </Typography>
                        <Typography className="-mb-2" variant="h6">
                            Titulo de la nota
                        </Typography>
                        <Input label="Titulo" size="lg" onChange={(e) => setNota(e.target.value)} />

                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" onClick={handleSubmit} fullWidth>
                            Agregar nota
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
}