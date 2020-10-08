import React, { useState } from 'react'
import { number as yupNumber } from 'yup'

export const Filters = ({ filters, UpdatePlaylist }) => {

    const [formData, setFormData] = useState({})
    const [limitError, setLimitError] = useState()
    const [offsetError, setOffsetError] = useState()
    const [formErrors, setFormErrors] = useState({})

    console.log('filters', filters)
    const getFilterObj = (id) => {
        return filters.find(filter => id === filter.id)
    }

    function getErrorByKey(key) {
        if (!formErrors || Object.keys(formErrors).length === 0) {
            return null
        }
        const error = formErrors[key]
        if (!error) {
            return null
        }
        return error
    }

    function renderError(key) {
        const error = getErrorByKey(key)
        return error && <div className="flex">{error}</div>
    }
    console.log('formData', formData)

    function handleChangeOffset(key, inputValue) {
        const newObj = (inputValue ? { [key]: inputValue } : { [key]: 0 })
        setFormData({ ...formData, ...newObj })
        UpdatePlaylist({ ...formData, ...newObj })

    }

    function handleChangeSelect(key, inputValue) {
        console.log('inputValue', inputValue)

        if (inputValue !== 'nofilter') {

            setFormData({ ...formData, [key]: inputValue })
            UpdatePlaylist({ ...formData, [key]: inputValue })

        } else {

            const aux = delete formData[key]
            setFormData({...aux})
            UpdatePlaylist({...aux})
        }

    }
    async function handleChangeLimit(key, inputValue) {
        const filterObj = getFilterObj(key)
        const newObj = (inputValue ? { [key]: inputValue } : { [key]: filterObj.validation.max })

        setFormErrors({ [key]: '' })
        setFormData({ ...formData, ...newObj })

        const filterSchema = yupNumber()
            .nullable()
            .max(filterObj.validation.max, "Digite um valor entre 1 e 50")
            .min(filterObj.validation.min, 'Digite um valor entre 1 e 50')
            .transform((value, originalValue) => originalValue.trim() === "" ? null : value);

        try {
            await filterSchema.validate(inputValue, { abortEarly: false })
            UpdatePlaylist({ ...formData, ...newObj })

        }
        catch (e) {
            console.log('err', e)
            return setFormErrors({ [key]: e.message })
        }
    }

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 w-full gap-3 ">
            <div className='flex flex-col'>
                <div className={` w-full border-2 ${getErrorByKey('limit') && 'border-red-500'} `}>
                    <input type="number" min="1" max="50" onChange={event => handleChangeLimit('limit', event.target.value)} className={`w-full  p-3 ${getErrorByKey('limit') && 'outline-none'}`} placeholder="Quantidade" />
                </div>
                {renderError('limit')}
            </div>
            <div className="mb-6 w-full ">
                <input type="number" min='0' onChange={event => handleChangeOffset('offset', event.target.value)} className="w-full shadow rounded border-2 p-3" placeholder="Página" />
            </div>

            <div className="mb-6 w-full">

                <select
                    onChange={(event) => handleChangeSelect('locale', event.target.value)}
                    className="shadow w-full bg-white border-2 border-gray-200 text-gray-700 p-3 pr-8 focus:shadow-outline focus:outline-none "
                >
                    <option value={'nofilter'}>Selecionar idioma</option>
                    {getFilterObj('locale').values.map(locale =>
                        <option value={locale.value}>{locale.name}</option>
                    )}
                </select>
            </div>
            <div className="mb-6 w-full">
                <select
                    onChange={(event) => handleChangeSelect('country', event.target.value)}
                    className="shadow w-full bg-white border-2 border-gray-200 text-gray-700 p-3 pr-8 focus:shadow-outline focus:outline-none "
                >
                    <option value={'nofilter'}>Selecionar país</option>
                    {getFilterObj('country').values.map(locale =>
                        <option value={locale.value}>{locale.name}</option>
                    )}
                </select>
            </div>

        </div>
    )
}


export default Filters

