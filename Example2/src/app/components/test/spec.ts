import {
    it,
    inject,
    describe,
    beforeEachProviders
} from '@angular/core/testing';

import {Component, provide} from '@angular/core';

// Load the implementations that should be tested
import {Test} from './index.async';

describe('Test', () => {
    beforeAll(() => {
    });

    // provide our implementations or mocks to the dependency injector
    beforeEachProviders(() => [
        Test
    ]);


});
