import { renderBlock } from './lib.js';
;
export function searchFormData(id) {
    const form = document.querySelector('#form');
    const inputElement = form.querySelector(id);
    if (inputElement != null) {
        return inputElement.value;
    }
}
export let dataFromForm = {};
export function transferData() {
    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        dataFromForm = {
            city: searchFormData('#city'),
            checkInDate: searchFormData('#check-in-date'),
            checkOutDate: searchFormData('#check-out-date'),
            maxPrice: parseInt(searchFormData('#max-price'))
        };
        form.reset();
        search(dataFromForm, callbackForSearch);
    });
}
// export function search(object: FormObject): void {
//   console.log(object)
// }
function callbackForSearch(res) {
    console.log(res);
}
export function search(object, callback) {
    console.log(object);
    const a = [{}, {}];
    setTimeout(() => {
        callback(Math.random() < 0.5 ? 'Error' : a);
    }, 1000);
}
export function renderSearchFormBlock(dateCheckIn, dateCheckout) {
    const TWO_DAYS = 2;
    const ONE_MONTH = 1;
    const TWO_MONTHS = 2;
    const today = new Date;
    // минимально возможная дата заселения и выселения
    const min = `${today.getFullYear()}-${('0' + (today.getMonth() + ONE_MONTH)).slice(-2)}-${today.getDate()}`;
    // максимально возможная дата заселения выселения
    function findMax(objDate) {
        const lastDayOfNextMonth = new Date(objDate.getFullYear(), objDate.getMonth() + TWO_MONTHS, 0);
        return `${lastDayOfNextMonth.getFullYear()}-${('0' + (lastDayOfNextMonth.getMonth() + ONE_MONTH)).slice(-2)}-${lastDayOfNextMonth.getDate()}`;
    }
    //переведенная в нужный формат дата заезда по умолчанию
    const defaultDCI = new Date(today.setDate(today.getDate() + 1));
    const transformedDefaultDCI = `${defaultDCI.getFullYear()}-${('0' + (defaultDCI.getMonth() + ONE_MONTH)).slice(-2)}-${defaultDCI.getDate()}`;
    //функция возвращает выезд по умолчанию для даты заезда по умолчанию и для введенной даты заезда
    function defaultCheckout(objDate) {
        const defaultDCO = new Date(objDate.setDate(objDate.getDate() + TWO_DAYS));
        return `${defaultDCO.getFullYear()}-${('0' + (defaultDCO.getMonth() + ONE_MONTH)).slice(-2)}-${('0' + defaultDCO.getDate()).slice(-2)}`;
    }
    let checkIn;
    let checkOut;
    let maxCheckOut;
    let maxDefault;
    let minCheckout;
    if (dateCheckIn === '') {
        checkIn = transformedDefaultDCI;
        checkOut = (dateCheckout === '') ? defaultCheckout(defaultDCI) : dateCheckout;
        maxDefault = findMax(defaultDCI);
        maxCheckOut = findMax(defaultDCI);
        minCheckout = transformedDefaultDCI;
    }
    else {
        const dciInToObj = new Date(dateCheckIn);
        console.log(dciInToObj);
        const dci = `${dciInToObj.getFullYear()}-${('0' + (dciInToObj.getMonth() + ONE_MONTH)).slice(-2)}-${('0' + dciInToObj.getDate()).slice(-2)}`;
        checkIn = dci;
        checkOut = (dateCheckout === '') ? defaultCheckout(dciInToObj) : dateCheckout;
        maxDefault = findMax(dciInToObj);
        minCheckout = dci;
        maxCheckOut = findMax(dciInToObj);
    }
    renderBlock('search-form-block', `
    <form id="form">
      <fieldset class="search-filedset">
      <form>
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text"  value="" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${checkIn}" 
            min="${min}" max="${maxDefault}" name="checkin" />
  </div>
  <div>
  <label for="check-out-date"> Дата выезда </label>
    <input id="check-out-date" type ="date" value="${checkOut}" min="${minCheckout}" max="${maxCheckOut}" name="checkout"/>
      </div>
      <div>
      <label for="max-price"> Макс.цена суток </label>
        <input id="max-price" type="text" value="" name="price" class="max-price"/>
          </div>
          <div>
          <div><button type="submit">Найти </button></div>
          </div>
          </div>
          </form>
          </fieldset>
          </form>
            `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQVFwQixDQUFDO0FBRXBCLE1BQU0sVUFBVSxjQUFjLENBQUMsRUFBVTtJQUN2QyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLE1BQU0sWUFBWSxHQUFxQixJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQzdELElBQUksWUFBWSxJQUFJLElBQUksRUFBRTtRQUN4QixPQUFPLFlBQVksQ0FBQyxLQUFLLENBQUE7S0FDMUI7QUFDSCxDQUFDO0FBQ0QsTUFBTSxDQUFDLElBQUksWUFBWSxHQUFlLEVBQUUsQ0FBQztBQUN6QyxNQUFNLFVBQVUsWUFBWTtJQUMxQixNQUFNLElBQUksR0FBb0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDcEMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLFlBQVksR0FBRztZQUNiLElBQUksRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDO1lBQzdCLFdBQVcsRUFBRSxjQUFjLENBQUMsZ0JBQWdCLENBQUM7WUFDN0MsWUFBWSxFQUFFLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztZQUMvQyxRQUFRLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNqRCxDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2IsTUFBTSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQztBQUVELHFEQUFxRDtB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RUQsV0FBVyxDQUNULG1CQUFtQixFQUNuQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJEQWtCdUQsT0FBTzttQkFDL0MsR0FBRyxVQUFVLFVBQVU7Ozs7cURBSVcsUUFBUSxVQUFVLFdBQVcsVUFBVSxXQUFXOzs7Ozs7Ozs7Ozs7O2FBYTFGLENBQ1YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXJCbG9jayB9IGZyb20gJy4vbGliLmpzJztcblxuaW50ZXJmYWNlIEZvcm1PYmplY3Qge1xuICBjaXR5Pzogc3RyaW5nXG4gIGNoZWNrSW5EYXRlPzogc3RyaW5nXG4gIGNoZWNrT3V0RGF0ZT86IHN0cmluZ1xuICBtYXhQcmljZT86IG51bWJlclxufVxuaW50ZXJmYWNlIFBsYWNlIHsgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaEZvcm1EYXRhKGlkOiBzdHJpbmcpIHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtJyk7XG4gIGNvbnN0IGlucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudCA9IGZvcm0ucXVlcnlTZWxlY3RvcihpZClcbiAgaWYgKGlucHV0RWxlbWVudCAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGlucHV0RWxlbWVudC52YWx1ZVxuICB9XG59XG5leHBvcnQgbGV0IGRhdGFGcm9tRm9ybTogRm9ybU9iamVjdCA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZmVyRGF0YSgpIHtcbiAgY29uc3QgZm9ybTogSFRNTEZvcm1FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0nKTtcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBkYXRhRnJvbUZvcm0gPSB7XG4gICAgICBjaXR5OiBzZWFyY2hGb3JtRGF0YSgnI2NpdHknKSxcbiAgICAgIGNoZWNrSW5EYXRlOiBzZWFyY2hGb3JtRGF0YSgnI2NoZWNrLWluLWRhdGUnKSxcbiAgICAgIGNoZWNrT3V0RGF0ZTogc2VhcmNoRm9ybURhdGEoJyNjaGVjay1vdXQtZGF0ZScpLFxuICAgICAgbWF4UHJpY2U6IHBhcnNlSW50KHNlYXJjaEZvcm1EYXRhKCcjbWF4LXByaWNlJykpXG4gICAgfTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgc2VhcmNoKGRhdGFGcm9tRm9ybSwgY2FsbGJhY2tGb3JTZWFyY2gpO1xuICB9KVxufVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gc2VhcmNoKG9iamVjdDogRm9ybU9iamVjdCk6IHZvaWQge1xuLy8gICBjb25zb2xlLmxvZyhvYmplY3QpXG4vLyB9XG5mdW5jdGlvbiBjYWxsYmFja0ZvclNlYXJjaChyZXMpIHtcbiAgY29uc29sZS5sb2cocmVzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaChvYmplY3Q6IEZvcm1PYmplY3QsIGNhbGxiYWNrKTogdm9pZCB7XG4gIGNvbnNvbGUubG9nKG9iamVjdCk7XG4gIGNvbnN0IGEgPSBbe30gYXMgUGxhY2UsIHt9IGFzIFBsYWNlXTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY2FsbGJhY2soTWF0aC5yYW5kb20oKSA8IDAuNSA/ICdFcnJvcicgOiBhKVxuICB9LCAxMDAwKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU2VhcmNoRm9ybUJsb2NrKGRhdGVDaGVja0luOiBzdHJpbmcsIGRhdGVDaGVja291dDogc3RyaW5nKSB7XG4gIGNvbnN0IFRXT19EQVlTID0gMjtcbiAgY29uc3QgT05FX01PTlRIID0gMTtcbiAgY29uc3QgVFdPX01PTlRIUyA9IDI7XG5cblxuICBjb25zdCB0b2RheTogRGF0ZSA9IG5ldyBEYXRlO1xuICAvLyDQvNC40L3QuNC80LDQu9GM0L3QviDQstC+0LfQvNC+0LbQvdCw0Y8g0LTQsNGC0LAg0LfQsNGB0LXQu9C10L3QuNGPINC4INCy0YvRgdC10LvQtdC90LjRj1xuICBjb25zdCBtaW4gPSBgJHt0b2RheS5nZXRGdWxsWWVhcigpfS0keygnMCcgKyAodG9kYXkuZ2V0TW9udGgoKSArIE9ORV9NT05USCkpLnNsaWNlKC0yKX0tJHt0b2RheS5nZXREYXRlKCl9YDtcblxuICAvLyDQvNCw0LrRgdC40LzQsNC70YzQvdC+INCy0L7Qt9C80L7QttC90LDRjyDQtNCw0YLQsCDQt9Cw0YHQtdC70LXQvdC40Y8g0LLRi9GB0LXQu9C10L3QuNGPXG4gIGZ1bmN0aW9uIGZpbmRNYXgob2JqRGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgY29uc3QgbGFzdERheU9mTmV4dE1vbnRoOiBEYXRlID0gbmV3IERhdGUob2JqRGF0ZS5nZXRGdWxsWWVhcigpLCBvYmpEYXRlLmdldE1vbnRoKCkgKyBUV09fTU9OVEhTLCAwKTtcbiAgICByZXR1cm4gYCR7bGFzdERheU9mTmV4dE1vbnRoLmdldEZ1bGxZZWFyKCl9LSR7KCcwJyArIChsYXN0RGF5T2ZOZXh0TW9udGguZ2V0TW9udGgoKSArIE9ORV9NT05USCkpLnNsaWNlKC0yKX0tJHtsYXN0RGF5T2ZOZXh0TW9udGguZ2V0RGF0ZSgpfWA7XG4gIH1cblxuICAvL9C/0LXRgNC10LLQtdC00LXQvdC90LDRjyDQsiDQvdGD0LbQvdGL0Lkg0YTQvtGA0LzQsNGCINC00LDRgtCwINC30LDQtdC30LTQsCDQv9C+INGD0LzQvtC70YfQsNC90LjRjlxuXG4gIGNvbnN0IGRlZmF1bHREQ0k6IERhdGUgPSBuZXcgRGF0ZSh0b2RheS5zZXREYXRlKHRvZGF5LmdldERhdGUoKSArIDEpKTtcbiAgY29uc3QgdHJhbnNmb3JtZWREZWZhdWx0RENJID0gYCR7ZGVmYXVsdERDSS5nZXRGdWxsWWVhcigpfS0keygnMCcgKyAoZGVmYXVsdERDSS5nZXRNb250aCgpICsgT05FX01PTlRIKSkuc2xpY2UoLTIpfS0ke2RlZmF1bHREQ0kuZ2V0RGF0ZSgpfWBcblxuICAvL9GE0YPQvdC60YbQuNGPINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINCy0YvQtdC30LQg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0LTQu9GPINC00LDRgtGLINC30LDQtdC30LTQsCDQv9C+INGD0LzQvtC70YfQsNC90LjRjiDQuCDQtNC70Y8g0LLQstC10LTQtdC90L3QvtC5INC00LDRgtGLINC30LDQtdC30LTQsFxuICBmdW5jdGlvbiBkZWZhdWx0Q2hlY2tvdXQob2JqRGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgY29uc3QgZGVmYXVsdERDTzogRGF0ZSA9IG5ldyBEYXRlKG9iakRhdGUuc2V0RGF0ZShvYmpEYXRlLmdldERhdGUoKSArIFRXT19EQVlTKSk7XG4gICAgcmV0dXJuIGAke2RlZmF1bHREQ08uZ2V0RnVsbFllYXIoKX0tJHsoJzAnICsgKGRlZmF1bHREQ08uZ2V0TW9udGgoKSArIE9ORV9NT05USCkpLnNsaWNlKC0yKX0tJHsoJzAnICsgZGVmYXVsdERDTy5nZXREYXRlKCkpLnNsaWNlKC0yKX1gO1xuICB9XG4gIGxldCBjaGVja0luOiBzdHJpbmc7XG4gIGxldCBjaGVja091dDogc3RyaW5nO1xuICBsZXQgbWF4Q2hlY2tPdXQ6IHN0cmluZztcbiAgbGV0IG1heERlZmF1bHQ6IHN0cmluZztcbiAgbGV0IG1pbkNoZWNrb3V0OiBzdHJpbmc7XG5cbiAgaWYgKGRhdGVDaGVja0luID09PSAnJykge1xuXG4gICAgY2hlY2tJbiA9IHRyYW5zZm9ybWVkRGVmYXVsdERDSTtcbiAgICBjaGVja091dCA9IChkYXRlQ2hlY2tvdXQgPT09ICcnKSA/IGRlZmF1bHRDaGVja291dChkZWZhdWx0RENJKSA6IGRhdGVDaGVja291dDtcbiAgICBtYXhEZWZhdWx0ID0gZmluZE1heChkZWZhdWx0RENJKTtcbiAgICBtYXhDaGVja091dCA9IGZpbmRNYXgoZGVmYXVsdERDSSk7XG4gICAgbWluQ2hlY2tvdXQgPSB0cmFuc2Zvcm1lZERlZmF1bHREQ0lcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkY2lJblRvT2JqID0gbmV3IERhdGUoZGF0ZUNoZWNrSW4pO1xuICAgIGNvbnNvbGUubG9nKGRjaUluVG9PYmopO1xuICAgIGNvbnN0IGRjaSA9IGAke2RjaUluVG9PYmouZ2V0RnVsbFllYXIoKX0tJHsoJzAnICsgKGRjaUluVG9PYmouZ2V0TW9udGgoKSArIE9ORV9NT05USCkpLnNsaWNlKC0yKX0tJHsoJzAnICsgZGNpSW5Ub09iai5nZXREYXRlKCkpLnNsaWNlKC0yKX1gXG4gICAgY2hlY2tJbiA9IGRjaTtcbiAgICBjaGVja091dCA9IChkYXRlQ2hlY2tvdXQgPT09ICcnKSA/IGRlZmF1bHRDaGVja291dChkY2lJblRvT2JqKSA6IGRhdGVDaGVja291dDtcbiAgICBtYXhEZWZhdWx0ID0gZmluZE1heChkY2lJblRvT2JqKVxuICAgIG1pbkNoZWNrb3V0ID0gZGNpO1xuICAgIG1heENoZWNrT3V0ID0gZmluZE1heChkY2lJblRvT2JqKTtcbiAgfVxuXG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtZm9ybS1ibG9jaycsXG4gICAgYFxuICAgIDxmb3JtIGlkPVwiZm9ybVwiPlxuICAgICAgPGZpZWxkc2V0IGNsYXNzPVwic2VhcmNoLWZpbGVkc2V0XCI+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiPtCT0L7RgNC+0LQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2l0eVwiIHR5cGU9XCJ0ZXh0XCIgIHZhbHVlPVwiXCIgLz5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgZGlzYWJsZWQgdmFsdWU9XCI1OS45Mzg2LDMwLjMxNDFcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwicHJvdmlkZXJzXCI+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiaG9teVwiIGNoZWNrZWQgLz4gSG9teTwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwcm92aWRlclwiIHZhbHVlPVwiZmxhdC1yZW50XCIgY2hlY2tlZCAvPiBGbGF0UmVudDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+LS0hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2hlY2staW4tZGF0ZVwiPtCU0LDRgtCwINC30LDQtdC30LTQsDwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaGVjay1pbi1kYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7Y2hlY2tJbn1cIiBcbiAgICAgICAgICAgIG1pbj1cIiR7bWlufVwiIG1heD1cIiR7bWF4RGVmYXVsdH1cIiBuYW1lPVwiY2hlY2tpblwiIC8+XG4gIDwvZGl2PlxuICA8ZGl2PlxuICA8bGFiZWwgZm9yPVwiY2hlY2stb3V0LWRhdGVcIj4g0JTQsNGC0LAg0LLRi9C10LfQtNCwIDwvbGFiZWw+XG4gICAgPGlucHV0IGlkPVwiY2hlY2stb3V0LWRhdGVcIiB0eXBlID1cImRhdGVcIiB2YWx1ZT1cIiR7Y2hlY2tPdXR9XCIgbWluPVwiJHttaW5DaGVja291dH1cIiBtYXg9XCIke21heENoZWNrT3V0fVwiIG5hbWU9XCJjaGVja291dFwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgIDxsYWJlbCBmb3I9XCJtYXgtcHJpY2VcIj4g0JzQsNC60YEu0YbQtdC90LAg0YHRg9GC0L7QuiA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgaWQ9XCJtYXgtcHJpY2VcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgbmFtZT1cInByaWNlXCIgY2xhc3M9XCJtYXgtcHJpY2VcIi8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2PjxidXR0b24gdHlwZT1cInN1Ym1pdFwiPtCd0LDQudGC0LggPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgYFxuICApO1xufVxuIl19