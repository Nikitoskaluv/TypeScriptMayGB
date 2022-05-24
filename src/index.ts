import { renderSearchFormBlock, transferData } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock, getUserData, getFavoritesAmount } from './user.js'
import { renderToast } from './lib.js'


window.addEventListener('DOMContentLoaded', () => {

  const personObj = getUserData('user');
  const fav = getFavoritesAmount('favoritesAmount');

  if (personObj == null) {
    console.error('Нет пользователя');
  } if (typeof (fav) == 'number') {
    renderUserBlock(personObj.username, personObj.avatarUrl, fav);
  }

  renderSearchFormBlock('', '');
  renderSearchStubBlock();
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )

  transferData();

})
