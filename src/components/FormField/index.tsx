import type { ChangeEvent } from 'react';
import styles from './FormField.module.css';

interface FormFieldProps {
    label: string;
    type?: string;
    name: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    suggestions?: string[];
}

function FormField({
    label,
    type = 'text',
    name,
    value,
    onChange,
    suggestions = [],
}: FormFieldProps) {
    const fieldId = `id_${name}`;
    const isTextarea = type === 'textarea';
    const tag = isTextarea ? 'textarea' : 'input';
    const hasValue = value.length > 0;
    const hasSuggestions = suggestions.length > 0;

    const inputClassName = `${styles.input} ${hasValue ? styles.inputHasValue : ''}`.trim();

    const Tag = tag as 'input' | 'textarea';

    return (
        <div className={styles.wrapper}>
            <label className={styles.label} htmlFor={fieldId}>
                <Tag
                    className={inputClassName}
                    id={fieldId}
                    type={isTextarea ? undefined : type}
                    value={value}
                    name={name}
                    onChange={onChange}
                    autoComplete={hasSuggestions ? 'off' : 'on'}
                    list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
                />
                <span className={styles.labelText}>
                    {label}:&nbsp;
                </span>
                {hasSuggestions && (
                    <datalist id={`suggestionFor_${fieldId}`}>
                        {suggestions.map((suggestion) => (
                            <option
                                value={suggestion}
                                key={`suggestionFor_${fieldId}_option${suggestion}`}
                            >
                                {suggestion}
                            </option>
                        ))}
                    </datalist>
                )}
            </label>
        </div>
    );
}

export default FormField;
