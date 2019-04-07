var RECEIPT_TEMPLATE_HEADER = `
<div class="receipt">
    <div class=receipt-top>
        <div class=title>
            @SHOP@
        </div>
        <div class=date>
            @DATE@
        </div>
    </div>
    @BODY@
</div>
`
var RECEIPT_TEMPLATE_BODY = `
<div class=receipt-body>
    <div id="table">
        <table>
            @PRICES@
        </table>
    </div>
</div>
`;

var RECEIPT_TEMPLATE_PRICE = `
<tr class="service">
    <td class="tableitem">
        <p class="itemtext">@PRODUCT@</p>
    </td>
    <td class="tableitem">
        <p class="itemtext">x@QUANTITY@</p>
    </td>
    <td class="tableitem">
        <p class="itemtext">$@PRICE@</p>
    </td>
</tr>

`