import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import prepareImgToSendOnServer from "../../../../utils/prepareImgToSendOnServer.ts";
import {Circles} from "react-loader-spinner";

function AddCard() {
    const refCategory = useRef<HTMLSelectElement | null>(null);
    const refNewTerr = useRef<HTMLInputElement | null>(null);
    const refForm = useRef<HTMLFormElement | null>(null);
    const [checked, setChecked] = useState(false)
    const [imgFiles, setImgFiles] = useState<FileList[]>([])
    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState<{floors: string, deadline:string, location:string, square:string, title:string, description:string, category: (string|undefined)[], date: string, }>({
        title: '',
        description: '',
        category: [],
        date: '',
        floors: '',
        deadline: '',
        location: '',
        square: '',
    })
    useEffect(() => {
        const currentCategory: string[] = [];
        currentCategory.push(refCategory.current!.value)
        if(checked){
            currentCategory.push(refNewTerr.current!.value)
        }

        setData((prevState) => ({...prevState, category: currentCategory}))
    }, [refCategory.current?.value, checked])
    const handleOnChange = (
        event:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLSelectElement>
    ) => {
        const { id, value } = event.target;
        if(event.target.type === 'file'){
            const { files } = event.target as HTMLInputElement
            if(files){
                setImgFiles((prevState) => [...prevState, files])
            }

            //Не задавай вопросов, это должно быть именно тут

            return
        }
        if (event.target.type === 'checkbox'){
            return
        }
        setData((prevState) => {
            return { ...prevState, [id]: value };
        });


    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData();
        const formDataImg = prepareImgToSendOnServer(imgFiles, formData)
        formDataImg.append('body', JSON.stringify(data));

        setLoading(true)
        const res = await axios.post('https://skalliance.pro/saveCard', formData)
        if (res.status === 200){
            setLoading(false)
            alert(res.data)
        }
    }
    return (
        <div className={'flex flex-col justify-center items-center py-20'}>
            <form ref={refForm} encType="multipart/form-data" onSubmit={handleSubmit} className={'flex flex-col gap-4 px-10'}>
                <label htmlFor={'title'} className={'text-white'}>Заголовок</label>
                <input onChange={handleOnChange} placeholder={'Плодовская СОШ'} className={'p-2'} id={'title'} value={data.title}/>
                <label htmlFor={'description'} className={'text-white'}>Описание</label>
                <textarea onChange={handleOnChange} placeholder={'Модульный детский сад на 100 мест к МБОУ «Плодовская СОШ»'} className={'h-40 p-2'} id={'description'} value={data.description}/>
                <label htmlFor={'category'} className={'text-white'}>Категории</label>
                <div className={'space-x-5'}>
                    <select onChange={handleOnChange} ref={refCategory} id={'category'} className={'text-black p-2'}>
                        <option>Спорт</option>
                        <option>Культура</option>
                        <option>Образование</option>
                        <option>Здоровье</option>
                    </select>
                    <label htmlFor={'newTerritory'} className={'text-white'}>Новые территории <input ref={refNewTerr} onClick={() => setChecked(!checked)} onChange={handleOnChange} type={'checkbox'} id={'NewTerritory'} value={'Новые территории'}/></label>
                </div>
                <label htmlFor={'img'} className={'text-white'}>Обложка объекта (файл должен быть в формате ".webp" и иметь название "cover")</label>
                <input type={'file'} onChange={handleOnChange} className={'text-white'} id={'img'}/>
                <label htmlFor={'catalog'} className={'text-white'}>Фото объекта (файлы должны быть в формате ".webp" и иметь нназвание начиная с "1" и т.д. Например: "1.webp", "2.webp")</label>
                <input multiple type={'file'} onChange={handleOnChange} className={'text-white'} id={'catalog'}/>
                <label htmlFor={'date'} className={'text-white'}>Дата (год-месяц-день)</label>
                <input onChange={handleOnChange} id={'date'} placeholder={'1997-10-28'} className={'p-2'}/>
                <label htmlFor={'floors'} className={'text-white'}>Этажность</label>
                <input onChange={handleOnChange} className={'p-2'} id={'floors'} placeholder={'2'}/>
                <label htmlFor={'deadline'} className={'text-white'}>Срок поставки и сборки</label>
                <input onChange={handleOnChange} className={'p-2'} id={'deadline'}/>
                <label htmlFor={'location'} className={'text-white'}>Адрес</label>
                <input onChange={handleOnChange} className={'p-2'} id={'location'}/>
                <label htmlFor={'square'} className={'text-white'}>Площадь</label>
                <input onChange={handleOnChange} className={'p-2'} id={'square'} placeholder={'493,5 м2'}/>
                <a className={'text-2xl text-center py-5 text-red-600 font-black'}>Внимательно проверьте введенные данные!</a>
                <button type={'submit'} className={'p-4 bg-base-zinc text-white my-4 hover:bg-base-zinc/80'}>Добавить объект</button>
            </form>
            <div className={`${isLoading ? 'fixed' : 'hidden'} top-0 w-screen h-screen z-50`}>
                <div className={'w-full h-full flex flex-row justify-center items-center bg-gray-700/40 backdrop-blur-sm'}>
                    <Circles height={'50'} width={'50'} color={'#3A5199'} />
                </div>
            </div>
        </div>
    );
}

export default AddCard;
