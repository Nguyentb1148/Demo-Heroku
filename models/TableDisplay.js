var pg_con = require('./pg_config')

// define of function
 async function display_product(shop_id){
    let product_query;
    // Query DB to get the table data
    if (shop_id===3)
    {
        product_query='Select * From products';
    }
     else
     {
         product_query = {
             text: 'SELECT * FROM products WHERE shop_id=$1',
             values: [shop_id]
         };
     }
    const data = await pg_con.query(product_query)
    pg_con.end;
    // init the table_string, with the table tag

     let table_string;
     table_string =
         `<table border ='1'>
            <tr>`;

             // display all headers of table
             let num_fields = data.fields.length;
             for (let index = 0; index < num_fields; index++)
                 {
                     table_string += `<th>${data.fields[index].name}</th>`
                 };

             table_string += ` <th>function</th>`
             table_string += `</tr>`;
             // display all rows of table;
             let num_rows = data.rowCount;
             for (let index = 0; index < num_rows; index++) {
                    table_string+=`<form action="crud" method="post">`
                 table_string += `</tr>`;
                 for(let j=0; j<num_fields; j++){
                     let cell = data.rows[index][data.fields[j].name]
                     table_string += `<td>${cell}</td>`;
                 }
                 table_string += `
                    <td><button type="submit" value="Add"> Add</button>
                    <button type="submit"> Delete</button>
                    <button type="submit" value="Update"> Update</button></td>`
                 table_string += ` </tr>`;
             };


     table_string += `</table>`;


return table_string;
}
module.exports = display_product;