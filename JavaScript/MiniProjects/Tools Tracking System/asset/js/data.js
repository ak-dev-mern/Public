
// Employee Name Array
let employeeName = [
  "Abdul Rahman",
  "Ajithkumar",
  "Arul",
  "Arun",
  "Aung Myat Thu",
  "B.Vinod",
  "Bala",
  "Busa Thata Rao",
  "Chandan",
  "Das Sapan",
  "Guru",
  "Htet Lwin",
  "Karan Kumar",
  "Karuppaiyan",
  "Kyaw Myo Thet",
  "Kyaw Sein Lin",
  "Logvel",
  "Lokeshkumar",
  "M.Prasad",
  "Manikandan",
  "Min Aung",
  "Murali",
  "Naveen",
  "Ng Hock Choon",
  "Pyin Nyar",
  "Renjumon",
  "Robert",
  "S.Varaprasad",
  "S.Vinoth",
  "San Min Zaw",
  "Saravanan",
  "Sarker Ashim",
  "Selvakumar",
  "Silambarasan",
  "Sivakumar",
  "Subba Reddy",
  "Tay Zar Linn",
  "Than Min Oo",
  "Thu Ya Soe",
  "Velmurugan",
  "Vignesh",
  "Win Min Then",
  "Win Swe",
  "Win Zaw Oo",
];
employeeName.forEach(function (item) {
    let name = document.createElement("option");
    name.text = item;
    name.value = item;
  personName.appendChild(name);
  
});

employeeName.forEach(function (item) {
  let nameReturn = document.createElement("option");
  nameReturn.text = item;
  nameReturn.value = item;
  returnPersonName.appendChild(nameReturn);
});


// Tools Name Array

let equipName = ["i-pad", "Impact Wrench", "Torque Wrench"];

equipName.forEach(function (item) {
  let tool = document.createElement("option");
  tool.text = item;
  tool.value = item;
  toolsName.appendChild(tool);
});


// Unit Name Array


let locationName = [
  "U6300",
  "U6200",
  "U5500",
  "U5100",
  "U2300",
  "U3200",
  "CA Regen",
  "S1",
  "S2",
  "Mech Workshop",
  "U6100",
];

locationName.forEach(function (item) {
  let unit = document.createElement("option");
  unit.text = item;
  unit.value = item;
  unitName.appendChild(unit);
});