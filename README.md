# Image Search Abstraction Layer

## Objective

Build a full stack JavaScript app that allows you to search for images like this: `https://cryptic-ridge-9197.herokuapp.com/api/imagesearch/lolcats%20funny?offset=10` and browse recent search queries like this: `https://cryptic-ridge-9197.herokuapp.com/api/latest/imagesearch/`. Then deploy it to Heroku.


## User Stories

1. I can get the image URLs, alt text and page urls for a set of images relating to a given search string.

1. I can paginate through the responses by adding a `?offset=2` parameter to the URL.

1. I can get a list of the most recently submitted search strings.

## Examples

`
https://cryptic-ridge-9197.herokuapp.com/api/latest/imagesearch/
`

Response:

```
[{"term":"lolcats funny","when":"2017-03-22T16:38:26.148Z"},{"term":"lolcats funny","when":"2017-03-22T16:38:18.538Z"},{"term":"lolcats funny","when":"2017-03-22T16:12:08.646Z"},{"term":"lolcats funny","when":"2017-03-22T16:11:29.525Z"},{"term":"lolcats funny","when":"2017-03-22T16:06:52.315Z"},{"term":"lolcats funny","when":"2017-03-22T15:54:27.404Z"},{"term":"lolcats funny","when":"2017-03-22T14:23:33.929Z"},{"term":"lolcats funny","when":"2017-03-22T13:12:04.580Z"},{"term":"lolcats funny","when":"2017-03-22T11:50:51.976Z"},{"term":"lolcats funny","when":"2017-03-22T10:54:20.310Z"}]
```

`
https://cryptic-ridge-9197.herokuapp.com/api/imagesearch/lolcats%20funny?offset=10
`

Response:

```
[{"url":"http://data.whicdn.com/images/28614985/original.jpg","snippet":"Lolcats - Funny Pictures of ...","thumbnail":"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ6dpfl378CcSGGvqS-MmPa91qcMfB31WYmW_1ARakW5jQ7-jUhTCvWuYo","context":"http://weheartit.com/entry/group/15377825"},{"url":"http://www.bajiroo.com/wp-content/uploads/2013/06/funny-lol-cats-fun-pics-images-photos-pictures-5.jpg","snippet":"funny-lol-cats-fun-pics-images ...","thumbnail":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTUXCGnfYdIRdxb86GIz-VCaSsgmgG5uS27hMCq1IquRvSTd2zwQwtphXA","context":"http://www.bajiroo.com/33-funniest-lolcats-ever"},{"url":"http://data.whicdn.com/images/29044507/large.jpg","snippet":"Most popular tags for this ...","thumbnail":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRre4NmoJmEOVxSi1VNAumtmb6nuuTpYrLlCPGuOwXXF-R34ngusPjC144","context":"http://weheartit.com/entry/group/1764108"},{"url":"https://s-media-cache-ak0.pinimg.com/564x/fb/be/f5/fbbef54aff9a3d53d1f2515a6d023388.jpg","snippet":"... lolcats: Funny Animals","thumbnail":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS9uWw3lz4NLyTWTKy6y5kb_MQiFfC99zRiZEsoXqI99HRMJ-dZhq-zqNs","context":"https://www.pinterest.com/pin/316448311293435919/"},{"url":"http://data.whicdn.com/images/34336599/large.jpg","snippet":"... funny, husky, meme and","thumbnail":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT9QoMySZi4FoDjcfYRW1PGlHjMsGoKCrHxLWzMmtBtN7TqU_blFwg_R9c","context":"http://weheartit.com/entry/group/8533649"},{"url":"https://img.scoop.it/f-tKCNgJWPoGzbrK5LCQhTl72eJkfbmt4t8yenImKBVvK0kTmF0xjctABnaLJIm9","snippet":"... Lolcats - Funny Pictures ...","thumbnail":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnKqxoHtHn8b0dYvy4VKUKWZ3obuPs3O2agntOwGzNscV-mJghnsMEQgE","context":"http://www.scoop.it/t/pictures/p/1665736655/2012/04/25/lolcats-ohai-hooman-lolcats-funny-pictures-of-cats-i-can-has"},{"url":"http://data.whicdn.com/images/12853824/large.jpg","snippet":"lolcat and tattoo image","thumbnail":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRJpQlUkzQqIAwbF0IcDPQygyPm9pBKYNk84wuVmAiSBK6zB985-XqC3N8","context":"http://weheartit.com/entry/12853824"},{"url":"https://img.scoop.it/nCDfJ08MpKhEdCcEztDllTl72eJkfbmt4t8yenImKBVvK0kTmF0xjctABnaLJIm9","snippet":"Lolcats - Funny Pictures of ...","thumbnail":"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRzlqyqamk-b85EzibpHcYlfc6i8luNd803igOeN9NL2g5C_I5-oa2P1A","context":"http://www.scoop.it/t/crazy-cats/p/1661402930/2012/04/25/lolcats-trust-me-lolcats-funny-pictures-of-cats-i-can-has"},{"url":"http://data.whicdn.com/images/33269155/large.jpg","snippet":"Lolcats - Funny Pictures of ...","thumbnail":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQjWlGwqy4O4t247ol9hFdz_bZgWxy-AgzuwQUGgZyKwVZeXht_KaOjRTo","context":"http://weheartit.com/entry/group/7423856"},{"url":"https://img.scoop.it/jVVFUdNhaCPVmq2BvcmrATl72eJkfbmt4t8yenImKBVvK0kTmF0xjctABnaLJIm9","snippet":"Meno*PAWS* - Lolcats 'n' Funny ...","thumbnail":"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRsT6bercKSOgUXGovBBDV1Iq3MUVZ9ki-VhVNxJvzV_GQk7RcFt4Wiwyk","context":"http://www.scoop.it/t/lolcats/p/3405457/2011/01/18/meno-paws-lolcats-n-funny-pictures-of-cats-i-can-has-cheezburger"}]
```