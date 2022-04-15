import React from 'react';
import styles from './constructorList.module.css';
import PropTypes from 'prop-types';
import {data} from "../../utils/data";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const ConstructorList = () => {
    const firstItem = data[1];
    const lastItem = data[data.length - 1];

    //Закреплена карточка?
    const isLocked = true;

    return (
        <ul className={styles.main}>
           <li className={styles.item} key={firstItem._id}>
               {isLocked &&
                   <div className={styles.wrapper}>
                       <DragIcon type="primary" />
                   </div>
               }
               <ConstructorElement
                   type="top"
                   isLocked={true}
                   text={firstItem.name}
                   price={firstItem.price}
                   thumbnail={firstItem.image}/>
           </li>
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
            <li className={styles.item} key={lastItem._id}>
                {isLocked &&
                    <div className={styles.wrapper}>
                        <DragIcon type="primary" />
                    </div>
                }
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={lastItem.name}
                    price={lastItem.price}
                    thumbnail={lastItem.image}/>
            </li>
        </ul>
    );
};

export default ConstructorList;
