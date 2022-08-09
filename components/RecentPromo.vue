<script setup>
// const { pending, data: promos } = useFetch('https://scanharga.cuan.dev/api/promo/Promo%20Hari%20Ini')
// const { data: promos, pending, refresh } = await useAsyncData(() => $fetch('https://scanharga.cuan.dev/api/promo/Promo%20Hari%20Ini'))

// const { data: promoHariIni } = await useAsyncData(() => {
//   return $fetch('https://scanharga.cuan.dev/api/promo/Promo%20Hari%20Ini')
// })
// const { data: promoIndomaret } = await useAsyncData(() => {
//   return $fetch('https://scanharga.cuan.dev/api/promo/Indomaret?total=9')
// })
// const [{ data: promoHariIni }, { data: promoIndomaret }] = await useAsyncData(() => {
//   $fetch('https://scanharga.cuan.dev/api/promo/Promo%20Hari%20Ini'),

// },()=>{
//   $fetch('https://scanharga.cuan.dev/api/promo/Indomaret?total=9')
// })
const promoHariIniEndpoint = `https://scanharga.cuan.dev/api/promo/Promo%20Hari%20Ini?total=6&_t=${Date.now()}`
const promoIndomaretEndpoint = `https://scanharga.cuan.dev/api/promo/Indomaret?total=6&_t=${Date.now()}`
// const [{ data: promoIndomaret }, { data: promoHariIni }] = await Promise.all([
//   useFetch(promoIndomaretEndpoint),
//   useFetch(promoHariIniEndpoint),
// ])
const promoIndomaret = await $fetch(promoIndomaretEndpoint)
const promoHariIni = await $fetch(promoHariIniEndpoint)

// useHead({
//   title: 'Promo Barang Setiap Hari',
//   link: [
//     {
//       rel: 'icon', type: 'image/png', href: '/nuxt.png',
//     },
//   ],
// })
</script>

<template>
  <div>
    <Head>
      <Title>Promo Barang Setiap Hari</Title>
      <Meta name="description" content="Promo Barang Setiap Hari" />
    </Head>

    <div class="mx-auto max-w-screen-lg px-3 py-6">
      <div class="mb-6 text-2xl font-bold">
        <div class="flex items-baseline justify-between">
          <div>
            Promo <span class="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">Terbaru</span>
          </div>
          <div class="text-sm">
            <a href="/demo/astro-boilerplate/posts">View all Posts →</a>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <a v-for="(item, index) in promoHariIni.data" :key="index" class="hover:translate-y-1" :href="`/promo/${item.id}`">
          <div class="overflow-hidden rounded-md bg-slate-800">
            <div class="aspect-w-3 aspect-h-2">
              <img class="h-full w-full object-cover object-center" :src="item.images.replace('s16000', 'w800-h600-c')" :alt="item.title" loading="lazy">
            </div>
            <div class="px-3 pt-4 pb-6 text-center">
              <h2 class="text-lg font-semibold">{{ item.title }}</h2>
              <div class="mt-1 text-xs text-gray-400">{{ item.updated }}</div>
              <div class="mt-2 text-sm hidden" v-html="item.summary" />
            </div>
          </div>
        </a>
      </div>
    </div>

    <div class="mx-auto max-w-screen-lg px-3 py-6">
      <div class="mb-6 text-2xl font-bold">
        <div class="flex items-baseline justify-between">
          <div>
            Promo <span class="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">Indomaret</span>
          </div>
          <div class="text-sm">
            <a href="/promo-indomaret-hari-ini">Lihat Promo Indomaret Lainnya →</a>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
        <a v-for="(item, index) in promoIndomaret.data" :key="index" class="hover:translate-y-1" :href="`/promo/${item.id}`">
          <div class="overflow-hidden rounded-md bg-slate-800">
            <div class="aspect-w-3 aspect-h-2">
              <img class="h-full w-full object-cover object-center" :src="item.images.replace('s16000', 'w800-h600-c')" :alt="item.title" loading="lazy">
            </div>
            <div class="px-3 pt-4 pb-6 text-center">
              <h2 class="text-lg font-semibold">{{ item.title }}</h2>
              <div class="mt-1 text-xs text-gray-400">{{ item.updated }}</div>
              <div class="mt-2 text-sm hidden" v-html="item.summary" />
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
