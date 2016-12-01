# A bot's life

Another life simulation game

## Resolve dependencies

```bash
npm install
```

## Transpile typescript and watch for changes

```bash
# symlink
bin/tsc -w
# or original script
./node_modules/typescript/bin/tsc -w
```

## Launch http server

```bash
# symlink
bin/http-server
# or original script
./node_modules/http-server/bin/http-server
```

## Launch http server, transpile and watch for changes (both in once)

```bash
bin/serve
```

Navigate to http://localhost:8080