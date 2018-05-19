# Relay Modern & GraphCool Personal Project

### [Demo Page on Netlify](https://useful-bookmarks.netlify.com/)

> A follow-up from Nikolas Burk's [Getting started with Relay Modern](https://blog.graph.cool/getting-started-with-relay-modern-46f8de6bd6ec),
> [github source](https://github.com/graphcool-examples/react-graphql/tree/master/quickstart-with-relay-modern)

used fixed version of relay-compiler: [Explanation](https://github.com/facebook/relay/pull/2142#issuecomment-369053139)

- will be personally modified to be a bookmarks page for the technical tricks on the Internet, with a log-in system.
- it's going to be somewhat similar to hackernews + instagram
  - &#9745; added src and anchor
  - &#9745; login system (using [GraphCool's Email Auth System](https://github.com/graphcool/templates/tree/master/auth/email-password))
  - &#9745; added comments system
  - &#9745; will complete comments system by adding mutations for CUD, relay's pagination func for browsing a many of them
  - &#9745; will Edit funcs for Posts and Comments
  - &#9745; deploy to netlify pages
  - &#9999; apply TypeScript on the project
  - &#9744; will add likes(exactly same as hackernews' votes)
  - &#9744; will add small chatting system using relay's subscription func
  - &#9744; will add some kind of console page for stats and browsing users-posts-comments-likes relationships
  - &#9744; will transform graphcool to traditional DB by writing own resolver (maybe I can use [Prisma](https://gist.github.com/marktani/2cbbe6467cb66bc9959b63313a248988) for AWS RDS MySQL or if it works, definitely for my local DB or whatever, too. pretty awesome!)
