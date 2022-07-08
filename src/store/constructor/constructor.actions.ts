import { TData } from '../../types/types';

export enum RootConstructorAction {
	ADD_BUNS = 'ADD_BUNS',
	ADD_INGREDIENTS = 'ADD_INGREDIENTS',
	MOVE_INGREDIENT = 'MOVE_INGREDIENT',
	DELETE_INGREDIENT = 'DELETE_INGREDIENT',
	ClEAR_INGREDIENT = 'ClEAR_INGREDIENT',
}

interface IAddBuns {
	type: RootConstructorAction.ADD_BUNS;
	payload: TData;
}

interface IAddIngredients {
	type: RootConstructorAction.ADD_INGREDIENTS;
	payload: TData;
}

interface IMoveIngredients {
	type: RootConstructorAction.MOVE_INGREDIENT;
	payload: TData[];
}

interface IDeleteIngredients {
	type: RootConstructorAction.DELETE_INGREDIENT;
	payload?: number;
}

interface IClearIngredients {
	type: RootConstructorAction.ClEAR_INGREDIENT;
}

export type TConstructorAction =
	| IAddBuns
	| IAddIngredients
	| IMoveIngredients
	| IDeleteIngredients
	| IClearIngredients;

export const addBunsAction = (payload: TData): TConstructorAction => ({
	type: RootConstructorAction.ADD_BUNS,
	payload,
});

export const addIngredientsAction = (payload: TData): TConstructorAction => ({
	type: RootConstructorAction.ADD_INGREDIENTS,
	payload,
});

export const moveIngredientsActions = (
	payload: TData[]
): TConstructorAction => ({
	type: RootConstructorAction.MOVE_INGREDIENT,
	payload,
});

export const deleteIngredientsActions = (
	payload?: number
): TConstructorAction => ({
	type: RootConstructorAction.DELETE_INGREDIENT,
	payload,
});

export const clearIngredientsActions = (): TConstructorAction => ({
	type: RootConstructorAction.ClEAR_INGREDIENT,
});
