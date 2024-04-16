<template>
    <div>
        <div id="overlay-menu" class="md:hidden">
            <div class="flex justify-end md:hidden" id="overlay-close">
                <div class="button-nav-block">
                    <button class="btn btn-hamburger overlayMenuClose" id="overlay-close-button">
                        <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-x-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" />
                            <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="overlay-middle">
                <nav class="nav flex-column" id="fullscreen-menu">
                    <a class="nav-link active overlayMenuClose" href="#">Home</a>
                    <a class="nav-link overlayMenuClose" href="#about">About</a>
                    <a class="nav-link overlayMenuClose" href="#music">Music</a>
                    <a class="nav-link overlayMenuClose" href="#mastering">Mastering</a>
                    <a class="nav-link overlayMenuClose" href="#disco">Discography</a>
                    <a class="nav-link overlayMenuClose" href="#contact">Contact</a>
                </nav>
            </div>
        </div>

        <div class="flex justify-end md:hidden" id="hamburger-nav-sticky">
            <div class="button-nav-block">
                <button class="btn btn-hamburger" id="hamburger-nav-button">
                    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" class="bi bi-list text-light" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>
            </div>
        </div>

        <div id="scrollToTop" class="hidden">
            <button class="btn" id="scrollToTop-button">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sort-up" class="svg-inline--fa fa-sort-up fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path fill="currentColor" d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"></path>
                </svg>
            </button>
        </div>

        <section class="cover-container flex w-full px-3 py-3 mx-auto flex-col slide-in-bck-center" id="cover-container">
            <header class="hidden sm:block">
                <nav class="nav nav-masthead justify-center" id="topnavi">
                    <a class="nav-link" href="#about">About</a>
                    <a class="nav-link" href="#music">Music</a>
                    <a class="nav-link" href="#mastering">Mastering</a>
                    <a class="nav-link" href="#disco">Discography</a>
                    <a class="nav-link" href="#contact">Contact</a>
                </nav>
            </header>

            <div class="px-3" id="title-container">
                <div class="overlay"></div>
                <div class="flicker-in-1">
                    <h1>Logic Moon</h1>
                </div>
                <div id="subheadline" class="hidden sm:block">music</div>
            </div>
        </section>

        <section class="main-section" id="about">
            <div class="container">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <img src="../assets/img/portrait.jpg" alt="portrait" class="img-fluid hidden sm:block">
                    </div>
                    <div>
                        <h2 class="text-right xl:text-end" id="headline-about">About</h2>
                        <p class="text text-right xl:text-end text-justify">
                            Tobias Lorsbach is a Mainz, Germany-based artist known as Logic Moon. His earlier work has been released on labels such as Archives, Archipel, and his own spontanMusik imprint in both physical and digital media. He has been involved in the minimal techno genre since the early 2000s, and while out on a field recording adventure, he came up with the idea of layering some
                            Ambient drones. From this evolved his debut album, "Herbst11", as Logic Moon.
                            <br><br>
                            Tobias' musical experience is diverse, having played guitar in a death metal band, starting on a DJ career, and later as an Ambient musician. His varied experiences have only served to give rise to a variety of concepts, as evidenced by his most recent albums, which also include neoclassical influences.
                            <br><br>
                            Compositions often begin with a guitar sketch before synth and other components are added to create an environment. His style is frequently regarded as lively, and his compositions strike a balance between classical accessibility and joy in exploration.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="main-section bg-dark" id="music">
            <div class="overlay"></div>
            <div class="container">
                <div class="grid grid-cols-1">
                    <div class="mobile-bg">
                        <h2 class="text-left" id="headline-music">Music</h2>
                        <p class="text text-left">
                            On international labels, 11 albums, 15 EPs and singles, and several contributions to compilations have been released to date. There are other contributions and productions in the film and advertising industries.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="main-section" id="latest_release">
            <div class="container">
                <div class="grid grid-cols-1">
                    <div>
                        <h2 class="text-left xl:text-start">Latest release</h2>
                        <p class="text-left xl:text-start text-justify" v-if="last_release">
                            {{ last_release.text }}
                        </p>
                        <div class="text-left xl:text-start text-justify my-4" v-if="last_release">
                            <div class="container">
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <img :src="require(`@/assets/img/covers/${last_release.cover}`)" class="imgleft" alt="Cover image">
                                    </div>
                                    <div>
                                        <h3 class="text-left xl:text-start">{{ last_release.title }}</h3>
                                        <div>
                                            <iframe style="border: 0; width: 100%; height: 241px;" :src="`https://bandcamp.com/EmbeddedPlayer/album=${last_release.release_id}/size=large/bgcol=333333/linkcol=ffffff/artwork=none/transparent=true/`" seamless></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="main-section bg-dark" id="disco">
            <div class="container">
                <div class="grid grid-cols-1">
                    <div class="mobile-bg">
                        <h2 class="text-left xl:text-start" id="headline-disco">Discography</h2>
                        <p class="text-left xl:text-start text-justify text-light">
                            To listen to the release, click the cover to open the player.
                        </p>
                        <div id="discogrid" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 justify-start">
                            <a href="#!" class="grid-item m-2 pointer" data-year="2022" :data-release-id="release.release_id" v-for="release in releases.sort((a, b) => (a.id > b.id) ? -1 : 1)" :key="release.id">
                                <img :src="require(`@/assets/img/covers/${release.cover}`)" :alt="release.title">
                            </a>
                            <div class="js-shuffle-sizer"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="main-section" id="contact">
            <div class="container">
                <div id="msg_success" v-if="msg_success" class="alert alert-success" role="alert">
                    Your Message has been sent
                </div>
                <div id="msg_error" v-if="msg_error" class="alert alert-danger" role="alert">
                    Error sending your message
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <h2 class="text-right" id="headline-contact">Contact</h2>
                    </div>
                    <div>
                        <form id="contactform" name="contact-form" @submit.prevent="sendForm" action="#contact" method="post">
                            <div class="mb-3">
                                <label>Email address</label>
                                <input type="email" class="form-control" name="email" v-model="form_email" required :disabled="form_disabled">
                            </div>
                            <div class="mb-3">
                                <label>Name</label>
                                <input type="text" class="form-control" name="name" v-model="form_name" required :disabled="form_disabled">
                            </div>
                            <div class="mb-3">
                                <label>Message</label>
                                <textarea class="form-control textarea" rows="3" name="message" v-model="form_message" required :disabled="form_disabled"></textarea>
                            </div>
                            <button type="submit" class="btn btn-lm" :disabled="form_disabled">Send me a message</button>
                        </form>
                        <div class="alert alert-light m-3" role="alert" id="mail-alert" style="display: none;"></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
