<template>
  <div>
    <main-info></main-info>
    <wedding-gallery></wedding-gallery>
    <account-info></account-info>
    <contact-info></contact-info>
  </div>
</template>

<script>
import MainInfo from "@/components/main_info.vue";
import WeddingGallery from "@/components/wedding_gallery.vue";
import AccountInfo from "@/components/account_info.vue";
import ContactInfo from "@/components/contact_info.vue";

export default {
  components: { MainInfo, WeddingGallery, AccountInfo, ContactInfo },
};
</script>

<style scoped>
</style>
