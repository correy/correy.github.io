
'use strict';;;


const html = require ('choo/html')
const choo = require ('choo')
const {writeFileSync} = require ('fs')

const model = require('./model')


const app =
	choo ()


app.use (model)


app.route ('/**', ({cv}) => {

  const sections =
    cv.sections.map(section => {
      const items = section.items.map(item => html`
        <li class="mv5 measure-wide dark-gray">
          <div class="f6 f4-ns fw6 mb4 flex justify-between items-center">${item.company}<i class="f7 f5-ns mid-gray">${item.start} - ${item.end}</i> </div>
          <div class="f7 f5-ns mb3"><span class="fw9 tracked">built</span> ${item.built}</div>
          <div class="f7 f5-ns"><span class="fw9 tracked">with</span> ${item.used}</div>
        </li>
      `)

      return html`
        <section class="bt b--black-30 pv5">
          <h3 class="f6 f4-ns dark-gray fw7 mv0"> <span class="tracked-mega">${section.title}</span> <i class="mid-gray fr tracked">${section.subtitle}</i> </h3>
          <ul class="list pl0 mv0">
            ${items}
          </ul>
        </section>
      `
    })

  return html`
    <body class="sans-serif dark-gray bg-near-white ph2 flex flex-column items-center">
      <heading class="vh-50 flex flex-column items-center justify-center">
        <h1 class="near-black f4 f3-ns fw7">${cv.title}</h1>
        <h2 class="dark-gray f6 f5-ns fw4 tracked">${cv.subtitle}</h2>
      </heading>
      ${sections}
    </body>
  `
})


const body =
	app.toString ('/')


writeFileSync ('index.html', `<!doctype html>
<html lang="en">
  <head>
    <title>Corey Michael Trampe</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link rel="stylesheet" href="https://unpkg.com/tachyons@4.12.0/css/tachyons.min.css"/>
  </head>
  ${body}
</html>
`)
