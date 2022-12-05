class Cars
{
    #items;
    total;
    flag;
    constructor(jsn)
    {
        this.#items = [];
        this.flag=true;
        this.total=0;
    }
   initialize(jsn)
    {
        this.setCars(jsn)
       
   }
   setCars(jsn)
   {
        var arr = [];
        $.each(jsn.cars, function(key, value)
        {
            arr[key] = {
                            no : key+1,
                            item : value.name,
                            manuf : value.manufacturer,
                            quantity : 0,
                            price : value.price,
                            image : 'images/'+value.image,
                            subtotal : 0
                        };
        
            
        });
        this.#items= arr;
    console.log(this.#items);
   }
   updateCars(keyMain)
   {
        var arr = this.#items;
        var tot = 0;
        $.each(arr, function(key, value)
        {
           
            if(key==keyMain)
            {
                var updatedCar = {
                    no : value.no,
                    item : value.item,
                    manuf : value.manuf,
                    quantity : parseInt(value.quantity)+1,
                    price : value.price,
                    image : value.image,
                    subtotal : parseFloat(value.subtotal)+parseFloat(value.price)
                };
                tot = tot + updatedCar.subtotal;
                arr[key] = updatedCar;
            }
            else
            {
                tot = tot + parseFloat(value.subtotal);
            }
        });
        this.#items= arr;
        this.total= tot;
    console.log(this.#items);
   }
   showItems()
   {
        var str = '<table width="100%" id="shopTbl" border="1">'+
        '<thead><tr><th>#No</th><th>Image</th><th>Item</th><th>Manufacturer</th><th>quantity</th><th>Price</th><th>Subtotal</th><tr></thead><tbody>';          ;
        $.each(this.#items, function(key, value)
        {
            str += '<tr><td>'+key+1+'</td>';
            str += '<td><img class="shop-img" key="'+key+'" price = "'+value.price+'" src="'+value.image+'" width="200"></td>';
            str += '<td>'+value.item+'</td>';
            str += '<td>'+value.manuf+'</td>';
            str += '<td>'+value.quantity+'</td>';
            str += '<td>'+value.price+'</td>';
            str += '<td>'+value.subtotal+'</td>';
            
            str += '</tr>';

            });
        str += '</tbody></table">';
        return str;
   }
   setValue(type, val)
    {
       
                
    }
   
    getTotal()
   {
      return this.total;
   }

}
