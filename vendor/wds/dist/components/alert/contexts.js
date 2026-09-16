'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_components_alert_constants = require("./constants.js");
let _radix_ui_react_context = require("@radix-ui/react-context");
//#region src/components/alert/contexts.ts
const [AlertProvider, useAlertContext] = (0, _radix_ui_react_context.createContext)(require_components_alert_constants.ALERT_NAME);
const [AlertContainerProvider, useAlertContainerContext] = (0, _radix_ui_react_context.createContext)(require_components_alert_constants.ALERT_CONTAINER_NAME);
//#endregion
exports.AlertContainerProvider = AlertContainerProvider;
exports.AlertProvider = AlertProvider;
exports.useAlertContainerContext = useAlertContainerContext;
exports.useAlertContext = useAlertContext;
