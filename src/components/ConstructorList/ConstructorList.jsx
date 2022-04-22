import React from 'react';
import styles from './constructorList.module.css';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { dataPropTypes } from "../../utils/proptypes";

const ConstructorList = ({ data }) => {
    const buns = data.filter(item => item.type === 'bun');
    const firstBuns = buns[0];
    const lustBuns = buns[ buns.length - 1 ];
    const notBuns = data.filter(item => item.type !== 'bun');

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
            <li className={ styles.item__bottom } key={ lustBuns._id }>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={ `${lustBuns.name} (низ)` }
                    price={ lustBuns.price }
                    thumbnail={ lustBuns.image }/>
            </li>
        </ul>
    );
};

ConstructorList.propTypes = {
    data: PropTypes.arrayOf(dataPropTypes).isRequired
}

export default ConstructorList;
