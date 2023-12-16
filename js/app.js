const themeBtn = document.querySelector("nav .theme-icon")
const navbar = document.querySelector("nav")
function lightTheme() {
    document.documentElement.style.setProperty("--bg", "whitesmoke")
    document.documentElement.style.setProperty("--card-bg", "white")
    document.documentElement.style.setProperty("--txt1", "black")
    document.documentElement.style.setProperty("--txt2", "rgb(71, 71, 71)")
    document.documentElement.style.setProperty("--nav-bg", "rgba(255, 255, 255, 0.813)")
    document.documentElement.style.setProperty("--lin-bg1", "aquamarine")
    document.documentElement.style.setProperty("--lin-bg2", "rgb(198, 143, 234)")
    document.documentElement.style.setProperty("--lin-bg3", "rgb(164, 143, 234)")

}

function darkTheme() {
    document.documentElement.style.setProperty("--bg", "rgb(11, 11, 11)")
    document.documentElement.style.setProperty("--card-bg", "rgb(15, 15, 23)")
    document.documentElement.style.setProperty("--txt1", "white")
    document.documentElement.style.setProperty("--txt2", "rgb(205, 205, 205)")
    document.documentElement.style.setProperty("--nav-bg", "rgba(0, 0, 0, 0.651)")
    document.documentElement.style.setProperty("--lin-bg1", "rgb(0, 97, 65)")
    document.documentElement.style.setProperty("--lin-bg2", "rgb(59, 0, 99)")
    document.documentElement.style.setProperty("--lin-bg3", "rgb(35, 27, 60)")
}

function toggleTheme() {
    const activeTheme = localStorage.getItem("theme")
    themeBtn.addEventListener("click", function () {
        themeBtn.classList.toggle("dark")
        if (activeTheme === "light") {
            console.log("light");
            localStorage.setItem("theme", "dark")
            darkTheme()
        } 

        if (activeTheme === "dark") {
            console.log("dark");
            localStorage.setItem("theme", "light")
            lightTheme()
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
    checkTheme()
    toggleTheme()
}

window.addEventListener("scroll",(e)=>{
    console.log();
    if(window.scrollY > 50){
        navbar.style.backgroundColor="var(--nav-bg)"
    }else{
        navbar.style.backgroundColor=""
    }
})

// init()

