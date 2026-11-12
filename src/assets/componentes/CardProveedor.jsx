import { useState } from "react";

export default function CardProveedor({
    id,
    ruc,
    businessName,
    contactName,
    email,
    phone,
    address,
    status,
    eliminar,
    editar
}) {

    const [mensaje, setMensaje] = useState("");

    function editarProveedor() {
        editar({
            id: id,
            ruc: ruc,
            businessName: businessName,
            contactName: contactName,
            email: email,
            phone: phone,
            address: address,
            status: status
        });
    }

    return (
        <article className="supplier-card">

            <div className="supplier-info">

                <h3>{businessName}</h3>
                <p><strong>RUC:</strong> {ruc}</p>
                <p><strong>Contacto:</strong> {contactName}</p>
                <p><strong>Correo:</strong> {email}</p>
                <p><strong>Teléfono:</strong> {phone}</p>
                <p><strong>Dirección:</strong> {address}</p>
                <p><strong>Estado:</strong> {status}</p>
            </div>

            {mensaje}

            <button onClick={() => {
                setMensaje("Eliminando, por favor espere...");
                eliminar(id);
            }}>
                Eliminar
            </button>

            <button onClick={editarProveedor}>
                Editar
            </button>

        </article>
    );
}
