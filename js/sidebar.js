$(document).ready(function(){
   
   var guru = document.getElementsByClassName("guru");
    var i;
    
    for (i = 0; i < guru.length; i++) {
      guru[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }
    
    var siswa = document.getElementsByClassName("siswa");
    var i;
    
    for (i = 0; i < siswa.length; i++) {
      siswa[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }

    var kehadiran = document.getElementsByClassName("kehadiran");
    var i;
    
    for (i = 0; i < kehadiran.length; i++) {
      kehadiran[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }

    var mapel = document.getElementsByClassName("mapel");
    var i;
    
    for (i = 0; i < mapel.length; i++) {
      mapel[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }

    var nilai = document.getElementsByClassName("nilai");
    var i;
    
    for (i = 0; i < nilai.length; i++) {
      nilai[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }

    var kelas = document.getElementsByClassName("kelas");
    var i;
    
    for (i = 0; i < nilai.length; i++) {
      kelas[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }

  });
