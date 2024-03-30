import {useEffect, useState} from "react";
import axios from "axios";
import {sortByDateCard} from "../../../../utils/sortByDate.ts";
import CardModule from "../../../ui/cardModule.tsx";
import {v4 as uuidv4} from "uuid";

function Editor() {
    const [dataCard, setDataCard] = useState<{id: string, visible:boolean, category: string[], title: string, img: string, catalog: string[], description: string, date: string, floors: string, square: string, deadlines: string, location: string}[]>([])
    const [deleteId, setDeleteId] = useState<string>('')
    const [visibleModal, setVisibleModal] = useState<boolean>(false)

    useEffect(() => {
        axios.get('https://skalliance.pro/getDataCard').then(res => setDataCard(JSON.parse(res.data)))
    }, [])

    const deleteCard = async (id: string) => {
        const res = await axios.post('https://skalliance.pro/deleteCard', {id: id})
        if (res.status === 200) {
            axios.get('https://skalliance.pro/getDataCard').then(res => setDataCard(JSON.parse(res.data)))
        }
    }
    const visibleCard = async (id: string) => {
        const res = await axios.post('https://skalliance.pro/visibleCard', {id: id})
        if (res.status === 200) {
            axios.get('https://skalliance.pro/getDataCard').then(res => setDataCard(JSON.parse(res.data)))
        }
    }

    return (
        <div className={"flex flex-wrap justify-center items-center gap-x-11 gap-y-8 px-2 py-20"}>
            {sortByDateCard(dataCard).map((item) =>
                <div key={uuidv4()} className={'flex flex-col'}>
                    <CardModule item={item}/>
                    <div className={'mt-5 flex flex-row gap-4 w-full'}>
                        <button className={'w-full bg-gray-400 hover:bg-gray-500'} onClick={() => {visibleCard(item.id)}}>{item.visible ? 'Скрыть' : 'Показать'}</button>
                        <button className={'w-full bg-red-500 p-3 hover:bg-red-600'} onClick={() =>{setDeleteId(item.id); setVisibleModal(!visibleModal)}}>Удалить</button>
                    </div>
                </div>
            )}
            {visibleModal &&
                <div className={'fixed top-0 w-screen h-screen bg-gray-700/40 backdrop-blur-sm z-50 flex justify-center items-center'}>
                    <div className={'bg-gray-700 p-10 space-y-10'}>
                        <a className={'text-white text-xl'}>Вы уверены, что хотите удалить объект? Он пропадет навсегда</a>
                        <div className={'flex flex-row text-center gap-5'}>
                            <a className={'w-full bg-gray-400 hover:bg-gray-500 p-3 cursor-pointer'} onClick={() => setVisibleModal(!visibleModal)}>Отмена</a>
                            <a className={'w-full bg-red-500 p-3 hover:bg-red-600 cursor-pointer'} onClick={() => {deleteCard(deleteId); setVisibleModal(!visibleModal)}}>Удалить</a>
                        </div>
                    </div>
                </div>}
        </div>
    );
}

export default Editor;