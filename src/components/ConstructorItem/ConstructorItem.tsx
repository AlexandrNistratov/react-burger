import React, { useRef, FC } from 'react';
import styles from './constructorItem.module.css';
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from "react-dnd";
import { TData } from "../../utils/types";

type TConstructorItem = {
    item: TData;
    index: number;
    deleteHandler: (item: TData['_id']) => void;
    isLocked: boolean;
    moveIngredients: (dragIndex: number, hoverIndex: number) => void;
}

const ConstructorItem: React.FC<TConstructorItem> = ({ item, index, deleteHandler, isLocked, moveIngredients }) => {
    const ref = useRef<HTMLInputElement>(null);

    const { id } = item;

    //Перетаскивание внутри конструктора
    const [{ opacity }, dragRef] = useDrag({
        type: 'item',
        item: { id, index },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0 : 1
        })
    });

    const [, dropRef] = useDrop({
        accept: 'item',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover: (item: { index: number}, monitor) => {
            if (!ref.current) {
                return
            }

            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return
            }
            const hoverBoundingRect = ref.current?.getBoundingClientRect()
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
            const clientOffset= monitor.getClientOffset() as { x:number, y: number };

            const hoverClientY = clientOffset.y - hoverBoundingRect.top

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return
            }

            moveIngredients(dragIndex, hoverIndex)

            item.index = hoverIndex


        }
    })

    dragRef(dropRef(ref));

    return (
        <div className={ styles.main } style={ { opacity } }  ref={ ref }>
            <div className={ styles.wrapper }>
                <DragIcon type="primary"/>
            </div>
            <ConstructorElement
                isLocked={ isLocked }
                text={ item?.name }
                price={ item?.price }
                thumbnail={ item?.image }
                handleClose={() => deleteHandler(item._id)}>
            </ConstructorElement>
        </div>
    );
}

export default ConstructorItem;