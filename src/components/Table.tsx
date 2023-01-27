import Customer from "@/core/Customer"
import { EditIcon, TrashIcon } from "./Icons"

interface TableProps {
    customers: Customer[]
    selectedCustomer?: (customer: Customer) => void
    deletedCustomer?: (customer: Customer) => void
}

export default function Table(props: TableProps) {

    const showEdit = props.deletedCustomer || props.selectedCustomer

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">Code</th>
                <th className="text-left p-4">Name</th>
                <th className="text-left p-4">Age</th>
                {showEdit ? <th className="p-4">Edit</th> : false}
            </tr>
        )

    }

    function renderData() {
        return props.customers?.map((customer, i) => {
            return (
                <tr key={customer.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className="text-left p-4">{customer.id}</td>
                    <td className="text-left p-4">{customer.name}</td>
                    <td className="text-left p-4">{customer.age}</td>
                    {showEdit ? renderEdit(customer) : false}
                </tr>
            )
        })
    }

    function renderEdit(customer: Customer) {
        return (
            <td className="flex justify-center">
                {props.selectedCustomer ? (
                    <button onClick={() => props.selectedCustomer?.(customer)} className="
                        flex justify-center items-center
                        text-green-600 
                        rounded-full hover:bg-purple-50
                        p-2 m-1
                ">
                        {EditIcon}
                    </button>
                ) : false}

                {props.selectedCustomer ? (
                    <button onClick={() => props.deletedCustomer?.(customer)} className="
                        flex justify-center items-center
                        text-red-500 
                        rounded-full hover:bg-purple-50
                        p-2 m-1
                ">
                        {TrashIcon}
                    </button>
                ) : false}
                
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className="
                bg-gradient-to-r from-purple-500 to-purple-800
                text-gray-100
            ">
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>

        </table>
    )
}