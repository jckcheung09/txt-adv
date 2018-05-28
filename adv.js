var trump = 1;
var durability;
var ammo = 0;
var body;
var power;
var loop = 1;

function main(){
  var name = prompt('Enter your model number');
  alert('Terminator '+name+'-800 \nPrime Directive: Protect John Connor \nStatus: Badly damaged \nLocation: Metal Factory \nRecommended Action: Repair, Gather Armaments, FIND AND PROTECT JOHN CONNOR ');
  var metal = prompt('Repair Materials Available: Gold , Steel \nPlease enter 1 for Gold or 2 for Steel');
  if (metal == 1){
    durability = 10;
    var body = 'Gold';
    alert('Repair Sucessful\nYou are now made of Gold, Everyone is blinded by your magnificent body');
  }else if (metal == '2') {
    durability = 100;
    var body = 'Steel';
    alert('Repair Sucessful\nYou are now made of Steel, its weaker than Hyperalloy but it will do for now');
  }
  var pow_src = prompt('Power Source Available: Enelope batteries, Nuclear Reactor \nPlease enter 1 for Enelope Batteries, 2 for Nuclear Reactor');
  if (pow_src == 1){
    power = 10;
    pow_src = 'Enelope Batteries';
    alert('Repair Sucessful\nYou are now battery powered, it was a good choice right?');
  }else if (pow_src == 2) {
    power = 100;
    pow_src = 'Nuclear Reactor';
    alert('Repair Sucessful\nYou are now Nuclear powered, handing out free radiation to everything around you');
  }
  var wep = prompt('Armaments Availible: Shotgun, Rocket Launcher,\n Please enter 1 for Shotgun 2 for Rocket Launcher')
  if(wep == 1){
    ammo = 8;
    wep = 'Shotgun'
  }
  else if (wep == 2) {
    ammo=2;
    wep = 'RocketLauncher';
  }
  var t = {
    Model:name+'-800',
    hp: durability,
    body_material:body,
    power: power,
    psource: pow_src,
    ammo: ammo,
    weapon: wep
  }
  console.log(t);
  alert('A spider tank is patrolling the area, there is a powered down predator drone nearby and you spot an opening in the spider tanks patrol route to run pass');
  var act = prompt('Enter 1 to Run away, 2 to Power drone, 3 to Engage Spider tank');
  if(act == 1 && t.power>=10){
    t.power = t.power-10;
    alert('You sucessfully avoided the spider tank');
  }else if (act == 2 && t.power>=50) {
    t.power = t.power-50;
    alert('You powred up the predator drone with you power source and it destoryed the spider tank');
  }else if (act == 2 && t.power<50) {
    alert('MISSION FAILED \n you ran out of power trying to power the drone, John Conner is doomed.');
    return
  }

}

main();
