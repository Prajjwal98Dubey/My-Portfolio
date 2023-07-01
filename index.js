function openGithub() {
    window.open("https://github.com/Prajjwal98Dubey")
}

function openYtProject() {
    window.open('https://github.com/Prajjwal98Dubey/Youtube-Clone-main')
}
function openEcomProject() {
    window.open('https://github.com/Prajjwal98Dubey/E-Commerce')
}
function openProjects() {
    window.open('https://github.com/Prajjwal98Dubey?tab=repositories')
}


const email=document.getElementById('email')
function openEmail(){
    email.style.visibility='visible'
    setTimeout(()=>{
         email.style.visibility='hidden'
    },8000)
}


const header = document.querySelector('.header')
const intro = document.querySelector('.intro')
const projects = document.querySelector('.projects')
const footer = document.querySelector('.footer')
const introHead = document.getElementById('intro-head')
const skill = document.getElementById('skill-details')
const activity = document.getElementById('activity-details')
const ctsDuration = document.getElementById('cts-duration')
const ctsDesc = document.getElementById('cts-desc')
const infyDuration = document.getElementById('infy-duration')
const infyDesc = document.getElementById('infy-desc')
const footerText = document.getElementById('footer-text')
const cts = document.getElementById('cts')
const infy = document.getElementById('infy')
let toogle = true
function toogleTheme() {
    toogle = !toogle
    toogle ? document.getElementById('img-theme').src = 'newsun.png' : document.getElementById('img-theme').src = 'newmoon.png'
    if (toogle === true) {
        header.style.backgroundColor = '#2e294e'
        intro.style.backgroundColor = '#111111'
        projects.style.backgroundColor = '#d90368'
        footer.style.backgroundColor = '#820263'

        introHead.style.color = '#ffffff'
        skill.style.color = ' whitesmoke'
        activity.style.color = ' whitesmoke'
        ctsDuration.style.color = 'white'
        ctsDesc.style.color = 'white'
        infyDesc.style.color = 'white'
        infyDuration.style.color = 'white'
        footerText.style.color = 'white'
        cts.style.backgroundColor = ' #f20373'
        infy.style.backgroundColor = ' #f20373'
    }
    else {
        header.style.backgroundColor = 'royalblue'
        intro.style.backgroundColor = 'rgb(82,236,217)'
        projects.style.backgroundColor = 'lightcoral'
        footer.style.backgroundColor = 'rgb(147, 101, 190)'
        introHead.style.color = '#111111'
        skill.style.color = '#111111'
        activity.style.color = '#111111'
        ctsDuration.style.color = '#111111'
        ctsDesc.style.color = '#111111'
        infyDesc.style.color = '#111111'
        infyDuration.style.color = '#111111'
        footerText.style.color = '#111111'
        cts.style.backgroundColor = 'rgb(236, 168, 167)'
        infy.style.backgroundColor = 'rgb(236, 168, 167)'

    }
}


