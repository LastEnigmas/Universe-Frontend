
$( document).ready(function () {

    $("#submitCode").click(function () {
        handleCodeSubmission();


    });

});

function handleCodeSubmission(){

    let code=$("#code").val();

    if(code === '1234'){
        processNewOPassword();
    }


}

function processNewOPassword(){

    console.log("Called");

    $("#code").css("display","none");
    $("#submitCode").css("display","none");

}

