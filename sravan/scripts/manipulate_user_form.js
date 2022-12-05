function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
    }
$(document).ready(function(){
    var obj = new UserInfo();
    $('#address_form').submit(function(evant){
        event.preventDefault();
        obj.setValue("fname",$('#fname').val());
        obj.setValue("lname",$('#lname').val());
        obj.setValue("gender",$("input:radio[name ='gender']:checked").val());
        obj.setValue("email",$('#email').val());
        obj.setValue("mobile",$('#mobile').val());
        obj.setValue("country",$('#country').val());
        obj.setValue("zone",$('#zone').val());
        obj.setValue("area",$('#area').val());
        obj.setValue("ctype",$('#ctype').val());
        obj.setValue("cnumber",$('#cnumber').val());
        obj.setValue("expiry",$('#expiry').val());
        obj.validate();
        var response = obj.submitForm();
        if(response.status===true)
        {
            $('#formSuccessMessage').html('Well done! submitted successfully.')
            console.log(getCookie('userinfo'));   
        }
        else
        {
            $('#formSuccessMessage').html('');
            $.each(response.errors, function(key, value)
                {
                    $('#'+key+'_error').html(value);
                    
                });
               
                getCookie('userinfo')
       }

        
    })
})