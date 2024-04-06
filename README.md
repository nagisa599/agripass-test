
## 概要

nextjs(appRouter)とdb(mysql)のコンテナの枠組み

<br />

## 使用技術

| Category          | Technology Stack                                     |
| ----------------- | --------------------------------------------------   |
| Frontend          | Nextjs(AppRouter) typescript                                       |
| Database          | mysql                                |
| orm           |       prisma                                          |
| .etc             | docker               |

<br />
## 構成
<img width="1672" alt="スクリーンショット 2024-04-06 20 43 46" src="https://github.com/nagisa599/docker-next-react--prisma-mysql-for-typescript/assets/134048673/0721d7d2-de13-4991-9978-e72bcb1e2fed">

開発によく使うコマンド
おすすめmakefile
```
build-local:
	docker-compose build --no-cache

up-local:
	docker-compose up -d app db

down-local:
	docker-compose down

db-push:
	docker container exec -it web-container bash -c "npx prisma db push --accept-data-loss --force-reset"

db-seed:
	docker container exec -it web-container bash -c "npx prisma db seed"

db-migrate:
	docker container exec -it web-container bash -c "npx prisma migrate dev --name init"

studio:
	docker container exec -it web-container bash -c "npx prisma studio"

gettype:
	npx openapi-typescript openapi/openapi.yaml --output type/generated.d.ts

ss-build:
	docker-compose build --force-rm schemaspy

ss-run:
	docker-compose run --rm schemaspy

next-build:
	docker container exec -it web-container bash -c "npm run build"
   
```

環境構築

```
    docker-compose up -d 
```