//import '../scss/style.scss'
import '../assets/animates.css'
import anime from "animejs";
import ScrollReveal from "scrollreveal";
//import "../scss/style.scss";
// eslint-disable-next-line no-unused-vars
//import * as bootstrap from "bootstrap";
import axios from 'axios'
import { onMounted, ref } from 'vue';
import releases from '../releases';


const form_email = ref(null);
const form_disabled = ref(false);
const form_name = ref(null);
const form_message = ref(null);
const uid = 'AzzoyqsYxvPH338XZRvm3Wgar';
const msg_success = ref(false);
const msg_error = ref(false);
const last_release = ref()




function sendForm() {

    form_disabled.value = true;

    axios.post('https://api.tobeworks.de/sendmail', {
        name: form_name.value,
        email: form_email.value,
        message: form_message.value,
        uid: uid
    })
        .then(response => {
            if (response.data.status == '1') {
                msg_success.value = true;
            }
            if (response.data.status == '0') {
                msg_error.value = true;
            }
            form_disabled.value = false;
            // console.log(response.data.status);
        })
        // eslint-disable-next-line no-unused-vars
        .catch(function (error) {
            //console.log(error);
            msg_error.value = true;
        });
}

onMounted(() => {


    getLatestRelease();

    anime({
        targets: "#topnavi",
        translateY: 100,
        delay: 1200,
        duration: 450,
    });
    anime({
        targets: "#subheadline",
        opacity: [0, 1],
        delay: 1200,
        duration: 450,
    });

    ScrollReveal().reveal("h2", { duration: 2000 });
    ScrollReveal().reveal(".grid-item", { duration: 1000 });

    fullscreenNav();
    displayScrollto();
    klickDisco();
});


