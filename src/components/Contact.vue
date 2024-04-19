<template>
    <section class="main-section bg-secondary-400" id="contact">
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
                            <input type="email" class="form-control" name="email" v-model="form_email" required :disabled="form_disabled" />
                        </div>
                        <div class="mb-3">
                            <label>Name</label>
                            <input type="text" class="form-control" name="name" v-model="form_name" required :disabled="form_disabled" />
                        </div>
                        <div class="mb-3">
                            <label>Message</label>
                            <textarea class="form-control textarea" rows="3" name="message" v-model="form_message" required :disabled="form_disabled"></textarea>
                        </div>
                        <button type="submit" class="btn btn-lm" :disabled="form_disabled">Send me a message</button>
                    </form>
                    <div class="alert alert-light m-3" role="alert" id="mail-alert" style="display: none;">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import axios from 'axios'

const form_email = ref(null);
const form_disabled = ref(false);
const form_name = ref(null);
const form_message = ref(null);
const uid = 'AzzoyqsYxvPH338XZRvm3Wgar';


</script>