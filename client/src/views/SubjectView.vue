<template>
	<Card title="Matérias">
		<Table>
			<template #head>
				<TableRow>
					<TableHead>Nome</TableHead>
					<TableHead></TableHead>
				</TableRow>
			</template>

			<template #body>
				<TableRow v-for="subject in subjects">
					<TableItem>
						<div>
							<i class="fa-solid fa-caret-right fa-xl mr-3 text-blueGray-700"></i>
							<span>{{ subject.name }}</span>
						</div>
					</TableItem>
					<TableItem>
						<div class="flex justify-end">
							<Button color="pink" size="sm" custom-class="mr-3">editar</Button>
							<Button color="red" size="sm">deletar</Button>
						</div>
					</TableItem>
				</TableRow>
			</template>
		</Table>
	</Card>
</template>

<script>
import Button from '../components/base/button/Button.vue';
import Card from '../components/base/card/Card.vue';
import Table from '../components/base/table/Table.vue';
import TableHead from '../components/base/table/TableHead.vue';
import TableItem from '../components/base/table/TableItem.vue';
import TableRow from '../components/base/table/TableRow.vue';

export default {

	components: { Button, Card, Table, TableHead, TableItem, TableRow },

	data()
	{
		return {
			subjects: [
				{ name: 'Português' },
				{ name: 'Matemática' },
			],
		}
	},

}
</script>