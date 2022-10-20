async function gen_select_box(){
    let box_string=`
    <label for="cars">Choose a shop:</label>

<select name="cars" id="cars">
  <option value="volvo">Shop 1</option>
  <option value="saab">Shop 2</option>
  <option value="mercedes">Shop 3</option>
  <option value="audi" selected>All shop</option>
</select>
      `
    return box_string
}
module.exports=gen_select_box;