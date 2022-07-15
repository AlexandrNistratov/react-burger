import { initialState, constructorReducer } from './constructor.reducers';
import { constructorActionCreator, TConstructorAction } from './constructor.actions';
import { ingredientBun, ingredient } from "../../utils/mocks/mocks";

describe('Constructor', () => {
    const { addBuns, addIngredients, move, clear, deleteItems } = constructorActionCreator;
    it('Проверка начального состояния ',   () => {
        const result = constructorReducer(undefined, {} as TConstructorAction);
        expect(result).toEqual(initialState)
    });
    it('Добавление булки ', () => {
        const result = constructorReducer(undefined, addBuns(ingredientBun));
        expect(result).toEqual({ ...initialState, bun: { ...ingredientBun }, ingredients: [] })
    });
    it('Добавление ингредиента ', () => {
        const result = constructorReducer(undefined, addIngredients(ingredient));
        expect(result).toEqual({ ...initialState, bun: null, ingredients: [{ ...ingredient }] })
    });
    it('Удаление ингредиента ', () => {
        const result = constructorReducer(undefined, deleteItems(0));
        expect(result).toEqual({ ...initialState, bun: null, ingredients: [] })
    });
    it('Перетаскивание ингредиента ', () => {
        const result = constructorReducer(undefined, move([ingredient]));
        expect(result).toEqual({ ...initialState, bun: null, ingredients: [{ ...ingredient }] })
    });
    it('Очистка констуктора ', () => {
        const result = constructorReducer(undefined, clear());
        expect(result).toEqual({ ...initialState, bun: null, ingredients: [] })
    });
})