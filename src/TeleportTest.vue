<template>
    <div class="syn">
        <button @click="open = true">Open Modal</button>


    <Dialog :open="open" @close="open = false"></Dialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Dialog from './components/Dialog.vue';

const open = ref(true)

</script>

<style scoped>

</style>