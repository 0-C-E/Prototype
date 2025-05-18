export default function FormField({ id, type, name, label, value, onChange }) {
    return (
        <div className="form-field">
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                required
                className={value ? 'filled' : ''}
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}
