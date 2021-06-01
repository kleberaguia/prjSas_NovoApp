let btnCadastroProjeto =  document.querySelector('#conteudoHTML');
//const dbACCESS = require('../db/db');

btnCadastroProjeto.addEventListener('click',function(){
     let btSalvar =   document.querySelector('#salvarprojeto');  
     let btCancelar =   document.querySelector('#cancelarprojeto');  



     btSalvar.addEventListener('click',function(){ 
            let coordenadas = document.getElementById("Grid").getBoundingClientRect()
            if(coordenadas.left === 0){

                let dataProjeto  = {
                                    nomeprojeto:    document.querySelector('#textprojeto').value,
                                    cliente:    document.querySelector('#cliente').value,
                                    TipoProjeto:    document.querySelector('#TipoProjeto').value,
                                    Departamento:    document.querySelector('#Departamento').value,
                                    Gestor:    document.querySelector('#Gestor').value,
                                    exampleFormControlTextarea2:    document.querySelector('#exampleFormControlTextarea2').value,
                                    datainicio:    document.querySelector('#datainicio').value,
                                    dataPrazo:    document.querySelector('#dataPrazo').value,
                                    dataFim:    document.querySelector('#dataFim').value
                                    }                   

                console.log(dataProjeto)




                document.getElementById("conteudoHTML").style.display =  'none'; 
                document.getElementById("Grid").style.left = 113 + '.px';
                document.getElementById("Grid").style.display =  'Block';
            }else{
                document.getElementById("conteudoHTML").style.display =  'none'; 
                document.getElementById("Grid").style.left = 113 + '.px';
            }
        })

        btCancelar.addEventListener('click',function(){
            console.log('aqui é o botao cancelar')
            document.getElementById("Grid").style.left = 113 + '.px';
            document.getElementById("Grid").style.display =  'Block';
            document.getElementById("conteudoHTML").style.display =  'none';

        })
     
})