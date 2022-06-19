import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
import bestSeller from "./bestSeller";
import plants from "./plants";
export default createSchema({
  name: "default",
  types: schemaTypes.concat([bestSeller, plants]),
});
