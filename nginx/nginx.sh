docker run --name webserver -d -p 3000:80 \
	-v $(pwd)/../:/var/www/html \
	-v $(pwd)/default.conf:/etc/nginx/conf.d/default.conf:ro \
	daocloud.io/library/nginx:1.12.0-alpine
