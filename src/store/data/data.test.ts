import { initialState, dataReducer } from './data.reducers';
import { dataActionCreator, TDataAction } from './data.actions';
import  { ingredient } from "../../utils/mocks/mocks";

describe('Data', () => {
    const { dataRequest, dataSuccess, dataError } = dataActionCreator;
    it('Проверка начального состояния ',   () => {
        const result = dataReducer(undefined, {} as TDataAction);
        expect(result).toEqual(initialState)
    });
    it('Запросили данные', () => {
        const result = dataReducer(initialState, dataRequest());
        expect(result).toEqual({ ...initialState, dataRequest: true, dataFailed: false, ingredientsData: [] })
    });
    it('Получили данные', () => {
        const result = dataReducer(initialState, dataSuccess([ingredient]));
        expect(result).toEqual({ ...initialState, dataRequest:false, dataFailed: false, ingredientsData: [{ ...ingredient }] })
    });
    it('Ошибка получения данных', () => {
        const result = dataReducer(initialState, dataError());
        expect(result).toEqual({ ...initialState, dataRequest:false, dataFailed: true, ingredientsData: [] })
    });
})