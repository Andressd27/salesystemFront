import { obtainCategories } from "./../apiConnection/consumeApi.js";

document.addEventListener("DOMContentLoaded", ()=>{
    getCategories();
});

async function getCategories() {
    const categoriasObtenidas = await obtainCategories();
    const container = document.querySelector('tbody');

    categoriasObtenidas.forEach((categoria) => {
        const { CategoriaID, CategoriaNombre, Descripcion, Imagen } = categoria;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${CategoriaID}
            </td>
            <td>
                ${CategoriaNombre}
            </td>
            <td>
                ${Descripcion}
            </td>
            <td>
                <img src="${Imagen}" width="100px" class="cuenta">
            </td>
            <td>
            <button class="btn color3" >Details</button>
            </td>
            <td>
            <button class="btn color2" >Edit</button>
            </td>
            <td>
            <button class="btn color5" >Delete</button>
            </td>
        `;
        container.appendChild(row);
    });
}