import { renderBlock } from './lib.js';

export function renderSearchFormBlock(dateCheckIn: string, dateCheckout: string) {

  const today: Date = new Date;
  // минимально возможная дата заселения и выселения
  const min: string = today.toISOString().split('T')[0];
  console.log(typeof (min))

  // максимально возможная дата заселения выселения
  function find_max(objDate: Date): string {
    const lastDayOfNextMonth: Date = new Date(objDate.getFullYear(), objDate.getMonth() + 2,);
    return lastDayOfNextMonth.toISOString().split('T')[0];
  }

  //переведенная в нужный формат дата заезда по умолчанию
  const default_dci: Date = new Date();
  default_dci.setDate(default_dci.getDate() + 1);
  const transformed_default_dci: string = default_dci.toISOString().split('T')[0];

  //функция возвращает выезд по умолчанию для даты заезда по умолчанию и для введенной даты заезда
  function default_checkout(objDate: Date): string {
    const default_dco: Date = new Date(objDate.setDate(objDate.getDate() + 2));
    return default_dco.toISOString().split('T')[0];
  }
  let check_in: string;
  let check_out: string;
  let max_checkOut: string;
  let max_default: string;
  let min_checkout: string;

  if (dateCheckIn === '') {

    check_in = transformed_default_dci;
    check_out = (dateCheckout === '') ? default_checkout(default_dci) : dateCheckout;
    max_default = find_max(default_dci);
    max_checkOut = find_max(default_dci);
    min_checkout = transformed_default_dci
  } else {
    const dciInToObj = new Date(dateCheckIn);
    const dci = dciInToObj.toISOString().split('T')[0];
    check_in = dci;
    check_out = (dateCheckout === '') ? default_checkout(dciInToObj) : dateCheckout;
    min_checkout = dci;
    max_checkOut = find_max(dciInToObj);
  }

  renderBlock(
    'search-form-block',
    `
    <form id="form">
      <fieldset class="search-filedset">
      <form>
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
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
            <input id="check-in-date" type="date" value="${check_in}" 
            min="${min}" max="${max_default}" name="checkin" />
  </div>
  <div>
  <label for="check-out-date"> Дата выезда </label>
    <input id="check-out-date" type ="date" value="${check_out}" min="${min_checkout}" max="${max_checkOut}" name="checkout"/>
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
            `
  );
}
