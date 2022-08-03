/* eslint-disable*/
import { activitypointerMetadata } from "./entities/ActivityPointer";
import { dt_designMetadata } from "./entities/dt_Design";
import { dt_dometagconfigMetadata } from "./entities/dt_DomeTagConfig";
import { dt_dometaglogMetadata } from "./entities/dt_DomeTagLog";
import { dt_employeeMetadata } from "./entities/dt_Employee";
import { dt_orderMetadata } from "./entities/dt_Order";
import { dt_orderlineMetadata } from "./entities/dt_OrderLine";
import { dt_qbaccountMetadata } from "./entities/dt_QbAccount";
import { phonecallMetadata } from "./entities/PhoneCall";
import { RetrieveMetadataChangesMetadata } from "./functions/RetrieveMetadataChanges";

export const Entities = {
  ActivityPointer: "activitypointer",
  dt_Design: "dt_design",
  dt_DomeTagConfig: "dt_dometagconfig",
  dt_DomeTagLog: "dt_dometaglog",
  dt_Employee: "dt_employee",
  dt_Order: "dt_order",
  dt_OrderLine: "dt_orderline",
  dt_QbAccount: "dt_qbaccount",
  PhoneCall: "phonecall",
};

// Setup Metadata
// Usage: setMetadataCache(metadataCache);
export const metadataCache = {
  entities: {
    activitypointer: activitypointerMetadata,
    dt_design: dt_designMetadata,
    dt_dometagconfig: dt_dometagconfigMetadata,
    dt_dometaglog: dt_dometaglogMetadata,
    dt_employee: dt_employeeMetadata,
    dt_order: dt_orderMetadata,
    dt_orderline: dt_orderlineMetadata,
    dt_qbaccount: dt_qbaccountMetadata,
    phonecall: phonecallMetadata,
  },
  actions: {
    RetrieveMetadataChanges: RetrieveMetadataChangesMetadata,
  }
};