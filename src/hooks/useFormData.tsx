import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

export function useFormData() {
    return useContext(FormContext);
}