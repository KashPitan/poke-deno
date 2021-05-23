FROM hayd/alpine-deno:latest

WORKDIR /app

USER deno

ADD . .

RUN deno cache server.ts

EXPOSE 3000

ENTRYPOINT ["/home/deno/.deno/bin/denon"]
CMD ["run", "--allow-net", "--allow-read", "server.ts"]


