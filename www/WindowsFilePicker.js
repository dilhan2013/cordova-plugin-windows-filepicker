(function(cordova) {
 
 var WindowsFilePicker = function() {};
  
    WindowsFilePicker.prototype = {
    
        open: function(success, fail, fileTypes) {
            cordova.exec(success, fail, "WindowsFilePicker", "open", [fileTypes]);
        }

    };
  
    cordova.addConstructor(function() {
                         
        window.WindowsFilePicker = new FilePicker();
                         
    });

	
	window.WindowsFilePicker = new WindowsFilePicker();
    
    // backwards compatibility
    window.plugins = window.plugins || {};
    window.plugins.WindowsFilePicker = window.WindowsFilePicker;
  
})(window.PhoneGap || window.Cordova || window.cordova);