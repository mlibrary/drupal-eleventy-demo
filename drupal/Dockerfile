FROM drupal:9-apache

RUN apt-get update -yqq && apt-get install -yqq --no-install-recommends \
  default-mysql-client

RUN composer require drush/drush
