module.exports = {
  
  open: function(success, fail, fileTypes) {
    cordova.exec(success, fail, "WindowsFilePicker", "open", [fileTypes]);
  }

};

