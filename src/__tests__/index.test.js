import sum from '../sum'
import divisao from '../divisao'
import api from '../api/index'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Sum should be exists', () => {
  expect(sum).toExist
})

test('divisao should be exists', () => {
  expect(divisao).toExist
})


test('api should be exists', () => {
  expect(api).toExist
})

