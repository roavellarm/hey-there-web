import index from '../pages/Home/index'
import Login from '../pages/Login'
// import { registerService } from '../services/authService'

// const freteGratis = require('./descontos').freteGratis()

// test('freteGratis é verdadeiro para 200', () => {
//   expect(freteGratis(200)).toBeTruthy()
// })

test('Expect the index exists', () => {
  expect(index).toExist
})

test('Expect the login exists', () => {
  expect(Login).toExist
})
