import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import prepareImgToSendOnServer from "../../../../utils/prepareImgToSendOnServer.ts";
import {Circles} from "react-loader-spinner";
import {Multiselect} from "multiselect-react-dropdown";
export interface IItem  {
    item: {
        id: string,
        img?:string,
        title:string,
        floors?: string,
        deadlines?: string,
        location?: string,
        description:string,
        category:string[],
        date?: string | Date,
        type?: string,
        square?: string,
        LxWxH?: string,
        catalog?:string[]} | undefined
}
function AddCard({item, closeModal}: {item?: IItem, closeModal?: (a: null) => void})  {
    const getConfirmDate = () => {
        if(item?.item?.date){
            const refactorDate = new Date(item?.item?.date)
            return [refactorDate.toLocaleString("ru-RU", {year: "numeric"}), refactorDate.toLocaleString("ru-RU", {month: "2-digit"}),refactorDate.toLocaleString("ru-RU", {day: "numeric"}), ].join('-')
        } else {
            return ''
        }
    }
    const [urlsImages, setUrlsImages] = useState(item?.item?.catalog)
    const categoryFromBack = item?.item?.category.map((item:string) => {
        switch (item){
            case 'Спорт':
                return { id: 'sport', name: 'Спорт' }
                break;
            case 'Культура':
                return { id: 'culture', name: 'Культура' }
                break;
            case 'Образование':
                return { id: 'education', name: 'Образование' }
                break;
            case 'Здоровье':
                return { id: 'health', name: 'Здоровье' }
                break;
            case 'Новые территории':
                return { id: 'newTerritory', name: 'Новые территории' }
                break;
            case 'Крым':
                return { id: 'Krym', name: 'Крым' }
                break;
            default:
                break;
        }
    })
    const [data, setData] = useState<{floors: string, deadlines:string, location:string, square:string, title:string, description:string, category: (string|undefined)[], date: string, }>({
        title: item?.item?.title ?? '',
        description: item?.item?.description ?? '',
        category: [],
        date:  getConfirmDate(),
        floors: item?.item?.floors ?? '',
        deadlines: item?.item?.deadlines ?? '',
        location: item?.item?.location ?? '',
        square: item?.item?.square ?? '',
    })
    const refForm = useRef<HTMLFormElement | null>(null);
    const [imgFiles, setImgFiles] = useState<FileList[]>([])
    const [isLoading, setLoading] = useState(false)
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
    const [selectedOptions, setSelectedOptions] = useState<[]|({ id: string, name: string}|undefined)[]>(categoryFromBack ? categoryFromBack : []);

    useEffect(() => {
        if(item?.item?.id){
            setData(prevState => {return {...prevState, id: item?.item?.id}})
        }
    }, [item?.item?.id]);

    useEffect(() => {
        const prepareCategory = selectedOptions.map(option => {
            if (option === undefined) {
                return ''; // or some other appropriate fallback value
            }
            return option.name;
        });
        setData((prevState) => {return {...prevState, ['category']: prepareCategory, id: item?.item?.id}})

    }, [selectedOptions]);
    useEffect(() => {
        if(item?.item?.catalog){
            setData((prevState) => { return {...prevState, catalogUrls: urlsImages} })
        }
    },[urlsImages])
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData();
        const formDataImg = prepareImgToSendOnServer(imgFiles, formData)
        formDataImg.append('body', JSON.stringify(data));
        console.log(data)
        setLoading(true)
        const res = await axios.post(`https://skalliance.pro/${item ? 'edit':'save'}Card`, formData)
        if (res.status === 200){
            setLoading(false)
            alert(res.data)
        }
    }

    const options = [
        { id: 'sport', name: 'Спорт' },
        { id: 'culture', name: 'Культура' },
        { id: 'education', name: 'Образование' },
        { id: 'health', name: 'Здоровье' },
        { id: 'newTerritory', name: 'Новые территории' },
        { id: 'Krym', name: 'Крым' },
    ];
    const handleSelectChange = (selected: { id: string; name: string}[]) => {
        setSelectedOptions(selected);
    };
    const handleDeleteChange = (removedList: { id: string; name: string}[]) => {
        setSelectedOptions(removedList)
    }
    console.log(data)
    return (
        <div className={` flex flex-col justify-center items-center py-20`}>
            <form ref={refForm} encType="multipart/form-data" onSubmit={handleSubmit} className={'flex flex-col gap-4 px-10'}>
                <label htmlFor={'title'} className={'text-white'}>Заголовок</label>
                <input onChange={handleOnChange} placeholder={'Плодовская СОШ'} className={'p-2'} id={'title'} value={data.title}/>
                <label htmlFor={'description'} className={'text-white'}>Описание</label>
                <textarea onChange={handleOnChange} placeholder={'Модульный детский сад на 100 мест к МБОУ «Плодовская СОШ»'} className={'h-40 p-2'} id={'description'} value={data.description}/>
                <label htmlFor={'category'} className={'text-white'}>Категории</label>
                <Multiselect
                    emptyRecordMsg={'Нет категорий'}
                    options={options}
                    selectedValues={selectedOptions}
                    onSelect={handleSelectChange}
                    onRemove={handleDeleteChange}
                    displayValue="name"
                />
                {item &&
                    <div>
                        <a className={'text-white'}>Текущий каталог фото</a>
                        <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4'}>
                            {urlsImages?.map((item:string) =>
                                <div className={'flex flex-col justify-center items-center gap-1 relative'}>
                                    <img src={item}/>
                                    <figcaption className={'text-white flex gap-4'}>{item.split('/').at(-1)}<span
                                        onClick={() => setUrlsImages(urlsImages.filter((url:string) => item !== url))}
                                        className={'font-extrabold text-red-500 hover:text-red-700 hover:scale-110 cursor-pointer'}>X</span>
                                    </figcaption>
                                </div>)}
                        </div>
                    </div>
                }
                <label htmlFor={'img'} className={'text-white'}>Обложка объекта (файл должен быть в формате ".webp" и иметь название "cover")</label>
                <input type={'file'} onChange={handleOnChange} className={'text-white'} id={'img'}/>
                <label htmlFor={'catalog'} className={'text-white'}>Фото объекта (файлы должны быть в формате ".webp" и иметь нназвание начиная с "1" и т.д. Например: "1.webp", "2.webp")</label>
                <input multiple type={'file'} onChange={handleOnChange} className={'text-white'} id={'catalog'}/>
                <label htmlFor={'date'} className={'text-white'}>Дата (год-месяц-день)</label>
                <input onChange={handleOnChange} value={data.date} id={'date'} placeholder={'1997-10-28'} className={'p-2'}/>
                <label htmlFor={'floors'} className={'text-white'}>Этажность</label>
                <input onChange={handleOnChange} value={data.floors} className={'p-2'} id={'floors'} placeholder={'2'}/>
                <label htmlFor={'deadline'} className={'text-white'}>Срок поставки и сборки</label>
                <input onChange={handleOnChange} value={data.deadlines} className={'p-2'} id={'deadlines'}/>
                <label htmlFor={'location'} className={'text-white'}>Адрес</label>
                <input onChange={handleOnChange} value={data.location} className={'p-2'} id={'location'}/>
                <label htmlFor={'square'} className={'text-white'}>Площадь</label>
                <input onChange={handleOnChange} value={data.square} className={'p-2'} id={'square'} placeholder={'493,5 м2'}/>
                <a className={'text-2xl text-center py-5 text-red-600 font-black'}>Внимательно проверьте введенные данные!</a>
                <div className={'w-full flex gap-4'}>
                    {closeModal && <button onClick={() => closeModal(null)} className={'p-4 bg-base-zinc text-white my-4 hover:bg-base-zinc/80 w-full'}>Отмена</button>}
                    <button type={'submit'}
                            className={'p-4 bg-base-zinc text-white my-4 hover:bg-base-zinc/80 w-full'}>{item ? "Сохранить изменения" : "Добавить объект"}</button>
                </div>
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
