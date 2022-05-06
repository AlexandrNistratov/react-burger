import React, { useEffect } from 'react';
import styles from './constructorList.module.css';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { dataPropTypes } from "../../utils/proptypes";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import clsx from "clsx";
import { addBunsAction, addNoBunsAction, getPriceActions } from "../../services/reducers/constructor";
import { v4 as uuidv4 } from 'uuid';

const ConstructorList = ({  calculateTotalPrice, collectIngredients}) => {
    const dispatch = useDispatch();

    const onDropHandler = (item) => {
        item.type === 'bun' ? dispatch(addBunsAction(item)) : dispatch(addNoBunsAction(item)) }



    const [, ref] = useDrop({
        accept: 'ingredients',
        drop (item) {
            onDropHandler(item)
        }
    })

    const { bun, noBun } = useSelector(state => state.constructorData);
    console.log(noBun)

    //Закреплена карточка?
    const isLocked = true;



    // useEffect(() => {
    //     calculateTotalPrice(buns, notBuns)
    //     collectIngredients(notBuns, buns, buns)
    // }, [])


    return (
        <ul className={ styles.main } ref={ ref }>
            {bun ? (
                <li className={styles.item__top} key={ uuidv4() }>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image}/>
                </li>)
                : (<p className={clsx(styles.text, 'text_type_main-medium')}>Тащи сюда свою булку</p>)
            }
            <div className={ styles.scroll }>
                {noBun.length > 0 ? (
                    noBun.map(item => {
                            return <li className={ styles.item } key={ uuidv4() }>
                                {isLocked &&
                                    <div className={ styles.wrapper }>
                                        <DragIcon type="primary" />
                                    </div>
                                }
                                <ConstructorElement
                                    text={ item.name }
                                    price={ item.price }
                                    thumbnail={ item.image }>
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

ConstructorList.propTypes = {
    // ingredients: PropTypes.arrayOf(dataPropTypes).isRequired,
    calculateTotalPrice: PropTypes.func.isRequired
}

export default ConstructorList;
