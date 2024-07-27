FROM nodered/node-red:latest

# COPY ./settings.js /data/settings.js
# COPY ./nodes /data/nodes

WORKDIR /data

CMD ["npm", "start"]
