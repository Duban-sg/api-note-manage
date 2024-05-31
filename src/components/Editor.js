import { Button, Card, Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import LastModificateDate from './LastModificateDate';
import CustomEditor from './CustomEditor';

function Editor({ nota, onSaveChange = () => { } }) {
  const [editorHtml, setEditorHtml] = useState('')


  const handleSaveChange = () => {
    let _nota = {...nota, content: editorHtml };
    onSaveChange(_nota);
  }

  const handleSetEditor = (html) => {
    
    setEditorHtml(html); 
  }


  useEffect(() => {
    setEditorHtml(nota.content);
  }, [nota])

  return <div className='h-[calc(100vh-2rem)] w-full max-w-[20rem] gap-2  grid grid-cols-8 grid-cols-subgrid col-span-4'>
    <Card className="row-span-1 col-span-4 p-4 flex flex-row justify-between">
      <div className="row-span-1 px-4 flex flex-col justify-evenly">
        <div className="grid grid-cols-12">
          <LastModificateDate fechaCreacion={nota?.fecha_creacion} fechaModificacion={nota?.fecha_modificacion} />
        </div>
        <Typography className="" variant="h5" color="blue-gray">
          {nota?.title}
        </Typography>
      </div>
      <div className="px-8 flex flex-col justify-center">
        <Button onClick={handleSaveChange} >Guardar cambios</Button>
      </div>

    </Card>

    <CustomEditor editorHtml={editorHtml} setEditorHtml={handleSetEditor} />

  </div>;
}

export default Editor;