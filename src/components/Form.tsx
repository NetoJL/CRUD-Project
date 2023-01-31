import Customer from "@/core/Customer";
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    customer: Customer
    customerUpdated?: (customer: Customer) => void
    cancelled?: () => void
}

export default function Form(props: FormProps) {

    const id = props.customer?.id
    const [name, setName] = useState(props.customer?.name ?? '')
    const [age, setAge] = useState(props.customer?.age ?? 0)

    return (
        <div className="bg-gray-300 p-5 rounded-md">
            {id ? (
                <Input
                    readOnly
                    text="Code"
                    value={id}
                    className="mb-5"
                />
            ) : false
            }
            <Input
                text="Name"
                value={name}
                onChange={setName}
                className="mb-5"
            />
            <Input
                text="Age"
                value={age}
                inputType="number"
                onChange={setAge}
            />
            <div className="flex justify-end mt-7">
                <Button color="blue" style="mr-2" onClick={() => props.customerUpdated?.(new Customer(name, +age, id))}>
                    {id ? 'Update' : 'Save'}
                </Button>
                <Button color="gray" onClick={props.cancelled}>
                    Cancel
                </Button>
            </div>

        </div>
    )
}