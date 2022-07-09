import React, { FC } from 'react';
import styles from './ingredientPage.module.css';
import { useSelector } from '../../types';
import { useHistory } from "react-router-dom";
import IngredientDetails from "../../components/IngredientDetails/IngredientDetails";

const IngredientPage: FC = () => {
    const items = useSelector(state => state.data.ingredientsData);

    const history = useHistory();
    const id = history.location.pathname.replace("/ingredients/", "");

    return (
        <section className={ styles.main }>
            {items && (
                <IngredientDetails
                    details={ items.filter((el: any) => el._id === id)[0] }
                />
            )}
        </section>
    );
};

export default IngredientPage;