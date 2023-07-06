import { Link } from "react-router-dom"

import Button from "../components/Button"

function User() {


    const records = [
        {
            name: "Emily Doe",
            folio: 1,
            date: "06/12/2023"
        },
        {
            name: "Anna Doe",
            folio: 2,
            date: "06/12/2023"
        },
        {
            name: "Rose Doe",
            folio: 3,
            date: "06/12/2023"
        },
        {
            name: "Patrice Doe",
            folio: 4,
            date: "06/12/2023"
        },
        {
            name: "Julia Doe",
            folio: 5,
            date: "06/12/2023"
        },
        {
            name: "Mia Doe",
            folio: 6,
            date: "06/12/2023"
        },
        {
            name: "Rachel Doe",
            folio: 10,
            date: "06/12/2023"
        },
        {
            name: "Anna Doe",
            folio: 12,
            date: "06/12/2023"
        },
        {
            name: "Sylvia Doe",
            folio: 11,
            date: "06/12/2023"
        }
    ]

  return (
    <>
        <div className="border-b border-solid border-gray-400 py-6">
            <section className="container mx-auto flex">
                <article className="flex-1">
                    <h4 className="text-xl">¡Buen Día!</h4>
                    <h2 className="text-4xl">Cristina López</h2>
                </article>
                <article className="flex-1">
                    <button className="w-full text-xl bg-gray-300 py-2 border border-solid border-gray-600">Crear nuevo expediente</button>
                </article>
               
            </section>
            <div>
               
            </div>
        </div>
        <div className="container mx-auto mt-8">
            <article className="flex justify-between">
                <span>Expedientes recientes</span>
                <button>Buscar</button>
            </article>
            <div className="grid grid-cols-3 gap-3 my-10">
            {records.map(record => {
                return(
                    <div className="bg-gray-300 h-[150px] flex flex-col justify-between p-2 border border-solid border-gray-600 items-end">
                        <span>Fecha: {record.date}</span>
                        <article class="flex flex-col mr-auto">
                            <span>Folio: {record.folio}</span>
                            <span>Nombre: {record.name}</span>
                        </article>
                    </div>
                )
            })}
            </div>
            
            
        </div>
    </>
  )
}

export default User