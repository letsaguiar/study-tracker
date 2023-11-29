<template>
	<Card title="Matérias">
		<SubjectTable />
	</Card>
</template>

<script>
import Card from '../components/base/card/Card.vue';
import SubjectTable from '../components/subject/SubjectTable.vue';

export default {

	components: { Card, SubjectTable },

}
</script>