<script setup lang="ts">
import type { PropType } from 'vue';
import {Menu} from './items.d'

defineProps({
  mode: {type: String as PropType<'default' | 'hidden'>}
})
</script>

<template>
  <div class="justify-between mt-16 mb-5">
    <NuxtLink v-for="item in Menu"  :to="item.url" class="li-class hover:text-blue-500 focus:text-blue-500 flex row w-full items-center gap-4 p-2 mt-2 hover:bg-gray-700 focus:bg-gray-700 rounded-lg hover:shadow transition-all" >
      <Icon :name="item.icon" :size="'26'" class="hover:text-blue-500 hover:shadow-blue-500 focus:text-blue-500 focus:shadow-blue-500"/>
        <span class="text-xl ">{{ item.name }}</span>
    </NuxtLink>
  </div>
</template>

<style scoped lang="css">
.li-class:nth-child(7){
  margin-top: 105px
}
</style>