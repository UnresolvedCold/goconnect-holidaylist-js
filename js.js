const cal = ics();
const year = 2023;
console.log("JS Loaded")

var tab = document.getElementById("tbl-report");
var rows = tab.querySelectorAll("tr", "td", "table");
console.log(rows);

var CSV = [];
CSV.push([...Array(32).keys()]);

// Get the required data
for (var i=2; i<rows.length; i++) {
    var csv_row = [];
    for (var cells=0; cells<rows[i].cells.length; cells++) {
        var title = rows[i].cells[cells].getAttribute('title');
        console.log(`title: ${title}`)
        if (title == null) {
            title = rows[i].cells[cells].innerText;
        }
        if (title == 'Working Day' || title == "Weekly Off") {
            title = "~";
        };
        csv_row.push(title);
    }
    CSV.push(csv_row);
}
console.log(CSV);

// Create a calendar file
for (var row = 1; row < CSV.length; row++) {
    for (var col=1; col<CSV[row].length; col++) {
        if (CSV[row][col]==null || CSV[row][col]=="" || CSV[row][col]=="~") continue;
        var date = row+"/"+CSV[0][col]+"/"+year;
        cal.addEvent(CSV[row][col]=="~"? "" : CSV[row][col], '', '', date, date);
        console.log(date);
    }
}
const e = document.createElement('a');
e.setAttribute('onclick', 'javascript:cal.download()');
e.innerHTML = "DOWNLOAD ICS";
document.body.appendChild(e);