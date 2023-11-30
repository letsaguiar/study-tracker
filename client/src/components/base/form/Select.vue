<template>
  <div class="mb-5">
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white uppercase">{{ label }}</label>
    <select
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      :value="value"
      @change="$emit('change', $event.target.value)"
    >
      <option v-for="option in options" :value="option.value">{{ option.name }}</option>
    </select>
  </div>
</template>

<script>
export default {

	emits: [ 'change' ],

	props: [ 'label', 'options', 'value' ],

}
</script>
