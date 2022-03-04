# drupal-eleventy-demo
liberally taken from these two tutorials:
* Build an eleventy site in 3 minutes: https://www.youtube.com/watch?v=BKdQEXqfFA0
* https://github.com/spinspire/11ty-drupal

## Developer Set-up
Clone the repo and cd into the repo directory
```
git clone git@github.com:mlibrary/drupal-eleventy-demo.git
cd drupal-eleventy-demo
```



Make everything in the drupal directory writeable by `www-data`. ( @niquerio Notes: I don't know if this step is necessary anymore.)
```
sudo chgrp -R www-data drupal/*
```
build the drupal image
```
docker-compose build
```

Install node modules for eleventy
```
docker-compose run --rm web npm install
```

Start it up
```
docker-compose up -d
```

Apply the configuration
```
docker-compose run --rm drupal drush config:import
```

For drupal, in a browser go to `localhost:3000`
```
user: admin
password: password
```

Then create an article by going to "Content"-->"Add content"-->"Article". Content created in Articles created in drupal will get picked up by eleventy

For eleventy, you'll probably have to restart the container. So do the following again:
```
docker-compose up -d
```
In a browser go to `localhost:8080/articles` to see articles created by drupal
