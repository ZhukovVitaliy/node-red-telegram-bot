FROM nodered/node-red:latest

EXPOSE 1880

CMD ["npm", "start", "--", "--userDir", "/data"]
