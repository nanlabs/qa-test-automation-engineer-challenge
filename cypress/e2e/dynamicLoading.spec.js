import dynamicLoadingPage from '../pages/DynamicLoadingPage';

describe('Dynamic Loading Test', () => {
    beforeEach(() => {
        dynamicLoadingPage.visit();
    });

    it('Should display "Hello World!" after loading finishes', () => {
        dynamicLoadingPage.clickStart();
        dynamicLoadingPage.assertLoading();
        dynamicLoadingPage.assertResultText('Hello World!');
    });
});
