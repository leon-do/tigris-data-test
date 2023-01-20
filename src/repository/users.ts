import { User } from "../db/models/user";
import { Collection, DB } from "@tigrisdata/core";

export class UsersRepository {
  private readonly users: Collection<User>;

  constructor(db: DB) {
    this.users = db.getCollection<User>(User);
  }

  // Create a user record
  public create = async (user: User): Promise<boolean> => {
    try {
      await this.users.insertOne(user);
    } catch (error) {
      return false;
    }
  };

  // Read a user by ID
  public findOne = async (_id: string): Promise<User> => {
    const user = await this.users.findOne({
      filter: { id: _id },
    });
    return user;
  };

  // Update a user record
  public update = async (_id: string, _user: User): Promise<boolean> => {
    try {
      await this.users.updateOne({
        filter: {
          id: _id,
        },
        fields: {
          credits: _user.credits,
        },
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  // Delete a user record
  public delete = async (_id: string): Promise<boolean> => {
    try {
      await this.users.deleteOne({
        filter: { id: _id },
      });
    } catch {
      return false;
    }
  };
}
