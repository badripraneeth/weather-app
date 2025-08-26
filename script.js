// http://api.weatherapi.com/v1/current.json?key=f198547106d84c7a805104142252406&q=hyderabad&aqi=no

const temperature = document.querySelector(".temp p");
const locationfield = document.querySelector(".time_location p");
const datafield = document.querySelector(".time_location span");
const weathercondition = document.querySelector(".condition p");
const searchbox = document.querySelector(".search_area");
const form = document.querySelector("form");
const icon = document.querySelector(".icon");

form.addEventListener("submit",searchForLocation);




let target= "hyderabad"; // You can change this to any city you want to fetch weather data for
const fetchresult = async(city) => {
    let url=`http://api.weatherapi.com/v1/current.json?key=f198547106d84c7a805104142252406&q=${city}&aqi=no`
    const res= await fetch(url)

    const data= await res.json()
    console.log(data)



    let location = data.location.name;
    // console.log(location);
    let time = data.location.localtime;
    // console.log(time);
    let temp = data.current.temp_c;
    // console.log(temp);
    let condition=data.current.condition.text;
    // console.log(condition);

    let iconurl="https:"+data.current.condition.icon;
    updatedata(temp,location,time,condition ,iconurl);
    



}
function updatedata(tem,location,time,condition,iconUrl)
{

    let splitdate=time.split(" ")[0];
    let splittime=time.split(" ")[1];

    let currentDay= getDayName(new Date(splitdate).getDay());

    temperature.innerText=tem;
    locationfield.innerText=location;
    datafield.innerText=`${splitdate} ${currentDay} ${splittime}`;
    weathercondition.innerText=condition;
     // Use custom icon for Mist, otherwise use API icon
    

     icon.src = iconUrl;
}





function searchForLocation(e)
{
    e.preventDefault();
    target=searchbox.value;

    fetchresult(target);

}

function getDayName(number)
{
    switch(number) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "";
    }
}








// fetchresult(target);