import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
import bestSeller from "./bestSeller";
import plant1 from "./plant1";
import product3 from "./product3";
// import plants from "./plants";
import plant2 from "./plant2";
export default createSchema({
  name: "default",
  types: schemaTypes.concat([bestSeller, plant1, plant2, product3]),
});
