var posts=["post/36997b1b.html","post/13151138.html","post/8675909c.html","post/829e67e9.html","post/4a17b156.html","post/36997b1b.html","post/4896de77.html","post/4f8d4e0e.html","post/ac3ba24e.html","post/84f45425.html","post/50b12041.html","post/1d2ba49c.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };