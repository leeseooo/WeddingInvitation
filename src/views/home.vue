<template>
  <div>
    <main-info></main-info>
    <calendar></calendar>
    <wedding-gallery></wedding-gallery>
    <corona-message></corona-message>
    <account-info></account-info>
    <contact-info></contact-info>
    <the-footer></the-footer>
  </div>
</template>

<script>
import MainInfo from "@/components/main_info.vue";
import CoronaMessage from "@/components/coronaMessage.vue";
import WeddingGallery from "@/components/wedding_gallery.vue";
import AccountInfo from "@/components/account_info.vue";
import ContactInfo from "@/components/contact_info.vue";
import TheFooter from '@/components/TheFooter.vue';
import Calendar from '@/components/calendar.vue';
export default {
  components: { MainInfo,CoronaMessage, AccountInfo,Calendar, ContactInfo,WeddingGallery,TheFooter },
};
</script>

<style scoped>
</style>
