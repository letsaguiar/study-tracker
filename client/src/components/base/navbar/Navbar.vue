<template>
	<nav class="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
		<div class="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
			<slot name="left"></slot>

			<div class="ml-auto">
				<slot name="right"></slot>
			</div>
		</div>
	</nav>
</template>