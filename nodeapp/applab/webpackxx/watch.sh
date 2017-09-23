docker run -it --rm \
	-v node_modules_6:/webpackxx/node_modules \
	-w /webpackxx daocloud.io/library/node:6.11.2-alpine \
	ls node_modules