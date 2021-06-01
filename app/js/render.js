const { ipcRenderer } = require('electron');
let linkCadastroProjeto =  document.querySelector('#projeto');

let Grid = document.querySelector('#Grid');
let btEditar =  document.querySelector('#editarprojeto');


let  dbACCESS = require("./db");

console.log(dbACCESS.teste())


 function load(){
   /* const dbACCESS = require('./db.js');
    const tipoDemanda =  dbACCESS.SelectTipoDemanda();
    console.log(tipoDemanda)*/

    

    document.getElementById("Grid").style.display =  'block';
    Grid.addEventListener('click',function(){
       
        btEditar.addEventListener('click', function(){

            document.getElementById('Grid').focus();
            document.getElementById("Grid").style.left = 900 + '.px';
            let http =  new XMLHttpRequest();
            let urlProjeto = `${__dirname}/paginas/Projetos.html`
            http.open("GET",urlProjeto,true)
            http.onreadystatechange =  function(){            
                 if(http.readyState==4 && http.status == 200){            
                     var html = http.responseText
                  html =  new DOMParser().parseFromString(html,"text/html")
                  document.getElementById("conteudoHTML").innerHTML =  html.getElementById("cadastroProjeto").innerHTML ;             
                 }    
             }
             http.send();
            document.getElementById("conteudoHTML").style.display =  'block'
            
    })
})
        
}

//let btnSalvar =  document.querySelector('#salvarprojeto')



linkCadastroProjeto.addEventListener('click', function(){  
   

    console.log("Depois da conexao")
    
    document.getElementById("Grid").style.display =  'none';
    document.getElementById("conteudoHTML").innerHTML = ''
    document.getElementById("conteudoHTML").style.display =  'Block';    

       let http =  new XMLHttpRequest();
       let urlProjeto = `${__dirname}/paginas/Projetos.html`
       http.open("GET",urlProjeto,true)
       http.onreadystatechange =  function(){            
            if(http.readyState==4 && http.status == 200){           
                var html = http.responseText
             html =  new DOMParser().parseFromString(html,"text/html")
             document.getElementById("conteudoHTML").innerHTML =  html.getElementById("cadastroProjeto").innerHTML ;            
            }    
        }
        http.send();
})

