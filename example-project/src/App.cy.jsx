import App from './App'

describe('<App />', () => {
  it('renders', () => {
    cy.mount(App)
    cy.get('a').contains('Learn Solid')
  })
})