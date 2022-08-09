<template>
  <Suspense>
    <main class="bg-slate-900 text-gray-100">
      <Header />
      <slot />
    <!-- <Footer />
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      [Default Layout]
    </div> -->
    </main>
  </Suspense>
</template>
