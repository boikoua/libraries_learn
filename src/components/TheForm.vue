<script setup>
import { ref } from 'vue';

const props = defineProps({
  addTodo: Function,
});

const inputValue = ref('');

function submitForm(text) {
  props.addTodo(text);
  inputValue.value = '';
}
</script>

<template>
  <form @submit.prevent="submitForm(inputValue)" class="flex gap-5 mb-10">
    <input
      type="text"
      placeholder="Your new new todo..."
      class="w-full px-6 rounded-lg text-2xl outline-none"
      v-model="inputValue"
    />
    <button type="submit" class="py-3 px-10 bg-blue-700 text-white font-bold rounded-lg text-2xl">
      Submit
    </button>
  </form>
</template>
