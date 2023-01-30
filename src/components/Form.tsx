import Customer from "@/core/Customer";
import { useState } from "react";
import Input from "./Input";

interface FormProps {
    customer: Customer
}

export default function Form(props: FormProps) {

    const id = props.customer?.id
    const [name, setName] = useState('')

    return (
        <div>
            {id ? (
                <Input text="Code" value="Test"/>
                ) : false
            }
            <Input text="Name" value="Marcos"/>
            <Input text="Age" inputType="number" value="20"/>
        </div>
    )
}