import { renderBlock } from './lib.js'


export class Person {
  username: string
  avatarUrl: string

  constructor(username: string, avatarUrl: string) {
    this.username = username
    this.avatarUrl = avatarUrl
  }
}

const person1 = new Person('Ann Smith', './img/avatar.png');
const favourites = 4;
localStorage.setItem('user', JSON.stringify(person1));
localStorage.setItem('favoritesAmount', favourites.toString());


export function getFavoritesAmount(key: string): unknown {
  const resp = localStorage.getItem(key);
  if (resp == null) {
    return 0;
  } if (typeof (resp) == 'string') {
    return parseInt(resp);
  }
}

export function getUserData(key: string): Person {
  const resp = localStorage.getItem(key);
  if (resp == null) {
    return null;
  }
  let value: unknown;
  let person: Person;
  try {
    value = JSON.parse(resp);
    person = value as Person;
  } catch {
    return null
  }
  return person;
}

export function renderUserBlock(userName: string, avatarLink: string, favoriteItemsAmount?: number) {
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount ? true : false;

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src=${avatarLink} alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}
