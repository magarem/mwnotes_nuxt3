<template>
    <div>
        id: {{data.id}}<br/>
        titulo: {{data.text}}<br/>
        body: {{data.body}}<br/>
    </div>
</template>
<script setup lang="ts">

const route = useRoute()
// console.log(route.params.id);
const { data, error, execute, refresh } = await useFetch('/api/file_data_list?id='+route.params.id)
console.log(data.value);

</script>