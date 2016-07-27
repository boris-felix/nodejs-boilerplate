FROM node:5.4.0

ADD ./deploy/nodejs/logrotate.conf /etc/logrotate.d/nodejs
ADD ./deploy/nodejs/nodemon.json /var/www/html/src
RUN apt-get update  && apt-get install -y logrotate && logrotate -f /etc/logrotate.d/nodejs
RUN npm install -g nodemon

CMD ["/var/www/html/scripts/start.sh"]