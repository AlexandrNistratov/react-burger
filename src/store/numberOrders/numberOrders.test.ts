import { initialState, numberOrderReducer } from './numberOrders.reducers';
import { TNumberOrdersAction, numberOrdersActionCreator } from './numberOrders.actions';
import  { numberOrder } from "../../utils/mocks/mocks";

describe('NumberOrders', () => {
    const { numberOrdersRequest, numberOrdersSuccess, numberOrdersError } = numberOrdersActionCreator;
    it('Проверка начальногс остояния', () => {
        const result = numberOrderReducer(initialState, {} as TNumberOrdersAction);
        expect(result).toEqual(initialState)
    });
    it('Запросили номер заказа', () => {
        const result = numberOrderReducer(initialState, numberOrdersRequest());
        expect(result).toEqual({ ...initialState, ordersNumberRequest: true, ordersNumberFailed: false, ordersNumber: { ...initialState.ordersNumber }})
    });
    it('Получили номер заказа', () => {
        const result = numberOrderReducer(initialState, numberOrdersSuccess(numberOrder));
        expect(result).toEqual({ ...initialState, ordersNumberRequest: false, ordersNumberFailed: false, ordersNumber: numberOrder  })
    });
    it('Ошибка получения номера заказа', () => {
        const result = numberOrderReducer(initialState, numberOrdersError());
        expect(result).toEqual({ ...initialState, ordersNumberRequest: false, ordersNumberFailed: true, ordersNumber: { ...initialState.ordersNumber } })
    });
})