document.getElementById('quest-submit').onclick=function()
{
    if(document.getElementById('quest-inp').value==0)
    {
        alert("Question field is empty")
    }
    else
    {   let date=new Date();
        day=date.getDate();
        month=date.getMonth()+1;
        year=date.getFullYear();
        document.querySelector('.prev-questions').innerHTML +=
        `   <div class="quest">
            <p id="quest-date">${day}-${month}-${year}</p>
                <p>
                ${document.getElementById('quest-inp').value}
                </p>
              </div>
        `
        document.getElementById('quest-inp').value=" "
    }
}
document.getElementById('quest-clear').onclick=function()
{
    document.getElementById('quest-inp').value=" "
}