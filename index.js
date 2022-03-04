addEventListener('fetch', event => {
    event.respondWith(handleRequest(event))
})

/**
 * @param event
 */
async function handleRequest(event) {
    const cache = caches.default

    let response = await cache.match(event.request)
    if (response) {
        return response
    }

    const scrobble = await fetch(
        `http://ws.audioscrobbler.com/2.0/?format=json&method=user.getrecenttracks&user=timmotheus&limit=1&api_key=${LASTFM_API_KEY}`,
    )

    response = new Response(JSON.stringify(await scrobble.json()), {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    })

    event.waitUntil(cache.put(event.request, response.clone()))

    return response
}
