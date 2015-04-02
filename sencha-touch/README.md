# Hello world Sencha Touch

## Sencha Touch example application integrated with Gitana driver

This directory provides a simple browser application that connects to the Cloud CMS Sample Project on your
tenant and pulls back a list of repositories.

You can use this project as a way to test out a simple sencha-touch HTML web page connecting to Cloud CMS.

## Sencha Cmd
Sencha applications are best created using the Sencha Cmd command-line tool.  More info on [downloading](https://www.sencha.com/products/sencha-cmd/download) and [installing](http://docs.sencha.com/cmd/5.x/intro_to_cmd.html) the tool can be found elsewhere.

In order to run this demo, you do not need to install Sencha Cmd, however, if you need to make changes to app.json during experimentation (edit and  run `sencha app refresh`), or would like to see a production build (`sencha app build`), you'll need to have the tool installed.



In order to connect to Cloud CMS, the demo should be run using a local proxy.  The proxy is started using Grunt and the
Grunt Connect proxy module.  The proxy starts up at the /proxy URI.  Any URL that starts with /proxy will be forwarded
to the api.cloudcms.com server.  The proxy allows your web app to provide a "same domain" endpoint for XHR/Ajax
connections that originate in the browser.

In production, you will likely want to use Apache or Nginx as a production proxy.

## How to launch the web server

Simply do:

    npm install
    npm start


Look up authentication and application information at https://[your-sub-domain].cloudcms.net/#/developers
and add them to `./GITANA_CREDENTIALS.js`.

And then point your browser to:

    http://localhost:3000/index.html

## additional notes
normally in a production environment, credentials would be handled by a supporting server, not directly in the browser.  If you intend to use this example as a starting point, you should remove the GITANA_CREDENTIALS.js file and authenticate with CloudCMS a different way.

This demo was build on top of the example getting started scenario [here](http://docs.sencha.com/touch/2.4/getting_started/building_your_first_app.html).  In a full development environment, your app will likely be split into more files using Sencha's [app/filesystem conventions](http://docs.sencha.com/touch/2.4/core_concepts/about_applications.html).