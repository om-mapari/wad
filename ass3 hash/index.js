function generate() {
    let input1 = document.getElementById("i1").value;
    let input2 = document.getElementById("i2").value;

    console.log("sadasd", input1);

    var r1 = input1[0];
    let c1 = input1[2];
    let v1 = parseInt(input1[4]);
    let r2 = input2[0];
    let c2 = input2[2];
    let v2 = parseInt(input2[4]);

    

    // Adding the entire table to the body tag
    
    let table = document.createElement("table");
    document.getElementById("body").appendChild(table);
    let row,
        data,
        val = v1,
        m = 0,
        n = 1;
    for (let i = 0; i < r1; i++) {
        row = document.createElement("tr");
        m = 0;
        for (let j = 0; j < c1; j++) {
            data = document.createElement("td");
            val = (v1 + m) * n;
            data.innerHTML = val;
            m++;
            row.appendChild(data);
        }
        n++;
        table.appendChild(row);
    }

    document.getElementById("body").appendChild(table);
    val = v2;
    n = 1;
    for (let i = 0; i < r2; i++) {
        row = document.createElement("tr");
        m = 0;
        for (let j = 0; j < c2; j++) {
            data = document.createElement("td");
            val = (v2 + m) * n;
            data.innerHTML = val;
            m++;
            row.appendChild(data);
        }
        n++;
        table.appendChild(row);
    }

    if (r1 == r2 && c1 == c2) {
        if (v1 == v2) {
            document.getElementById("body").appendChild(table);
            val = v2;
            n = 1;
            for (let i = 0; i < r2; i++) {
                row = document.createElement("tr");
                m = 0;
                for (let j = 0; j < c2; j++) {
                    data = document.createElement("td");
                    val = (v2 + m) * n;
                    data.innerHTML = val;
                    m++;
                    row.appendChild(data);
                }
                n++;
                table.appendChild(row);
            }
        } else {
            document.getElementById("body").appendChild(table);
            let val1, val2;
            n = 1;
            for (let i = 0; i < r2; i++) {
                row = document.createElement("tr");
                m = 0;
                for (let j = 0; j < c2; j++) {
                    data = document.createElement("td");
                    val1 = (v1 + m) * n;
                    val2 = (v2 + m) * n;
                    data.innerHTML = val1 * val2;
                    m++;
                    row.appendChild(data);
                }
                n++;
                table.appendChild(row);
            }
        }
    }
}
