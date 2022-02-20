addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

/**
 * @param {Request} request
 */
async function handleRequest(request) {
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?format=json&method=user.getrecenttracks&user=timmotheus&limit=1&api_key=${LASTFM_API_KEY}`)

    return new Response(JSON.stringify(await response.json()), {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
    })
}