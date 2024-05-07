import { createElement } from './render';

const element = createElement('<button>Click!</button>');
const main = document.body.querySelector('main .page-body__container');
main.prepend(element);
