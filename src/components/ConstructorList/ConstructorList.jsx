import React, {useEffect} from 'react';
import styles from './constructorList.module.css';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { dataPropTypes } from "../../utils/proptypes";

const ConstructorList = ({ ingredients, calculateTotalPrice }) => {
    const buns = ingredients[0];
    const notBuns = ingredients.filter(item => item.type !== 'bun');

    //Закреплена карточка?
    const isLocked = true;


    useEffect(() => calculateTotalPrice(buns, notBuns))


    return (
        <ul className={ styles.main }>
            <li className={ styles.item__top } key={ buns._id } >
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={ `${buns.name} (верх)` }
                    price={ buns.price }
                    thumbnail={ buns.image }/>
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
            <li className={ styles.item__bottom } key={ `${buns._id} 111` }>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={ `${buns.name} (низ)` }
                    price={ buns.price }
                    thumbnail={ buns.image }/>
            </li>
        </ul>
    );
};

ConstructorList.propTypes = {
    ingredients: PropTypes.arrayOf(dataPropTypes).isRequired,
    calculateTotalPrice: PropTypes.func.isRequired
}

export default ConstructorList;
