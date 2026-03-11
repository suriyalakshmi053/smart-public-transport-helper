function showSignup(){

document.getElementById("loginForm").style.display="none";
document.getElementById("signupForm").style.display="block";

}

function showLogin(){

document.getElementById("signupForm").style.display="none";
document.getElementById("loginForm").style.display="block";

}

function signup(){

let username=document.getElementById("user").value;
let email=document.getElementById("email").value;
let pass=document.getElementById("pass").value;
let confirm=document.getElementById("confirmPass").value;

if(username=="" || email=="" || pass=="" || confirm==""){

alert("Please fill all fields");
return;

}

if(pass!==confirm){

alert("Passwords do not match");
return;

}

alert("Account created successfully!");

window.location="home.html";

}

function login(){

let user=document.getElementById("loginUser").value;
let pass=document.getElementById("loginPass").value;

if(user=="" || pass==""){

alert("Enter username and password");
return;

}

alert("Login successful");

window.location="home.html";

}
function showSignup(){

document.getElementById("loginForm").style.display="none";
document.getElementById("signupForm").style.display="block";
document.getElementById("title").innerText="Signup";

}

function showLogin(){

document.getElementById("signupForm").style.display="none";
document.getElementById("loginForm").style.display="block";
document.getElementById("title").innerText="Login";

}

function signup(){

let username=document.getElementById("user").value;
let email=document.getElementById("email").value;
let pass=document.getElementById("pass").value;
let confirm=document.getElementById("confirmPass").value;

if(username=="" || email=="" || pass=="" || confirm==""){

alert("Please fill all fields");
return;

}

if(pass!==confirm){

alert("Passwords do not match");
return;

}

alert("Account created successfully");

window.location="home.html";

}

function login(){

let user=document.getElementById("loginUser").value;
let pass=document.getElementById("loginPass").value;

if(user=="" || pass==""){

alert("Enter username and password");
return;

}

alert("Login successful");

window.location="home.html";

}

function googleLogin(){

alert("Signed in with Google");

window.location="home.html";

}
function searchBus(){

let from=document.getElementById("from").value;
let to=document.getElementById("to").value;

if(from=="" || to==""){

alert("Enter starting point and destination");
return;

}

document.getElementById("busResult").innerHTML=

"<h3>Available Bus</h3>" +
"Bus Number: 21B <br>" +
"Route: "+from+" → "+to+"<br>" +
"Departure: 10:30 AM <br>" +
"Estimated Time: 45 minutes";

}
function bookBus(busName){

alert("Seat selection coming soon for " + busName);

}
let map;
let marker;
let selectedBus = null;

const buses = {

1:{
name:"GreenLine Express",
id:"BUS101",
source:"Chennai",
destination:"Pondicherry",
location:"Near Villupuram Highway",
lat:11.9401,
lng:79.4861
},

2:{
name:"SRM Travels",
id:"BUS102",
source:"Pondicherry",
destination:"Chennai",
location:"Tindivanam Bus Stop",
lat:12.2341,
lng:79.6556
},

3:{
name:"Express Rider",
id:"BUS103",
source:"Villupuram",
destination:"Chennai",
location:"Chengalpattu Toll",
lat:12.6916,
lng:79.9787
},

4:{
name:"City Fast",
id:"BUS104",
source:"Chennai",
destination:"Villupuram",
location:"Tambaram Bus Stand",
lat:12.9249,
lng:80.1000
},

5:{
name:"Delta Transport",
id:"BUS105",
source:"Cuddalore",
destination:"Pondicherry",
location:"Cuddalore Main Road",
lat:11.7447,
lng:79.7680
},

6:{
name:"Ocean Travels",
id:"BUS106",
source:"Pondicherry",
destination:"Cuddalore",
location:"Pondicherry ECR Road",
lat:11.9139,
lng:79.8145
},

7:{
name:"Highway Express",
id:"BUS107",
source:"Tindivanam",
destination:"Chennai",
location:"Melmaruvathur Highway",
lat:12.4300,
lng:79.8300
},

8:{
name:"Royal Bus",
id:"BUS108",
source:"Chennai",
destination:"Tindivanam",
location:"Chengalpattu Bus Stand",
lat:12.7000,
lng:79.9800
}

};

function initMap(){

map = new google.maps.Map(document.getElementById("map"),{

zoom:8,
center:{lat:12.9716,lng:79.1585}

});

}

