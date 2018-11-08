function output_data(d, output_id){
    var keys = Object.keys(d);
    var text = "";
    for (var i=0; i<keys.length; i++) {
        text += keys[i] + ": " +  d[keys[i]] + "<br>";
    }
    $( "#"+output_id ).html(text);
}   

function get_balance(input_id, output_id){
    var a = $( "#"+input_id ).val();
    
    $.get('https://api.blockcypher.com/v1/btc/main/addrs/' + a + '/balance')
    .then(function(d) { output_data(d,output_id) });
}
function generate_address(output_id){
    $.post('https://api.blockcypher.com/v1/btc/test3/addrs')
    .then(function(d) { output_data(d,output_id) });
}
function new_transaction(from_id, to_id, amount_id, output_id){
    var from = $( "#"+from_id ).val();
    var to = $( "#"+to_id ).val();
    var amount = $( "#"+amount_id ).val();
    
    var newtx = {
        inputs: [{addresses: [from]}],
        outputs: [{addresses: [to], value: amount}]
    };
    $.post('https://api.blockcypher.com/v1/bcy/test/txs/new', JSON.stringify(newtx))
    .then(function(d) {output_data(d,output_id)});
}