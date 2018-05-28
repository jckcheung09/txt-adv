var trump = 1;
var durability;
var ammo = 0;
var body;
var power;
var loop = 1;
var matt;

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
    ammo=1;
    wep = 'RocketLauncher';
  }
  var t = {
    Model:name+'-800',
    hp: durability,
    body_material:body,
    power: power,
    psource: pow_src,
    ammo: ammo,
    weapon: wep,
    damage: 0

  }
  console.log(t);
  // Mission 1
  alert('A spider tank is patrolling the area, there is a powered down predator drone nearby and you spot an opening in the spider tanks patrol route to run pass');
  var act = prompt('Enter 1 to Run away, 2 to Power drone, 3 to Engage Spider tank');
  if(act == 1 && t.hp>=10){
    t.hp = t.hp-10;
    if (t.hp<=0){
      alert('MISSION FAILED \n you sustained critial damage, John Conner is doomed. Activating self distruct protocol')
      return
    }
    alert('You sucessfully avoided the spider tank');
  }else if (act == 2 && t.power>=50) {
    t.power = t.power-50;
    alert('You powerd up the predator drone with you power source and it destroyed the spider tank');
  }else if (act == 2 && t.power<50) {
    alert('MISSION FAILED \n you ran out of power trying to power the drone, John Conner is doomed. ');
    return
  }else if (act == 3 && t.ammo>=1) {
    t.ammo = t.ammo-1;
    t.hp = t.hp-20;
    if(t.hp>=1){
      alert('You managed to disable the spider tank with your '+t.weapon);
    }else {
      alert('MISSION FAILED \nyou defeated the spider tank but you sustained critial damage, John Conner is doomed. Activating self distruct protocol')
      return
    }
  }
  // Mission 2
  alert('Donald Trump and his wall is blocking your way');
  act = prompt('Enter 1 to run away, 2 to destroy the wall');
  if(act==1 &&t.body_material==('Gold')){
    alert('Donald Trump is awed by your Golden body and let you pass.');
  }else if (act==1 && t.hp>0) {
    t.hp=t.hp-50;
    if(t.hp>=1){
      alert('You managed to run pass the wall suffering major damage'+t.weapon);
      }else {
        alert('MISSION FAILED \nyou were shot to pieces by the guards on the wall ')
        return
      }
    }else if (act==2 && t.ammo>0) {
      t.hp=t.hp-30;
      if(t.hp>=1){
        alert('You managed to destroy the wall with your'+t.weapon);
      }else {
        alert('MISSION FAILED \n  You sustained critial damage, John Conner is doomed. Activating self distruct protocol')
        return
      }
    }else if (act==2 && t.ammo<=0 ) {
      alert('MISSION FAILED \nYou have no ammunition to fight with and were shot to pieces charging at the enemy, John Conner is doomed. Activating self distruct protocol')
      return
    }
  alert('You found John Connor but he is being chased after by T-1000');
  act = prompt('Enter 1 to run, 2 to showdown T-1000');
  if(act==1){
    alert('MISSION FAILED \nJohn Conner was brutally murdered by T-1000 I hope you are happy now. Activating self distruct protocol')
    return
  }else if (act==2 && t.ammo>0) {
    console.log('T-1000');
    if (t.weapon=='Shotgun') {
      t.hp=t.hp-50;
      if(t.hp>=1){
        alert('You managed to destroy the T-1000 with your'+t.weapon);
      }else {
        alert('MISSION FAILED \n You managed to destory T-1000 but you recieved irreparable damage in return. John Connor is safe for now but he stands no chance against future Terminator attacks')
        return
      }
    }else if (t.weapon=='RocketLauncher') {
      alert('MISSION SUCESS \nT-1000 stood no chance against your '+t.weapon+' John Connor is safe and you can continue your prime directive');
    }
  } else if (act==2 && t.ammo<=0 ) {
    alert('MISSION FAILED \nYou have no ammunition to fight with and was turned into scrap metal by T-1000, John Conner is doomed.')
    return
  }

}

main();