function showBusLocation(){

const id = document.getElementById("busSelect").value;

if(id==="") return;

selectedBus = buses[id];

const location = {lat:selectedBus.lat,lng:selectedBus.lng};

map.setCenter(location);
map.setZoom(10);

if(marker) marker.setMap(null);

marker = new google.maps.Marker({

position:location,
map:map,
title:selectedBus.name

});

document.getElementById("locationInfo").innerHTML =
"<b>Current Location:</b> " + selectedBus.location;

}

function showDetails(){

if(!selectedBus) return;

document.getElementById("busDetails").innerHTML=

"<h3>"+selectedBus.name+"</h3>"+
"<p><b>Bus ID:</b> "+selectedBus.id+"</p>"+
"<p><b>Source:</b> "+selectedBus.source+"</p>"+
"<p><b>Destination:</b> "+selectedBus.destination+"</p>"+
"<p><b>Live Location:</b> "+selectedBus.location+"</p>";

}
let path = [
{lat:12.9716,lng:79.1585},
{lat:12.9000,lng:79.3000},
{lat:12.7500,lng:79.4500},
{lat:12.5000,lng:79.6000}
];

let step = 0;

function moveBus(){

if(step >= path.length) step = 0;

marker.setPosition(path[step]);
map.setCenter(path[step]);

step++;

}

setInterval(moveBus,3000);
marker = new google.maps.Marker({

position: location,
map: map,
icon:"https://maps.google.com/mapfiles/kml/shapes/bus.png"

});
const route = new google.maps.Polyline({
path: path,
geodesic: true,
strokeColor: "#FF0000",
strokeOpacity: 1.0,
strokeWeight: 2
});

route.setMap(map);
function searchBus(){

let source = document.getElementById("source").value;
let destination = document.getElementById("destination").value;
let date = document.getElementById("date").value;

if(source=="" || destination=="" || date==""){
alert("Please fill all fields");
return;
}
function searchBus(){

let source = document.getElementById("source").value;
let destination = document.getElementById("destination").value;
let date = document.getElementById("date").value;

if(source=="" || destination=="" || date==""){
alert("Please enter source, destination and date");
return;
}

let results = `

<h2>Available Buses</h2>

<div class="bus-card">

<h3>GreenLine Express</h3>

<p><b>Bus ID:</b> BUS101</p>

<p><b>Route:</b> ${source} → ${destination}</p>

<p><b>Departure:</b> 08:00 AM (Morning)</p>

<p><b>Price:</b> ₹150</p>

<button onclick="bookBus('BUS101')">Book Ticket</button>

</div>


<div class="bus-card">

<h3>SRM Travels</h3>

<p><b>Bus ID:</b> BUS102</p>

<p><b>Route:</b> ${source} → ${destination}</p>

<p><b>Departure:</b> 01:00 PM (Noon)</p>

<p><b>Price:</b> ₹220</p>

<button onclick="bookBus('BUS102')">Book Ticket</button>

</div>


<div class="bus-card">

<h3>Night Rider</h3>

<p><b>Bus ID:</b> BUS103</p>

<p><b>Route:</b> ${source} → ${destination}</p>

<p><b>Departure:</b> 09:30 PM (Night)</p>

<p><b>Price:</b> ₹350</p>

<button onclick="bookBus('BUS103')">Book Ticket</button>

</div>

`;

document.getElementById("searchResults").innerHTML = results;

}

function bookBus(busID){

alert("Booking for " + busID + " will be added soon");

}
function loginUser(){

let user=document.getElementById("loginUser").value;
let pass=document.getElementById("loginPass").value;

let savedUser=localStorage.getItem("username");
let savedPass=localStorage.getItem("password");

if(user==savedUser && pass==savedPass){

alert("Login Successful");

window.location.href="home.html";

}
else{

alert("Invalid Username or Password");

}

}


function showSignup(){

document.getElementById("signupBox").style.display="block";

}


function createAccount(){

let user=document.getElementById("newUser").value;
let email=document.getElementById("newEmail").value;
let pass=document.getElementById("newPass").value;
let confirm=document.getElementById("confirmPass").value;

if(user=="" || email=="" || pass=="" || confirm==""){

alert("Please fill all fields");
return;

}

if(pass!=confirm){

alert("Passwords do not match");
return;

}

localStorage.setItem("username",user);
localStorage.setItem("password",pass);

alert("Account created successfully");

window.location.href="index.html";

}