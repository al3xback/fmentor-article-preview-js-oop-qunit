import jsdom from 'jsdom';

import { Component, Header, Card, Main, Footer } from '../js/util.js';

const { JSDOM } = jsdom;
const { test } = QUnit;

QUnit.module('DOM', (hooks) => {
	hooks.beforeEach(() => {
		const { document } = new JSDOM(
			`<!DOCTYPE html><html><body></body></html>`
		).window;
		global.document = document;
	});

	test("should be able to create element via 'Component' class method", (assert) => {
		const component = new Component();
		const divEl = component.createElement('div', 'wrapper', 'Some content');
		document.body.appendChild(divEl);

		const isDivElExist = !!document.querySelector('.wrapper');
		assert.ok(isDivElExist);
	});

	test("should be able to return element attribute data via 'Component' class method", (assert) => {
		const component = new Component();
		const altData = component.createElementAttribute('alt', 'drawer');

		const expectedAltData = {
			name: 'alt',
			value: 'drawer',
		};

		assert.deepEqual(altData, expectedAltData);
	});

	test("should be able to create header element via 'Header' class", (assert) => {
		const header = new Header();
		const headerEl = header.render();
		document.body.appendChild(headerEl);

		const isHeaderElExist = !!document.querySelector('header');
		assert.ok(isHeaderElExist);
	});

	test("should be able to create card element via 'Card' class", (assert) => {
		const card = new Card();
		const cardEl = card.render();
		document.body.appendChild(cardEl);

		const isCardElExist = !!document.querySelector('.card');
		assert.ok(isCardElExist);
	});

	test("should be able to create main element via 'Main' class", (assert) => {
		const main = new Main();
		const mainEl = main.render();
		document.body.appendChild(mainEl);

		const isMainElExist = !!document.querySelector('main');
		assert.ok(isMainElExist);
	});

	test("should be able to create footer element via 'Footer' class", (assert) => {
		const footer = new Footer();
		const footerEl = footer.render();
		document.body.appendChild(footerEl);

		const isFooterElExist = !!document.querySelector('footer');
		assert.ok(isFooterElExist);
	});
});
