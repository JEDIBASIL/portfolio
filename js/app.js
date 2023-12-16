const themeBtn = document.querySelector("nav .theme-icon")
const navbar = document.querySelector("nav")
function toggleTheme() {

    const activeTheme = localStorage.getItem("theme")

    if (activeTheme && activeTheme === "dark") {
        themeBtn.classList.add("dark")
      // Switch to dark theme
      document.documentElement.style.setProperty("--bg", "rgb(11, 11, 11)");
      document.documentElement.style.setProperty("--card-bg", "rgb(15, 15, 23)");
      document.documentElement.style.setProperty("--txt1", "white");
      document.documentElement.style.setProperty("--txt2", "rgb(205, 205, 205)");
      document.documentElement.style.setProperty("--nav-bg", "rgba(0, 0, 0, 0.651)");
      document.documentElement.style.setProperty("--lin-bg1", "rgb(0, 97, 65)");
      document.documentElement.style.setProperty("--lin-bg2", "rgb(59, 0, 99)");
      document.documentElement.style.setProperty("--lin-bg3", "rgb(35, 27, 60)");
      document.documentElement.style.setProperty("--card2-bg", "rgba(255, 255, 255, 0.041)");
      document.documentElement.style.setProperty("--card-bd", "rgb(38, 40, 49)");
    } else {
      // Switch to light theme
      themeBtn.classList.remove("dark")
      document.documentElement.style.setProperty("--bg", "rgb(222, 222, 222)");
      document.documentElement.style.setProperty("--card-bg", "white");
      document.documentElement.style.setProperty("--txt1", "black");
      document.documentElement.style.setProperty("--txt2", "rgb(71, 71, 71)");
      document.documentElement.style.setProperty("--nav-bg", "rgba(255, 255, 255, 0.813)");
      document.documentElement.style.setProperty("--lin-bg1", "aquamarine");
      document.documentElement.style.setProperty("--lin-bg2", "rgb(240, 83, 203)");
      document.documentElement.style.setProperty("--lin-bg3", "rgb(119, 90, 212)");
      document.documentElement.style.setProperty("--card2-bg", "rgba(255, 255, 255, 0.372)");
      document.documentElement.style.setProperty("--card-bd", "gainsboro");
    }
  }
function changeTheme() {
    themeBtn.addEventListener("click", function () {
        const activeTheme = localStorage.getItem("theme")
        themeBtn.classList.toggle("dark")
        if (activeTheme === "light") {
            localStorage.setItem("theme", "dark")
            toggleTheme()
        } 

        if (activeTheme === "dark") {
            localStorage.setItem("theme", "light")
            toggleTheme()
        }
    })
}

function checkTheme(){
    const activeTheme = localStorage.getItem("theme")

    if (activeTheme === "light" || !activeTheme) {
        console.log("light");
        localStorage.setItem("theme", "dark")
        darkTheme()
    } 

    if (activeTheme === "dark") {
        console.log("dark");
        localStorage.setItem("theme", "light")
        lightTheme()
    }
}

function init() {
    toggleTheme()
    changeTheme()
}

window.addEventListener("scroll",(e)=>{
    console.log();
    if(window.scrollY > 50){
        navbar.style.backgroundColor="var(--nav-bg)"
    }else{
        navbar.style.backgroundColor=""
    }
})

init()

