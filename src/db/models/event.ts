import { Field, PrimaryKey, TigrisCollection, TigrisDataTypes } from "@tigrisdata/core";

@TigrisCollection("event")
export class Event {
  @PrimaryKey(TigrisDataTypes.STRING, { order: 1 })
  user: string;

  @Field(TigrisDataTypes.STRING)
  contractAddress: string;

  @Field(TigrisDataTypes.STRING)
  abi: string;

  @Field(TigrisDataTypes.STRING)
  eventName: string;

  @Field({ elements: TigrisDataTypes.STRING })
  topicType: string[];

  @Field({ elements: TigrisDataTypes.STRING })
  topicValue: string[];
}
