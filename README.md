# nextjs-streaming-experiments
This repo demonstrates the NextJS/React streaming capabilities.

# Overview

This project contains 3 pieces:
* `./nextjs-react-18` - this a NextJS server powered by `NextJS 14 LTS` and `React 18 LTS`.
* `./nextjs-react-19` - this a NextJS server powered by `NextJS 15 Canary` and `React 19 RC`.
* `./server` - this is an example API node server used to serve JSON to React.


# Examples
* LTS Server Streaming 
* React 19 Client Streaming

## LTS Server Streaming
Uses
* `./server`
* `./nextjs-react-18`

Start the node `./server` with `npm run start` and the `./nextjs-react-18` server with `npm run dev`.
* Load the server component streaming example with `http://localhost:3000/server` and notice the page load timing in the network tab.
* Load the client component streaming example with `http://localhost:3000/client` and notice the difference.

> ![NOTE]
> The Client component example should hit the same API with fetch infinitely.
> THe Server component example should be pulling down less code overall.

## React 19 Client Streaming
Uses
* `./server`
* `./nextjs-react-19`

In the previews example (`LTS Server Streaming`), we noticed that the Client component fetch'ed infinitely. To solve this, you need the react `use` hook introduced in React 19. To see this in action follow the steps above but for the `./nextjs-react-19` code and pull up the client component page: `http://localhost:3000/client`.

> ![NOTE]
> The fetch calls should not be inifinite anymore.
