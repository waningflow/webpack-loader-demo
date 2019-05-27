import compiler from './compiler.js'
import { add } from '../src/utils'

test('Inserts name and outputs JavaScript', async () => {
  const stats = await compiler('example.txt')
  const output = stats.toJson().modules[0].source
  const t = 'export default "Hey Alice!\\n"'
  expect(output).toBe('export default "Hey Alice!\\n"')
})

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3)
})
