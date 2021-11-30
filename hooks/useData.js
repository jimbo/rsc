export const useData = (fetcher) => {
	if (!cache.has(fetcher)) {
		let data
		let promise

		cache.set(fetcher, () => {
			// CASE: fulfilled
			if (data !== void 0) {
				cache.delete(fetcher)
				return data
			}

			// CASE: not yet fulfilled
			if (!promise) {
				promise = fetcher().then((r) => (data = r))
			}

			// CASE: not yet fulfilled
			throw promise
		})
	}

	return cache.get(fetcher)()
}

export default useData

const cache = new Map()
