$(document).ready(function(){
    $(document).on("click","#clickMe",function(){
        $(this).text("Hello you")
    })
    $(document).on("click","#img",function(){
        alert("Hello: "+$("#name").val())
        $("#name").val("")
    })
})