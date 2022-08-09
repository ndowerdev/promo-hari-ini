<script setup>
// const props = defineProps({
//   slug: String,
// })
const route = useRoute()
// const slug = props.slug
const slug = route.params.slug

const data = await $fetch(`/api/getPromo/${slug}`)

const breadcrumb = [
  { item: '/', name: 'Home' },
  { item: '/promo', name: 'Promo' },
  { name: 'Breadcrumbs' },
]
</script>

<template>
  <div>
    <Head v-if="data">
      <Title>{{ data.title }}</Title>
      <Meta name="description" :content="data.title" />
      <!-- ogp -->
      <Meta name="og:type" content="article" />
      <Meta name="og:title" :content="data.title" />
      <Meta name="og:url" :content="`/promo-${slug}`" />
      <Meta name="og:description" :content="`${data.content_plain.substr(0, 155)}...` " />
      <Meta name="og:image" :content="data.thumbnail" />
      <Meta name="article:author" :content="data.thumbnail" />
      <Meta name="article:published_time" :content="data.published" />
      <Meta name="article:modified_time" :content="data.updated" />
      <!-- <Meta name="article:section" :content="data.thumbnail" /> -->
      <Meta name="article:tag" :content="data.human_category_implode" />
    </Head>
    <SchemaOrgArticle
      :image="data.thumbnail"
      :headline="data.title"

      :date-published="data.published"
      :date-modified="data.updated"
    />
    <SchemaOrgPerson :name="data.author.name" :url="data.uri" />

    <div class="mx-auto max-w-screen-lg px-3 py-6">
      <h1 class="text-center text-3xl font-bold">
        {{ data.title }}
      </h1>
      <div class="mt-2 text-center text-sm text-gray-400">
        By <!-- -->{{ data.author.name }}<!-- --> on <!-- --> <!-- -->{{ data.updated }}
      </div>
      <SchemaOrgBreadcrumb
        v-slot="{ itemListElement }"
        as="div"
        class="text-center"
        :item-list-element="breadcrumb"
      >
        <div class="flex justify-center tex-sm" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <template v-for="(item, key) in itemListElement" :key="key">
              <li class="inline-flex items-center">
                <template v-if="item.item">
                  <a :href="item.item" class="inline-flex items-center text-sm font-medium ">
                    {{ item.name }}
                  </a>
                  &nbsp;»&nbsp;
                </template>
                <span v-else>{{ data.title }}</span>
              </li>
            </template>
          </ol>
        </div>
      </SchemaOrgBreadcrumb>
      <div class="mx-auto mt-5 max-w-prose">
        <div class="aspect-w-3 aspect-h-2">
          <img class="h-full w-full rounded-lg object-cover object-center" :src="data.thumbnail" alt="Image post 2">
        </div>
        <div class="prose prose-invert mt-8 prose-img:rounded-lg" v-html="data.content" />
      </div>
    </div>
  </div>
</template>
