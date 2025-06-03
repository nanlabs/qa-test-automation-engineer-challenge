import dropdownPage from '../pages/DropdownPage';

describe('Dropdown selection', () => {
  beforeEach(() => {
    dropdownPage.visit();
  });

  it('Should select Option 1 and validate value and text', () => {
    dropdownPage.selectOption('1');
    dropdownPage.assertSelectedOptionValue('1');
    dropdownPage.assertSelectedOptionText('Option 1');
  });

  it('Should select Option 2 and validate value and text', () => {
    dropdownPage.selectOption('2');
    dropdownPage.assertSelectedOptionValue('2');
    dropdownPage.assertSelectedOptionText('Option 2');
  });

  it('Should not select an invalid option', () => {
    //Caso negativo falla porque no existe la opcion 3
    dropdownPage.tryToSelectInvalidOption('3');
    dropdownPage.assertSelectedOptionValue('');
  });
});
