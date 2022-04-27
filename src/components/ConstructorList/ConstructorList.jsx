import React, { useContext } from 'react';
import styles from './constructorList.module.css';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientsContext } from "../../context/ingredientsContext";

const ConstructorList = () => {
    const ingredients = useContext(ingredientsContext);

    const firstBuns = ingredients[0];
    const notBuns = ingredients.filter(item => item.type !== 'bun');

    //Закреплена карточка?
    const isLocked = true;

    return (
        <ul className={ styles.main }>
            <li className={ styles.item__top } key={ firstBuns._id }>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={ `${firstBuns.name} (верх)` }
                    price={ firstBuns.price }
                    thumbnail={ firstBuns.image }/>
            </li>
            <div className={ styles.scroll }>
                {notBuns.map(item => {
                    return <li className={ styles.item } key={ item._id }>
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
                })}
            </div>
            <li className={ styles.item__bottom } key={ `${firstBuns._id} 111` }>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={ `${firstBuns.name} (низ)` }
                    price={ firstBuns.price }
                    thumbnail={ firstBuns.image }/>
            </li>
        </ul>
    );
};


export default ConstructorList;
