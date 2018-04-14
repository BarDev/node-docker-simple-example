## Build Docker File and Push to Repository
- docker build -t node-express-simple-example .
- docker tag node-express-simple-example -bardev/node-express-simple-example
- docker push bardev/node-express-simple-example 

## Run docker file set --restart and start different process
- docker pull bardev/node-express-simple-example
- docker run -it -p 3000:3000 --restart unless-stopped bardev/node-express-simple-example node ./checkout-app.js
- docker run -it -p 3000:3000 --restart unless-stopped bardev/node-express-simple-example node ./user-app.js

## ssh into ec2 instance
- ssh -i "/mnt/c/Users/mbarlow/Documents/BarDev-AWS2018-key.pem"   ec2-user@ec2-34-228-32-246.compute-1.amazonaws.com

## How Start Containers Automatically
- https://docs.docker.com/config/containers/start-containers-automatically/

## Articles on AWS Load Balancers
- Using AWS Application Load Balancer and Network Load Balancer with EC2 Container Service - TLS  
https://medium.com/containers-on-aws/using-aws-application-load-balancer-and-network-load-balancer-with-ec2-container-service-d0cb0b1d5ae5

- It’s time to ditch that old load balancer!  
http://blog.itoc.com.au/its-time-to-ditch-that-old-load-balancer

- Application Load Balancer vs Classic Load Balancer - Terms  
https://www.engineyard.com/blog/application-load-balancer-vs-classic-load-balancer?hs_amp=true
		
- Running Docker on AWS EC2  
https://hackernoon.com/running-docker-on-aws-ec2-83a14b780c56
