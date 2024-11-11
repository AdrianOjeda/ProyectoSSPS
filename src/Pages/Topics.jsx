import React, { useState } from 'react';
import Navbar from '../Components/NavBar';

function Topics() {

    const [temas, setTemas] = useState([
        {
            titulo: "Introducción a la Ciberseguridad",
            descripcion: "Breve descripción sobre la importancia de la ciberseguridad.",
            contenido: "La ciberseguridad es el conjunto de prácticas, tecnologías y procesos diseñados para proteger los sistemas informáticos, las redes, y los datos de posibles ciberataques.",
            fecha: "2024-11-10",
            tipo: "General"
        },
        {
            titulo: "Amenazas comunes en la red",
            descripcion: "Descripción de las amenazas más frecuentes en internet.",
            contenido: "Existen diferentes tipos de amenazas en línea como virus, phishing, ransomware, entre otros, que pueden comprometer la seguridad de la información.",
            fecha: "2024-11-09",
            tipo: "Amenazas"
        }
    ]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-blue-600 flex flex-col">
            {/* Navbar */}
            <Navbar/>

            {/* Contenido Principal */}
            <main className="flex-1 w-full flex flex-col items-center text-white px-6 py-12">
                <h2 className="text-4xl font-bold text-gray-200 mb-12">Temas de Interés en Ciberseguridad</h2>

                {/* Listado de temas */}
                <div className="w-full max-w-4xl grid grid-cols-1 gap-8">
                    {temas.length === 0 ? (
                        <p className="text-gray-300 text-center">No hay temas disponibles aún.</p>
                    ) : (
                        temas.map((tema, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
                            >
                                <h3 className="text-2xl font-semibold text-indigo-700 mb-4">{tema.titulo}</h3>
                                <p className="text-md text-gray-600 mb-4">{tema.descripcion}</p>
                                <p className="text-sm text-gray-500 mb-6"><strong>Fecha:</strong> {tema.fecha}</p>
                                <p className="text-sm text-gray-500 mb-6"><strong>Tipo de tema:</strong> {tema.tipo}</p>
                                <p className="text-md text-gray-700">{tema.contenido}</p>
                            </div>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
}

export default Topics;