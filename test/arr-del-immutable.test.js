import arrDelImmutable from '../src/arr-del-immutable'

describe('arrDelImmutable', () => {
	test('works', () => {
		const arr = [1, 2]
		const newArr = arrDelImmutable(arr, 1)
		expect(arr === newArr).toBe(false)
		expect(arr).toStrictEqual([1, 2])
		expect(newArr).toStrictEqual([2])
	})
})
