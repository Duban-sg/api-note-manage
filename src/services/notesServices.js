import settings from "../utils/settings";

async function getCategory() {
    try {
        console.log('url'+settings.REACT_APP_URL_API_SERVER )
        const response = await fetch(settings.REACT_APP_URL_API_SERVER + 'categorias');
        if (!response.ok) {
            throw new Error('No se pudo obtener las notas. Código de estado: ' + response.status);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al obtener las notas:', error);
        throw error; // Propaga el error para que el consumidor pueda manejarlo
    }
}

async function postCategory({CategoriasIn}){
    console.log(JSON.stringify({CategoriasIn }))
    try{
        
        const response = await fetch(settings.REACT_APP_URL_API_SERVER+'categorias', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(CategoriasIn)
            
          });
          if (!response.ok) {
            throw new Error('Error al crear una nueva nota');
          }

        return(response);
    }catch(error){
        return(error);
    }    
}

async function putCategory(editedCategory){
    try {
        console.log(editedCategory._id);
        const response = await fetch(settings.REACT_APP_URL_API_SERVER+`notas/${editedCategory._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedCategory)
        });

        if (!response.ok) {
            throw new Error('Error al ACTUALIZAR la nota');
          }
        return(response);
        
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function deleteNote(noteId) {
    try {
        const response = await fetch(settings.REACT_APP_URL_API_SERVER+`notas/${noteId}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error('Error al eliminar la nota');
        }

        return true; // Indica que la nota fue eliminada exitosamente
    } catch (error) {
        console.error('Error al eliminar la nota:', error);
        return false; // Indica que ocurrió un error al eliminar la nota
    }
}

async function postNotes(idCategoria,nota){
    console.log(JSON.stringify(nota))
    try{
        console.log('url'+settings.REACT_APP_URL_API_SERVER+`notas/${idCategoria}` )
        const response = await fetch(settings.REACT_APP_URL_API_SERVER+`notas/${idCategoria}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(nota)
            
          });
          if (!response.ok) {
            throw new Error('Error al crear una nueva nota');
          }

        return(response);
    }catch(error){
        return(error);
    }    
}
export { getCategory, postCategory, putCategory,postNotes};