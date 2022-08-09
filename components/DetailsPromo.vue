<script setup>
const props = defineProps({
  slug: String,
})

const slug = props.slug

const { data: detailPromo, pending, refresh } = await useAsyncData(() => $fetch(`https://scanharga.cuan.dev/api/promo/details/${slug}`))

useHead({
  title: `${detailPromo.value.title}`,
  link: [
    {
      rel: 'icon', type: 'image/png', href: '/nuxt.png',
    },
  ],
})

const json1
= {
  '@context': 'https://schema.org',
  '@type': 'Article',
  'headline': `${detailPromo.value.title}`,
  // 'alternativeHeadline': 'This article is also about robots and stuff',
  'image': 'http://example.com/image.jpg',
  'author': {
    '@type': 'Thing',
    'name': `${detailPromo.value.author.name}`,
    'url': `${detailPromo.value.author.uri}`,
  },
  'genre': `${detailPromo.value.human_category_implode}`,
  'keywords': `${detailPromo.value.human_category_implode}`,
  // 'wordcount': '1120',
  'url': `/promo/${slug}`,
  'mainEntityOfPage': {
    '@type': 'WebPage',
    '@id': 'https://google.com/article',
  },
  'datePublished': `${detailPromo.value.published}`,
  'dateCreated': `${detailPromo.value.published}`,
  'dateModified': `${detailPromo.value.updated}`,
  'description': 'We love to do stuff to help people and stuff',
  'articleBody': `${detailPromo.value.content_plain}`,
}
const json2 = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [{
    '@type': 'ListItem',
    'position': 1,
    'name': 'Books',
    'item': 'https://example.com/books',
  }, {
    '@type': 'ListItem',
    'position': 2,
    'name': 'Science Fiction',
    'item': 'https://example.com/books/sciencefiction',
  }, {
    '@type': 'ListItem',
    'position': 3,
    'name': 'Award Winners',
  }],
}

useJsonld(() => ([
  json1, json2,
]))
</script>

<template>
  <div>
    <div v-if="pending">
      Loading
    </div>
    <div v-else class="mx-auto max-w-screen-lg px-3 py-6">
      <h1 class="text-center text-3xl font-bold">
        {{ detailPromo.title }}
      </h1>
      <div class="mt-2 text-center text-sm text-gray-400">
        By <!-- -->{{ detailPromo.author.name }}<!-- --> on <!-- --> <!-- -->{{ detailPromo.updated }}
      </div>
      <div class="mx-auto mt-5 max-w-prose">
        <div class="aspect-w-3 aspect-h-2">
          <img class="h-full w-full rounded-lg object-cover object-center" :src="detailPromo.thumbnail" alt="Image post 2" loading="lazy">
        </div>
        <div class="prose prose-invert mt-8 prose-img:rounded-lg" v-html="detailPromo.content" />
      </div>
    </div>
  </div>
</template>
