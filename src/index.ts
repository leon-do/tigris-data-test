import { Tigris } from "@tigrisdata/core";
import { User } from "db/models/user";
import { UsersRepository } from "./repository/users";

async function main() {
  // initialize the client
  const tigrisClient = new Tigris();
  const db = tigrisClient.getDatabase();

  // initialize the repository
  const repository = new UsersRepository(db);

  // TODO: perform queries
  console.log("\ncreating event");
  const userCreated = await repository.create({
    id: "1",
    credits: 100,
  });
  console.log(userCreated);

  console.log("\nfinding event");
  const event = await repository.findOne("1");
  console.log(JSON.stringify(event, null, 2));

  console.log("\nupdating event");
  const newUser: User = {
    id: "1",
    credits: Math.floor(Math.random() * 100),
  };
  const eventUpdated = await repository.update("1", newUser);
  console.log(eventUpdated);

  // console.log("\ndeleting event");
  // const eventDeleted = await repository.delete("1");
  // console.log(eventDeleted);
}

main()
  .then(async () => {
    console.log("All done ...");
  })
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  });
