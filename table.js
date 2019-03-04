
    var arr = [
        {
            firstName: "teena",
            lastName: "khandelwal",
            email: "teena.khandelwal03@gmail.com",
            id: 6196,
            phoneNumber: "9799456769",
            designation: "s/w trainee",
            DOB: "3/12/1997"
        },
        {
            firstName: "shivani",
            lastName: "singh",
            email: "khandelwal03@gmail.com",
            id: 6186,
            phoneNumber: "9799457869",
            designation: "s/w trainee",
            DOB: "3/11/1997"
        },
        {
            firstName: "fdch",
            lastName: "gupta",
            email: "gupta03@gmail.com",
            id: 4196,
            phoneNumber: "9788536778",
            designation: "s/w trainee",
            DOB: "5/6/1997"
        },
    ];

    function CreateTable() {
         let previoustable = document.getElementById('prevtable');
        if(!!previoustable){
            previoustable.remove();
        }
        // CREATE DYNAMIC TABLE.
        var table = document.createElement('table');
        table.setAttribute('id','prevtable');
        // key and values....
        var key = Object.keys(arr[0]);
        var value = arr.map((elements) => {
            return Object.values(elements);
        });

        // Table Header......
        var tr = document.createElement('tr');
        for (let i = 0; i < key.length; i++) {
            var th = document.createElement('th');
               th.setAttribute('id',key[i]);
            var text = document.createTextNode(key[i]);
            th.appendChild(text);
            tr.appendChild(th);
        }
        table.appendChild(tr);
        
         // Table Definition......
        for (let i = 0; i < value.length; i++) {
             tr = document.createElement('tr');
            for (let j = 0; j < key.length; j++) {
                var td = document.createElement('td');
                var text = document.createTextNode(value[i][j]);
                td.appendChild(text);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        document.body.appendChild(table);
          addEventsToColumns();
    }
     function addEventsToColumns(){
        var header=Object.keys(arr[0]);
        console.log(header);
    for(let i=0;i<header.length;i++)
    {
        document.getElementById(header[i]).addEventListener('click',function(event){
         sortTable(event.target.innerHTML)
    });
    }
}

let flag = true;
function sortTable(param){
    arr.sort(compare);
    function compare(a,b){
        if(a[param]>b[param] && flag){
            return 1;
        }
        else
        return -1;
    }
    flag=!flag;
    CreateTable();
}
CreateTable();
