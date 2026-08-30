.PHONY: dev build preview up down restart logs clean

dev:
	@npm run dev

build:
	@npm run build

preview:
	@npm run preview

# Docker Commands
up:
	@docker compose up -d --build

down:
	@docker compose down

restart:
	@docker compose down
	@docker compose up -d --build

logs:
	@docker compose logs -f $(c)