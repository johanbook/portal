# portal

![deploy](https://img.shields.io/github/actions/workflow/status/johanbook/portal/deploy.yaml)
![last commit](https://img.shields.io/github/last-commit/johanbook/portal)

**portal** is an experimental portal I am working on, hosted at
[johanbook.com/portal](https://johanbook.com/portal). 

## Found an error?

If something is incorrect or could be improved, open an issue in
[here](https://github.com/johanbook/portal/issues).

## Running locally

The documentation site can be run locally. It requires a Nodejs runtime and the
NPM package manager. The dependencies are installed by running

```sh
npm install -d
```

To start a development server run

```sh
npm run dev
```

## Deployment

The docs are hosted on Github pages and are built as part of a CD pipeline. The
compilation is done using Node v16 (LTS).
