// Form validating function
function check(event)
{
    event.preventDefault();
    let revs = document.forms["rev"]["review"].value;
    if(revs=="")
    {
       document.getElementById('errReview').style.display="block";
    }
    else{
        document.getElementById('popups').style.display="flex";
        document.forms["rev"].reset();
        document.body.style.overflow="hidden";
    }
    {

    }
}
function back()
{
    document.getElementById('popups').style.display="none";
    document.getElementById('errReview').style.display="none";
    document.body.style.overflow="auto";
}