import { Card } from '@material-tailwind/react';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CardWelcome({ numColSpan}) {
  const [value, setValue] = useState('');

  const getCalssName = ()=>{
    let classNames = "h-[calc(100vh-2rem)] p-4 shadow-xl shadow-blue-gray-900/5 grid grid-cols-subgrid";
    if (numColSpan ) classNames += " col-span-"+numColSpan;
    return classNames;
  }
  return <Card className={getCalssName()}>
    <div class="col-span-4 p-4">
      <ReactQuill
        className='h-[calc(100vh-8rem)] w-full' 
        theme="snow" value={value} onChange={setValue} />
    </div>

  </Card>;
}

export default CardWelcome;