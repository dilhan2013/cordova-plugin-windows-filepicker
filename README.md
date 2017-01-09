#File picker for windows platform
Use this plugin to allow selecting any kind of files using windows file picker window.

### Simple Usage ###

```javascript
   window.plugins.WindowsFilePicker.open([], function (uri) {
      
      alert(uri);
      
    }, function (error) {
      
        alert(error);
    
    });
```

### Allow only given file types ###

```javascript
   window.plugins.WindowsFilePicker.open(["*.pdf","*.docx"], function (uri) {
      
      alert(uri);
      
    }, function (error) {
      
        alert(error);
    
    });
```
