import {useState} from "react";
import AddCard from "./AddCard/AddCard.tsx";
import Editor from "./Editor/Editor.tsx";
import Email from "./Email/Email.tsx";

function AdminPanel() {
    const [activeMenu, setActiveMenu] = useState('addCard')
    return (
        <div className={'pt-32'}>
            <ul className={'flex w-full flex-row gap-x-40 justify-evenly'}>
                <li onClick={() => setActiveMenu('addCard')} className={`text-3xl hover:cursor-pointer hover:text-base-zinc ${activeMenu === 'addCard' ? 'text-base-zinc' : 'text-white'}`}>Добавить карточку проекта</li>
                <li onClick={() => setActiveMenu('editor')} className={`text-3xl hover:cursor-pointer hover:text-base-zinc ${activeMenu === 'editor' ? 'text-base-zinc' : 'text-white'}`}>Удалить / Скрыть</li>
                <li onClick={() => setActiveMenu('email')} className={`text-3xl hover:cursor-pointer hover:text-base-zinc ${activeMenu === 'email' ? 'text-base-zinc' : 'text-white'}`}>Редактор E-mail</li>
            </ul>
            <div>
                {activeMenu === 'addCard' && <AddCard/>}
                {activeMenu === 'editor' && <Editor/>}
                {activeMenu === 'email' && <Email/>}
            </div>
        </div>
    );
}

export default AdminPanel;