import {sortByDateCard} from "../../../utils/sortByDate.ts";

import CategoryButton from "../../ui/categoryButton.tsx";
import CardModule from "../../ui/cardModule.tsx";
import {v4 as uuidv4} from "uuid";
import {useAppSelector} from "../../hooks/redux.ts";
import {useEffect, useState} from "react";
import axios from "axios";


const categoryNames = ["Все","Спорт", "Здоровье", "Образование", "Культура", "Новые территории"]
export default function ModulesTowers() {
  const [dataCard, setDataCard] = useState<{id: string, visible:boolean, category: string[], title: string, img: string, catalog: string[], description: string, date: string, floors: string, square: string, deadlines: string, location: string}[]>([])
  const url = window.location.host

  useEffect(() => {
    axios.get(`https://${url}/getDataCard`).then(res => setDataCard(JSON.parse(res.data)))
  }, [])
  const {category} = useAppSelector(state => state.categoryReducer);
  return (
    <div id='modules' className="relative h-fit pt-20 lg:pt-32 xl:pt-20 ultraXl:pt-32">
      <div className="flex flex-col items-center first:items-center">
        <h1 className="text-[32px] lg:text-6xl xl:text-8xl xl:pt-5 font-thin text-base-gray px-2">Каталог</h1>
        <div className="w-full pt-5 pb-7 max-w-[1642px] h-fit flex flex-col justify-center gap-y-4">
          <h3 className="text-center text-base-gray font-regular text-2xl w-fit px-2 pm2 ">Категории</h3>
          <div className={'w-full px-2'}>
            <figure className={'h-[1px] bg-base-gray'}></figure>
          </div>
          <div className={'flex gap-3 overflow-y-auto pl-2'}>
            {categoryNames.map(item => <CategoryButton key={uuidv4()} category={category} id={item}>{item}</CategoryButton>)}
          </div>
        </div>
        <div className="max-w-[1726px] items-center grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-x-11 gap-y-8 px-2 py-4">
          {category === "Все" ?
              sortByDateCard(dataCard).map((item) => item.visible ? <CardModule key={uuidv4()} item={item}/> : null)
              : sortByDateCard(dataCard).filter((item: { category: string[]; }) => {
                let bool = false
                item.category.forEach(el => {if(el === category) {
                  bool = true
                }})
                return bool}

              ).map((item: { id: string; img?: string | undefined; title: string; description: string; category: string[]; date: string; type?: string | undefined; square?: string | undefined; LxWxH?: string | undefined; catalog?: string[] | undefined; visible?: boolean }) => item.visible ? <CardModule key={uuidv4()} item={item}/> : null)}
        </div>
      </div>
    </div>
  );
}
