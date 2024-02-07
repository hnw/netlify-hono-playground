import { Hono } from 'https://deno.land/x/hono@v3.12.8/mod.ts'
import { handle } from 'https://deno.land/x/hono@v3.12.8/adapter/netlify/mod.ts'
import type { Env } from 'https://deno.land/x/hono@v3.12.8/adapter/netlify/mod.ts'

const app = new Hono<Env>()

app.get('/country', (c) =>
  c.text(`You are in ${c.env.context.geo.country?.name}`)
)
app.get('*', async (c) => c.env.context.next())

export default handle(app)
