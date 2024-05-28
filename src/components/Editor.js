import { Card } from '@material-tailwind/react';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Editor() {
  const [value, setValue] = useState('');

  return <Card className='h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 grid grid-cols-subgrid col-span-4'>
    <div class="col-span-4 p-4">
      <ReactQuill
        className='h-[calc(100vh-8rem)] w-full' 
        theme="snow" value={value} onChange={setValue} />
    </div>

  </Card>;
}

export default Editor;