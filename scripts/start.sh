#!/bin/bash
cd /var/www/html && npm install
#!/bin/sh
while ! curl http://mongo:27017/
do
  echo "$(date) - still trying"
  sleep 1
done
#nodemon --watch "/var/www/html" /var/www/html/src/app.js
pm2 start /var/www/html/src/app.js -i 0 --no-daemon