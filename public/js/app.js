$(function(){
  CodeMirror.fromTextArea(document.getElementById("source"), {mode: "htmlmixed", theme: "ambiance"});
  CodeMirror.fromTextArea(document.getElementById("target"), {mode: "gfm", theme: "ambiance"});
});
