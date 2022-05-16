import { renderBlock } from './lib.js';
export function renderSearchFormBlock(dateCheckIn, dateCheckout) {
    const today = new Date;
    // минимально возможная дата заселения и выселения
    const min = today.toISOString().split('T')[0];
    console.log(typeof (min));
    // максимально возможная дата заселения выселения
    function find_max(objDate) {
        const lastDayOfNextMonth = new Date(objDate.getFullYear(), objDate.getMonth() + 2);
        return lastDayOfNextMonth.toISOString().split('T')[0];
    }
    //переведенная в нужный формат дата заезда по умолчанию
    const default_dci = new Date();
    default_dci.setDate(default_dci.getDate() + 1);
    const transformed_default_dci = default_dci.toISOString().split('T')[0];
    //функция возвращает выезд по умолчанию для даты заезда по умолчанию и для введенной даты заезда
    function default_checkout(objDate) {
        const default_dco = new Date(objDate.setDate(objDate.getDate() + 2));
        return default_dco.toISOString().split('T')[0];
    }
    let check_in;
    let check_out;
    let max_checkOut;
    let max_default;
    let min_checkout;
    if (dateCheckIn === '') {
        check_in = transformed_default_dci;
        check_out = (dateCheckout === '') ? default_checkout(default_dci) : dateCheckout;
        max_default = find_max(default_dci);
        max_checkOut = find_max(default_dci);
        min_checkout = transformed_default_dci;
    }
    else {
        const dciInToObj = new Date(dateCheckIn);
        const dci = dciInToObj.toISOString().split('T')[0];
        check_in = dci;
        check_out = (dateCheckout === '') ? default_checkout(dciInToObj) : dateCheckout;
        min_checkout = dci;
        max_checkOut = find_max(dciInToObj);
    }
    renderBlock('search-form-block', `
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
            `);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV2QyxNQUFNLFVBQVUscUJBQXFCLENBQUMsV0FBbUIsRUFBRSxZQUFvQjtJQUU3RSxNQUFNLEtBQUssR0FBUyxJQUFJLElBQUksQ0FBQztJQUM3QixrREFBa0Q7SUFDbEQsTUFBTSxHQUFHLEdBQVcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBRXpCLGlEQUFpRDtJQUNqRCxTQUFTLFFBQVEsQ0FBQyxPQUFhO1FBQzdCLE1BQU0sa0JBQWtCLEdBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUUsQ0FBQztRQUMxRixPQUFPLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsdURBQXVEO0lBQ3ZELE1BQU0sV0FBVyxHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7SUFDckMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0MsTUFBTSx1QkFBdUIsR0FBVyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWhGLGdHQUFnRztJQUNoRyxTQUFTLGdCQUFnQixDQUFDLE9BQWE7UUFDckMsTUFBTSxXQUFXLEdBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRSxPQUFPLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELElBQUksUUFBZ0IsQ0FBQztJQUNyQixJQUFJLFNBQWlCLENBQUM7SUFDdEIsSUFBSSxZQUFvQixDQUFDO0lBQ3pCLElBQUksV0FBbUIsQ0FBQztJQUN4QixJQUFJLFlBQW9CLENBQUM7SUFFekIsSUFBSSxXQUFXLEtBQUssRUFBRSxFQUFFO1FBRXRCLFFBQVEsR0FBRyx1QkFBdUIsQ0FBQztRQUNuQyxTQUFTLEdBQUcsQ0FBQyxZQUFZLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFDakYsV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLFlBQVksR0FBRyx1QkFBdUIsQ0FBQTtLQUN2QztTQUFNO1FBQ0wsTUFBTSxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ2YsU0FBUyxHQUFHLENBQUMsWUFBWSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ2hGLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDbkIsWUFBWSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUNyQztJQUVELFdBQVcsQ0FDVCxtQkFBbUIsRUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyREFrQnVELFFBQVE7bUJBQ2hELEdBQUcsVUFBVSxXQUFXOzs7O3FEQUlVLFNBQVMsVUFBVSxZQUFZLFVBQVUsWUFBWTs7Ozs7Ozs7Ozs7OzthQWE3RixDQUNWLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hGb3JtQmxvY2soZGF0ZUNoZWNrSW46IHN0cmluZywgZGF0ZUNoZWNrb3V0OiBzdHJpbmcpIHtcblxuICBjb25zdCB0b2RheTogRGF0ZSA9IG5ldyBEYXRlO1xuICAvLyDQvNC40L3QuNC80LDQu9GM0L3QviDQstC+0LfQvNC+0LbQvdCw0Y8g0LTQsNGC0LAg0LfQsNGB0LXQu9C10L3QuNGPINC4INCy0YvRgdC10LvQtdC90LjRj1xuICBjb25zdCBtaW46IHN0cmluZyA9IHRvZGF5LnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcbiAgY29uc29sZS5sb2codHlwZW9mIChtaW4pKVxuXG4gIC8vINC80LDQutGB0LjQvNCw0LvRjNC90L4g0LLQvtC30LzQvtC20L3QsNGPINC00LDRgtCwINC30LDRgdC10LvQtdC90LjRjyDQstGL0YHQtdC70LXQvdC40Y9cbiAgZnVuY3Rpb24gZmluZF9tYXgob2JqRGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgY29uc3QgbGFzdERheU9mTmV4dE1vbnRoOiBEYXRlID0gbmV3IERhdGUob2JqRGF0ZS5nZXRGdWxsWWVhcigpLCBvYmpEYXRlLmdldE1vbnRoKCkgKyAyLCk7XG4gICAgcmV0dXJuIGxhc3REYXlPZk5leHRNb250aC50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gIH1cblxuICAvL9C/0LXRgNC10LLQtdC00LXQvdC90LDRjyDQsiDQvdGD0LbQvdGL0Lkg0YTQvtGA0LzQsNGCINC00LDRgtCwINC30LDQtdC30LTQsCDQv9C+INGD0LzQvtC70YfQsNC90LjRjlxuICBjb25zdCBkZWZhdWx0X2RjaTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGRlZmF1bHRfZGNpLnNldERhdGUoZGVmYXVsdF9kY2kuZ2V0RGF0ZSgpICsgMSk7XG4gIGNvbnN0IHRyYW5zZm9ybWVkX2RlZmF1bHRfZGNpOiBzdHJpbmcgPSBkZWZhdWx0X2RjaS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG5cbiAgLy/RhNGD0L3QutGG0LjRjyDQstC+0LfQstGA0LDRidCw0LXRgiDQstGL0LXQt9C0INC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOINC00LvRjyDQtNCw0YLRiyDQt9Cw0LXQt9C00LAg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0Lgg0LTQu9GPINCy0LLQtdC00LXQvdC90L7QuSDQtNCw0YLRiyDQt9Cw0LXQt9C00LBcbiAgZnVuY3Rpb24gZGVmYXVsdF9jaGVja291dChvYmpEYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICBjb25zdCBkZWZhdWx0X2RjbzogRGF0ZSA9IG5ldyBEYXRlKG9iakRhdGUuc2V0RGF0ZShvYmpEYXRlLmdldERhdGUoKSArIDIpKTtcbiAgICByZXR1cm4gZGVmYXVsdF9kY28udG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuICB9XG4gIGxldCBjaGVja19pbjogc3RyaW5nO1xuICBsZXQgY2hlY2tfb3V0OiBzdHJpbmc7XG4gIGxldCBtYXhfY2hlY2tPdXQ6IHN0cmluZztcbiAgbGV0IG1heF9kZWZhdWx0OiBzdHJpbmc7XG4gIGxldCBtaW5fY2hlY2tvdXQ6IHN0cmluZztcblxuICBpZiAoZGF0ZUNoZWNrSW4gPT09ICcnKSB7XG5cbiAgICBjaGVja19pbiA9IHRyYW5zZm9ybWVkX2RlZmF1bHRfZGNpO1xuICAgIGNoZWNrX291dCA9IChkYXRlQ2hlY2tvdXQgPT09ICcnKSA/IGRlZmF1bHRfY2hlY2tvdXQoZGVmYXVsdF9kY2kpIDogZGF0ZUNoZWNrb3V0O1xuICAgIG1heF9kZWZhdWx0ID0gZmluZF9tYXgoZGVmYXVsdF9kY2kpO1xuICAgIG1heF9jaGVja091dCA9IGZpbmRfbWF4KGRlZmF1bHRfZGNpKTtcbiAgICBtaW5fY2hlY2tvdXQgPSB0cmFuc2Zvcm1lZF9kZWZhdWx0X2RjaVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IGRjaUluVG9PYmogPSBuZXcgRGF0ZShkYXRlQ2hlY2tJbik7XG4gICAgY29uc3QgZGNpID0gZGNpSW5Ub09iai50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gICAgY2hlY2tfaW4gPSBkY2k7XG4gICAgY2hlY2tfb3V0ID0gKGRhdGVDaGVja291dCA9PT0gJycpID8gZGVmYXVsdF9jaGVja291dChkY2lJblRvT2JqKSA6IGRhdGVDaGVja291dDtcbiAgICBtaW5fY2hlY2tvdXQgPSBkY2k7XG4gICAgbWF4X2NoZWNrT3V0ID0gZmluZF9tYXgoZGNpSW5Ub09iaik7XG4gIH1cblxuICByZW5kZXJCbG9jayhcbiAgICAnc2VhcmNoLWZvcm0tYmxvY2snLFxuICAgIGBcbiAgICA8Zm9ybSBpZD1cImZvcm1cIj5cbiAgICAgIDxmaWVsZHNldCBjbGFzcz1cInNlYXJjaC1maWxlZHNldFwiPlxuICAgICAgPGZvcm0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNpdHlcIj7Qk9C+0YDQvtC0PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNpdHlcIiB0eXBlPVwidGV4dFwiIGRpc2FibGVkIHZhbHVlPVwi0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LNcIiAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBkaXNhYmxlZCB2YWx1ZT1cIjU5LjkzODYsMzAuMzE0MVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJwcm92aWRlcnNcIj5cbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJob215XCIgY2hlY2tlZCAvPiBIb215PC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInByb3ZpZGVyXCIgdmFsdWU9XCJmbGF0LXJlbnRcIiBjaGVja2VkIC8+IEZsYXRSZW50PC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj4tLSE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaGVjay1pbi1kYXRlXCI+0JTQsNGC0LAg0LfQsNC10LfQtNCwPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNoZWNrLWluLWRhdGVcIiB0eXBlPVwiZGF0ZVwiIHZhbHVlPVwiJHtjaGVja19pbn1cIiBcbiAgICAgICAgICAgIG1pbj1cIiR7bWlufVwiIG1heD1cIiR7bWF4X2RlZmF1bHR9XCIgbmFtZT1cImNoZWNraW5cIiAvPlxuICA8L2Rpdj5cbiAgPGRpdj5cbiAgPGxhYmVsIGZvcj1cImNoZWNrLW91dC1kYXRlXCI+INCU0LDRgtCwINCy0YvQtdC30LTQsCA8L2xhYmVsPlxuICAgIDxpbnB1dCBpZD1cImNoZWNrLW91dC1kYXRlXCIgdHlwZSA9XCJkYXRlXCIgdmFsdWU9XCIke2NoZWNrX291dH1cIiBtaW49XCIke21pbl9jaGVja291dH1cIiBtYXg9XCIke21heF9jaGVja091dH1cIiBuYW1lPVwiY2hlY2tvdXRcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICA8bGFiZWwgZm9yPVwibWF4LXByaWNlXCI+INCc0LDQutGBLtGG0LXQvdCwINGB0YPRgtC+0LogPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGlkPVwibWF4LXByaWNlXCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIlwiIG5hbWU9XCJwcmljZVwiIGNsYXNzPVwibWF4LXByaWNlXCIvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdj48YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7QndCw0LnRgtC4IDwvYnV0dG9uPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIGBcbiAgKTtcbn1cbiJdfQ==