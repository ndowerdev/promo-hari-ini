export default defineEventHandler((event) => {
  const query = useQuery(event)

  const search = query.search ? query.search.toString() : ''
  const menus = [
    {
      url: '/promo-indomaret',
      name: 'Indomaret',
      slug: 'indomaret',

    },
    {
      url: '/promo-alfamart',
      name: 'Alfamart',
      slug: 'alfamart',
    },
    {
      url: '/promo-grab',
      name: 'Grab',
      slug: 'grab',
    },
    {
      url: '/promo-gojek',
      name: 'Gojek',
      slug: 'gojek',
    },
    {
      url: '/promo-swalayan',
      name: 'Swalayan',
      slug: 'swalayan',
    },
  ]
  // return search
  return search !== ''
    ? menus.find((menu) => {
      return menu.name.toLowerCase().includes(search.toString())
    })
    : menus
})
