/* eslint-disable*/
import { dt_orderMetadata } from "./entities/dt_Order";
import { RetrieveMetadataChangesMetadata } from "./functions/RetrieveMetadataChanges";

export const Entities = {
  dt_Order: "dt_order",
};

// Setup Metadata
// Usage: setMetadataCache(metadataCache);
export const metadataCache = {
  entities: {
    dt_order: dt_orderMetadata,
  },
  actions: {
    RetrieveMetadataChanges: RetrieveMetadataChangesMetadata,
  }
};