import React from 'react';
import styles from './ingredientPage.module.css';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";

const IngredientPage = () => {
    const items = useSelector((store) => store.data.ingredientsData);
    const history = useHistory();
    const id = history.location.pathname.replace("/ingredients/", "");

    return (
        <section className={ styles.main }>
            {items && (
                <IngredientDetails
                    details={items.filter((el) => el._id === id)[0]}
                />
            )}
        </section>
    );
};

export default IngredientPage;