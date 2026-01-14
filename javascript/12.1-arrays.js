/* 
    /======================== Issue ===========================
    JavaScript loop not rendering table rows correctly
    The HTML table is not rendering product data correctly due to multiple syntax errors in the JavaScript code. The for loops are written inside a template literal, which causes them to be treated as plain text instead of executable JavaScript.
    ===========================================================/

    <script>
        var products = new Array(2);
        products[0] = new Array('Monitor', '236.73');
        products[1] = new Array('Keyboard', '45.50');
        document.write(`
            <table border=1>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
        
                for(var i = 0; i < products.length i++) {
                    document.write('<tr>');
        
                    for(var j = 0; j < products.[i].length; j++) {
                        document.write('<td>' + products[i][j] + '</td>')
                    }
        
                    document.write('</tr>');
                }
            </table>
        `);
    </script>
*/

var products = new Array(2);
products[0] = new Array('Monitor', '236.73');
products[1] = new Array('Keyboard', '45.50');

document.writeln(`
    <table border=1>
        <tr>
            <th>Name</th>
            <th>Price</th>
        </tr>
`);


for(var i = 0; i < products.length; i++) {
    document.writeln('<tr>');

    for(var j = 0; j < products[i].length; j++) {
        document.writeln('<td>' + products[i][j] + '</td>')
    }

    document.writeln('</tr>');
}

document.writeln('</table>');
