import useSWR from 'swr'
import Loader from './Loader'
import React from 'react'

export const Filters = ({ filters }) => {
    console.log('filter', filters)

    return (
        <>
        <div className="grid flex grid-cols-2 md:grid-cols-5 lg:grid-cols-5 w-full gap-3 ">

            <div className="w-full ">
                <input type="text" className="w-full  rounded border-2 p-3" placeholder="Quantidade" />
            </div>
            <div className="w-full ">
                <input type="text" className="w-full  rounded border-2 p-3" placeholder="Data" />
            </div>

            <div className="w-full ">
                <input type="text" className="w-full  rounded border-2 p-3" placeholder="Página" />
            </div>


            <div className="w-full ">
                <select className=" w-full bg-white border-2 border-gray-200 text-gray-700 p-3 pr-8 focus:shadow-outline focus:outline-none " id="grid-state">
                    <option>Selecionar idioma</option>
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                </select>
            </div>

        </div>

        <div className="grid mt-3 grid-cols-1 w-full">
            <select className="shadow w-full bg-white border-2 border-gray-200 text-gray-700 p-3 pr-8 focus:shadow-outline focus:outline-none " id="grid-state">
                <option>Selecionar país</option>
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
            </select>
        </div>
        </>
    )
}


export default Filters

