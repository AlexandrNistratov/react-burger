import { detailsReducer , initialState } from './details.reducers';
import { detailsActionCreator, TDetailsAction } from './details.actions';
import { ingredientDetails } from '../../utils/mocks/mocks';

describe('Details', () => {
    const { getDetails, deleteDetails } = detailsActionCreator;
    it('Проверка начального состояния ',   () => {
        const result = detailsReducer(undefined, {} as TDetailsAction);
        expect(result).toEqual(initialState);
    });
    it('Запросили данные',   () => {
        const result = detailsReducer(initialState, getDetails(ingredientDetails));
        expect(result).toEqual({ ...initialState, ingredientsDetails: ingredientDetails });
    });
    it('Очистили детали',   () => {
        const result = detailsReducer(initialState, deleteDetails());
        expect(result).toEqual({ ...initialState });
    });
})