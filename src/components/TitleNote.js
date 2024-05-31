import { Tooltip, Typography } from '@material-tailwind/react';
import React from 'react';
import 'react-quill/dist/quill.snow.css';

function TitleNote({ title=""}) {
    return <>{
        title.length > 18? <Tooltip
            content={
                <Typography className="truncate col-span-2" variant="inherit" color="white">
                    {title}
                </Typography>
            }
        >
            <span className="col-span-2 flex-1 pr-3">
                <Typography className="truncate col-span-2" variant="inherit" color="blue-gray">
                    {title}
                </Typography>
            </span>
        </Tooltip> : <Typography className="col-span-2" variant="inherit" color="blue-gray">
            {title}
        </Typography>
    }</>;
}

export default TitleNote;