const fullscreenNav = () => {
    document
        .querySelector("#hamburger-nav-button")
        .addEventListener("click", (e) => {
            e.preventDefault();

            const animation = anime({
                targets: "#overlay-menu",
                delay: 0,
                opacity: [0, 1],
                translateX: [850, 0],
                duration: 500,
                endDelay: 0,
                loop: false,
                autoplay: false,
                easing: "linear",
            });
            animation.play();

            anime({
                targets: "#fullscreen-menu a",
                opacity: [0, 1],
                delay: anime.stagger(100),
            });
        });

    const backAnimation = () => {
        // e.preventDefault();
        const animation = anime({
            targets: "#overlay-menu",
            delay: 500,
            opacity: [1, 0],
            translateX: [0, 850],
            duration: 500,
            endDelay: 0,
            loop: false,
            autoplay: false,
            easing: "linear",
        });
        animation.play();

        anime({
            targets: "#fullscreen-menu a",
            opacity: [1, 0],
            delay: anime.stagger(100, { direction: "reverse" }),
        });
    };

    const overlayMenuClose = document.getElementsByClassName("overlayMenuClose");

    for (var i = 0; i < overlayMenuClose.length; i++) {
        overlayMenuClose[i].addEventListener("click", backAnimation, false);
    }
};
const getLatestRelease = () => {
    const res = releases[0];
    last_release.value = res;
    return res;
}

// const submitForm = () => {

//     const sendData = () => {
//         const XHR = new XMLHttpRequest();
//         const FD = new FormData(form);

//         XHR.addEventListener("load", function (event) {
//             if (event.target.responseText === "true") {
//                 document.getElementById("msg_success").classList.remove("d-none");
//             } else {
//                 document.getElementById("msg_error").classList.remove("d-none");
//             }
//         });

//         // XHR.addEventListener("error", function (event) {
//         //     // alert('Oops! Something went wrong.');
//         // });

//         XHR.open("POST", "https://api.tobeworks.de/sendmail");
//         XHR.send(FD);
//     };

//     const form = document.getElementById("contactform");

//     form.addEventListener("submit", function (event) {
//         event.preventDefault();
//         sendData();
//     });
// };

const displayScrollto = () => {
    const about = document.getElementById("about");
    const scrollToTop = document.getElementById("scrollToTop");

    window.addEventListener("scroll", () => {
        let scroll = window.scrollY;
        if (Math.floor(scroll) > about.offsetTop) {
            scrollToTop.classList.remove("hide");
        } else {
            scrollToTop.classList.add("hide");
        }
    });

    scrollToTop.addEventListener("click", () => {
        window.scrollTo(0, 0);
    });
};



const klickDisco = () => {
    const covers = document.querySelectorAll('.grid-item');
    const modalplayer = document.getElementById('modalplayerframe');


    let count = 0;
    covers.forEach(element => {
        if (element.attributes[2].value !== '') {
            covers[count].addEventListener('click', () => {

                modalplayer.setAttribute('src', `https://bandcamp.com/EmbeddedPlayer/album=${element.getAttribute('data-release-id')}/size=large/bgcol=000000/linkcol=ffffff/artwork=small/transparent=true/`);
            })

            covers[count].classList.add('pointer');
            covers[count].setAttribute('data-bs-toggle', 'modal');
            covers[count].setAttribute('data-bs-target', '#modalplayer');
        }
        count++;
    });

}
</script>

<style lang="scss">
@media (max-width: 575px) {
    .imgleft {
        width: 100%;
    }
}
</style>