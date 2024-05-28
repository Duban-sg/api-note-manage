import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Tooltip,
  Chip,
  ListItemSuffix,
  // Chip,
} from "@material-tailwind/react";
import { SkeletonNotesLoading } from "./SkeletonNotesLoading";
import { DialogAddNota } from "./DialogAddNota";
import { useState } from "react";
import "../style/CardNotasStyle.css";

function CardNotas({ categorySelected, onSubmit = () => { } }) {

  const [notaSelected, setNotaSlected] = useState({})

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      {categorySelected ? <><div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          {categorySelected.name}
        </Typography>
      </div>
        <List>
          <DialogAddNota onSubmit={onSubmit}></DialogAddNota>
          {categorySelected?.notes.map((nota) => (
            <ListItem selected={notaSelected._id === nota._id} onClick={() => setNotaSlected(nota)}>
              <div>
                <Typography variant="inherit" className="text-nowrap" color="blue-gray">
                  {nota.title}
                </Typography>
                <Typography noWrap variant="small" color="gray" className="font-normal">
                  {nota.content === '' ? "Sin contenido" : nota.content}
                </Typography>
              </div>
              <ListItemSuffix>
                <Tooltip
                  content={
                    <div>
                      <Typography color="white" className="font-medium">
                        Fecha de creacion: {nota.fecha_creacion}
                      </Typography>
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal opacity-80"
                      >
                        Ultima fecha modificacion: {nota.fecha_modificacion ? nota.fecha_modificacion : nota.fecha_creacion}
                      </Typography>
                    </div>
                  }
                >
                  <Chip value={nota.fecha_modificacion ? nota.fecha_modificacion : nota.fecha_creacion}
                    size="sm"
                    variant="ghost"
                    color="blue-gray"
                    className="rounded-full" />
                </Tooltip>

              </ListItemSuffix>

            </ListItem>))
          }
        </List></> : <SkeletonNotesLoading />}
    </Card>
  );
}

export default CardNotas;