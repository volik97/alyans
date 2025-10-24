import { useState } from 'react';
import AddCard from './AddCard/AddCard.tsx';
import Editor from './Editor/Editor.tsx';
import Email from './Email/Email.tsx';
import AddProject from './AddProject/AddProject.tsx';
import EditProject from './EditProject/EditProject.tsx';

function AdminPanel() {
    const [activeMenu, setActiveMenu] = useState('addCard');
    return (
        <div className={'pt-32'}>
            <ul className={'flex w-full flex-row gap-x-20 justify-evenly flex-wrap'}>
                <li
                    onClick={() => setActiveMenu('addCard')}
                    className={`text-2xl hover:cursor-pointer hover:text-base-zinc ${activeMenu === 'addCard' ? 'text-base-zinc' : 'text-white'}`}
                >
                    Добавить карточку портфолио
                </li>
                <li
                    onClick={() => setActiveMenu('editor')}
                    className={`text-2xl hover:cursor-pointer hover:text-base-zinc ${activeMenu === 'editor' ? 'text-base-zinc' : 'text-white'}`}
                >
                    Управление портфолио
                </li>
                <li
                    onClick={() => setActiveMenu('addProject')}
                    className={`text-2xl hover:cursor-pointer hover:text-base-zinc ${activeMenu === 'addProject' ? 'text-base-zinc' : 'text-white'}`}
                >
                    Добавить проект
                </li>
                <li
                    onClick={() => setActiveMenu('editProject')}
                    className={`text-2xl hover:cursor-pointer hover:text-base-zinc ${activeMenu === 'editProject' ? 'text-base-zinc' : 'text-white'}`}
                >
                    Управление проектами
                </li>
                <li
                    onClick={() => setActiveMenu('email')}
                    className={`text-2xl hover:cursor-pointer hover:text-base-zinc ${activeMenu === 'email' ? 'text-base-zinc' : 'text-white'}`}
                >
                    Редактор E-mail
                </li>
            </ul>
            <div>
                {activeMenu === 'addCard' && <AddCard />}
                {activeMenu === 'editor' && <Editor />}
                {activeMenu === 'addProject' && <AddProject />}
                {activeMenu === 'editProject' && <EditProject />}
                {activeMenu === 'email' && <Email />}
            </div>
        </div>
    );
}

export default AdminPanel;
