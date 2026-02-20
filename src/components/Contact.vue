<template>
    <section class="py-24 bg-primary-600 text-secondary-200" id="contact">
        <div class="w-[min(1200px,90vw)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
                <div class="mb-8">
                    <div class="font-mono text-xs tracking-[0.25em] uppercase text-accent-500">Contact</div>
                    <h2 class="mt-2 text-[clamp(22px,3.2vw,30px)] font-bold leading-tight">Get in touch for collaborations or licensing.</h2>
                </div>
            </div>
            <div>
                <form id="contactform" name="contact-form" class="bg-primary-800 border border-primary-700 rounded-[10px] p-6 max-w-xl flex flex-col gap-4" @submit.prevent="sendForm" action="#contact" method="post">
                    <div>
                        <label class="block text-sm font-bold mb-2 font-mono uppercase tracking-[0.2em] text-secondary-500" for="email" data-aos="fade-up">Email address</label>
                        <input type="email" name="email" v-model="form_email" id="email" required :disabled="form_disabled" data-aos="fade-up" class="w-full bg-primary-400 border border-primary-700 text-secondary-200 rounded-md px-4 py-3 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20" />
                    </div>
                    <div>
                        <label class="block text-sm font-bold mb-2 font-mono uppercase tracking-[0.2em] text-secondary-500" for="name" data-aos="fade-up">Name</label>
                        <input type="text" name="name" v-model="form_name" required :disabled="form_disabled" data-aos="fade-up" id="name" class="w-full bg-primary-400 border border-primary-700 text-secondary-200 rounded-md px-4 py-3 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20" />
                    </div>
                    <div>
                        <label class="block text-sm font-bold mb-2 font-mono uppercase tracking-[0.2em] text-secondary-500" for="message" data-aos="fade-up">Message</label>
                        <textarea rows="5" name="message" v-model="form_message" required :disabled="form_disabled" data-aos="fade-up" id="message" class="w-full bg-primary-400 border border-primary-700 text-secondary-200 rounded-md px-4 py-3 focus:outline-none focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20"></textarea>
                    </div>
                    <button type="submit" class="bg-accent-500 hover:bg-accent-600 transition-all duration-500 ease-in-out text-primary-900 font-bold py-2 px-4 rounded font-mono uppercase tracking-[0.25em] text-xs" :disabled="form_disabled" data-aos="fade-up">
                        Send me a message
                    </button>
                </form>
                <div id="msg_success" v-if="msg_success" class="bg-primary-800 border border-secondary-700 text-secondary-300 px-4 py-3 relative my-2 font-mono uppercase tracking-[0.2em] text-xs" role="alert">
                    Your Message has been sent
                </div>
                <div id="msg_error" v-if="msg_error" class="bg-primary-800 border border-accent-700 text-accent-200 px-4 py-3 relative my-2 font-mono uppercase tracking-[0.2em] text-xs" role="alert">
                    Error sending your message
                </div>
            </div>
        </div>


    </section>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'

const form_email = ref(null);
const form_disabled = ref(false);
const form_name = ref(null);
const form_message = ref(null);
const uid = 'AzzoyqsYxvPH338XZRvm3Wgar';
const msg_error = ref(false);
const msg_success = ref(false);

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
</script>
