<script setup>
const { pending, data: promos } = useFetch('http://api-scanharga.hfz4dmcuyr-lxd6rq70k39g.p.runcloud.link/api/promo/Promo%20Hari%20Ini')
</script>

<template>
  <div v-if="pending">
    Loading.
  </div>
  <div class="mx-auto max-w-screen-lg px-3 py-6">
    <div class="mb-6 text-2xl font-bold">
      Recent <span class="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">Projects</span>
    </div>
    <div class="flex flex-col gap-6">
      <div v-for="(item, index) in promos.data" :key="index" class="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
        <div class="shrink-0">
          <a href="/demo/astro-boilerplate">
            <img class="h-36 w-36 hover:translate-y-1" :src="item.images" :alt="item.title" loading="lazy">
          </a>
        </div>
        <div>
          <div class="flex flex-col items-center gap-y-2 md:flex-row">
            <a class="hover:text-cyan-400" href="/demo/astro-boilerplate">
              <div class="text-xl font-semibold">{{ item.title }}</div>
            </a>
            <div class="ml-3 flex gap-2">
              <div v-for="(category, indexCategory) in item.categories" :key="indexCategory" class="rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">
                {{ category }}
              </div>
            </div>
          </div>
          <div class="mt-3 text-gray-400" v-html="item.summary" />
        </div>
      </div>
    </div>
  </div>
</template>
