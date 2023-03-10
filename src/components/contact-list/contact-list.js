import data from './contact-list.json';
import './contact-list.css';
import { containsPhone, containsText, filterBy } from '../../js/filter';

const filterCb = (search, contact) => containsPhone(contact.phone_number, search) || containsText(`${contact.first_name} ${contact.last_name}`, search);
// каллбек фильтрации пользователей, search - строка поиска
export default class ContactList {
  constructor(element) {
    if (typeof element === 'string') {
      this._element = document.querySelector(element); // поиск элемента по селектору
    }
    this.filter = this.filter.bind(this);
    this._users = data;
  }

  renderItem(contact) { // ссылки на аватар лежат в томже репо
    return `
            <li class="contact-list-item">
                <div class="contact-main">
                    <img src="https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/${contact.picture}" class="contact-list-item-img" alt="">
                    <span class="contact-list-item-name">${`${contact.first_name} ${contact.last_name}`}</span>
                    <span class="contact-list-item-phone">${contact.phone_number}</span>
                    <a href="tel:${contact.phone_number}" class="contact-list-item-action">Звонок</a>
                </div>
                <div class="contact-list-item-details hidden">Подробная информация о клиенте: ${contact.username}</div>
            </li>
        `;
  }// вывод верстки элемента в контейнер с помощью innerHTML

  _clear() { // очистка контейнера
    const items = this._element.querySelectorAll('.contact-list-item');

    for (const child of items) {
      child.remove();
    }
  }

  _renderItems(items) {
    this._clear();
    items.forEach((user) => { // код элемента списка получаем с помощью метода rendorItem
      const itemHtml = this.renderItem(user);
      this._element.insertAdjacentHTML('beforeend', itemHtml);
    });
  }

  renderUsers() {
    this._renderItems(this._users);
  }

  filter(text) {
    const filterCallback = filterCb.bind(null, text);
    // с помощью метода .bind() закрепляется контекст строки поиска,
    // которая передана аргументом
    this._renderItems(filterBy(this._users, filterCallback));
  }
}
