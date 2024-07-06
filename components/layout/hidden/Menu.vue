<script setup lang="ts">
import {Menu} from './items.d'
</script>


<template>
  <div class="w-auto justify-between mt-10 mb-5">
    <NuxtLink v-for="item in Menu"  :to="item.url" class="li-class hover:text-blue-500 focus:text-blue-500  flex row w-full items-center gap-4 p-2 mt-2 hover:bg-gray-700 focus:bg-gray-700 rounded-lg hover:shadow transition-all" >
      <Icon :name="item.icon" :size="'18'" class="hover:text-blue-500 hover:shadow-blue-500"/>
    </NuxtLink>
  </div>
</template>