import { useState } from 'react'

export default function PasswordField({ id, name, label, value, onChange }) {
    const [visible, setVisible] = useState(false)

    return (
        <div className="form-field">
            <div className="input-with-icon">
                <input
                    type={visible ? 'text' : 'password'}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required
                />
                <label htmlFor={id}>{label}</label>
                <div
                    className="icons"
                    title="Toggle password visibility"
                    onClick={() => setVisible((v) => !v)}
                >
                    {visible ? <p>Hide password</p> : <p>Show password</p>}
                </div>
            </div>
        </div>
    )
}
