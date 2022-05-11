import React, { useRef } from 'react';
import styles from './constructorItem.module.css';
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDrag, useDrop} from "react-dnd";

const ConstructorItem = ({item, index, deleteHandler, isLocked, position, type, moveIngredients}) => {
    const ref = null;
    //Перетаскивание внутри конструктора
    const [{opacity}, dragRef] = useDrag({
        type: 'item',
        item: (item) => {
            return {item}
        },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0 : 1
        })
    })

    const [, dropRef] = useDrop({
        accept: 'item',
        hover: (item, monitor) => {
            const dragIndex = item.index;
            console.log(item)
            const hoverIndex = index;
            moveIngredients(dragIndex, hoverIndex)
        }
    })

    dragRef(dropRef(ref));

    return (
        <div className={styles.main} ref={ isLocked && dragRef } style={ { opacity } }>
            {isLocked &&
                <div className={styles.wrapper}>
                    <DragIcon type="primary"/>
                </div>
            }
            <ConstructorElement
                type={ type }
                text={ position ? `${item.name} ${position}` : `${item.name}`}
                price={item.price}
                thumbnail={item.image}
                handleClose={() => deleteHandler(item._id)}>
            </ConstructorElement>
        </div>
    );
}

export default ConstructorItem;