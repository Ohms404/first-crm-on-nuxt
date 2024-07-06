
<script setup lang="ts">
const sideBarMode: Ref<'default' | 'hidden'> = ref('default')
</script>

<template>
  <section v-if="sideBarMode === 'default'" class="grid min-h-screen" style="grid-template-columns: 1fr 6fr;">
    <div class="flex flex-col px-6 py-8 bg-[#1d252b]" >
      <div class="flex justify-end">
        <div class="w-auto cursor-pointer">
          <Icon :name="'ep:d-arrow-left'" :size="'26'" class="cursor-pointer hover:text-blue-500 hover:shadow-blue-500 active:animate-spin" 
          @click="() => {
              sideBarMode === 'default' ? sideBarMode = 'hidden' : sideBarMode = 'default'
            }"/>
        </div>  
      </div>
      <layout-default-side-bar v-if="sideBarMode === 'default' "/>
    </div>
    <div class="p-6">
      <slot />
    </div>
  </section>

  
  <section v-if="sideBarMode === 'hidden'" class="grid min-h-screen" style="grid-template-columns: 1fr 20fr;">
    <div class="flex flex-col px-4 py-4 bg-[#1d252b] relative transition-all">
      <div class="flex row gap-2 ">
        <layout-hidden-closed-side-bar class="transition-all"/>
          <div class="w-auto cursor-pointer px-1 py-1 bg-[#1d252b] rounded-full absolute right-[-14px]">
            <Icon :name="'ep:d-arrow-right'" :size="'18'" 
            class="pb-1 cursor-pointer hover:text-blue-500 hover:shadow-blue-500 active:animate-spin"
          @click="() => {
              sideBarMode === 'default' ? sideBarMode = 'hidden' : sideBarMode = 'default'
            }"/>
        </div>
      </div>
    </div>
    <div class="p-6">
      <slot />
    </div>
  </section>
</template>