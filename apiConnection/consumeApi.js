const url = "http://localhost:5000/api/categorias";

export const obtainCategories = async () => {
    try {
        const resultado = await fetch(url); //1 then
        const categorias = await resultado.json();// 2 then
        // console.log(categorias);
        
        return categorias;
    } catch (error) {
        console.error("error");
    }
}