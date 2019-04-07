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
<tr class="service @HIGHLIGHT@">
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

var SEARCH_STATS_TEMPLATE = `
<div class="panel-heading">
    Search Stats for <span class=result>@NAME@</span>
</div>
<div class="panel-body">
    <ol class="list-group">
        <li class="list-group-item">
            Your avarage price on <span class=result>@NAME@</span> is <span class=result>$@ITEM_AVG@</span>.
        </li>
        <li class="list-group-item">
            Your friends avarage is <span class=result>$@FRIENDS_AVG@</span>.
        </li>
        <li class="list-group-item">
            Local average is <span class=result>$@LOCAL_AVG@</span>.
        </li>
        <li class="list-group-item">
            Your total money spent on <span class=result>@NAME@</span> this month is <span class=result>$@SPENT_ON_ITEM@</span>.
        </li>
        <li class="list-group-item">
            You can buy the product in <span class=result>@CLOSEST_SHOP@</span>.
        </li>
    </ol>
</div>
`

var TOP_FIVE_TEMPLATE = `
<ol class="list-group">
    <li class="list-group-item">
        You spent <span class=result>$@SPENT_ON_ITEM@</span> on <span class=result>@ITEM@</span>!
    </li>
    <li class="list-group-item">
        You spent <span class=result>$@SPENT_SO_FAR@</span> this month.
    </li>
    <li class="list-group-item">
        You spend <span class=result>$@AVG_MONTH@</span> on average.
    </li>
    <li class="list-group-item">
        You saved <span class=result>1337</span> trees!
    </li>
    <li class="list-group-item">
        You visited <span class=result>@SHOP@</span> <span class=result>@SHOP_TIMES@</span> times and that is your best score.
    </li>
</ol>
`