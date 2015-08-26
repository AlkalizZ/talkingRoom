/**
 * Created by Alkali on 15/8/26.
 */
$(function(){

    var button = $(":button"),
        textArea = $(":text"),
        show = $("#show"),
        ul = show.children();
    console.log(ul);

    button.click(function(){
        sendMessage();
    });
    textArea.keydown(function (e) {
        if(e.keyCode == 13){
            sendMessage();
        }
    });
    function sendMessage(){
        var message = textArea.val();
        $.ajax({
            url: "index.php",
            type: "POST",
            dataType: "JSON",
            data: {
                content: message
            },
            success: function(data){
                ul.append("<li>" + data.data + "</li>");
                textArea.val("");
            },
            error: function(data){
                if(data.status === 404){
                    alert("404 NOT FOUND");
                }
            }
        })
    }
});