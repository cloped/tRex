.PHONY: dist

build:
	docker-compose build
	docker-compose run --rm web-app yarn

start:
	docker-compose up

stop:
	docker-compose down

logs:
	docker-compose logs -f

dist:
	docker-compose run --rm web-app yarn build

deploy:
	docker-compose run --rm web-app yarn deploy
