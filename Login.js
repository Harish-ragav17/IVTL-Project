const username=window.localStorage.getItem("loggedin")
if(username=="null")
{
  window.location.href="signin.html"
}else
{
    document.getElementById("link-1").innerText="Welcome "+username
}
function logout()
{
window.localStorage.setItem("loggedin","null")
}