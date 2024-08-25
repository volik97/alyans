import React, {useEffect, useState} from "react";
import axios from "axios";

function Email() {
    const [email, setEmail] = useState()
    const url = window.location.host
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
    useEffect(() => {
        axios.get(`https://${url}/getEmail`).then((response) => {setEmail(response.data)})
    }, [])
    const handleOnChange = (
        event:
            | React.ChangeEvent<HTMLInputElement>) =>
    {
        const { id, value } = event.target;
        setForm((prevState) => {
            return { ...prevState, [id]: value };
        });
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const res = await axios.post(`https://${url}/changeEmail`, form);
        if (res.status === 200) {
            alert('Email changed!')
            axios.get(`https://${url}/getEmail`).then((response) => {setEmail(response.data)})
        }
    }
    return (
        <div className={'flex flex-row p-40 justify-center items-start gap-x-20 text-white'}>
            <div className={'text-2xl'}>Текущий E-mail <a className={'bg-green-600 py-1 px-5'}>{email}</a></div>
            <form onSubmit={handleSubmit} className={'flex flex-col text-2xl gap-3'}>
                <label htmlFor={'email'}>Новый e-mail</label>
                <input onChange={handleOnChange} className={'p-2 text-black'} id={'email'} value={form.email}></input>
                <label htmlFor={'password'} >Специальный пароль получаемый в вашей почте</label>
                <input onChange={handleOnChange} className={'p-2 text-black'} id={'password'} value={form.password}></input>
                <button type='submit' className={'bg-red-600 self-center mt-5 w-fit px-6 py-2 hover:bg-red-800'}>Изменить</button>
            </form>
        </div>
    );
}

export default Email;