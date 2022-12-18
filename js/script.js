$(document).ready(function(){
    /**
     * Ger current date
     */
    const date = new Date();
    const hour = date.getHours();
    let message = '';
    if(hour <= 12 )
    {
        message = "Good Morning";
    }
    if(hour >12 )
    {
        message = "Good afternoon"
    }
    if(hour >= 17)
    {
        message = "Good Evning"
    }
    $('#headingText').empty().append(message + "From ProeungSo Prida");
})