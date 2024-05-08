<template>
    <div class="annotation"></div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import AnnoGraph from './components/annoGraph.ts'
import './index.less'

onMounted(() => {
    const Anno = new AnnoGraph({ el: '.annotation' })
    console.log(Anno)
    Anno.init()
})

</script>