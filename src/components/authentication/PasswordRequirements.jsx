const rules = [
    { regex: /.{12,}/, text: 'At least 12 characters long.' },
    { regex: /[A-Z]/, text: 'Contains at least one uppercase letter (A-Z).' },
    { regex: /[a-z]/, text: 'Contains at least one lowercase letter (a-z).' },
    { regex: /\d/, text: 'Contains at least one digit (0-9).' },
    {
        regex: /[^a-zA-Z0-9]/,
        text: 'Contains at least one special character (non-alphanumeric).',
    },
]

export default function PasswordRequirements({ password }) {
    return (
        <div id="password-requirements">
            <h3>Password requirements</h3>
            <ul>
                {rules.map((rule, i) => {
                    const valid = rule.regex.test(password)
                    return (
                        <li key={i}>
                            {valid ? (
                                <p className="password-requirement-check">✓</p>
                            ) : (
                                <p className="password-requirement-x">✗</p>
                            )}
                            <span>{rule.text}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
