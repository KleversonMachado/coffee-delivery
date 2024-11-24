import { createContext, useState } from "react";

interface FormContextProviderProps {
    children: React.ReactNode
}

interface FormContextType {
    formData: {
        street: string;
        number: number;
        neighborhood: string;
        city: string;
        uf: string;
        paymentMethod: string;
    };
    setFormDataFn: (newData: Partial<FormContextType['formData']>) => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const FormContext = createContext({} as FormContextType);

export function FormContextProvider({ children }: FormContextProviderProps) {
    const [formData, setFormData] = useState({
        street: '',
        number: 0,
        neighborhood: '',
        city: '',
        uf: '',
        paymentMethod: ''
    });

    function setFormDataFn(newData: Partial<typeof formData>) {
        setFormData(prevData => ({
            ...prevData,
            ...newData
        }));
    }

    return (
        <FormContext.Provider value={{
            formData,
            setFormDataFn
        }}>
            {children}
        </FormContext.Provider>
    )
}