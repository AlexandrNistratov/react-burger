import { initialState, ordersDetailsReducer } from './orderDetails.reducers';
import { TOrdersDetailsAction, orderDetailsActionCreator } from './ordersDetails.actions';
import { orderDetails } from "../../utils/mocks/mocks";

describe('OrdersDetails', () => {
    const { getOrdersDetails, deleteOrdersDetails } = orderDetailsActionCreator;
    it('Проверка начального состояния', () => {
        const result = ordersDetailsReducer(initialState, {} as TOrdersDetailsAction);
        expect(result).toEqual(initialState)
    });
    it('Запросили детали заказа ', () => {
        const result = ordersDetailsReducer(initialState, getOrdersDetails(orderDetails));
        expect(result).toEqual({ ...initialState, orderDetails: orderDetails })
    });
    it('Очистили детали заказа', () => {
        const result = ordersDetailsReducer(initialState, deleteOrdersDetails());
        expect(result).toEqual({ ...initialState })
    })
})