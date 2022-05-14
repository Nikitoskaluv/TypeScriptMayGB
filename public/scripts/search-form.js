import { renderBlock } from './lib.js';
export function renderSearchFormBlock(dateCheckIn, dateCheckout) {
    const today = new Date;
    // минимально возможная дата заселения и выселения
    const min = today.toISOString().split('T')[0];
    console.log(min);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VhcmNoLWZvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUV2QyxNQUFNLFVBQVUscUJBQXFCLENBQUMsV0FBbUIsRUFBRSxZQUFvQjtJQUU3RSxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQztJQUN2QixrREFBa0Q7SUFDbEQsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBRWhCLGlEQUFpRDtJQUNqRCxTQUFTLFFBQVEsQ0FBQyxPQUFhO1FBQzdCLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUUsQ0FBQztRQUNwRixPQUFPLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsdURBQXVEO0lBQ3ZELE1BQU0sV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFDL0IsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0MsTUFBTSx1QkFBdUIsR0FBRyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXhFLGdHQUFnRztJQUNoRyxTQUFTLGdCQUFnQixDQUFDLE9BQWE7UUFDckMsTUFBTSxXQUFXLEdBQUcsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRSxPQUFPLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNELElBQUksUUFBZ0IsQ0FBQztJQUNyQixJQUFJLFNBQWlCLENBQUM7SUFDdEIsSUFBSSxZQUFvQixDQUFDO0lBQ3pCLElBQUksV0FBbUIsQ0FBQztJQUN4QixJQUFJLFlBQW9CLENBQUM7SUFFekIsSUFBSSxXQUFXLEtBQUssRUFBRSxFQUFFO1FBRXRCLFFBQVEsR0FBRyx1QkFBdUIsQ0FBQztRQUNuQyxTQUFTLEdBQUcsQ0FBQyxZQUFZLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFDakYsV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JDLFlBQVksR0FBRyx1QkFBdUIsQ0FBQTtLQUN2QztTQUFNO1FBQ0wsTUFBTSxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekMsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxRQUFRLEdBQUcsR0FBRyxDQUFDO1FBQ2YsU0FBUyxHQUFHLENBQUMsWUFBWSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ2hGLFlBQVksR0FBRyxHQUFHLENBQUM7UUFDbkIsWUFBWSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUNyQztJQUVELFdBQVcsQ0FDVCxtQkFBbUIsRUFDbkI7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyREFrQnVELFFBQVE7bUJBQ2hELEdBQUcsVUFBVSxXQUFXOzs7O3FEQUlVLFNBQVMsVUFBVSxZQUFZLFVBQVUsWUFBWTs7Ozs7Ozs7Ozs7OzthQWE3RixDQUNWLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyQmxvY2sgfSBmcm9tICcuL2xpYi5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTZWFyY2hGb3JtQmxvY2soZGF0ZUNoZWNrSW46IHN0cmluZywgZGF0ZUNoZWNrb3V0OiBzdHJpbmcpIHtcblxuICBjb25zdCB0b2RheSA9IG5ldyBEYXRlO1xuICAvLyDQvNC40L3QuNC80LDQu9GM0L3QviDQstC+0LfQvNC+0LbQvdCw0Y8g0LTQsNGC0LAg0LfQsNGB0LXQu9C10L3QuNGPINC4INCy0YvRgdC10LvQtdC90LjRj1xuICBjb25zdCBtaW4gPSB0b2RheS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gIGNvbnNvbGUubG9nKG1pbilcblxuICAvLyDQvNCw0LrRgdC40LzQsNC70YzQvdC+INCy0L7Qt9C80L7QttC90LDRjyDQtNCw0YLQsCDQt9Cw0YHQtdC70LXQvdC40Y8g0LLRi9GB0LXQu9C10L3QuNGPXG4gIGZ1bmN0aW9uIGZpbmRfbWF4KG9iakRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgIGNvbnN0IGxhc3REYXlPZk5leHRNb250aCA9IG5ldyBEYXRlKG9iakRhdGUuZ2V0RnVsbFllYXIoKSwgb2JqRGF0ZS5nZXRNb250aCgpICsgMiwpO1xuICAgIHJldHVybiBsYXN0RGF5T2ZOZXh0TW9udGgudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuICB9XG5cbiAgLy/Qv9C10YDQtdCy0LXQtNC10L3QvdCw0Y8g0LIg0L3Rg9C20L3Ri9C5INGE0L7RgNC80LDRgiDQtNCw0YLQsCDQt9Cw0LXQt9C00LAg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y5cbiAgY29uc3QgZGVmYXVsdF9kY2kgPSBuZXcgRGF0ZSgpO1xuICBkZWZhdWx0X2RjaS5zZXREYXRlKGRlZmF1bHRfZGNpLmdldERhdGUoKSArIDEpO1xuICBjb25zdCB0cmFuc2Zvcm1lZF9kZWZhdWx0X2RjaSA9IGRlZmF1bHRfZGNpLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcblxuICAvL9GE0YPQvdC60YbQuNGPINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINCy0YvQtdC30LQg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4g0LTQu9GPINC00LDRgtGLINC30LDQtdC30LTQsCDQv9C+INGD0LzQvtC70YfQsNC90LjRjiDQuCDQtNC70Y8g0LLQstC10LTQtdC90L3QvtC5INC00LDRgtGLINC30LDQtdC30LTQsFxuICBmdW5jdGlvbiBkZWZhdWx0X2NoZWNrb3V0KG9iakRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgIGNvbnN0IGRlZmF1bHRfZGNvID0gbmV3IERhdGUob2JqRGF0ZS5zZXREYXRlKG9iakRhdGUuZ2V0RGF0ZSgpICsgMikpO1xuICAgIHJldHVybiBkZWZhdWx0X2Rjby50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG4gIH1cbiAgbGV0IGNoZWNrX2luOiBzdHJpbmc7XG4gIGxldCBjaGVja19vdXQ6IHN0cmluZztcbiAgbGV0IG1heF9jaGVja091dDogc3RyaW5nO1xuICBsZXQgbWF4X2RlZmF1bHQ6IHN0cmluZztcbiAgbGV0IG1pbl9jaGVja291dDogc3RyaW5nO1xuXG4gIGlmIChkYXRlQ2hlY2tJbiA9PT0gJycpIHtcblxuICAgIGNoZWNrX2luID0gdHJhbnNmb3JtZWRfZGVmYXVsdF9kY2k7XG4gICAgY2hlY2tfb3V0ID0gKGRhdGVDaGVja291dCA9PT0gJycpID8gZGVmYXVsdF9jaGVja291dChkZWZhdWx0X2RjaSkgOiBkYXRlQ2hlY2tvdXQ7XG4gICAgbWF4X2RlZmF1bHQgPSBmaW5kX21heChkZWZhdWx0X2RjaSk7XG4gICAgbWF4X2NoZWNrT3V0ID0gZmluZF9tYXgoZGVmYXVsdF9kY2kpO1xuICAgIG1pbl9jaGVja291dCA9IHRyYW5zZm9ybWVkX2RlZmF1bHRfZGNpXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZGNpSW5Ub09iaiA9IG5ldyBEYXRlKGRhdGVDaGVja0luKTtcbiAgICBjb25zdCBkY2kgPSBkY2lJblRvT2JqLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcbiAgICBjaGVja19pbiA9IGRjaTtcbiAgICBjaGVja19vdXQgPSAoZGF0ZUNoZWNrb3V0ID09PSAnJykgPyBkZWZhdWx0X2NoZWNrb3V0KGRjaUluVG9PYmopIDogZGF0ZUNoZWNrb3V0O1xuICAgIG1pbl9jaGVja291dCA9IGRjaTtcbiAgICBtYXhfY2hlY2tPdXQgPSBmaW5kX21heChkY2lJblRvT2JqKTtcbiAgfVxuXG4gIHJlbmRlckJsb2NrKFxuICAgICdzZWFyY2gtZm9ybS1ibG9jaycsXG4gICAgYFxuICAgIDxmb3JtIGlkPVwiZm9ybVwiPlxuICAgICAgPGZpZWxkc2V0IGNsYXNzPVwic2VhcmNoLWZpbGVkc2V0XCI+XG4gICAgICA8Zm9ybT5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiY2l0eVwiPtCT0L7RgNC+0LQ8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2l0eVwiIHR5cGU9XCJ0ZXh0XCIgZGlzYWJsZWQgdmFsdWU9XCLQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQs1wiIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGRpc2FibGVkIHZhbHVlPVwiNTkuOTM4NiwzMC4zMTQxXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInByb3ZpZGVyc1wiPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImhvbXlcIiBjaGVja2VkIC8+IEhvbXk8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicHJvdmlkZXJcIiB2YWx1ZT1cImZsYXQtcmVudFwiIGNoZWNrZWQgLz4gRmxhdFJlbnQ8L2xhYmVsPlxuICAgICAgICAgIDwvZGl2Pi0tIT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNoZWNrLWluLWRhdGVcIj7QlNCw0YLQsCDQt9Cw0LXQt9C00LA8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiY2hlY2staW4tZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIke2NoZWNrX2lufVwiIFxuICAgICAgICAgICAgbWluPVwiJHttaW59XCIgbWF4PVwiJHttYXhfZGVmYXVsdH1cIiBuYW1lPVwiY2hlY2tpblwiIC8+XG4gIDwvZGl2PlxuICA8ZGl2PlxuICA8bGFiZWwgZm9yPVwiY2hlY2stb3V0LWRhdGVcIj4g0JTQsNGC0LAg0LLRi9C10LfQtNCwIDwvbGFiZWw+XG4gICAgPGlucHV0IGlkPVwiY2hlY2stb3V0LWRhdGVcIiB0eXBlID1cImRhdGVcIiB2YWx1ZT1cIiR7Y2hlY2tfb3V0fVwiIG1pbj1cIiR7bWluX2NoZWNrb3V0fVwiIG1heD1cIiR7bWF4X2NoZWNrT3V0fVwiIG5hbWU9XCJjaGVja291dFwiLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgIDxsYWJlbCBmb3I9XCJtYXgtcHJpY2VcIj4g0JzQsNC60YEu0YbQtdC90LAg0YHRg9GC0L7QuiA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgaWQ9XCJtYXgtcHJpY2VcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiXCIgbmFtZT1cInByaWNlXCIgY2xhc3M9XCJtYXgtcHJpY2VcIi8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2PjxidXR0b24gdHlwZT1cInN1Ym1pdFwiPtCd0LDQudGC0LggPC9idXR0b24+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgYFxuICApO1xufVxuIl19