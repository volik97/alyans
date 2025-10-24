import { sortByDateCard } from '../../../utils/sortByDate.ts';

import CategoryButton from '../../ui/categoryButton.tsx';
import CardModule from '../../ui/cardModule.tsx';
import Pagination from '../../ui/pagination.tsx';
import { v4 as uuidv4 } from 'uuid';
import { useAppSelector } from '../../hooks/redux.ts';
import { useEffect, useState } from 'react';
import axios from 'axios';

const categoryNames = ['Все', 'Здравоохранение', 'Спорт', 'Образование', 'Культура'];

export default function Projects() {
    const [dataCard, setDataCard] = useState<
        {
            id: string;
            visible: boolean;
            category: string[];
            title: string;
            img: string;
            catalog: string[];
            description: string;
            date: string;
            floors: string;
            square: string;
            deadlines: string;
            location: string;
        }[]
    >([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
    const url = window.location.host;
    useEffect(() => {
        axios.get(`https://${url}/getDataProjects`).then(res => setDataCard(JSON.parse(res.data)));
    }, []);

    const { category } = useAppSelector(state => state.categoryReducer);

    // Сбрасываем страницу при изменении категории или количества элементов
    useEffect(() => {
        setCurrentPage(1);
    }, [category, itemsPerPage]);

    // Получаем отфильтрованные данные
    const getFilteredData = () => {
        const sortedData = sortByDateCard(dataCard);

        if (category === 'Все') {
            return sortedData.filter(item => item.visible);
        }

        return sortedData.filter(item => {
            if (!item.visible) return false;
            return item.category.some(cat => cat === category);
        });
    };

    const filteredData = getFilteredData();
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Получаем данные для текущей страницы
    const getCurrentPageData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredData.slice(startIndex, endIndex);
    };

    const currentPageData = getCurrentPageData();

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Прокручиваем к началу списка карточек
        const catalogElement = document.getElementById('projects');
        if (catalogElement) {
            catalogElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleItemsPerPageChange = (newItemsPerPage: number) => {
        setItemsPerPage(newItemsPerPage);
        setCurrentPage(1);
    };

    return (
        <div id='projects' className='relative h-fit pt-20 lg:pt-32 xl:pt-20 ultraXl:pt-32'>
            <div className='flex flex-col items-center first:items-center'>
                <h1 className='text-[32px] pb-20 lg:text-6xl xl:text-8xl xl:pt-5 font-thin text-base-gray px-2'>
                    Проекты
                </h1>
                <div className='bg-white w-full flex items-center justify-center mb-20'>
                    <div className='w-full max-w-[1728px] h-full flex flex-col items-start pt-[38px] pb-[57px] px-8 lg:px-[75px] justify-center'>
                        <h1 className='font-thin text-4xl md:text-6xl lg:text-[94px] text-black pb-4'>
                            ООО "Альянс"
                        </h1>
                        <p className='font-thin  text-xl md:text-3xl text-black'>
                            <span className='font-bold inline'>
                                Производственно - строительная компания "Альянс"
                            </span>{' '}
                            предлагает полный цикл работ по проектированию быстровозводимых
                            модульных зданий, в том числе:
                        </p>
                        <ul className='font-thin text-xl md:text-3xl text-black list-disc list-inside ml-4 space-y-2 pt-8'>
                            <li>
                                Обязательный расчет силового каркаса модульного здания на
                                прочностные ветровые и снеговые характеристики региона для установки
                                с учетом сейсмичности района;
                            </li>
                            <li>
                                Расчет теплопотерь здания для определения оптимальной толщины
                                стеновых, кровельных панелей и основания.
                            </li>
                            <li>Разработка всех инженерных систем:</li>
                            <li>
                                Газоснабжение, отопление, водоснабжение, водоотведение, канализация,
                                электрические сети, вентиляция и кондиционирование с расчетом
                                воздухообмена, пожарная и охранная сигнализации, видеонаблюдение,
                                система контроля и управления доступом (СКУД).
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='w-full pt-5 pb-7 max-w-[1642px] h-fit flex flex-col justify-center gap-y-4'>
                    <h3 className='text-center text-base-gray font-regular text-2xl w-fit px-2 pm2 '>
                        Категории
                    </h3>
                    <div className={'w-full px-2'}>
                        <figure className={'h-[1px] bg-base-gray'}></figure>
                    </div>
                    <div className={'flex gap-3 overflow-y-auto pl-2'}>
                        {categoryNames.map(item => (
                            <CategoryButton key={uuidv4()} category={category} id={item}>
                                {item}
                            </CategoryButton>
                        ))}
                    </div>
                </div>
                {currentPageData.length > 0 ? (
                    <div className='max-w-[1726px] items-center grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-x-11 gap-y-8 px-2 py-4'>
                        {currentPageData.map(item => (
                            <CardModule key={item.id} item={item} />
                        ))}
                    </div>
                ) : (
                    <div className='max-w-[1726px] flex flex-col items-center justify-center py-20 px-2'>
                        <div className='text-center'>
                            <h3 className='text-2xl md:text-4xl font-thin text-base-gray mb-4'>
                                Пока ничего не спроектировали
                            </h3>
                            <p className='text-lg md:text-xl text-gray-600'>
                                Наши проекты появятся здесь в ближайшее время
                            </p>
                        </div>
                    </div>
                )}

                {/* Пагинация и выбор количества элементов */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    itemsPerPage={itemsPerPage}
                    totalItems={filteredData.length}
                    onItemsPerPageChange={handleItemsPerPageChange}
                />
            </div>
        </div>
    );
}
