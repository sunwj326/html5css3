docker run --name webserver -d -p 8010:80 -v $(pwd):/var/www/html -v $(pwd)/default.conf:/etc/nginx/conf.d/default.conf:ro nginx
