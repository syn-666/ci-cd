<template>
    <div>
        {{ foo }}

        <button @click="buttonClick">button</button>
    </div>
</template>

<script setup lang="ts">

import { defineProps, defineEmits } from 'vue';
const {foo} = defineProps(['foo'])

const emit = defineEmits(['inFocus', 'submit'])

function buttonClick() {
  emit('submit')
}
</script>

<style scoped>

</style>