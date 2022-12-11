# TREASURE CHEST #

Connect to your favourite veChain Thor node and send VET ! 🪙🪙🪙

## Running instructions ##

Run ```docker-compose up``` to sweetly get the entire module up and running. 

### What happens BTS ###

1. Docker runs the blockchain node (image pulled from vechain/thor)
2. Docker runs the backend that _connects_ to the deployed blockchain node **or** the test blockchain node 
3. Docker runs the front end aka the web app where you, the user, can interact with the app.

## Cool caveats ##

+ While running the backend, you may also pass the IP/URL of the preferred blockchain node as a command line argument to connect to inform the backend to connect to that node specifically
  Eg: ```node src/index.js <some_url_or_ip_with_port>```
+ Optionally, you may also use the tags _test_ or _self_ to indicate that you want the backend to connect to a public test node or to the node deployed by this app
  Eg: ```node src/index.js test```

## Notes ##

You are expected to connect to the sender wallet using a **private key**. Please make sure you have that handy!

# DEMO #

 http://34.125.171.95:3000/ "Click here"



