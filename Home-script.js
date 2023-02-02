 window.onload=offer_calculation();

function offer_calculation()
{
  week_offer_percent=30;
  monthly_offer_percent=15;
  yearly_offer_percent=15;

  week_price=4.2*70;
  month_price=12.4*70;
  year_price=120.10*70;

  week_offer_price=((week_offer_percent*(week_price/100))-week_price);
  monthly_offer_price=((monthly_offer_percent*( month_price/100))- month_price);
  yearly_offer_price=((yearly_offer_percent*(year_price/100))-year_price);

  document.getElementById("weekly").innerText=week_offer_percent+"% off";
  document.getElementById("monthly").innerText=monthly_offer_percent+"% off";
  document.getElementById("yearly").innerText=yearly_offer_percent+"% off";
  document.getElementById("offer_price_w").innerText="$ "+(week_offer_price/70)*(-1);
  document.getElementById("offer_price_m").innerText="$ "+(monthly_offer_price/70)*(-1);
  document.getElementById("offer_price_y").innerText="$ "+(yearly_offer_price/70)*(-1);
}
function chat(num)
{
  switch (num)
  {
    case 1:
      document.getElementById("chat-box-head-name").innerText="John";
      break;
    case 2:
      document.getElementById("chat-box-head-name").innerText="Marshal";
      break;
    case 3:
      document.getElementById("chat-box-head-name").innerText="Harish";
      break;
    case 4:
      document.getElementById("chat-box-head-name").innerText="Robert";
      break;
  }
}
