export default defineEventHandler(async (event) => {
  // const query = useQuery(event)
  const realUrl = `https://scanharga.cuan.dev/api/promo/details/${event.context.params.postId}`
  const data = await $fetch(realUrl)
  return data
})
