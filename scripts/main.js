
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome to the Oklahoma City Roleplay website!");
  await delay(1000);
  createText("Here are some commands you can run:");
 
  createCode("about", "View info about the server.");
  createCode("help", "View the command list.");
  createCode("social -a", "View the server's social networks.");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "user";
  span1.textContent = "@";
  span2.textContent = "okcrp-terminal";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "help"){
    trueValue(value);
    createCode("about", "View info about the server.");
    createCode("social -a", "View the server's social networks.");
    createCode("clear", "Clear the terminal.");
  }
  else if(value === "about"){
    trueValue(value);
    createText("Welcome to Oklahoma City Roleplay!")
    createText("We are an up-and-coming roleplay server that aims to provide a fun but professional roleplay experience for everyone.")
    createText("To view important links for our server, type 'social -a'.")
  }
  else if(value === "social -a"){
    trueValue(value);
    createText("<a href='https://discord.gg/TAeqQ4v6Nz/' target='_blank'><i class='fab fa-discord white'></i> discord.gg/TAeqQ4v6Nz</a>")
    createText("<a href='https://twitter.com/OklahomaCityRP/' target='_blank'><i class='fab fa-twitter white'></i> twitter.com/OklahomaCityRP</a>")
    createText("<a href='https://policeroleplay.community/join/OklCity/' target='_blank'><i class='fab fa-readme white'></i> policeroleplay.community/join/OklCity")
  }
  else if(value === "social"){
    trueValue(value);
    createText("Didn't you mean: social -a?")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();