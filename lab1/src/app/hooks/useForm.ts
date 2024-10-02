import { useEffect, useState } from "react";

interface FormData {
    firstname: string,
    lastname: string,
    username: string,
    email: string,
    password: string

}


const useForm = () => {

    const [formData, setFormData] = useState<FormData>({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        const formData = localStorage.getItem('formData')
        formData ? setFormData(JSON.parse(formData)) : undefined;
    }, [])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        localStorage.setItem('formData', JSON.stringify(formData));
        console.log("formData", formData);

        // clear form data
        setFormData({
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
        });
    }

    return { formData, handleInputChange, handleSubmit };
}


export default useForm