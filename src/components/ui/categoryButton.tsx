import {categoryReducer} from "../store/reducers/categoryReducer.ts";
import {useAppDispatch} from "../hooks/redux.ts";

const styles = {
    active: 'bg-[#3A5199] rounded-2xl px-3 pt-1.5 pb-1 flex flex-row gap-1.5 items-center justify-start relative text-[#DBDCE2] text-[14px]',
    notActive: 'hover:bg-[#DBDCE2] transform transition duration-300 bg-white rounded-2xl inner-border inner-border-[#555B6B] px-3 pt-1.5 pb-1 flex flex-row gap-1.5 items-center justify-start relative text-[#555B6B]'
}
export default function CategoryButton({id, children, category} : {id: string, children: string, category: string}) {
    const {setCategory} = categoryReducer.actions
    const dispatch = useAppDispatch()
    return (
        <button onClick={(event) => dispatch(setCategory(event.currentTarget.id))} id={id} className={category === children ? styles.active : styles.notActive}>
            <a className={'text-lg leading-[1,305rem] h-fit font-regular whitespace-nowrap'}>{children}</a>
        </button>
    );
}
