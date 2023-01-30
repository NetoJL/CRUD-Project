import Customer from "@/core/Customer";
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    customer: Customer
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
                <Button buttonColor="blue" className="mr-2">
                    {id ? 'Update' : 'Save'}
                </Button>
                <Button buttonColor="gray">
                    Cancel
                </Button>
            </div>

        </div>
    )
}