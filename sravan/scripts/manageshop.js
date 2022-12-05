var obj = new Cars();
$(document).ready(function(){
    
    fetch('./data.json')
    .then((response) => response.json())
    .then((json) => 
    initializeShop(json)
    );
   
    $(document).on('click','.shop-img',function(){
        
        var k = $(this).attr('key');
        obj.updateCars(k);
        var str =  obj.showItems();
        var tot =  obj.getTotal();
        $('#shop').html(str);
        $('#total').val(tot);
     })
})
function initializeShop(jsn)
{
    obj.setCars(jsn);
    var str =  obj.showItems();
    var tot =  obj.getTotal();
    $('#shop').html(str);
    $('#total').val(tot);

}