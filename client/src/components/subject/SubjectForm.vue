<template>
	<form>
		<Input type="text" placeholder="Português" :required="true" label="nome" @change="(data) => console.log(data)" />
		<Select label="área do conhecimento" :options="subjectOptions" />
		<Button color="green" class="w-full">salvar</Button>
	</form>
</template>
