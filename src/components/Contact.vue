<template>
    <section class="py-48 px-8 md:px-16 bg-surface" id="contact">
        <div class="max-w-4xl mx-auto">
            <div class="mb-24 text-center" data-aos="fade-up">
                <span class="text-[10px] uppercase tracking-[0.2em] text-primary mb-4 block">
                    COMMUNICATION
                </span>
                <h2 class="text-4xl md:text-7xl font-bold tracking-tight uppercase">
                    GET IN TOUCH
                </h2>
            </div>

            <form class="space-y-16" name="contact-form" @submit.prevent="sendForm" action="#contact" method="post">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div class="relative group" data-aos="fade-up">
                        <input 
                            type="email" 
                            name="email"
                            v-model="form_email"
                            id="email"
                            required 
                            :disabled="form_disabled"
                            placeholder="EMAIL"
                            class="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary transition-colors text-sm uppercase tracking-widest placeholder:text-outline-variant/50 text-on-surface"
                        />
                    </div>
                    <div class="relative group" data-aos="fade-up" data-aos-delay="50">
                        <input 
                            type="text" 
                            name="name"
                            v-model="form_name"
                            id="name"
                            required 
                            :disabled="form_disabled"
                            placeholder="NAME"
                            class="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary transition-colors text-sm uppercase tracking-widest placeholder:text-outline-variant/50 text-on-surface"
                        />
                    </div>
                </div>

                <div class="relative group" data-aos="fade-up" data-aos-delay="100">
                    <textarea 
                        rows="4" 
                        name="message"
                        v-model="form_message"
                        required 
                        :disabled="form_disabled"
                        id="message"
                        placeholder="MESSAGE"
                        class="w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary transition-colors text-sm uppercase tracking-widest placeholder:text-outline-variant/50 text-on-surface resize-none"
                    ></textarea>
                </div>

                <div class="flex justify-center" data-aos="fade-up" data-aos-delay="150">
                    <button 
                        type="submit" 
                        class="group flex items-center gap-4 text-xs font-black tracking-[0.3em] uppercase text-primary hover:text-primary-container transition-colors"
                        :disabled="form_disabled"
                    >
                        <span>SEND TRANSMISSION</span>
                        <span class="group-hover:translate-x-2 transition-transform">→</span>
                    </button>
                </div>
            </form>

            <div id="msg_success" v-if="msg_success" class="bg-surface-container border border-outline-variant/20 text-on-surface px-4 py-3 mt-8 text-xs uppercase tracking-[0.2em]" role="alert">
                Your message has been sent successfully
            </div>
            <div id="msg_error" v-if="msg_error" class="bg-surface-container border border-outline-variant/20 text-primary px-4 py-3 mt-8 text-xs uppercase tracking-[0.2em]" role="alert">
                Error sending your message
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
        })
        .catch(function (error) {
            msg_error.value = true;
        });
}
</script>
