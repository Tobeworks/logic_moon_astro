<template>
    <section class="py-48 px-8 md:px-16 bg-surface" id="contact" aria-labelledby="contact-heading">
        <div class="max-w-4xl mx-auto">
            <div class="mb-24 text-center" data-aos="fade-up">
                <span class="text-[10px] uppercase tracking-[0.2em] text-primary mb-4 block">
                    COMMUNICATION
                </span>
                <h2 id="contact-heading" class="text-4xl md:text-7xl font-bold tracking-tight uppercase">
                    GET IN TOUCH
                </h2>
            </div>

            <form class="space-y-16" name="contact-form" @submit.prevent="sendForm" action="#contact" method="post" aria-label="Contact form">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div class="relative group" data-aos="fade-up">
                        <label for="email" class="sr-only">Email Address</label>
                        <input 
                            type="email" 
                            name="email"
                            v-model="form_email"
                            id="email"
                            required 
                            :disabled="form_disabled"
                            placeholder="Email"
                            autocomplete="email"
                            class="w-full bg-transparent border-0 border-b-2 border-outline py-3 px-0 focus:ring-0 focus:border-primary transition-colors text-base tracking-normal placeholder:text-on-surface/50 text-on-surface"
                            aria-required="true"
                        />
                    </div>
                    <div class="relative group" data-aos="fade-up" data-aos-delay="50">
                        <label for="name" class="sr-only">Name</label>
                        <input 
                            type="text" 
                            name="name"
                            v-model="form_name"
                            id="name"
                            required 
                            :disabled="form_disabled"
                            placeholder="Name"
                            autocomplete="name"
                            class="w-full bg-transparent border-0 border-b-2 border-outline py-3 px-0 focus:ring-0 focus:border-primary transition-colors text-base tracking-normal placeholder:text-on-surface/50 text-on-surface"
                            aria-required="true"
                        />
                    </div>
                </div>

                <div class="relative group" data-aos="fade-up" data-aos-delay="100">
                    <label for="message" class="sr-only">Message</label>
                    <textarea 
                        rows="4" 
                        name="message"
                        v-model="form_message"
                        required 
                        :disabled="form_disabled"
                        id="message"
                        placeholder="Message"
                        class="w-full bg-transparent border-0 border-b-2 border-outline py-3 px-0 focus:ring-0 focus:border-primary transition-colors text-base tracking-normal placeholder:text-on-surface/50 text-on-surface resize-none"
                        aria-required="true"
                    ></textarea>
                </div>

                <div class="flex justify-center" data-aos="fade-up" data-aos-delay="150">
                    <button 
                        type="submit" 
                        class="flex items-center gap-4 text-sm font-bold tracking-wide text-primary transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface"
                        :class="form_disabled ? 'opacity-50 cursor-not-allowed' : 'hover:text-primary-container'"
                        :disabled="form_disabled"
                        aria-label="Send message"
                    >
                        <!-- Loading Spinner Icon -->
                        <ArrowPathIcon 
                          v-if="form_disabled" 
                          class="w-5 h-5 text-primary animate-spin"
                        />
                        <span v-if="form_disabled">Sending...</span>
                        <template v-else>
                            <span>Send Message</span>
                            <ArrowRightIcon class="w-5 h-5" />
                        </template>
                    </button>
                </div>
            </form>

            <div id="msg_success" v-if="msg_success" class="bg-surface-container border border-outline-variant/20 text-on-surface px-4 py-3 mt-8 text-sm tracking-normal" role="alert" aria-live="polite">
                Your message has been sent successfully
            </div>
            <div id="msg_error" v-if="msg_error" class="bg-surface-container border border-outline-variant/20 text-primary px-4 py-3 mt-8 text-sm tracking-normal" role="alert" aria-live="polite">
                Error sending your message
            </div>
        </div>
    </section>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { ArrowPathIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'

const form_email = ref(null);
const form_disabled = ref(false);
const form_name = ref(null);
const form_message = ref(null);
const uid = 'AzzoyqsYxvPH338XZRvm3Wgar';
const msg_error = ref(false);
const msg_success = ref(false);

function sendForm() {
    form_disabled.value = true;
    msg_error.value = false;
    msg_success.value = false;

    console.log('Sending form...', {
        name: form_name.value,
        email: form_email.value,
        message: form_message.value,
        uid: uid
    });

    axios.post('https://api.tobeworks.de/send', {
        name: form_name.value,
        email: form_email.value,
        message: form_message.value,
        uid: uid
    })
        .then(response => {
            console.log('Response:', response.data);
            if (response.data.status == '1') {
                msg_success.value = true;
                // Reset form
                form_name.value = null;
                form_email.value = null;
                form_message.value = null;
            } else {
                msg_error.value = true;
            }
            form_disabled.value = false;
        })
        .catch((error) => {
            console.error('Error sending form:', error);
            msg_error.value = true;
            form_disabled.value = false;
        });
}
</script>
