<script setup lang="ts">
import {useDark, useToggle} from "@vueuse/core";
import {useGlobalState} from "~/utils/store";

const isDark = useDark()
const toggleDark = useToggle(isDark)
const {openAside} = useGlobalState()
onMounted(() => {
  const open = localStorage.getItem('openAside')
  openAside.value = open === 'true' || open === null
})
watch(openAside, (v) => {
  localStorage.setItem('openAside', v.toString())
})

function handleReload() {
  location.reload()
}
</script>
<meta name="msvalidate.01" content="F2E09A428B8B328F5D804348FD305263" />
<template>
  <header class="blur-global dark:bg-neutral-800 shadow h-16 fixed w-full z-30 rounded-b-lg">
    <UContainer class="h-full flex items-center">
      <IButton name="i-heroicons-bars-3-20-solid" @click="openAside = !openAside"/>
      <h1 @click="handleReload" class="text-lg font-bold ml-2 hover:cursor-pointer">Culip的AI小破站😅</h1>
      <IButton class="ml-auto" :name="isDark ? 'i-heroicons-moon' : 'i-heroicons-sun'"
               @click="toggleDark()"/>
    </UContainer>
  </header>
</template>
