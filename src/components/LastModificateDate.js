import { Chip, Tooltip, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';

function LastModificateDate({ fechaCreacion, fechaModificacion}) {
    return <Tooltip
        content={
            <div>
                <Typography color="white" className="font-medium">
                    Fecha de creacion: {fechaCreacion}
                </Typography>
                <Typography
                    variant="small"
                    color="white"
                    className="font-normal opacity-80"
                >
                    Ultima fecha modificacion: {fechaModificacion ? fechaModificacion : fechaCreacion}
                </Typography>
            </div>
        }
    >
        <Chip value={fechaModificacion ? fechaModificacion : fechaCreacion}
            size="sm"
            variant="ghost"
            color="blue-gray"
            className="rounded-full flex justify-center" />
    </Tooltip>;
}

export default LastModificateDate;
