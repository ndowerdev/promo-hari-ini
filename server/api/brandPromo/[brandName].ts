export default defineEventHandler(async (event) => {
  // const query = useQuery(event)
  // const realUrl = `https://scanharga.cuan.dev/api/promo/details/${event.context.params.brandName}`
  const brandName = event.context.params.brandName
  // const res = {
  //   brandData: Array, brandInfo: Object,

  // }

  const res = await $fetch(`/api/navmenu?search=${brandName}`).then(async (data) => {
    return {
      brandData: await $fetch(`https://scanharga.cuan.dev/api/promo/${data.name}?total=20&_t=${Date.now()}`),
      brandName: data,
    }
  })

  return res
  // return brandName
  // const realUrl = `https://scanharga.cuan.dev/api/promo/${event.context.params.brandName}?total=20&_t=${Date.now()}`
  // const data = await $fetch(realUrl)
  // return data
})
