const html = require('choo/html')
const app = require('choo')()

const data = require('./data')
const pms = Object.keys(data)


app.route('/', (state, emit) => {
  return html`
    <main class="container">
      ${pms.map(pm => {
        return html`
          <section class="pm-group">
            <h1 class="pm-name">${pm}</h1>
            ${data[pm].map(student => {
              return html`
                <p class="student-name">${student}</p>
              `
            })}
          </section>
        `
      })}
    </main>
  `
})

app.mount('main')
