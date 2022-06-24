FROM denoland/deno:latest
COPY server/. /app/server
COPY .env /app
CMD ["deno", "run", "--allow-read", "--allow-net", "--allow-env", "/app/server/main.ts"]
# CMD ["tail", "-f", "/dev/null"]