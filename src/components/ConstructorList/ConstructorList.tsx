import React, { FC } from 'react';
import styles from './constructorList.module.css';
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import clsx from "clsx";
import { addBunsAction, addIngredientsAction, deleteIngredientsActions, moveIngredientsActions } from "../../services/actions/constructor";
import { v4 as uuidv4 } from 'uuid';
import ConstructorItem from "../ConstructorItem/ConstructorItem";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { TData } from "../../utils/types";


const ConstructorList: FC<TData> = () => {
    const dispatch = useDispatch();

    const onDropHandler: (item: any) => void = (item) => {
        if(item.type === 'bun') {
            dispatch(addBunsAction(item));
        } else {
            dispatch(addIngredientsAction({
                ...item,
                key: uuidv4()
            }));
        }
    };

    // TODO типизировать на следующем спринте
    const { bun, ingredients } = useSelector((state: any) => state.constructorData);

    const [, ref] = useDrop({
        accept: 'ingredients',
        drop (item) {
            onDropHandler(item)
        }
    });

    //Удаление ингридиента по клику на кнопку
    const deleteHandler: (item: TData) => void = (item) => {
        dispatch(deleteIngredientsActions(item.key));
    };

    //Перетаскивание ингридиентов
    const moveIngredients:  (dragIndex: number, hoverIndex: number) => void = (dragIndex, hoverIndex) => {
        const newCards = [...ingredients];
        const dragCard = ingredients[dragIndex];
        newCards.splice(dragIndex, 1);
        newCards.splice(hoverIndex, 0, dragCard);

        dispatch(moveIngredientsActions(newCards));
    };


    return (
        <ul className={ styles.main } ref={ ref }>
            {bun ? (
                <li className={ styles.item__top } key={ uuidv4() }>
                    <ConstructorElement
                        isLocked={ true }
                        type="top"
                        text={ `${bun.name} (верх)`}
                        price={ bun.price }
                        thumbnail={ bun.image }>
                    </ConstructorElement>
                </li>)
                : (<p className={clsx(styles.text, 'text_type_main-medium')}>Тащи сюда свою булку</p>)
            }
            <div className={ styles.scroll }>
                {ingredients.length > 0 ? (
                    ingredients.map((item, index) => {
                        return <li className={ styles.item } key={ item?.key }>
                                    <ConstructorItem key={ item?.key } item={ item } index={ index } deleteHandler={ () => deleteHandler(item) } moveIngredients={ moveIngredients } isLocked={ false }/>
                        </li>})
                        )
                    : (<p className={clsx(styles.text, 'text_type_main-medium')}>И не забудь ингридиенты.<br/> Тут сейчас совсем пусто</p>)
                }
            </div>
            {bun && (
                <li className={ styles.item__bottom } key={ uuidv4() }>
                    <ConstructorElement
                        isLocked={ true }
                        type="bottom"
                        text={ `${ bun.name } (низ)`}
                        price={ bun.price }
                        thumbnail={ bun.image }>
                    </ConstructorElement>
                </li>
            )}
        </ul>
    );
};

export default ConstructorList;
