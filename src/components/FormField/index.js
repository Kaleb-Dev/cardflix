import React, { useState } from 'react'

function FormField({ value, onChange, id, name, type, label, textAreaOrNot}) {
    if (textAreaOrNot === "1") {
        return (
            <div className="category-name">
                <label>{label}
                    <textarea
                        id={id}
                        value={value}
                        type={type}
                        name={name}
                        onChange={onChange}
                    />
                </label>
            </div>
        )
    }

    else {
        return (
            <div className="category-name">
                <label>{label}
                    <input 
                        id={id}
                        value={value}
                        type={type}
                        name={name}
                        onChange={onChange}
                    />
                </label>
            </div>
        )
    }
}

export default FormField