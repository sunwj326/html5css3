docker run -it --rm -it --name running-script \
	-v $(pwd)/..:/code -w /code \
	daocloud.io/library/node:6.11.2-alpine node $1 
