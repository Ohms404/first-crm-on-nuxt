
<script setup lang="ts">
import DefaultSideBar from '../components/layout/default/SideBar.vue'
import DefaultHeader from '../components/layout/default/Header.vue'
const sideBarMode: Ref<'default' | 'hidden'> = ref('default')
</script>

<template>
  <section class="grid" style="min-height: 100vh;"> 
    <default-side-bar></default-side-bar>
      <main>
        <default-header></default-header>
          <div>
            <slot />
          </div>
      </main>
  </section>
</template>

<style scoped>
.grid {
  grid-template-columns: 1fr 6fr;
}
</style>