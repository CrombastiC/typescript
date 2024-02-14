import express from 'express'

const app = express()

const router = express.Router()
app.use('/api', router)
router.get('/api', (req: any, res: any) => {
  res.code({ code: 200 })
})
app.listen(3000, () => {
  console.log('server is running')
})
