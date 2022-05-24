import { renderBlock } from './lib.js';
export class Person {
    constructor(username, avatarUrl) {
        this.username = username;
        this.avatarUrl = avatarUrl;
    }
}
const person1 = new Person('Ann Smith', './img/avatar.png');
const favourites = 'd333';
localStorage.setItem('user', JSON.stringify(person1));
localStorage.setItem('favoritesAmount', favourites.toString());
export function getFavoritesAmount(key) {
    const resp = localStorage.getItem(key);
    const numResp = Number(resp);
    if (isNaN(numResp)) {
        return 0;
    }
    if (typeof (numResp) == 'number') {
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
export function getUserData(key) {
    const resp = JSON.parse(localStorage.getItem(key));
    if (typeof resp === 'object') {
        if ('username' in resp && 'avatarUrl' in resp) {
            return resp;
        }
    }
    else {
        return null;
    }
}
export function renderUserBlock(userName, avatarLink, favoriteItemsAmount) {
    const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет';
    const hasFavoriteItems = favoriteItemsAmount ? true : false;
    renderBlock('user-block', `
    <div class="header-container">
      <img class="avatar" src=${avatarLink} alt="Wade Warren" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFHdEMsTUFBTSxPQUFPLE1BQU07SUFJakIsWUFBWSxRQUFnQixFQUFFLFNBQWlCO1FBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFBO0lBQzVCLENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQzVELE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQztBQUMxQixZQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDdEQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUcvRCxNQUFNLFVBQVUsa0JBQWtCLENBQUMsR0FBVztJQUM1QyxNQUFNLElBQUksR0FBWSxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hELE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNsQixPQUFPLENBQUMsQ0FBQztLQUNWO0lBQUMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksUUFBUSxFQUFFO1FBQ2xDLE9BQU8sT0FBTyxDQUFDO0tBQ2hCO0FBQ0gsQ0FBQztBQUVELHFEQUFxRDtBQUNyRCw0Q0FBNEM7QUFDNUMsd0JBQXdCO0FBQ3hCLG1CQUFtQjtBQUNuQixNQUFNO0FBQ04sd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QixVQUFVO0FBQ1YsZ0NBQWdDO0FBQ2hDLGdDQUFnQztBQUNoQyxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCLE1BQU07QUFDTixtQkFBbUI7QUFDbkIsSUFBSTtBQUVKLE1BQU0sVUFBVSxXQUFXLENBQUMsR0FBVztJQUNyQyxNQUFNLElBQUksR0FBWSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM1RCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUM1QixJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksV0FBVyxJQUFJLElBQUksRUFBRTtZQUM3QyxPQUFPLElBQWMsQ0FBQztTQUN2QjtLQUNGO1NBQU07UUFDTCxPQUFPLElBQUksQ0FBQTtLQUNaO0FBQ0gsQ0FBQztBQUdELE1BQU0sVUFBVSxlQUFlLENBQUMsUUFBZ0IsRUFBRSxVQUFrQixFQUFFLG1CQUE0QjtJQUNoRyxNQUFNLGdCQUFnQixHQUFHLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFBO0lBQ2pGLE1BQU0sZ0JBQWdCLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBRTVELFdBQVcsQ0FDVCxZQUFZLEVBQ1o7O2dDQUU0QixVQUFVOzs0QkFFZCxRQUFROztrQ0FFRixnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsZ0JBQWdCOzs7O0tBSXZGLENBQ0YsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJ1xuXG5cbmV4cG9ydCBjbGFzcyBQZXJzb24ge1xuICB1c2VybmFtZTogc3RyaW5nXG4gIGF2YXRhclVybDogc3RyaW5nXG5cbiAgY29uc3RydWN0b3IodXNlcm5hbWU6IHN0cmluZywgYXZhdGFyVXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWVcbiAgICB0aGlzLmF2YXRhclVybCA9IGF2YXRhclVybFxuICB9XG59XG5cbmNvbnN0IHBlcnNvbjEgPSBuZXcgUGVyc29uKCdBbm4gU21pdGgnLCAnLi9pbWcvYXZhdGFyLnBuZycpO1xuY29uc3QgZmF2b3VyaXRlcyA9ICdkMzMzJztcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkocGVyc29uMSkpO1xubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zhdm9yaXRlc0Ftb3VudCcsIGZhdm91cml0ZXMudG9TdHJpbmcoKSk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZhdm9yaXRlc0Ftb3VudChrZXk6IHN0cmluZyk6IHVua25vd24ge1xuICBjb25zdCByZXNwOiB1bmtub3duID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgY29uc3QgbnVtUmVzcCA9IE51bWJlcihyZXNwKTtcbiAgaWYgKGlzTmFOKG51bVJlc3ApKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gaWYgKHR5cGVvZiAobnVtUmVzcCkgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gbnVtUmVzcDtcbiAgfVxufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0VXNlckRhdGEoa2V5OiBzdHJpbmcpOiBQZXJzb24ge1xuLy8gICBjb25zdCByZXNwID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbi8vICAgaWYgKHJlc3AgPT0gbnVsbCkge1xuLy8gICAgIHJldHVybiBudWxsO1xuLy8gICB9XG4vLyAgIGxldCB2YWx1ZTogdW5rbm93bjtcbi8vICAgbGV0IHBlcnNvbjogUGVyc29uO1xuLy8gICB0cnkge1xuLy8gICAgIHZhbHVlID0gSlNPTi5wYXJzZShyZXNwKTtcbi8vICAgICBwZXJzb24gPSB2YWx1ZSBhcyBQZXJzb247XG4vLyAgIH0gY2F0Y2gge1xuLy8gICAgIHJldHVybiBudWxsXG4vLyAgIH1cbi8vICAgcmV0dXJuIHBlcnNvbjtcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJEYXRhKGtleTogc3RyaW5nKTogUGVyc29uIHtcbiAgY29uc3QgcmVzcDogdW5rbm93biA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG4gIGlmICh0eXBlb2YgcmVzcCA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAoJ3VzZXJuYW1lJyBpbiByZXNwICYmICdhdmF0YXJVcmwnIGluIHJlc3ApIHtcbiAgICAgIHJldHVybiByZXNwIGFzIFBlcnNvbjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJVc2VyQmxvY2sodXNlck5hbWU6IHN0cmluZywgYXZhdGFyTGluazogc3RyaW5nLCBmYXZvcml0ZUl0ZW1zQW1vdW50PzogbnVtYmVyKSB7XG4gIGNvbnN0IGZhdm9yaXRlc0NhcHRpb24gPSBmYXZvcml0ZUl0ZW1zQW1vdW50ID8gZmF2b3JpdGVJdGVtc0Ftb3VudCA6ICfQvdC40YfQtdCz0L4g0L3QtdGCJ1xuICBjb25zdCBoYXNGYXZvcml0ZUl0ZW1zID0gZmF2b3JpdGVJdGVtc0Ftb3VudCA/IHRydWUgOiBmYWxzZTtcblxuICByZW5kZXJCbG9jayhcbiAgICAndXNlci1ibG9jaycsXG4gICAgYFxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItY29udGFpbmVyXCI+XG4gICAgICA8aW1nIGNsYXNzPVwiYXZhdGFyXCIgc3JjPSR7YXZhdGFyTGlua30gYWx0PVwiV2FkZSBXYXJyZW5cIiAvPlxuICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICA8cCBjbGFzcz1cIm5hbWVcIj4ke3VzZXJOYW1lfTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImZhdlwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJoZWFydC1pY29uJHtoYXNGYXZvcml0ZUl0ZW1zID8gJyBhY3RpdmUnIDogJyd9XCI+PC9pPiR7ZmF2b3JpdGVzQ2FwdGlvbn1cbiAgICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgXG4gIClcbn1cbiJdfQ==