export function filterBy(contacts, filterCallback) {
// принимает массив и коллбек (если вернет true -
// элемент массива остается в отфильтрованном результате)
  return contacts.filter(filterCallback);
}

export function containsPhone(data, search) {
  const clean = search.replace(/[+ ()]/g, ''); // удаление '+', ' ' и др.
  return data.startsWith(clean); // поиск номера в БД
}

export function containsText(data, search) { //
  const clean = search.trim();
  return data.toLowerCase().includes(clean.toLowerCase()); // проверяет содержимое
}
