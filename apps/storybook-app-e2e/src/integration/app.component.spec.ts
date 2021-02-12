describe('storybook-app', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));

  it('should render the component', () => {
    cy.get('storybook-app-root').should('exist');
  });
});
