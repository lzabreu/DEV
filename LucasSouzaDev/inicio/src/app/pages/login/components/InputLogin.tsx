import React from 'react'

interface IInputLoginProps {
    label: string
    value: string
    type?: string
    onChange: (newValue: string) => void
    onPressEnter?: () => void 
   
}

export const InputLogin = React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {
    return (
        <label>
            <span>{props.label}</span>
            <input className="border border-2px border-blue-500 rounded-md bg-blue-100"
                value={props.value}
                type={props.type}
                ref={ref}
                
                onChange={e => props.onChange(e.target.value)}
                onKeyDown={e => e.key === "Enter" ? props.onPressEnter && props.onPressEnter : undefined}
            />
        </label>
    )
})

