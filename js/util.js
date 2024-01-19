class Component {
	createElementAttribute(name, value) {
		return {
			name,
			value,
		};
	}

	createElement(tag, className, text, attributes) {
		const newElement = document.createElement(tag);
		if (className) {
			newElement.className = className;
		}
		newElement.textContent = text || '';
		if (attributes && attributes.length > 0) {
			for (const attr of attributes) {
				newElement.setAttribute(attr.name, attr.value);
			}
		}
		return newElement;
	}
}

class Header extends Component {
	render() {
		const headerEl = this.createElement('header');

		const headerTitleEl = this.createElement(
			'h1',
			'sr-only',
			'Article preview component'
		);

		headerEl.appendChild(headerTitleEl);

		return headerEl;
	}
}

class Card extends Component {
	render() {
		const cardEl = this.createElement('article', 'card');

		/* card image */
		const cardImageWrapperEl = this.createElement('div', 'card__image');

		const cardImageInnerEl = this.createElement('div', 'card__image-inner');

		const cardImageEl = this.createElement('img', null, null, [
			this.createElementAttribute('src', './images/drawers.jpg'),
			this.createElementAttribute('alt', ''),
			this.createElementAttribute('width', 280),
			this.createElementAttribute('height', 278),
		]);

		cardImageInnerEl.appendChild(cardImageEl);

		cardImageWrapperEl.appendChild(cardImageInnerEl);

		/* card content */
		const cardContentEl = this.createElement('div', 'card__content');

		/* card title */
		const cardTitleEl = this.createElement(
			'h2',
			'card__title',
			'Shift the overall look and feel by adding these wonderful touches to furniture in your home'
		);

		/* card description */
		const cardDescriptionEl = this.createElement(
			'p',
			'card__desc',
			"Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I've got some simple tips to help you make any room feel complete."
		);

		/* card author */
		const cardAuthorEl = this.createElement('div', 'card__author');

		const cardAuthorImageWrapperEl = this.createElement(
			'div',
			'card__author-img-box'
		);

		const cardAuthorImageEl = this.createElement(
			'img',
			'card__author-img',
			null,
			[
				this.createElementAttribute('src', './images/avatar.jpg'),
				this.createElementAttribute('alt', 'Michelle Appleton'),
				this.createElementAttribute('width', 40),
				this.createElementAttribute('height', 40),
			]
		);

		cardAuthorImageWrapperEl.appendChild(cardAuthorImageEl);

		const cardAuthorInfoEl = this.createElement('div', 'card__author-info');

		const cardAuthorNameEl = this.createElement(
			'h3',
			'card__author-name',
			'Michelle Appleton'
		);

		const cardAuthorPostDateEl = this.createElement(
			'p',
			'card__author-post-date',
			'28 Jun 2020'
		);

		cardAuthorInfoEl.appendChild(cardAuthorNameEl);
		cardAuthorInfoEl.appendChild(cardAuthorPostDateEl);

		cardAuthorEl.appendChild(cardAuthorImageWrapperEl);
		cardAuthorEl.appendChild(cardAuthorInfoEl);

		/* card share */
		const cardShareEl = this.createElement('div', 'card__share');

		const cardShareCheckboxEl = this.createElement(
			'input',
			'card__share-checkbox'
		);
		cardShareCheckboxEl.type = 'checkbox';
		cardShareCheckboxEl.name = 'toggle';
		cardShareCheckboxEl.id = 'share-toggle';

		const cardShareBoxEl = this.createElement('div', 'card__share-box');

		const cardShareActionEl = this.createElement(
			'div',
			'card__share-action'
		);

		const cardShareActionTextEl = this.createElement(
			'span',
			'card__share-action-txt',
			'Share'
		);

		const cardShareActionButtonListEl = this.createElement(
			'ul',
			'card__share-action-buttons'
		);

		const shareActionButtons = ['facebook', 'twitter', 'pinterest'];

		for (const shareActionButton of shareActionButtons) {
			const cardShareActionButtonItemEl = this.createElement('li');

			const cardShareActionButtonItemLinkEl = this.createElement(
				'a',
				null,
				null,
				[
					this.createElementAttribute('href', '#'),
					this.createElementAttribute(
						'title',
						`Share on ${shareActionButton}`
					),
				]
			);

			const cardShareActionButtonItemLinkIconEl = this.createElement(
				'i',
				`icon-${shareActionButton}`
			);
			cardShareActionButtonItemLinkIconEl.ariaHidden = 'true';

			cardShareActionButtonItemLinkEl.appendChild(
				cardShareActionButtonItemLinkIconEl
			);

			cardShareActionButtonItemEl.appendChild(
				cardShareActionButtonItemLinkEl
			);

			cardShareActionButtonListEl.appendChild(
				cardShareActionButtonItemEl
			);
		}

		cardShareActionEl.appendChild(cardShareActionTextEl);
		cardShareActionEl.appendChild(cardShareActionButtonListEl);

		const cardShareToggleButtonEl = this.createElement(
			'label',
			'btn btn--icon btn--share-toggle'
		);
		cardShareToggleButtonEl.htmlFor = 'share-toggle';
		cardShareToggleButtonEl.innerHTML =
			'<svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"></svg>';

		const cardShareToggleButtonIconEl = document.createElementNS(
			'http://www.w3.org/2000/svg',
			'path'
		);
		cardShareToggleButtonIconEl.setAttribute('fill', 'currentColor');
		cardShareToggleButtonIconEl.setAttribute(
			'd',
			'M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z'
		);

		cardShareToggleButtonEl.firstElementChild.appendChild(
			cardShareToggleButtonIconEl
		);

		cardShareBoxEl.appendChild(cardShareActionEl);
		cardShareBoxEl.appendChild(cardShareToggleButtonEl);

		cardShareEl.appendChild(cardShareCheckboxEl);
		cardShareEl.appendChild(cardShareBoxEl);

		cardContentEl.appendChild(cardTitleEl);
		cardContentEl.appendChild(cardDescriptionEl);
		cardContentEl.appendChild(cardAuthorEl);
		cardContentEl.appendChild(cardShareEl);

		cardEl.appendChild(cardImageWrapperEl);
		cardEl.appendChild(cardContentEl);

		return cardEl;
	}
}

