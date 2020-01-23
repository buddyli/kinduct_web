## Apache
(MacOS setup httpd)[https://getgrav.org/blog/macos-catalina-apache-multiple-php-versions]

> * Root directory: `/usr/local/var/www`
> * The default ports have been set in `/usr/local/etc/httpd/httpd.conf` to 8080 and in
`/usr/local/etc/httpd/extra/httpd-ssl.conf` to 8443 so that httpd can run without sudo.
> * To have launchd start httpd now and restart at login:
  `brew services start httpd`
> * Or, if you don't want/need a background service you can just run:
  `apachectl start`
> * Tail httpd logs `tail -f /usr/local/var/log/httpd/error_log`

## PHP
### Install codeigniter-restserver and update COMPOSER_AUTOLOAD=TRUE in application/config/config.php
`composer require chriskacerguis/codeigniter-restserver`
and change $config['COMPOSER_AUTOLOAD'] to true in config file

## MySQL
Run below SQL to create table athletes in target database.
`
DROP TABLE IF EXISTS `athlete`;
CREATE TABLE `athlete` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `age` int(3) NOT NULL,
  `city` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `province` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `country` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
`

## Open issues
1. Redirect
2. Delete on home page, some times works well...
3. Upload files with ilegal foramt