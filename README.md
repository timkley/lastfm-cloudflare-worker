# Last tweet of @timkley

This worker gets the last tweet of [@timkley](https://twitter.com/timkley) as a JSON response using a Cloudflare Worker and the Twitter API.

## Usage

You can fork this repo and use Cloudflares [wrangler](https://github.com/cloudflare/wrangler) CLI to publish this worker in your own account.

You'll need to add two secrets:

```
wrangler secret put TWITTER_API_KEY --env production
wrangler secret put TWITTER_API_SECRET --env production
```

You can create an App and get those keys by visiting the [developer porta](https://developer.twitter.com/en/apps)
