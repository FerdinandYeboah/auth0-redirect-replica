This repo is an mvp replica to demonstrate issue when using react auth context with other oauth services that issue a redirect and a query code parameter of their own.

### Pre-reqs
set `REACT_APP_AUTH0_DOMAIN` and `REACT_APP_AUTH0_CLIENT_ID` environment variables with your own corresponding values.

### Build
`yarn start` to run frontend.
`node server.js` to start backend.

### Test
Go to `http://localhost:3001/redirect`. Will be redirected to `http://localhost:3000` with a code parameter and auth context will fail.