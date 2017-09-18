docker run --name webserver -d -p 8035:80 -v $(pwd)/../:/var/www/html -v $(pwd)/default.conf:/etc/nginx/conf.d/default.conf:ro daocloud.io/library/nginx
