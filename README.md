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
Install node modules for eleventy
```
docker-compose run --rm web npm install
```

Start it up
```
docker-compose up -d
```

For drupal, in a browser go to `localhost:3000`
Choose the standard set up for drupal.
Once drupal is initialized, Click "Extend" in the top menu. Enable the "JSON:API" and "Serialization" modules

Then create an article by going to "Content"-->"Add content"-->"Article". Content created in Articles created in drupal will get picked up by eleventy

For eleventy, you'll probably have to restart the container. So do the following again:
```
docker-compose up -d
```
In a browser go to `localhost:8080/articles` to see articles created by drupal
