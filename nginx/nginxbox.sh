docker run --name nginxbox -p 80:80 -d -v ~/docker_space/nginx/html:/usr/share/nginx/html -v ~/docker_space/nginx/default.conf:/etc/nginx/conf.d/default.conf nginx
