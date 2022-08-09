<script setup>
const { data: menus } = await useAsyncData(() => {
  return $fetch('/api/navmenu', {

  })
})
</script>

<template>
  <div class="mx-auto max-w-screen-lg px-3 py-6">
    <div class="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between">
      <a href="/">
        <div class="flex items-center bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
          <svg class="mr-1 h-10 w-10 stroke-cyan-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M0 0h24v24H0z" stroke="none" /><rect x="3" y="12" width="6" height="8" rx="1" /><rect x="9" y="8" width="6" height="12" rx="1" /><rect x="15" y="4" width="6" height="16" rx="1" /><path d="M4 20h14" /></svg>Ixartz's Blog</div></a><nav>
        <ul class="flex gap-x-3 font-medium text-gray-200">
          <li v-for="(item, index) in menus" :key="index" class="hover:text-white">
            <a :href="item.url">{{ item.name }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
