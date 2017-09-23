docker run -it --rm -p 9000:9000 \
	-v $PWD:/webpackxx \
	-v node_modules_6:/webpackxx/node_modules \
	-w /webpackxx \
	--name webpackxx \
	daocloud.io/library/node:6.11.3-alpine \
        npm install --save-dev extract-text-webpack-plugin
