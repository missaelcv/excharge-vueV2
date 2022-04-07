<template>
  <main>
    <px-header/>

    <px-assets-table/>
  </main>
</template>

<script>
import PxHeader from '@/component/PxHeader'
import PxAssetsTable from '@/component/PxAssetsTable.vue'

export default {
  name: 'App',
  components: { PxHeader, PxAssetsTable }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
