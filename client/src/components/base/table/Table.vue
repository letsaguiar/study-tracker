<template>
	<table class="items-center w-full bg-transparent border-collapse">
		<thead>
			<slot name="head"></slot>
		</thead>

		<tbody>
			<slot name="body"></slot>
		</tbody>
	</table>
</template>