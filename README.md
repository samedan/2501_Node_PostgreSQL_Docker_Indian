# 2501_Node_PostgreSQL_Docker_Indian

### Source

> https://www.youtube.com/watch?v=TYB-Lz8YGFk&t=1317s&ab_channel=DipeshMalvia

## Run Docker PostgreSQL

> docker run --name postgres-db -e POSTGRES_PASSWORD= -p 5432 -d postgres

## Docker Containers

> docker ps

## Docker Port

> docker inspect b6af1f0d2031

## Terminal Connect to Postgres

> docker exec -it postgres-db psql -U postgres

## Connect PgAdmin4

> https://github.com/marcelo-ochoa/pgadmin4-docker-extension

### Create TAble Users

> /src/data/createUserTable.js -> CREATE TABLE IF NOT EXISTS

### Validate Data

> /src/middlewares/inputValidator.js -> export default validateUser;

> /src/routes/userRoutes -> add validateUser middleware
