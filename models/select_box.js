var pg_con = require('./pg_config')
async function gen_select_box(){
    let shop_query=
    'Select shops.id,shops.name,users.role From shops JOIN users ON shops.id=users.shop_id ORDER BY id';
    const data = await pg_con.query(shop_query)
    let box_string=
        `<table border ='1'>
            <tr>
              <form action ="/admin/select_box" method="post">
                  <label for="shop">Choose a shop:</label>
                    <select name="shop" id="shop">
                        <option name="allshop" value="3" selected>All shops</option>`
                        let select_item = data.rows.length;
                        for (let i = 0; i < select_item; i++) {
                            if (data.rows[i].roles != "director") {
                                box_string += `<option value=${data.rows[i].id}>${data.rows[i].name}</option>`;
                            }
                        }
              box_string+=`</select>
                <input type="submit" value="View">
      </form>`
    return box_string
}
module.exports=gen_select_box;
