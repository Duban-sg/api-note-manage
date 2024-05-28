import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Button,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  TagIcon,
  DeviceTabletIcon,
  PresentationChartLineIcon,
  DocumentChartBarIcon,
  DocumentDuplicateIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { DialogAddCategoria } from "./DialogAddCategoria";

function CardCategorias({ name,itemSelected=null, categorias = [], onSubmit = () => {}, onSelectCategory=()=>{} }) {
  const icons = [
    <PresentationChartBarIcon className="h-5 w-5" />,
    <TagIcon className="h-5 w-5" />,
    <DeviceTabletIcon className="h-5 w-5" />,

    <PresentationChartLineIcon className="h-5 w-5" />,
    <DocumentChartBarIcon className="h-5 w-5" />,
    <DocumentDuplicateIcon className="h-5 w-5" />,
  ]

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
        <Typography variant="h5" color="blue-gray">
          {name}
        </Typography>
      </div>
      <List>
        <DialogAddCategoria onSubmit={onSubmit} />
        {
          categorias.map((categoria, index) => {
            return (
              <ListItem selected={itemSelected===categoria._id} key={index} onClick={()=>onSelectCategory(categoria)}>
                <ListItemPrefix>
                  {icons[categoria.indexIcon]}
                </ListItemPrefix>
                {categoria.name}
                <ListItemSuffix>
                  <Chip value={categoria.notes.length} size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                </ListItemSuffix>
              </ListItem>
            );
          })
        }
      </List>
      <Button variant="text" className="mt-auto flex items-center gap-3">
        <PowerIcon className="h-5 w-5" />
        Log Out
      </Button>
    </Card >
  );
}

export default CardCategorias;