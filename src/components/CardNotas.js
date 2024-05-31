import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemSuffix,
  // Chip,
} from "@material-tailwind/react";
import { DialogAddNota } from "./DialogAddNota";
import TitleNote from "./TitleNote";
import LastModificateDate from "./LastModificateDate";
import "../style/CardNotasStyle.css";

function CardNotas({ categorySelected, notaSelected, onSubmit = () => { }, onSelectNota = () => { } }) {

  const etiquetas = ["h1", "h2", "p", "span", "strong", "em", "u", "blockquote", "s", "ol", "li", "ul", "a", "br", "iframe", "img"]

  const getContent = (content = "") => {
    let _content = content.slice(0, 60)
    _content = _content.split("")
    let isOpen = false;
    let close = false;
    _content = _content.filter((item) => {
      if (item === "<") isOpen = true;
      if (item === ">") close = true;
      if (!isOpen && !close) {
        if (item === "br") item = " "
        return item;
      }
      if (close) {
        isOpen = false;
        close = false;
      }
    }).join("")
    
    return _content;
  }

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          {categorySelected.name}
        </Typography>
      </div>
      <List>
        <DialogAddNota onSubmit={onSubmit}></DialogAddNota>
        {categorySelected?.notes.map((nota) => (
          <ListItem selected={notaSelected?._id === nota._id} onClick={() => onSelectNota(nota)}>
            <div className="grid grid-cols-2 w-full">
              <TitleNote title={nota.title} />
              <Typography variant="small" color="gray" className="truncate font-normal col-span-2">
                {nota.content === '' ? "Sin contenido" : getContent(nota.content)}
              </Typography>
            </div>
            <ListItemSuffix>
              <LastModificateDate fechaCreacion={nota.fecha_creacion} fechaModificacion={nota.fecha_modificacion} />
            </ListItemSuffix>

          </ListItem>))
        }
      </List>
    </Card>
  );
}

export default CardNotas;