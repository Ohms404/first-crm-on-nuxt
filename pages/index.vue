
<script setup lang="ts">
import UButton  from '@/components/ui/button/Button.vue';
import { Hand } from 'lucide-vue-next'
import { Loader2 } from 'lucide-vue-next';
</script>


<template>
  <div class="mt-10 ml-10 flex row w-full gap-20">
    <u-button :size="'lg'" :variant="'secondary'">
      <Loader2 class="w-4 h-4 mr-2 animate-spin" />
        Loadsircle
    </u-button>
    <u-button :size="'icon'" :variant="'destructive'">
      <Hand class="w-4 h-4" />
    </u-button>
    <u-button :size="'default'" :variant="'link'">
      Go To Profile
    </u-button>
    <uinput />
  </div>
</template>