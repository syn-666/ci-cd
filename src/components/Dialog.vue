<template>
    <teleport to="[data-teleport]" :disabled="true">
      <!-- <div class="mask" v-show="open"></div> -->
        <div v-show="open" class="modal">
            <p>Hello from the modal!</p>
            <button @click="closeDialog">Close</button>
            <button @click="$emit('close')">Close</button>
        </div>
    </teleport>
</template>

<script setup lang="ts">
import { defineProps, getCurrentInstance, defineEmits } from 'vue'
const {open} = defineProps(['open'])
// @ts-ignore
const ctx = getCurrentInstance()

const emit = defineEmits(['close'])

const closeDialog = () => {
  // ctx?.emit('close')
  emit('close')
}
</script>

<style scoped>
.modal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
    background-color: white;
}

.mask{
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  top: 0;
}
</style>
