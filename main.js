const { app, BrowserWindow, ipcMain } =  require('electron');

app.on('ready', () =>{
    console.log('Ok sua aplicação esta pronta');
   
   
    let mainWindow =  new BrowserWindow({
        width: 768,
        height: 900,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }

    });    
    mainWindow.loadURL(`file://${__dirname}/app/index.html`);    


  
})

/*ipcMain.on('CadastroProjeto', ()=>{
   
    let mainProjeto =  new BrowserWindow({
        width: 768,
        height: 900,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })

    mainProjeto.loadURL(`file://${__dirname}/app/paginas/Projetos.html`)
})*/