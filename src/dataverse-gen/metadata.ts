/* eslint-disable*/
import { dt_orderMetadata } from "./entities/dt_Order";
import { dt_orderlineMetadata } from "./entities/dt_OrderLine";
import { RetrieveMetadataChangesMetadata } from "./functions/RetrieveMetadataChanges";

export const Entities = {
  dt_Order: "dt_order",
  dt_OrderLine: "dt_orderline",
};

// Setup Metadata
// Usage: setMetadataCache(metadataCache);
export const metadataCache = {
  entities: {
    dt_order: dt_orderMetadata,
    dt_orderline: dt_orderlineMetadata,
  },
  actions: {
    RetrieveMetadataChanges: RetrieveMetadataChangesMetadata,
  }
};