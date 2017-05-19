var sum_expenditure = 0;
var sum_income = 0;
var available_balance = parseInt($('#survivalTable td:nth-child(6):last').text().replace(/,/g, ""));
$('#survivalTable').prepend('<div id="chinatrust_calculator_block"><div class="period"></div><ul class="tags"><li class="available_balance"></li><li class="sum expenditure"></li><li class="sum income"></li></div>');

$('#survivalTable td:nth-child(4)').each(function(i, e) {
    sum_expenditure += parseInt($(e).text().replace(/,/g, ""));
});
$('#survivalTable td:nth-child(5)').each(function(i, e) {
    sum_income += parseInt($(e).text().replace(/,/g, ""));
});
var start_date = $('#query_date_start_id').val();
var end_date = $('#query_date_end_id').val();
$('#chinatrust_calculator_block .period').text('查詢期間：' + start_date + ' ~ ' + end_date);
if (sum_expenditure !== 0) {
    $('#chinatrust_calculator_block .sum.expenditure').text('總支出：NT$ ' + sum_expenditure.toLocaleString('en'));
}
if (sum_income !== 0) {
    $('#chinatrust_calculator_block .sum.income').text('總收入：NT$ ' + sum_income.toLocaleString('en'));
}
$('#chinatrust_calculator_block .available_balance').text('可用餘額：NT$ ' + available_balance.toLocaleString('en'));
