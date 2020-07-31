import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const WrapperFieldForm = styled.div`
    position: relative;
    textarea {
        min-height: 150px;
    }
    input[type="color"] {
        padding-left: 56px;
    }
`

const Input = styled.input`
    background: #53585D;
    color: #F5F5F5;
    display: block;
    width: 100%;
    height: 57px;
    font-size: 18px;
    
    outline: 0;
    border: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid #53585D;
    
    padding: 16px 16px;
    margin-bottom: 45px;
    
    resize: none;
    border-radius: 4px;
    transition: border-color .3s;
    
    &:focus {
        border-bottom-color: var(--primary);
    }
    &:focus:not([type='color']) + span{
        transform: scale(0.7) translateY(-12px);
    }
    ${function ( {hasValue} ) {
        return hasValue && css`
        &:not([type='color']) + span{
            transform: scale(0.7) translateY(-12px);
        `
    }}
`

const Label = styled.label`
 
`

Label.text = styled.span`
    color: #E5E5E5;
    height: 57px;
    position: absolute; 
    top: 0;
    left: 16px;
    
    display: flex;
    align-items: center;
    
    transform-origin: 0% 0%;
    font-size: 18px;
    font-style: normal;
    font-weight: 300;
    
    transition: .1s ease-in-out;
`

function FormField({ value, onChange, id, name, type, label, as}) {
    const isTextArea = type === 'textarea'
    const tag = isTextArea ? 'textarea' : 'input'
    const hasValue = Boolean(value.length > 0)
    return (
        <WrapperFieldForm>
            <Label>
                <Input
                    as={tag}
                    id={id}
                    value={value}
                    type={type}
                    name={name}
                    hasValue={hasValue}
                    onChange={onChange}
                />
                <Label.text>
                {label}
                </Label.text>
            </Label>
        </WrapperFieldForm>
        )
    }

export default FormField