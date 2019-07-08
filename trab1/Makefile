.PHONY: dist

build:
	docker-compose build
	docker-compose run --rm web-app yarn

start:
	docker-compose up -d

stop:
	docker-compose down

bash:
	docker-compose exec web-app sh

logs:
	docker-compose logs -f

dist:
	docker-compose run --rm web-app yarn build

deploy:
	docker-compose run --rm web-app yarn deploy
