import React from 'react';
import styles from './constructorList.module.css';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import clsx from "clsx";
import { addBunsAction, addIngredientsAction, deleteIngredientsActions } from "../../services/reducers/constructor";
import { v4 as uuidv4 } from 'uuid';

const ConstructorList = () => {
    const dispatch = useDispatch();


    const onDropHandler = (item) => {
        if(item.type === 'bun') {
            dispatch(addBunsAction(item));
        } else {
            dispatch(addIngredientsAction(item));
        }
    }
    const { bun, ingredients } = useSelector(state => state.constructorData);

    const [, ref] = useDrop({
        accept: 'ingredients',
        drop (item) {
            onDropHandler(item)
        }
    })

    //Удаление ингридиента по клику на кнопку
    const deleteHandler = (item) => {
        dispatch(deleteIngredientsActions(item))
    }

    //Закреплена карточка?
    const isLocked = true;


    return (
        <ul className={ styles.main } ref={ ref }>
            {bun ? (
                <li className={styles.item__top} key={ uuidv4() }>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image}
                    />
                </li>)
                : (<p className={clsx(styles.text, 'text_type_main-medium')}>Тащи сюда свою булку</p>)
            }
            <div className={ styles.scroll }>
                {ingredients.length > 0 ? (
                        ingredients.map(item => {
                            return <li className={ styles.item } key={ uuidv4() }>
                                {isLocked &&
                                    <div className={ styles.wrapper }>
                                        <DragIcon type="primary" />
                                    </div>
                                }
                                <ConstructorElement
                                    text={ item.name }
                                    price={ item.price }
                                    thumbnail={ item.image }
                                    handleClose={() => deleteHandler(item._id)}>
                                </ConstructorElement>
                            </li>
                        })
                        )
                    : (<p className={clsx(styles.text, 'text_type_main-medium')}>И не забудь ингридиенты.<br/> Тут сейчас совсем пусто</p>)
                }
            </div>
            {bun && (
                <li className={ styles.item__bottom } key={ uuidv4() }>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={ `${bun.name} (низ)` }
                        price={ bun.price }
                        thumbnail={ bun.image }/>
                </li>
            )}
        </ul>
    );
};

export default ConstructorList;
