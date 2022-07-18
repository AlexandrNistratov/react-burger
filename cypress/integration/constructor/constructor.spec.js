describe('Создание заказа', () => {
   before(() => {
       cy.visit('http://localhost:3000');
   })
    it('Зашли на главную', () => {
        cy.visit('http://localhost:3000');
        cy.wait(1000);
    });
    it('Перетаскивание булки', () => {
        cy.get('[ data-at="ingredient" ]').first().trigger('dragstart');
        cy.get('[ data-at="constructorBuns" ]').trigger('drop')
    });
    it('Перетаскивание ингредиента', () => {
        cy.get('[ data-at="ingredient" ]').contains('Филе').trigger('dragstart');
        cy.get('[ data-at="constructorIngredient" ]').trigger('drop');

        cy.get('[ data-at="ingredient" ]').contains('Биокотлета').trigger('dragstart');
        cy.get('[ data-at="constructorIngredient" ]').trigger('drop')
    });
    it('Создание заказа', () => {
        cy.get('button').contains('Оформить заказ').click();
    });
    it('Авторизация', () => {
        cy.get('[ name="email" ]').focus().type('koss32@ya.ru');
        cy.get('[ name="password" ]').focus().type('koss32@ya.ru');
        cy.get('[ type="submit" ]').click();
        cy.intercept("POST", "https://norma.nomoreparties.space/api/auth/login");
        cy.wait(1000);
    });
    it('Модальные окна открываются', () => {
        cy.get('button').contains('Оформить заказ').click();
        cy.get("[class^=modalOverlay_main__]");
    });
    it('Модальные окна закрываются', () => {
        cy.get("[class^=modal_icon__]").click();
    });
});