<script setup>

</script>

<template>
  <NuxtLayout cl>
    <Head>
      <Meta name="robots" content="index, follow" />
    </Head>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
