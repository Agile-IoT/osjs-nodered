# osjs-nodered

A node-red app for OS.js

Install
---

```

cd <OS.js source>

mkdir src/packages/muka -p
cd src/packages/default
git clone https://github.com/muka/osjs-nodered NodeRed
cd ../../../

# Add grunt if not installed already
# sudo apt-get install grunt-cli

grunt manifest config packages:default/NodeRed
grunt
./bin/start-dev.sh &

#start nodered!
node-red &

```

Usage
---

Open OS.js and navigate under `Development` category of the menu, you can start node-red app from there

License
---

MIT