class Main extends Component {
	render() {
		const mainEl = this.createElement('main');

		const mainContainerEl = this.createElement('div', 'container');

		const card = new Card();
		const cardEl = card.render();

		mainContainerEl.appendChild(cardEl);

		mainEl.appendChild(mainContainerEl);

		return mainEl;
	}
}

class Footer extends Component {
	render() {
		const footerEl = this.createElement('footer');

		const footerContainerEl = this.createElement('div', 'container');

		const footerTextEl = this.createElement('p', null, 'Challenge by ');

		const footerTextLinkCreatorEl = this.createElement(
			'a',
			'btn btn--link',
			'Frontend Mentor',
			[
				this.createElementAttribute(
					'href',
					'https://www.frontendmentor.io?ref=challenge'
				),
				this.createElementAttribute('rel', 'noopener'),
				this.createElementAttribute('target', '_blank'),
			]
		);

		const footerTextLinkCoderEl = this.createElement(
			'a',
			'btn btn--link',
			'al3xback',
			[
				this.createElementAttribute(
					'href',
					'https://github.com/al3xback'
				),
				this.createElementAttribute('rel', 'noopener'),
				this.createElementAttribute('target', '_blank'),
			]
		);

		footerTextEl.appendChild(footerTextLinkCreatorEl);
		footerTextEl.append('. Coded by ');
		footerTextEl.appendChild(footerTextLinkCoderEl);

		footerContainerEl.appendChild(footerTextEl);

		footerEl.appendChild(footerContainerEl);

		return footerEl;
	}
}

export { Component, Header, Card, Main, Footer };
