2048-on-Bluemix
===============

2048-game running on Bluemix

This is a modified version for 2048 running on Bluemix.

Steps by steps to run 2048 on Bluemix
=======================================

1. Connect to Bluemix with CF command line tool. 
  cf api https://api.ng.bluemix.net
  cf login
2. Run "cf push app_name --no-start" to deploy app to Bluemix and not start app first
3. Run "cf create-service mysql 100 mysql_instance_name" to create a mysql instance
4. Run "cf bind-service app_name mysql_instance_name" to bind mysql isntance with application.
5. Start app with "cf start app_name"
6. Access application with http://app_name.mybluemix.net




