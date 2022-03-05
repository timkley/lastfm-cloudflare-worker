# Last scrobble of @timmotheus

This worker gets the last scrobble of [@timmotheus](https://www.last.fm/user/Timmotheus) as a JSON response using a Cloudflare Worker and the Last.FM API.

## Usage

You can fork this repo and use Cloudflares [wrangler](https://github.com/cloudflare/wrangler) CLI to publish this worker in your own account.

You'll need to add one secret:

```
wrangler secret put LASTFM_API_KEY --env production
```

You can create an App and get this key by visiting the [API applications page](https://www.last.fm/api/accounts).
