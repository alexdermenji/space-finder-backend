import { SpaceStack } from "./SpaceStacks";
import { App } from "aws-cdk-lib";

const app = new App();
new SpaceStack(app, "Space-finder", {
  stackName: "Space-finder",
});
