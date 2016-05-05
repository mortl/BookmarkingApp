const electron = require('electron');
const app = electron.app;

const BrowserWindow = electron.BrowserWindow;

let mainWindow;
var windowParams = { width: 800, height:600};

function createWindow(){

	//create the browser window;
	mainWindow = new BrowserWindow(windowParams);
	//render index.html which will contain our root Vue component
	mainWindow.loadURL('file://' + __dirname + "/index.html");

	//dereference the main window object when the window is closed
	mainWindow.on('closed',function(){
		mainWindow = null;
	});
}


// call the createWindow method when Electron has finished initializing
app.on ('ready', createWindow);

//when all windows are closed, quit the application on Windows/Linux
app.on('window-all-closed', function (){

	 //only quit the application on OS X if the users hits cmd + q
	 if(process.platform !== 'darwin'){
	 	app.quit();
	 }
});

app.on('activate', function (){
	//re-create the main window if the dock icon is clicked on OSX and no other windows were open
	//
	if( mainWindow === null){
		createWindow();
	}
});