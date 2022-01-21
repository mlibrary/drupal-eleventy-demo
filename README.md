# drupal-eleventy-demo

Clone the repo and cd into the repo directory
```
git clone git@github.com:mlibrary/drupal-eleventy-demo.git
cd drupal-eleventy-demo
```

Make everything in the drupal directory writeable by `www-data`.
```
sudo chgrp -R www-data drupal/*
```

Start it up
```
docker-compose up
```

For drupal, in a browser go to localhost:3000
Once drupal is initialized, articles created in drupal will get picked up by eleventy

For eleventy, in a browser go to localhost:8080/articles to see articles created by drupal
