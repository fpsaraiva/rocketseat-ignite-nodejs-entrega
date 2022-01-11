# rocketseat-ignite-nodejs-entregas

Projeto de um backend de entregas (delivery), realizado na trilha Node do Ignite.

### Tecnologias utilizadas

* Node
* Typescript
* Express
* Prisma
* Bcrypt
* JWT

### Endpoints

POST /client - criação de novo cliente  
POST /client/authenticate - autentica cliente
GET /client/deliveries - lista entregas do cliente

POST /deliveryman - criação de novo entregador  
POST /deliveryman/authenticate - autentica entregador 
GET /deliveryman/deliveries - lista entregas do entregador 

POST /delivery - criação de nova entrega  
GET /delivery/available - lista entregas disponíveis  
PUT /delivery/updateDeliveryman/:id - define entregador de uma entrega  
PUT /delivery/updateEndDate/:id - define data realização entrega
