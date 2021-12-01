const cache = new Map()

export const useData = (fetcher) => {
	// Check if we already have a generator for this fetcher.
	// If not, create one first.
	if (!cache.has(fetcher)) {
		// Create a generator to manage request state.
		// This generator will run the query and output its result.
		const gen = createGen(fetcher)

		// Cache the generator, using the fetcher as a key.
		cache.set(fetcher, gen)

		// Start the generator and throw the first value, a promise.
		// React will catch this promise, resolve it, then re-render.
		throw gen.next().value
	}

	// Exhaust the generator and get the query result.
	// At this point, the promise has already fulfilled.
	const next = cache.get(fetcher).next()

	// Remove the cached generator, now that it's done.
	if (next.done) cache.delete(fetcher)
	// If the generator is not done, something went wrong.
	else throw new Error("Something went wrong with the query.")

	// Return the query result.
	return next.value
}

function* createGen(fetcher) {
	// Define a mutable variable.
	// Later, when the query resolves, we'll assign the result to it.
	let data

	// Run the query, which returns a promise.
	// Yield this promise so our hook can throw it, but only once.
	yield fetcher().then((result) => (data = result))

	// Return data, which now evaluates to the query result.
	return data
}

export default useData
