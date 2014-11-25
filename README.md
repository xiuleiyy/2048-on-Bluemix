2048-on-Bluemix
===============

2048-game running on Bluemix

This is a modified version for 2048 running on Bluemix.

Steps by steps to run 2048 on Bluemix
=======================================

1. Connect to Bluemix with CF command line tool.
2. Run "cf push app_name --no-start" to deploy app to Bluemix and not start app first
3. Login Bluemix UI with your Bluemix ID: http://www.bluemix.net
4. Click into app "app_name" and click "Add a Service" to add mysql service to this application. Click "OK" to re-stage app.
5. Start app from Bluemix UI
6. Access application with http://app_name.mybluemix.net

