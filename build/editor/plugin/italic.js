/*
Copyright 2014, KISSY v1.50
MIT Licensed
build time: Apr 4 12:16
*/
/*
 Combined modules by KISSY Module Compiler: 

 editor/plugin/italic
*/

KISSY.add("editor/plugin/italic", ["./font/ui", "./italic/cmd", "./button"], function(S, require) {
  var ui = require("./font/ui");
  var cmd = require("./italic/cmd");
  require("./button");
  function italic() {
  }
  S.augment(italic, {pluginRenderUI:function(editor) {
    cmd.init(editor);
    editor.addButton("italic", {cmdType:"italic", tooltip:"\u659c\u4f53"}, ui.Button);
    editor.docReady(function() {
      editor.get("document").on("keydown", function(e) {
        if(e.ctrlKey && e.keyCode === S.Node.KeyCode.I) {
          editor.execCommand("italic");
          e.preventDefault()
        }
      })
    })
  }});
  return italic
});

