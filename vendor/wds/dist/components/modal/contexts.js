'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
const require_hooks_internal_use_loose_context = require("../../hooks/internal/use-loose-context.js");
const require_components_modal_constants = require("./constants.js");
let _radix_ui_react_context = require("@radix-ui/react-context");
//#region src/components/modal/contexts.ts
const [ModalProvider, useModalContext] = (0, _radix_ui_react_context.createContext)(require_components_modal_constants.MODAL_NAME);
const [ModalDimmerProvider, useModalDimmerContext] = (0, _radix_ui_react_context.createContext)(require_components_modal_constants.MODAL_CONTAINER_NAME);
const [ModalNavigationProvider, useModalNavigationContext] = (0, _radix_ui_react_context.createContext)(require_components_modal_constants.MODAL_CONTAINER_NAME);
const [ModalActionAreaProvider, useModalActionAreaContext] = require_hooks_internal_use_loose_context.default(require_components_modal_constants.MODAL_CONTAINER_NAME);
//#endregion
exports.ModalActionAreaProvider = ModalActionAreaProvider;
exports.ModalDimmerProvider = ModalDimmerProvider;
exports.ModalNavigationProvider = ModalNavigationProvider;
exports.ModalProvider = ModalProvider;
exports.useModalActionAreaContext = useModalActionAreaContext;
exports.useModalContext = useModalContext;
exports.useModalDimmerContext = useModalDimmerContext;
exports.useModalNavigationContext = useModalNavigationContext;
