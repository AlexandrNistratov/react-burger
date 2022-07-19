import { initialState, socketReducer } from './socket.reducers';
import { TSocketAction, socketActionCreators } from './socket.actions';
import { ordersSocket } from "../../utils/mocks/mocks";

describe('Socket', () => {
    const { success, error, message, close } = socketActionCreators;
    it('Проверка начального состояния ', () => {
        const result = socketReducer(initialState, {} as TSocketAction);
        expect(result).toEqual(initialState)
    });
    it('Подключились к сокетам', () => {
        const result = socketReducer(initialState, success());
        expect(result).toEqual({ ...initialState, connected: true})
    });
    it('Ошибка при подключении к сокетам', () => {
        const result = socketReducer(initialState, error());
        expect(result).toEqual({ ...initialState, connected: false})
    });
    it('Получили данные от сокетов', () => {
        const result = socketReducer(initialState, message(ordersSocket));
        expect(result).toEqual({ ...initialState, messages: ordersSocket.orders, total: ordersSocket.total, totalToday: ordersSocket.totalToday})
    });
    it('Закрыли подключение к сокету', () => {
        const result = socketReducer(initialState, close());
        expect(result).toEqual({ ...initialState })
    });
})