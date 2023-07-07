let views = {
'about-link': `
<section id="about">
    <div class="about">
        <h2>About</h2>
        <p id="intro">I'm a Southern California based web developer and upcoming graduate of the DevMountain coding bootcamp. Through this accelerated four month program, I honed my skills as a full stack web developer. When I'm not coding, you can find me outisde enjoying the beautiful SoCal weather either surfing or cycling.</p>
    </div>
    <div class="contact">
        <a  id="linkdin" href="https://www.linkedin.com/in/tyler-aycock-2b2191a8/" target="blank"><img src="./images/linkdin.png" alt="linkdin logo"></a>
        <a  id="github" href="https://github.com/TylerAycock" target="blank"><img src="./images/github-mark.png" alt="github logo"></a>
        <a  id="email" href="mailto:Tyler.Joseph.Aycock@gmail.com" target="blank"><img src="./images/gmail.png" alt="gmail logo"></a>
    </div> 
</section>
`,
'skills-link': `
 <section id="skills">
    <h2>Skills</h2>
    <div id="skill-container">
        <div class="skill">
            <img  src="./images/html.png" alt="html logo">
            <p>HTML</p>
        </div>
        <div class="skill">
            <img src="./images/css.png" alt="css logo">
            <p>CSS</p>
        </div>
        <div class="skill">
            <img  id="js" src="./images/js.png" alt="js logo">
            <p>JavaScript</p>
        </div>
    </div>
 </section >
`,
'projects-link': `
<section id="projects">
    <h2>Projects</h2>
    <h3>Campsite Reservation App</h3>
    <video src="./images/capstone_pt1.mov" controls type="video/mp4"></video>
 </section>
`
}

const links = document.querySelectorAll('a')
const main = document.querySelector('main')

const changeView = evt => {
main.innerHTML = ''
let section = evt.target.id
main.innerHTML = views[section]
}

for(let i = 0; i < links.length; i++){
links[i].addEventListener('click', changeView)
}

const pageLoad = () => {
main.innerHTML = views['about-link']
}

pageLoad()