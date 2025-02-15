// ---- Write code below ---- \\
function dinner()
{
  //it does not have to be the same variable name nor prompt
  let food = prompt("Food");
  let smthStrange = prompt ("Something Strange");
  let adj = prompt("Adjective");
  let animal = prompt("Animal");
  let verb = prompt("Verb");
  let obj = prompt("Object");
  let funQuote1 = prompt("A Funny Quote");
  let funQuote2 = prompt("Another Funny Quote");
  document.getElementById("output").innerHTML = `
    <p>The dinner party started with a dish of ${food} that smelled like ${smthStrange}. 
    Suddenly, a ${adj} ${animal} appeared and started ${verb}ing on the table! 
    The host grabbed a ${obj} and yelled "${funQuote1}!" 
    We all laughed and said "${funQuote2}." It was unforgettable!</p>
    `;
}

function mystery()
{
  const adj = prompt("Adjective");
  const place = prompt("Place");
  const sound = prompt("Sound");
  const silName = prompt("A Silly Name");
  const obj = prompt("An Object");
  const noun = prompt("A Noun");
  const name = prompt("A Name");
  const jobTitle = prompt("A Job Title");
  const verb = prompt("Verb");
  const sub = prompt("A Substance");
  const food = prompt("Food");
  document.getElementById("output").innerHTML = `
    <p>On a(n) ${adj} night in the grand ${place}, a loud ${sound} revealed Lord ${silName} lying beside a ${obj}, muttering, "It was the ${noun}!"
  Detective ${name}, questioned the ${jobTitle}, who was caught ${verb}ing near the scene. But the truth was stranger than fiction.
  It turns out Lord ${silName} had slipped on ${sub} while trying to steal a plate of ${food}.
  Everyone laughed, and the detective vowed to investigate only serious cases from now on.</p>
  `;
}