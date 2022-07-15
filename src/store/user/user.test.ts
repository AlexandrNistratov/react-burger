import { initialState, userReducer } from './user.reducers';
import { TUserAction, userActionCreator } from './user.actions';
import { user } from "../../utils/mocks/mocks";

describe('User', () => {
    const { userRequest, userSuccess, userFailed,
        registrationRequest, registrationSuccess, registrationFailed,
        loginRequest, loginSuccess, loginFailed,
        userUpdateRequest, userUpdateSuccess, userUpdateFailed,
        out, setEdit} = userActionCreator;
    it('Проверка начального состояния', () => {
        const result = userReducer(initialState, {} as TUserAction);
        expect(result).toEqual(initialState)
    });
    it('Запросили юзера', () => {
        const result = userReducer(initialState, userRequest());
        expect(result).toEqual({ ...initialState, getUserRequest: true })
    });
    it('Получили юзера', () => {
        const result = userReducer(initialState, userSuccess(user));
        expect(result).toEqual({ ...initialState, isAuth: true, isUser: true, user: user })
    });
    it('Ошбка получения юзера', () => {
        const result = userReducer(initialState, userFailed());
        expect(result).toEqual({ ...initialState, getUserFailed: true })
    });
    it('Начали регистрацию', () => {
        const result = userReducer(initialState, registrationRequest());
        expect(result).toEqual({ ...initialState, registrationRequest: true })
    });
    it('Зарегистрировались', () => {
        const result = userReducer(initialState, registrationSuccess(user));
        expect(result).toEqual({ ...initialState, registrationRequest: false, isAuth: true, isUser: true, user: user })
    });
    it('Ошибка регистрации', () => {
        const result = userReducer(initialState, registrationFailed());
        expect(result).toEqual({ ...initialState, registrationRequest: false, user: initialState.user, isUser: false, isAuth: false, registrationFailed: true })
    });
    it('Начали авторизацию', () => {
        const result = userReducer(initialState, loginRequest());
        expect(result).toEqual({ ...initialState, loginRequest: true })
    });
    it('Авторизовались', () => {
        const result = userReducer(initialState, loginSuccess(user));
        expect(result).toEqual({ ...initialState, loginRequest: false, user: user, isUser: true, isAuth: true })
    });
    it('Ошибка авторизации', () => {
        const result = userReducer(initialState, loginFailed());
        expect(result).toEqual({ ...initialState, loginRequest: false, user: initialState.user, loginFailed: true })
    });
    it('Начали обновление юзера', () => {
        const result = userReducer(initialState, userUpdateRequest());
        expect(result).toEqual({ ...initialState, userUpdateRequest: true })
    });
    it('Обновили юзера', () => {
        const result = userReducer(initialState, userUpdateSuccess(user));
        expect(result).toEqual({ ...initialState, userUpdateRequest: false,  user: user, isUser: true })
    });
    it('Ошибка обновления юзера', () => {
        const result = userReducer(initialState, userUpdateFailed());
        expect(result).toEqual({ ...initialState, userUpdateFailed: true })
    });
    it('Выход', () => {
        const result = userReducer(initialState, out());
        expect(result).toEqual({ ...initialState, user: initialState.user, isUser: false, isAuth: false, loginFailed: false })
    });
    //Вот тут непонятно  Получается один в один как обновление
    it('Чендж инпутов', () => {
        const result = userReducer(initialState, setEdit(user));
        expect(result).toEqual({ ...initialState, user: user })
    });
})