.PHONY: run
run:
	TARGET=build docker-compose up

.PHONY: test
test:
	TARGET=test docker-compose up

.PHONY: clear-mongo
clear-mongo:
	docker stop consulta-processual_mongo_1
	docker rm -f consulta-processual_mongo_1
	docker volume rm consulta-processual_mongo-config consulta-processual_mongo-data
