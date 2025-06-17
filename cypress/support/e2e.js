// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
const devices = require('./config/devices');

beforeEach(() => {
    const envViewport = Cypress.env('device') || 'desktop';
    const device = devices[envViewport];

    if (device) {
        cy.viewport(device.width, device.height);
        Cypress.log({
            name: 'Setting device viewport',
            message: `${envViewport} (${device.width}x${device.height})`,
        });
    } else {
        throw new Error(`Unknown device: ${envViewport}`);
    }
});