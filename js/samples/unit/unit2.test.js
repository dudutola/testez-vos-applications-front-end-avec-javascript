import { getAge } from "./unit2";


describe('getAge Unit Test Suites', () => {
  it('should render "Vous avez actuellement 25 ans"', () => {
    expect(getAge(25)).toBe("Vous avez actuellement 25 ans")
  })
})
