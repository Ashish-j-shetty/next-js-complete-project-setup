# Pages directory in next js

By default whatever valid react component present inside the pages folder are treated as the **pages** , i.e next.js set's up the routes for those pages.

## Link component of next js

Link tag is used to link to other pages , we can make use of anchor tag but anchor tags cause the page to reload which is a disadvantage, so next js provides us Link component whihc uses the dynamic nature of the react and doesnt not cause the page to reload.

The sytax : `<Link href=""> <a>link name </a> </Link>`
we do not have to give the href to anchor tag as next js will pass it down to anchor tag by default.

### Nested routes

We need to have a particular folder inside the pages forlder and have files inside it which are nested .
for eg if we want a route as /demo/home then we we should have the home file inside thte demo folder which is inside pages.

### Dynamic routes

Dynamic routes are those to which the the content may depend on underlining slug , i.e ie we want to display the the item data based on the id of the item in a separate page. etc

syntax: ` [id or name ].tsx`
the file name should start with **Opening square bracket and end with square bracket** we can have any detail inside the square bracket.

we can have dynamic folder name as well i.e [foldername]

to get the query object from the url we can make use of `useRouter` hook from useRouter.

**Gotcha** : The use router sometimes would not work as expected that the query field can be empty the reason being next js will make your query empty if you do not have any prefetching conditions i.e getStaticProps or getServersideProps.

### Catch all routes

if you want a particular page to catch all the routes then the nextjs does supprot that as well and the syntax for it is `[...filename].tsx`
the router.query will return all the variable passed in the url as an array in the order they are defined in.

### Custom 404 page

To have a custom 404 page inside the pages directory create file called 404.tsx or jsx
the name 404 is actually hard coded to the next libray.
