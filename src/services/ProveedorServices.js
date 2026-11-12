
const URL_API = "http://localhost:3000/api/suppliers";

export async function obtenerProveedores() {
    const response = await fetch(URL_API);

    if (!response.ok) {
        throw new Error("Error al cargar la data");
    }

    return await response.json();
}

export async function guardarProveedor(proveedor) {
    const respuesta = await fetch(URL_API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(proveedor)
    });

    if (!respuesta.ok) {
        throw new Error("Error al registrar proveedor");
    }

    return await respuesta.json();
}

export async function borrarProveedor(id) {
    const respuesta = await fetch(`${URL_API}/${id}`, {
        method: "DELETE"
    });

    if (!respuesta.ok) {
        throw new Error("Error al eliminar proveedor");
    }

    return await respuesta.json();
}

export async function actualizarProveedor(id, proveedor) {
    const respuesta = await fetch(`${URL_API}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(proveedor)
    });

    if (!respuesta.ok) {
        throw new Error("Error al actualizar proveedor");
    }

    return await respuesta.json();
}
