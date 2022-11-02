$(document).ready( function () {
    $("#marsbtn").click(function () {



        $("body").removeClass("earthy moony");
        $("body").addClass("mars");

        $("#haveaccountbtn").removeClass("btn-outline-primary btn-outline-light");
        $("#haveaccountbtn").addClass("btn-outline-warning");


        $("#signUptext").addClass("text-warning");
        $("#signUptext").removeClass("text-primary text-light");

        $("#formDiv").css("margin-top","1%");

        $("#signUpbtn").addClass("btn-warning");
        $("#signUpbtn").removeClass("btn-primary btn-dark");

        $("#adventxt").addClass("text-warning");
        $("#adventxt").removeClass("text-primary text-light");


    });
    $("#earthbtn").click(function () {



        $("body").addClass("earthy");
        $("body").removeClass("mars moony");

        $("#haveaccountbtn").addClass("btn-outline-primary");
        $("#haveaccountbtn").removeClass("btn-outline-warning btn-outline-light");


        $("#signUptext").removeClass("text-warning text-light");
        $("#signUptext").addClass("text-primary");

        $("#formDiv").css("margin-top","4%");

        $("#signUpbtn").removeClass("btn-warning btn-dark");
        $("#signUpbtn").addClass("btn-primary");

        $("#adventxt").removeClass("text-warning text-light");
        $("#adventxt").addClass("text-primary");


    });

    $("#moonbtn").click(function () {



        $("body").addClass("moony");
        $("body").removeClass("mars earthy");

        $("#haveaccountbtn").addClass("btn-outline-light");
        $("#haveaccountbtn").removeClass("btn-outline-warning btn-outline-primary");


        $("#signUptext").addClass("text-light");
        $("#signUptext").removeClass("text-primary text-warning");

        $("#formDiv").css("margin-top","0%");

        $("#signUpbtn").addClass("btn-dark");
        $("#signUpbtn").removeClass("btn-primary btn-warning");

        $("#adventxt").removeClass("text-warning text-primary");
        $("#adventxt").addClass("text-light");


    });

    $("#signUpbtn").click(function () {
        let valid= '@(ViewBag.IsTrue)';

        let toastmessages=document.getElementById("liveToast");

        let toast=new bootstrap.Toast(toastmessages);
        toast.show();






    });

    $("#signUptext").fadeTo(200,0.3)
        .fadeTo(200,1.0)
        .fadeTo(200,0.3)
        .fadeTo(200,1.0);



});

