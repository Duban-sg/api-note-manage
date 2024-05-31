import React from 'react';
import ReactQuill, { Quill  } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../style/CustomEditor.css'; 
import ImageResize from 'quill-image-resize-module-react';

window.Quill = Quill
Quill.register('modules/imageResize', ImageResize);


const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' }
    ],
    ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  },
  imageResize: {
    parchment: Quill.import('parchment'),
    modules: ['Resize', 'DisplaySize']
  }
};

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video'
];

const CustomEditor = ({ editorHtml='', setEditorHtml=()=>{} }) => {

  return (
    <div className="custom-editor col-span-8 row-span-12 shadow-blue-gray-900/5">
      <ReactQuill
        value={editorHtml}
        onChange={setEditorHtml}
        modules={modules}
        formats={formats}
        style={{ height: '300px' }} // Ajuste de altura del editor
      />
    </div>
  );
};

export default CustomEditor;