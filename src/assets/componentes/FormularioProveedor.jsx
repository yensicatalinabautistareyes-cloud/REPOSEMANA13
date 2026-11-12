import { useEffect, useState } from "react";

export default function FormularioProveedor({ proveedorEditar, guardar }) {

    const [formulario, setFormulario] = useState({
        id: 0,
        ruc: "",
        businessName: "",
        contactName: "",
        email: "",
        phone: "",
        address: "",
        status: "Activo"
    });

    function manejarcambio(e) {
        const { name, value } = e.target;

        setFormulario({
            ...formulario,
            [name]: value
        });
    }

    function agregar(e) {
        e.preventDefault();

        console.log(formulario);

        guardar(formulario);
    }

    useEffect(() => {
        setFormulario(proveedorEditar);
    }, [proveedorEditar]);

    return (
        <>
            <form onSubmit={agregar}>
                <label htmlFor="ruc">RUC</label>
                <input
                    type="text"
                    id="ruc"
                    name="ruc"
                    value={formulario.ruc}
                    onChange={manejarcambio}
                />
                <br />
                <label htmlFor="businessName">Razón Social</label>
                <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formulario.businessName}
                    onChange={manejarcambio}
                />
                <br />
                <label htmlFor="contactName">Nombre del Contacto</label>
                <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formulario.contactName}
                    onChange={manejarcambio}
                />
                <br />
                <label htmlFor="email">Correo Electrónico</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formulario.email}
                    onChange={manejarcambio}
                />
                <br />
                <label htmlFor="phone">Teléfono</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formulario.phone}
                    onChange={manejarcambio}
                />
                <br />
                <label htmlFor="address">Dirección</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formulario.address}
                    onChange={manejarcambio}
                />
                <br />
                <label htmlFor="status">Estado</label>
                <select
                    id="status"
                    name="status"
                    value={formulario.status}
                    onChange={manejarcambio}
                >
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                </select>
                <br />

                <button type="submit">
                    {proveedorEditar.id > 0 ? "Editar" : "Guardar"}
                </button>

            </form>
        </>
    );
}
