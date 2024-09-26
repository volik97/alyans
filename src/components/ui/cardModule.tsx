import {useState} from "react";
import ModalCardFull from "./modalCardFull.tsx";
import {v4 as uuidv4} from "uuid";
import {categoryReducer} from "../store/reducers/categoryReducer.ts";
import {useAppDispatch} from "../hooks/redux.ts";
import {scroller} from "react-scroll";

export interface ICardModule  {
item: {
        id: string,
        img?:string,
        title:string,
        floors?: string,
        deadline?: string,
        location?: string,
        description:string,
        category:string[],
        date: string | Date,
        type?: string,
        square?: string,
        LxWxH?: string,
        catalog?:string[]}
}
function CardModule({item} : ICardModule) {
    const refactorDate = item.date = new Date(item.date)
    const {setCategory} = categoryReducer.actions
    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    return (
        <>
            <div key={item.id} className="max-w-[518px] bg-white h-full relative flex flex-col">
                <img
                    src={item.img ? item.img : "https://gidro-z.ru/upload/iblock/8a1/yb0w903hv9pnnlug9db3vsxmgl4h9u8u.jpg"}
                    alt={item.title}
                    className="object-cover w-full min-h-[209px] max-h-[518px]"
                />
                <div className="flex flex-col px-4 py-5 gap-4 flex-grow overflow-hidden">
                    <a className="font-regular text-2xl text-[#2F2E33]">{item.title}</a>
                    <div className="mt-auto flex flex-col gap-4">
                        <div className="flex flex-row gap-2 flex-wrap">
                            {item.category.map((categoryItem) => (
                                <div
                                    onClick={() => {
                                        dispatch(setCategory(categoryItem));
                                        scroller.scrollTo('modules', {smooth: true});
                                    }}
                                    key={uuidv4()}
                                    className="hover:cursor-pointer hover:border-base-zinc hover:text-base-zinc text-[#9C9F91] transition duration-300 px-3 pt-1 pb-0.5 flex items-center justify-center bg-white rounded-2xl border border-[#9C9F91]"
                                >
                                    <a className="font-thin text-lg">{categoryItem}</a>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-row justify-between items-start gap-2">
                            <div className="text-[#9C9F91] font-light text-lg">
                                {refactorDate.toLocaleString('ru-RU', {
                                    year: 'numeric',
                                    month: 'numeric',
                                    day: 'numeric',
                                })}
                            </div>
                            <button onClick={() => handleOpen()}
                                    className="w-fit flex justify-center items-center py-2.5 px-8 bg-base-zinc">
                                <a className="text-[14px] font-regular text-base-gray uppercase tracking-tight">подробнее</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ModalCardFull item={item} isOpen={open} onClose={handleOpen}/>
        </>
    );
}

export default CardModule;