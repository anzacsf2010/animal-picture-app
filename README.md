# Animal Picture Microservice

This app fetches and stores pictures of cats, dogs, or foxes (the given API endpoints didn't work).

## Features
- Fetch and save animal (dog, cat or fox) pictures via API
- Retrieve the latest saved picture from the local database.

## How to Run

For best practices, the database credentials are saved in an .env.local file and it is not tracked as part of this repo. As part of the Camunda interview process, this has been sent along with the repo URL. For everyone else, it is recommended to create a .env.local file in the project root directory containing the necessary variables.

```bash
POSTGRES_USER=postgres
POSTGRES_PASSWORD=<postgres_password>
POSTGRES_DB=animaldb
DATABASE_URL=postgres://postgres:<postgres_password>@db:5432/animaldb
```

```bash
# Clone the repo and navigate to project root
npm install

# Start services
docker-compose up --build

# on Mac systems, use the following to start services:
docker compose up --build

# Open a new terminal and run DB migration:
# Grab the container name:
docker ps

# Then use the container name from the step above for the following command to run the Prisma migration:
docker exec -it <container_name> npx prisma migrate dev --name init
```

## API Usage
- `POST /animals/cat?count=2` — Save 2 cat pictures
- `POST /animals/dog?count=1` — Save 1 dog picture
- `POST /animals/cat?count=2` — Save 3 fox pictures
- `GET /animals/dog/latest` — Fetch latest dog picture

Visit http://localhost:3000/ to view and save pictures.