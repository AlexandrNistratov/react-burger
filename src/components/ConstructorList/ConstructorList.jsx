import React from 'react';
import styles from './constructorList.module.css';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { dataPropTypes } from "../../utils/proptypes";

const ConstructorList = ({ data }) => {
    const firstItem = data[1];
    const lastItem = data[data.length - 1];
    const buns = data.filter(item => item.type === 'bun')[1];

    //Закреплена карточка?
    const isLocked = true;

    return (
        <ul className={styles.main}>
           <li className={styles.item__top} key={firstItem._id}>
               <ConstructorElement
                   type="top"
                   isLocked={true}
                   text={`${buns.name} (верх)`}
                   price={buns.price}
                   thumbnail={buns.image}/>
           </li>
            <div className={styles.scroll}>
                {data.map(item => {
                    return <li className={styles.item} key={item._id}>
                        {isLocked &&
                            <div className={styles.wrapper}>
                                <DragIcon type="primary" />
                            </div>
                        }
                        <ConstructorElement
                            text={item.name}
                            price={item.price}
                            thumbnail={item.image}/>
                    </li>
                })}
            </div>
            <li className={styles.item__bottom} key={lastItem._id}>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${buns.name} (низ)`}
                    price={buns.price}
                    thumbnail={buns.image}/>
            </li>
        </ul>
    );
};

ConstructorList.propTypes = {
    data: PropTypes.arrayOf(dataPropTypes).isRequired
}

export default ConstructorList;
