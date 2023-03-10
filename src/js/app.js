import FilterWidget from '../components/filter-widget/filter-widget';
import ContactList from '../components/contact-list/contact-list';

const contactList = new ContactList('.contact-list');
/* eslint-disable */
new FilterWidget('.filter-widget', contactList.filter);
/* eslint-enable */
contactList.renderUsers();
