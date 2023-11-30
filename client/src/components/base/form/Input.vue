<template>
	<div class="p-2">
        <label class="block text-sm font-medium leading-6 text-gray-900 uppercase">{{ label }}</label>
        <div class="mt-2">
            <input
			 type="text"
			 :placeholder="placeholder"
			 :value="value"
			 class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-500"
			 @change="$emit('change', $event.target.value)"
			>
        </div>
    </div>
</template>

<script>
export default {

	emits: [ 'change' ],

	props: [ 'label', 'placeholder', 'value' ],

}
</script>