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
const favourites = 'd333';
localStorage.setItem('user', JSON.stringify(person1));
localStorage.setItem('favoritesAmount', favourites.toString());


export function getFavoritesAmount(key: string): unknown {
  const resp: unknown = localStorage.getItem(key);
  const numResp = Number(resp);
  if (isNaN(numResp)) {
    return 0;
  } if (typeof (numResp) == 'number') {
    return numResp;
  }
}

// export function getUserData(key: string): Person {
//   const resp = localStorage.getItem(key);
//   if (resp == null) {
//     return null;
//   }
//   let value: unknown;
//   let person: Person;
//   try {
//     value = JSON.parse(resp);
//     person = value as Person;
//   } catch {
//     return null
//   }
//   return person;
// }

export function getUserData(key: string): Person {
  const resp: unknown = JSON.parse(localStorage.getItem(key));
  if (typeof resp === 'object') {
    if ('username' in resp && 'avatarUrl' in resp) {
      return resp as Person;
    }
  } else {
    return null
  }
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
