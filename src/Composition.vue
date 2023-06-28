<template>
    <div>asda12313sd</div>
    <div>123123</div>
    <div>{{ book.title }}</div>
    <div>{{ title }}</div>
    <div>{{ title2 }}</div>
    <div>{{ personReactive.contacts.age }}</div>
    <div>{{ personShallowReactive.contacts.age }}</div>
    <div>{{ contacts.age }}</div>
    <C1 :foo="foo" @submit="test"></C1>
    <button @click="increase">age++</button>
    <hr/>
    <div>{{ contacts1.age }}</div>

    
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, shallowReactive, toRef } from 'vue'
import C1 from './components/C1.vue'

const foo = ref(123)
const b = {
    title: 'book Name'
}
const book = ref(b)
const book1 = reactive(b)
const {title} = toRefs(book1)


const {title: title2} = book1
const test = () => {
    foo.value = foo.value === 123 ? 456 : 123
    book1.title = 'asdasd'
}


const person = {
    name: 'xianzao',
    age: 18,
    contacts: {
        age: 20
    }
}

const personReactive = reactive(person)
const personShallowReactive = shallowReactive(person)

const increase = () => {
    // personShallowReactive.contacts.age++;
    // contacts.value.age++;
    contacts1.value.age++;
}

// console.log(personReactive.contacts);
// console.log(personShallowReactive.contacts);
// console.log(isRef(personShallowReactive.contacts));
// console.log(isRef(personShallowReactive.contacts));
// console.log(isRef(book));
// console.log(isRef(personReactive));
// console.log(foo);
// console.log(book);
// console.log(book1);
// console.log(toRefs(book1));
// console.log(toRefs(personReactive));
// console.log(toRefs(personShallowReactive));
// console.log(toRefs(personReactive).contacts);
// console.log(toRefs(personShallowReactive).contacts);

const {contacts} = toRefs(personReactive)

const contacts1 = toRef(personReactive,'contacts')

// console.log(personShallowReactive);

</script>

<style scoped></style>
