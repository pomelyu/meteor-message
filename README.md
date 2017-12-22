# meteor-message
Use meteor to write simple message application

## Folder structure
```bash
.meteor/
  packages              # 用到的 Meteor package，
  platforms             # 支援的平台，這邊只有 client, server
  release               # Meteor 的版本
client/                 # [automatically loaded in client side]
  main.js               # (client) client 端的起點，從這裡由 import/ 載入需要的檔案

server/                 # [automatically loaded in server side]
  main.js               # (server) server 端的起點，從這裡由 import/ 載入需要的檔

imports/                # [mutually loaded by client or server]
  api/                  # (both) database collections and api
  startup/
    client/             # (client) client startup configuration
    server/             # (server) server startup configuration
  ui/                   # (client) Front-end (React or etc)

private/                # (server) Asset only for server

public/                 # Public asset, such as favicon.ico

package.json
...                     # [automatically loaded by both server and client side]
```
