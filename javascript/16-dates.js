/* ================
   Date Object
=================== 

It supports both the Universal Time Coordinated (UTC) and Greenwich Mean Time (GMT) conversations.

*/

var object_name = new Date();
document.writeln(object_name);

function display_date() {
    var today = new Date();

    var milliseconds = today.getMilliseconds();
    var date = today.getDate();
    var month = today.getMonth();
    month++;
    var year = today.getFullYear();
    year--;
    
    document.writeln('Today\'s date is: ' + month + '/' + date + '/' + year);
    document.writeln("Milliseconds: " + milliseconds);
}

display_date();