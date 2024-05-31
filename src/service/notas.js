import axios from "axios"


async function postNotas(nota,categoriaId) {
    try {
        const categoria = await axios.post(process.env.REACT_APP_URL_API_SERVER + "/notas/"+categoriaId,nota)
        return categoria.data
    }
    catch (error) {
        return undefined
    }
}

async function putNotas(nota,categoriaId,notaId) {
    try{
        const categoria = await axios.put(process.env.REACT_APP_URL_API_SERVER+`/notas/${categoriaId}/${notaId}`,nota)
        return categoria.data
    }
    catch (error) {
        return undefined
    }
}

export { postNotas, putNotas }