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

In a browser go to localhost:8080
