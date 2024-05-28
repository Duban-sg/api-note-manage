import { Cog6ToothIcon, InboxIcon, PowerIcon, PresentationChartBarIcon, ShoppingBagIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Chip, List, ListItem, ListItemPrefix, ListItemSuffix, Typography } from "@material-tailwind/react";

export function SkeletonNotesLoading() {
  return (
    <div className="max-w-full animate-pulse mb-2 p-4">
      <div className="mb-2 p-4">
        <Typography
          as="div"
          variant="h5"
          className="mb-4 h-3 w-56 rounded-full bg-gray-300"
        >
          &nbsp;
        </Typography>
      </div>
      <List>
        <ListItem disabled={true}>
          <Typography
            as="div"
            variant="paragraph"
            className="mb-2 h-2 w-72 rounded-full bg-gray-300"
          >
            &nbsp;
          </Typography>
        </ListItem>
        <ListItem disabled={true}>
          <Typography
            as="div"
            variant="paragraph"
            className="mb-2 h-2 w-72 rounded-full bg-gray-300"
          >
            &nbsp;
          </Typography>
        </ListItem>
        <ListItem disabled={true}>
          <Typography
            as="div"
            variant="paragraph"
            className="mb-2 h-2 w-72 rounded-full bg-gray-300"
          >
            &nbsp;
          </Typography>
        </ListItem>
      </List>
    </div>
  );
}