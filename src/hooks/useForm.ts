import { useState, type ChangeEvent } from 'react';

function useForm<T extends Record<string, string>>(initialValues: T) {
    const [values, setValues] = useState<T>(initialValues);

    function setValue(key: string, value: string) {
        setValues((prev) => ({
            ...prev,
            [key]: value,
        }));
    }

    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const fieldName = event.target.getAttribute('name');
        if (fieldName) {
            setValue(fieldName, event.target.value);
        }
    }

    function clearForm() {
        setValues(initialValues);
    }

    return {
        handleChange,
        values,
        clearForm,
    };
}

export default useForm;
