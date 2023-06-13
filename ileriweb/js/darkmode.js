//DARK-MODE SCRİPT
// İlk açılışta ikonların orijinal filtre renklerini kaydedin
var i = document.getElementById("i");
var f = document.getElementById("f");
var w = document.getElementById("w");

var icon1OriginalFilter = window.getComputedStyle(i).getPropertyValue("filter");
var icon2OriginalFilter = window.getComputedStyle(f).getPropertyValue("filter");
var icon3OriginalFilter = window.getComputedStyle(w).getPropertyValue("filter");


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    // Tüm linkleri seç ve rengini değiştir
    var links = document.querySelectorAll("a");
    links.forEach(link => {  
        link.addEventListener("mouseover", function() {
            img.style.filter = "filter: invert(15%) sepia(33%) saturate(7496%) hue-rotate(20deg) brightness(92%) contrast(145%);";
        });
      
        if (element.classList.contains("dark-mode")) {
            link.style.color = "black";
            link.addEventListener("mouseout", function() {
            this.style.color = "black"; 
            });
        } 
        else {
            link.style.color = "white";
            link.addEventListener("mouseout", function() {
            this.style.color = "white"; 
            });
        }
    });

    // Logo filtresini değiştir
    var img = document.querySelector("#sosyal");
    if (element.classList.contains("dark-mode")) {
        img.style.filter = "invert(1) sepia(100%) saturate(7500%) hue-rotate(195deg) brightness(100%) contrast(100%)";
    } 
    else {
        img.style.filter = "none";
    } 

    // Dark mode açıksa, ikonların filtre renklerini değiştirin
    if (body.classList.contains("dark-mode")) {
        i.style.filter = "invert(100%) sepia(100%) saturate(2%) hue-rotate(184deg) brightness(108%) contrast(101%)";
        f.style.filter = "invert(100%) sepia(100%) saturate(2%) hue-rotate(184deg) brightness(108%) contrast(101%)";
        w.style.filter = "invert(100%) sepia(100%) saturate(2%) hue-rotate(184deg) brightness(108%) contrast(101%)";
        
    } 
    // Dark mode kapalıysa, ikonların orijinal filtre renklerini geri yükleyin
    else {
        i.style.filter = icon1OriginalFilter;
        f.style.filter = icon2OriginalFilter;
        w.style.filter = icon3OriginalFilter;
    }   



    
    // Dark mode tercihini kontrol et
function isDarkModeEnabled() {
    return localStorage.getItem('darkMode') === 'true';
  }
  
  // Dark mode tercihini güncelle
  function updateDarkModePreference(enabled) {
    localStorage.setItem('darkMode', enabled);
  }
  
  // Dark mode'u uygula
  function applyDarkMode() {
    const darkMode = isDarkModeEnabled();
    const body = document.body;
  
    if (darkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }
  
  // Dark mode tercihini anahtar değişikliği ile güncelle
  function toggleDarkMode() {
    const darkModeSwitch = document.getElementById('myonoffswitch');
    const darkModeEnabled = darkModeSwitch.checked;
    
    updateDarkModePreference(darkModeEnabled);
    applyDarkMode();
  }
  
  // Sayfa yüklendiğinde dark mode tercihini uygula
  document.addEventListener('DOMContentLoaded', () => {
    applyDarkMode();
    const darkModeSwitch = document.getElementById('myonoffswitch');
    darkModeSwitch.checked = isDarkModeEnabled();
  });
  
}




