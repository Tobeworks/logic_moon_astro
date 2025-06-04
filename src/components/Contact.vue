<template>
    <section class="main-section bg-secondary-400" id="contact">
        <div class="container mx-auto">

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <h2 class="text-right text-2xl font-bold" id="headline-contact">Contact</h2>
                </div>
                <div>
                    <form id="contactform" name="contact-form" @submit.prevent="sendForm" action="#contact" method="post">
                        <div class="mb-3">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="email" data-aos="fade-up">Email address</label>
                            <input type="email" aria-label="Email address" class="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-secondary-200" name="email" v-model="form_email" id="email" required :disabled="form_disabled" data-aos="fade-up" />
                        </div>
                        <div class="mb-3">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="name" data-aos="fade-up">Name</label>
                            <input type="text" aria-label="Name" class="shadow appearance-none border  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-secondary-200" name="name" v-model="form_name" required :disabled="form_disabled" data-aos="fade-up" id="name" />
                        </div>
                        <div class="mb-3">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="message" data-aos="fade-up">Message</label>
                            <textarea aria-label="Message" class="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-secondary-200" rows="3" name="message" v-model="form_message" required :disabled="form_disabled" data-aos="fade-up" id="message"></textarea>
                        </div>
                        <button type="submit" class="bg-primary-500 hover:bg-secondary-700 transition-all duration-500 ease-in-out text-white font-bold py-2 px-4 rounded" :disabled="form_disabled" data-aos="fade-up">
                            Send me a message
                        </button>
                    </form>
                    <div class="bg-secondary-400 border border-gray-400 text-gray-700 px-4 py-3 relative m-3" role="alert" id="mail-alert" style="display: none;">
                    </div>

                    <div id="msg_success" v-if="msg_success" class="bg-green-100 border border-green-400 text-green-700 px-4 py-3  relative my-2" role="alert" aria-live="polite">
                        Your Message has been sent
                    </div>
                    <div id="msg_error" v-if="msg_error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3  relative my-2" role="alert" aria-live="polite">
                        Error sending your message
                    </div>
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