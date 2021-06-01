

 const ADODB = require('node-adodb');
   
    let pathDB =  "D:\\projetos\\projeto_SAS\\oficial\\versao_K01\\KPI";
    const connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=' + pathDB + '\\db\\dbSAS.mdb');
    ADODB.debug = true;


function SelectProjetos(){

    let queryString = 'select * from tb_Projeto'
 connection
        .query(queryString)
        .then(data => {
            console.log(JSON.stringify(data, null, 2));
            const [row] = data
            console.log(row);
            return row
        })
        .catch(error => {
            console.log(error);
        })

}

function SelectTipoDemanda(){

    let queryString = 'select * from tb_tipo_Demanda'
  connection
        .query(queryString)
        .then(data => {
            console.log(JSON.stringify(data, null, 2));
             const [row] = data
            console.log(row);
            return row
        })
        .catch(error => {
            console.log(error);
        })

}

let teste = function(){
      console.log("Aquiiiiiiiiiiiiiiiiiiiiiiii") 
    }

module.exports = teste



