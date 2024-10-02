"use client";
import useForm from "../hooks/useForm";

const Form = () => {

    const { formData, handleInputChange, handleSubmit } = useForm();

    return (
        <div className="flex flex-col w-1/2 items-center gap-2">
            <h1 >Please  fill out the form</h1>
            <form className="grid grid-cols-2 gap-2" onSubmit={handleSubmit}>
                <input className="border border-black" type="text" placeholder="FirstName" name="firstname" onChange={handleInputChange} value={formData.firstname} />
                <input className="border border-black" type="text" placeholder="LastName" name="lastname" onChange={handleInputChange} value={formData.lastname} />
                <input className="border border-black" type="email" placeholder="Email" name="email" onChange={handleInputChange} value={formData.email} />
                <input className="border border-black" type="text" placeholder="Username" name="username" onChange={handleInputChange} value={formData.username} />
                <input className="border border-black" type="password" placeholder="Password" name="password" onChange={handleInputChange} value={formData.password} />
                <button className="p-2 bg-slate-950 rounded-lg text-white" type="submit">Submit</button>
            </form>

        </div>
    )
}


export default Form