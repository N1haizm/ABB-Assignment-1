function tabAc(event, tabadi) {
  var i, tabdiv, tlink
  
  tabdiv = document.getElementsByClassName("tabdiv")
  for (i = 0; i < tabdiv.length; i++) {
    tabdiv[i].style.display = "none"
  }
  
  tlink = document.getElementsByClassName("tlink")
  for (i = 0; i < tlink.length; i++) {
    tlink[i].className = tlink[i].className.replace(" active", "")
  }
  
  document.getElementById(tabadi).style.display = "block"
  event.currentTarget.className += " active"
}
