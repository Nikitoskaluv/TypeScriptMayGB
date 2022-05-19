import { renderBlock } from './lib.js';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91c2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxVQUFVLENBQUE7QUFFdEMsTUFBTSxVQUFVLGVBQWUsQ0FBQyxRQUFnQixFQUFFLFVBQWtCLEVBQUUsbUJBQTJCO0lBQy9GLE1BQU0sZ0JBQWdCLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUE7SUFDakYsTUFBTSxnQkFBZ0IsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUE7SUFFM0QsV0FBVyxDQUNULFlBQVksRUFDWjs7Z0NBRTRCLFVBQVU7OzRCQUVkLFFBQVE7O2tDQUVGLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxnQkFBZ0I7Ozs7S0FJdkYsQ0FDRixDQUFBO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckJsb2NrIH0gZnJvbSAnLi9saWIuanMnXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJVc2VyQmxvY2sodXNlck5hbWU6IHN0cmluZywgYXZhdGFyTGluazogc3RyaW5nLCBmYXZvcml0ZUl0ZW1zQW1vdW50OiBudW1iZXIpIHtcbiAgY29uc3QgZmF2b3JpdGVzQ2FwdGlvbiA9IGZhdm9yaXRlSXRlbXNBbW91bnQgPyBmYXZvcml0ZUl0ZW1zQW1vdW50IDogJ9C90LjRh9C10LPQviDQvdC10YInXG4gIGNvbnN0IGhhc0Zhdm9yaXRlSXRlbXMgPSBmYXZvcml0ZUl0ZW1zQW1vdW50ID8gdHJ1ZSA6IGZhbHNlXG5cbiAgcmVuZGVyQmxvY2soXG4gICAgJ3VzZXItYmxvY2snLFxuICAgIGBcbiAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyLWNvbnRhaW5lclwiPlxuICAgICAgPGltZyBjbGFzcz1cImF2YXRhclwiIHNyYz0ke2F2YXRhckxpbmt9IGFsdD1cIldhZGUgV2FycmVuXCIgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJuYW1lXCI+JHt1c2VyTmFtZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJmYXZcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiaGVhcnQtaWNvbiR7aGFzRmF2b3JpdGVJdGVtcyA/ICcgYWN0aXZlJyA6ICcnfVwiPjwvaT4ke2Zhdm9yaXRlc0NhcHRpb259XG4gICAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYFxuICApXG59XG4iXX0=