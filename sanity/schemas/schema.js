import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
import bestSeller from "./bestSeller";

import product3 from "./product3";
// import plants from "./plants";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([bestSeller, product3]),
});
