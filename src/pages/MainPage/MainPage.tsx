import React, { FC } from 'react';
import styles from './mainPage.module.css';
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const MainPage: FC = () => {
    return (
        <section className={styles.main}>
            <DndProvider backend={ HTML5Backend } >
                <BurgerIngredients />
                <BurgerConstructor />
            </DndProvider>
        </section>
    );
};

export default MainPage;