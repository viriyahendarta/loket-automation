// ==UserScript==
// @name         Loket Pilih Kategory Page automation
// @namespace    http://widget.loket.com/
// @version      0.1
// @description  demi cuan. using Indonesia Open 2023 as the sample.
// @author       You
// @match        https://widget.loket.com/widget/3qdasouyuppdk13d
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function isCategorySelectionPage() {
        var headerElement = $('div.form__header').find('h3:contains("Pilih Kategori")');
        console.log('Is Category Selection page: ' + (headerElement.length == 1));
        return headerElement.length == 1;
    }

    function main() {
        console.log('wkwk');

        var SUBMIT_DELAY_MS = 1000;
        var IS_SUBMIT = false;
        var BUY_CATEGORY = 'VIP Day 6 - Final (PRESALE)';
        var BUY_QUANTITY = '2';

        if (!isCategorySelectionPage()) {
            return;
        }

        // html structure:
        // <tr class="tr-table-245045">
        //    <td style="max-width:30%;">
        //       <div class="ticket-info">
        //          <span>
        //          REG CAT 1 Day 6 - Final (NORMAL) </span>
        //       </div>
        //       <small>18 Juni 2023 <br> <i> (Price includes tax)</i></small><i>
        //       </i>
        //    </td>
        //    <td class="nowrap">
        //       <div class="ticket-price">
        //          <span>
        //          Rp.1.200.000 </span>
        //       </div>
        //    </td>
        //    <td>
        //       <select name="ticket[107134][245045]" style="width:6rem;" id="ticket_107134_245045" data-price="1200000" data-tt-id="216414" class="form-control ticket-types" onchange="check_ticket_quantity('107134','245045','');" data-specific-setting="true">
        //          <option value="0">0</option>
        //          <option value="1">1</option>
        //          <option value="2">2</option>
        //       </select>
        //    </td>
        //    <td class="nowrap" id="new_price_245045">
        //       Rp. 0
        //    </td>
        // </tr>

        // get the ticket row input
        var ticketRow = $('span:contains("' + BUY_CATEGORY +'")').parent().parent().parent();

        // for visibility purpose only
        ticketRow.css('background-color', '#daf7f7');

        // fill the quantity input
        ticketRow.find('select').val(BUY_QUANTITY);

        // submit the form
        setTimeout(function() {
            console.log('submitting');
            if (IS_SUBMIT) {
                $('#btn-agree-tnc').click();
            }
        }, SUBMIT_DELAY_MS);

    }

    $(document).ready(main);
})();
