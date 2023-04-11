// HTTPサーバーを作成するための機能を提供
import http from "node:http";

// ファイルシステムにアクセスするための機能
import fs from "fs/promises";

// ファイルパスを扱うための機能を提供
import path from "path";

// URLのパース（URLの要素を分解して取り出す）に必要なモジュールをインポート
import { URL } from "url";

// サーバーを生成
const server = http.createServer();

server.on("request", async (req, res) => {
  console.log("request url: ", req.url);
  // Content-Type is important for browsers.
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
  res.writeHead(200, { "content-type": "text/plain" });
  res.write("hello!\n");
  res.end();
});

server.on("listening", () => {
  console.log("start listening!");
});

// Start listening 12345 port of localhost (127.0.0.1).
server.listen(12345, () => {
  console.log("listening on http://localhost:12345/public/");
});
console.log("run server.js");
