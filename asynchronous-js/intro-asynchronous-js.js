/* 
This file is about the article at https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing

Synchronous JS is when the browser has to read each line of code one after the other.
This can be a problem when some lines of code are taking a long time to run, keeping the next lines from running.
Another problem with this that it allows for "callback hell" to happen, creating a pyramid of doom(a hard to read syntax formation with indentation resembling a pyramid on it's side).
To solve these problems we use Asynchronous JS instead. So while some lines are taking a while to run, lines later in the code can run at the same time. The promise is the foundation of asynchronous programming in JS, which I'll learn about in the next article.
*/