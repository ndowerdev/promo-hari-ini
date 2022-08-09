<script setup>
const route = useRoute()
// const slug = props.slug
const slug = route.params.brand
// const { loading, data: brand } = await useAsyncData(() => {
//   return $fetch(`/api/brandPromo/${slug}`)
// })

const brand = await $fetch(`/api/brandPromo/${slug}`)

// const [{ data: brandPromo }, { data: brandInfo }] = await Promise.all([
//   useFetch(`/api/brandPromo/${slug}`),
//   useFetch(`/api/navmenu?search=${slug}`),
// ])
</script>

<template>
  <div v-if="brand">
    <Head>
      <Title>Promo {{ brand.brandName.name }} Terbaru Hari Ini</Title>
      <Meta name="description" :content="`Promo ${brand.brandName.name} Terbaru Hari Ini`" />

      <Meta name="og:type" content="article" />
      <Meta name="og:title" :content="`Promo ${brand.brandName.name} Terbaru Hari Ini`" />
      <Meta name="og:url" :content="`/promo-${slug}`" />
      <Meta name="og:description" content="" />
      <Meta name="og:image" :content="`/${brand.brandName.name.toLowerCase()}.png`" />
    </Head>
    <div>
      <div class="mx-auto max-w-screen-lg px-3 py-6">
        <div class="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
          <div>
            <h1 class="text-3xl font-bold">
              Promo <span class="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">{{ brand.brandName.name }}</span> Hari Ini
            </h1>
            <p class="mt-6 text-xl leading-9">
              Dapatkan promo {{ brand.brandName.name }} terbaru setiap hari hanya di sini.
            </p>
          </div>
          <div class="shrink-0">
            <img class="h-80 w-64" src="/default.png" alt="Avatar image" loading="lazy">
          </div>
        </div>
      </div>
      <div class="mx-auto max-w-screen-lg px-3 py-6">
        <div class="mb-6 text-2xl font-bold">
          Recent <span class="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">Projects</span>
        </div>
        <div class="flex flex-col gap-6">
          <div v-for="(item, index) in brand.brandData.data" :key="index" class="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row">
            <div class="shrink-0">
              <a :href="`/promo/${item.id}`">
                <img class="h-36 w-36 hover:translate-y-1" :src="item.images" :alt="item.title" loading="lazy">
              </a>
            </div>
            <div>
              <div class="flex flex-col items-center gap-y-2 md:flex-row">
                <a class="hover:text-cyan-400" :href="`/promo/${item.id}`">
                  <div class="text-xl font-semibold">{{ item.title }}</div>
                </a>
                <div class="ml-3 flex gap-2" />
              </div>
              <div class="mt-3 text-gray-400" v-html="item.summary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
