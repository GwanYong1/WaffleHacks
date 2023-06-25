const vanillaDoughPrice = 3.00;
const croissantsPrice = 4.00;
const taterTotsPrice = 4.00;

const chocolateChipsPrice = 1.00;
const pepperoniCheesePrice = 2.00;
const hamEggPrice = 2.00;

const berryMedleysPrice = 1.00;
const whippedCreamPrice = 0.50;
const iceCreamPrice = 1.00;

let total = 0;
//let total = parseFloat('0.00').toFixed(2);
//total = (Math.round(total * 100) / 100).toFixed(2);


let waffleList = [];
for(let i = 0; i < 6; i++)
{
  waffleList[i] = 0;
}

console.log(waffleList);

function update1()
{
  waffleList[0] = 'vanillaDough';
  waffleList[1] = vanillaDoughPrice;
  console.log(waffleList);

  updateTotal();
  document.getElementById('base').innerHTML = 'Vanilla Dough';
}

function update2()
{
  waffleList[0] = 'croissants';
  waffleList[1] = croissantsPrice;
  console.log(waffleList);

  updateTotal();
  document.getElementById('base').innerHTML = 'Croissants';
}

function update3()
{
  waffleList[0] = 'taterTots';
  waffleList[1] = taterTotsPrice;
  console.log(waffleList);

  updateTotal();
  document.getElementById('base').innerHTML = 'Tater Tots';
}

function update4()
{
  waffleList[2] = 'chocolateChips';
  waffleList[3] = chocolateChipsPrice;
  console.log(waffleList);

  updateTotal();
  document.getElementById('filling').innerHTML = 'Chocolate Chips';
}

function update5()
{
  waffleList[2] = 'pepperoniCheese';
  waffleList[3] = pepperoniCheesePrice;
  console.log(waffleList);

  updateTotal();
  document.getElementById('filling').innerHTML = 'Pepperoni & Cheese';
}

function update6()
{
  waffleList[2] = 'hamEgg';
  waffleList[3] = hamEggPrice;
  console.log(waffleList);

  updateTotal();
  document.getElementById('filling').innerHTML = 'Ham & Egg';
}

function update7()
{
  waffleList[4] = 'berryMedleys';
  waffleList[5] = berryMedleysPrice;
  console.log(waffleList);

  updateTotal();
  document.getElementById('topping').innerHTML = 'Berry Medleys';
}

function update8()
{
  waffleList[4] = 'whippedCream';
  waffleList[5] = whippedCreamPrice;
  console.log(waffleList);
  
  updateTotal();
  document.getElementById('topping').innerHTML = 'Whipped Cream';
}

function update9()
{
  waffleList[4] = 'iceCream';
  waffleList[5] = iceCreamPrice;
  console.log(waffleList);

  updateTotal();
  document.getElementById('topping').innerHTML = 'Ice Cream';
}

function updateTotal()
{
  total = 0;
  for(let i = 1; i < waffleList.length; i = i + 2)
  {
    total = total + waffleList[i];
  }
  total = (Math.round(total * 100) / 100).toFixed(2);
  document.getElementById('total').innerHTML = total;
  console.log(total);
}

function makeAnother()
{
  for(let i = 0; i < 6; i++)
  {
  waffleList[i] = 0;
  }

  total = 0;
  document.getElementById('total').innerHTML = total;
  console.log(total);
  console.log(waffleList);
  document.getElementById('base').innerHTML = ''
  document.getElementById('filling').innerHTML = '';
  document.getElementById('topping').innerHTML = '';

  document.getElementById('waffleImg').style.visibility = 'hidden';
}

document.getElementById('waffleImg').style.visibility = 'hidden';

function makeWaffle()
{
  let base = waffleList[0];
  let filling = waffleList[2];
  let topping = waffleList[4];
  
  if(base == 'vanillaDough' && filling == 'chocolateChips' && topping == 'berryMedleys')
  {
    console.log("test");
    document.getElementById('waffleImg').style.visibility = 'visible';
  }
  if(base == 'vanillaDough' && filling == 'chocolateChips' && topping == 'whippedCream')
  {
    
  }
  if(base == 'vanillaDough' && filling == 'chocolateChips' && topping == 'iceCream')
  {
    
  }
  if(base == 'vanillaDough' && filling == 'pepperoniCheese' && topping == 'berryMedleys')
  {
    
  }
  if(base == 'vanillaDough' && filling == 'pepperoniCheese' && topping == 'whippedCream')
  {
    
  }
  if(base == 'vanillaDough' && filling == 'pepperoniCheese' && topping == 'iceCream')
  {
    
  }
  if(base == 'vanillaDough' && filling == 'hamEgg' && topping == 'berryMedleys')
  {
    
  }
  if(base == 'vanillaDough' && filling == 'hamEgg' && topping == 'whippedCream')
  {
    
  }
  if(base == 'vanillaDough' && filling == 'hamEgg' && topping == 'iceCream')
  {
    
  }
  if(base == 'croissants' && filling == 'chocolateChips' && topping == 'berryMedleys')
  {
    
  }
  if(base == 'croissants' && filling == 'chocolateChips' && topping == 'whippedCream')
  {
    
  }
  if(base == 'croissants' && filling == 'chocolateChips' && topping == 'iceCream')
  {
    
  }
  if(base == 'croissants' && filling == 'pepperoniCheese' && topping == 'berryMedleys')
  {
    
  }
  if(base == 'croissants' && filling == 'pepperoniCheese' && topping == 'whippedCream')
  {
    
  }
  if(base == 'croissants' && filling == 'pepperoniCheese' && topping == 'iceCream')
  {
    
  }
  if(base == 'croissants' && filling == 'hamEgg' && topping == 'berryMedleys')
  {
    
  }
  if(base == 'croissants' && filling == 'hamEgg' && topping == 'whippedCream')
  {
    
  }
  if(base == 'croissants' && filling == 'hamEgg' && topping == 'iceCream')
  {
    
  }
  if(base == 'taterTots' && filling == 'chocolateChips' && topping == 'berryMedleys')
  {
    
  }
  if(base == 'taterTots' && filling == 'chocolateChips' && topping == 'whippedCream')
  {
    
  }
  if(base == 'taterTots' && filling == 'chocolateChips' && topping == 'iceCream')
  {
    
  }
  if(base == 'taterTots' && filling == 'pepperoniCheese' && topping == 'berryMedleys')
  {
    
  }
  if(base == 'taterTots' && filling == 'pepperoniCheese' && topping == 'whippedCream')
  {
    
  }
  if(base == 'taterTots' && filling == 'pepperoniCheese' && topping == 'iceCream')
  {
    
  }
  if(base == 'taterTots' && filling == 'hamEgg' && topping == 'berryMedleys')
  {
    
  }
  if(base == 'taterTots' && filling == 'hamEgg' && topping == 'whippedCream')
  {
    
  }
  if(base == 'taterTots' && filling == 'hamEgg' && topping == 'iceCream')
  {
    
  }
}
document.getElementById('total').innerHTML = total;
