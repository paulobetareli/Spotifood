import useSWR from 'swr'
import Loader from './Loader'
import React from 'react'

export const Filters = ({ filters }) => {

    console.log('filters', filters)

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 w-full gap-3 ">

            {/* {filters.map(filter => {
                console.log('filter', filter)
            })} */}
            <div className="mb-6 w-full ">
                <input type="text" className="w-full  shadow rounded border-2 p-3" placeholder="Quantidade" />
            </div>

            <div className="mb-6 w-full ">
                <input type="text" className="w-full shadow rounded border-2 p-3" placeholder="Página" />
            </div>

            <div className="mb-6 w-full">
                <select className="shadow w-full bg-white border-2 border-gray-200 text-gray-700 p-3 pr-8 focus:shadow-outline focus:outline-none " id="grid-state">
                    <option>Selecionar idioma</option>
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                </select>
            </div>
            <div className="mb-6 w-full">
                <select className="shadow w-full bg-white border-2 border-gray-200 text-gray-700 p-3 pr-8 focus:shadow-outline focus:outline-none " id="grid-state">
                    <option>Selecionar país</option>
                    <option>New Mexico</option>
                    <option>Missouri</option>
                    <option>Texas</option>
                </select>
            </div>

        </div>
    )
}


export default Filters

