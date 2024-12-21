.PHONY: setup dev lint build clean

setup:
	npm install

dev:
	npm run dev

lint:
	npm run format
	npm run validate

build:
	npm run build

clean:
	rm -rf node_modules
	rm -rf .nuxt
	rm -rf dist
	rm -rf .cache