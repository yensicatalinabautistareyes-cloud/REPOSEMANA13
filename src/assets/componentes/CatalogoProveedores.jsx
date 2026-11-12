import { useEffect, useState } from "react";

import { obtenerProveedores, guardarProveedor, borrarProveedor, actualizarProveedor } from "../../services/ProveedorServices";

import CardProveedor from "./CardProveedor";
import FormularioProveedor from "./FormularioProveedor";

export default function CatalogoProveedores() {

    const [proveedores, setProveedores] = useState([]);

    const [proveedorEditar, setProveedorEditar] = useState({
        id: 0
    });

    async function listar() {
        const resultado = await obtenerProveedores();
        setProveedores(resultado.data);
    }

    async function agregarProveedor(proveedor) {

        try {

            if (proveedor.id > 0) {

                // MÉTODO PUT
                await actualizarProveedor(proveedor.id, proveedor);

            } else {

                // MÉTODO POST
                await guardarProveedor(proveedor);

            }

            // LIMPIAR FORMULARIO
            setProveedorEditar({
                id: 0,
                ruc: "",
                businessName: "",
                contactName: "",
                email: "",
                phone: "",
                address: "",
                status: "Activo"
            });

            // ACTUALIZAR LISTADO
            await listar();

        } catch (error) {
            console.error("Error al guardar proveedor:", error);
            alert("No se pudo guardar el proveedor");
        }
    }

    async function eliminarProveedor(id) {
        await borrarProveedor(id);
        listar();
    }

    function editarProveedor(proveedorEditar) {
        setProveedorEditar(proveedorEditar);
    }

    useEffect(() => {
        listar();
    }, []);

    return (
        <>
            <main className="proveedores-container">
                <section className="formulario-seccion">
                    <FormularioProveedor
                        proveedorEditar={proveedorEditar}
                        guardar={agregarProveedor}
                    />
                </section>

                <section className="supplier-list">

                    {proveedores.map((e) => (
                        <CardProveedor
                            key={e.id}
                            id={e.id}
                            ruc={e.ruc}
                            businessName={e.businessName}
                            contactName={e.contactName}
                            email={e.email}
                            phone={e.phone}
                            address={e.address}
                            status={e.status}
                            eliminar={eliminarProveedor}
                            editar={editarProveedor}
                        />
                    ))}

                </section>
            </main >
        </>
    );
}
