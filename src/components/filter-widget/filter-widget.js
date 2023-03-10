export default class FilterWidget {
  constructor(element, filterHandler) {
    if (typeof element === 'string') {
      this._element = document.querySelector(element); // поиск элемента по селектору
    }

    this._filterHandler = filterHandler;

    this.onFilter = this.onFilter.bind(this); // фиксирование контеста события

    this._filterText = this._element.querySelector('.filter-text'); // считывание текста из поля для фильтрации

    this._filterText.addEventListener('input', this.onFilter); // onFilter будет вызван в контексте элемента _filterFilter
  }

  onFilter(e) { // обработчик события
    e.preventDefault();

    if (this._timeout) {
      clearTimeout(this._timeout);
    }

    const text = this._filterText.value;
    this._timeout = setTimeout(() => this._filterHandler(text), 300);
  }
}
