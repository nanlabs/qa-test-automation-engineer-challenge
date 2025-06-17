import BasePage from "./BasePage";

class DeleteAccountPage extends BasePage {
    protected path = '/delete_account';

    verifyAccountDeletedMessageIsVisible() {
        cy.get("*[data-qa='account-deleted']").contains(/Account Deleted!/i).should('be.visible');
    }
    clickContinueButton() {
        cy.get("*[data-qa='continue-button']").click();
    }
} export default new DeleteAccountPage();