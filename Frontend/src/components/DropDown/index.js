import React from "react";
import './styles.css'

/*
Para reutilizar o componente bastar passar o array de elementos nas props

ex: const cursos = ["Aeroespacial", "Automotiva", "Eletrônica", "Energia", "Software"]
    <DropDown options={cursos} defaultOption='Selecione seu curso'></DropDown>
*/

function DropDown (props) {
    const { options, defaultOption} = props

    return(
        <div className="eng-dropdown">
            <select onChange={(e) => props.onChange(e.target.value)}>
                 <option disabled value="" selected>
                    {defaultOption}
                </option>
                {
                    options.map((option, index) => (
                        <option key={index}>
                            {option}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default DropDown; 