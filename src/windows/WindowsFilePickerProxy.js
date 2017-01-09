
module.exports = {

	open: function (successCallback, errorCallback, args) {
		var fileTypes = args[0];
		var fileTypeFilter = ["*"];
		
		if(fileTypes && fileTypes instanceof Array && fileTypes.length > 0)
			fileTypeFilter = fileTypes;
			
		// Create the picker object and set options
		var openPicker = new Windows.Storage.Pickers.FileOpenPicker();
		openPicker.viewMode = Windows.Storage.Pickers.PickerViewMode.list;
		openPicker.suggestedStartLocation = Windows.Storage.Pickers.PickerLocationId.documentsLibrary;
		openPicker.fileTypeFilter.replaceAll(fileTypeFilter);

		// Open the picker for the user to pick a file
		openPicker.pickSingleFileAsync().done(function (file) {
			if (file) {
				
				var storageFolder = Windows.Storage.ApplicationData.current.localFolder;
				file.copyAsync(storageFolder, file.name, Windows.Storage.NameCollisionOption.replaceExisting).done(function (storageFile) {
					
					successCallback(URL.createObjectURL(storageFile));
					
				}, function () {
					errorCallback("Can't access localStorage folder.");
				});								
				
			} else {
				// The picker was dismissed with no selected file
				errorCallback("User didn't choose a file.");			
			}
			
		}, function (errror) {
			errorCallback("User didn't choose a file.");
	    });
		
	}
		
};

require("cordova/exec/proxy").add("WindowsFilePicker", module.exports);



