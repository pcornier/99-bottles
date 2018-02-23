
const nspider = require('node-spider')
const fs = require('fs')
const spider = new nspider({
  concurrent: 5,
  error: (err, url) => {
    console.log('error:' + url)
    console.log(err)
  }
})

let source = doc => {
  console.log('parsing ' + doc.url)
  let src = doc.$('#main pre').text()
  let meta = doc.$('#main table').text()
    .split('\n')
    .filter(e => e.trim() !== '')
    .map(e => e.trim().split(':'))
    .reduce((p, e) => {
      p[e[0]] = e[1]
      return p
    },{})

  let title = doc.$('#main > h2').text()

  let markup =
`
## ${title} ##
---
- Author: ${meta.Author}
- Date: ${meta.Date}
- Info: ${meta.Info}
- Score: ${meta.Score}
- URL: ${meta.URL}
- Original URL: ${doc.url}
---

`
  markup += '```' + src + '```'

  doc.$('#category a').each((i, e) => {
    let href = doc.$(e).attr('href').split('#')[0]
    let url = doc.resolve(href)
    spider.queue(url, source)
  })

  fs.writeFile('./languages/' + doc.url.split('/').pop().split('.')[0] + '.md', markup, res => {
    console.log('done')
  })
}

let index = doc => {
  console.log('parsing ' + doc.url)
  doc.$('#category a').each((i, e) => {
    let href = doc.$(e).attr('href').split('#')[0]
    let url = doc.resolve(href)
    spider.queue(url, source)
  })
}

spider.queue('http://www.99-bottles-of-beer.net/abc.html', doc => {
  console.log('parsing ' + doc.url)
  doc.$('#submenu a').each((i, e) => {
    let href = doc.$(e).attr('href').split('#')[0]
    let url = doc.resolve(href)
    spider.queue(url, index)
  })
})
