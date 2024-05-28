import axios from "axios"


async function getCategories() {
    try {
        const categorias = await axios.get(process.env.REACT_APP_URL_API_SERVER + "/categorias/")
        return categorias.data
    }
    catch (error) {
        return []
    }
}

async function postNotas(nota,categoriaId) {
    try {
        const categorias = await axios.post(process.env.REACT_APP_URL_API_SERVER + "/notas/"+categoriaId,nota)
        return categorias.data
    }
    catch (error) {
        return undefined
    }
}

export { getCategories, postNotas}