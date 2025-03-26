/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@headlessui/react/dist/components/description/description.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/description/description.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Description: () => (/* binding */ G),
/* harmony export */   useDescriptions: () => (/* binding */ w)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
let d=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function f(){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(d);if(r===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,f),t}return r}function w(){let[r,t]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);return[r.length>0?r.join(" "):void 0,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(e){let i=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(s=>(t(o=>[...o,s]),()=>t(o=>{let p=o.slice(),c=p.indexOf(s);return c!==-1&&p.splice(c,1),p}))),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:i,slot:e.slot,name:e.name,props:e.props}),[i,e.slot,e.name,e.props]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(d.Provider,{value:n},e.children)},[t])]}let I="p";function S(r,t){let a=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_2__.useId)(),{id:e=`headlessui-description-${a}`,...i}=r,n=f(),s=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__.useSyncRefs)(t);(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_4__.useIsoMorphicEffect)(()=>n.register(e),[e,n.register]);let o={ref:s,...n.props,id:e};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.render)({ourProps:o,theirProps:i,slot:n.slot||{},defaultTag:I,name:n.name||"Description"})}let h=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_5__.forwardRefWithAs)(S),G=Object.assign(h,{});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/dialog/dialog.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/dialog/dialog.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dialog: () => (/* binding */ _t)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _components_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/focus-trap/focus-trap.js */ "./node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js");
/* harmony import */ var _components_portal_portal_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/portal/portal.js */ "./node_modules/@headlessui/react/dist/components/portal/portal.js");
/* harmony import */ var _hooks_document_overflow_use_document_overflow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/document-overflow/use-document-overflow.js */ "./node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/use-event-listener.js */ "./node_modules/@headlessui/react/dist/hooks/use-event-listener.js");
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-id.js */ "./node_modules/@headlessui/react/dist/hooks/use-id.js");
/* harmony import */ var _hooks_use_inert_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/use-inert.js */ "./node_modules/@headlessui/react/dist/hooks/use-inert.js");
/* harmony import */ var _hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hooks/use-outside-click.js */ "./node_modules/@headlessui/react/dist/hooks/use-outside-click.js");
/* harmony import */ var _hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-owner.js */ "./node_modules/@headlessui/react/dist/hooks/use-owner.js");
/* harmony import */ var _hooks_use_root_containers_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks/use-root-containers.js */ "./node_modules/@headlessui/react/dist/hooks/use-root-containers.js");
/* harmony import */ var _hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../internal/open-closed.js */ "./node_modules/@headlessui/react/dist/internal/open-closed.js");
/* harmony import */ var _internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../internal/portal-force-root.js */ "./node_modules/@headlessui/react/dist/internal/portal-force-root.js");
/* harmony import */ var _internal_stack_context_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../internal/stack-context.js */ "./node_modules/@headlessui/react/dist/internal/stack-context.js");
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../utils/bugs.js */ "./node_modules/@headlessui/react/dist/utils/bugs.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
/* harmony import */ var _description_description_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../description/description.js */ "./node_modules/@headlessui/react/dist/components/description/description.js");
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../keyboard.js */ "./node_modules/@headlessui/react/dist/components/keyboard.js");
var Me=(r=>(r[r.Open=0]="Open",r[r.Closed=1]="Closed",r))(Me||{}),we=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(we||{});let He={[0](o,e){return o.titleId===e.id?o:{...o,titleId:e.id}}},I=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);I.displayName="DialogContext";function b(o){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(I);if(e===null){let r=new Error(`<${o} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,b),r}return e}function Be(o,e,r=()=>[document.body]){(0,_hooks_document_overflow_use_document_overflow_js__WEBPACK_IMPORTED_MODULE_1__.useDocumentOverflowLockedEffect)(o,e,i=>{var n;return{containers:[...(n=i.containers)!=null?n:[],r]}})}function Ge(o,e){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(e.type,He,o,e)}let Ne="div",Ue=_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.Features.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.Features.Static;function We(o,e){let r=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)(),{id:i=`headlessui-dialog-${r}`,open:n,onClose:l,initialFocus:s,role:a="dialog",__demoMode:T=!1,...m}=o,[M,f]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),U=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);a=function(){return a==="dialog"||a==="alertdialog"?a:(U.current||(U.current=!0,console.warn(`Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")}();let E=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_5__.useOpenClosed)();n===void 0&&E!==null&&(n=(E&_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_5__.State.Open)===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_5__.State.Open);let D=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),ee=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(D,e),g=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_7__.useOwnerDocument)(D),W=o.hasOwnProperty("open")||E!==null,$=o.hasOwnProperty("onClose");if(!W&&!$)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!W)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!$)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof n!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n}`);if(typeof l!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`);let p=n?0:1,[h,te]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Ge,{titleId:null,descriptionId:null,panelRef:(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)()}),P=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_8__.useEvent)(()=>l(!1)),Y=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_8__.useEvent)(t=>te({type:0,id:t})),S=(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_9__.useServerHandoffComplete)()?T?!1:p===0:!1,x=M>1,j=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(I)!==null,[oe,re]=(0,_components_portal_portal_js__WEBPACK_IMPORTED_MODULE_10__.useNestedPortals)(),ne={get current(){var t;return(t=h.panelRef.current)!=null?t:D.current}},{resolveContainers:w,mainTreeNodeRef:L,MainTreeNode:le}=(0,_hooks_use_root_containers_js__WEBPACK_IMPORTED_MODULE_11__.useRootContainers)({portals:oe,defaultContainers:[ne]}),ae=x?"parent":"leaf",J=E!==null?(E&_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_5__.State.Closing)===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_5__.State.Closing:!1,ie=(()=>j||J?!1:S)(),se=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{var t,c;return(c=Array.from((t=g==null?void 0:g.querySelectorAll("body > *"))!=null?t:[]).find(d=>d.id==="headlessui-portal-root"?!1:d.contains(L.current)&&d instanceof HTMLElement))!=null?c:null},[L]);(0,_hooks_use_inert_js__WEBPACK_IMPORTED_MODULE_12__.useInert)(se,ie);let pe=(()=>x?!0:S)(),de=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{var t,c;return(c=Array.from((t=g==null?void 0:g.querySelectorAll("[data-headlessui-portal]"))!=null?t:[]).find(d=>d.contains(L.current)&&d instanceof HTMLElement))!=null?c:null},[L]);(0,_hooks_use_inert_js__WEBPACK_IMPORTED_MODULE_12__.useInert)(de,pe);let ue=(()=>!(!S||x))();(0,_hooks_use_outside_click_js__WEBPACK_IMPORTED_MODULE_13__.useOutsideClick)(w,t=>{t.preventDefault(),P()},ue);let fe=(()=>!(x||p!==0))();(0,_hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_14__.useEventListener)(g==null?void 0:g.defaultView,"keydown",t=>{fe&&(t.defaultPrevented||t.key===_keyboard_js__WEBPACK_IMPORTED_MODULE_15__.Keys.Escape&&(t.preventDefault(),t.stopPropagation(),P()))});let ge=(()=>!(J||p!==0||j))();Be(g,ge,w),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(p!==0||!D.current)return;let t=new ResizeObserver(c=>{for(let d of c){let F=d.target.getBoundingClientRect();F.x===0&&F.y===0&&F.width===0&&F.height===0&&P()}});return t.observe(D.current),()=>t.disconnect()},[p,D,P]);let[Te,ce]=(0,_description_description_js__WEBPACK_IMPORTED_MODULE_16__.useDescriptions)(),De=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>[{dialogState:p,close:P,setTitleId:Y},h],[p,h,P,Y]),X=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:p===0}),[p]),me={ref:ee,id:i,role:a,"aria-modal":p===0?!0:void 0,"aria-labelledby":h.titleId,"aria-describedby":Te};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_stack_context_js__WEBPACK_IMPORTED_MODULE_17__.StackProvider,{type:"Dialog",enabled:p===0,element:D,onUpdate:(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_8__.useEvent)((t,c)=>{c==="Dialog"&&(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(t,{[_internal_stack_context_js__WEBPACK_IMPORTED_MODULE_17__.StackMessage.Add]:()=>f(d=>d+1),[_internal_stack_context_js__WEBPACK_IMPORTED_MODULE_17__.StackMessage.Remove]:()=>f(d=>d-1)})})},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_18__.ForcePortalRoot,{force:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_portal_portal_js__WEBPACK_IMPORTED_MODULE_10__.Portal,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(I.Provider,{value:De},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_portal_portal_js__WEBPACK_IMPORTED_MODULE_10__.Portal.Group,{target:D},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_18__.ForcePortalRoot,{force:!1},react__WEBPACK_IMPORTED_MODULE_0__.createElement(ce,{slot:X,name:"Dialog.Description"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_19__.FocusTrap,{initialFocus:s,containers:w,features:S?(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_2__.match)(ae,{parent:_components_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_19__.FocusTrap.features.RestoreFocus,leaf:_components_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_19__.FocusTrap.features.All&~_components_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_19__.FocusTrap.features.FocusLock}):_components_focus_trap_focus_trap_js__WEBPACK_IMPORTED_MODULE_19__.FocusTrap.features.None},react__WEBPACK_IMPORTED_MODULE_0__.createElement(re,null,(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)({ourProps:me,theirProps:m,slot:X,defaultTag:Ne,features:Ue,visible:p===0,name:"Dialog"}))))))))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(le,null))}let $e="div";function Ye(o,e){let r=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)(),{id:i=`headlessui-dialog-overlay-${r}`,...n}=o,[{dialogState:l,close:s}]=b("Dialog.Overlay"),a=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(e),T=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_8__.useEvent)(f=>{if(f.target===f.currentTarget){if((0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_20__.isDisabledReactIssue7711)(f.currentTarget))return f.preventDefault();f.preventDefault(),f.stopPropagation(),s()}}),m=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:l===0}),[l]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)({ourProps:{ref:a,id:i,"aria-hidden":!0,onClick:T},theirProps:n,slot:m,defaultTag:$e,name:"Dialog.Overlay"})}let je="div";function Je(o,e){let r=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)(),{id:i=`headlessui-dialog-backdrop-${r}`,...n}=o,[{dialogState:l},s]=b("Dialog.Backdrop"),a=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(e);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(s.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[s.panelRef]);let T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:l===0}),[l]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_18__.ForcePortalRoot,{force:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_portal_portal_js__WEBPACK_IMPORTED_MODULE_10__.Portal,null,(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)({ourProps:{ref:a,id:i,"aria-hidden":!0},theirProps:n,slot:T,defaultTag:je,name:"Dialog.Backdrop"})))}let Xe="div";function Ke(o,e){let r=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)(),{id:i=`headlessui-dialog-panel-${r}`,...n}=o,[{dialogState:l},s]=b("Dialog.Panel"),a=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(e,s.panelRef),T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:l===0}),[l]),m=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_8__.useEvent)(f=>{f.stopPropagation()});return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)({ourProps:{ref:a,id:i,onClick:m},theirProps:n,slot:T,defaultTag:Xe,name:"Dialog.Panel"})}let Ve="h2";function qe(o,e){let r=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_4__.useId)(),{id:i=`headlessui-dialog-title-${r}`,...n}=o,[{dialogState:l,setTitleId:s}]=b("Dialog.Title"),a=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_6__.useSyncRefs)(e);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(s(i),()=>s(null)),[i,s]);let T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:l===0}),[l]);return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.render)({ourProps:{ref:a,id:i},theirProps:n,slot:T,defaultTag:Ve,name:"Dialog.Title"})}let ze=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.forwardRefWithAs)(We),Qe=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.forwardRefWithAs)(Je),Ze=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.forwardRefWithAs)(Ke),et=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.forwardRefWithAs)(Ye),tt=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_3__.forwardRefWithAs)(qe),_t=Object.assign(ze,{Backdrop:Qe,Panel:Ze,Overlay:et,Title:tt,Description:_description_description_js__WEBPACK_IMPORTED_MODULE_16__.Description});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FocusTrap: () => (/* binding */ de)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-disposables.js */ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hooks/use-event-listener.js */ "./node_modules/@headlessui/react/dist/hooks/use-event-listener.js");
/* harmony import */ var _hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../hooks/use-is-mounted.js */ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js");
/* harmony import */ var _hooks_use_on_unmount_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../hooks/use-on-unmount.js */ "./node_modules/@headlessui/react/dist/hooks/use-on-unmount.js");
/* harmony import */ var _hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-owner.js */ "./node_modules/@headlessui/react/dist/hooks/use-owner.js");
/* harmony import */ var _hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/use-tab-direction.js */ "./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js");
/* harmony import */ var _hooks_use_watch_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../hooks/use-watch.js */ "./node_modules/@headlessui/react/dist/hooks/use-watch.js");
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../internal/hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
/* harmony import */ var _utils_active_element_history_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/active-element-history.js */ "./node_modules/@headlessui/react/dist/utils/active-element-history.js");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _utils_micro_task_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/micro-task.js */ "./node_modules/@headlessui/react/dist/utils/micro-task.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
function P(t){if(!t)return new Set;if(typeof t=="function")return new Set(t());let n=new Set;for(let e of t.current)e.current instanceof HTMLElement&&n.add(e.current);return n}let X="div";var _=(r=>(r[r.None=1]="None",r[r.InitialFocus=2]="InitialFocus",r[r.TabLock=4]="TabLock",r[r.FocusLock=8]="FocusLock",r[r.RestoreFocus=16]="RestoreFocus",r[r.All=30]="All",r))(_||{});function z(t,n){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),o=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_1__.useSyncRefs)(e,n),{initialFocus:l,containers:c,features:r=30,...s}=t;(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_2__.useServerHandoffComplete)()||(r=1);let i=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_3__.useOwnerDocument)(e);Y({ownerDocument:i},Boolean(r&16));let u=Z({ownerDocument:i,container:e,initialFocus:l},Boolean(r&2));$({ownerDocument:i,container:e,containers:c,previousActiveElement:u},Boolean(r&8));let y=(0,_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_4__.useTabDirection)(),R=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(a=>{let m=e.current;if(!m)return;(B=>B())(()=>{(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(y.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_4__.Direction.Forwards]:()=>{(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(m,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.First,{skipElements:[a.relatedTarget]})},[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_4__.Direction.Backwards]:()=>{(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(m,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.Last,{skipElements:[a.relatedTarget]})}})})}),h=(0,_hooks_use_disposables_js__WEBPACK_IMPORTED_MODULE_8__.useDisposables)(),H=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),j={ref:o,onKeyDown(a){a.key=="Tab"&&(H.current=!0,h.requestAnimationFrame(()=>{H.current=!1}))},onBlur(a){let m=P(c);e.current instanceof HTMLElement&&m.add(e.current);let T=a.relatedTarget;T instanceof HTMLElement&&T.dataset.headlessuiFocusGuard!=="true"&&(S(m,T)||(H.current?(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(e.current,(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_6__.match)(y.current,{[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_4__.Direction.Forwards]:()=>_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.Next,[_hooks_use_tab_direction_js__WEBPACK_IMPORTED_MODULE_4__.Direction.Backwards]:()=>_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.Previous})|_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.WrapAround,{relativeTo:a.target}):a.target instanceof HTMLElement&&(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusElement)(a.target)))}};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,Boolean(r&4)&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_9__.Hidden,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:R,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_9__.Features.Focusable}),(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_10__.render)({ourProps:j,theirProps:s,defaultTag:X,name:"FocusTrap"}),Boolean(r&4)&&react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_9__.Hidden,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:R,features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_9__.Features.Focusable}))}let D=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_10__.forwardRefWithAs)(z),de=Object.assign(D,{features:_});function Q(t=!0){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(_utils_active_element_history_js__WEBPACK_IMPORTED_MODULE_11__.history.slice());return (0,_hooks_use_watch_js__WEBPACK_IMPORTED_MODULE_12__.useWatch)(([e],[o])=>{o===!0&&e===!1&&(0,_utils_micro_task_js__WEBPACK_IMPORTED_MODULE_13__.microTask)(()=>{n.current.splice(0)}),o===!1&&e===!0&&(n.current=_utils_active_element_history_js__WEBPACK_IMPORTED_MODULE_11__.history.slice())},[t,_utils_active_element_history_js__WEBPACK_IMPORTED_MODULE_11__.history,n]),(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_5__.useEvent)(()=>{var e;return(e=n.current.find(o=>o!=null&&o.isConnected))!=null?e:null})}function Y({ownerDocument:t},n){let e=Q(n);(0,_hooks_use_watch_js__WEBPACK_IMPORTED_MODULE_12__.useWatch)(()=>{n||(t==null?void 0:t.activeElement)===(t==null?void 0:t.body)&&(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusElement)(e())},[n]),(0,_hooks_use_on_unmount_js__WEBPACK_IMPORTED_MODULE_14__.useOnUnmount)(()=>{n&&(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusElement)(e())})}function Z({ownerDocument:t,container:n,initialFocus:e},o){let l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),c=(0,_hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_15__.useIsMounted)();return (0,_hooks_use_watch_js__WEBPACK_IMPORTED_MODULE_12__.useWatch)(()=>{if(!o)return;let r=n.current;r&&(0,_utils_micro_task_js__WEBPACK_IMPORTED_MODULE_13__.microTask)(()=>{if(!c.current)return;let s=t==null?void 0:t.activeElement;if(e!=null&&e.current){if((e==null?void 0:e.current)===s){l.current=s;return}}else if(r.contains(s)){l.current=s;return}e!=null&&e.current?(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusElement)(e.current):(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusIn)(r,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.Focus.First)===_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.FocusResult.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),l.current=t==null?void 0:t.activeElement})},[o]),l}function $({ownerDocument:t,container:n,containers:e,previousActiveElement:o},l){let c=(0,_hooks_use_is_mounted_js__WEBPACK_IMPORTED_MODULE_15__.useIsMounted)();(0,_hooks_use_event_listener_js__WEBPACK_IMPORTED_MODULE_16__.useEventListener)(t==null?void 0:t.defaultView,"focus",r=>{if(!l||!c.current)return;let s=P(e);n.current instanceof HTMLElement&&s.add(n.current);let i=o.current;if(!i)return;let u=r.target;u&&u instanceof HTMLElement?S(s,u)?(o.current=u,(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusElement)(u)):(r.preventDefault(),r.stopPropagation(),(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusElement)(i)):(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_7__.focusElement)(o.current)},!0)}function S(t,n){for(let e of t)if(e.contains(n))return!0;return!1}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/keyboard.js":
/*!********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/keyboard.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Keys: () => (/* binding */ o)
/* harmony export */ });
var o=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(o||{});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/components/portal/portal.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/components/portal/portal.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Portal: () => (/* binding */ te),
/* harmony export */   useNestedPortals: () => (/* binding */ ee)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _hooks_use_on_unmount_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-on-unmount.js */ "./node_modules/@headlessui/react/dist/hooks/use-on-unmount.js");
/* harmony import */ var _hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/use-owner.js */ "./node_modules/@headlessui/react/dist/hooks/use-owner.js");
/* harmony import */ var _hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/use-sync-refs.js */ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js");
/* harmony import */ var _internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../internal/portal-force-root.js */ "./node_modules/@headlessui/react/dist/internal/portal-force-root.js");
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
function F(p){let n=(0,_internal_portal_force_root_js__WEBPACK_IMPORTED_MODULE_2__.usePortalRoot)(),l=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_),e=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_3__.useOwnerDocument)(p),[a,o]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{if(!n&&l!==null||_utils_env_js__WEBPACK_IMPORTED_MODULE_4__.env.isServer)return null;let t=e==null?void 0:e.getElementById("headlessui-portal-root");if(t)return t;if(e===null)return null;let r=e.createElement("div");return r.setAttribute("id","headlessui-portal-root"),e.body.appendChild(r)});return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{a!==null&&(e!=null&&e.body.contains(a)||e==null||e.body.appendChild(a))},[a,e]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n||l!==null&&o(l.current)},[l,o,n]),a}let U=react__WEBPACK_IMPORTED_MODULE_0__.Fragment;function N(p,n){let l=p,e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),a=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__.useSyncRefs)((0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__.optionalRef)(u=>{e.current=u}),n),o=(0,_hooks_use_owner_js__WEBPACK_IMPORTED_MODULE_3__.useOwnerDocument)(e),t=F(e),[r]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>{var u;return _utils_env_js__WEBPACK_IMPORTED_MODULE_4__.env.isServer?null:(u=o==null?void 0:o.createElement("div"))!=null?u:null}),i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(f),v=(0,_hooks_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_6__.useServerHandoffComplete)();return (0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_7__.useIsoMorphicEffect)(()=>{!t||!r||t.contains(r)||(r.setAttribute("data-headlessui-portal",""),t.appendChild(r))},[t,r]),(0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_7__.useIsoMorphicEffect)(()=>{if(r&&i)return i.register(r)},[i,r]),(0,_hooks_use_on_unmount_js__WEBPACK_IMPORTED_MODULE_8__.useOnUnmount)(()=>{var u;!t||!r||(r instanceof Node&&t.contains(r)&&t.removeChild(r),t.childNodes.length<=0&&((u=t.parentElement)==null||u.removeChild(t)))}),v?!t||!r?null:(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)((0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.render)({ourProps:{ref:a},theirProps:l,defaultTag:U,name:"Portal"}),r):null}let S=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,_=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function j(p,n){let{target:l,...e}=p,o={ref:(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_5__.useSyncRefs)(n)};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_.Provider,{value:l},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.render)({ourProps:o,theirProps:e,defaultTag:S,name:"Popover.Group"}))}let f=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);function ee(){let p=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(f),n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),l=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__.useEvent)(o=>(n.current.push(o),p&&p.register(o),()=>e(o))),e=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_10__.useEvent)(o=>{let t=n.current.indexOf(o);t!==-1&&n.current.splice(t,1),p&&p.unregister(o)}),a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({register:l,unregister:e,portals:n}),[l,e,n]);return[n,(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function({children:t}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(f.Provider,{value:a},t)},[a])]}let D=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.forwardRefWithAs)(N),I=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_9__.forwardRefWithAs)(j),te=Object.assign(D,{Group:I});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adjustScrollbarPadding: () => (/* binding */ c)
/* harmony export */ });
function c(){let o;return{before({doc:e}){var l;let n=e.documentElement;o=((l=e.defaultView)!=null?l:window).innerWidth-n.clientWidth},after({doc:e,d:n}){let t=e.documentElement,l=t.clientWidth-t.offsetWidth,r=o-l;n.style(t,"paddingRight",`${r}px`)}}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleIOSLocking: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _utils_platform_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/platform.js */ "./node_modules/@headlessui/react/dist/utils/platform.js");
function d(){return (0,_utils_platform_js__WEBPACK_IMPORTED_MODULE_0__.isIOS)()?{before({doc:r,d:l,meta:c}){function o(a){return c.containers.flatMap(n=>n()).some(n=>n.contains(a))}l.microTask(()=>{var s;if(window.getComputedStyle(r.documentElement).scrollBehavior!=="auto"){let t=(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.disposables)();t.style(r.documentElement,"scrollBehavior","auto"),l.add(()=>l.microTask(()=>t.dispose()))}let a=(s=window.scrollY)!=null?s:window.pageYOffset,n=null;l.addEventListener(r,"click",t=>{if(t.target instanceof HTMLElement)try{let e=t.target.closest("a");if(!e)return;let{hash:f}=new URL(e.href),i=r.querySelector(f);i&&!o(i)&&(n=i)}catch{}},!0),l.addEventListener(r,"touchstart",t=>{if(t.target instanceof HTMLElement)if(o(t.target)){let e=t.target;for(;e.parentElement&&o(e.parentElement);)e=e.parentElement;l.style(e,"overscrollBehavior","contain")}else l.style(t.target,"touchAction","none")}),l.addEventListener(r,"touchmove",t=>{if(t.target instanceof HTMLElement)if(o(t.target)){let e=t.target;for(;e.parentElement&&e.dataset.headlessuiPortal!==""&&!(e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth);)e=e.parentElement;e.dataset.headlessuiPortal===""&&t.preventDefault()}else t.preventDefault()},{passive:!1}),l.add(()=>{var e;let t=(e=window.scrollY)!=null?e:window.pageYOffset;a!==t&&window.scrollTo(0,a),n&&n.isConnected&&(n.scrollIntoView({block:"nearest"}),n=null)})})}}:{}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   overflows: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _utils_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/store.js */ "./node_modules/@headlessui/react/dist/utils/store.js");
/* harmony import */ var _adjust_scrollbar_padding_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adjust-scrollbar-padding.js */ "./node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js");
/* harmony import */ var _handle_ios_locking_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handle-ios-locking.js */ "./node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js");
/* harmony import */ var _prevent_scroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prevent-scroll.js */ "./node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js");
function m(e){let n={};for(let t of e)Object.assign(n,t(n));return n}let a=(0,_utils_store_js__WEBPACK_IMPORTED_MODULE_0__.createStore)(()=>new Map,{PUSH(e,n){var o;let t=(o=this.get(e))!=null?o:{doc:e,count:0,d:(0,_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.disposables)(),meta:new Set};return t.count++,t.meta.add(n),this.set(e,t),this},POP(e,n){let t=this.get(e);return t&&(t.count--,t.meta.delete(n)),this},SCROLL_PREVENT({doc:e,d:n,meta:t}){let o={doc:e,d:n,meta:m(t)},c=[(0,_handle_ios_locking_js__WEBPACK_IMPORTED_MODULE_2__.handleIOSLocking)(),(0,_adjust_scrollbar_padding_js__WEBPACK_IMPORTED_MODULE_3__.adjustScrollbarPadding)(),(0,_prevent_scroll_js__WEBPACK_IMPORTED_MODULE_4__.preventScroll)()];c.forEach(({before:r})=>r==null?void 0:r(o)),c.forEach(({after:r})=>r==null?void 0:r(o))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});a.subscribe(()=>{let e=a.getSnapshot(),n=new Map;for(let[t]of e)n.set(t,t.documentElement.style.overflow);for(let t of e.values()){let o=n.get(t.doc)==="hidden",c=t.count!==0;(c&&!o||!c&&o)&&a.dispatch(t.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",t),t.count===0&&a.dispatch("TEARDOWN",t)}});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   preventScroll: () => (/* binding */ l)
/* harmony export */ });
function l(){return{before({doc:e,d:o}){o.style(e.documentElement,"overflow","hidden")}}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDocumentOverflowLockedEffect: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var _hooks_use_store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/use-store.js */ "./node_modules/@headlessui/react/dist/hooks/use-store.js");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _overflow_store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overflow-store.js */ "./node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js");
function p(e,r,n){let f=(0,_hooks_use_store_js__WEBPACK_IMPORTED_MODULE_0__.useStore)(_overflow_store_js__WEBPACK_IMPORTED_MODULE_1__.overflows),o=e?f.get(e):void 0,i=o?o.count>0:!1;return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__.useIsoMorphicEffect)(()=>{if(!(!e||!r))return _overflow_store_js__WEBPACK_IMPORTED_MODULE_1__.overflows.dispatch("PUSH",e,n),()=>_overflow_store_js__WEBPACK_IMPORTED_MODULE_1__.overflows.dispatch("POP",e,n)},[r,e]),i}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-disposables.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-disposables.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDisposables: () => (/* binding */ p)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
function p(){let[e]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_disposables_js__WEBPACK_IMPORTED_MODULE_1__.disposables);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>()=>e.dispose(),[e]),e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-document-event.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-document-event.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDocumentEvent: () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function d(e,r,n){let o=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{function t(u){o.current(u)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-event-listener.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-event-listener.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEventListener: () => (/* binding */ E)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function E(n,e,a,t){let i=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(a);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n=n!=null?n:window;function r(o){i.current(o)}return n.addEventListener(e,r,t),()=>n.removeEventListener(e,r,t)},[n,e,t])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-event.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-event.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEvent: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
let o=function(t){let e=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(t);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...r)=>e.current(...r),[e])};


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-id.js":
/*!*************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-id.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useId: () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
/* harmony import */ var _use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-server-handoff-complete.js */ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js");
var o;let I=(o=react__WEBPACK_IMPORTED_MODULE_0__.useId)!=null?o:function(){let n=(0,_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_1__.useServerHandoffComplete)(),[e,u]=react__WEBPACK_IMPORTED_MODULE_0__.useState(n?()=>_utils_env_js__WEBPACK_IMPORTED_MODULE_2__.env.nextId():null);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_3__.useIsoMorphicEffect)(()=>{e===null&&u(_utils_env_js__WEBPACK_IMPORTED_MODULE_2__.env.nextId())},[e]),e!=null?""+e:void 0};


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-inert.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-inert.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInert: () => (/* binding */ b)
/* harmony export */ });
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
let u=new Map,t=new Map;function b(r,l=!0){(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_0__.useIsoMorphicEffect)(()=>{var o;if(!l)return;let e=typeof r=="function"?r():r.current;if(!e)return;function a(){var d;if(!e)return;let i=(d=t.get(e))!=null?d:1;if(i===1?t.delete(e):t.set(e,i-1),i!==1)return;let n=u.get(e);n&&(n["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",n["aria-hidden"]),e.inert=n.inert,u.delete(e))}let f=(o=t.get(e))!=null?o:0;return t.set(e,f+1),f!==0||(u.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0),a},[r,l])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsMounted: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function f(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useIsoMorphicEffect: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
let l=(e,f)=>{_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.isServer?(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(e,f):(0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(e,f)};


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-latest-value.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLatestValue: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
function s(e){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__.useIsoMorphicEffect)(()=>{r.current=e},[e]),r}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-on-unmount.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-on-unmount.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOnUnmount: () => (/* binding */ c)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_micro_task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/micro-task.js */ "./node_modules/@headlessui/react/dist/utils/micro-task.js");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
function c(t){let r=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(t),e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(e.current=!1,()=>{e.current=!0,(0,_utils_micro_task_js__WEBPACK_IMPORTED_MODULE_2__.microTask)(()=>{e.current&&r()})}),[r])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-outside-click.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-outside-click.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOutsideClick: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/focus-management.js */ "./node_modules/@headlessui/react/dist/utils/focus-management.js");
/* harmony import */ var _utils_platform_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/platform.js */ "./node_modules/@headlessui/react/dist/utils/platform.js");
/* harmony import */ var _use_document_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-document-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-document-event.js");
/* harmony import */ var _use_window_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./use-window-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-window-event.js");
function y(s,m,a=!0){let i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{requestAnimationFrame(()=>{i.current=a})},[a]);function c(e,r){if(!i.current||e.defaultPrevented)return;let t=r(e);if(t===null||!t.getRootNode().contains(t)||!t.isConnected)return;let E=function u(n){return typeof n=="function"?u(n()):Array.isArray(n)||n instanceof Set?n:[n]}(s);for(let u of E){if(u===null)continue;let n=u instanceof HTMLElement?u:u.current;if(n!=null&&n.contains(t)||e.composed&&e.composedPath().includes(n))return}return!(0,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.isFocusableElement)(t,_utils_focus_management_js__WEBPACK_IMPORTED_MODULE_1__.FocusableMode.Loose)&&t.tabIndex!==-1&&e.preventDefault(),m(e,t)}let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_2__.useDocumentEvent)("pointerdown",e=>{var r,t;i.current&&(o.current=((t=(r=e.composedPath)==null?void 0:r.call(e))==null?void 0:t[0])||e.target)},!0),(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_2__.useDocumentEvent)("mousedown",e=>{var r,t;i.current&&(o.current=((t=(r=e.composedPath)==null?void 0:r.call(e))==null?void 0:t[0])||e.target)},!0),(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_2__.useDocumentEvent)("click",e=>{(0,_utils_platform_js__WEBPACK_IMPORTED_MODULE_3__.isMobile)()||o.current&&(c(e,()=>o.current),o.current=null)},!0),(0,_use_document_event_js__WEBPACK_IMPORTED_MODULE_2__.useDocumentEvent)("touchend",e=>c(e,()=>e.target instanceof HTMLElement?e.target:null),!0),(0,_use_window_event_js__WEBPACK_IMPORTED_MODULE_4__.useWindowEvent)("blur",e=>c(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-owner.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-owner.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOwnerDocument: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
function n(...e){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_1__.getOwnerDocument)(...e),[...e])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-root-containers.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-root-containers.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMainTreeNode: () => (/* binding */ y),
/* harmony export */   useRootContainers: () => (/* binding */ N)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _internal_hidden_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../internal/hidden.js */ "./node_modules/@headlessui/react/dist/internal/hidden.js");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _use_owner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-owner.js */ "./node_modules/@headlessui/react/dist/hooks/use-owner.js");
function N({defaultContainers:o=[],portals:r,mainTreeNodeRef:u}={}){var f;let t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((f=u==null?void 0:u.current)!=null?f:null),l=(0,_use_owner_js__WEBPACK_IMPORTED_MODULE_1__.useOwnerDocument)(t),c=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_2__.useEvent)(()=>{var i,s,a;let n=[];for(let e of o)e!==null&&(e instanceof HTMLElement?n.push(e):"current"in e&&e.current instanceof HTMLElement&&n.push(e.current));if(r!=null&&r.current)for(let e of r.current)n.push(e);for(let e of(i=l==null?void 0:l.querySelectorAll("html > *, body > *"))!=null?i:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&e.id!=="headlessui-portal-root"&&(e.contains(t.current)||e.contains((a=(s=t.current)==null?void 0:s.getRootNode())==null?void 0:a.host)||n.some(L=>e.contains(L))||n.push(e));return n});return{resolveContainers:c,contains:(0,_use_event_js__WEBPACK_IMPORTED_MODULE_2__.useEvent)(n=>c().some(i=>i.contains(n))),mainTreeNodeRef:t,MainTreeNode:(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(){return u!=null?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_3__.Hidden,{features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_3__.Features.Hidden,ref:t})},[t,u])}}function y(){let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return{mainTreeNodeRef:o,MainTreeNode:(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_hidden_js__WEBPACK_IMPORTED_MODULE_3__.Hidden,{features:_internal_hidden_js__WEBPACK_IMPORTED_MODULE_3__.Features.Hidden,ref:o})},[o])}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useServerHandoffComplete: () => (/* binding */ l)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _utils_env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
function s(){let r=typeof document=="undefined";return"useSyncExternalStore" in /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))?(o=>o.useSyncExternalStore)(/*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2))))(()=>()=>{},()=>!1,()=>!r):!1}function l(){let r=s(),[e,n]=react__WEBPACK_IMPORTED_MODULE_0__.useState(_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.isHandoffComplete);return e&&_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.isHandoffComplete===!1&&n(!1),react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{e!==!0&&n(!0)},[e]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>_utils_env_js__WEBPACK_IMPORTED_MODULE_1__.env.handoff(),[]),r?!1:e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-store.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-store.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStore: () => (/* binding */ S)
/* harmony export */ });
/* harmony import */ var _use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../use-sync-external-store-shim/index.js */ "./node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js");
function S(t){return (0,_use_sync_external_store_shim_index_js__WEBPACK_IMPORTED_MODULE_0__.useSyncExternalStore)(t.subscribe,t.getSnapshot,t.getSnapshot)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js":
/*!********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   optionalRef: () => (/* binding */ T),
/* harmony export */   useSyncRefs: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
let u=Symbol();function T(t,n=!0){return Object.assign(t,{[u]:n})}function y(...t){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n.current=t},[t]);let c=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(e=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(e):o.current=e)});return t.every(e=>e==null||(e==null?void 0:e[u]))?void 0:c}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js":
/*!************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Direction: () => (/* binding */ s),
/* harmony export */   useTabDirection: () => (/* binding */ n)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_window_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-window-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-window-event.js");
var s=(r=>(r[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r))(s||{});function n(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);return (0,_use_window_event_js__WEBPACK_IMPORTED_MODULE_1__.useWindowEvent)("keydown",o=>{o.key==="Tab"&&(e.current=o.shiftKey?1:0)},!0),e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-watch.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-watch.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useWatch: () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
function m(u,t){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),r=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)(u);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{let o=[...e.current];for(let[n,a]of t.entries())if(e.current[n]!==a){let l=r(t,o);return e.current=t,l}},[r,...t])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/hooks/use-window-event.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/hooks/use-window-event.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useWindowEvent: () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-latest-value.js */ "./node_modules/@headlessui/react/dist/hooks/use-latest-value.js");
function s(e,r,n){let o=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__.useLatestValue)(r);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{function t(i){o.current(i)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n])}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/hidden.js":
/*!****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/hidden.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Features: () => (/* binding */ s),
/* harmony export */   Hidden: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./node_modules/@headlessui/react/dist/utils/render.js");
let p="div";var s=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(s||{});function l(d,o){var n;let{features:t=1,...e}=d,r={ref:o,"aria-hidden":(t&2)===2?!0:(n=e["aria-hidden"])!=null?n:void 0,hidden:(t&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(t&4)===4&&(t&2)!==2&&{display:"none"}}};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.render)({ourProps:r,theirProps:e,slot:{},defaultTag:p,name:"Hidden"})}let u=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.forwardRefWithAs)(l);


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/open-closed.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/open-closed.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OpenClosedProvider: () => (/* binding */ s),
/* harmony export */   State: () => (/* binding */ d),
/* harmony export */   useOpenClosed: () => (/* binding */ u)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);n.displayName="OpenClosedContext";var d=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(d||{});function u(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(n)}function s({value:o,children:r}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(n.Provider,{value:o},r)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/portal-force-root.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/portal-force-root.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForcePortalRoot: () => (/* binding */ l),
/* harmony export */   usePortalRoot: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(!1);function a(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(e)}function l(o){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(e.Provider,{value:o.force},o.children)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/internal/stack-context.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/internal/stack-context.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StackMessage: () => (/* binding */ s),
/* harmony export */   StackProvider: () => (/* binding */ b),
/* harmony export */   useStackContext: () => (/* binding */ x)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/use-event.js */ "./node_modules/@headlessui/react/dist/hooks/use-event.js");
/* harmony import */ var _hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/use-iso-morphic-effect.js */ "./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js");
let a=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(()=>{});a.displayName="StackContext";var s=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(s||{});function x(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(a)}function b({children:i,onUpdate:r,type:e,element:n,enabled:u}){let l=x(),o=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_1__.useEvent)((...t)=>{r==null||r(...t),l(...t)});return (0,_hooks_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__.useIsoMorphicEffect)(()=>{let t=u===void 0||u===!0;return t&&o(0,e,n),()=>{t&&o(1,e,n)}},[o,e,n,u]),react__WEBPACK_IMPORTED_MODULE_0__.createElement(a.Provider,{value:o},i)}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/use-sync-external-store-shim/index.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSyncExternalStore: () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _useSyncExternalStoreShimClient_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useSyncExternalStoreShimClient.js */ "./node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js");
/* harmony import */ var _useSyncExternalStoreShimServer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useSyncExternalStoreShimServer.js */ "./node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js");
const r=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined",s=!r,c=s?_useSyncExternalStoreShimServer_js__WEBPACK_IMPORTED_MODULE_1__.useSyncExternalStore:_useSyncExternalStoreShimClient_js__WEBPACK_IMPORTED_MODULE_2__.useSyncExternalStore,a="useSyncExternalStore" in /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))?(n=>n.useSyncExternalStore)(/*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)))):c;


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimClient.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSyncExternalStore: () => (/* binding */ y)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
function i(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const d=typeof Object.is=="function"?Object.is:i,{useState:u,useEffect:h,useLayoutEffect:f,useDebugValue:p}=/*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)));let S=!1,_=!1;function y(e,t,c){const a=t(),[{inst:n},o]=u({inst:{value:a,getSnapshot:t}});return f(()=>{n.value=a,n.getSnapshot=t,r(n)&&o({inst:n})},[e,a,t]),h(()=>(r(n)&&o({inst:n}),e(()=>{r(n)&&o({inst:n})})),[e]),p(a),a}function r(e){const t=e.getSnapshot,c=e.value;try{const a=t();return!d(c,a)}catch{return!0}}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/use-sync-external-store-shim/useSyncExternalStoreShimServer.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useSyncExternalStore: () => (/* binding */ t)
/* harmony export */ });
function t(r,e,n){return e()}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/active-element-history.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/active-element-history.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   history: () => (/* binding */ t)
/* harmony export */ });
/* harmony import */ var _document_ready_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document-ready.js */ "./node_modules/@headlessui/react/dist/utils/document-ready.js");
let t=[];(0,_document_ready_js__WEBPACK_IMPORTED_MODULE_0__.onDocumentReady)(()=>{function e(n){n.target instanceof HTMLElement&&n.target!==document.body&&t[0]!==n.target&&(t.unshift(n.target),t=t.filter(r=>r!=null&&r.isConnected),t.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/bugs.js":
/*!***********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/bugs.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isDisabledReactIssue7711: () => (/* binding */ r)
/* harmony export */ });
function r(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=(e==null?void 0:e.getAttribute("disabled"))==="";return t&&i(l)?!1:t}function i(n){if(!n)return!1;let e=n.previousElementSibling;for(;e!==null;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/class-names.js":
/*!******************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/class-names.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   classNames: () => (/* binding */ t)
/* harmony export */ });
function t(...r){return Array.from(new Set(r.flatMap(n=>typeof n=="string"?n.split(" "):[]))).filter(Boolean).join(" ")}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/disposables.js":
/*!******************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/disposables.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   disposables: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _micro_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./micro-task.js */ "./node_modules/@headlessui/react/dist/utils/micro-task.js");
function o(){let n=[],r={addEventListener(e,t,s,a){return e.addEventListener(t,s,a),r.add(()=>e.removeEventListener(t,s,a))},requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add(()=>cancelAnimationFrame(t))},nextFrame(...e){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...e))},setTimeout(...e){let t=setTimeout(...e);return r.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return (0,_micro_task_js__WEBPACK_IMPORTED_MODULE_0__.microTask)(()=>{t.current&&e[0]()}),r.add(()=>{t.current=!1})},style(e,t,s){let a=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:s}),this.add(()=>{Object.assign(e.style,{[t]:a})})},group(e){let t=o();return e(t),this.add(()=>t.dispose())},add(e){return n.push(e),()=>{let t=n.indexOf(e);if(t>=0)for(let s of n.splice(t,1))s()}},dispose(){for(let e of n.splice(0))e()}};return r}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/document-ready.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/document-ready.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   onDocumentReady: () => (/* binding */ t)
/* harmony export */ });
function t(n){function e(){document.readyState!=="loading"&&(n(),document.removeEventListener("DOMContentLoaded",e))}typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("DOMContentLoaded",e),e())}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/env.js":
/*!**********************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/env.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   env: () => (/* binding */ s)
/* harmony export */ });
var i=Object.defineProperty;var d=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var r=(t,e,n)=>(d(t,typeof e!="symbol"?e+"":e,n),n);class o{constructor(){r(this,"current",this.detect());r(this,"handoffState","pending");r(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window=="undefined"||typeof document=="undefined"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}}let s=new o;


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/focus-management.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/focus-management.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Focus: () => (/* binding */ M),
/* harmony export */   FocusResult: () => (/* binding */ N),
/* harmony export */   FocusableMode: () => (/* binding */ T),
/* harmony export */   focusElement: () => (/* binding */ y),
/* harmony export */   focusFrom: () => (/* binding */ _),
/* harmony export */   focusIn: () => (/* binding */ O),
/* harmony export */   getFocusableElements: () => (/* binding */ f),
/* harmony export */   isFocusableElement: () => (/* binding */ h),
/* harmony export */   restoreFocusIfNecessary: () => (/* binding */ D),
/* harmony export */   sortByDomNode: () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var _disposables_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disposables.js */ "./node_modules/@headlessui/react/dist/utils/disposables.js");
/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
/* harmony import */ var _owner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./owner.js */ "./node_modules/@headlessui/react/dist/utils/owner.js");
let c=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var M=(n=>(n[n.First=1]="First",n[n.Previous=2]="Previous",n[n.Next=4]="Next",n[n.Last=8]="Last",n[n.WrapAround=16]="WrapAround",n[n.NoScroll=32]="NoScroll",n))(M||{}),N=(o=>(o[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o))(N||{}),F=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(F||{});function f(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(c)).sort((r,t)=>Math.sign((r.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var T=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(T||{});function h(e,r=0){var t;return e===((t=(0,_owner_js__WEBPACK_IMPORTED_MODULE_0__.getOwnerDocument)(e))==null?void 0:t.body)?!1:(0,_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(r,{[0](){return e.matches(c)},[1](){let l=e;for(;l!==null;){if(l.matches(c))return!0;l=l.parentElement}return!1}})}function D(e){let r=(0,_owner_js__WEBPACK_IMPORTED_MODULE_0__.getOwnerDocument)(e);(0,_disposables_js__WEBPACK_IMPORTED_MODULE_2__.disposables)().nextFrame(()=>{r&&!h(r.activeElement,0)&&y(e)})}var w=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(w||{});typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function y(e){e==null||e.focus({preventScroll:!0})}let S=["textarea","input"].join(",");function H(e){var r,t;return(t=(r=e==null?void 0:e.matches)==null?void 0:r.call(e,S))!=null?t:!1}function I(e,r=t=>t){return e.slice().sort((t,l)=>{let o=r(t),i=r(l);if(o===null||i===null)return 0;let n=o.compareDocumentPosition(i);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function _(e,r){return O(f(),r,{relativeTo:e})}function O(e,r,{sorted:t=!0,relativeTo:l=null,skipElements:o=[]}={}){let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,n=Array.isArray(e)?t?I(e):e:f(e);o.length>0&&n.length>1&&(n=n.filter(s=>!o.includes(s))),l=l!=null?l:i.activeElement;let E=(()=>{if(r&5)return 1;if(r&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=(()=>{if(r&1)return 0;if(r&2)return Math.max(0,n.indexOf(l))-1;if(r&4)return Math.max(0,n.indexOf(l))+1;if(r&8)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=r&32?{preventScroll:!0}:{},d=0,a=n.length,u;do{if(d>=a||d+a<=0)return 0;let s=x+d;if(r&16)s=(s+a)%a;else{if(s<0)return 3;if(s>=a)return 1}u=n[s],u==null||u.focus(p),d+=E}while(u!==i.activeElement);return r&6&&H(u)&&u.select(),2}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/match.js":
/*!************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/match.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ u)
/* harmony export */ });
function u(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/micro-task.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/micro-task.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   microTask: () => (/* binding */ t)
/* harmony export */ });
function t(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(o=>setTimeout(()=>{throw o}))}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/owner.js":
/*!************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/owner.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOwnerDocument: () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var _env_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env.js */ "./node_modules/@headlessui/react/dist/utils/env.js");
function o(r){return _env_js__WEBPACK_IMPORTED_MODULE_0__.env.isServer?null:r instanceof Node?r.ownerDocument:r!=null&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/platform.js":
/*!***************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/platform.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isAndroid: () => (/* binding */ i),
/* harmony export */   isIOS: () => (/* binding */ t),
/* harmony export */   isMobile: () => (/* binding */ n)
/* harmony export */ });
function t(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function i(){return/Android/gi.test(window.navigator.userAgent)}function n(){return t()||i()}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/render.js":
/*!*************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/render.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Features: () => (/* binding */ O),
/* harmony export */   RenderStrategy: () => (/* binding */ v),
/* harmony export */   compact: () => (/* binding */ x),
/* harmony export */   forwardRefWithAs: () => (/* binding */ U),
/* harmony export */   render: () => (/* binding */ C),
/* harmony export */   useMergeRefsFn: () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _class_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class-names.js */ "./node_modules/@headlessui/react/dist/utils/class-names.js");
/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match.js */ "./node_modules/@headlessui/react/dist/utils/match.js");
var O=(n=>(n[n.None=0]="None",n[n.RenderStrategy=1]="RenderStrategy",n[n.Static=2]="Static",n))(O||{}),v=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(v||{});function C({ourProps:r,theirProps:t,slot:e,defaultTag:n,features:o,visible:a=!0,name:f,mergeRefs:l}){l=l!=null?l:k;let s=R(t,r);if(a)return m(s,e,n,f,l);let y=o!=null?o:0;if(y&2){let{static:u=!1,...d}=s;if(u)return m(d,e,n,f,l)}if(y&1){let{unmount:u=!0,...d}=s;return (0,_match_js__WEBPACK_IMPORTED_MODULE_1__.match)(u?0:1,{[0](){return null},[1](){return m({...d,hidden:!0,style:{display:"none"}},e,n,f,l)}})}return m(s,e,n,f,l)}function m(r,t={},e,n,o){let{as:a=e,children:f,refName:l="ref",...s}=F(r,["unmount","static"]),y=r.ref!==void 0?{[l]:r.ref}:{},u=typeof f=="function"?f(t):f;"className"in s&&s.className&&typeof s.className=="function"&&(s.className=s.className(t));let d={};if(t){let i=!1,c=[];for(let[T,p]of Object.entries(t))typeof p=="boolean"&&(i=!0),p===!0&&c.push(T);i&&(d["data-headlessui-state"]=c.join(" "))}if(a===react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&Object.keys(x(s)).length>0){if(!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(u)||Array.isArray(u)&&u.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${n} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`));let i=u.props,c=typeof(i==null?void 0:i.className)=="function"?(...p)=>(0,_class_names_js__WEBPACK_IMPORTED_MODULE_2__.classNames)(i==null?void 0:i.className(...p),s.className):(0,_class_names_js__WEBPACK_IMPORTED_MODULE_2__.classNames)(i==null?void 0:i.className,s.className),T=c?{className:c}:{};return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(u,Object.assign({},R(u.props,x(F(s,["ref"]))),d,y,{ref:o(u.ref,y.ref)},T))}return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(a,Object.assign({},F(s,["ref"]),a!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&y,a!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&d),u)}function I(){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]),t=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e=>{for(let n of r.current)n!=null&&(typeof n=="function"?n(e):n.current=e)},[]);return(...e)=>{if(!e.every(n=>n==null))return r.current=e,t}}function k(...r){return r.every(t=>t==null)?void 0:t=>{for(let e of r)e!=null&&(typeof e=="function"?e(t):e.current=t)}}function R(...r){var n;if(r.length===0)return{};if(r.length===1)return r[0];let t={},e={};for(let o of r)for(let a in o)a.startsWith("on")&&typeof o[a]=="function"?((n=e[a])!=null||(e[a]=[]),e[a].push(o[a])):t[a]=o[a];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(o=>[o,void 0])));for(let o in e)Object.assign(t,{[o](a,...f){let l=e[o];for(let s of l){if((a instanceof Event||(a==null?void 0:a.nativeEvent)instanceof Event)&&a.defaultPrevented)return;s(a,...f)}}});return t}function U(r){var t;return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(r),{displayName:(t=r.displayName)!=null?t:r.name})}function x(r){let t=Object.assign({},r);for(let e in t)t[e]===void 0&&delete t[e];return t}function F(r,t=[]){let e=Object.assign({},r);for(let n of t)n in e&&delete e[n];return e}


/***/ }),

/***/ "./node_modules/@headlessui/react/dist/utils/store.js":
/*!************************************************************!*\
  !*** ./node_modules/@headlessui/react/dist/utils/store.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStore: () => (/* binding */ a)
/* harmony export */ });
function a(o,r){let t=o(),n=new Set;return{getSnapshot(){return t},subscribe(e){return n.add(e),()=>n.delete(e)},dispatch(e,...s){let i=r[e].call(t,...s);i&&(t=i,n.forEach(c=>c()))}}}


/***/ }),

/***/ "./node_modules/@heroicons/react/20/solid/esm/FireIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@heroicons/react/20/solid/esm/FireIcon.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function FireIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M13.5 4.938a7 7 0 1 1-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 0 1 .572-2.759 6.026 6.026 0 0 1 2.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0 0 13.5 4.938ZM14 12a4 4 0 0 1-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 0 0 1.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 0 1 1.315-4.192.447.447 0 0 1 .431-.16A4.001 4.001 0 0 1 14 12Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(FireIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/FireIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/FireIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function FireIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(FireIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function MagnifyingGlassIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(MagnifyingGlassIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@heroicons/react/24/outline/esm/StarIcon.js":
/*!******************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/outline/esm/StarIcon.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");

function StarIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
  }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(StarIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@newfold/ui-component-library/components/card/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@newfold/ui-component-library/components/card/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoryComponent: () => (/* binding */ StoryComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);





/**
 * @param {string} as The element to render as.
 * @param {Object} children The children.
 * @param {string} className The className.
 * @returns {WPElement} The card header.
 */
const Header = ({
  as: Component = "div",
  children,
  className = "",
  ...props
}) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
  ...props,
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("nfd-card__header", className)
}, children);
Header.propTypes = {
  as: prop_types__WEBPACK_IMPORTED_MODULE_2__.PropTypes.element,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__.PropTypes.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__.PropTypes.string
};

/**
 * @param {string} as The element to render as.
 * @param {Object} children The children.
 * @param {string} className The className.
 * @returns {WPElement} The card content.
 */
const Content = ({
  as: Component = "div",
  children,
  className = "",
  ...props
}) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
  ...props,
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("nfd-card__content", className)
}, children);
Content.propTypes = {
  as: prop_types__WEBPACK_IMPORTED_MODULE_2__.PropTypes.element,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__.PropTypes.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__.PropTypes.string
};

/**
 * @param {string} as The element to render as.
 * @param {Object} children The children.
 * @param {string} className The className.
 * @returns  {WPElement} The card footer.
 */
const Footer = ({
  as: Component = "div",
  children,
  className = "",
  ...props
}) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
  ...props,
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("nfd-card__footer", className)
}, children);
Footer.propTypes = {
  as: prop_types__WEBPACK_IMPORTED_MODULE_2__.PropTypes.element,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__.PropTypes.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__.PropTypes.string
};

/**
 * @param {string} as The element to render as.
 * @param {Object} children The children.
 * @param {string} className The className.
 * @returns {JSX.Element} The card component.
 */
const Card = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  as: Component,
  children,
  className,
  ...props
}, ref) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
  ...props,
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("nfd-card", className),
  ref: ref
}, children));
const propTypes = {
  as: prop_types__WEBPACK_IMPORTED_MODULE_2__.PropTypes.elementType,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__.PropTypes.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__.PropTypes.string
};
Card.propTypes = propTypes;
Card.defaultProps = {
  as: "div",
  className: ""
};
Card.Header = Header;
Card.Header.displayName = "Card.Header";
Card.Content = Content;
Card.Content.displayName = "Card.Content";
Card.Footer = Footer;
Card.Footer.displayName = "Card.Footer";

// eslint-disable-next-line require-jsdoc
const StoryComponent = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Card, {
  ...props
});
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = Card.defaultProps;
StoryComponent.displayName = "Card";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./node_modules/@newfold/ui-component-library/components/page/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@newfold/ui-component-library/components/page/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);




const Page = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  as: Component = "div",
  children,
  className = "",
  ...props
}, ref) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
  ...props,
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("nfd-page", className),
  ref: ref
}, children));
Page.propTypes = {
  as: prop_types__WEBPACK_IMPORTED_MODULE_2__.PropTypes.element,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2__.PropTypes.node.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2__.PropTypes.string
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

/***/ }),

/***/ "./node_modules/@newfold/ui-component-library/components/root/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@newfold/ui-component-library/components/root/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RootContext: () => (/* binding */ RootContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



const defaultRootContext = {
  isRtl: false
};
const RootContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultRootContext);

/**
 * @param {JSX.node} children The React children.
 * @param {{ isRtl: boolean }} context The root context value.
 * @returns {JSX.Element} The Root component.
 */
const Root = ({
  children,
  context = {},
  ...props
}) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RootContext.Provider, {
    value: {
      ...defaultRootContext,
      ...context
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "nfd-root",
    ...props
  }, children));
};
Root.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  context: prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    isRtl: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Root);

/***/ }),

/***/ "./node_modules/@newfold/ui-component-library/components/sidebar-navigation/index.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@newfold/ui-component-library/components/sidebar-navigation/index.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavigationContext: () => (/* binding */ NavigationContext),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   useNavigationContext: () => (/* binding */ useNavigationContext)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _menu_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-item */ "./node_modules/@newfold/ui-component-library/components/sidebar-navigation/menu-item.js");
/* harmony import */ var _mobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile */ "./node_modules/@newfold/ui-component-library/components/sidebar-navigation/mobile.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar */ "./node_modules/@newfold/ui-component-library/components/sidebar-navigation/sidebar.js");
/* harmony import */ var _submenu_item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./submenu-item */ "./node_modules/@newfold/ui-component-library/components/sidebar-navigation/submenu-item.js");








const NavigationContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)({
  activePath: "",
  isMobileMenuOpen: false,
  setMobileMenuOpen: lodash__WEBPACK_IMPORTED_MODULE_1__.noop
});

/**
 * @returns {Object} The navigation context.
 */
const useNavigationContext = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(NavigationContext);

/**
 * @param {string} activePath The path of the active menu item.
 * @param {JSX.node} children The menu(s).
 * @returns {JSX.Element} The navigation element.
 */
const SidebarNavigation = ({
  activePath = "",
  children
}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(NavigationContext.Provider, {
    value: {
      activePath,
      isMobileMenuOpen,
      setMobileMenuOpen
    }
  }, children);
};
SidebarNavigation.propTypes = {
  activePath: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node).isRequired
};
SidebarNavigation.Sidebar = _sidebar__WEBPACK_IMPORTED_MODULE_3__["default"];
SidebarNavigation.Sidebar.displayName = "SidebarNavigation.Sidebar";
SidebarNavigation.Mobile = _mobile__WEBPACK_IMPORTED_MODULE_4__["default"];
SidebarNavigation.Mobile.displayName = "SidebarNavigation.Mobile";
SidebarNavigation.MenuItem = _menu_item__WEBPACK_IMPORTED_MODULE_5__["default"];
SidebarNavigation.MenuItem.displayName = "SidebarNavigation.MenuItem";
SidebarNavigation.SubmenuItem = _submenu_item__WEBPACK_IMPORTED_MODULE_6__["default"];
SidebarNavigation.SubmenuItem.displayName = "SidebarNavigation.SubmenuItem";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarNavigation);

/***/ }),

/***/ "./node_modules/@newfold/ui-component-library/components/sidebar-navigation/menu-item.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@newfold/ui-component-library/components/sidebar-navigation/menu-item.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@newfold/ui-component-library/node_modules/@heroicons/react/outline/esm/ChevronUpIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@newfold/ui-component-library/node_modules/@heroicons/react/outline/esm/ChevronDownIcon.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks */ "./node_modules/@newfold/ui-component-library/hooks/use-toggle-state.js");





/**
 * @param {string} label The label.
 * @param {JSX.Element} [icon] Optional icon to put before the label.
 * @param {JSX.node} [children] Optional sub menu.
 * @param {boolean} [defaultOpen] Whether the sub menu starts opened.
 * @param {Object} [props] Extra props.
 * @returns {JSX.Element} The menu item element.
 */
const MenuItem = ({
  label,
  icon: Icon = null,
  children = null,
  defaultOpen = true,
  ...props
}) => {
  const [isOpen, toggleOpen] = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__["default"])(defaultOpen);
  const ChevronIcon = isOpen ? _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__["default"] : _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__["default"];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "nfd-group nfd-flex nfd-w-full nfd-items-center nfd-justify-between nfd-gap-3 nfd-px-3 nfd-py-2 nfd-text-sm nfd-font-medium nfd-text-slate-800 nfd-rounded-md nfd-no-underline hover:nfd-text-slate-900 hover:nfd-bg-slate-50 focus:nfd-outline-none focus:nfd-ring-2 focus:nfd-ring-primary-500",
    onClick: toggleOpen,
    "aria-expanded": isOpen,
    ...props
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "nfd-flex nfd-items-center nfd-gap-3"
  }, Icon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
    className: "nfd-flex-shrink-0 nfd--ml-1 nfd-h-6 nfd-w-6 nfd-text-slate-400 group-hover:nfd-text-slate-500"
  }), label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ChevronIcon, {
    className: "nfd-h-4 nfd-w-4 nfd-text-slate-400 group-hover:nfd-text-slate-500 nfd-stroke-3"
  })), isOpen && children && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "nfd-ml-8 nfd-mt-1 nfd-space-y-1"
  }, children));
};
MenuItem.propTypes = {
  label: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string).isRequired,
  icon: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType),
  defaultOpen: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuItem);

/***/ }),

/***/ "./node_modules/@newfold/ui-component-library/components/sidebar-navigation/mobile.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@newfold/ui-component-library/components/sidebar-navigation/mobile.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/dialog/dialog.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@newfold/ui-component-library/node_modules/@heroicons/react/outline/esm/XIcon.js");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@newfold/ui-component-library/node_modules/@heroicons/react/outline/esm/MenuAlt2Icon.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./node_modules/@newfold/ui-component-library/components/sidebar-navigation/index.js");







/**
 * @param {JSX.node} children The menu items.
 * @param {string} [openButtonId] The ID of the open button.
 * @param {string} [closeButtonId] The ID of the close button.
 * @param {string} [openButtonScreenReaderText] The open button screen reader text.
 * @param {string} [closeButtonScreenReaderText] The close button screen reader text.
 * @param {string} [aria-label] The aria label for the Modal.
 * @returns {JSX.Element} The mobile element.
 */
const Mobile = ({
  children,
  openButtonId,
  closeButtonId,
  openButtonScreenReaderText = "Open",
  closeButtonScreenReaderText = "Close",
  "aria-label": ariaLabel
}) => {
  const {
    isMobileMenuOpen,
    setMobileMenuOpen
  } = (0,_index__WEBPACK_IMPORTED_MODULE_1__.useNavigationContext)();
  const openMobileMenu = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setMobileMenuOpen(true), [setMobileMenuOpen]);
  const closeMobileMenu = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setMobileMenuOpen(false), [setMobileMenuOpen]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
    className: "nfd-root",
    open: isMobileMenuOpen,
    onClose: closeMobileMenu,
    "aria-label": ariaLabel
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "nfd-mobile-navigation__dialog"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "nfd-fixed nfd-inset-0 nfd-bg-slate-600 nfd-bg-opacity-75 nfd-z-30",
    "aria-hidden": "true"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Panel, {
    className: "nfd-relative nfd-flex nfd-flex-1 nfd-flex-col nfd-max-w-xs nfd-w-full nfd-z-40 nfd-bg-slate-100"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "nfd-absolute nfd-top-0 nfd-right-0 nfd--mr-14 nfd-p-1"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    id: closeButtonId,
    className: "nfd-flex nfd-h-12 nfd-w-12 nfd-items-center nfd-justify-center nfd-rounded-full focus:nfd-outline-none nfd-bg-slate-600 focus:nfd-ring-2 focus:nfd-ring-inset focus:nfd-ring-primary-500",
    onClick: closeMobileMenu
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "nfd-sr-only"
  }, closeButtonScreenReaderText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "nfd-h-6 nfd-w-6 nfd-text-white"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "nfd-flex-1 nfd-h-0 nfd-overflow-y-auto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", {
    className: "nfd-h-full nfd-flex nfd-flex-col nfd-py-6 nfd-px-2"
  }, children))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "nfd-mobile-navigation__top"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "nfd-flex nfd-relative nfd-flex-shrink-0 nfd-h-16 nfd-z-10 nfd-bg-white nfd-border-b nfd-border-slate-200"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    id: openButtonId,
    className: "nfd-px-4 nfd-border-r nfd-border-slate-200 nfd-text-slate-500 focus:nfd-outline-none focus:nfd-ring-2 focus:nfd-ring-inset focus:nfd-ring-primary-500",
    onClick: openMobileMenu
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "nfd-sr-only"
  }, openButtonScreenReaderText), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "nfd-w-6 nfd-h-6"
  })))));
};
Mobile.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node).isRequired,
  openButtonId: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  closeButtonId: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  openButtonScreenReaderText: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  closeButtonScreenReaderText: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  "aria-label": (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mobile);

/***/ }),

/***/ "./node_modules/@newfold/ui-component-library/components/sidebar-navigation/sidebar.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@newfold/ui-component-library/components/sidebar-navigation/sidebar.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



/**
 * @param {JSX.node} children The menu items.
 * @param {string} className The CSS classname.
 * @returns {JSX.Element} The sidebar element.
 */
const Sidebar = ({
  children,
  className = ""
}) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("nav", {
  className: className
}, children);
Sidebar.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired,
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./node_modules/@newfold/ui-component-library/components/sidebar-navigation/submenu-item.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@newfold/ui-component-library/components/sidebar-navigation/submenu-item.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./node_modules/@newfold/ui-component-library/components/sidebar-navigation/index.js");






/**
 * @param {JSX.node} label The label.
 * @param {JSX.ElementClass} [as] The field component.
 * @param {string} [pathProp] The key of the path in the props. Defaults to `href`.
 * @param {Object} [props] Extra props.
 * @returns {JSX.Element} The submenu item element.
 */
const SubmenuItem = ({
                         as: Component = "a",
                         pathProp = "href",
                         icon: Icon = null,
                         label,
                         ...props
                     }) => {
    const {
        activePath,
        setMobileMenuOpen
    } = (0,_index__WEBPACK_IMPORTED_MODULE_2__.useNavigationContext)();
    const handleClick = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setMobileMenuOpen(false), [setMobileMenuOpen]);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        className: "nfd-m-0 nfd-pb-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("nfd-group nfd-flex nfd-items-center nfd-px-3 nfd-py-2 nfd-text-sm nfd-font-medium nfd-rounded-md nfd-no-underline focus:nfd-outline-none focus:nfd-ring-1 focus:nfd-ring-offset-1 focus:nfd-ring-offset-transparent focus:nfd-ring-primary-500", activePath === props[pathProp] ? "nfd-bg-slate-200 nfd-text-slate-900" : "nfd-text-slate-600 hover:nfd-text-slate-900 hover:nfd-bg-slate-50"),
        "aria-current": activePath === props[pathProp] ? "page" : null,
        onClick: handleClick,
        ...props
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "nfd-flex nfd-items-center nfd-gap-3"
    }, Icon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Icon, {
        className: "nfd-flex-shrink-0 nfd--ml-1 nfd-h-6 nfd-w-6 nfd-text-slate-400 group-hover:nfd-text-slate-500"
    }), label)));
};
SubmenuItem.propTypes = {
    as: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().elementType),
    pathProp: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    label: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node).isRequired,
    isActive: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubmenuItem);

/***/ }),

/***/ "./node_modules/@newfold/ui-component-library/elements/button/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@newfold/ui-component-library/elements/button/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoryComponent: () => (/* binding */ StoryComponent),
/* harmony export */   classNameMap: () => (/* binding */ classNameMap),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../spinner */ "./node_modules/@newfold/ui-component-library/elements/spinner/index.js");






const classNameMap = {
  variant: {
    primary: "nfd-button--primary",
    secondary: "nfd-button--secondary",
    error: "nfd-button--error",
    upsell: "nfd-button--upsell"
  },
  size: {
    "default": "",
    small: "nfd-button--small",
    large: "nfd-button--large"
  }
};

/**
 * @param {JSX.node} children Content of the button.
 * @param {string|JSX.Element} [as="button"] Base component.
 * @param {string} [type] Type attribute. Used when `as` is a `button`.
 * @param {string} [variant="primary"] Button variant. See `classNameMap` for the options.
 * @param {string} [size="default"] Button size. See `classNameMap` for the options.
 * @param {boolean} [isLoading=false] Whether to show a spinner.
 * @param {boolean} [disabled=false] Whether the button is disabled.
 * @param {string} [className] CSS class.
 * @returns {JSX.Element} Button component.
 */
const Button = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  children,
  as: Component,
  type,
  variant,
  size,
  isLoading,
  disabled,
  className,
  ...props
}, ref) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component
// eslint-disable-next-line no-undefined
, {
  type: type || Component === "button" && "button" || undefined,
  disabled: disabled,
  ref: ref,
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("nfd-button", classNameMap.variant[variant], classNameMap.size[size], isLoading && "nfd-cursor-wait", disabled && "nfd-button--disabled", className),
  ...props
}, isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_spinner__WEBPACK_IMPORTED_MODULE_3__["default"], {
  size: size === "small" ? "3" : "4",
  className: "nfd-mr-2"
}), children));
const propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node).isRequired,
  as: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType),
  type: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["button", "submit", "reset"]),
  variant: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf((0,lodash__WEBPACK_IMPORTED_MODULE_2__.keys)(classNameMap.variant)),
  size: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf((0,lodash__WEBPACK_IMPORTED_MODULE_2__.keys)(classNameMap.size)),
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
Button.propTypes = propTypes;
Button.defaultProps = {
  as: "button",
  // eslint-disable-next-line no-undefined
  type: undefined,
  variant: "primary",
  size: "default",
  isLoading: false,
  disabled: false,
  className: ""
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

// eslint-disable-next-line require-jsdoc
const StoryComponent = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
  ...props
});
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = Button.defaultProps;
StoryComponent.displayName = "Button";

/***/ }),

/***/ "./node_modules/@newfold/ui-component-library/elements/spinner/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@newfold/ui-component-library/elements/spinner/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoryComponent: () => (/* binding */ StoryComponent),
/* harmony export */   classNameMap: () => (/* binding */ classNameMap),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks */ "./node_modules/@newfold/ui-component-library/hooks/use-svg-aria.js");






const classNameMap = {
  variant: {
    // Default is currentColor.
    "default": "",
    primary: "nfd-text-primary-500",
    white: "nfd-text-white"
  },
  size: {
    3: "nfd-w-3 nfd-h-3",
    4: "nfd-w-4 nfd-h-4",
    8: "nfd-w-8 nfd-h-8"
  }
};

/**
 * @param {string} [variant=default] The variant.
 * @param {string} [size] The size.
 * @param {string} [className] The HTML class.
 * @returns {JSX.Element} The spinner.
 */
const Spinner = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  variant,
  size,
  className
}, ref) => {
  const svgAriaProps = (0,_hooks__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg/",
    fill: "none",
    viewBox: "0 0 24 24",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("nfd-animate-spin", classNameMap.variant[variant], classNameMap.size[size], className),
    ...svgAriaProps
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    className: "nfd-opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    strokeWidth: "4"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    className: "nfd-opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  }));
});
const propTypes = {
  variant: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf((0,lodash__WEBPACK_IMPORTED_MODULE_2__.keys)(classNameMap.variant)),
  size: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf((0,lodash__WEBPACK_IMPORTED_MODULE_2__.keys)(classNameMap.size)),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};
Spinner.propTypes = propTypes;
Spinner.defaultProps = {
  variant: "default",
  size: "4",
  className: ""
};

// eslint-disable-next-line require-jsdoc
const StoryComponent = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, {
  ...props
});
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = Spinner.defaultProps;
StoryComponent.displayName = "Spinner";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spinner);

/***/ }),

/***/ "./node_modules/@newfold/ui-component-library/elements/text-input/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@newfold/ui-component-library/elements/text-input/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoryComponent: () => (/* binding */ StoryComponent),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);





/**
 * @param {string} [type="text"] The type of input.
 * @param {string} [className=""] CSS class.
 * @param {boolean} [disabled=false] Whether the input is disabled.
 * @param {boolean} [readOnly=false] Whether the input is read-only.
 * @param {boolean} [required=false] Whether the input is required.
 * @param {object} [props] Optional extra properties.
 * @returns {JSX.Element} TextInput component.
 */
const TextInput = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  type,
  className,
  disabled,
  readOnly,
  required,
  ...props
}, ref) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
  ref: ref,
  type: type,
  className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("nfd-text-input", disabled && "nfd-text-input--disabled", readOnly && "nfd-text-input--read-only", className),
  disabled: disabled,
  readOnly: readOnly,
  required: required,
  ...props
}));
const propTypes = {
  type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  readOnly: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};
TextInput.propTypes = propTypes;
TextInput.defaultProps = {
  type: "text",
  className: "",
  disabled: false,
  readOnly: false,
  required: false
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextInput);

// eslint-disable-next-line require-jsdoc
const StoryComponent = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextInput, {
  ...props
});
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = TextInput.defaultProps;
StoryComponent.displayName = "TextInput";

/***/ }),

/***/ "./node_modules/@newfold/ui-component-library/elements/title/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@newfold/ui-component-library/elements/title/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoryComponent: () => (/* binding */ StoryComponent),
/* harmony export */   classNameMap: () => (/* binding */ classNameMap),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);

/* eslint-disable no-undefined */



const classNameMap = {
  size: {
    1: "nfd-title--1",
    2: "nfd-title--2",
    3: "nfd-title--3",
    4: "nfd-title--4",
    5: "nfd-title--5"
  }
};

/**
 * @param {Object} props Props object.
 * @returns {JSX.Element} Title component.
 */
const Title = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({
  children,
  as: Component,
  size,
  className,
  ...props
}, ref) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("nfd-title", classNameMap.size[size || Component[1]], className),
    ...props
  }, children);
});
const propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node).isRequired,
  as: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().elementType),
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(Object.keys(classNameMap.size)),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
Title.propTypes = propTypes;
Title.defaultProps = {
  as: "h1",
  size: undefined,
  className: ""
};

// eslint-disable-next-line require-jsdoc
const StoryComponent = props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Title, {
  ...props
});
StoryComponent.propTypes = propTypes;
StoryComponent.defaultProps = Title.defaultProps;
StoryComponent.displayName = "Title";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);

/***/ }),

/***/ "./node_modules/@newfold/ui-component-library/hooks/use-svg-aria.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@newfold/ui-component-library/hooks/use-svg-aria.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Creates aria attributes for an SVG.
 * @param {boolean|null} [isFocusable] Boolean value to indicate if it should be focusable.
 * @returns {Object} Object with `role` and `aria-hidden` and optionally `focusable`.
 */
const useSvgAria = (isFocusable = null) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const aria = {
      role: "img",
      "aria-hidden": "true"
    };
    if (isFocusable !== null) {
      aria.focusable = isFocusable ? "true" : "false";
    }
    return aria;
  }, [isFocusable]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSvgAria);

/***/ }),

/***/ "./node_modules/@newfold/ui-component-library/hooks/use-toggle-state.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@newfold/ui-component-library/hooks/use-toggle-state.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Creates a toggle state.
 * @param {boolean} [initialState] The initial state. Defaults to true.
 * @returns {[boolean,function,function,function,function]} The state, toggleState, setState, setTrue and setFalse in that order.
 */
const useToggleState = (initialState = true) => {
  const [state, setState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState);
  const toggleState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setState(!state), [state, setState]);
  const setTrue = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setState(true), [setState]);
  const setFalse = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setState(false), [setState]);
  return [state, toggleState, setState, setTrue, setFalse];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useToggleState);

/***/ }),

/***/ "./node_modules/@newfold/ui-component-library/node_modules/@heroicons/react/outline/esm/ChevronDownIcon.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@newfold/ui-component-library/node_modules/@heroicons/react/outline/esm/ChevronDownIcon.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ChevronDownIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19 9l-7 7-7-7"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronDownIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@newfold/ui-component-library/node_modules/@heroicons/react/outline/esm/ChevronUpIcon.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@newfold/ui-component-library/node_modules/@heroicons/react/outline/esm/ChevronUpIcon.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function ChevronUpIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M5 15l7-7 7 7"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronUpIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@newfold/ui-component-library/node_modules/@heroicons/react/outline/esm/MenuAlt2Icon.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@newfold/ui-component-library/node_modules/@heroicons/react/outline/esm/MenuAlt2Icon.js ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function MenuAlt2Icon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M4 6h16M4 12h16M4 18h7"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(MenuAlt2Icon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/@newfold/ui-component-library/node_modules/@heroicons/react/outline/esm/XIcon.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@newfold/ui-component-library/node_modules/@heroicons/react/outline/esm/XIcon.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


function XIcon(props, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(XIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/cookie/dist/index.js":
/*!*******************************************!*\
  !*** ./node_modules/cookie/dist/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parse = parse;
exports.serialize = serialize;
/**
 * RegExp to match cookie-name in RFC 6265 sec 4.1.1
 * This refers out to the obsoleted definition of token in RFC 2616 sec 2.2
 * which has been replaced by the token definition in RFC 7230 appendix B.
 *
 * cookie-name       = token
 * token             = 1*tchar
 * tchar             = "!" / "#" / "$" / "%" / "&" / "'" /
 *                     "*" / "+" / "-" / "." / "^" / "_" /
 *                     "`" / "|" / "~" / DIGIT / ALPHA
 *
 * Note: Allowing more characters - https://github.com/jshttp/cookie/issues/191
 * Allow same range as cookie value, except `=`, which delimits end of name.
 */
const cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
/**
 * RegExp to match cookie-value in RFC 6265 sec 4.1.1
 *
 * cookie-value      = *cookie-octet / ( DQUOTE *cookie-octet DQUOTE )
 * cookie-octet      = %x21 / %x23-2B / %x2D-3A / %x3C-5B / %x5D-7E
 *                     ; US-ASCII characters excluding CTLs,
 *                     ; whitespace DQUOTE, comma, semicolon,
 *                     ; and backslash
 *
 * Allowing more characters: https://github.com/jshttp/cookie/issues/191
 * Comma, backslash, and DQUOTE are not part of the parsing algorithm.
 */
const cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
/**
 * RegExp to match domain-value in RFC 6265 sec 4.1.1
 *
 * domain-value      = <subdomain>
 *                     ; defined in [RFC1034], Section 3.5, as
 *                     ; enhanced by [RFC1123], Section 2.1
 * <subdomain>       = <label> | <subdomain> "." <label>
 * <label>           = <let-dig> [ [ <ldh-str> ] <let-dig> ]
 *                     Labels must be 63 characters or less.
 *                     'let-dig' not 'letter' in the first char, per RFC1123
 * <ldh-str>         = <let-dig-hyp> | <let-dig-hyp> <ldh-str>
 * <let-dig-hyp>     = <let-dig> | "-"
 * <let-dig>         = <letter> | <digit>
 * <letter>          = any one of the 52 alphabetic characters A through Z in
 *                     upper case and a through z in lower case
 * <digit>           = any one of the ten digits 0 through 9
 *
 * Keep support for leading dot: https://github.com/jshttp/cookie/issues/173
 *
 * > (Note that a leading %x2E ("."), if present, is ignored even though that
 * character is not permitted, but a trailing %x2E ("."), if present, will
 * cause the user agent to ignore the attribute.)
 */
const domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
/**
 * RegExp to match path-value in RFC 6265 sec 4.1.1
 *
 * path-value        = <any CHAR except CTLs or ";">
 * CHAR              = %x01-7F
 *                     ; defined in RFC 5234 appendix B.1
 */
const pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
const __toString = Object.prototype.toString;
const NullObject = /* @__PURE__ */ (() => {
    const C = function () { };
    C.prototype = Object.create(null);
    return C;
})();
/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 */
function parse(str, options) {
    const obj = new NullObject();
    const len = str.length;
    // RFC 6265 sec 4.1.1, RFC 2616 2.2 defines a cookie name consists of one char minimum, plus '='.
    if (len < 2)
        return obj;
    const dec = options?.decode || decode;
    let index = 0;
    do {
        const eqIdx = str.indexOf("=", index);
        if (eqIdx === -1)
            break; // No more cookie pairs.
        const colonIdx = str.indexOf(";", index);
        const endIdx = colonIdx === -1 ? len : colonIdx;
        if (eqIdx > endIdx) {
            // backtrack on prior semicolon
            index = str.lastIndexOf(";", eqIdx - 1) + 1;
            continue;
        }
        const keyStartIdx = startIndex(str, index, eqIdx);
        const keyEndIdx = endIndex(str, eqIdx, keyStartIdx);
        const key = str.slice(keyStartIdx, keyEndIdx);
        // only assign once
        if (obj[key] === undefined) {
            let valStartIdx = startIndex(str, eqIdx + 1, endIdx);
            let valEndIdx = endIndex(str, endIdx, valStartIdx);
            const value = dec(str.slice(valStartIdx, valEndIdx));
            obj[key] = value;
        }
        index = endIdx + 1;
    } while (index < len);
    return obj;
}
function startIndex(str, index, max) {
    do {
        const code = str.charCodeAt(index);
        if (code !== 0x20 /*   */ && code !== 0x09 /* \t */)
            return index;
    } while (++index < max);
    return max;
}
function endIndex(str, index, min) {
    while (index > min) {
        const code = str.charCodeAt(--index);
        if (code !== 0x20 /*   */ && code !== 0x09 /* \t */)
            return index + 1;
    }
    return min;
}
/**
 * Serialize data into a cookie header.
 *
 * Serialize a name value pair into a cookie string suitable for
 * http headers. An optional options object specifies cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 */
function serialize(name, val, options) {
    const enc = options?.encode || encodeURIComponent;
    if (!cookieNameRegExp.test(name)) {
        throw new TypeError(`argument name is invalid: ${name}`);
    }
    const value = enc(val);
    if (!cookieValueRegExp.test(value)) {
        throw new TypeError(`argument val is invalid: ${val}`);
    }
    let str = name + "=" + value;
    if (!options)
        return str;
    if (options.maxAge !== undefined) {
        if (!Number.isInteger(options.maxAge)) {
            throw new TypeError(`option maxAge is invalid: ${options.maxAge}`);
        }
        str += "; Max-Age=" + options.maxAge;
    }
    if (options.domain) {
        if (!domainValueRegExp.test(options.domain)) {
            throw new TypeError(`option domain is invalid: ${options.domain}`);
        }
        str += "; Domain=" + options.domain;
    }
    if (options.path) {
        if (!pathValueRegExp.test(options.path)) {
            throw new TypeError(`option path is invalid: ${options.path}`);
        }
        str += "; Path=" + options.path;
    }
    if (options.expires) {
        if (!isDate(options.expires) ||
            !Number.isFinite(options.expires.valueOf())) {
            throw new TypeError(`option expires is invalid: ${options.expires}`);
        }
        str += "; Expires=" + options.expires.toUTCString();
    }
    if (options.httpOnly) {
        str += "; HttpOnly";
    }
    if (options.secure) {
        str += "; Secure";
    }
    if (options.partitioned) {
        str += "; Partitioned";
    }
    if (options.priority) {
        const priority = typeof options.priority === "string"
            ? options.priority.toLowerCase()
            : undefined;
        switch (priority) {
            case "low":
                str += "; Priority=Low";
                break;
            case "medium":
                str += "; Priority=Medium";
                break;
            case "high":
                str += "; Priority=High";
                break;
            default:
                throw new TypeError(`option priority is invalid: ${options.priority}`);
        }
    }
    if (options.sameSite) {
        const sameSite = typeof options.sameSite === "string"
            ? options.sameSite.toLowerCase()
            : options.sameSite;
        switch (sameSite) {
            case true:
            case "strict":
                str += "; SameSite=Strict";
                break;
            case "lax":
                str += "; SameSite=Lax";
                break;
            case "none":
                str += "; SameSite=None";
                break;
            default:
                throw new TypeError(`option sameSite is invalid: ${options.sameSite}`);
        }
    }
    return str;
}
/**
 * URL-decode string value. Optimized to skip native call when no %.
 */
function decode(str) {
    if (str.indexOf("%") === -1)
        return str;
    try {
        return decodeURIComponent(str);
    }
    catch (e) {
        return str;
    }
}
/**
 * Determine if value is a Date.
 */
function isDate(val) {
    return __toString.call(val) === "[object Date]";
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/prop-types/node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ ((module) => {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/prop-types/node_modules/react-is/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/prop-types/node_modules/react-is/index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-router/dist/development/chunk-K6CSEXPM.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/react-router/dist/development/chunk-K6CSEXPM.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action),
/* harmony export */   Await: () => (/* binding */ Await),
/* harmony export */   BrowserRouter: () => (/* binding */ BrowserRouter),
/* harmony export */   DataRouterContext: () => (/* binding */ DataRouterContext),
/* harmony export */   DataRouterStateContext: () => (/* binding */ DataRouterStateContext),
/* harmony export */   ErrorResponseImpl: () => (/* binding */ ErrorResponseImpl),
/* harmony export */   FetchersContext: () => (/* binding */ FetchersContext),
/* harmony export */   Form: () => (/* binding */ Form),
/* harmony export */   FrameworkContext: () => (/* binding */ FrameworkContext),
/* harmony export */   HashRouter: () => (/* binding */ HashRouter),
/* harmony export */   HistoryRouter: () => (/* binding */ HistoryRouter),
/* harmony export */   IDLE_BLOCKER: () => (/* binding */ IDLE_BLOCKER),
/* harmony export */   IDLE_FETCHER: () => (/* binding */ IDLE_FETCHER),
/* harmony export */   IDLE_NAVIGATION: () => (/* binding */ IDLE_NAVIGATION),
/* harmony export */   Link: () => (/* binding */ Link),
/* harmony export */   Links: () => (/* binding */ Links),
/* harmony export */   LocationContext: () => (/* binding */ LocationContext),
/* harmony export */   MemoryRouter: () => (/* binding */ MemoryRouter),
/* harmony export */   Meta: () => (/* binding */ Meta),
/* harmony export */   NavLink: () => (/* binding */ NavLink),
/* harmony export */   Navigate: () => (/* binding */ Navigate),
/* harmony export */   NavigationContext: () => (/* binding */ NavigationContext),
/* harmony export */   Outlet: () => (/* binding */ Outlet),
/* harmony export */   PrefetchPageLinks: () => (/* binding */ PrefetchPageLinks),
/* harmony export */   RemixErrorBoundary: () => (/* binding */ RemixErrorBoundary),
/* harmony export */   Route: () => (/* binding */ Route),
/* harmony export */   RouteContext: () => (/* binding */ RouteContext),
/* harmony export */   Router: () => (/* binding */ Router),
/* harmony export */   RouterProvider: () => (/* binding */ RouterProvider),
/* harmony export */   Routes: () => (/* binding */ Routes),
/* harmony export */   Scripts: () => (/* binding */ Scripts),
/* harmony export */   ScrollRestoration: () => (/* binding */ ScrollRestoration),
/* harmony export */   ServerMode: () => (/* binding */ ServerMode),
/* harmony export */   ServerRouter: () => (/* binding */ ServerRouter),
/* harmony export */   SingleFetchRedirectSymbol: () => (/* binding */ SingleFetchRedirectSymbol),
/* harmony export */   StaticRouter: () => (/* binding */ StaticRouter),
/* harmony export */   StaticRouterProvider: () => (/* binding */ StaticRouterProvider),
/* harmony export */   ViewTransitionContext: () => (/* binding */ ViewTransitionContext),
/* harmony export */   createBrowserHistory: () => (/* binding */ createBrowserHistory),
/* harmony export */   createBrowserRouter: () => (/* binding */ createBrowserRouter),
/* harmony export */   createClientRoutes: () => (/* binding */ createClientRoutes),
/* harmony export */   createClientRoutesWithHMRRevalidationOptOut: () => (/* binding */ createClientRoutesWithHMRRevalidationOptOut),
/* harmony export */   createCookie: () => (/* binding */ createCookie),
/* harmony export */   createCookieSessionStorage: () => (/* binding */ createCookieSessionStorage),
/* harmony export */   createHashRouter: () => (/* binding */ createHashRouter),
/* harmony export */   createMemoryRouter: () => (/* binding */ createMemoryRouter),
/* harmony export */   createMemorySessionStorage: () => (/* binding */ createMemorySessionStorage),
/* harmony export */   createPath: () => (/* binding */ createPath),
/* harmony export */   createRequestHandler: () => (/* binding */ createRequestHandler),
/* harmony export */   createRouter: () => (/* binding */ createRouter),
/* harmony export */   createRoutesFromChildren: () => (/* binding */ createRoutesFromChildren),
/* harmony export */   createRoutesFromElements: () => (/* binding */ createRoutesFromElements),
/* harmony export */   createRoutesStub: () => (/* binding */ createRoutesStub),
/* harmony export */   createSearchParams: () => (/* binding */ createSearchParams),
/* harmony export */   createSession: () => (/* binding */ createSession),
/* harmony export */   createSessionStorage: () => (/* binding */ createSessionStorage),
/* harmony export */   createStaticHandler: () => (/* binding */ createStaticHandler2),
/* harmony export */   createStaticRouter: () => (/* binding */ createStaticRouter),
/* harmony export */   data: () => (/* binding */ data),
/* harmony export */   decodeViaTurboStream: () => (/* binding */ decodeViaTurboStream),
/* harmony export */   deserializeErrors: () => (/* binding */ deserializeErrors2),
/* harmony export */   generatePath: () => (/* binding */ generatePath),
/* harmony export */   getPatchRoutesOnNavigationFunction: () => (/* binding */ getPatchRoutesOnNavigationFunction),
/* harmony export */   getSingleFetchDataStrategy: () => (/* binding */ getSingleFetchDataStrategy),
/* harmony export */   href: () => (/* binding */ href),
/* harmony export */   invariant: () => (/* binding */ invariant),
/* harmony export */   isCookie: () => (/* binding */ isCookie),
/* harmony export */   isRouteErrorResponse: () => (/* binding */ isRouteErrorResponse),
/* harmony export */   isSession: () => (/* binding */ isSession),
/* harmony export */   mapRouteProperties: () => (/* binding */ mapRouteProperties),
/* harmony export */   matchPath: () => (/* binding */ matchPath),
/* harmony export */   matchRoutes: () => (/* binding */ matchRoutes),
/* harmony export */   parsePath: () => (/* binding */ parsePath),
/* harmony export */   redirect: () => (/* binding */ redirect),
/* harmony export */   redirectDocument: () => (/* binding */ redirectDocument),
/* harmony export */   renderMatches: () => (/* binding */ renderMatches),
/* harmony export */   replace: () => (/* binding */ replace),
/* harmony export */   resolvePath: () => (/* binding */ resolvePath),
/* harmony export */   setDevServerHooks: () => (/* binding */ setDevServerHooks),
/* harmony export */   shouldHydrateRouteLoader: () => (/* binding */ shouldHydrateRouteLoader),
/* harmony export */   unstable_RouterContextProvider: () => (/* binding */ unstable_RouterContextProvider),
/* harmony export */   unstable_createContext: () => (/* binding */ unstable_createContext),
/* harmony export */   useActionData: () => (/* binding */ useActionData),
/* harmony export */   useAsyncError: () => (/* binding */ useAsyncError),
/* harmony export */   useAsyncValue: () => (/* binding */ useAsyncValue),
/* harmony export */   useBeforeUnload: () => (/* binding */ useBeforeUnload),
/* harmony export */   useBlocker: () => (/* binding */ useBlocker),
/* harmony export */   useFetcher: () => (/* binding */ useFetcher),
/* harmony export */   useFetchers: () => (/* binding */ useFetchers),
/* harmony export */   useFogOFWarDiscovery: () => (/* binding */ useFogOFWarDiscovery),
/* harmony export */   useFormAction: () => (/* binding */ useFormAction),
/* harmony export */   useHref: () => (/* binding */ useHref),
/* harmony export */   useInRouterContext: () => (/* binding */ useInRouterContext),
/* harmony export */   useLinkClickHandler: () => (/* binding */ useLinkClickHandler),
/* harmony export */   useLoaderData: () => (/* binding */ useLoaderData),
/* harmony export */   useLocation: () => (/* binding */ useLocation),
/* harmony export */   useMatch: () => (/* binding */ useMatch),
/* harmony export */   useMatches: () => (/* binding */ useMatches),
/* harmony export */   useNavigate: () => (/* binding */ useNavigate),
/* harmony export */   useNavigation: () => (/* binding */ useNavigation),
/* harmony export */   useNavigationType: () => (/* binding */ useNavigationType),
/* harmony export */   useOutlet: () => (/* binding */ useOutlet),
/* harmony export */   useOutletContext: () => (/* binding */ useOutletContext),
/* harmony export */   useParams: () => (/* binding */ useParams),
/* harmony export */   usePrompt: () => (/* binding */ usePrompt),
/* harmony export */   useResolvedPath: () => (/* binding */ useResolvedPath),
/* harmony export */   useRevalidator: () => (/* binding */ useRevalidator),
/* harmony export */   useRouteError: () => (/* binding */ useRouteError),
/* harmony export */   useRouteLoaderData: () => (/* binding */ useRouteLoaderData),
/* harmony export */   useRoutes: () => (/* binding */ useRoutes),
/* harmony export */   useScrollRestoration: () => (/* binding */ useScrollRestoration),
/* harmony export */   useSearchParams: () => (/* binding */ useSearchParams),
/* harmony export */   useSubmit: () => (/* binding */ useSubmit),
/* harmony export */   useViewTransitionState: () => (/* binding */ useViewTransitionState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var turbo_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! turbo-stream */ "./node_modules/turbo-stream/dist/turbo-stream.mjs");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie */ "./node_modules/cookie/dist/index.js");
/* harmony import */ var set_cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! set-cookie-parser */ "./node_modules/set-cookie-parser/lib/set-cookie.js");
/**
 * react-router v7.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);

// lib/router/history.ts
var Action = /* @__PURE__ */ ((Action2) => {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
  return Action2;
})(Action || {});
var PopStateEventType = "popstate";
function createMemoryHistory(options = {}) {
  let { initialEntries = ["/"], initialIndex, v5Compat = false } = options;
  let entries;
  entries = initialEntries.map(
    (entry, index2) => createMemoryLocation(
      entry,
      typeof entry === "string" ? null : entry.state,
      index2 === 0 ? "default" : void 0
    )
  );
  let index = clampIndex(
    initialIndex == null ? entries.length - 1 : initialIndex
  );
  let action = "POP" /* Pop */;
  let listener = null;
  function clampIndex(n) {
    return Math.min(Math.max(n, 0), entries.length - 1);
  }
  function getCurrentLocation() {
    return entries[index];
  }
  function createMemoryLocation(to, state = null, key) {
    let location = createLocation(
      entries ? getCurrentLocation().pathname : "/",
      to,
      state,
      key
    );
    warning(
      location.pathname.charAt(0) === "/",
      `relative pathnames are not supported in memory history: ${JSON.stringify(
        to
      )}`
    );
    return location;
  }
  function createHref2(to) {
    return typeof to === "string" ? to : createPath(to);
  }
  let history = {
    get index() {
      return index;
    },
    get action() {
      return action;
    },
    get location() {
      return getCurrentLocation();
    },
    createHref: createHref2,
    createURL(to) {
      return new URL(createHref2(to), "http://localhost");
    },
    encodeLocation(to) {
      let path = typeof to === "string" ? parsePath(to) : to;
      return {
        pathname: path.pathname || "",
        search: path.search || "",
        hash: path.hash || ""
      };
    },
    push(to, state) {
      action = "PUSH" /* Push */;
      let nextLocation = createMemoryLocation(to, state);
      index += 1;
      entries.splice(index, entries.length, nextLocation);
      if (v5Compat && listener) {
        listener({ action, location: nextLocation, delta: 1 });
      }
    },
    replace(to, state) {
      action = "REPLACE" /* Replace */;
      let nextLocation = createMemoryLocation(to, state);
      entries[index] = nextLocation;
      if (v5Compat && listener) {
        listener({ action, location: nextLocation, delta: 0 });
      }
    },
    go(delta) {
      action = "POP" /* Pop */;
      let nextIndex = clampIndex(index + delta);
      let nextLocation = entries[nextIndex];
      index = nextIndex;
      if (listener) {
        listener({ action, location: nextLocation, delta });
      }
    },
    listen(fn) {
      listener = fn;
      return () => {
        listener = null;
      };
    }
  };
  return history;
}
function createBrowserHistory(options = {}) {
  function createBrowserLocation(window2, globalHistory) {
    let { pathname, search, hash } = window2.location;
    return createLocation(
      "",
      { pathname, search, hash },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createBrowserHref(window2, to) {
    return typeof to === "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(
    createBrowserLocation,
    createBrowserHref,
    null,
    options
  );
}
function createHashHistory(options = {}) {
  function createHashLocation(window2, globalHistory) {
    let {
      pathname = "/",
      search = "",
      hash = ""
    } = parsePath(window2.location.hash.substring(1));
    if (!pathname.startsWith("/") && !pathname.startsWith(".")) {
      pathname = "/" + pathname;
    }
    return createLocation(
      "",
      { pathname, search, hash },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createHashHref(window2, to) {
    let base = window2.document.querySelector("base");
    let href2 = "";
    if (base && base.getAttribute("href")) {
      let url = window2.location.href;
      let hashIndex = url.indexOf("#");
      href2 = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }
    return href2 + "#" + (typeof to === "string" ? to : createPath(to));
  }
  function validateHashLocation(location, to) {
    warning(
      location.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        to
      )})`
    );
  }
  return getUrlBasedHistory(
    createHashLocation,
    createHashHref,
    validateHashLocation,
    options
  );
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined") console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
function createKey() {
  return Math.random().toString(36).substring(2, 10);
}
function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
function createLocation(current, to, state = null, key) {
  let location = {
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: "",
    ...typeof to === "string" ? parsePath(to) : to,
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  };
  return location;
}
function createPath({
  pathname = "/",
  search = "",
  hash = ""
}) {
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substring(hashIndex);
      path = path.substring(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substring(searchIndex);
      path = path.substring(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref2, validateLocation, options = {}) {
  let { window: window2 = document.defaultView, v5Compat = false } = options;
  let globalHistory = window2.history;
  let action = "POP" /* Pop */;
  let listener = null;
  let index = getIndex();
  if (index == null) {
    index = 0;
    globalHistory.replaceState({ ...globalHistory.state, idx: index }, "");
  }
  function getIndex() {
    let state = globalHistory.state || { idx: null };
    return state.idx;
  }
  function handlePop() {
    action = "POP" /* Pop */;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({ action, location: history.location, delta });
    }
  }
  function push(to, state) {
    action = "PUSH" /* Push */;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      window2.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({ action, location: history.location, delta: 1 });
    }
  }
  function replace2(to, state) {
    action = "REPLACE" /* Replace */;
    let location = createLocation(history.location, to, state);
    if (validateLocation) validateLocation(location, to);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({ action, location: history.location, delta: 0 });
    }
  }
  function createURL(to) {
    let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
    let href2 = typeof to === "string" ? to : createPath(to);
    href2 = href2.replace(/ $/, "%20");
    invariant(
      base,
      `No window.location.(origin|href) available to create URL for href: ${href2}`
    );
    return new URL(href2, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref2(window2, to);
    },
    createURL,
    encodeLocation(to) {
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace: replace2,
    go(n) {
      return globalHistory.go(n);
    }
  };
  return history;
}

// lib/router/utils.ts
function unstable_createContext(defaultValue) {
  return { defaultValue };
}
var _map;
var unstable_RouterContextProvider = class {
  constructor(init) {
    __privateAdd(this, _map, /* @__PURE__ */ new Map());
    if (init) {
      for (let [context, value] of init) {
        this.set(context, value);
      }
    }
  }
  get(context) {
    if (__privateGet(this, _map).has(context)) {
      return __privateGet(this, _map).get(context);
    }
    if (context.defaultValue !== void 0) {
      return context.defaultValue;
    }
    throw new Error("No value found for context");
  }
  set(context, value) {
    __privateGet(this, _map).set(context, value);
  }
};
_map = new WeakMap();
var immutableRouteKeys = /* @__PURE__ */ new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children"
]);
function isIndexRoute(route) {
  return route.index === true;
}
function convertRoutesToDataRoutes(routes, mapRouteProperties2, parentPath = [], manifest = {}) {
  return routes.map((route, index) => {
    let treePath = [...parentPath, String(index)];
    let id = typeof route.id === "string" ? route.id : treePath.join("-");
    invariant(
      route.index !== true || !route.children,
      `Cannot specify children on an index route`
    );
    invariant(
      !manifest[id],
      `Found a route id collision on id "${id}".  Route id's must be globally unique within Data Router usages`
    );
    if (isIndexRoute(route)) {
      let indexRoute = {
        ...route,
        ...mapRouteProperties2(route),
        id
      };
      manifest[id] = indexRoute;
      return indexRoute;
    } else {
      let pathOrLayoutRoute = {
        ...route,
        ...mapRouteProperties2(route),
        id,
        children: void 0
      };
      manifest[id] = pathOrLayoutRoute;
      if (route.children) {
        pathOrLayoutRoute.children = convertRoutesToDataRoutes(
          route.children,
          mapRouteProperties2,
          treePath,
          manifest
        );
      }
      return pathOrLayoutRoute;
    }
  });
}
function matchRoutes(routes, locationArg, basename = "/") {
  return matchRoutesImpl(routes, locationArg, basename, false);
}
function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    let decoded = decodePath(pathname);
    matches = matchRouteBranch(
      branches[i],
      decoded,
      allowPartial
    );
  }
  return matches;
}
function convertRouteMatchToUiMatch(match, loaderData) {
  let { route, pathname, params } = match;
  return {
    id: route.id,
    pathname,
    params,
    data: loaderData[route.id],
    handle: route.handle
  };
}
function flattenRoutes(routes, branches = [], parentsMeta = [], parentPath = "") {
  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(
        meta.relativePath.startsWith(parentPath),
        `Absolute route path "${meta.relativePath}" nested under path "${parentPath}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      );
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        // Our types know better, but runtime JS may not!
        // @ts-expect-error
        route.index !== true,
        `Index routes must not have child routes. Please remove all child routes from route path "${path}".`
      );
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index) => {
    if (route.path === "" || !route.path?.includes("?")) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments;
  let isOptional = first.endsWith("?");
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  result.push(
    ...restExploded.map(
      (subpath) => subpath === "" ? required : [required, subpath].join("/")
    )
  );
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map(
    (exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded
  );
}
function rankRouteBranches(branches) {
  branches.sort(
    (a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(
      a.routesMeta.map((meta) => meta.childrenIndex),
      b.routesMeta.map((meta) => meta.childrenIndex)
    )
  );
}
var paramRe = /^:[\w-]+$/;
var dynamicSegmentValue = 3;
var indexRouteValue = 2;
var emptySegmentValue = 1;
var staticSegmentValue = 10;
var splatPenalty = -2;
var isSplat = (s) => s === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce(
    (score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue),
    initialScore
  );
}
function compareIndexes(a, b) {
  let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
  return siblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a[a.length - 1] - b[b.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function matchRouteBranch(branch, pathname, allowPartial = false) {
  let { routesMeta } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath(
      { path: meta.relativePath, caseSensitive: meta.caseSensitive, end },
      remainingPathname
    );
    let route = meta.route;
    if (!match && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
      match = matchPath(
        {
          path: meta.relativePath,
          caseSensitive: meta.caseSensitive,
          end: false
        },
        remainingPathname
      );
    }
    if (!match) {
      return null;
    }
    Object.assign(matchedParams, match.params);
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(
        joinPaths([matchedPathname, match.pathnameBase])
      ),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function generatePath(originalPath, params = {}) {
  let path = originalPath;
  if (path.endsWith("*") && path !== "*" && !path.endsWith("/*")) {
    warning(
      false,
      `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`
    );
    path = path.replace(/\*$/, "/*");
  }
  const prefix = path.startsWith("/") ? "/" : "";
  const stringify = (p) => p == null ? "" : typeof p === "string" ? p : String(p);
  const segments = path.split(/\/+/).map((segment, index, array) => {
    const isLastSegment = index === array.length - 1;
    if (isLastSegment && segment === "*") {
      const star = "*";
      return stringify(params[star]);
    }
    const keyMatch = segment.match(/^:([\w-]+)(\??)$/);
    if (keyMatch) {
      const [, key, optional] = keyMatch;
      let param = params[key];
      invariant(optional === "?" || param != null, `Missing ":${key}" param`);
      return stringify(param);
    }
    return segment.replace(/\?$/g, "");
  }).filter((segment) => !!segment);
  return prefix + segments.join("/");
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = { path: pattern, caseSensitive: false, end: true };
  }
  let [matcher, compiledParams] = compilePath(
    pattern.path,
    pattern.caseSensitive,
    pattern.end
  );
  let match = pathname.match(matcher);
  if (!match) return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = compiledParams.reduce(
    (memo2, { paramName, isOptional }, index) => {
      if (paramName === "*") {
        let splatValue = captureGroups[index] || "";
        pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
      }
      const value = captureGroups[index];
      if (isOptional && !value) {
        memo2[paramName] = void 0;
      } else {
        memo2[paramName] = (value || "").replace(/%2F/g, "/");
      }
      return memo2;
    },
    {}
  );
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive = false, end = true) {
  warning(
    path === "*" || !path.endsWith("*") || path.endsWith("/*"),
    `Route path "${path}" will be treated as if it were "${path.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${path.replace(/\*$/, "/*")}".`
  );
  let params = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (_, paramName, isOptional) => {
      params.push({ paramName, isOptional: isOptional != null });
      return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
    }
  );
  if (path.endsWith("*")) {
    params.push({ paramName: "*" });
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else {
  }
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, params];
}
function decodePath(value) {
  try {
    return value.split("/").map((v) => decodeURIComponent(v).replace(/\//g, "%2F")).join("/");
  } catch (error) {
    warning(
      false,
      `The URL path "${value}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${error}).`
    );
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function resolvePath(to, fromPathname = "/") {
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return `Cannot include a '${char}' character in a manually specified \`to.${field}\` field [${JSON.stringify(
    path
  )}].  Please separate it out to the \`to.${dest}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function getPathContributingMatches(matches) {
  return matches.filter(
    (match, index) => index === 0 || match.route.path && match.route.path.length > 0
  );
}
function getResolveToMatches(matches) {
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches.map(
    (match, idx) => idx === pathMatches.length - 1 ? match.pathname : match.pathnameBase
  );
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative = false) {
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = { ...toArg };
    invariant(
      !to.pathname || !to.pathname.includes("?"),
      getInvalidPathError("?", "pathname", "search", to)
    );
    invariant(
      !to.pathname || !to.pathname.includes("#"),
      getInvalidPathError("#", "pathname", "hash", to)
    );
    invariant(
      !to.search || !to.search.includes("#"),
      getInvalidPathError("#", "search", "hash", to)
    );
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  if (toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (!isPathRelative && toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
var joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
var normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
var normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
var normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
var DataWithResponseInit = class {
  constructor(data2, init) {
    this.type = "DataWithResponseInit";
    this.data = data2;
    this.init = init || null;
  }
};
function data(data2, init) {
  return new DataWithResponseInit(
    data2,
    typeof init === "number" ? { status: init } : init
  );
}
var redirect = (url, init = 302) => {
  let responseInit = init;
  if (typeof responseInit === "number") {
    responseInit = { status: responseInit };
  } else if (typeof responseInit.status === "undefined") {
    responseInit.status = 302;
  }
  let headers = new Headers(responseInit.headers);
  headers.set("Location", url);
  return new Response(null, { ...responseInit, headers });
};
var redirectDocument = (url, init) => {
  let response = redirect(url, init);
  response.headers.set("X-Remix-Reload-Document", "true");
  return response;
};
var replace = (url, init) => {
  let response = redirect(url, init);
  response.headers.set("X-Remix-Replace", "true");
  return response;
};
var ErrorResponseImpl = class {
  constructor(status, statusText, data2, internal = false) {
    this.status = status;
    this.statusText = statusText || "";
    this.internal = internal;
    if (data2 instanceof Error) {
      this.data = data2.toString();
      this.error = data2;
    } else {
      this.data = data2;
    }
  }
};
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}

// lib/router/router.ts
var validMutationMethodsArr = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
var validMutationMethods = new Set(
  validMutationMethodsArr
);
var validRequestMethodsArr = [
  "GET",
  ...validMutationMethodsArr
];
var validRequestMethods = new Set(validRequestMethodsArr);
var redirectStatusCodes = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
var redirectPreserveMethodStatusCodes = /* @__PURE__ */ new Set([307, 308]);
var IDLE_NAVIGATION = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
};
var IDLE_FETCHER = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0,
  json: void 0,
  text: void 0
};
var IDLE_BLOCKER = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
};
var ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var defaultMapRouteProperties = (route) => ({
  hasErrorBoundary: Boolean(route.hasErrorBoundary)
});
var TRANSITIONS_STORAGE_KEY = "remix-router-transitions";
var ResetLoaderDataSymbol = Symbol("ResetLoaderData");
function createRouter(init) {
  const routerWindow = init.window ? init.window : typeof window !== "undefined" ? window : void 0;
  const isBrowser2 = typeof routerWindow !== "undefined" && typeof routerWindow.document !== "undefined" && typeof routerWindow.document.createElement !== "undefined";
  invariant(
    init.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let mapRouteProperties2 = init.mapRouteProperties || defaultMapRouteProperties;
  let manifest = {};
  let dataRoutes = convertRoutesToDataRoutes(
    init.routes,
    mapRouteProperties2,
    void 0,
    manifest
  );
  let inFlightDataRoutes;
  let basename = init.basename || "/";
  let dataStrategyImpl = init.dataStrategy || defaultDataStrategyWithMiddleware;
  let future = {
    unstable_middleware: false,
    ...init.future
  };
  let unlistenHistory = null;
  let subscribers = /* @__PURE__ */ new Set();
  let savedScrollPositions2 = null;
  let getScrollRestorationKey2 = null;
  let getScrollPosition = null;
  let initialScrollRestored = init.hydrationData != null;
  let initialMatches = matchRoutes(dataRoutes, init.history.location, basename);
  let initialMatchesIsFOW = false;
  let initialErrors = null;
  if (initialMatches == null && !init.patchRoutesOnNavigation) {
    let error = getInternalRouterError(404, {
      pathname: init.history.location.pathname
    });
    let { matches, route } = getShortCircuitMatches(dataRoutes);
    initialMatches = matches;
    initialErrors = { [route.id]: error };
  }
  if (initialMatches && !init.hydrationData) {
    let fogOfWar = checkFogOfWar(
      initialMatches,
      dataRoutes,
      init.history.location.pathname
    );
    if (fogOfWar.active) {
      initialMatches = null;
    }
  }
  let initialized;
  if (!initialMatches) {
    initialized = false;
    initialMatches = [];
    let fogOfWar = checkFogOfWar(
      null,
      dataRoutes,
      init.history.location.pathname
    );
    if (fogOfWar.active && fogOfWar.matches) {
      initialMatchesIsFOW = true;
      initialMatches = fogOfWar.matches;
    }
  } else if (initialMatches.some((m) => m.route.lazy)) {
    initialized = false;
  } else if (!initialMatches.some((m) => m.route.loader)) {
    initialized = true;
  } else {
    let loaderData = init.hydrationData ? init.hydrationData.loaderData : null;
    let errors = init.hydrationData ? init.hydrationData.errors : null;
    if (errors) {
      let idx = initialMatches.findIndex(
        (m) => errors[m.route.id] !== void 0
      );
      initialized = initialMatches.slice(0, idx + 1).every((m) => !shouldLoadRouteOnHydration(m.route, loaderData, errors));
    } else {
      initialized = initialMatches.every(
        (m) => !shouldLoadRouteOnHydration(m.route, loaderData, errors)
      );
    }
  }
  let router;
  let state = {
    historyAction: init.history.action,
    location: init.history.location,
    matches: initialMatches,
    initialized,
    navigation: IDLE_NAVIGATION,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: init.hydrationData != null ? false : null,
    preventScrollReset: false,
    revalidation: "idle",
    loaderData: init.hydrationData && init.hydrationData.loaderData || {},
    actionData: init.hydrationData && init.hydrationData.actionData || null,
    errors: init.hydrationData && init.hydrationData.errors || initialErrors,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  };
  let pendingAction = "POP" /* Pop */;
  let pendingPreventScrollReset = false;
  let pendingNavigationController;
  let pendingViewTransitionEnabled = false;
  let appliedViewTransitions = /* @__PURE__ */ new Map();
  let removePageHideEventListener = null;
  let isUninterruptedRevalidation = false;
  let isRevalidationRequired = false;
  let cancelledFetcherLoads = /* @__PURE__ */ new Set();
  let fetchControllers = /* @__PURE__ */ new Map();
  let incrementingLoadId = 0;
  let pendingNavigationLoadId = -1;
  let fetchReloadIds = /* @__PURE__ */ new Map();
  let fetchRedirectIds = /* @__PURE__ */ new Set();
  let fetchLoadMatches = /* @__PURE__ */ new Map();
  let activeFetchers = /* @__PURE__ */ new Map();
  let fetchersQueuedForDeletion = /* @__PURE__ */ new Set();
  let blockerFunctions = /* @__PURE__ */ new Map();
  let unblockBlockerHistoryUpdate = void 0;
  let pendingRevalidationDfd = null;
  function initialize() {
    unlistenHistory = init.history.listen(
      ({ action: historyAction, location, delta }) => {
        if (unblockBlockerHistoryUpdate) {
          unblockBlockerHistoryUpdate();
          unblockBlockerHistoryUpdate = void 0;
          return;
        }
        warning(
          blockerFunctions.size === 0 || delta != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let blockerKey = shouldBlockNavigation({
          currentLocation: state.location,
          nextLocation: location,
          historyAction
        });
        if (blockerKey && delta != null) {
          let nextHistoryUpdatePromise = new Promise((resolve) => {
            unblockBlockerHistoryUpdate = resolve;
          });
          init.history.go(delta * -1);
          updateBlocker(blockerKey, {
            state: "blocked",
            location,
            proceed() {
              updateBlocker(blockerKey, {
                state: "proceeding",
                proceed: void 0,
                reset: void 0,
                location
              });
              nextHistoryUpdatePromise.then(() => init.history.go(delta));
            },
            reset() {
              let blockers = new Map(state.blockers);
              blockers.set(blockerKey, IDLE_BLOCKER);
              updateState({ blockers });
            }
          });
          return;
        }
        return startNavigation(historyAction, location);
      }
    );
    if (isBrowser2) {
      restoreAppliedTransitions(routerWindow, appliedViewTransitions);
      let _saveAppliedTransitions = () => persistAppliedTransitions(routerWindow, appliedViewTransitions);
      routerWindow.addEventListener("pagehide", _saveAppliedTransitions);
      removePageHideEventListener = () => routerWindow.removeEventListener("pagehide", _saveAppliedTransitions);
    }
    if (!state.initialized) {
      startNavigation("POP" /* Pop */, state.location, {
        initialHydration: true
      });
    }
    return router;
  }
  function dispose() {
    if (unlistenHistory) {
      unlistenHistory();
    }
    if (removePageHideEventListener) {
      removePageHideEventListener();
    }
    subscribers.clear();
    pendingNavigationController && pendingNavigationController.abort();
    state.fetchers.forEach((_, key) => deleteFetcher(key));
    state.blockers.forEach((_, key) => deleteBlocker(key));
  }
  function subscribe(fn) {
    subscribers.add(fn);
    return () => subscribers.delete(fn);
  }
  function updateState(newState, opts = {}) {
    state = {
      ...state,
      ...newState
    };
    let unmountedFetchers = [];
    let mountedFetchers = [];
    state.fetchers.forEach((fetcher, key) => {
      if (fetcher.state === "idle") {
        if (fetchersQueuedForDeletion.has(key)) {
          unmountedFetchers.push(key);
        } else {
          mountedFetchers.push(key);
        }
      }
    });
    fetchersQueuedForDeletion.forEach((key) => {
      if (!state.fetchers.has(key) && !fetchControllers.has(key)) {
        unmountedFetchers.push(key);
      }
    });
    [...subscribers].forEach(
      (subscriber) => subscriber(state, {
        deletedFetchers: unmountedFetchers,
        viewTransitionOpts: opts.viewTransitionOpts,
        flushSync: opts.flushSync === true
      })
    );
    unmountedFetchers.forEach((key) => deleteFetcher(key));
    mountedFetchers.forEach((key) => state.fetchers.delete(key));
  }
  function completeNavigation(location, newState, { flushSync } = {}) {
    let isActionReload = state.actionData != null && state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && state.navigation.state === "loading" && location.state?._isRedirect !== true;
    let actionData;
    if (newState.actionData) {
      if (Object.keys(newState.actionData).length > 0) {
        actionData = newState.actionData;
      } else {
        actionData = null;
      }
    } else if (isActionReload) {
      actionData = state.actionData;
    } else {
      actionData = null;
    }
    let loaderData = newState.loaderData ? mergeLoaderData(
      state.loaderData,
      newState.loaderData,
      newState.matches || [],
      newState.errors
    ) : state.loaderData;
    let blockers = state.blockers;
    if (blockers.size > 0) {
      blockers = new Map(blockers);
      blockers.forEach((_, k) => blockers.set(k, IDLE_BLOCKER));
    }
    let preventScrollReset = pendingPreventScrollReset === true || state.navigation.formMethod != null && isMutationMethod(state.navigation.formMethod) && location.state?._isRedirect !== true;
    if (inFlightDataRoutes) {
      dataRoutes = inFlightDataRoutes;
      inFlightDataRoutes = void 0;
    }
    if (isUninterruptedRevalidation) {
    } else if (pendingAction === "POP" /* Pop */) {
    } else if (pendingAction === "PUSH" /* Push */) {
      init.history.push(location, location.state);
    } else if (pendingAction === "REPLACE" /* Replace */) {
      init.history.replace(location, location.state);
    }
    let viewTransitionOpts;
    if (pendingAction === "POP" /* Pop */) {
      let priorPaths = appliedViewTransitions.get(state.location.pathname);
      if (priorPaths && priorPaths.has(location.pathname)) {
        viewTransitionOpts = {
          currentLocation: state.location,
          nextLocation: location
        };
      } else if (appliedViewTransitions.has(location.pathname)) {
        viewTransitionOpts = {
          currentLocation: location,
          nextLocation: state.location
        };
      }
    } else if (pendingViewTransitionEnabled) {
      let toPaths = appliedViewTransitions.get(state.location.pathname);
      if (toPaths) {
        toPaths.add(location.pathname);
      } else {
        toPaths = /* @__PURE__ */ new Set([location.pathname]);
        appliedViewTransitions.set(state.location.pathname, toPaths);
      }
      viewTransitionOpts = {
        currentLocation: state.location,
        nextLocation: location
      };
    }
    updateState(
      {
        ...newState,
        // matches, errors, fetchers go through as-is
        actionData,
        loaderData,
        historyAction: pendingAction,
        location,
        initialized: true,
        navigation: IDLE_NAVIGATION,
        revalidation: "idle",
        restoreScrollPosition: getSavedScrollPosition(
          location,
          newState.matches || state.matches
        ),
        preventScrollReset,
        blockers
      },
      {
        viewTransitionOpts,
        flushSync: flushSync === true
      }
    );
    pendingAction = "POP" /* Pop */;
    pendingPreventScrollReset = false;
    pendingViewTransitionEnabled = false;
    isUninterruptedRevalidation = false;
    isRevalidationRequired = false;
    pendingRevalidationDfd?.resolve();
    pendingRevalidationDfd = null;
  }
  async function navigate(to, opts) {
    if (typeof to === "number") {
      init.history.go(to);
      return;
    }
    let normalizedPath = normalizeTo(
      state.location,
      state.matches,
      basename,
      to,
      opts?.fromRouteId,
      opts?.relative
    );
    let { path, submission, error } = normalizeNavigateOptions(
      false,
      normalizedPath,
      opts
    );
    let currentLocation = state.location;
    let nextLocation = createLocation(state.location, path, opts && opts.state);
    nextLocation = {
      ...nextLocation,
      ...init.history.encodeLocation(nextLocation)
    };
    let userReplace = opts && opts.replace != null ? opts.replace : void 0;
    let historyAction = "PUSH" /* Push */;
    if (userReplace === true) {
      historyAction = "REPLACE" /* Replace */;
    } else if (userReplace === false) {
    } else if (submission != null && isMutationMethod(submission.formMethod) && submission.formAction === state.location.pathname + state.location.search) {
      historyAction = "REPLACE" /* Replace */;
    }
    let preventScrollReset = opts && "preventScrollReset" in opts ? opts.preventScrollReset === true : void 0;
    let flushSync = (opts && opts.flushSync) === true;
    let blockerKey = shouldBlockNavigation({
      currentLocation,
      nextLocation,
      historyAction
    });
    if (blockerKey) {
      updateBlocker(blockerKey, {
        state: "blocked",
        location: nextLocation,
        proceed() {
          updateBlocker(blockerKey, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: nextLocation
          });
          navigate(to, opts);
        },
        reset() {
          let blockers = new Map(state.blockers);
          blockers.set(blockerKey, IDLE_BLOCKER);
          updateState({ blockers });
        }
      });
      return;
    }
    await startNavigation(historyAction, nextLocation, {
      submission,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: error,
      preventScrollReset,
      replace: opts && opts.replace,
      enableViewTransition: opts && opts.viewTransition,
      flushSync
    });
  }
  function revalidate() {
    if (!pendingRevalidationDfd) {
      pendingRevalidationDfd = createDeferred();
    }
    interruptActiveLoads();
    updateState({ revalidation: "loading" });
    let promise = pendingRevalidationDfd.promise;
    if (state.navigation.state === "submitting") {
      return promise;
    }
    if (state.navigation.state === "idle") {
      startNavigation(state.historyAction, state.location, {
        startUninterruptedRevalidation: true
      });
      return promise;
    }
    startNavigation(
      pendingAction || state.historyAction,
      state.navigation.location,
      {
        overrideNavigation: state.navigation,
        // Proxy through any rending view transition
        enableViewTransition: pendingViewTransitionEnabled === true
      }
    );
    return promise;
  }
  async function startNavigation(historyAction, location, opts) {
    pendingNavigationController && pendingNavigationController.abort();
    pendingNavigationController = null;
    pendingAction = historyAction;
    isUninterruptedRevalidation = (opts && opts.startUninterruptedRevalidation) === true;
    saveScrollPosition(state.location, state.matches);
    pendingPreventScrollReset = (opts && opts.preventScrollReset) === true;
    pendingViewTransitionEnabled = (opts && opts.enableViewTransition) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let loadingNavigation = opts && opts.overrideNavigation;
    let matches = opts?.initialHydration && state.matches && state.matches.length > 0 && !initialMatchesIsFOW ? (
      // `matchRoutes()` has already been called if we're in here via `router.initialize()`
      state.matches
    ) : matchRoutes(routesToUse, location, basename);
    let flushSync = (opts && opts.flushSync) === true;
    if (matches && state.initialized && !isRevalidationRequired && isHashChangeOnly(state.location, location) && !(opts && opts.submission && isMutationMethod(opts.submission.formMethod))) {
      completeNavigation(location, { matches }, { flushSync });
      return;
    }
    let fogOfWar = checkFogOfWar(matches, routesToUse, location.pathname);
    if (fogOfWar.active && fogOfWar.matches) {
      matches = fogOfWar.matches;
    }
    if (!matches) {
      let { error, notFoundMatches, route } = handleNavigational404(
        location.pathname
      );
      completeNavigation(
        location,
        {
          matches: notFoundMatches,
          loaderData: {},
          errors: {
            [route.id]: error
          }
        },
        { flushSync }
      );
      return;
    }
    pendingNavigationController = new AbortController();
    let request = createClientSideRequest(
      init.history,
      location,
      pendingNavigationController.signal,
      opts && opts.submission
    );
    let scopedContext = new unstable_RouterContextProvider(
      init.unstable_getContext ? await init.unstable_getContext() : void 0
    );
    let pendingActionResult;
    if (opts && opts.pendingError) {
      pendingActionResult = [
        findNearestBoundary(matches).route.id,
        { type: "error" /* error */, error: opts.pendingError }
      ];
    } else if (opts && opts.submission && isMutationMethod(opts.submission.formMethod)) {
      let actionResult = await handleAction(
        request,
        location,
        opts.submission,
        matches,
        scopedContext,
        fogOfWar.active,
        { replace: opts.replace, flushSync }
      );
      if (actionResult.shortCircuited) {
        return;
      }
      if (actionResult.pendingActionResult) {
        let [routeId, result] = actionResult.pendingActionResult;
        if (isErrorResult(result) && isRouteErrorResponse(result.error) && result.error.status === 404) {
          pendingNavigationController = null;
          completeNavigation(location, {
            matches: actionResult.matches,
            loaderData: {},
            errors: {
              [routeId]: result.error
            }
          });
          return;
        }
      }
      matches = actionResult.matches || matches;
      pendingActionResult = actionResult.pendingActionResult;
      loadingNavigation = getLoadingNavigation(location, opts.submission);
      flushSync = false;
      fogOfWar.active = false;
      request = createClientSideRequest(
        init.history,
        request.url,
        request.signal
      );
    }
    let {
      shortCircuited,
      matches: updatedMatches,
      loaderData,
      errors
    } = await handleLoaders(
      request,
      location,
      matches,
      scopedContext,
      fogOfWar.active,
      loadingNavigation,
      opts && opts.submission,
      opts && opts.fetcherSubmission,
      opts && opts.replace,
      opts && opts.initialHydration === true,
      flushSync,
      pendingActionResult
    );
    if (shortCircuited) {
      return;
    }
    pendingNavigationController = null;
    completeNavigation(location, {
      matches: updatedMatches || matches,
      ...getActionDataForCommit(pendingActionResult),
      loaderData,
      errors
    });
  }
  async function handleAction(request, location, submission, matches, scopedContext, isFogOfWar, opts = {}) {
    interruptActiveLoads();
    let navigation = getSubmittingNavigation(location, submission);
    updateState({ navigation }, { flushSync: opts.flushSync === true });
    if (isFogOfWar) {
      let discoverResult = await discoverRoutes(
        matches,
        location.pathname,
        request.signal
      );
      if (discoverResult.type === "aborted") {
        return { shortCircuited: true };
      } else if (discoverResult.type === "error") {
        let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
        return {
          matches: discoverResult.partialMatches,
          pendingActionResult: [
            boundaryId,
            {
              type: "error" /* error */,
              error: discoverResult.error
            }
          ]
        };
      } else if (!discoverResult.matches) {
        let { notFoundMatches, error, route } = handleNavigational404(
          location.pathname
        );
        return {
          matches: notFoundMatches,
          pendingActionResult: [
            route.id,
            {
              type: "error" /* error */,
              error
            }
          ]
        };
      } else {
        matches = discoverResult.matches;
      }
    }
    let result;
    let actionMatch = getTargetMatch(matches, location);
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      result = {
        type: "error" /* error */,
        error: getInternalRouterError(405, {
          method: request.method,
          pathname: location.pathname,
          routeId: actionMatch.route.id
        })
      };
    } else {
      let results = await callDataStrategy(
        "action",
        request,
        [actionMatch],
        matches,
        scopedContext,
        null
      );
      result = results[actionMatch.route.id];
      if (!result) {
        for (let match of matches) {
          if (results[match.route.id]) {
            result = results[match.route.id];
            break;
          }
        }
      }
      if (request.signal.aborted) {
        return { shortCircuited: true };
      }
    }
    if (isRedirectResult(result)) {
      let replace2;
      if (opts && opts.replace != null) {
        replace2 = opts.replace;
      } else {
        let location2 = normalizeRedirectLocation(
          result.response.headers.get("Location"),
          new URL(request.url),
          basename
        );
        replace2 = location2 === state.location.pathname + state.location.search;
      }
      await startRedirectNavigation(request, result, true, {
        submission,
        replace: replace2
      });
      return { shortCircuited: true };
    }
    if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(matches, actionMatch.route.id);
      if ((opts && opts.replace) !== true) {
        pendingAction = "PUSH" /* Push */;
      }
      return {
        matches,
        pendingActionResult: [boundaryMatch.route.id, result]
      };
    }
    return {
      matches,
      pendingActionResult: [actionMatch.route.id, result]
    };
  }
  async function handleLoaders(request, location, matches, scopedContext, isFogOfWar, overrideNavigation, submission, fetcherSubmission, replace2, initialHydration, flushSync, pendingActionResult) {
    let loadingNavigation = overrideNavigation || getLoadingNavigation(location, submission);
    let activeSubmission = submission || fetcherSubmission || getSubmissionFromNavigation(loadingNavigation);
    let shouldUpdateNavigationState = !isUninterruptedRevalidation && !initialHydration;
    if (isFogOfWar) {
      if (shouldUpdateNavigationState) {
        let actionData = getUpdatedActionData(pendingActionResult);
        updateState(
          {
            navigation: loadingNavigation,
            ...actionData !== void 0 ? { actionData } : {}
          },
          {
            flushSync
          }
        );
      }
      let discoverResult = await discoverRoutes(
        matches,
        location.pathname,
        request.signal
      );
      if (discoverResult.type === "aborted") {
        return { shortCircuited: true };
      } else if (discoverResult.type === "error") {
        let boundaryId = findNearestBoundary(discoverResult.partialMatches).route.id;
        return {
          matches: discoverResult.partialMatches,
          loaderData: {},
          errors: {
            [boundaryId]: discoverResult.error
          }
        };
      } else if (!discoverResult.matches) {
        let { error, notFoundMatches, route } = handleNavigational404(
          location.pathname
        );
        return {
          matches: notFoundMatches,
          loaderData: {},
          errors: {
            [route.id]: error
          }
        };
      } else {
        matches = discoverResult.matches;
      }
    }
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(
      init.history,
      state,
      matches,
      activeSubmission,
      location,
      initialHydration === true,
      isRevalidationRequired,
      cancelledFetcherLoads,
      fetchersQueuedForDeletion,
      fetchLoadMatches,
      fetchRedirectIds,
      routesToUse,
      basename,
      pendingActionResult
    );
    pendingNavigationLoadId = ++incrementingLoadId;
    if (matchesToLoad.length === 0 && revalidatingFetchers.length === 0) {
      let updatedFetchers2 = markFetchRedirectsDone();
      completeNavigation(
        location,
        {
          matches,
          loaderData: {},
          // Commit pending error if we're short circuiting
          errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? { [pendingActionResult[0]]: pendingActionResult[1].error } : null,
          ...getActionDataForCommit(pendingActionResult),
          ...updatedFetchers2 ? { fetchers: new Map(state.fetchers) } : {}
        },
        { flushSync }
      );
      return { shortCircuited: true };
    }
    if (shouldUpdateNavigationState) {
      let updates = {};
      if (!isFogOfWar) {
        updates.navigation = loadingNavigation;
        let actionData = getUpdatedActionData(pendingActionResult);
        if (actionData !== void 0) {
          updates.actionData = actionData;
        }
      }
      if (revalidatingFetchers.length > 0) {
        updates.fetchers = getUpdatedRevalidatingFetchers(revalidatingFetchers);
      }
      updateState(updates, { flushSync });
    }
    revalidatingFetchers.forEach((rf) => {
      abortFetcher(rf.key);
      if (rf.controller) {
        fetchControllers.set(rf.key, rf.controller);
      }
    });
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((f) => abortFetcher(f.key));
    if (pendingNavigationController) {
      pendingNavigationController.signal.addEventListener(
        "abort",
        abortPendingFetchRevalidations
      );
    }
    let { loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(
      matches,
      matchesToLoad,
      revalidatingFetchers,
      request,
      scopedContext
    );
    if (request.signal.aborted) {
      return { shortCircuited: true };
    }
    if (pendingNavigationController) {
      pendingNavigationController.signal.removeEventListener(
        "abort",
        abortPendingFetchRevalidations
      );
    }
    revalidatingFetchers.forEach((rf) => fetchControllers.delete(rf.key));
    let redirect2 = findRedirect(loaderResults);
    if (redirect2) {
      await startRedirectNavigation(request, redirect2.result, true, {
        replace: replace2
      });
      return { shortCircuited: true };
    }
    redirect2 = findRedirect(fetcherResults);
    if (redirect2) {
      fetchRedirectIds.add(redirect2.key);
      await startRedirectNavigation(request, redirect2.result, true, {
        replace: replace2
      });
      return { shortCircuited: true };
    }
    let { loaderData, errors } = processLoaderData(
      state,
      matches,
      loaderResults,
      pendingActionResult,
      revalidatingFetchers,
      fetcherResults
    );
    if (initialHydration && state.errors) {
      errors = { ...state.errors, ...errors };
    }
    let updatedFetchers = markFetchRedirectsDone();
    let didAbortFetchLoads = abortStaleFetchLoads(pendingNavigationLoadId);
    let shouldUpdateFetchers = updatedFetchers || didAbortFetchLoads || revalidatingFetchers.length > 0;
    return {
      matches,
      loaderData,
      errors,
      ...shouldUpdateFetchers ? { fetchers: new Map(state.fetchers) } : {}
    };
  }
  function getUpdatedActionData(pendingActionResult) {
    if (pendingActionResult && !isErrorResult(pendingActionResult[1])) {
      return {
        [pendingActionResult[0]]: pendingActionResult[1].data
      };
    } else if (state.actionData) {
      if (Object.keys(state.actionData).length === 0) {
        return null;
      } else {
        return state.actionData;
      }
    }
  }
  function getUpdatedRevalidatingFetchers(revalidatingFetchers) {
    revalidatingFetchers.forEach((rf) => {
      let fetcher = state.fetchers.get(rf.key);
      let revalidatingFetcher = getLoadingFetcher(
        void 0,
        fetcher ? fetcher.data : void 0
      );
      state.fetchers.set(rf.key, revalidatingFetcher);
    });
    return new Map(state.fetchers);
  }
  async function fetch2(key, routeId, href2, opts) {
    abortFetcher(key);
    let flushSync = (opts && opts.flushSync) === true;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let normalizedPath = normalizeTo(
      state.location,
      state.matches,
      basename,
      href2,
      routeId,
      opts?.relative
    );
    let matches = matchRoutes(routesToUse, normalizedPath, basename);
    let fogOfWar = checkFogOfWar(matches, routesToUse, normalizedPath);
    if (fogOfWar.active && fogOfWar.matches) {
      matches = fogOfWar.matches;
    }
    if (!matches) {
      setFetcherError(
        key,
        routeId,
        getInternalRouterError(404, { pathname: normalizedPath }),
        { flushSync }
      );
      return;
    }
    let { path, submission, error } = normalizeNavigateOptions(
      true,
      normalizedPath,
      opts
    );
    if (error) {
      setFetcherError(key, routeId, error, { flushSync });
      return;
    }
    let match = getTargetMatch(matches, path);
    let scopedContext = new unstable_RouterContextProvider(
      init.unstable_getContext ? await init.unstable_getContext() : void 0
    );
    let preventScrollReset = (opts && opts.preventScrollReset) === true;
    if (submission && isMutationMethod(submission.formMethod)) {
      await handleFetcherAction(
        key,
        routeId,
        path,
        match,
        matches,
        scopedContext,
        fogOfWar.active,
        flushSync,
        preventScrollReset,
        submission
      );
      return;
    }
    fetchLoadMatches.set(key, { routeId, path });
    await handleFetcherLoader(
      key,
      routeId,
      path,
      match,
      matches,
      scopedContext,
      fogOfWar.active,
      flushSync,
      preventScrollReset,
      submission
    );
  }
  async function handleFetcherAction(key, routeId, path, match, requestMatches, scopedContext, isFogOfWar, flushSync, preventScrollReset, submission) {
    interruptActiveLoads();
    fetchLoadMatches.delete(key);
    function detectAndHandle405Error(m) {
      if (!m.route.action && !m.route.lazy) {
        let error = getInternalRouterError(405, {
          method: submission.formMethod,
          pathname: path,
          routeId
        });
        setFetcherError(key, routeId, error, { flushSync });
        return true;
      }
      return false;
    }
    if (!isFogOfWar && detectAndHandle405Error(match)) {
      return;
    }
    let existingFetcher = state.fetchers.get(key);
    updateFetcherState(key, getSubmittingFetcher(submission, existingFetcher), {
      flushSync
    });
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(
      init.history,
      path,
      abortController.signal,
      submission
    );
    if (isFogOfWar) {
      let discoverResult = await discoverRoutes(
        requestMatches,
        path,
        fetchRequest.signal,
        key
      );
      if (discoverResult.type === "aborted") {
        return;
      } else if (discoverResult.type === "error") {
        setFetcherError(key, routeId, discoverResult.error, { flushSync });
        return;
      } else if (!discoverResult.matches) {
        setFetcherError(
          key,
          routeId,
          getInternalRouterError(404, { pathname: path }),
          { flushSync }
        );
        return;
      } else {
        requestMatches = discoverResult.matches;
        match = getTargetMatch(requestMatches, path);
        if (detectAndHandle405Error(match)) {
          return;
        }
      }
    }
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let actionResults = await callDataStrategy(
      "action",
      fetchRequest,
      [match],
      requestMatches,
      scopedContext,
      key
    );
    let actionResult = actionResults[match.route.id];
    if (fetchRequest.signal.aborted) {
      if (fetchControllers.get(key) === abortController) {
        fetchControllers.delete(key);
      }
      return;
    }
    if (fetchersQueuedForDeletion.has(key)) {
      if (isRedirectResult(actionResult) || isErrorResult(actionResult)) {
        updateFetcherState(key, getDoneFetcher(void 0));
        return;
      }
    } else {
      if (isRedirectResult(actionResult)) {
        fetchControllers.delete(key);
        if (pendingNavigationLoadId > originatingLoadId) {
          updateFetcherState(key, getDoneFetcher(void 0));
          return;
        } else {
          fetchRedirectIds.add(key);
          updateFetcherState(key, getLoadingFetcher(submission));
          return startRedirectNavigation(fetchRequest, actionResult, false, {
            fetcherSubmission: submission,
            preventScrollReset
          });
        }
      }
      if (isErrorResult(actionResult)) {
        setFetcherError(key, routeId, actionResult.error);
        return;
      }
    }
    let nextLocation = state.navigation.location || state.location;
    let revalidationRequest = createClientSideRequest(
      init.history,
      nextLocation,
      abortController.signal
    );
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let matches = state.navigation.state !== "idle" ? matchRoutes(routesToUse, state.navigation.location, basename) : state.matches;
    invariant(matches, "Didn't find any matches after fetcher action");
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);
    let loadFetcher = getLoadingFetcher(submission, actionResult.data);
    state.fetchers.set(key, loadFetcher);
    let [matchesToLoad, revalidatingFetchers] = getMatchesToLoad(
      init.history,
      state,
      matches,
      submission,
      nextLocation,
      false,
      isRevalidationRequired,
      cancelledFetcherLoads,
      fetchersQueuedForDeletion,
      fetchLoadMatches,
      fetchRedirectIds,
      routesToUse,
      basename,
      [match.route.id, actionResult]
    );
    revalidatingFetchers.filter((rf) => rf.key !== key).forEach((rf) => {
      let staleKey = rf.key;
      let existingFetcher2 = state.fetchers.get(staleKey);
      let revalidatingFetcher = getLoadingFetcher(
        void 0,
        existingFetcher2 ? existingFetcher2.data : void 0
      );
      state.fetchers.set(staleKey, revalidatingFetcher);
      abortFetcher(staleKey);
      if (rf.controller) {
        fetchControllers.set(staleKey, rf.controller);
      }
    });
    updateState({ fetchers: new Map(state.fetchers) });
    let abortPendingFetchRevalidations = () => revalidatingFetchers.forEach((rf) => abortFetcher(rf.key));
    abortController.signal.addEventListener(
      "abort",
      abortPendingFetchRevalidations
    );
    let { loaderResults, fetcherResults } = await callLoadersAndMaybeResolveData(
      matches,
      matchesToLoad,
      revalidatingFetchers,
      revalidationRequest,
      scopedContext
    );
    if (abortController.signal.aborted) {
      return;
    }
    abortController.signal.removeEventListener(
      "abort",
      abortPendingFetchRevalidations
    );
    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    revalidatingFetchers.forEach((r) => fetchControllers.delete(r.key));
    let redirect2 = findRedirect(loaderResults);
    if (redirect2) {
      return startRedirectNavigation(
        revalidationRequest,
        redirect2.result,
        false,
        { preventScrollReset }
      );
    }
    redirect2 = findRedirect(fetcherResults);
    if (redirect2) {
      fetchRedirectIds.add(redirect2.key);
      return startRedirectNavigation(
        revalidationRequest,
        redirect2.result,
        false,
        { preventScrollReset }
      );
    }
    let { loaderData, errors } = processLoaderData(
      state,
      matches,
      loaderResults,
      void 0,
      revalidatingFetchers,
      fetcherResults
    );
    if (state.fetchers.has(key)) {
      let doneFetcher = getDoneFetcher(actionResult.data);
      state.fetchers.set(key, doneFetcher);
    }
    abortStaleFetchLoads(loadId);
    if (state.navigation.state === "loading" && loadId > pendingNavigationLoadId) {
      invariant(pendingAction, "Expected pending action");
      pendingNavigationController && pendingNavigationController.abort();
      completeNavigation(state.navigation.location, {
        matches,
        loaderData,
        errors,
        fetchers: new Map(state.fetchers)
      });
    } else {
      updateState({
        errors,
        loaderData: mergeLoaderData(
          state.loaderData,
          loaderData,
          matches,
          errors
        ),
        fetchers: new Map(state.fetchers)
      });
      isRevalidationRequired = false;
    }
  }
  async function handleFetcherLoader(key, routeId, path, match, matches, scopedContext, isFogOfWar, flushSync, preventScrollReset, submission) {
    let existingFetcher = state.fetchers.get(key);
    updateFetcherState(
      key,
      getLoadingFetcher(
        submission,
        existingFetcher ? existingFetcher.data : void 0
      ),
      { flushSync }
    );
    let abortController = new AbortController();
    let fetchRequest = createClientSideRequest(
      init.history,
      path,
      abortController.signal
    );
    if (isFogOfWar) {
      let discoverResult = await discoverRoutes(
        matches,
        path,
        fetchRequest.signal,
        key
      );
      if (discoverResult.type === "aborted") {
        return;
      } else if (discoverResult.type === "error") {
        setFetcherError(key, routeId, discoverResult.error, { flushSync });
        return;
      } else if (!discoverResult.matches) {
        setFetcherError(
          key,
          routeId,
          getInternalRouterError(404, { pathname: path }),
          { flushSync }
        );
        return;
      } else {
        matches = discoverResult.matches;
        match = getTargetMatch(matches, path);
      }
    }
    fetchControllers.set(key, abortController);
    let originatingLoadId = incrementingLoadId;
    let results = await callDataStrategy(
      "loader",
      fetchRequest,
      [match],
      matches,
      scopedContext,
      key
    );
    let result = results[match.route.id];
    if (fetchControllers.get(key) === abortController) {
      fetchControllers.delete(key);
    }
    if (fetchRequest.signal.aborted) {
      return;
    }
    if (fetchersQueuedForDeletion.has(key)) {
      updateFetcherState(key, getDoneFetcher(void 0));
      return;
    }
    if (isRedirectResult(result)) {
      if (pendingNavigationLoadId > originatingLoadId) {
        updateFetcherState(key, getDoneFetcher(void 0));
        return;
      } else {
        fetchRedirectIds.add(key);
        await startRedirectNavigation(fetchRequest, result, false, {
          preventScrollReset
        });
        return;
      }
    }
    if (isErrorResult(result)) {
      setFetcherError(key, routeId, result.error);
      return;
    }
    updateFetcherState(key, getDoneFetcher(result.data));
  }
  async function startRedirectNavigation(request, redirect2, isNavigation, {
    submission,
    fetcherSubmission,
    preventScrollReset,
    replace: replace2
  } = {}) {
    if (redirect2.response.headers.has("X-Remix-Revalidate")) {
      isRevalidationRequired = true;
    }
    let location = redirect2.response.headers.get("Location");
    invariant(location, "Expected a Location header on the redirect Response");
    location = normalizeRedirectLocation(
      location,
      new URL(request.url),
      basename
    );
    let redirectLocation = createLocation(state.location, location, {
      _isRedirect: true
    });
    if (isBrowser2) {
      let isDocumentReload = false;
      if (redirect2.response.headers.has("X-Remix-Reload-Document")) {
        isDocumentReload = true;
      } else if (ABSOLUTE_URL_REGEX.test(location)) {
        const url = init.history.createURL(location);
        isDocumentReload = // Hard reload if it's an absolute URL to a new origin
        url.origin !== routerWindow.location.origin || // Hard reload if it's an absolute URL that does not match our basename
        stripBasename(url.pathname, basename) == null;
      }
      if (isDocumentReload) {
        if (replace2) {
          routerWindow.location.replace(location);
        } else {
          routerWindow.location.assign(location);
        }
        return;
      }
    }
    pendingNavigationController = null;
    let redirectNavigationType = replace2 === true || redirect2.response.headers.has("X-Remix-Replace") ? "REPLACE" /* Replace */ : "PUSH" /* Push */;
    let { formMethod, formAction, formEncType } = state.navigation;
    if (!submission && !fetcherSubmission && formMethod && formAction && formEncType) {
      submission = getSubmissionFromNavigation(state.navigation);
    }
    let activeSubmission = submission || fetcherSubmission;
    if (redirectPreserveMethodStatusCodes.has(redirect2.response.status) && activeSubmission && isMutationMethod(activeSubmission.formMethod)) {
      await startNavigation(redirectNavigationType, redirectLocation, {
        submission: {
          ...activeSubmission,
          formAction: location
        },
        // Preserve these flags across redirects
        preventScrollReset: preventScrollReset || pendingPreventScrollReset,
        enableViewTransition: isNavigation ? pendingViewTransitionEnabled : void 0
      });
    } else {
      let overrideNavigation = getLoadingNavigation(
        redirectLocation,
        submission
      );
      await startNavigation(redirectNavigationType, redirectLocation, {
        overrideNavigation,
        // Send fetcher submissions through for shouldRevalidate
        fetcherSubmission,
        // Preserve these flags across redirects
        preventScrollReset: preventScrollReset || pendingPreventScrollReset,
        enableViewTransition: isNavigation ? pendingViewTransitionEnabled : void 0
      });
    }
  }
  async function callDataStrategy(type, request, matchesToLoad, matches, scopedContext, fetcherKey) {
    let results;
    let dataResults = {};
    try {
      results = await callDataStrategyImpl(
        dataStrategyImpl,
        type,
        request,
        matchesToLoad,
        matches,
        fetcherKey,
        manifest,
        mapRouteProperties2,
        scopedContext,
        future.unstable_middleware
      );
    } catch (e) {
      matchesToLoad.forEach((m) => {
        dataResults[m.route.id] = {
          type: "error" /* error */,
          error: e
        };
      });
      return dataResults;
    }
    for (let [routeId, result] of Object.entries(results)) {
      if (isRedirectDataStrategyResult(result)) {
        let response = result.result;
        dataResults[routeId] = {
          type: "redirect" /* redirect */,
          response: normalizeRelativeRoutingRedirectResponse(
            response,
            request,
            routeId,
            matches,
            basename
          )
        };
      } else {
        dataResults[routeId] = await convertDataStrategyResultToDataResult(
          result
        );
      }
    }
    return dataResults;
  }
  async function callLoadersAndMaybeResolveData(matches, matchesToLoad, fetchersToLoad, request, scopedContext) {
    let loaderResultsPromise = callDataStrategy(
      "loader",
      request,
      matchesToLoad,
      matches,
      scopedContext,
      null
    );
    let fetcherResultsPromise = Promise.all(
      fetchersToLoad.map(async (f) => {
        if (f.matches && f.match && f.controller) {
          let results = await callDataStrategy(
            "loader",
            createClientSideRequest(init.history, f.path, f.controller.signal),
            [f.match],
            f.matches,
            scopedContext,
            f.key
          );
          let result = results[f.match.route.id];
          return { [f.key]: result };
        } else {
          return Promise.resolve({
            [f.key]: {
              type: "error" /* error */,
              error: getInternalRouterError(404, {
                pathname: f.path
              })
            }
          });
        }
      })
    );
    let loaderResults = await loaderResultsPromise;
    let fetcherResults = (await fetcherResultsPromise).reduce(
      (acc, r) => Object.assign(acc, r),
      {}
    );
    return {
      loaderResults,
      fetcherResults
    };
  }
  function interruptActiveLoads() {
    isRevalidationRequired = true;
    fetchLoadMatches.forEach((_, key) => {
      if (fetchControllers.has(key)) {
        cancelledFetcherLoads.add(key);
      }
      abortFetcher(key);
    });
  }
  function updateFetcherState(key, fetcher, opts = {}) {
    state.fetchers.set(key, fetcher);
    updateState(
      { fetchers: new Map(state.fetchers) },
      { flushSync: (opts && opts.flushSync) === true }
    );
  }
  function setFetcherError(key, routeId, error, opts = {}) {
    let boundaryMatch = findNearestBoundary(state.matches, routeId);
    deleteFetcher(key);
    updateState(
      {
        errors: {
          [boundaryMatch.route.id]: error
        },
        fetchers: new Map(state.fetchers)
      },
      { flushSync: (opts && opts.flushSync) === true }
    );
  }
  function getFetcher(key) {
    activeFetchers.set(key, (activeFetchers.get(key) || 0) + 1);
    if (fetchersQueuedForDeletion.has(key)) {
      fetchersQueuedForDeletion.delete(key);
    }
    return state.fetchers.get(key) || IDLE_FETCHER;
  }
  function deleteFetcher(key) {
    let fetcher = state.fetchers.get(key);
    if (fetchControllers.has(key) && !(fetcher && fetcher.state === "loading" && fetchReloadIds.has(key))) {
      abortFetcher(key);
    }
    fetchLoadMatches.delete(key);
    fetchReloadIds.delete(key);
    fetchRedirectIds.delete(key);
    fetchersQueuedForDeletion.delete(key);
    cancelledFetcherLoads.delete(key);
    state.fetchers.delete(key);
  }
  function queueFetcherForDeletion(key) {
    let count = (activeFetchers.get(key) || 0) - 1;
    if (count <= 0) {
      activeFetchers.delete(key);
      fetchersQueuedForDeletion.add(key);
    } else {
      activeFetchers.set(key, count);
    }
    updateState({ fetchers: new Map(state.fetchers) });
  }
  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    if (controller) {
      controller.abort();
      fetchControllers.delete(key);
    }
  }
  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = getDoneFetcher(fetcher.data);
      state.fetchers.set(key, doneFetcher);
    }
  }
  function markFetchRedirectsDone() {
    let doneKeys = [];
    let updatedFetchers = false;
    for (let key of fetchRedirectIds) {
      let fetcher = state.fetchers.get(key);
      invariant(fetcher, `Expected fetcher: ${key}`);
      if (fetcher.state === "loading") {
        fetchRedirectIds.delete(key);
        doneKeys.push(key);
        updatedFetchers = true;
      }
    }
    markFetchersDone(doneKeys);
    return updatedFetchers;
  }
  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];
    for (let [key, id] of fetchReloadIds) {
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant(fetcher, `Expected fetcher: ${key}`);
        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }
    markFetchersDone(yeetedKeys);
    return yeetedKeys.length > 0;
  }
  function getBlocker(key, fn) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    if (blockerFunctions.get(key) !== fn) {
      blockerFunctions.set(key, fn);
    }
    return blocker;
  }
  function deleteBlocker(key) {
    state.blockers.delete(key);
    blockerFunctions.delete(key);
  }
  function updateBlocker(key, newBlocker) {
    let blocker = state.blockers.get(key) || IDLE_BLOCKER;
    invariant(
      blocker.state === "unblocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "blocked" || blocker.state === "blocked" && newBlocker.state === "proceeding" || blocker.state === "blocked" && newBlocker.state === "unblocked" || blocker.state === "proceeding" && newBlocker.state === "unblocked",
      `Invalid blocker state transition: ${blocker.state} -> ${newBlocker.state}`
    );
    let blockers = new Map(state.blockers);
    blockers.set(key, newBlocker);
    updateState({ blockers });
  }
  function shouldBlockNavigation({
    currentLocation,
    nextLocation,
    historyAction
  }) {
    if (blockerFunctions.size === 0) {
      return;
    }
    if (blockerFunctions.size > 1) {
      warning(false, "A router only supports one blocker at a time");
    }
    let entries = Array.from(blockerFunctions.entries());
    let [blockerKey, blockerFunction] = entries[entries.length - 1];
    let blocker = state.blockers.get(blockerKey);
    if (blocker && blocker.state === "proceeding") {
      return;
    }
    if (blockerFunction({ currentLocation, nextLocation, historyAction })) {
      return blockerKey;
    }
  }
  function handleNavigational404(pathname) {
    let error = getInternalRouterError(404, { pathname });
    let routesToUse = inFlightDataRoutes || dataRoutes;
    let { matches, route } = getShortCircuitMatches(routesToUse);
    return { notFoundMatches: matches, route, error };
  }
  function enableScrollRestoration(positions, getPosition, getKey) {
    savedScrollPositions2 = positions;
    getScrollPosition = getPosition;
    getScrollRestorationKey2 = getKey || null;
    if (!initialScrollRestored && state.navigation === IDLE_NAVIGATION) {
      initialScrollRestored = true;
      let y = getSavedScrollPosition(state.location, state.matches);
      if (y != null) {
        updateState({ restoreScrollPosition: y });
      }
    }
    return () => {
      savedScrollPositions2 = null;
      getScrollPosition = null;
      getScrollRestorationKey2 = null;
    };
  }
  function getScrollKey(location, matches) {
    if (getScrollRestorationKey2) {
      let key = getScrollRestorationKey2(
        location,
        matches.map((m) => convertRouteMatchToUiMatch(m, state.loaderData))
      );
      return key || location.key;
    }
    return location.key;
  }
  function saveScrollPosition(location, matches) {
    if (savedScrollPositions2 && getScrollPosition) {
      let key = getScrollKey(location, matches);
      savedScrollPositions2[key] = getScrollPosition();
    }
  }
  function getSavedScrollPosition(location, matches) {
    if (savedScrollPositions2) {
      let key = getScrollKey(location, matches);
      let y = savedScrollPositions2[key];
      if (typeof y === "number") {
        return y;
      }
    }
    return null;
  }
  function checkFogOfWar(matches, routesToUse, pathname) {
    if (init.patchRoutesOnNavigation) {
      if (!matches) {
        let fogMatches = matchRoutesImpl(
          routesToUse,
          pathname,
          basename,
          true
        );
        return { active: true, matches: fogMatches || [] };
      } else {
        if (Object.keys(matches[0].params).length > 0) {
          let partialMatches = matchRoutesImpl(
            routesToUse,
            pathname,
            basename,
            true
          );
          return { active: true, matches: partialMatches };
        }
      }
    }
    return { active: false, matches: null };
  }
  async function discoverRoutes(matches, pathname, signal, fetcherKey) {
    if (!init.patchRoutesOnNavigation) {
      return { type: "success", matches };
    }
    let partialMatches = matches;
    while (true) {
      let isNonHMR = inFlightDataRoutes == null;
      let routesToUse = inFlightDataRoutes || dataRoutes;
      let localManifest = manifest;
      try {
        await init.patchRoutesOnNavigation({
          signal,
          path: pathname,
          matches: partialMatches,
          fetcherKey,
          patch: (routeId, children) => {
            if (signal.aborted) return;
            patchRoutesImpl(
              routeId,
              children,
              routesToUse,
              localManifest,
              mapRouteProperties2
            );
          }
        });
      } catch (e) {
        return { type: "error", error: e, partialMatches };
      } finally {
        if (isNonHMR && !signal.aborted) {
          dataRoutes = [...dataRoutes];
        }
      }
      if (signal.aborted) {
        return { type: "aborted" };
      }
      let newMatches = matchRoutes(routesToUse, pathname, basename);
      if (newMatches) {
        return { type: "success", matches: newMatches };
      }
      let newPartialMatches = matchRoutesImpl(
        routesToUse,
        pathname,
        basename,
        true
      );
      if (!newPartialMatches || partialMatches.length === newPartialMatches.length && partialMatches.every(
        (m, i) => m.route.id === newPartialMatches[i].route.id
      )) {
        return { type: "success", matches: null };
      }
      partialMatches = newPartialMatches;
    }
  }
  function _internalSetRoutes(newRoutes) {
    manifest = {};
    inFlightDataRoutes = convertRoutesToDataRoutes(
      newRoutes,
      mapRouteProperties2,
      void 0,
      manifest
    );
  }
  function patchRoutes(routeId, children) {
    let isNonHMR = inFlightDataRoutes == null;
    let routesToUse = inFlightDataRoutes || dataRoutes;
    patchRoutesImpl(
      routeId,
      children,
      routesToUse,
      manifest,
      mapRouteProperties2
    );
    if (isNonHMR) {
      dataRoutes = [...dataRoutes];
      updateState({});
    }
  }
  router = {
    get basename() {
      return basename;
    },
    get future() {
      return future;
    },
    get state() {
      return state;
    },
    get routes() {
      return dataRoutes;
    },
    get window() {
      return routerWindow;
    },
    initialize,
    subscribe,
    enableScrollRestoration,
    navigate,
    fetch: fetch2,
    revalidate,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (to) => init.history.createHref(to),
    encodeLocation: (to) => init.history.encodeLocation(to),
    getFetcher,
    deleteFetcher: queueFetcherForDeletion,
    dispose,
    getBlocker,
    deleteBlocker,
    patchRoutes,
    _internalFetchControllers: fetchControllers,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes
  };
  return router;
}
function createStaticHandler(routes, opts) {
  invariant(
    routes.length > 0,
    "You must provide a non-empty routes array to createStaticHandler"
  );
  let manifest = {};
  let basename = (opts ? opts.basename : null) || "/";
  let mapRouteProperties2 = opts?.mapRouteProperties || defaultMapRouteProperties;
  let dataRoutes = convertRoutesToDataRoutes(
    routes,
    mapRouteProperties2,
    void 0,
    manifest
  );
  async function query(request, {
    requestContext,
    filterMatchesToLoad,
    skipLoaderErrorBubbling,
    skipRevalidation,
    dataStrategy,
    unstable_respond: respond
  } = {}) {
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename);
    requestContext = requestContext != null ? requestContext : new unstable_RouterContextProvider();
    if (!isValidMethod(method) && method !== "HEAD") {
      let error = getInternalRouterError(405, { method });
      let { matches: methodNotAllowedMatches, route } = getShortCircuitMatches(dataRoutes);
      let staticContext = {
        basename,
        location,
        matches: methodNotAllowedMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {}
      };
      return respond ? respond(staticContext) : staticContext;
    } else if (!matches) {
      let error = getInternalRouterError(404, { pathname: location.pathname });
      let { matches: notFoundMatches, route } = getShortCircuitMatches(dataRoutes);
      let staticContext = {
        basename,
        location,
        matches: notFoundMatches,
        loaderData: {},
        actionData: null,
        errors: {
          [route.id]: error
        },
        statusCode: error.status,
        loaderHeaders: {},
        actionHeaders: {}
      };
      return respond ? respond(staticContext) : staticContext;
    }
    if (respond && matches.some((m) => m.route.unstable_middleware)) {
      invariant(
        requestContext instanceof unstable_RouterContextProvider,
        "When using middleware in `staticHandler.query()`, any provided `requestContext` must bean instance of `unstable_RouterContextProvider`"
      );
      try {
        let renderedStaticContext;
        let response = await runMiddlewarePipeline(
          {
            request,
            matches,
            params: matches[0].params,
            // If we're calling middleware then it must be enabled so we can cast
            // this to the proper type knowing it's not an `AppLoadContext`
            context: requestContext
          },
          true,
          async () => {
            let result2 = await queryImpl(
              request,
              location,
              matches,
              requestContext,
              dataStrategy || null,
              skipLoaderErrorBubbling === true,
              null,
              filterMatchesToLoad || null,
              skipRevalidation === true
            );
            if (isResponse(result2)) {
              return result2;
            }
            renderedStaticContext = { location, basename, ...result2 };
            let res = await respond(renderedStaticContext);
            return res;
          },
          async (e) => {
            if (isResponse(e.error)) {
              return e.error;
            }
            if (renderedStaticContext) {
              if (e.routeId in renderedStaticContext.loaderData) {
                renderedStaticContext.loaderData[e.routeId] = void 0;
              }
              return respond(
                getStaticContextFromError(
                  dataRoutes,
                  renderedStaticContext,
                  e.error,
                  findNearestBoundary(matches, e.routeId).route.id
                )
              );
            } else {
              let loaderIdx = matches.findIndex((m) => m.route.loader);
              let boundary = loaderIdx >= 0 ? findNearestBoundary(matches, matches[loaderIdx].route.id) : findNearestBoundary(matches);
              return respond({
                matches,
                location,
                basename,
                loaderData: {},
                actionData: null,
                errors: {
                  [boundary.route.id]: e.error
                },
                statusCode: isRouteErrorResponse(e.error) ? e.error.status : 500,
                actionHeaders: {},
                loaderHeaders: {}
              });
            }
          }
        );
        invariant(isResponse(response), "Expected a response in query()");
        return response;
      } catch (e) {
        if (isResponse(e)) {
          return e;
        }
        throw e;
      }
    }
    let result = await queryImpl(
      request,
      location,
      matches,
      requestContext,
      dataStrategy || null,
      skipLoaderErrorBubbling === true,
      null,
      filterMatchesToLoad || null,
      skipRevalidation === true
    );
    if (isResponse(result)) {
      return result;
    }
    return { location, basename, ...result };
  }
  async function queryRoute(request, {
    routeId,
    requestContext,
    dataStrategy,
    unstable_respond: respond
  } = {}) {
    let url = new URL(request.url);
    let method = request.method;
    let location = createLocation("", createPath(url), null, "default");
    let matches = matchRoutes(dataRoutes, location, basename);
    requestContext = requestContext != null ? requestContext : new unstable_RouterContextProvider();
    if (!isValidMethod(method) && method !== "HEAD" && method !== "OPTIONS") {
      throw getInternalRouterError(405, { method });
    } else if (!matches) {
      throw getInternalRouterError(404, { pathname: location.pathname });
    }
    let match = routeId ? matches.find((m) => m.route.id === routeId) : getTargetMatch(matches, location);
    if (routeId && !match) {
      throw getInternalRouterError(403, {
        pathname: location.pathname,
        routeId
      });
    } else if (!match) {
      throw getInternalRouterError(404, { pathname: location.pathname });
    }
    if (respond && matches.some((m) => m.route.unstable_middleware)) {
      invariant(
        requestContext instanceof unstable_RouterContextProvider,
        "When using middleware in `staticHandler.queryRoute()`, any provided `requestContext` must bean instance of `unstable_RouterContextProvider`"
      );
      let response = await runMiddlewarePipeline(
        {
          request,
          matches,
          params: matches[0].params,
          // If we're calling middleware then it must be enabled so we can cast
          // this to the proper type knowing it's not an `AppLoadContext`
          context: requestContext
        },
        true,
        async () => {
          let result2 = await queryImpl(
            request,
            location,
            matches,
            requestContext,
            dataStrategy || null,
            false,
            match,
            null,
            false
          );
          if (isResponse(result2)) {
            return respond(result2);
          }
          let error2 = result2.errors ? Object.values(result2.errors)[0] : void 0;
          if (error2 !== void 0) {
            throw error2;
          }
          let value = result2.actionData ? Object.values(result2.actionData)[0] : Object.values(result2.loaderData)[0];
          return typeof value === "string" ? new Response(value) : Response.json(value);
        },
        (e) => {
          if (isResponse(e.error)) {
            return respond(e.error);
          }
          return new Response(String(e.error), {
            status: 500,
            statusText: "Unexpected Server Error"
          });
        }
      );
      return response;
    }
    let result = await queryImpl(
      request,
      location,
      matches,
      requestContext,
      dataStrategy || null,
      false,
      match,
      null,
      false
    );
    if (isResponse(result)) {
      return result;
    }
    let error = result.errors ? Object.values(result.errors)[0] : void 0;
    if (error !== void 0) {
      throw error;
    }
    if (result.actionData) {
      return Object.values(result.actionData)[0];
    }
    if (result.loaderData) {
      return Object.values(result.loaderData)[0];
    }
    return void 0;
  }
  async function queryImpl(request, location, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, filterMatchesToLoad, skipRevalidation) {
    invariant(
      request.signal,
      "query()/queryRoute() requests must contain an AbortController signal"
    );
    try {
      if (isMutationMethod(request.method)) {
        let result2 = await submit(
          request,
          matches,
          routeMatch || getTargetMatch(matches, location),
          requestContext,
          dataStrategy,
          skipLoaderErrorBubbling,
          routeMatch != null,
          filterMatchesToLoad,
          skipRevalidation
        );
        return result2;
      }
      let result = await loadRouteData(
        request,
        matches,
        requestContext,
        dataStrategy,
        skipLoaderErrorBubbling,
        routeMatch,
        filterMatchesToLoad
      );
      return isResponse(result) ? result : {
        ...result,
        actionData: null,
        actionHeaders: {}
      };
    } catch (e) {
      if (isDataStrategyResult(e) && isResponse(e.result)) {
        if (e.type === "error" /* error */) {
          throw e.result;
        }
        return e.result;
      }
      if (isRedirectResponse(e)) {
        return e;
      }
      throw e;
    }
  }
  async function submit(request, matches, actionMatch, requestContext, dataStrategy, skipLoaderErrorBubbling, isRouteRequest, filterMatchesToLoad, skipRevalidation) {
    let result;
    if (!actionMatch.route.action && !actionMatch.route.lazy) {
      let error = getInternalRouterError(405, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: actionMatch.route.id
      });
      if (isRouteRequest) {
        throw error;
      }
      result = {
        type: "error" /* error */,
        error
      };
    } else {
      let results = await callDataStrategy(
        "action",
        request,
        [actionMatch],
        matches,
        isRouteRequest,
        requestContext,
        dataStrategy
      );
      result = results[actionMatch.route.id];
      if (request.signal.aborted) {
        throwStaticHandlerAbortedError(request, isRouteRequest);
      }
    }
    if (isRedirectResult(result)) {
      throw new Response(null, {
        status: result.response.status,
        headers: {
          Location: result.response.headers.get("Location")
        }
      });
    }
    if (isRouteRequest) {
      if (isErrorResult(result)) {
        throw result.error;
      }
      return {
        matches: [actionMatch],
        loaderData: {},
        actionData: { [actionMatch.route.id]: result.data },
        errors: null,
        // Note: statusCode + headers are unused here since queryRoute will
        // return the raw Response or value
        statusCode: 200,
        loaderHeaders: {},
        actionHeaders: {}
      };
    }
    if (skipRevalidation) {
      if (isErrorResult(result)) {
        let boundaryMatch = skipLoaderErrorBubbling ? actionMatch : findNearestBoundary(matches, actionMatch.route.id);
        return {
          statusCode: isRouteErrorResponse(result.error) ? result.error.status : result.statusCode != null ? result.statusCode : 500,
          actionData: null,
          actionHeaders: {
            ...result.headers ? { [actionMatch.route.id]: result.headers } : {}
          },
          matches,
          loaderData: {},
          errors: {
            [boundaryMatch.route.id]: result.error
          },
          loaderHeaders: {}
        };
      } else {
        return {
          actionData: {
            [actionMatch.route.id]: result.data
          },
          actionHeaders: result.headers ? { [actionMatch.route.id]: result.headers } : {},
          matches,
          loaderData: {},
          errors: null,
          statusCode: result.statusCode || 200,
          loaderHeaders: {}
        };
      }
    }
    let loaderRequest = new Request(request.url, {
      headers: request.headers,
      redirect: request.redirect,
      signal: request.signal
    });
    if (isErrorResult(result)) {
      let boundaryMatch = skipLoaderErrorBubbling ? actionMatch : findNearestBoundary(matches, actionMatch.route.id);
      let handlerContext2 = await loadRouteData(
        loaderRequest,
        matches,
        requestContext,
        dataStrategy,
        skipLoaderErrorBubbling,
        null,
        filterMatchesToLoad,
        [boundaryMatch.route.id, result]
      );
      return {
        ...handlerContext2,
        statusCode: isRouteErrorResponse(result.error) ? result.error.status : result.statusCode != null ? result.statusCode : 500,
        actionData: null,
        actionHeaders: {
          ...result.headers ? { [actionMatch.route.id]: result.headers } : {}
        }
      };
    }
    let handlerContext = await loadRouteData(
      loaderRequest,
      matches,
      requestContext,
      dataStrategy,
      skipLoaderErrorBubbling,
      null,
      filterMatchesToLoad
    );
    return {
      ...handlerContext,
      actionData: {
        [actionMatch.route.id]: result.data
      },
      // action status codes take precedence over loader status codes
      ...result.statusCode ? { statusCode: result.statusCode } : {},
      actionHeaders: result.headers ? { [actionMatch.route.id]: result.headers } : {}
    };
  }
  async function loadRouteData(request, matches, requestContext, dataStrategy, skipLoaderErrorBubbling, routeMatch, filterMatchesToLoad, pendingActionResult) {
    let isRouteRequest = routeMatch != null;
    if (isRouteRequest && !routeMatch?.route.loader && !routeMatch?.route.lazy) {
      throw getInternalRouterError(400, {
        method: request.method,
        pathname: new URL(request.url).pathname,
        routeId: routeMatch?.route.id
      });
    }
    let requestMatches = routeMatch ? [routeMatch] : pendingActionResult && isErrorResult(pendingActionResult[1]) ? getLoaderMatchesUntilBoundary(matches, pendingActionResult[0]) : matches;
    let matchesToLoad = requestMatches.filter(
      (m) => (m.route.loader || m.route.lazy) && (!filterMatchesToLoad || filterMatchesToLoad(m))
    );
    if (matchesToLoad.length === 0) {
      return {
        matches,
        // Add a null for all matched routes for proper revalidation on the client
        loaderData: matches.reduce(
          (acc, m) => Object.assign(acc, { [m.route.id]: null }),
          {}
        ),
        errors: pendingActionResult && isErrorResult(pendingActionResult[1]) ? {
          [pendingActionResult[0]]: pendingActionResult[1].error
        } : null,
        statusCode: 200,
        loaderHeaders: {}
      };
    }
    let results = await callDataStrategy(
      "loader",
      request,
      matchesToLoad,
      matches,
      isRouteRequest,
      requestContext,
      dataStrategy
    );
    if (request.signal.aborted) {
      throwStaticHandlerAbortedError(request, isRouteRequest);
    }
    let handlerContext = processRouteLoaderData(
      matches,
      results,
      pendingActionResult,
      true,
      skipLoaderErrorBubbling
    );
    let executedLoaders = new Set(
      matchesToLoad.map((match) => match.route.id)
    );
    matches.forEach((match) => {
      if (!executedLoaders.has(match.route.id)) {
        handlerContext.loaderData[match.route.id] = null;
      }
    });
    return {
      ...handlerContext,
      matches
    };
  }
  async function callDataStrategy(type, request, matchesToLoad, matches, isRouteRequest, requestContext, dataStrategy) {
    let results = await callDataStrategyImpl(
      dataStrategy || defaultDataStrategy,
      type,
      request,
      matchesToLoad,
      matches,
      null,
      manifest,
      mapRouteProperties2,
      requestContext,
      false
      // middleware not done via dataStrategy in the static handler
    );
    let dataResults = {};
    await Promise.all(
      matches.map(async (match) => {
        if (!(match.route.id in results)) {
          return;
        }
        let result = results[match.route.id];
        if (isRedirectDataStrategyResult(result)) {
          let response = result.result;
          throw normalizeRelativeRoutingRedirectResponse(
            response,
            request,
            match.route.id,
            matches,
            basename
          );
        }
        if (isResponse(result.result) && isRouteRequest) {
          throw result;
        }
        dataResults[match.route.id] = await convertDataStrategyResultToDataResult(result);
      })
    );
    return dataResults;
  }
  return {
    dataRoutes,
    query,
    queryRoute
  };
}
function getStaticContextFromError(routes, handlerContext, error, boundaryId) {
  let errorBoundaryId = boundaryId || handlerContext._deepestRenderedBoundaryId || routes[0].id;
  return {
    ...handlerContext,
    statusCode: isRouteErrorResponse(error) ? error.status : 500,
    errors: {
      [errorBoundaryId]: error
    }
  };
}
function throwStaticHandlerAbortedError(request, isRouteRequest) {
  if (request.signal.reason !== void 0) {
    throw request.signal.reason;
  }
  let method = isRouteRequest ? "queryRoute" : "query";
  throw new Error(
    `${method}() call aborted without an \`AbortSignal.reason\`: ${request.method} ${request.url}`
  );
}
function isSubmissionNavigation(opts) {
  return opts != null && ("formData" in opts && opts.formData != null || "body" in opts && opts.body !== void 0);
}
function normalizeTo(location, matches, basename, to, fromRouteId, relative) {
  let contextualMatches;
  let activeRouteMatch;
  if (fromRouteId) {
    contextualMatches = [];
    for (let match of matches) {
      contextualMatches.push(match);
      if (match.route.id === fromRouteId) {
        activeRouteMatch = match;
        break;
      }
    }
  } else {
    contextualMatches = matches;
    activeRouteMatch = matches[matches.length - 1];
  }
  let path = resolveTo(
    to ? to : ".",
    getResolveToMatches(contextualMatches),
    stripBasename(location.pathname, basename) || location.pathname,
    relative === "path"
  );
  if (to == null) {
    path.search = location.search;
    path.hash = location.hash;
  }
  if ((to == null || to === "" || to === ".") && activeRouteMatch) {
    let nakedIndex = hasNakedIndexQuery(path.search);
    if (activeRouteMatch.route.index && !nakedIndex) {
      path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
    } else if (!activeRouteMatch.route.index && nakedIndex) {
      let params = new URLSearchParams(path.search);
      let indexValues = params.getAll("index");
      params.delete("index");
      indexValues.filter((v) => v).forEach((v) => params.append("index", v));
      let qs = params.toString();
      path.search = qs ? `?${qs}` : "";
    }
  }
  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
function normalizeNavigateOptions(isFetcher, path, opts) {
  if (!opts || !isSubmissionNavigation(opts)) {
    return { path };
  }
  if (opts.formMethod && !isValidMethod(opts.formMethod)) {
    return {
      path,
      error: getInternalRouterError(405, { method: opts.formMethod })
    };
  }
  let getInvalidBodyError = () => ({
    path,
    error: getInternalRouterError(400, { type: "invalid-body" })
  });
  let rawFormMethod = opts.formMethod || "get";
  let formMethod = rawFormMethod.toUpperCase();
  let formAction = stripHashFromPath(path);
  if (opts.body !== void 0) {
    if (opts.formEncType === "text/plain") {
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      let text = typeof opts.body === "string" ? opts.body : opts.body instanceof FormData || opts.body instanceof URLSearchParams ? (
        // https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#plain-text-form-data
        Array.from(opts.body.entries()).reduce(
          (acc, [name, value]) => `${acc}${name}=${value}
`,
          ""
        )
      ) : String(opts.body);
      return {
        path,
        submission: {
          formMethod,
          formAction,
          formEncType: opts.formEncType,
          formData: void 0,
          json: void 0,
          text
        }
      };
    } else if (opts.formEncType === "application/json") {
      if (!isMutationMethod(formMethod)) {
        return getInvalidBodyError();
      }
      try {
        let json = typeof opts.body === "string" ? JSON.parse(opts.body) : opts.body;
        return {
          path,
          submission: {
            formMethod,
            formAction,
            formEncType: opts.formEncType,
            formData: void 0,
            json,
            text: void 0
          }
        };
      } catch (e) {
        return getInvalidBodyError();
      }
    }
  }
  invariant(
    typeof FormData === "function",
    "FormData is not available in this environment"
  );
  let searchParams;
  let formData;
  if (opts.formData) {
    searchParams = convertFormDataToSearchParams(opts.formData);
    formData = opts.formData;
  } else if (opts.body instanceof FormData) {
    searchParams = convertFormDataToSearchParams(opts.body);
    formData = opts.body;
  } else if (opts.body instanceof URLSearchParams) {
    searchParams = opts.body;
    formData = convertSearchParamsToFormData(searchParams);
  } else if (opts.body == null) {
    searchParams = new URLSearchParams();
    formData = new FormData();
  } else {
    try {
      searchParams = new URLSearchParams(opts.body);
      formData = convertSearchParamsToFormData(searchParams);
    } catch (e) {
      return getInvalidBodyError();
    }
  }
  let submission = {
    formMethod,
    formAction,
    formEncType: opts && opts.formEncType || "application/x-www-form-urlencoded",
    formData,
    json: void 0,
    text: void 0
  };
  if (isMutationMethod(submission.formMethod)) {
    return { path, submission };
  }
  let parsedPath = parsePath(path);
  if (isFetcher && parsedPath.search && hasNakedIndexQuery(parsedPath.search)) {
    searchParams.append("index", "");
  }
  parsedPath.search = `?${searchParams}`;
  return { path: createPath(parsedPath), submission };
}
function getLoaderMatchesUntilBoundary(matches, boundaryId, includeBoundary = false) {
  let index = matches.findIndex((m) => m.route.id === boundaryId);
  if (index >= 0) {
    return matches.slice(0, includeBoundary ? index + 1 : index);
  }
  return matches;
}
function getMatchesToLoad(history, state, matches, submission, location, initialHydration, isRevalidationRequired, cancelledFetcherLoads, fetchersQueuedForDeletion, fetchLoadMatches, fetchRedirectIds, routesToUse, basename, pendingActionResult) {
  let actionResult = pendingActionResult ? isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : pendingActionResult[1].data : void 0;
  let currentUrl = history.createURL(state.location);
  let nextUrl = history.createURL(location);
  let boundaryMatches = matches;
  if (initialHydration && state.errors) {
    boundaryMatches = getLoaderMatchesUntilBoundary(
      matches,
      Object.keys(state.errors)[0],
      true
    );
  } else if (pendingActionResult && isErrorResult(pendingActionResult[1])) {
    boundaryMatches = getLoaderMatchesUntilBoundary(
      matches,
      pendingActionResult[0]
    );
  }
  let actionStatus = pendingActionResult ? pendingActionResult[1].statusCode : void 0;
  let shouldSkipRevalidation = actionStatus && actionStatus >= 400;
  let navigationMatches = boundaryMatches.filter((match, index) => {
    let { route } = match;
    if (route.lazy) {
      return true;
    }
    if (route.loader == null) {
      return false;
    }
    if (initialHydration) {
      return shouldLoadRouteOnHydration(route, state.loaderData, state.errors);
    }
    if (isNewLoader(state.loaderData, state.matches[index], match)) {
      return true;
    }
    let currentRouteMatch = state.matches[index];
    let nextRouteMatch = match;
    return shouldRevalidateLoader(match, {
      currentUrl,
      currentParams: currentRouteMatch.params,
      nextUrl,
      nextParams: nextRouteMatch.params,
      ...submission,
      actionResult,
      actionStatus,
      defaultShouldRevalidate: shouldSkipRevalidation ? false : (
        // Forced revalidation due to submission, useRevalidator, or X-Remix-Revalidate
        isRevalidationRequired || currentUrl.pathname + currentUrl.search === nextUrl.pathname + nextUrl.search || // Search params affect all loaders
        currentUrl.search !== nextUrl.search || isNewRouteInstance(currentRouteMatch, nextRouteMatch)
      )
    });
  });
  let revalidatingFetchers = [];
  fetchLoadMatches.forEach((f, key) => {
    if (initialHydration || !matches.some((m) => m.route.id === f.routeId) || fetchersQueuedForDeletion.has(key)) {
      return;
    }
    let fetcherMatches = matchRoutes(routesToUse, f.path, basename);
    if (!fetcherMatches) {
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: null,
        match: null,
        controller: null
      });
      return;
    }
    let fetcher = state.fetchers.get(key);
    let fetcherMatch = getTargetMatch(fetcherMatches, f.path);
    let shouldRevalidate = false;
    if (fetchRedirectIds.has(key)) {
      shouldRevalidate = false;
    } else if (cancelledFetcherLoads.has(key)) {
      cancelledFetcherLoads.delete(key);
      shouldRevalidate = true;
    } else if (fetcher && fetcher.state !== "idle" && fetcher.data === void 0) {
      shouldRevalidate = isRevalidationRequired;
    } else {
      shouldRevalidate = shouldRevalidateLoader(fetcherMatch, {
        currentUrl,
        currentParams: state.matches[state.matches.length - 1].params,
        nextUrl,
        nextParams: matches[matches.length - 1].params,
        ...submission,
        actionResult,
        actionStatus,
        defaultShouldRevalidate: shouldSkipRevalidation ? false : isRevalidationRequired
      });
    }
    if (shouldRevalidate) {
      revalidatingFetchers.push({
        key,
        routeId: f.routeId,
        path: f.path,
        matches: fetcherMatches,
        match: fetcherMatch,
        controller: new AbortController()
      });
    }
  });
  return [navigationMatches, revalidatingFetchers];
}
function shouldLoadRouteOnHydration(route, loaderData, errors) {
  if (route.lazy) {
    return true;
  }
  if (!route.loader) {
    return false;
  }
  let hasData = loaderData != null && loaderData[route.id] !== void 0;
  let hasError = errors != null && errors[route.id] !== void 0;
  if (!hasData && hasError) {
    return false;
  }
  if (typeof route.loader === "function" && route.loader.hydrate === true) {
    return true;
  }
  return !hasData && !hasError;
}
function isNewLoader(currentLoaderData, currentMatch, match) {
  let isNew = (
    // [a] -> [a, b]
    !currentMatch || // [a, b] -> [a, c]
    match.route.id !== currentMatch.route.id
  );
  let isMissingData = !currentLoaderData.hasOwnProperty(match.route.id);
  return isNew || isMissingData;
}
function isNewRouteInstance(currentMatch, match) {
  let currentPath = currentMatch.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    currentMatch.pathname !== match.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    currentPath != null && currentPath.endsWith("*") && currentMatch.params["*"] !== match.params["*"]
  );
}
function shouldRevalidateLoader(loaderMatch, arg) {
  if (loaderMatch.route.shouldRevalidate) {
    let routeChoice = loaderMatch.route.shouldRevalidate(arg);
    if (typeof routeChoice === "boolean") {
      return routeChoice;
    }
  }
  return arg.defaultShouldRevalidate;
}
function patchRoutesImpl(routeId, children, routesToUse, manifest, mapRouteProperties2) {
  let childrenToPatch;
  if (routeId) {
    let route = manifest[routeId];
    invariant(
      route,
      `No route found to patch children into: routeId = ${routeId}`
    );
    if (!route.children) {
      route.children = [];
    }
    childrenToPatch = route.children;
  } else {
    childrenToPatch = routesToUse;
  }
  let uniqueChildren = children.filter(
    (newRoute) => !childrenToPatch.some(
      (existingRoute) => isSameRoute(newRoute, existingRoute)
    )
  );
  let newRoutes = convertRoutesToDataRoutes(
    uniqueChildren,
    mapRouteProperties2,
    [routeId || "_", "patch", String(childrenToPatch?.length || "0")],
    manifest
  );
  childrenToPatch.push(...newRoutes);
}
function isSameRoute(newRoute, existingRoute) {
  if ("id" in newRoute && "id" in existingRoute && newRoute.id === existingRoute.id) {
    return true;
  }
  if (!(newRoute.index === existingRoute.index && newRoute.path === existingRoute.path && newRoute.caseSensitive === existingRoute.caseSensitive)) {
    return false;
  }
  if ((!newRoute.children || newRoute.children.length === 0) && (!existingRoute.children || existingRoute.children.length === 0)) {
    return true;
  }
  return newRoute.children.every(
    (aChild, i) => existingRoute.children?.some((bChild) => isSameRoute(aChild, bChild))
  );
}
async function loadLazyRouteModule(route, mapRouteProperties2, manifest) {
  if (!route.lazy) {
    return;
  }
  let lazyRoute = await route.lazy();
  if (!route.lazy) {
    return;
  }
  let routeToUpdate = manifest[route.id];
  invariant(routeToUpdate, "No route found in manifest");
  let routeUpdates = {};
  for (let lazyRouteProperty in lazyRoute) {
    let staticRouteValue = routeToUpdate[lazyRouteProperty];
    let isPropertyStaticallyDefined = staticRouteValue !== void 0 && // This property isn't static since it should always be updated based
    // on the route updates
    lazyRouteProperty !== "hasErrorBoundary";
    warning(
      !isPropertyStaticallyDefined,
      `Route "${routeToUpdate.id}" has a static property "${lazyRouteProperty}" defined but its lazy function is also returning a value for this property. The lazy route property "${lazyRouteProperty}" will be ignored.`
    );
    if (!isPropertyStaticallyDefined && !immutableRouteKeys.has(lazyRouteProperty)) {
      routeUpdates[lazyRouteProperty] = lazyRoute[lazyRouteProperty];
    }
  }
  Object.assign(routeToUpdate, routeUpdates);
  Object.assign(routeToUpdate, {
    // To keep things framework agnostic, we use the provided `mapRouteProperties`
    // function to set the framework-aware properties (`element`/`hasErrorBoundary`)
    // since the logic will differ between frameworks.
    ...mapRouteProperties2(routeToUpdate),
    lazy: void 0
  });
}
async function defaultDataStrategy(args) {
  let matchesToLoad = args.matches.filter((m) => m.shouldLoad);
  let keyedResults = {};
  let results = await Promise.all(matchesToLoad.map((m) => m.resolve()));
  results.forEach((result, i) => {
    keyedResults[matchesToLoad[i].route.id] = result;
  });
  return keyedResults;
}
async function defaultDataStrategyWithMiddleware(args) {
  if (!args.matches.some((m) => m.route.unstable_middleware)) {
    return defaultDataStrategy(args);
  }
  return runMiddlewarePipeline(
    args,
    false,
    () => defaultDataStrategy(args),
    (e) => ({ [e.routeId]: { type: "error", result: e.error } })
  );
}
async function runMiddlewarePipeline(args, propagateResult, handler, errorHandler) {
  let { matches, request, params, context } = args;
  let middlewareState = {
    handlerResult: void 0,
    propagateResult
  };
  try {
    let tuples = matches.flatMap(
      (m) => m.route.unstable_middleware ? m.route.unstable_middleware.map((fn) => [m.route.id, fn]) : []
    );
    let result = await callRouteMiddleware(
      { request, params, context },
      tuples,
      middlewareState,
      handler
    );
    return middlewareState.propagateResult ? result : middlewareState.handlerResult;
  } catch (e) {
    if (!(e instanceof MiddlewareError)) {
      throw e;
    }
    let result = await errorHandler(e);
    if (propagateResult || !middlewareState.handlerResult) {
      return result;
    }
    return Object.assign(middlewareState.handlerResult, result);
  }
}
var MiddlewareError = class {
  constructor(routeId, error) {
    this.routeId = routeId;
    this.error = error;
  }
};
async function callRouteMiddleware(args, middlewares, middlewareState, handler, idx = 0) {
  let { request } = args;
  if (request.signal.aborted) {
    if (request.signal.reason) {
      throw request.signal.reason;
    }
    throw new Error(
      `Request aborted without an \`AbortSignal.reason\`: ${request.method} ${request.url}`
    );
  }
  let tuple = middlewares[idx];
  if (!tuple) {
    middlewareState.handlerResult = await handler();
    return middlewareState.handlerResult;
  }
  let [routeId, middleware] = tuple;
  let nextCalled = false;
  let nextResult = void 0;
  let next = async () => {
    if (nextCalled) {
      throw new Error("You may only call `next()` once per middleware");
    }
    nextCalled = true;
    let result = await callRouteMiddleware(
      args,
      middlewares,
      middlewareState,
      handler,
      idx + 1
    );
    if (middlewareState.propagateResult) {
      nextResult = result;
      return nextResult;
    }
  };
  try {
    let result = await middleware(
      {
        request: args.request,
        params: args.params,
        context: args.context
      },
      next
    );
    if (nextCalled) {
      if (result === void 0) {
        return nextResult;
      } else {
        return result;
      }
    } else {
      return next();
    }
  } catch (e) {
    if (e instanceof MiddlewareError) {
      throw e;
    }
    throw new MiddlewareError(routeId, e);
  }
}
async function callDataStrategyImpl(dataStrategyImpl, type, request, matchesToLoad, matches, fetcherKey, manifest, mapRouteProperties2, scopedContext, enableMiddleware) {
  let loadRouteDefinitionsPromises = matches.map(
    (m) => m.route.lazy ? loadLazyRouteModule(m.route, mapRouteProperties2, manifest) : void 0
  );
  if (enableMiddleware) {
    await Promise.all(loadRouteDefinitionsPromises);
  }
  let dsMatches = matches.map((match, i) => {
    let loadRoutePromise = loadRouteDefinitionsPromises[i];
    let shouldLoad = matchesToLoad.some((m) => m.route.id === match.route.id);
    let resolve = async (handlerOverride) => {
      if (handlerOverride && request.method === "GET" && (match.route.lazy || match.route.loader)) {
        shouldLoad = true;
      }
      return shouldLoad ? callLoaderOrAction(
        type,
        request,
        match,
        loadRoutePromise,
        handlerOverride,
        scopedContext
      ) : Promise.resolve({ type: "data" /* data */, result: void 0 });
    };
    return {
      ...match,
      shouldLoad,
      resolve
    };
  });
  let results = await dataStrategyImpl({
    matches: dsMatches,
    request,
    params: matches[0].params,
    fetcherKey,
    context: scopedContext
  });
  try {
    await Promise.all(loadRouteDefinitionsPromises);
  } catch (e) {
  }
  return results;
}
async function callLoaderOrAction(type, request, match, loadRoutePromise, handlerOverride, scopedContext) {
  let result;
  let onReject;
  let runHandler = (handler) => {
    let reject;
    let abortPromise = new Promise((_, r) => reject = r);
    onReject = () => reject();
    request.signal.addEventListener("abort", onReject);
    let actualHandler = (ctx) => {
      if (typeof handler !== "function") {
        return Promise.reject(
          new Error(
            `You cannot call the handler for a route which defines a boolean "${type}" [routeId: ${match.route.id}]`
          )
        );
      }
      return handler(
        {
          request,
          params: match.params,
          context: scopedContext
        },
        ...ctx !== void 0 ? [ctx] : []
      );
    };
    let handlerPromise = (async () => {
      try {
        let val = await (handlerOverride ? handlerOverride((ctx) => actualHandler(ctx)) : actualHandler());
        return { type: "data", result: val };
      } catch (e) {
        return { type: "error", result: e };
      }
    })();
    return Promise.race([handlerPromise, abortPromise]);
  };
  try {
    let handler = match.route[type];
    if (loadRoutePromise) {
      if (handler) {
        let handlerError;
        let [value] = await Promise.all([
          // If the handler throws, don't let it immediately bubble out,
          // since we need to let the lazy() execution finish so we know if this
          // route has a boundary that can handle the error
          runHandler(handler).catch((e) => {
            handlerError = e;
          }),
          loadRoutePromise
        ]);
        if (handlerError !== void 0) {
          throw handlerError;
        }
        result = value;
      } else {
        await loadRoutePromise;
        handler = match.route[type];
        if (handler) {
          result = await runHandler(handler);
        } else if (type === "action") {
          let url = new URL(request.url);
          let pathname = url.pathname + url.search;
          throw getInternalRouterError(405, {
            method: request.method,
            pathname,
            routeId: match.route.id
          });
        } else {
          return { type: "data" /* data */, result: void 0 };
        }
      }
    } else if (!handler) {
      let url = new URL(request.url);
      let pathname = url.pathname + url.search;
      throw getInternalRouterError(404, {
        pathname
      });
    } else {
      result = await runHandler(handler);
    }
  } catch (e) {
    return { type: "error" /* error */, result: e };
  } finally {
    if (onReject) {
      request.signal.removeEventListener("abort", onReject);
    }
  }
  return result;
}
async function convertDataStrategyResultToDataResult(dataStrategyResult) {
  let { result, type } = dataStrategyResult;
  if (isResponse(result)) {
    let data2;
    try {
      let contentType = result.headers.get("Content-Type");
      if (contentType && /\bapplication\/json\b/.test(contentType)) {
        if (result.body == null) {
          data2 = null;
        } else {
          data2 = await result.json();
        }
      } else {
        data2 = await result.text();
      }
    } catch (e) {
      return { type: "error" /* error */, error: e };
    }
    if (type === "error" /* error */) {
      return {
        type: "error" /* error */,
        error: new ErrorResponseImpl(result.status, result.statusText, data2),
        statusCode: result.status,
        headers: result.headers
      };
    }
    return {
      type: "data" /* data */,
      data: data2,
      statusCode: result.status,
      headers: result.headers
    };
  }
  if (type === "error" /* error */) {
    if (isDataWithResponseInit(result)) {
      if (result.data instanceof Error) {
        return {
          type: "error" /* error */,
          error: result.data,
          statusCode: result.init?.status,
          headers: result.init?.headers ? new Headers(result.init.headers) : void 0
        };
      }
      return {
        type: "error" /* error */,
        error: new ErrorResponseImpl(
          result.init?.status || 500,
          void 0,
          result.data
        ),
        statusCode: isRouteErrorResponse(result) ? result.status : void 0,
        headers: result.init?.headers ? new Headers(result.init.headers) : void 0
      };
    }
    return {
      type: "error" /* error */,
      error: result,
      statusCode: isRouteErrorResponse(result) ? result.status : void 0
    };
  }
  if (isDataWithResponseInit(result)) {
    return {
      type: "data" /* data */,
      data: result.data,
      statusCode: result.init?.status,
      headers: result.init?.headers ? new Headers(result.init.headers) : void 0
    };
  }
  return { type: "data" /* data */, data: result };
}
function normalizeRelativeRoutingRedirectResponse(response, request, routeId, matches, basename) {
  let location = response.headers.get("Location");
  invariant(
    location,
    "Redirects returned/thrown from loaders/actions must have a Location header"
  );
  if (!ABSOLUTE_URL_REGEX.test(location)) {
    let trimmedMatches = matches.slice(
      0,
      matches.findIndex((m) => m.route.id === routeId) + 1
    );
    location = normalizeTo(
      new URL(request.url),
      trimmedMatches,
      basename,
      location
    );
    response.headers.set("Location", location);
  }
  return response;
}
function normalizeRedirectLocation(location, currentUrl, basename) {
  if (ABSOLUTE_URL_REGEX.test(location)) {
    let normalizedLocation = location;
    let url = normalizedLocation.startsWith("//") ? new URL(currentUrl.protocol + normalizedLocation) : new URL(normalizedLocation);
    let isSameBasename = stripBasename(url.pathname, basename) != null;
    if (url.origin === currentUrl.origin && isSameBasename) {
      return url.pathname + url.search + url.hash;
    }
  }
  return location;
}
function createClientSideRequest(history, location, signal, submission) {
  let url = history.createURL(stripHashFromPath(location)).toString();
  let init = { signal };
  if (submission && isMutationMethod(submission.formMethod)) {
    let { formMethod, formEncType } = submission;
    init.method = formMethod.toUpperCase();
    if (formEncType === "application/json") {
      init.headers = new Headers({ "Content-Type": formEncType });
      init.body = JSON.stringify(submission.json);
    } else if (formEncType === "text/plain") {
      init.body = submission.text;
    } else if (formEncType === "application/x-www-form-urlencoded" && submission.formData) {
      init.body = convertFormDataToSearchParams(submission.formData);
    } else {
      init.body = submission.formData;
    }
  }
  return new Request(url, init);
}
function convertFormDataToSearchParams(formData) {
  let searchParams = new URLSearchParams();
  for (let [key, value] of formData.entries()) {
    searchParams.append(key, typeof value === "string" ? value : value.name);
  }
  return searchParams;
}
function convertSearchParamsToFormData(searchParams) {
  let formData = new FormData();
  for (let [key, value] of searchParams.entries()) {
    formData.append(key, value);
  }
  return formData;
}
function processRouteLoaderData(matches, results, pendingActionResult, isStaticHandler = false, skipLoaderErrorBubbling = false) {
  let loaderData = {};
  let errors = null;
  let statusCode;
  let foundError = false;
  let loaderHeaders = {};
  let pendingError = pendingActionResult && isErrorResult(pendingActionResult[1]) ? pendingActionResult[1].error : void 0;
  matches.forEach((match) => {
    if (!(match.route.id in results)) {
      return;
    }
    let id = match.route.id;
    let result = results[id];
    invariant(
      !isRedirectResult(result),
      "Cannot handle redirect results in processLoaderData"
    );
    if (isErrorResult(result)) {
      let error = result.error;
      if (pendingError !== void 0) {
        error = pendingError;
        pendingError = void 0;
      }
      errors = errors || {};
      if (skipLoaderErrorBubbling) {
        errors[id] = error;
      } else {
        let boundaryMatch = findNearestBoundary(matches, id);
        if (errors[boundaryMatch.route.id] == null) {
          errors[boundaryMatch.route.id] = error;
        }
      }
      if (!isStaticHandler) {
        loaderData[id] = ResetLoaderDataSymbol;
      }
      if (!foundError) {
        foundError = true;
        statusCode = isRouteErrorResponse(result.error) ? result.error.status : 500;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    } else {
      loaderData[id] = result.data;
      if (result.statusCode && result.statusCode !== 200 && !foundError) {
        statusCode = result.statusCode;
      }
      if (result.headers) {
        loaderHeaders[id] = result.headers;
      }
    }
  });
  if (pendingError !== void 0 && pendingActionResult) {
    errors = { [pendingActionResult[0]]: pendingError };
    loaderData[pendingActionResult[0]] = void 0;
  }
  return {
    loaderData,
    errors,
    statusCode: statusCode || 200,
    loaderHeaders
  };
}
function processLoaderData(state, matches, results, pendingActionResult, revalidatingFetchers, fetcherResults) {
  let { loaderData, errors } = processRouteLoaderData(
    matches,
    results,
    pendingActionResult
  );
  revalidatingFetchers.forEach((rf) => {
    let { key, match, controller } = rf;
    let result = fetcherResults[key];
    invariant(result, "Did not find corresponding fetcher result");
    if (controller && controller.signal.aborted) {
      return;
    } else if (isErrorResult(result)) {
      let boundaryMatch = findNearestBoundary(state.matches, match?.route.id);
      if (!(errors && errors[boundaryMatch.route.id])) {
        errors = {
          ...errors,
          [boundaryMatch.route.id]: result.error
        };
      }
      state.fetchers.delete(key);
    } else if (isRedirectResult(result)) {
      invariant(false, "Unhandled fetcher revalidation redirect");
    } else {
      let doneFetcher = getDoneFetcher(result.data);
      state.fetchers.set(key, doneFetcher);
    }
  });
  return { loaderData, errors };
}
function mergeLoaderData(loaderData, newLoaderData, matches, errors) {
  let mergedLoaderData = Object.entries(newLoaderData).filter(([, v]) => v !== ResetLoaderDataSymbol).reduce((merged, [k, v]) => {
    merged[k] = v;
    return merged;
  }, {});
  for (let match of matches) {
    let id = match.route.id;
    if (!newLoaderData.hasOwnProperty(id) && loaderData.hasOwnProperty(id) && match.route.loader) {
      mergedLoaderData[id] = loaderData[id];
    }
    if (errors && errors.hasOwnProperty(id)) {
      break;
    }
  }
  return mergedLoaderData;
}
function getActionDataForCommit(pendingActionResult) {
  if (!pendingActionResult) {
    return {};
  }
  return isErrorResult(pendingActionResult[1]) ? {
    // Clear out prior actionData on errors
    actionData: {}
  } : {
    actionData: {
      [pendingActionResult[0]]: pendingActionResult[1].data
    }
  };
}
function findNearestBoundary(matches, routeId) {
  let eligibleMatches = routeId ? matches.slice(0, matches.findIndex((m) => m.route.id === routeId) + 1) : [...matches];
  return eligibleMatches.reverse().find((m) => m.route.hasErrorBoundary === true) || matches[0];
}
function getShortCircuitMatches(routes) {
  let route = routes.length === 1 ? routes[0] : routes.find((r) => r.index || !r.path || r.path === "/") || {
    id: `__shim-error-route__`
  };
  return {
    matches: [
      {
        params: {},
        pathname: "",
        pathnameBase: "",
        route
      }
    ],
    route
  };
}
function getInternalRouterError(status, {
  pathname,
  routeId,
  method,
  type,
  message
} = {}) {
  let statusText = "Unknown Server Error";
  let errorMessage = "Unknown @remix-run/router error";
  if (status === 400) {
    statusText = "Bad Request";
    if (method && pathname && routeId) {
      errorMessage = `You made a ${method} request to "${pathname}" but did not provide a \`loader\` for route "${routeId}", so there is no way to handle the request.`;
    } else if (type === "invalid-body") {
      errorMessage = "Unable to encode submission body";
    }
  } else if (status === 403) {
    statusText = "Forbidden";
    errorMessage = `Route "${routeId}" does not match URL "${pathname}"`;
  } else if (status === 404) {
    statusText = "Not Found";
    errorMessage = `No route matches URL "${pathname}"`;
  } else if (status === 405) {
    statusText = "Method Not Allowed";
    if (method && pathname && routeId) {
      errorMessage = `You made a ${method.toUpperCase()} request to "${pathname}" but did not provide an \`action\` for route "${routeId}", so there is no way to handle the request.`;
    } else if (method) {
      errorMessage = `Invalid request method "${method.toUpperCase()}"`;
    }
  }
  return new ErrorResponseImpl(
    status || 500,
    statusText,
    new Error(errorMessage),
    true
  );
}
function findRedirect(results) {
  let entries = Object.entries(results);
  for (let i = entries.length - 1; i >= 0; i--) {
    let [key, result] = entries[i];
    if (isRedirectResult(result)) {
      return { key, result };
    }
  }
}
function stripHashFromPath(path) {
  let parsedPath = typeof path === "string" ? parsePath(path) : path;
  return createPath({ ...parsedPath, hash: "" });
}
function isHashChangeOnly(a, b) {
  if (a.pathname !== b.pathname || a.search !== b.search) {
    return false;
  }
  if (a.hash === "") {
    return b.hash !== "";
  } else if (a.hash === b.hash) {
    return true;
  } else if (b.hash !== "") {
    return true;
  }
  return false;
}
function isDataStrategyResult(result) {
  return result != null && typeof result === "object" && "type" in result && "result" in result && (result.type === "data" /* data */ || result.type === "error" /* error */);
}
function isRedirectDataStrategyResult(result) {
  return isResponse(result.result) && redirectStatusCodes.has(result.result.status);
}
function isErrorResult(result) {
  return result.type === "error" /* error */;
}
function isRedirectResult(result) {
  return (result && result.type) === "redirect" /* redirect */;
}
function isDataWithResponseInit(value) {
  return typeof value === "object" && value != null && "type" in value && "data" in value && "init" in value && value.type === "DataWithResponseInit";
}
function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isRedirectStatusCode(statusCode) {
  return redirectStatusCodes.has(statusCode);
}
function isRedirectResponse(result) {
  return isResponse(result) && isRedirectStatusCode(result.status) && result.headers.has("Location");
}
function isValidMethod(method) {
  return validRequestMethods.has(method.toUpperCase());
}
function isMutationMethod(method) {
  return validMutationMethods.has(method.toUpperCase());
}
function hasNakedIndexQuery(search) {
  return new URLSearchParams(search).getAll("index").some((v) => v === "");
}
function getTargetMatch(matches, location) {
  let search = typeof location === "string" ? parsePath(location).search : location.search;
  if (matches[matches.length - 1].route.index && hasNakedIndexQuery(search || "")) {
    return matches[matches.length - 1];
  }
  let pathMatches = getPathContributingMatches(matches);
  return pathMatches[pathMatches.length - 1];
}
function getSubmissionFromNavigation(navigation) {
  let { formMethod, formAction, formEncType, text, formData, json } = navigation;
  if (!formMethod || !formAction || !formEncType) {
    return;
  }
  if (text != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: void 0,
      json: void 0,
      text
    };
  } else if (formData != null) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData,
      json: void 0,
      text: void 0
    };
  } else if (json !== void 0) {
    return {
      formMethod,
      formAction,
      formEncType,
      formData: void 0,
      json,
      text: void 0
    };
  }
}
function getLoadingNavigation(location, submission) {
  if (submission) {
    let navigation = {
      state: "loading",
      location,
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text
    };
    return navigation;
  } else {
    let navigation = {
      state: "loading",
      location,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0
    };
    return navigation;
  }
}
function getSubmittingNavigation(location, submission) {
  let navigation = {
    state: "submitting",
    location,
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text
  };
  return navigation;
}
function getLoadingFetcher(submission, data2) {
  if (submission) {
    let fetcher = {
      state: "loading",
      formMethod: submission.formMethod,
      formAction: submission.formAction,
      formEncType: submission.formEncType,
      formData: submission.formData,
      json: submission.json,
      text: submission.text,
      data: data2
    };
    return fetcher;
  } else {
    let fetcher = {
      state: "loading",
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      json: void 0,
      text: void 0,
      data: data2
    };
    return fetcher;
  }
}
function getSubmittingFetcher(submission, existingFetcher) {
  let fetcher = {
    state: "submitting",
    formMethod: submission.formMethod,
    formAction: submission.formAction,
    formEncType: submission.formEncType,
    formData: submission.formData,
    json: submission.json,
    text: submission.text,
    data: existingFetcher ? existingFetcher.data : void 0
  };
  return fetcher;
}
function getDoneFetcher(data2) {
  let fetcher = {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: data2
  };
  return fetcher;
}
function restoreAppliedTransitions(_window, transitions) {
  try {
    let sessionPositions = _window.sessionStorage.getItem(
      TRANSITIONS_STORAGE_KEY
    );
    if (sessionPositions) {
      let json = JSON.parse(sessionPositions);
      for (let [k, v] of Object.entries(json || {})) {
        if (v && Array.isArray(v)) {
          transitions.set(k, new Set(v || []));
        }
      }
    }
  } catch (e) {
  }
}
function persistAppliedTransitions(_window, transitions) {
  if (transitions.size > 0) {
    let json = {};
    for (let [k, v] of transitions) {
      json[k] = [...v];
    }
    try {
      _window.sessionStorage.setItem(
        TRANSITIONS_STORAGE_KEY,
        JSON.stringify(json)
      );
    } catch (error) {
      warning(
        false,
        `Failed to save applied view transitions in sessionStorage (${error}).`
      );
    }
  }
}
function createDeferred() {
  let resolve;
  let reject;
  let promise = new Promise((res, rej) => {
    resolve = async (val) => {
      res(val);
      try {
        await promise;
      } catch (e) {
      }
    };
    reject = async (error) => {
      rej(error);
      try {
        await promise;
      } catch (e) {
      }
    };
  });
  return {
    promise,
    //@ts-ignore
    resolve,
    //@ts-ignore
    reject
  };
}

// lib/components.tsx


// lib/context.ts

var DataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
DataRouterContext.displayName = "DataRouter";
var DataRouterStateContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
DataRouterStateContext.displayName = "DataRouterState";
var ViewTransitionContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  isTransitioning: false
});
ViewTransitionContext.displayName = "ViewTransition";
var FetchersContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(
  /* @__PURE__ */ new Map()
);
FetchersContext.displayName = "Fetchers";
var AwaitContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
AwaitContext.displayName = "Await";
var NavigationContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(
  null
);
NavigationContext.displayName = "Navigation";
var LocationContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(
  null
);
LocationContext.displayName = "Location";
var RouteContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
RouteContext.displayName = "Route";
var RouteErrorContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
RouteErrorContext.displayName = "RouteError";

// lib/hooks.tsx

var ENABLE_DEV_WARNINGS = true;
function useHref(to, { relative } = {}) {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useHref() may be used only in the context of a <Router> component.`
  );
  let { basename, navigator: navigator2 } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let { hash, pathname, search } = useResolvedPath(to, { relative });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator2.createHref({ pathname: joinedPathname, search, hash });
}
function useInRouterContext() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext) != null;
}
function useLocation() {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useLocation() may be used only in the context of a <Router> component.`
  );
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext).location;
}
function useNavigationType() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(LocationContext).navigationType;
}
function useMatch(pattern) {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useMatch() may be used only in the context of a <Router> component.`
  );
  let { pathname } = useLocation();
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => matchPath(pattern, decodePath(pathname)),
    [pathname, pattern]
  );
}
var navigateEffectWarning = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
function useIsomorphicLayoutEffect(cb) {
  let isStatic = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext).static;
  if (!isStatic) {
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(cb);
  }
}
function useNavigate() {
  let { isDataRoute } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useNavigate() may be used only in the context of a <Router> component.`
  );
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
  let { basename, navigator: navigator2 } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let { matches } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
  let activeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (to, options = {}) => {
      warning(activeRef.current, navigateEffectWarning);
      if (!activeRef.current) return;
      if (typeof to === "number") {
        navigator2.go(to);
        return;
      }
      let path = resolveTo(
        to,
        JSON.parse(routePathnamesJson),
        locationPathname,
        options.relative === "path"
      );
      if (dataRouterContext == null && basename !== "/") {
        path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
      }
      (!!options.replace ? navigator2.replace : navigator2.push)(
        path,
        options.state,
        options
      );
    },
    [
      basename,
      navigator2,
      routePathnamesJson,
      locationPathname,
      dataRouterContext
    ]
  );
  return navigate;
}
var OutletContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
function useOutletContext() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(OutletContext);
}
function useOutlet(context) {
  let outlet = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext).outlet;
  if (outlet) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(OutletContext.Provider, { value: context }, outlet);
  }
  return outlet;
}
function useParams() {
  let { matches } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let routeMatch = matches[matches.length - 1];
  return routeMatch ? routeMatch.params : {};
}
function useResolvedPath(to, { relative } = {}) {
  let { matches } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches));
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => resolveTo(
      to,
      JSON.parse(routePathnamesJson),
      locationPathname,
      relative === "path"
    ),
    [to, routePathnamesJson, locationPathname, relative]
  );
}
function useRoutes(routes, locationArg) {
  return useRoutesImpl(routes, locationArg);
}
function useRoutesImpl(routes, locationArg, dataRouterState, future) {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    `useRoutes() may be used only in the context of a <Router> component.`
  );
  let { navigator: navigator2, static: isStatic } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let { matches: parentMatches } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  let parentPathname = routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  let parentRoute = routeMatch && routeMatch.route;
  if (ENABLE_DEV_WARNINGS) {
    let parentPath = parentRoute && parentRoute.path || "";
    warningOnce(
      parentPathname,
      !parentRoute || parentPath.endsWith("*") || parentPath.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${parentPathname}" (under <Route path="${parentPath}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${parentPath}"> to <Route path="${parentPath === "/" ? "*" : `${parentPath}/*`}">.`
    );
  }
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    invariant(
      parentPathnameBase === "/" || parsedLocationArg.pathname?.startsWith(parentPathnameBase),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${parentPathnameBase}" but pathname "${parsedLocationArg.pathname}" was given in the \`location\` prop.`
    );
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = pathname;
  if (parentPathnameBase !== "/") {
    let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
    let segments = pathname.replace(/^\//, "").split("/");
    remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
  }
  let matches = !isStatic && dataRouterState && dataRouterState.matches && dataRouterState.matches.length > 0 ? dataRouterState.matches : matchRoutes(routes, { pathname: remainingPathname });
  if (ENABLE_DEV_WARNINGS) {
    warning(
      parentRoute || matches != null,
      `No routes matched location "${location.pathname}${location.search}${location.hash}" `
    );
    warning(
      matches == null || matches[matches.length - 1].route.element !== void 0 || matches[matches.length - 1].route.Component !== void 0 || matches[matches.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${location.pathname}${location.search}${location.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  }
  let renderedMatches = _renderMatches(
    matches && matches.map(
      (match) => Object.assign({}, match, {
        params: Object.assign({}, parentParams, match.params),
        pathname: joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator2.encodeLocation ? navigator2.encodeLocation(match.pathname).pathname : match.pathname
        ]),
        pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
          parentPathnameBase,
          // Re-encode pathnames that were decoded inside matchRoutes
          navigator2.encodeLocation ? navigator2.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
        ])
      })
    ),
    parentMatches,
    dataRouterState,
    future
  );
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      LocationContext.Provider,
      {
        value: {
          location: {
            pathname: "/",
            search: "",
            hash: "",
            state: null,
            key: "default",
            ...location
          },
          navigationType: "POP" /* Pop */
        }
      },
      renderedMatches
    );
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? `${error.status} ${error.statusText}` : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = { padding: "0.5rem", backgroundColor: lightgrey };
  let codeStyles = { padding: "2px 4px", backgroundColor: lightgrey };
  let devInfo = null;
  if (ENABLE_DEV_WARNINGS) {
    console.error(
      "Error handled by React Router default ErrorBoundary:",
      error
    );
    devInfo = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "\u{1F4BF} Hey developer \u{1F44B}"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", { style: codeStyles }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", { style: codeStyles }, "errorElement"), " prop on your route."));
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", { style: { fontStyle: "italic" } }, message), stack ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("pre", { style: preStyles }, stack) : null, devInfo);
}
var defaultErrorElement = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DefaultErrorComponent, null);
var RenderErrorBoundary = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }
    return {
      error: props.error !== void 0 ? props.error : state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error(
      "React Router caught the following error during render",
      error,
      errorInfo
    );
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider, { value: this.props.routeContext }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      RouteErrorContext.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function RenderedRoute({ routeContext, match, children }) {
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouteContext.Provider, { value: routeContext }, children);
}
function _renderMatches(matches, parentMatches = [], dataRouterState = null, future = null) {
  if (matches == null) {
    if (!dataRouterState) {
      return null;
    }
    if (dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else if (parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = dataRouterState?.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex(
      (m) => m.route.id && errors?.[m.route.id] !== void 0
    );
    invariant(
      errorIndex >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        errors
      ).join(",")}`
    );
    renderedMatches = renderedMatches.slice(
      0,
      Math.min(renderedMatches.length, errorIndex + 1)
    );
  }
  let renderFallback = false;
  let fallbackIndex = -1;
  if (dataRouterState) {
    for (let i = 0; i < renderedMatches.length; i++) {
      let match = renderedMatches[i];
      if (match.route.HydrateFallback || match.route.hydrateFallbackElement) {
        fallbackIndex = i;
      }
      if (match.route.id) {
        let { loaderData, errors: errors2 } = dataRouterState;
        let needsToRunLoader = match.route.loader && !loaderData.hasOwnProperty(match.route.id) && (!errors2 || errors2[match.route.id] === void 0);
        if (match.route.lazy || needsToRunLoader) {
          renderFallback = true;
          if (fallbackIndex >= 0) {
            renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
          } else {
            renderedMatches = [renderedMatches[0]];
          }
          break;
        }
      }
    }
  }
  return renderedMatches.reduceRight((outlet, match, index) => {
    let error;
    let shouldRenderHydrateFallback = false;
    let errorElement = null;
    let hydrateFallbackElement = null;
    if (dataRouterState) {
      error = errors && match.route.id ? errors[match.route.id] : void 0;
      errorElement = match.route.errorElement || defaultErrorElement;
      if (renderFallback) {
        if (fallbackIndex < 0 && index === 0) {
          warningOnce(
            "route-fallback",
            false,
            "No `HydrateFallback` element provided to render during initial hydration"
          );
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = null;
        } else if (fallbackIndex === index) {
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = match.route.hydrateFallbackElement || null;
        }
      }
    }
    let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (shouldRenderHydrateFallback) {
        children = hydrateFallbackElement;
      } else if (match.route.Component) {
        children = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      } else {
        children = outlet;
      }
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        RenderedRoute,
        {
          match,
          routeContext: {
            outlet,
            matches: matches2,
            isDataRoute: dataRouterState != null
          },
          children
        }
      );
    };
    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      RenderErrorBoundary,
      {
        location: dataRouterState.location,
        revalidation: dataRouterState.revalidation,
        component: errorElement,
        error,
        children: getChildren(),
        routeContext: { outlet: null, matches: matches2, isDataRoute: true }
      }
    ) : getChildren();
  }, null);
}
function getDataRouterConsoleError(hookName) {
  return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function useDataRouterContext(hookName) {
  let ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
  invariant(ctx, getDataRouterConsoleError(hookName));
  return ctx;
}
function useDataRouterState(hookName) {
  let state = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterStateContext);
  invariant(state, getDataRouterConsoleError(hookName));
  return state;
}
function useRouteContext(hookName) {
  let route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  invariant(route, getDataRouterConsoleError(hookName));
  return route;
}
function useCurrentRouteId(hookName) {
  let route = useRouteContext(hookName);
  let thisRoute = route.matches[route.matches.length - 1];
  invariant(
    thisRoute.route.id,
    `${hookName} can only be used on routes that contain a unique "id"`
  );
  return thisRoute.route.id;
}
function useRouteId() {
  return useCurrentRouteId("useRouteId" /* UseRouteId */);
}
function useNavigation() {
  let state = useDataRouterState("useNavigation" /* UseNavigation */);
  return state.navigation;
}
function useRevalidator() {
  let dataRouterContext = useDataRouterContext("useRevalidator" /* UseRevalidator */);
  let state = useDataRouterState("useRevalidator" /* UseRevalidator */);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => ({
      async revalidate() {
        await dataRouterContext.router.revalidate();
      },
      state: state.revalidation
    }),
    [dataRouterContext.router, state.revalidation]
  );
}
function useMatches() {
  let { matches, loaderData } = useDataRouterState(
    "useMatches" /* UseMatches */
  );
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => matches.map((m) => convertRouteMatchToUiMatch(m, loaderData)),
    [matches, loaderData]
  );
}
function useLoaderData() {
  let state = useDataRouterState("useLoaderData" /* UseLoaderData */);
  let routeId = useCurrentRouteId("useLoaderData" /* UseLoaderData */);
  return state.loaderData[routeId];
}
function useRouteLoaderData(routeId) {
  let state = useDataRouterState("useRouteLoaderData" /* UseRouteLoaderData */);
  return state.loaderData[routeId];
}
function useActionData() {
  let state = useDataRouterState("useActionData" /* UseActionData */);
  let routeId = useCurrentRouteId("useLoaderData" /* UseLoaderData */);
  return state.actionData ? state.actionData[routeId] : void 0;
}
function useRouteError() {
  let error = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteErrorContext);
  let state = useDataRouterState("useRouteError" /* UseRouteError */);
  let routeId = useCurrentRouteId("useRouteError" /* UseRouteError */);
  if (error !== void 0) {
    return error;
  }
  return state.errors?.[routeId];
}
function useAsyncValue() {
  let value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(AwaitContext);
  return value?._data;
}
function useAsyncError() {
  let value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(AwaitContext);
  return value?._error;
}
var blockerId = 0;
function useBlocker(shouldBlock) {
  let { router, basename } = useDataRouterContext("useBlocker" /* UseBlocker */);
  let state = useDataRouterState("useBlocker" /* UseBlocker */);
  let [blockerKey, setBlockerKey] = react__WEBPACK_IMPORTED_MODULE_0__.useState("");
  let blockerFunction = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (arg) => {
      if (typeof shouldBlock !== "function") {
        return !!shouldBlock;
      }
      if (basename === "/") {
        return shouldBlock(arg);
      }
      let { currentLocation, nextLocation, historyAction } = arg;
      return shouldBlock({
        currentLocation: {
          ...currentLocation,
          pathname: stripBasename(currentLocation.pathname, basename) || currentLocation.pathname
        },
        nextLocation: {
          ...nextLocation,
          pathname: stripBasename(nextLocation.pathname, basename) || nextLocation.pathname
        },
        historyAction
      });
    },
    [basename, shouldBlock]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let key = String(++blockerId);
    setBlockerKey(key);
    return () => router.deleteBlocker(key);
  }, [router]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blockerKey !== "") {
      router.getBlocker(blockerKey, blockerFunction);
    }
  }, [router, blockerKey, blockerFunction]);
  return blockerKey && state.blockers.has(blockerKey) ? state.blockers.get(blockerKey) : IDLE_BLOCKER;
}
function useNavigateStable() {
  let { router } = useDataRouterContext("useNavigate" /* UseNavigateStable */);
  let id = useCurrentRouteId("useNavigate" /* UseNavigateStable */);
  let activeRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    async (to, options = {}) => {
      warning(activeRef.current, navigateEffectWarning);
      if (!activeRef.current) return;
      if (typeof to === "number") {
        router.navigate(to);
      } else {
        await router.navigate(to, { fromRouteId: id, ...options });
      }
    },
    [router, id]
  );
  return navigate;
}
var alreadyWarned = {};
function warningOnce(key, cond, message) {
  if (!cond && !alreadyWarned[key]) {
    alreadyWarned[key] = true;
    warning(false, message);
  }
}

// lib/server-runtime/warnings.ts
var alreadyWarned2 = {};
function warnOnce(condition, message) {
  if (!condition && !alreadyWarned2[message]) {
    alreadyWarned2[message] = true;
    console.warn(message);
  }
}

// lib/components.tsx
var ENABLE_DEV_WARNINGS2 = true;
function mapRouteProperties(route) {
  let updates = {
    // Note: this check also occurs in createRoutesFromChildren so update
    // there if you change this -- please and thank you!
    hasErrorBoundary: route.hasErrorBoundary || route.ErrorBoundary != null || route.errorElement != null
  };
  if (route.Component) {
    if (ENABLE_DEV_WARNINGS2) {
      if (route.element) {
        warning(
          false,
          "You should not include both `Component` and `element` on your route - `Component` will be used."
        );
      }
    }
    Object.assign(updates, {
      element: react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.Component),
      Component: void 0
    });
  }
  if (route.HydrateFallback) {
    if (ENABLE_DEV_WARNINGS2) {
      if (route.hydrateFallbackElement) {
        warning(
          false,
          "You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."
        );
      }
    }
    Object.assign(updates, {
      hydrateFallbackElement: react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.HydrateFallback),
      HydrateFallback: void 0
    });
  }
  if (route.ErrorBoundary) {
    if (ENABLE_DEV_WARNINGS2) {
      if (route.errorElement) {
        warning(
          false,
          "You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."
        );
      }
    }
    Object.assign(updates, {
      errorElement: react__WEBPACK_IMPORTED_MODULE_0__.createElement(route.ErrorBoundary),
      ErrorBoundary: void 0
    });
  }
  return updates;
}
function createMemoryRouter(routes, opts) {
  return createRouter({
    basename: opts?.basename,
    unstable_getContext: opts?.unstable_getContext,
    future: opts?.future,
    history: createMemoryHistory({
      initialEntries: opts?.initialEntries,
      initialIndex: opts?.initialIndex
    }),
    hydrationData: opts?.hydrationData,
    routes,
    mapRouteProperties,
    dataStrategy: opts?.dataStrategy,
    patchRoutesOnNavigation: opts?.patchRoutesOnNavigation
  }).initialize();
}
var Deferred = class {
  constructor() {
    this.status = "pending";
    this.promise = new Promise((resolve, reject) => {
      this.resolve = (value) => {
        if (this.status === "pending") {
          this.status = "resolved";
          resolve(value);
        }
      };
      this.reject = (reason) => {
        if (this.status === "pending") {
          this.status = "rejected";
          reject(reason);
        }
      };
    });
  }
};
function RouterProvider({
  router,
  flushSync: reactDomFlushSyncImpl
}) {
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState(router.state);
  let [pendingState, setPendingState] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  let [vtContext, setVtContext] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    isTransitioning: false
  });
  let [renderDfd, setRenderDfd] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  let [transition, setTransition] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  let [interruption, setInterruption] = react__WEBPACK_IMPORTED_MODULE_0__.useState();
  let fetcherData = react__WEBPACK_IMPORTED_MODULE_0__.useRef(/* @__PURE__ */ new Map());
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (newState, { deletedFetchers, flushSync, viewTransitionOpts }) => {
      newState.fetchers.forEach((fetcher, key) => {
        if (fetcher.data !== void 0) {
          fetcherData.current.set(key, fetcher.data);
        }
      });
      deletedFetchers.forEach((key) => fetcherData.current.delete(key));
      warnOnce(
        flushSync === false || reactDomFlushSyncImpl != null,
        'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.'
      );
      let isViewTransitionAvailable = router.window != null && router.window.document != null && typeof router.window.document.startViewTransition === "function";
      warnOnce(
        viewTransitionOpts == null || isViewTransitionAvailable,
        "You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."
      );
      if (!viewTransitionOpts || !isViewTransitionAvailable) {
        if (reactDomFlushSyncImpl && flushSync) {
          reactDomFlushSyncImpl(() => setStateImpl(newState));
        } else {
          react__WEBPACK_IMPORTED_MODULE_0__.startTransition(() => setStateImpl(newState));
        }
        return;
      }
      if (reactDomFlushSyncImpl && flushSync) {
        reactDomFlushSyncImpl(() => {
          if (transition) {
            renderDfd && renderDfd.resolve();
            transition.skipTransition();
          }
          setVtContext({
            isTransitioning: true,
            flushSync: true,
            currentLocation: viewTransitionOpts.currentLocation,
            nextLocation: viewTransitionOpts.nextLocation
          });
        });
        let t = router.window.document.startViewTransition(() => {
          reactDomFlushSyncImpl(() => setStateImpl(newState));
        });
        t.finished.finally(() => {
          reactDomFlushSyncImpl(() => {
            setRenderDfd(void 0);
            setTransition(void 0);
            setPendingState(void 0);
            setVtContext({ isTransitioning: false });
          });
        });
        reactDomFlushSyncImpl(() => setTransition(t));
        return;
      }
      if (transition) {
        renderDfd && renderDfd.resolve();
        transition.skipTransition();
        setInterruption({
          state: newState,
          currentLocation: viewTransitionOpts.currentLocation,
          nextLocation: viewTransitionOpts.nextLocation
        });
      } else {
        setPendingState(newState);
        setVtContext({
          isTransitioning: true,
          flushSync: false,
          currentLocation: viewTransitionOpts.currentLocation,
          nextLocation: viewTransitionOpts.nextLocation
        });
      }
    },
    [router.window, reactDomFlushSyncImpl, transition, renderDfd]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => router.subscribe(setState), [router, setState]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (vtContext.isTransitioning && !vtContext.flushSync) {
      setRenderDfd(new Deferred());
    }
  }, [vtContext]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (renderDfd && pendingState && router.window) {
      let newState = pendingState;
      let renderPromise = renderDfd.promise;
      let transition2 = router.window.document.startViewTransition(async () => {
        react__WEBPACK_IMPORTED_MODULE_0__.startTransition(() => setStateImpl(newState));
        await renderPromise;
      });
      transition2.finished.finally(() => {
        setRenderDfd(void 0);
        setTransition(void 0);
        setPendingState(void 0);
        setVtContext({ isTransitioning: false });
      });
      setTransition(transition2);
    }
  }, [pendingState, renderDfd, router.window]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (renderDfd && pendingState && state.location.key === pendingState.location.key) {
      renderDfd.resolve();
    }
  }, [renderDfd, transition, state.location, pendingState]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!vtContext.isTransitioning && interruption) {
      setPendingState(interruption.state);
      setVtContext({
        isTransitioning: true,
        flushSync: false,
        currentLocation: interruption.currentLocation,
        nextLocation: interruption.nextLocation
      });
      setInterruption(void 0);
    }
  }, [vtContext.isTransitioning, interruption]);
  let navigator2 = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return {
      createHref: router.createHref,
      encodeLocation: router.encodeLocation,
      go: (n) => router.navigate(n),
      push: (to, state2, opts) => router.navigate(to, {
        state: state2,
        preventScrollReset: opts?.preventScrollReset
      }),
      replace: (to, state2, opts) => router.navigate(to, {
        replace: true,
        state: state2,
        preventScrollReset: opts?.preventScrollReset
      })
    };
  }, [router]);
  let basename = router.basename || "/";
  let dataRouterContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => ({
      router,
      navigator: navigator2,
      static: false,
      basename
    }),
    [router, navigator2, basename]
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRouterContext.Provider, { value: dataRouterContext }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRouterStateContext.Provider, { value: state }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(FetchersContext.Provider, { value: fetcherData.current }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTransitionContext.Provider, { value: vtContext }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    Router,
    {
      basename,
      location: state.location,
      navigationType: state.historyAction,
      navigator: navigator2
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      MemoizedDataRoutes,
      {
        routes: router.routes,
        future: router.future,
        state
      }
    )
  ))))), null);
}
var MemoizedDataRoutes = react__WEBPACK_IMPORTED_MODULE_0__.memo(DataRoutes);
function DataRoutes({
  routes,
  future,
  state
}) {
  return useRoutesImpl(routes, void 0, state, future);
}
function MemoryRouter({
  basename,
  children,
  initialEntries,
  initialIndex
}) {
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  if (historyRef.current == null) {
    historyRef.current = createMemoryHistory({
      initialEntries,
      initialIndex,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (newState) => {
      react__WEBPACK_IMPORTED_MODULE_0__.startTransition(() => setStateImpl(newState));
    },
    [setStateImpl]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    Router,
    {
      basename,
      children,
      location: state.location,
      navigationType: state.action,
      navigator: history
    }
  );
}
function Navigate({
  to,
  replace: replace2,
  state,
  relative
}) {
  invariant(
    useInRouterContext(),
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    `<Navigate> may be used only in the context of a <Router> component.`
  );
  let { static: isStatic } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  warning(
    !isStatic,
    `<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`
  );
  let { matches } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let { pathname: locationPathname } = useLocation();
  let navigate = useNavigate();
  let path = resolveTo(
    to,
    getResolveToMatches(matches),
    locationPathname,
    relative === "path"
  );
  let jsonPath = JSON.stringify(path);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    navigate(JSON.parse(jsonPath), { replace: replace2, state, relative });
  }, [navigate, jsonPath, relative, replace2, state]);
  return null;
}
function Outlet(props) {
  return useOutlet(props.context);
}
function Route(_props) {
  invariant(
    false,
    `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`
  );
}
function Router({
  basename: basenameProp = "/",
  children = null,
  location: locationProp,
  navigationType = "POP" /* Pop */,
  navigator: navigator2,
  static: staticProp = false
}) {
  invariant(
    !useInRouterContext(),
    `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`
  );
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => ({
      basename,
      navigator: navigator2,
      static: staticProp,
      future: {}
    }),
    [basename, navigator2, staticProp]
  );
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  warning(
    locationContext != null,
    `<Router basename="${basename}"> is not able to match the URL "${pathname}${search}${hash}" because it does not start with the basename, so the <Router> won't render anything.`
  );
  if (locationContext == null) {
    return null;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(NavigationContext.Provider, { value: navigationContext }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(LocationContext.Provider, { children, value: locationContext }));
}
function Routes({
  children,
  location
}) {
  return useRoutes(createRoutesFromChildren(children), location);
}
function Await({
  children,
  errorElement,
  resolve
}) {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitErrorBoundary, { resolve, errorElement }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ResolveAwait, null, children));
}
var AwaitErrorBoundary = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, errorInfo) {
    console.error(
      "<Await> caught the following error during render",
      error,
      errorInfo
    );
  }
  render() {
    let { children, errorElement, resolve } = this.props;
    let promise = null;
    let status = 0 /* pending */;
    if (!(resolve instanceof Promise)) {
      status = 1 /* success */;
      promise = Promise.resolve();
      Object.defineProperty(promise, "_tracked", { get: () => true });
      Object.defineProperty(promise, "_data", { get: () => resolve });
    } else if (this.state.error) {
      status = 2 /* error */;
      let renderError = this.state.error;
      promise = Promise.reject().catch(() => {
      });
      Object.defineProperty(promise, "_tracked", { get: () => true });
      Object.defineProperty(promise, "_error", { get: () => renderError });
    } else if (resolve._tracked) {
      promise = resolve;
      status = "_error" in promise ? 2 /* error */ : "_data" in promise ? 1 /* success */ : 0 /* pending */;
    } else {
      status = 0 /* pending */;
      Object.defineProperty(resolve, "_tracked", { get: () => true });
      promise = resolve.then(
        (data2) => Object.defineProperty(resolve, "_data", { get: () => data2 }),
        (error) => Object.defineProperty(resolve, "_error", { get: () => error })
      );
    }
    if (status === 2 /* error */ && !errorElement) {
      throw promise._error;
    }
    if (status === 2 /* error */) {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitContext.Provider, { value: promise, children: errorElement });
    }
    if (status === 1 /* success */) {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(AwaitContext.Provider, { value: promise, children });
    }
    throw promise;
  }
};
function ResolveAwait({
  children
}) {
  let data2 = useAsyncValue();
  let toRender = typeof children === "function" ? children(data2) : children;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, toRender);
}
function createRoutesFromChildren(children, parentPath = []) {
  let routes = [];
  react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children, (element, index) => {
    if (!react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(element)) {
      return;
    }
    let treePath = [...parentPath, index];
    if (element.type === react__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
      routes.push.apply(
        routes,
        createRoutesFromChildren(element.props.children, treePath)
      );
      return;
    }
    invariant(
      element.type === Route,
      `[${typeof element.type === "string" ? element.type : element.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    );
    invariant(
      !element.props.index || !element.props.children,
      "An index route cannot have child routes."
    );
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      hydrateFallbackElement: element.props.hydrateFallbackElement,
      HydrateFallback: element.props.HydrateFallback,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.hasErrorBoundary === true || element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(
        element.props.children,
        treePath
      );
    }
    routes.push(route);
  });
  return routes;
}
var createRoutesFromElements = createRoutesFromChildren;
function renderMatches(matches) {
  return _renderMatches(matches);
}

// lib/dom/lib.tsx


// lib/dom/dom.ts
var defaultMethod = "get";
var defaultEncType = "application/x-www-form-urlencoded";
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && // Ignore everything but left clicks
  (!target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event);
}
function createSearchParams(init = "") {
  return new URLSearchParams(
    typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo2, key) => {
      let value = init[key];
      return memo2.concat(
        Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]]
      );
    }, [])
  );
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
  let searchParams = createSearchParams(locationSearch);
  if (defaultSearchParams) {
    defaultSearchParams.forEach((_, key) => {
      if (!searchParams.has(key)) {
        defaultSearchParams.getAll(key).forEach((value) => {
          searchParams.append(key, value);
        });
      }
    });
  }
  return searchParams;
}
var _formDataSupportsSubmitter = null;
function isFormDataSubmitterSupported() {
  if (_formDataSupportsSubmitter === null) {
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      );
      _formDataSupportsSubmitter = false;
    } catch (e) {
      _formDataSupportsSubmitter = true;
    }
  }
  return _formDataSupportsSubmitter;
}
var supportedFormEncTypes = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function getFormEncType(encType) {
  if (encType != null && !supportedFormEncTypes.has(encType)) {
    warning(
      false,
      `"${encType}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${defaultEncType}"`
    );
    return null;
  }
  return encType;
}
function getFormSubmissionInfo(target, basename) {
  let method;
  let action;
  let encType;
  let formData;
  let body;
  if (isFormElement(target)) {
    let attr = target.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(target);
  } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
    let form = target.form;
    if (form == null) {
      throw new Error(
        `Cannot submit a <button> or <input type="submit"> without a <form>`
      );
    }
    let attr = target.getAttribute("formaction") || form.getAttribute("action");
    action = attr ? stripBasename(attr, basename) : null;
    method = target.getAttribute("formmethod") || form.getAttribute("method") || defaultMethod;
    encType = getFormEncType(target.getAttribute("formenctype")) || getFormEncType(form.getAttribute("enctype")) || defaultEncType;
    formData = new FormData(form, target);
    if (!isFormDataSubmitterSupported()) {
      let { name, type, value } = target;
      if (type === "image") {
        let prefix = name ? `${name}.` : "";
        formData.append(`${prefix}x`, "0");
        formData.append(`${prefix}y`, "0");
      } else if (name) {
        formData.append(name, value);
      }
    }
  } else if (isHtmlElement(target)) {
    throw new Error(
      `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`
    );
  } else {
    method = defaultMethod;
    action = null;
    encType = defaultEncType;
    body = target;
  }
  if (formData && encType === "text/plain") {
    body = formData;
    formData = void 0;
  }
  return { action, method: method.toLowerCase(), encType, formData, body };
}

// lib/dom/ssr/components.tsx


// lib/dom/ssr/invariant.ts
function invariant2(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}

// lib/dom/ssr/routeModules.ts
async function loadRouteModule(route, routeModulesCache) {
  if (route.id in routeModulesCache) {
    return routeModulesCache[route.id];
  }
  try {
    let routeModule = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      route.module
    );
    routeModulesCache[route.id] = routeModule;
    return routeModule;
  } catch (error) {
    console.error(
      `Error loading route module \`${route.module}\`, reloading page...`
    );
    console.error(error);
    if (window.__reactRouterContext && window.__reactRouterContext.isSpaMode && // @ts-expect-error
    /* unsupported import.meta.hot */ undefined) {}
    window.location.reload();
    return new Promise(() => {
    });
  }
}

// lib/dom/ssr/links.ts
function getKeyedLinksForMatches(matches, routeModules, manifest) {
  let descriptors = matches.map((match) => {
    let module = routeModules[match.route.id];
    let route = manifest.routes[match.route.id];
    return [
      route && route.css ? route.css.map((href2) => ({ rel: "stylesheet", href: href2 })) : [],
      module?.links?.() || []
    ];
  }).flat(2);
  let preloads = getModuleLinkHrefs(matches, manifest);
  return dedupeLinkDescriptors(descriptors, preloads);
}
function getRouteCssDescriptors(route) {
  if (!route.css) return [];
  return route.css.map((href2) => ({ rel: "stylesheet", href: href2 }));
}
async function prefetchRouteCss(route) {
  if (!route.css) return;
  let descriptors = getRouteCssDescriptors(route);
  await Promise.all(descriptors.map(prefetchStyleLink));
}
async function prefetchStyleLinks(route, routeModule) {
  if (!route.css && !routeModule.links || !isPreloadSupported()) return;
  let descriptors = [];
  if (route.css) {
    descriptors.push(...getRouteCssDescriptors(route));
  }
  if (routeModule.links) {
    descriptors.push(...routeModule.links());
  }
  if (descriptors.length === 0) return;
  let styleLinks = [];
  for (let descriptor of descriptors) {
    if (!isPageLinkDescriptor(descriptor) && descriptor.rel === "stylesheet") {
      styleLinks.push({
        ...descriptor,
        rel: "preload",
        as: "style"
      });
    }
  }
  await Promise.all(styleLinks.map(prefetchStyleLink));
}
async function prefetchStyleLink(descriptor) {
  return new Promise((resolve) => {
    if (descriptor.media && !window.matchMedia(descriptor.media).matches || document.querySelector(
      `link[rel="stylesheet"][href="${descriptor.href}"]`
    )) {
      return resolve();
    }
    let link = document.createElement("link");
    Object.assign(link, descriptor);
    function removeLink() {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    }
    link.onload = () => {
      removeLink();
      resolve();
    };
    link.onerror = () => {
      removeLink();
      resolve();
    };
    document.head.appendChild(link);
  });
}
function isPageLinkDescriptor(object) {
  return object != null && typeof object.page === "string";
}
function isHtmlLinkDescriptor(object) {
  if (object == null) {
    return false;
  }
  if (object.href == null) {
    return object.rel === "preload" && typeof object.imageSrcSet === "string" && typeof object.imageSizes === "string";
  }
  return typeof object.rel === "string" && typeof object.href === "string";
}
async function getKeyedPrefetchLinks(matches, manifest, routeModules) {
  let links = await Promise.all(
    matches.map(async (match) => {
      let route = manifest.routes[match.route.id];
      if (route) {
        let mod = await loadRouteModule(route, routeModules);
        return mod.links ? mod.links() : [];
      }
      return [];
    })
  );
  return dedupeLinkDescriptors(
    links.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map(
      (link) => link.rel === "stylesheet" ? { ...link, rel: "prefetch", as: "style" } : { ...link, rel: "prefetch" }
    )
  );
}
function getNewMatchesForLinks(page, nextMatches, currentMatches, manifest, location, mode) {
  let isNew = (match, index) => {
    if (!currentMatches[index]) return true;
    return match.route.id !== currentMatches[index].route.id;
  };
  let matchPathChanged = (match, index) => {
    return (
      // param change, /users/123 -> /users/456
      currentMatches[index].pathname !== match.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      currentMatches[index].route.path?.endsWith("*") && currentMatches[index].params["*"] !== match.params["*"]
    );
  };
  if (mode === "assets") {
    return nextMatches.filter(
      (match, index) => isNew(match, index) || matchPathChanged(match, index)
    );
  }
  if (mode === "data") {
    return nextMatches.filter((match, index) => {
      let manifestRoute = manifest.routes[match.route.id];
      if (!manifestRoute || !manifestRoute.hasLoader) {
        return false;
      }
      if (isNew(match, index) || matchPathChanged(match, index)) {
        return true;
      }
      if (match.route.shouldRevalidate) {
        let routeChoice = match.route.shouldRevalidate({
          currentUrl: new URL(
            location.pathname + location.search + location.hash,
            window.origin
          ),
          currentParams: currentMatches[0]?.params || {},
          nextUrl: new URL(page, window.origin),
          nextParams: match.params,
          defaultShouldRevalidate: true
        });
        if (typeof routeChoice === "boolean") {
          return routeChoice;
        }
      }
      return true;
    });
  }
  return [];
}
function getModuleLinkHrefs(matches, manifest, { includeHydrateFallback } = {}) {
  return dedupeHrefs(
    matches.map((match) => {
      let route = manifest.routes[match.route.id];
      if (!route) return [];
      let hrefs = [route.module];
      if (route.clientActionModule) {
        hrefs = hrefs.concat(route.clientActionModule);
      }
      if (route.clientLoaderModule) {
        hrefs = hrefs.concat(route.clientLoaderModule);
      }
      if (includeHydrateFallback && route.hydrateFallbackModule) {
        hrefs = hrefs.concat(route.hydrateFallbackModule);
      }
      if (route.imports) {
        hrefs = hrefs.concat(route.imports);
      }
      return hrefs;
    }).flat(1)
  );
}
function dedupeHrefs(hrefs) {
  return [...new Set(hrefs)];
}
function sortKeys(obj) {
  let sorted = {};
  let keys = Object.keys(obj).sort();
  for (let key of keys) {
    sorted[key] = obj[key];
  }
  return sorted;
}
function dedupeLinkDescriptors(descriptors, preloads) {
  let set = /* @__PURE__ */ new Set();
  let preloadsSet = new Set(preloads);
  return descriptors.reduce((deduped, descriptor) => {
    let alreadyModulePreload = preloads && !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
    if (alreadyModulePreload) {
      return deduped;
    }
    let key = JSON.stringify(sortKeys(descriptor));
    if (!set.has(key)) {
      set.add(key);
      deduped.push({ key, link: descriptor });
    }
    return deduped;
  }, []);
}
var _isPreloadSupported;
function isPreloadSupported() {
  if (_isPreloadSupported !== void 0) {
    return _isPreloadSupported;
  }
  let el = document.createElement("link");
  _isPreloadSupported = el.relList.supports("preload");
  el = null;
  return _isPreloadSupported;
}

// lib/dom/ssr/markup.ts
var ESCAPE_LOOKUP = {
  "&": "\\u0026",
  ">": "\\u003e",
  "<": "\\u003c",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var ESCAPE_REGEX = /[&><\u2028\u2029]/g;
function escapeHtml(html) {
  return html.replace(ESCAPE_REGEX, (match) => ESCAPE_LOOKUP[match]);
}
function createHtml(html) {
  return { __html: html };
}

// lib/dom/ssr/single-fetch.tsx



// lib/dom/ssr/data.ts
async function createRequestInit(request) {
  let init = { signal: request.signal };
  if (request.method !== "GET") {
    init.method = request.method;
    let contentType = request.headers.get("Content-Type");
    if (contentType && /\bapplication\/json\b/.test(contentType)) {
      init.headers = { "Content-Type": contentType };
      init.body = JSON.stringify(await request.json());
    } else if (contentType && /\btext\/plain\b/.test(contentType)) {
      init.headers = { "Content-Type": contentType };
      init.body = await request.text();
    } else if (contentType && /\bapplication\/x-www-form-urlencoded\b/.test(contentType)) {
      init.body = new URLSearchParams(await request.text());
    } else {
      init.body = await request.formData();
    }
  }
  return init;
}

// lib/dom/ssr/single-fetch.tsx
var SingleFetchRedirectSymbol = Symbol("SingleFetchRedirect");
function StreamTransfer({
  context,
  identifier,
  reader,
  textDecoder,
  nonce
}) {
  if (!context.renderMeta || !context.renderMeta.didRenderScripts) {
    return null;
  }
  if (!context.renderMeta.streamCache) {
    context.renderMeta.streamCache = {};
  }
  let { streamCache } = context.renderMeta;
  let promise = streamCache[identifier];
  if (!promise) {
    promise = streamCache[identifier] = reader.read().then((result) => {
      streamCache[identifier].result = {
        done: result.done,
        value: textDecoder.decode(result.value, { stream: true })
      };
    }).catch((e) => {
      streamCache[identifier].error = e;
    });
  }
  if (promise.error) {
    throw promise.error;
  }
  if (promise.result === void 0) {
    throw promise;
  }
  let { done, value } = promise.result;
  let scriptTag = value ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "script",
    {
      nonce,
      dangerouslySetInnerHTML: {
        __html: `window.__reactRouterContext.streamController.enqueue(${escapeHtml(
          JSON.stringify(value)
        )});`
      }
    }
  ) : null;
  if (done) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, scriptTag, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "script",
      {
        nonce,
        dangerouslySetInnerHTML: {
          __html: `window.__reactRouterContext.streamController.close();`
        }
      }
    ));
  } else {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, scriptTag, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      StreamTransfer,
      {
        context,
        identifier: identifier + 1,
        reader,
        textDecoder,
        nonce
      }
    )));
  }
}
function getSingleFetchDataStrategy(manifest, routeModules, ssr, basename, getRouter) {
  return async (args) => {
    let { request, matches, fetcherKey } = args;
    if (request.method !== "GET") {
      return runMiddlewarePipeline(
        args,
        false,
        () => singleFetchActionStrategy(request, matches, basename),
        (e) => ({ [e.routeId]: { type: "error", result: e.error } })
      );
    }
    if (!ssr) {
      let foundRevalidatingServerLoader = matches.some(
        (m) => m.shouldLoad && manifest.routes[m.route.id]?.hasLoader && !manifest.routes[m.route.id]?.hasClientLoader
      );
      if (!foundRevalidatingServerLoader) {
        return runMiddlewarePipeline(
          args,
          false,
          () => nonSsrStrategy(manifest, request, matches, basename),
          (e) => ({ [e.routeId]: { type: "error", result: e.error } })
        );
      }
    }
    if (fetcherKey) {
      return runMiddlewarePipeline(
        args,
        false,
        () => singleFetchLoaderFetcherStrategy(request, matches, basename),
        (e) => ({ [e.routeId]: { type: "error", result: e.error } })
      );
    }
    return runMiddlewarePipeline(
      args,
      false,
      () => singleFetchLoaderNavigationStrategy(
        manifest,
        routeModules,
        ssr,
        getRouter(),
        request,
        matches,
        basename
      ),
      (e) => ({ [e.routeId]: { type: "error", result: e.error } })
    );
  };
}
async function singleFetchActionStrategy(request, matches, basename) {
  let actionMatch = matches.find((m) => m.shouldLoad);
  invariant2(actionMatch, "No action match found");
  let actionStatus = void 0;
  let result = await actionMatch.resolve(async (handler) => {
    let result2 = await handler(async () => {
      let url = singleFetchUrl(request.url, basename);
      let init = await createRequestInit(request);
      let { data: data2, status } = await fetchAndDecode(url, init);
      actionStatus = status;
      return unwrapSingleFetchResult(
        data2,
        actionMatch.route.id
      );
    });
    return result2;
  });
  if (isResponse(result.result) || isRouteErrorResponse(result.result)) {
    return { [actionMatch.route.id]: result };
  }
  return {
    [actionMatch.route.id]: {
      type: result.type,
      result: data(result.result, actionStatus)
    }
  };
}
async function nonSsrStrategy(manifest, request, matches, basename) {
  let matchesToLoad = matches.filter((m) => m.shouldLoad);
  let url = stripIndexParam(singleFetchUrl(request.url, basename));
  let init = await createRequestInit(request);
  let results = {};
  await Promise.all(
    matchesToLoad.map(
      (m) => m.resolve(async (handler) => {
        try {
          let result = manifest.routes[m.route.id]?.hasClientLoader ? await fetchSingleLoader(handler, url, init, m.route.id) : await handler();
          results[m.route.id] = { type: "data", result };
        } catch (e) {
          results[m.route.id] = { type: "error", result: e };
        }
      })
    )
  );
  return results;
}
function isOptedOut(manifestRoute, routeModule, match, router) {
  return match.route.id in router.state.loaderData && manifestRoute && manifestRoute.hasLoader && routeModule && routeModule.shouldRevalidate;
}
async function singleFetchLoaderNavigationStrategy(manifest, routeModules, ssr, router, request, matches, basename) {
  let routesParams = /* @__PURE__ */ new Set();
  let foundOptOutRoute = false;
  let routeDfds = matches.map(() => createDeferred2());
  let routesLoadedPromise = Promise.all(routeDfds.map((d) => d.promise));
  let singleFetchDfd = createDeferred2();
  let url = stripIndexParam(singleFetchUrl(request.url, basename));
  let init = await createRequestInit(request);
  let results = {};
  let resolvePromise = Promise.all(
    matches.map(
      async (m, i) => m.resolve(async (handler) => {
        routeDfds[i].resolve();
        let manifestRoute = manifest.routes[m.route.id];
        if (!m.shouldLoad) {
          if (!router.state.initialized) {
            return;
          }
          if (isOptedOut(manifestRoute, routeModules[m.route.id], m, router)) {
            foundOptOutRoute = true;
            return;
          }
        }
        if (manifestRoute && manifestRoute.hasClientLoader) {
          if (manifestRoute.hasLoader) {
            foundOptOutRoute = true;
          }
          try {
            let result = await fetchSingleLoader(
              handler,
              url,
              init,
              m.route.id
            );
            results[m.route.id] = { type: "data", result };
          } catch (e) {
            results[m.route.id] = { type: "error", result: e };
          }
          return;
        }
        if (manifestRoute && manifestRoute.hasLoader) {
          routesParams.add(m.route.id);
        }
        try {
          let result = await handler(async () => {
            let data2 = await singleFetchDfd.promise;
            return unwrapSingleFetchResults(data2, m.route.id);
          });
          results[m.route.id] = {
            type: "data",
            result
          };
        } catch (e) {
          results[m.route.id] = {
            type: "error",
            result: e
          };
        }
      })
    )
  );
  await routesLoadedPromise;
  if ((!router.state.initialized || routesParams.size === 0) && !window.__reactRouterHdrActive) {
    singleFetchDfd.resolve({});
  } else {
    try {
      if (ssr && foundOptOutRoute && routesParams.size > 0) {
        url.searchParams.set(
          "_routes",
          matches.filter((m) => routesParams.has(m.route.id)).map((m) => m.route.id).join(",")
        );
      }
      let data2 = await fetchAndDecode(url, init);
      singleFetchDfd.resolve(data2.data);
    } catch (e) {
      singleFetchDfd.reject(e);
    }
  }
  await resolvePromise;
  return results;
}
async function singleFetchLoaderFetcherStrategy(request, matches, basename) {
  let fetcherMatch = matches.find((m) => m.shouldLoad);
  invariant2(fetcherMatch, "No fetcher match found");
  let result = await fetcherMatch.resolve(async (handler) => {
    let url = stripIndexParam(singleFetchUrl(request.url, basename));
    let init = await createRequestInit(request);
    return fetchSingleLoader(handler, url, init, fetcherMatch.route.id);
  });
  return { [fetcherMatch.route.id]: result };
}
function fetchSingleLoader(handler, url, init, routeId) {
  return handler(async () => {
    let singleLoaderUrl = new URL(url);
    singleLoaderUrl.searchParams.set("_routes", routeId);
    let { data: data2 } = await fetchAndDecode(singleLoaderUrl, init);
    return unwrapSingleFetchResults(data2, routeId);
  });
}
function stripIndexParam(url) {
  let indexValues = url.searchParams.getAll("index");
  url.searchParams.delete("index");
  let indexValuesToKeep = [];
  for (let indexValue of indexValues) {
    if (indexValue) {
      indexValuesToKeep.push(indexValue);
    }
  }
  for (let toKeep of indexValuesToKeep) {
    url.searchParams.append("index", toKeep);
  }
  return url;
}
function singleFetchUrl(reqUrl, basename) {
  let url = typeof reqUrl === "string" ? new URL(
    reqUrl,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window === "undefined" ? "server://singlefetch/" : window.location.origin
  ) : reqUrl;
  if (url.pathname === "/") {
    url.pathname = "_root.data";
  } else if (basename && stripBasename(url.pathname, basename) === "/") {
    url.pathname = `${basename.replace(/\/$/, "")}/_root.data`;
  } else {
    url.pathname = `${url.pathname.replace(/\/$/, "")}.data`;
  }
  return url;
}
async function fetchAndDecode(url, init) {
  let res = await fetch(url, init);
  if (res.status === 404 && !res.headers.has("X-Remix-Response")) {
    throw new ErrorResponseImpl(404, "Not Found", true);
  }
  const NO_BODY_STATUS_CODES2 = /* @__PURE__ */ new Set([100, 101, 204, 205]);
  if (NO_BODY_STATUS_CODES2.has(res.status)) {
    if (!init.method || init.method === "GET") {
      return { status: res.status, data: {} };
    } else {
      return { status: res.status, data: { data: void 0 } };
    }
  }
  invariant2(res.body, "No response body to decode");
  try {
    let decoded = await decodeViaTurboStream(res.body, window);
    return { status: res.status, data: decoded.value };
  } catch (e) {
    throw new Error("Unable to decode turbo-stream response");
  }
}
function decodeViaTurboStream(body, global2) {
  return (0,turbo_stream__WEBPACK_IMPORTED_MODULE_1__.decode)(body, {
    plugins: [
      (type, ...rest) => {
        if (type === "SanitizedError") {
          let [name, message, stack] = rest;
          let Constructor = Error;
          if (name && name in global2 && typeof global2[name] === "function") {
            Constructor = global2[name];
          }
          let error = new Constructor(message);
          error.stack = stack;
          return { value: error };
        }
        if (type === "ErrorResponse") {
          let [data2, status, statusText] = rest;
          return {
            value: new ErrorResponseImpl(status, statusText, data2)
          };
        }
        if (type === "SingleFetchRedirect") {
          return { value: { [SingleFetchRedirectSymbol]: rest[0] } };
        }
        if (type === "SingleFetchClassInstance") {
          return { value: rest[0] };
        }
        if (type === "SingleFetchFallback") {
          return { value: void 0 };
        }
      }
    ]
  });
}
function unwrapSingleFetchResults(results, routeId) {
  let redirect2 = results[SingleFetchRedirectSymbol];
  if (redirect2) {
    return unwrapSingleFetchResult(redirect2, routeId);
  }
  return results[routeId] !== void 0 ? unwrapSingleFetchResult(results[routeId], routeId) : null;
}
function unwrapSingleFetchResult(result, routeId) {
  if ("error" in result) {
    throw result.error;
  } else if ("redirect" in result) {
    let headers = {};
    if (result.revalidate) {
      headers["X-Remix-Revalidate"] = "yes";
    }
    if (result.reload) {
      headers["X-Remix-Reload-Document"] = "yes";
    }
    if (result.replace) {
      headers["X-Remix-Replace"] = "yes";
    }
    throw redirect(result.redirect, { status: result.status, headers });
  } else if ("data" in result) {
    return result.data;
  } else {
    throw new Error(`No response found for routeId "${routeId}"`);
  }
}
function createDeferred2() {
  let resolve;
  let reject;
  let promise = new Promise((res, rej) => {
    resolve = async (val) => {
      res(val);
      try {
        await promise;
      } catch (e) {
      }
    };
    reject = async (error) => {
      rej(error);
      try {
        await promise;
      } catch (e) {
      }
    };
  });
  return {
    promise,
    //@ts-ignore
    resolve,
    //@ts-ignore
    reject
  };
}

// lib/dom/ssr/fog-of-war.ts


// lib/dom/ssr/routes.tsx


// lib/dom/ssr/errorBoundaries.tsx

var RemixErrorBoundary = class extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = { error: props.error || null, location: props.location };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location) {
      return { error: props.error || null, location: props.location };
    }
    return { error: props.error || state.error, location: state.location };
  }
  render() {
    if (this.state.error) {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        RemixRootDefaultErrorBoundary,
        {
          error: this.state.error,
          isOutsideRemixApp: true
        }
      );
    } else {
      return this.props.children;
    }
  }
};
function RemixRootDefaultErrorBoundary({
  error,
  isOutsideRemixApp
}) {
  console.error(error);
  let heyDeveloper = /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "script",
    {
      dangerouslySetInnerHTML: {
        __html: `
        console.log(
          "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
        );
      `
      }
    }
  );
  if (isRouteErrorResponse(error)) {
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(BoundaryShell, { title: "Unhandled Thrown Response!" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { style: { fontSize: "24px" } }, error.status, " ", error.statusText), heyDeveloper);
  }
  let errorInstance;
  if (error instanceof Error) {
    errorInstance = error;
  } else {
    let errorString = error == null ? "Unknown Error" : typeof error === "object" && "toString" in error ? error.toString() : JSON.stringify(error);
    errorInstance = new Error(errorString);
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    BoundaryShell,
    {
      title: "Application Error!",
      isOutsideRemixApp
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", { style: { fontSize: "24px" } }, "Application Error"),
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "pre",
      {
        style: {
          padding: "2rem",
          background: "hsla(10, 50%, 50%, 0.1)",
          color: "red",
          overflow: "auto"
        }
      },
      errorInstance.stack
    ),
    heyDeveloper
  );
}
function BoundaryShell({
  title,
  renderScripts,
  isOutsideRemixApp,
  children
}) {
  let { routeModules } = useFrameworkContext();
  if (routeModules.root?.Layout && !isOutsideRemixApp) {
    return children;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("html", { lang: "en" }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("head", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", { charSet: "utf-8" }), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "meta",
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1,viewport-fit=cover"
    }
  ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, title)), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("body", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("main", { style: { fontFamily: "system-ui, sans-serif", padding: "2rem" } }, children, renderScripts ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Scripts, null) : null)));
}

// lib/dom/ssr/fallback.tsx

function RemixRootDefaultHydrateFallback() {
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(BoundaryShell, { title: "Loading...", renderScripts: true }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "script",
    {
      dangerouslySetInnerHTML: {
        __html: `
              console.log(
                "\u{1F4BF} Hey developer \u{1F44B}. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://remix.run/route/hydrate-fallback " +
                "for more information."
              );
            `
      }
    }
  ));
}

// lib/dom/ssr/routes.tsx
function groupRoutesByParentId(manifest) {
  let routes = {};
  Object.values(manifest).forEach((route) => {
    if (route) {
      let parentId = route.parentId || "";
      if (!routes[parentId]) {
        routes[parentId] = [];
      }
      routes[parentId].push(route);
    }
  });
  return routes;
}
function getRouteComponents(route, routeModule, isSpaMode) {
  let Component4 = getRouteModuleComponent(routeModule);
  let HydrateFallback = routeModule.HydrateFallback && (!isSpaMode || route.id === "root") ? routeModule.HydrateFallback : route.id === "root" ? RemixRootDefaultHydrateFallback : void 0;
  let ErrorBoundary = routeModule.ErrorBoundary ? routeModule.ErrorBoundary : route.id === "root" ? () => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RemixRootDefaultErrorBoundary, { error: useRouteError() }) : void 0;
  if (route.id === "root" && routeModule.Layout) {
    return {
      ...Component4 ? {
        element: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(routeModule.Layout, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component4, null))
      } : { Component: Component4 },
      ...ErrorBoundary ? {
        errorElement: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(routeModule.Layout, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary, null))
      } : { ErrorBoundary },
      ...HydrateFallback ? {
        hydrateFallbackElement: /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(routeModule.Layout, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(HydrateFallback, null))
      } : { HydrateFallback }
    };
  }
  return { Component: Component4, ErrorBoundary, HydrateFallback };
}
function createServerRoutes(manifest, routeModules, future, isSpaMode, parentId = "", routesByParentId = groupRoutesByParentId(manifest), spaModeLazyPromise = Promise.resolve({ Component: () => null })) {
  return (routesByParentId[parentId] || []).map((route) => {
    let routeModule = routeModules[route.id];
    invariant2(
      routeModule,
      "No `routeModule` available to create server routes"
    );
    let dataRoute = {
      ...getRouteComponents(route, routeModule, isSpaMode),
      caseSensitive: route.caseSensitive,
      id: route.id,
      index: route.index,
      path: route.path,
      handle: routeModule.handle,
      // For SPA Mode, all routes are lazy except root.  However we tell the
      // router root is also lazy here too since we don't need a full
      // implementation - we just need a `lazy` prop to tell the RR rendering
      // where to stop which is always at the root route in SPA mode
      lazy: isSpaMode ? () => spaModeLazyPromise : void 0,
      // For partial hydration rendering, we need to indicate when the route
      // has a loader/clientLoader, but it won't ever be called during the static
      // render, so just give it a no-op function so we can render down to the
      // proper fallback
      loader: route.hasLoader || route.hasClientLoader ? () => null : void 0
      // We don't need middleware/action/shouldRevalidate on these routes since
      // they're for a static render
    };
    let children = createServerRoutes(
      manifest,
      routeModules,
      future,
      isSpaMode,
      route.id,
      routesByParentId,
      spaModeLazyPromise
    );
    if (children.length > 0) dataRoute.children = children;
    return dataRoute;
  });
}
function createClientRoutesWithHMRRevalidationOptOut(needsRevalidation, manifest, routeModulesCache, initialState, ssr, isSpaMode) {
  return createClientRoutes(
    manifest,
    routeModulesCache,
    initialState,
    ssr,
    isSpaMode,
    "",
    groupRoutesByParentId(manifest),
    needsRevalidation
  );
}
function preventInvalidServerHandlerCall(type, route) {
  if (type === "loader" && !route.hasLoader || type === "action" && !route.hasAction) {
    let fn = type === "action" ? "serverAction()" : "serverLoader()";
    let msg = `You are trying to call ${fn} on a route that does not have a server ${type} (routeId: "${route.id}")`;
    console.error(msg);
    throw new ErrorResponseImpl(400, "Bad Request", new Error(msg), true);
  }
}
function noActionDefinedError(type, routeId) {
  let article = type === "clientAction" ? "a" : "an";
  let msg = `Route "${routeId}" does not have ${article} ${type}, but you are trying to submit to it. To fix this, please add ${article} \`${type}\` function to the route`;
  console.error(msg);
  throw new ErrorResponseImpl(405, "Method Not Allowed", new Error(msg), true);
}
function createClientRoutes(manifest, routeModulesCache, initialState, ssr, isSpaMode, parentId = "", routesByParentId = groupRoutesByParentId(manifest), needsRevalidation) {
  return (routesByParentId[parentId] || []).map((route) => {
    let routeModule = routeModulesCache[route.id];
    function fetchServerHandler(singleFetch) {
      invariant2(
        typeof singleFetch === "function",
        "No single fetch function available for route handler"
      );
      return singleFetch();
    }
    function fetchServerLoader(singleFetch) {
      if (!route.hasLoader) return Promise.resolve(null);
      return fetchServerHandler(singleFetch);
    }
    function fetchServerAction(singleFetch) {
      if (!route.hasAction) {
        throw noActionDefinedError("action", route.id);
      }
      return fetchServerHandler(singleFetch);
    }
    function prefetchModule(modulePath) {
      import(
        /* @vite-ignore */
        /* webpackIgnore: true */
        modulePath
      );
    }
    function prefetchRouteModuleChunks(route2) {
      if (route2.clientActionModule) {
        prefetchModule(route2.clientActionModule);
      }
      if (route2.clientLoaderModule) {
        prefetchModule(route2.clientLoaderModule);
      }
    }
    async function prefetchStylesAndCallHandler(handler) {
      let cachedModule = routeModulesCache[route.id];
      let linkPrefetchPromise = cachedModule ? prefetchStyleLinks(route, cachedModule) : Promise.resolve();
      try {
        return handler();
      } finally {
        await linkPrefetchPromise;
      }
    }
    let dataRoute = {
      id: route.id,
      index: route.index,
      path: route.path
    };
    if (routeModule) {
      Object.assign(dataRoute, {
        ...dataRoute,
        ...getRouteComponents(route, routeModule, isSpaMode),
        unstable_middleware: routeModule.unstable_clientMiddleware,
        handle: routeModule.handle,
        shouldRevalidate: getShouldRevalidateFunction(
          routeModule,
          route,
          ssr,
          needsRevalidation
        )
      });
      let hasInitialData = initialState && initialState.loaderData && route.id in initialState.loaderData;
      let initialData = hasInitialData ? initialState?.loaderData?.[route.id] : void 0;
      let hasInitialError = initialState && initialState.errors && route.id in initialState.errors;
      let initialError = hasInitialError ? initialState?.errors?.[route.id] : void 0;
      let isHydrationRequest = needsRevalidation == null && (routeModule.clientLoader?.hydrate === true || !route.hasLoader);
      dataRoute.loader = async ({ request, params, context }, singleFetch) => {
        try {
          let result = await prefetchStylesAndCallHandler(async () => {
            invariant2(
              routeModule,
              "No `routeModule` available for critical-route loader"
            );
            if (!routeModule.clientLoader) {
              return fetchServerLoader(singleFetch);
            }
            return routeModule.clientLoader({
              request,
              params,
              context,
              async serverLoader() {
                preventInvalidServerHandlerCall("loader", route);
                if (isHydrationRequest) {
                  if (hasInitialData) {
                    return initialData;
                  }
                  if (hasInitialError) {
                    throw initialError;
                  }
                }
                return fetchServerLoader(singleFetch);
              }
            });
          });
          return result;
        } finally {
          isHydrationRequest = false;
        }
      };
      dataRoute.loader.hydrate = shouldHydrateRouteLoader(
        route,
        routeModule,
        isSpaMode
      );
      dataRoute.action = ({ request, params, context }, singleFetch) => {
        return prefetchStylesAndCallHandler(async () => {
          invariant2(
            routeModule,
            "No `routeModule` available for critical-route action"
          );
          if (!routeModule.clientAction) {
            if (isSpaMode) {
              throw noActionDefinedError("clientAction", route.id);
            }
            return fetchServerAction(singleFetch);
          }
          return routeModule.clientAction({
            request,
            params,
            context,
            async serverAction() {
              preventInvalidServerHandlerCall("action", route);
              return fetchServerAction(singleFetch);
            }
          });
        });
      };
    } else {
      if (!route.hasClientLoader) {
        dataRoute.loader = (_, singleFetch) => prefetchStylesAndCallHandler(() => {
          return fetchServerLoader(singleFetch);
        });
      } else if (route.clientLoaderModule) {
        dataRoute.loader = async (args, singleFetch) => {
          invariant2(route.clientLoaderModule);
          let { clientLoader } = await import(
            /* @vite-ignore */
            /* webpackIgnore: true */
            route.clientLoaderModule
          );
          return clientLoader({
            ...args,
            async serverLoader() {
              preventInvalidServerHandlerCall("loader", route);
              return fetchServerLoader(singleFetch);
            }
          });
        };
      }
      if (!route.hasClientAction) {
        dataRoute.action = (_, singleFetch) => prefetchStylesAndCallHandler(() => {
          if (isSpaMode) {
            throw noActionDefinedError("clientAction", route.id);
          }
          return fetchServerAction(singleFetch);
        });
      } else if (route.clientActionModule) {
        dataRoute.action = async (args, singleFetch) => {
          invariant2(route.clientActionModule);
          prefetchRouteModuleChunks(route);
          let { clientAction } = await import(
            /* @vite-ignore */
            /* webpackIgnore: true */
            route.clientActionModule
          );
          return clientAction({
            ...args,
            async serverAction() {
              preventInvalidServerHandlerCall("action", route);
              return fetchServerAction(singleFetch);
            }
          });
        };
      }
      dataRoute.lazy = async () => {
        if (route.clientLoaderModule || route.clientActionModule) {
          await new Promise((resolve) => setTimeout(resolve, 0));
        }
        let modPromise = loadRouteModuleWithBlockingLinks(
          route,
          routeModulesCache
        );
        prefetchRouteModuleChunks(route);
        let mod = await modPromise;
        let lazyRoute = { ...mod };
        if (mod.clientLoader) {
          let clientLoader = mod.clientLoader;
          lazyRoute.loader = (args, singleFetch) => clientLoader({
            ...args,
            async serverLoader() {
              preventInvalidServerHandlerCall("loader", route);
              return fetchServerLoader(singleFetch);
            }
          });
        }
        if (mod.clientAction) {
          let clientAction = mod.clientAction;
          lazyRoute.action = (args, singleFetch) => clientAction({
            ...args,
            async serverAction() {
              preventInvalidServerHandlerCall("action", route);
              return fetchServerAction(singleFetch);
            }
          });
        }
        return {
          ...lazyRoute.loader ? { loader: lazyRoute.loader } : {},
          ...lazyRoute.action ? { action: lazyRoute.action } : {},
          unstable_middleware: mod.unstable_clientMiddleware,
          hasErrorBoundary: lazyRoute.hasErrorBoundary,
          shouldRevalidate: getShouldRevalidateFunction(
            lazyRoute,
            route,
            ssr,
            needsRevalidation
          ),
          handle: lazyRoute.handle,
          // No need to wrap these in layout since the root route is never
          // loaded via route.lazy()
          Component: lazyRoute.Component,
          ErrorBoundary: lazyRoute.ErrorBoundary
        };
      };
    }
    let children = createClientRoutes(
      manifest,
      routeModulesCache,
      initialState,
      ssr,
      isSpaMode,
      route.id,
      routesByParentId,
      needsRevalidation
    );
    if (children.length > 0) dataRoute.children = children;
    return dataRoute;
  });
}
function getShouldRevalidateFunction(route, manifestRoute, ssr, needsRevalidation) {
  if (needsRevalidation) {
    return wrapShouldRevalidateForHdr(
      manifestRoute.id,
      route.shouldRevalidate,
      needsRevalidation
    );
  }
  if (!ssr && manifestRoute.hasLoader && !manifestRoute.hasClientLoader) {
    if (route.shouldRevalidate) {
      let fn = route.shouldRevalidate;
      return (opts) => fn({ ...opts, defaultShouldRevalidate: false });
    } else {
      return () => false;
    }
  }
  if (ssr && route.shouldRevalidate) {
    let fn = route.shouldRevalidate;
    return (opts) => fn({ ...opts, defaultShouldRevalidate: true });
  }
  return route.shouldRevalidate;
}
function wrapShouldRevalidateForHdr(routeId, routeShouldRevalidate, needsRevalidation) {
  let handledRevalidation = false;
  return (arg) => {
    if (!handledRevalidation) {
      handledRevalidation = true;
      return needsRevalidation.has(routeId);
    }
    return routeShouldRevalidate ? routeShouldRevalidate(arg) : arg.defaultShouldRevalidate;
  };
}
async function loadRouteModuleWithBlockingLinks(route, routeModules) {
  let routeModulePromise = loadRouteModule(route, routeModules);
  let prefetchRouteCssPromise = prefetchRouteCss(route);
  let routeModule = await routeModulePromise;
  await Promise.all([
    prefetchRouteCssPromise,
    prefetchStyleLinks(route, routeModule)
  ]);
  return {
    Component: getRouteModuleComponent(routeModule),
    ErrorBoundary: routeModule.ErrorBoundary,
    unstable_clientMiddleware: routeModule.unstable_clientMiddleware,
    clientAction: routeModule.clientAction,
    clientLoader: routeModule.clientLoader,
    handle: routeModule.handle,
    links: routeModule.links,
    meta: routeModule.meta,
    shouldRevalidate: routeModule.shouldRevalidate
  };
}
function getRouteModuleComponent(routeModule) {
  if (routeModule.default == null) return void 0;
  let isEmptyObject = typeof routeModule.default === "object" && Object.keys(routeModule.default).length === 0;
  if (!isEmptyObject) {
    return routeModule.default;
  }
}
function shouldHydrateRouteLoader(route, routeModule, isSpaMode) {
  return isSpaMode && route.id !== "root" || routeModule.clientLoader != null && (routeModule.clientLoader.hydrate === true || route.hasLoader !== true);
}

// lib/dom/ssr/fog-of-war.ts
var nextPaths = /* @__PURE__ */ new Set();
var discoveredPathsMaxSize = 1e3;
var discoveredPaths = /* @__PURE__ */ new Set();
var URL_LIMIT = 7680;
function isFogOfWarEnabled(ssr) {
  return ssr === true;
}
function getPartialManifest(manifest, router) {
  let routeIds = new Set(router.state.matches.map((m) => m.route.id));
  let segments = router.state.location.pathname.split("/").filter(Boolean);
  let paths = ["/"];
  segments.pop();
  while (segments.length > 0) {
    paths.push(`/${segments.join("/")}`);
    segments.pop();
  }
  paths.forEach((path) => {
    let matches = matchRoutes(router.routes, path, router.basename);
    if (matches) {
      matches.forEach((m) => routeIds.add(m.route.id));
    }
  });
  let initialRoutes = [...routeIds].reduce(
    (acc, id) => Object.assign(acc, { [id]: manifest.routes[id] }),
    {}
  );
  return {
    ...manifest,
    routes: initialRoutes
  };
}
function getPatchRoutesOnNavigationFunction(manifest, routeModules, ssr, isSpaMode, basename) {
  if (!isFogOfWarEnabled(ssr)) {
    return void 0;
  }
  return async ({ path, patch, signal, fetcherKey }) => {
    if (discoveredPaths.has(path)) {
      return;
    }
    await fetchAndApplyManifestPatches(
      [path],
      fetcherKey ? window.location.href : path,
      manifest,
      routeModules,
      ssr,
      isSpaMode,
      basename,
      patch,
      signal
    );
  };
}
function useFogOFWarDiscovery(router, manifest, routeModules, ssr, isSpaMode) {
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (!isFogOfWarEnabled(ssr) || navigator.connection?.saveData === true) {
      return;
    }
    function registerElement(el) {
      let path = el.tagName === "FORM" ? el.getAttribute("action") : el.getAttribute("href");
      if (!path) {
        return;
      }
      let pathname = el.tagName === "A" ? el.pathname : new URL(path, window.location.origin).pathname;
      if (!discoveredPaths.has(pathname)) {
        nextPaths.add(pathname);
      }
    }
    async function fetchPatches() {
      document.querySelectorAll("a[data-discover], form[data-discover]").forEach(registerElement);
      let lazyPaths = Array.from(nextPaths.keys()).filter((path) => {
        if (discoveredPaths.has(path)) {
          nextPaths.delete(path);
          return false;
        }
        return true;
      });
      if (lazyPaths.length === 0) {
        return;
      }
      try {
        await fetchAndApplyManifestPatches(
          lazyPaths,
          null,
          manifest,
          routeModules,
          ssr,
          isSpaMode,
          router.basename,
          router.patchRoutes
        );
      } catch (e) {
        console.error("Failed to fetch manifest patches", e);
      }
    }
    let debouncedFetchPatches = debounce(fetchPatches, 100);
    fetchPatches();
    let observer = new MutationObserver(() => debouncedFetchPatches());
    observer.observe(document.documentElement, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["data-discover", "href", "action"]
    });
    return () => observer.disconnect();
  }, [ssr, isSpaMode, manifest, routeModules, router]);
}
var MANIFEST_VERSION_STORAGE_KEY = "react-router-manifest-version";
async function fetchAndApplyManifestPatches(paths, errorReloadPath, manifest, routeModules, ssr, isSpaMode, basename, patchRoutes, signal) {
  let manifestPath = `${basename != null ? basename : "/"}/__manifest`.replace(
    /\/+/g,
    "/"
  );
  let url = new URL(manifestPath, window.location.origin);
  paths.sort().forEach((path) => url.searchParams.append("p", path));
  url.searchParams.set("version", manifest.version);
  if (url.toString().length > URL_LIMIT) {
    nextPaths.clear();
    return;
  }
  let serverPatches;
  try {
    let res = await fetch(url, { signal });
    if (!res.ok) {
      throw new Error(`${res.status} ${res.statusText}`);
    } else if (res.status === 204 && res.headers.has("X-Remix-Reload-Document")) {
      if (!errorReloadPath) {
        console.warn(
          "Detected a manifest version mismatch during eager route discovery. The next navigation/fetch to an undiscovered route will result in a new document navigation to sync up with the latest manifest."
        );
        return;
      }
      if (sessionStorage.getItem(MANIFEST_VERSION_STORAGE_KEY) === manifest.version) {
        console.error(
          "Unable to discover routes due to manifest version mismatch."
        );
        return;
      }
      sessionStorage.setItem(MANIFEST_VERSION_STORAGE_KEY, manifest.version);
      window.location.href = errorReloadPath;
      throw new Error("Detected manifest version mismatch, reloading...");
    } else if (res.status >= 400) {
      throw new Error(await res.text());
    }
    sessionStorage.removeItem(MANIFEST_VERSION_STORAGE_KEY);
    serverPatches = await res.json();
  } catch (e) {
    if (signal?.aborted) return;
    throw e;
  }
  let knownRoutes = new Set(Object.keys(manifest.routes));
  let patches = Object.values(serverPatches).reduce((acc, route) => {
    if (route && !knownRoutes.has(route.id)) {
      acc[route.id] = route;
    }
    return acc;
  }, {});
  Object.assign(manifest.routes, patches);
  paths.forEach((p) => addToFifoQueue(p, discoveredPaths));
  let parentIds = /* @__PURE__ */ new Set();
  Object.values(patches).forEach((patch) => {
    if (patch && (!patch.parentId || !patches[patch.parentId])) {
      parentIds.add(patch.parentId);
    }
  });
  parentIds.forEach(
    (parentId) => patchRoutes(
      parentId || null,
      createClientRoutes(patches, routeModules, null, ssr, isSpaMode, parentId)
    )
  );
}
function addToFifoQueue(path, queue) {
  if (queue.size >= discoveredPathsMaxSize) {
    let first = queue.values().next().value;
    queue.delete(first);
  }
  queue.add(path);
}
function debounce(callback, wait) {
  let timeoutId;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => callback(...args), wait);
  };
}

// lib/dom/ssr/components.tsx
function useDataRouterContext2() {
  let context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
  invariant2(
    context,
    "You must render this element inside a <DataRouterContext.Provider> element"
  );
  return context;
}
function useDataRouterStateContext() {
  let context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterStateContext);
  invariant2(
    context,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  );
  return context;
}
var FrameworkContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);
FrameworkContext.displayName = "FrameworkContext";
function useFrameworkContext() {
  let context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(FrameworkContext);
  invariant2(
    context,
    "You must render this element inside a <HydratedRouter> element"
  );
  return context;
}
function usePrefetchBehavior(prefetch, theirElementProps) {
  let frameworkContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(FrameworkContext);
  let [maybePrefetch, setMaybePrefetch] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  let [shouldPrefetch, setShouldPrefetch] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  let { onFocus, onBlur, onMouseEnter, onMouseLeave, onTouchStart } = theirElementProps;
  let ref = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (prefetch === "render") {
      setShouldPrefetch(true);
    }
    if (prefetch === "viewport") {
      let callback = (entries) => {
        entries.forEach((entry) => {
          setShouldPrefetch(entry.isIntersecting);
        });
      };
      let observer = new IntersectionObserver(callback, { threshold: 0.5 });
      if (ref.current) observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, [prefetch]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (maybePrefetch) {
      let id = setTimeout(() => {
        setShouldPrefetch(true);
      }, 100);
      return () => {
        clearTimeout(id);
      };
    }
  }, [maybePrefetch]);
  let setIntent = () => {
    setMaybePrefetch(true);
  };
  let cancelIntent = () => {
    setMaybePrefetch(false);
    setShouldPrefetch(false);
  };
  if (!frameworkContext) {
    return [false, ref, {}];
  }
  if (prefetch !== "intent") {
    return [shouldPrefetch, ref, {}];
  }
  return [
    shouldPrefetch,
    ref,
    {
      onFocus: composeEventHandlers(onFocus, setIntent),
      onBlur: composeEventHandlers(onBlur, cancelIntent),
      onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
      onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
      onTouchStart: composeEventHandlers(onTouchStart, setIntent)
    }
  ];
}
function composeEventHandlers(theirHandler, ourHandler) {
  return (event) => {
    theirHandler && theirHandler(event);
    if (!event.defaultPrevented) {
      ourHandler(event);
    }
  };
}
function getActiveMatches(matches, errors, isSpaMode) {
  if (isSpaMode && !isHydrated) {
    return [matches[0]];
  }
  if (errors) {
    let errorIdx = matches.findIndex((m) => errors[m.route.id] !== void 0);
    return matches.slice(0, errorIdx + 1);
  }
  return matches;
}
function Links() {
  let { isSpaMode, manifest, routeModules, criticalCss } = useFrameworkContext();
  let { errors, matches: routerMatches } = useDataRouterStateContext();
  let matches = getActiveMatches(routerMatches, errors, isSpaMode);
  let keyedLinks = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => getKeyedLinksForMatches(matches, routeModules, manifest),
    [matches, routeModules, manifest]
  );
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, typeof criticalCss === "string" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("style", { dangerouslySetInnerHTML: { __html: criticalCss } }) : null, typeof criticalCss === "object" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", { rel: "stylesheet", href: criticalCss.href }) : null, keyedLinks.map(
    ({ key, link }) => isPageLinkDescriptor(link) ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(PrefetchPageLinks, { key, ...link }) : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", { key, ...link })
  ));
}
function PrefetchPageLinks({
  page,
  ...dataLinkProps
}) {
  let { router } = useDataRouterContext2();
  let matches = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => matchRoutes(router.routes, page, router.basename),
    [router.routes, page, router.basename]
  );
  if (!matches) {
    return null;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(PrefetchPageLinksImpl, { page, matches, ...dataLinkProps });
}
function useKeyedPrefetchLinks(matches) {
  let { manifest, routeModules } = useFrameworkContext();
  let [keyedPrefetchLinks, setKeyedPrefetchLinks] = react__WEBPACK_IMPORTED_MODULE_0__.useState([]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let interrupted = false;
    void getKeyedPrefetchLinks(matches, manifest, routeModules).then(
      (links) => {
        if (!interrupted) {
          setKeyedPrefetchLinks(links);
        }
      }
    );
    return () => {
      interrupted = true;
    };
  }, [matches, manifest, routeModules]);
  return keyedPrefetchLinks;
}
function PrefetchPageLinksImpl({
  page,
  matches: nextMatches,
  ...linkProps
}) {
  let location = useLocation();
  let { manifest, routeModules } = useFrameworkContext();
  let { basename } = useDataRouterContext2();
  let { loaderData, matches } = useDataRouterStateContext();
  let newMatchesForData = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => getNewMatchesForLinks(
      page,
      nextMatches,
      matches,
      manifest,
      location,
      "data"
    ),
    [page, nextMatches, matches, manifest, location]
  );
  let newMatchesForAssets = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => getNewMatchesForLinks(
      page,
      nextMatches,
      matches,
      manifest,
      location,
      "assets"
    ),
    [page, nextMatches, matches, manifest, location]
  );
  let dataHrefs = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (page === location.pathname + location.search + location.hash) {
      return [];
    }
    let routesParams = /* @__PURE__ */ new Set();
    let foundOptOutRoute = false;
    nextMatches.forEach((m) => {
      let manifestRoute = manifest.routes[m.route.id];
      if (!manifestRoute || !manifestRoute.hasLoader) {
        return;
      }
      if (!newMatchesForData.some((m2) => m2.route.id === m.route.id) && m.route.id in loaderData && routeModules[m.route.id]?.shouldRevalidate) {
        foundOptOutRoute = true;
      } else if (manifestRoute.hasClientLoader) {
        foundOptOutRoute = true;
      } else {
        routesParams.add(m.route.id);
      }
    });
    if (routesParams.size === 0) {
      return [];
    }
    let url = singleFetchUrl(page, basename);
    if (foundOptOutRoute && routesParams.size > 0) {
      url.searchParams.set(
        "_routes",
        nextMatches.filter((m) => routesParams.has(m.route.id)).map((m) => m.route.id).join(",")
      );
    }
    return [url.pathname + url.search];
  }, [
    basename,
    loaderData,
    location,
    manifest,
    newMatchesForData,
    nextMatches,
    page,
    routeModules
  ]);
  let moduleHrefs = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => getModuleLinkHrefs(newMatchesForAssets, manifest),
    [newMatchesForAssets, manifest]
  );
  let keyedPrefetchLinks = useKeyedPrefetchLinks(newMatchesForAssets);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, dataHrefs.map((href2) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", { key: href2, rel: "prefetch", as: "fetch", href: href2, ...linkProps })), moduleHrefs.map((href2) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", { key: href2, rel: "modulepreload", href: href2, ...linkProps })), keyedPrefetchLinks.map(({ key, link }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("link", { key, ...link })
  )));
}
function Meta() {
  let { isSpaMode, routeModules } = useFrameworkContext();
  let {
    errors,
    matches: routerMatches,
    loaderData
  } = useDataRouterStateContext();
  let location = useLocation();
  let _matches = getActiveMatches(routerMatches, errors, isSpaMode);
  let error = null;
  if (errors) {
    error = errors[_matches[_matches.length - 1].route.id];
  }
  let meta = [];
  let leafMeta = null;
  let matches = [];
  for (let i = 0; i < _matches.length; i++) {
    let _match = _matches[i];
    let routeId = _match.route.id;
    let data2 = loaderData[routeId];
    let params = _match.params;
    let routeModule = routeModules[routeId];
    let routeMeta = [];
    let match = {
      id: routeId,
      data: data2,
      meta: [],
      params: _match.params,
      pathname: _match.pathname,
      handle: _match.route.handle,
      error
    };
    matches[i] = match;
    if (routeModule?.meta) {
      routeMeta = typeof routeModule.meta === "function" ? routeModule.meta({
        data: data2,
        params,
        location,
        matches,
        error
      }) : Array.isArray(routeModule.meta) ? [...routeModule.meta] : routeModule.meta;
    } else if (leafMeta) {
      routeMeta = [...leafMeta];
    }
    routeMeta = routeMeta || [];
    if (!Array.isArray(routeMeta)) {
      throw new Error(
        "The route at " + _match.route.path + " returns an invalid value. All route meta functions must return an array of meta objects.\n\nTo reference the meta function API, see https://remix.run/route/meta"
      );
    }
    match.meta = routeMeta;
    matches[i] = match;
    meta = [...routeMeta];
    leafMeta = meta;
  }
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, meta.flat().map((metaProps) => {
    if (!metaProps) {
      return null;
    }
    if ("tagName" in metaProps) {
      let { tagName, ...rest } = metaProps;
      if (!isValidMetaTag(tagName)) {
        console.warn(
          `A meta object uses an invalid tagName: ${tagName}. Expected either 'link' or 'meta'`
        );
        return null;
      }
      let Comp = tagName;
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp, { key: JSON.stringify(rest), ...rest });
    }
    if ("title" in metaProps) {
      return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", { key: "title" }, String(metaProps.title));
    }
    if ("charset" in metaProps) {
      metaProps.charSet ?? (metaProps.charSet = metaProps.charset);
      delete metaProps.charset;
    }
    if ("charSet" in metaProps && metaProps.charSet != null) {
      return typeof metaProps.charSet === "string" ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", { key: "charSet", charSet: metaProps.charSet }) : null;
    }
    if ("script:ld+json" in metaProps) {
      try {
        let json = JSON.stringify(metaProps["script:ld+json"]);
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
          "script",
          {
            key: `script:ld+json:${json}`,
            type: "application/ld+json",
            dangerouslySetInnerHTML: { __html: json }
          }
        );
      } catch (err) {
        return null;
      }
    }
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", { key: JSON.stringify(metaProps), ...metaProps });
  }));
}
function isValidMetaTag(tagName) {
  return typeof tagName === "string" && /^(meta|link)$/.test(tagName);
}
var isHydrated = false;
function Scripts(props) {
  let { manifest, serverHandoffString, isSpaMode, ssr, renderMeta } = useFrameworkContext();
  let { router, static: isStatic, staticContext } = useDataRouterContext2();
  let { matches: routerMatches } = useDataRouterStateContext();
  let enableFogOfWar = isFogOfWarEnabled(ssr);
  if (renderMeta) {
    renderMeta.didRenderScripts = true;
  }
  let matches = getActiveMatches(routerMatches, null, isSpaMode);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    isHydrated = true;
  }, []);
  let initialScripts = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    let streamScript = "window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());";
    let contextScript = staticContext ? `window.__reactRouterContext = ${serverHandoffString};${streamScript}` : " ";
    let routeModulesScript = !isStatic ? " " : `${manifest.hmr?.runtime ? `import ${JSON.stringify(manifest.hmr.runtime)};` : ""}${!enableFogOfWar ? `import ${JSON.stringify(manifest.url)}` : ""};
${matches.map((match, routeIndex) => {
      let routeVarName = `route${routeIndex}`;
      let manifestEntry = manifest.routes[match.route.id];
      invariant2(manifestEntry, `Route ${match.route.id} not found in manifest`);
      let {
        clientActionModule,
        clientLoaderModule,
        hydrateFallbackModule,
        module
      } = manifestEntry;
      let chunks = [
        ...clientActionModule ? [
          {
            module: clientActionModule,
            varName: `${routeVarName}_clientAction`
          }
        ] : [],
        ...clientLoaderModule ? [
          {
            module: clientLoaderModule,
            varName: `${routeVarName}_clientLoader`
          }
        ] : [],
        ...hydrateFallbackModule ? [
          {
            module: hydrateFallbackModule,
            varName: `${routeVarName}_HydrateFallback`
          }
        ] : [],
        { module, varName: `${routeVarName}_main` }
      ];
      if (chunks.length === 1) {
        return `import * as ${routeVarName} from ${JSON.stringify(module)};`;
      }
      let chunkImportsSnippet = chunks.map((chunk) => `import * as ${chunk.varName} from "${chunk.module}";`).join("\n");
      let mergedChunksSnippet = `const ${routeVarName} = {${chunks.map((chunk) => `...${chunk.varName}`).join(",")}};`;
      return [chunkImportsSnippet, mergedChunksSnippet].join("\n");
    }).join("\n")}
  ${enableFogOfWar ? (
      // Inline a minimal manifest with the SSR matches
      `window.__reactRouterManifest = ${JSON.stringify(
        getPartialManifest(manifest, router),
        null,
        2
      )};`
    ) : ""}
  window.__reactRouterRouteModules = {${matches.map((match, index) => `${JSON.stringify(match.route.id)}:route${index}`).join(",")}};

import(${JSON.stringify(manifest.entry.module)});`;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "script",
      {
        ...props,
        suppressHydrationWarning: true,
        dangerouslySetInnerHTML: createHtml(contextScript),
        type: void 0
      }
    ), /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "script",
      {
        ...props,
        suppressHydrationWarning: true,
        dangerouslySetInnerHTML: createHtml(routeModulesScript),
        type: "module",
        async: true
      }
    ));
  }, []);
  let preloads = isHydrated ? [] : manifest.entry.imports.concat(
    getModuleLinkHrefs(matches, manifest, {
      includeHydrateFallback: true
    })
  );
  return isHydrated ? null : /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !enableFogOfWar ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "link",
    {
      rel: "modulepreload",
      href: manifest.url,
      crossOrigin: props.crossOrigin
    }
  ) : null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "link",
    {
      rel: "modulepreload",
      href: manifest.entry.module,
      crossOrigin: props.crossOrigin
    }
  ), dedupe(preloads).map((path) => /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "link",
    {
      key: path,
      rel: "modulepreload",
      href: path,
      crossOrigin: props.crossOrigin
    }
  )), initialScripts);
}
function dedupe(array) {
  return [...new Set(array)];
}
function mergeRefs(...refs) {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
}

// lib/dom/lib.tsx
var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
try {
  if (isBrowser) {
    window.__reactRouterVersion = "7.3.0";
  }
} catch (e) {
}
function createBrowserRouter(routes, opts) {
  return createRouter({
    basename: opts?.basename,
    unstable_getContext: opts?.unstable_getContext,
    future: opts?.future,
    history: createBrowserHistory({ window: opts?.window }),
    hydrationData: opts?.hydrationData || parseHydrationData(),
    routes,
    mapRouteProperties,
    dataStrategy: opts?.dataStrategy,
    patchRoutesOnNavigation: opts?.patchRoutesOnNavigation,
    window: opts?.window
  }).initialize();
}
function createHashRouter(routes, opts) {
  return createRouter({
    basename: opts?.basename,
    unstable_getContext: opts?.unstable_getContext,
    future: opts?.future,
    history: createHashHistory({ window: opts?.window }),
    hydrationData: opts?.hydrationData || parseHydrationData(),
    routes,
    mapRouteProperties,
    dataStrategy: opts?.dataStrategy,
    patchRoutesOnNavigation: opts?.patchRoutesOnNavigation,
    window: opts?.window
  }).initialize();
}
function parseHydrationData() {
  let state = window?.__staticRouterHydrationData;
  if (state && state.errors) {
    state = {
      ...state,
      errors: deserializeErrors(state.errors)
    };
  }
  return state;
}
function deserializeErrors(errors) {
  if (!errors) return null;
  let entries = Object.entries(errors);
  let serialized = {};
  for (let [key, val] of entries) {
    if (val && val.__type === "RouteErrorResponse") {
      serialized[key] = new ErrorResponseImpl(
        val.status,
        val.statusText,
        val.data,
        val.internal === true
      );
    } else if (val && val.__type === "Error") {
      if (val.__subType) {
        let ErrorConstructor = window[val.__subType];
        if (typeof ErrorConstructor === "function") {
          try {
            let error = new ErrorConstructor(val.message);
            error.stack = "";
            serialized[key] = error;
          } catch (e) {
          }
        }
      }
      if (serialized[key] == null) {
        let error = new Error(val.message);
        error.stack = "";
        serialized[key] = error;
      }
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}
function BrowserRouter({
  basename,
  children,
  window: window2
}) {
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({ window: window2, v5Compat: true });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (newState) => {
      react__WEBPACK_IMPORTED_MODULE_0__.startTransition(() => setStateImpl(newState));
    },
    [setStateImpl]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    Router,
    {
      basename,
      children,
      location: state.location,
      navigationType: state.action,
      navigator: history
    }
  );
}
function HashRouter({ basename, children, window: window2 }) {
  let historyRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  if (historyRef.current == null) {
    historyRef.current = createHashHistory({ window: window2, v5Compat: true });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (newState) => {
      react__WEBPACK_IMPORTED_MODULE_0__.startTransition(() => setStateImpl(newState));
    },
    [setStateImpl]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    Router,
    {
      basename,
      children,
      location: state.location,
      navigationType: state.action,
      navigator: history
    }
  );
}
function HistoryRouter({
  basename,
  children,
  history
}) {
  let [state, setStateImpl] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    action: history.action,
    location: history.location
  });
  let setState = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (newState) => {
      react__WEBPACK_IMPORTED_MODULE_0__.startTransition(() => setStateImpl(newState));
    },
    [setStateImpl]
  );
  react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    Router,
    {
      basename,
      children,
      location: state.location,
      navigationType: state.action,
      navigator: history
    }
  );
}
HistoryRouter.displayName = "unstable_HistoryRouter";
var ABSOLUTE_URL_REGEX2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var Link = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  function LinkWithRef({
    onClick,
    discover = "render",
    prefetch = "none",
    relative,
    reloadDocument,
    replace: replace2,
    state,
    target,
    to,
    preventScrollReset,
    viewTransition,
    ...rest
  }, forwardedRef) {
    let { basename } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
    let isAbsolute = typeof to === "string" && ABSOLUTE_URL_REGEX2.test(to);
    let absoluteHref;
    let isExternal = false;
    if (typeof to === "string" && isAbsolute) {
      absoluteHref = to;
      if (isBrowser) {
        try {
          let currentUrl = new URL(window.location.href);
          let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
          let path = stripBasename(targetUrl.pathname, basename);
          if (targetUrl.origin === currentUrl.origin && path != null) {
            to = path + targetUrl.search + targetUrl.hash;
          } else {
            isExternal = true;
          }
        } catch (e) {
          warning(
            false,
            `<Link to="${to}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
          );
        }
      }
    }
    let href2 = useHref(to, { relative });
    let [shouldPrefetch, prefetchRef, prefetchHandlers] = usePrefetchBehavior(
      prefetch,
      rest
    );
    let internalOnClick = useLinkClickHandler(to, {
      replace: replace2,
      state,
      target,
      preventScrollReset,
      relative,
      viewTransition
    });
    function handleClick(event) {
      if (onClick) onClick(event);
      if (!event.defaultPrevented) {
        internalOnClick(event);
      }
    }
    let link = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
        "a",
        {
          ...rest,
          ...prefetchHandlers,
          href: absoluteHref || href2,
          onClick: isExternal || reloadDocument ? onClick : handleClick,
          ref: mergeRefs(forwardedRef, prefetchRef),
          target,
          "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
        }
      )
    );
    return shouldPrefetch && !isAbsolute ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, link, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(PrefetchPageLinks, { page: href2 })) : link;
  }
);
Link.displayName = "Link";
var NavLink = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  function NavLinkWithRef({
    "aria-current": ariaCurrentProp = "page",
    caseSensitive = false,
    className: classNameProp = "",
    end = false,
    style: styleProp,
    to,
    viewTransition,
    children,
    ...rest
  }, ref) {
    let path = useResolvedPath(to, { relative: rest.relative });
    let location = useLocation();
    let routerState = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterStateContext);
    let { navigator: navigator2, basename } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
    let isTransitioning = routerState != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useViewTransitionState(path) && viewTransition === true;
    let toPathname = navigator2.encodeLocation ? navigator2.encodeLocation(path).pathname : path.pathname;
    let locationPathname = location.pathname;
    let nextLocationPathname = routerState && routerState.navigation && routerState.navigation.location ? routerState.navigation.location.pathname : null;
    if (!caseSensitive) {
      locationPathname = locationPathname.toLowerCase();
      nextLocationPathname = nextLocationPathname ? nextLocationPathname.toLowerCase() : null;
      toPathname = toPathname.toLowerCase();
    }
    if (nextLocationPathname && basename) {
      nextLocationPathname = stripBasename(nextLocationPathname, basename) || nextLocationPathname;
    }
    const endSlashPosition = toPathname !== "/" && toPathname.endsWith("/") ? toPathname.length - 1 : toPathname.length;
    let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(endSlashPosition) === "/";
    let isPending = nextLocationPathname != null && (nextLocationPathname === toPathname || !end && nextLocationPathname.startsWith(toPathname) && nextLocationPathname.charAt(toPathname.length) === "/");
    let renderProps = {
      isActive,
      isPending,
      isTransitioning
    };
    let ariaCurrent = isActive ? ariaCurrentProp : void 0;
    let className;
    if (typeof classNameProp === "function") {
      className = classNameProp(renderProps);
    } else {
      className = [
        classNameProp,
        isActive ? "active" : null,
        isPending ? "pending" : null,
        isTransitioning ? "transitioning" : null
      ].filter(Boolean).join(" ");
    }
    let style = typeof styleProp === "function" ? styleProp(renderProps) : styleProp;
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      Link,
      {
        ...rest,
        "aria-current": ariaCurrent,
        className,
        ref,
        style,
        to,
        viewTransition
      },
      typeof children === "function" ? children(renderProps) : children
    );
  }
);
NavLink.displayName = "NavLink";
var Form = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
  ({
    discover = "render",
    fetcherKey,
    navigate,
    reloadDocument,
    replace: replace2,
    state,
    method = defaultMethod,
    action,
    onSubmit,
    relative,
    preventScrollReset,
    viewTransition,
    ...props
  }, forwardedRef) => {
    let submit = useSubmit();
    let formAction = useFormAction(action, { relative });
    let formMethod = method.toLowerCase() === "get" ? "get" : "post";
    let isAbsolute = typeof action === "string" && ABSOLUTE_URL_REGEX2.test(action);
    let submitHandler = (event) => {
      onSubmit && onSubmit(event);
      if (event.defaultPrevented) return;
      event.preventDefault();
      let submitter = event.nativeEvent.submitter;
      let submitMethod = submitter?.getAttribute("formmethod") || method;
      submit(submitter || event.currentTarget, {
        fetcherKey,
        method: submitMethod,
        navigate,
        replace: replace2,
        state,
        relative,
        preventScrollReset,
        viewTransition
      });
    };
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      "form",
      {
        ref: forwardedRef,
        method: formMethod,
        action: formAction,
        onSubmit: reloadDocument ? onSubmit : submitHandler,
        ...props,
        "data-discover": !isAbsolute && discover === "render" ? "true" : void 0
      }
    );
  }
);
Form.displayName = "Form";
function ScrollRestoration({
  getKey,
  storageKey,
  ...props
}) {
  let remixContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(FrameworkContext);
  let { basename } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let location = useLocation();
  let matches = useMatches();
  useScrollRestoration({ getKey, storageKey });
  let ssrKey = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => {
      if (!remixContext || !getKey) return null;
      let userKey = getScrollRestorationKey(
        location,
        matches,
        basename,
        getKey
      );
      return userKey !== location.key ? userKey : null;
    },
    // Nah, we only need this the first time for the SSR render
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  if (!remixContext || remixContext.isSpaMode) {
    return null;
  }
  let restoreScroll = ((storageKey2, restoreKey) => {
    if (!window.history.state || !window.history.state.key) {
      let key = Math.random().toString(32).slice(2);
      window.history.replaceState({ key }, "");
    }
    try {
      let positions = JSON.parse(sessionStorage.getItem(storageKey2) || "{}");
      let storedY = positions[restoreKey || window.history.state.key];
      if (typeof storedY === "number") {
        window.scrollTo(0, storedY);
      }
    } catch (error) {
      console.error(error);
      sessionStorage.removeItem(storageKey2);
    }
  }).toString();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "script",
    {
      ...props,
      suppressHydrationWarning: true,
      dangerouslySetInnerHTML: {
        __html: `(${restoreScroll})(${JSON.stringify(
          storageKey || SCROLL_RESTORATION_STORAGE_KEY
        )}, ${JSON.stringify(ssrKey)})`
      }
    }
  );
}
ScrollRestoration.displayName = "ScrollRestoration";
function getDataRouterConsoleError2(hookName) {
  return `${hookName} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function useDataRouterContext3(hookName) {
  let ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterContext);
  invariant(ctx, getDataRouterConsoleError2(hookName));
  return ctx;
}
function useDataRouterState2(hookName) {
  let state = react__WEBPACK_IMPORTED_MODULE_0__.useContext(DataRouterStateContext);
  invariant(state, getDataRouterConsoleError2(hookName));
  return state;
}
function useLinkClickHandler(to, {
  target,
  replace: replaceProp,
  state,
  preventScrollReset,
  relative,
  viewTransition
} = {}) {
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, { relative });
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (event) => {
      if (shouldProcessLinkClick(event, target)) {
        event.preventDefault();
        let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
        navigate(to, {
          replace: replace2,
          state,
          preventScrollReset,
          relative,
          viewTransition
        });
      }
    },
    [
      location,
      navigate,
      path,
      replaceProp,
      state,
      target,
      to,
      preventScrollReset,
      relative,
      viewTransition
    ]
  );
}
function useSearchParams(defaultInit) {
  warning(
    typeof URLSearchParams !== "undefined",
    `You cannot use the \`useSearchParams\` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.`
  );
  let defaultSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(createSearchParams(defaultInit));
  let hasSetSearchParamsRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  let location = useLocation();
  let searchParams = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => (
      // Only merge in the defaults if we haven't yet called setSearchParams.
      // Once we call that we want those to take precedence, otherwise you can't
      // remove a param with setSearchParams({}) if it has an initial value
      getSearchParamsForLocation(
        location.search,
        hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current
      )
    ),
    [location.search]
  );
  let navigate = useNavigate();
  let setSearchParams = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    (nextInit, navigateOptions) => {
      const newSearchParams = createSearchParams(
        typeof nextInit === "function" ? nextInit(searchParams) : nextInit
      );
      hasSetSearchParamsRef.current = true;
      navigate("?" + newSearchParams, navigateOptions);
    },
    [navigate, searchParams]
  );
  return [searchParams, setSearchParams];
}
var fetcherId = 0;
var getUniqueFetcherId = () => `__${String(++fetcherId)}__`;
function useSubmit() {
  let { router } = useDataRouterContext3("useSubmit" /* UseSubmit */);
  let { basename } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let currentRouteId = useRouteId();
  return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    async (target, options = {}) => {
      let { action, method, encType, formData, body } = getFormSubmissionInfo(
        target,
        basename
      );
      if (options.navigate === false) {
        let key = options.fetcherKey || getUniqueFetcherId();
        await router.fetch(key, currentRouteId, options.action || action, {
          preventScrollReset: options.preventScrollReset,
          formData,
          body,
          formMethod: options.method || method,
          formEncType: options.encType || encType,
          flushSync: options.flushSync
        });
      } else {
        await router.navigate(options.action || action, {
          preventScrollReset: options.preventScrollReset,
          formData,
          body,
          formMethod: options.method || method,
          formEncType: options.encType || encType,
          replace: options.replace,
          state: options.state,
          fromRouteId: currentRouteId,
          flushSync: options.flushSync,
          viewTransition: options.viewTransition
        });
      }
    },
    [router, basename, currentRouteId]
  );
}
function useFormAction(action, { relative } = {}) {
  let { basename } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let routeContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  invariant(routeContext, "useFormAction must be used inside a RouteContext");
  let [match] = routeContext.matches.slice(-1);
  let path = { ...useResolvedPath(action ? action : ".", { relative }) };
  let location = useLocation();
  if (action == null) {
    path.search = location.search;
    let params = new URLSearchParams(path.search);
    let indexValues = params.getAll("index");
    let hasNakedIndexParam = indexValues.some((v) => v === "");
    if (hasNakedIndexParam) {
      params.delete("index");
      indexValues.filter((v) => v).forEach((v) => params.append("index", v));
      let qs = params.toString();
      path.search = qs ? `?${qs}` : "";
    }
  }
  if ((!action || action === ".") && match.route.index) {
    path.search = path.search ? path.search.replace(/^\?/, "?index&") : "?index";
  }
  if (basename !== "/") {
    path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
  }
  return createPath(path);
}
function useFetcher({
  key
} = {}) {
  let { router } = useDataRouterContext3("useFetcher" /* UseFetcher */);
  let state = useDataRouterState2("useFetcher" /* UseFetcher */);
  let fetcherData = react__WEBPACK_IMPORTED_MODULE_0__.useContext(FetchersContext);
  let route = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RouteContext);
  let routeId = route.matches[route.matches.length - 1]?.route.id;
  invariant(fetcherData, `useFetcher must be used inside a FetchersContext`);
  invariant(route, `useFetcher must be used inside a RouteContext`);
  invariant(
    routeId != null,
    `useFetcher can only be used on routes that contain a unique "id"`
  );
  let defaultKey = react__WEBPACK_IMPORTED_MODULE_0__.useId();
  let [fetcherKey, setFetcherKey] = react__WEBPACK_IMPORTED_MODULE_0__.useState(key || defaultKey);
  if (key && key !== fetcherKey) {
    setFetcherKey(key);
  }
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    router.getFetcher(fetcherKey);
    return () => router.deleteFetcher(fetcherKey);
  }, [router, fetcherKey]);
  let load = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    async (href2, opts) => {
      invariant(routeId, "No routeId available for fetcher.load()");
      await router.fetch(fetcherKey, routeId, href2, opts);
    },
    [fetcherKey, routeId, router]
  );
  let submitImpl = useSubmit();
  let submit = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(
    async (target, opts) => {
      await submitImpl(target, {
        ...opts,
        navigate: false,
        fetcherKey
      });
    },
    [fetcherKey, submitImpl]
  );
  let FetcherForm = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    let FetcherForm2 = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(
      (props, ref) => {
        return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(Form, { ...props, navigate: false, fetcherKey, ref });
      }
    );
    FetcherForm2.displayName = "fetcher.Form";
    return FetcherForm2;
  }, [fetcherKey]);
  let fetcher = state.fetchers.get(fetcherKey) || IDLE_FETCHER;
  let data2 = fetcherData.get(fetcherKey);
  let fetcherWithComponents = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    () => ({
      Form: FetcherForm,
      submit,
      load,
      ...fetcher,
      data: data2
    }),
    [FetcherForm, submit, load, fetcher, data2]
  );
  return fetcherWithComponents;
}
function useFetchers() {
  let state = useDataRouterState2("useFetchers" /* UseFetchers */);
  return Array.from(state.fetchers.entries()).map(([key, fetcher]) => ({
    ...fetcher,
    key
  }));
}
var SCROLL_RESTORATION_STORAGE_KEY = "react-router-scroll-positions";
var savedScrollPositions = {};
function getScrollRestorationKey(location, matches, basename, getKey) {
  let key = null;
  if (getKey) {
    if (basename !== "/") {
      key = getKey(
        {
          ...location,
          pathname: stripBasename(location.pathname, basename) || location.pathname
        },
        matches
      );
    } else {
      key = getKey(location, matches);
    }
  }
  if (key == null) {
    key = location.key;
  }
  return key;
}
function useScrollRestoration({
  getKey,
  storageKey
} = {}) {
  let { router } = useDataRouterContext3("useScrollRestoration" /* UseScrollRestoration */);
  let { restoreScrollPosition, preventScrollReset } = useDataRouterState2(
    "useScrollRestoration" /* UseScrollRestoration */
  );
  let { basename } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(NavigationContext);
  let location = useLocation();
  let matches = useMatches();
  let navigation = useNavigation();
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);
  usePageHide(
    react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => {
      if (navigation.state === "idle") {
        let key = getScrollRestorationKey(location, matches, basename, getKey);
        savedScrollPositions[key] = window.scrollY;
      }
      try {
        sessionStorage.setItem(
          storageKey || SCROLL_RESTORATION_STORAGE_KEY,
          JSON.stringify(savedScrollPositions)
        );
      } catch (error) {
        warning(
          false,
          `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${error}).`
        );
      }
      window.history.scrollRestoration = "auto";
    }, [navigation.state, getKey, basename, location, matches, storageKey])
  );
  if (typeof document !== "undefined") {
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      try {
        let sessionPositions = sessionStorage.getItem(
          storageKey || SCROLL_RESTORATION_STORAGE_KEY
        );
        if (sessionPositions) {
          savedScrollPositions = JSON.parse(sessionPositions);
        }
      } catch (e) {
      }
    }, [storageKey]);
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      let disableScrollRestoration = router?.enableScrollRestoration(
        savedScrollPositions,
        () => window.scrollY,
        getKey ? (location2, matches2) => getScrollRestorationKey(location2, matches2, basename, getKey) : void 0
      );
      return () => disableScrollRestoration && disableScrollRestoration();
    }, [router, basename, getKey]);
    react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect(() => {
      if (restoreScrollPosition === false) {
        return;
      }
      if (typeof restoreScrollPosition === "number") {
        window.scrollTo(0, restoreScrollPosition);
        return;
      }
      if (location.hash) {
        let el = document.getElementById(
          decodeURIComponent(location.hash.slice(1))
        );
        if (el) {
          el.scrollIntoView();
          return;
        }
      }
      if (preventScrollReset === true) {
        return;
      }
      window.scrollTo(0, 0);
    }, [location, restoreScrollPosition, preventScrollReset]);
  }
}
function useBeforeUnload(callback, options) {
  let { capture } = options || {};
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let opts = capture != null ? { capture } : void 0;
    window.addEventListener("beforeunload", callback, opts);
    return () => {
      window.removeEventListener("beforeunload", callback, opts);
    };
  }, [callback, capture]);
}
function usePageHide(callback, options) {
  let { capture } = options || {};
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    let opts = capture != null ? { capture } : void 0;
    window.addEventListener("pagehide", callback, opts);
    return () => {
      window.removeEventListener("pagehide", callback, opts);
    };
  }, [callback, capture]);
}
function usePrompt({
  when,
  message
}) {
  let blocker = useBlocker(when);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blocker.state === "blocked") {
      let proceed = window.confirm(message);
      if (proceed) {
        setTimeout(blocker.proceed, 0);
      } else {
        blocker.reset();
      }
    }
  }, [blocker, message]);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {
    if (blocker.state === "blocked" && !when) {
      blocker.reset();
    }
  }, [blocker, when]);
}
function useViewTransitionState(to, opts = {}) {
  let vtContext = react__WEBPACK_IMPORTED_MODULE_0__.useContext(ViewTransitionContext);
  invariant(
    vtContext != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename } = useDataRouterContext3(
    "useViewTransitionState" /* useViewTransitionState */
  );
  let path = useResolvedPath(to, { relative: opts.relative });
  if (!vtContext.isTransitioning) {
    return false;
  }
  let currentPath = stripBasename(vtContext.currentLocation.pathname, basename) || vtContext.currentLocation.pathname;
  let nextPath = stripBasename(vtContext.nextLocation.pathname, basename) || vtContext.nextLocation.pathname;
  return matchPath(path.pathname, nextPath) != null || matchPath(path.pathname, currentPath) != null;
}

// lib/dom/server.tsx

function StaticRouter({
  basename,
  children,
  location: locationProp = "/"
}) {
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let action = "POP" /* Pop */;
  let location = {
    pathname: locationProp.pathname || "/",
    search: locationProp.search || "",
    hash: locationProp.hash || "",
    state: locationProp.state != null ? locationProp.state : null,
    key: locationProp.key || "default"
  };
  let staticNavigator = getStatelessNavigator();
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    Router,
    {
      basename,
      children,
      location,
      navigationType: action,
      navigator: staticNavigator,
      static: true
    }
  );
}
function StaticRouterProvider({
  context,
  router,
  hydrate = true,
  nonce
}) {
  invariant(
    router && context,
    "You must provide `router` and `context` to <StaticRouterProvider>"
  );
  let dataRouterContext = {
    router,
    navigator: getStatelessNavigator(),
    static: true,
    staticContext: context,
    basename: context.basename || "/"
  };
  let fetchersContext = /* @__PURE__ */ new Map();
  let hydrateScript = "";
  if (hydrate !== false) {
    let data2 = {
      loaderData: context.loaderData,
      actionData: context.actionData,
      errors: serializeErrors(context.errors)
    };
    let json = htmlEscape(JSON.stringify(JSON.stringify(data2)));
    hydrateScript = `window.__staticRouterHydrationData = JSON.parse(${json});`;
  }
  let { state } = dataRouterContext.router;
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRouterContext.Provider, { value: dataRouterContext }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataRouterStateContext.Provider, { value: state }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(FetchersContext.Provider, { value: fetchersContext }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(ViewTransitionContext.Provider, { value: { isTransitioning: false } }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    Router,
    {
      basename: dataRouterContext.basename,
      location: state.location,
      navigationType: state.historyAction,
      navigator: dataRouterContext.navigator,
      static: dataRouterContext.static
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      DataRoutes2,
      {
        routes: router.routes,
        future: router.future,
        state
      }
    )
  ))))), hydrateScript ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    "script",
    {
      suppressHydrationWarning: true,
      nonce,
      dangerouslySetInnerHTML: { __html: hydrateScript }
    }
  ) : null);
}
function DataRoutes2({
  routes,
  future,
  state
}) {
  return useRoutesImpl(routes, void 0, state, future);
}
function serializeErrors(errors) {
  if (!errors) return null;
  let entries = Object.entries(errors);
  let serialized = {};
  for (let [key, val] of entries) {
    if (isRouteErrorResponse(val)) {
      serialized[key] = { ...val, __type: "RouteErrorResponse" };
    } else if (val instanceof Error) {
      serialized[key] = {
        message: val.message,
        __type: "Error",
        // If this is a subclass (i.e., ReferenceError), send up the type so we
        // can re-create the same type during hydration.
        ...val.name !== "Error" ? {
          __subType: val.name
        } : {}
      };
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}
function getStatelessNavigator() {
  return {
    createHref,
    encodeLocation,
    push(to) {
      throw new Error(
        `You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`
      );
    },
    replace(to) {
      throw new Error(
        `You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`
      );
    },
    go(delta) {
      throw new Error(
        `You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`
      );
    },
    back() {
      throw new Error(
        `You cannot use navigator.back() on the server because it is a stateless environment.`
      );
    },
    forward() {
      throw new Error(
        `You cannot use navigator.forward() on the server because it is a stateless environment.`
      );
    }
  };
}
function createStaticHandler2(routes, opts) {
  return createStaticHandler(routes, {
    ...opts,
    mapRouteProperties
  });
}
function createStaticRouter(routes, context, opts = {}) {
  let manifest = {};
  let dataRoutes = convertRoutesToDataRoutes(
    routes,
    mapRouteProperties,
    void 0,
    manifest
  );
  let matches = context.matches.map((match) => {
    let route = manifest[match.route.id] || match.route;
    return {
      ...match,
      route
    };
  });
  let msg = (method) => `You cannot use router.${method}() on the server because it is a stateless environment`;
  return {
    get basename() {
      return context.basename;
    },
    get future() {
      return {
        unstable_middleware: false,
        ...opts?.future
      };
    },
    get state() {
      return {
        historyAction: "POP" /* Pop */,
        location: context.location,
        matches,
        loaderData: context.loaderData,
        actionData: context.actionData,
        errors: context.errors,
        initialized: true,
        navigation: IDLE_NAVIGATION,
        restoreScrollPosition: null,
        preventScrollReset: false,
        revalidation: "idle",
        fetchers: /* @__PURE__ */ new Map(),
        blockers: /* @__PURE__ */ new Map()
      };
    },
    get routes() {
      return dataRoutes;
    },
    get window() {
      return void 0;
    },
    initialize() {
      throw msg("initialize");
    },
    subscribe() {
      throw msg("subscribe");
    },
    enableScrollRestoration() {
      throw msg("enableScrollRestoration");
    },
    navigate() {
      throw msg("navigate");
    },
    fetch() {
      throw msg("fetch");
    },
    revalidate() {
      throw msg("revalidate");
    },
    createHref,
    encodeLocation,
    getFetcher() {
      return IDLE_FETCHER;
    },
    deleteFetcher() {
      throw msg("deleteFetcher");
    },
    dispose() {
      throw msg("dispose");
    },
    getBlocker() {
      return IDLE_BLOCKER;
    },
    deleteBlocker() {
      throw msg("deleteBlocker");
    },
    patchRoutes() {
      throw msg("patchRoutes");
    },
    _internalFetchControllers: /* @__PURE__ */ new Map(),
    _internalSetRoutes() {
      throw msg("_internalSetRoutes");
    }
  };
}
function createHref(to) {
  return typeof to === "string" ? to : createPath(to);
}
function encodeLocation(to) {
  let href2 = typeof to === "string" ? to : createPath(to);
  href2 = href2.replace(/ $/, "%20");
  let encoded = ABSOLUTE_URL_REGEX3.test(href2) ? new URL(href2) : new URL(href2, "http://localhost");
  return {
    pathname: encoded.pathname,
    search: encoded.search,
    hash: encoded.hash
  };
}
var ABSOLUTE_URL_REGEX3 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
var ESCAPE_LOOKUP2 = {
  "&": "\\u0026",
  ">": "\\u003e",
  "<": "\\u003c",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var ESCAPE_REGEX2 = /[&><\u2028\u2029]/g;
function htmlEscape(str) {
  return str.replace(ESCAPE_REGEX2, (match) => ESCAPE_LOOKUP2[match]);
}

// lib/dom/ssr/server.tsx

function ServerRouter({
  context,
  url,
  nonce
}) {
  if (typeof url === "string") {
    url = new URL(url);
  }
  let { manifest, routeModules, criticalCss, serverHandoffString } = context;
  let routes = createServerRoutes(
    manifest.routes,
    routeModules,
    context.future,
    context.isSpaMode
  );
  context.staticHandlerContext.loaderData = {
    ...context.staticHandlerContext.loaderData
  };
  for (let match of context.staticHandlerContext.matches) {
    let routeId = match.route.id;
    let route = routeModules[routeId];
    let manifestRoute = context.manifest.routes[routeId];
    if (route && manifestRoute && shouldHydrateRouteLoader(manifestRoute, route, context.isSpaMode) && (route.HydrateFallback || !manifestRoute.hasLoader)) {
      delete context.staticHandlerContext.loaderData[routeId];
    }
  }
  let router = createStaticRouter(routes, context.staticHandlerContext);
  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    FrameworkContext.Provider,
    {
      value: {
        manifest,
        routeModules,
        criticalCss,
        serverHandoffString,
        future: context.future,
        ssr: context.ssr,
        isSpaMode: context.isSpaMode,
        serializeError: context.serializeError,
        renderMeta: context.renderMeta
      }
    },
    /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RemixErrorBoundary, { location: router.state.location }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
      StaticRouterProvider,
      {
        router,
        context: context.staticHandlerContext,
        hydrate: false
      }
    ))
  ), context.serverHandoffStream ? /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    StreamTransfer,
    {
      context,
      identifier: 0,
      reader: context.serverHandoffStream.getReader(),
      textDecoder: new TextDecoder(),
      nonce
    }
  )) : null);
}

// lib/dom/ssr/routes-test-stub.tsx

function createRoutesStub(routes, unstable_getContext) {
  return function RoutesTestStub({
    initialEntries,
    initialIndex,
    hydrationData,
    future
  }) {
    let routerRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    let remixContextRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
    if (routerRef.current == null) {
      remixContextRef.current = {
        future: {
          unstable_middleware: future?.unstable_middleware === true
        },
        manifest: {
          routes: {},
          entry: { imports: [], module: "" },
          url: "",
          version: ""
        },
        routeModules: {},
        ssr: false,
        isSpaMode: false
      };
      let patched = processRoutes(
        // @ts-expect-error `StubRouteObject` is stricter about `loader`/`action`
        // types compared to `AgnosticRouteObject`
        convertRoutesToDataRoutes(routes, (r) => r),
        remixContextRef.current.manifest,
        remixContextRef.current.routeModules
      );
      routerRef.current = createMemoryRouter(patched, {
        unstable_getContext,
        initialEntries,
        initialIndex,
        hydrationData
      });
    }
    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(FrameworkContext.Provider, { value: remixContextRef.current }, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(RouterProvider, { router: routerRef.current }));
  };
}
function processRoutes(routes, manifest, routeModules, parentId) {
  return routes.map((route) => {
    if (!route.id) {
      throw new Error(
        "Expected a route.id in @remix-run/testing processRoutes() function"
      );
    }
    let newRoute = {
      id: route.id,
      path: route.path,
      index: route.index,
      Component: route.Component,
      HydrateFallback: route.HydrateFallback,
      ErrorBoundary: route.ErrorBoundary,
      action: route.action,
      loader: route.loader,
      handle: route.handle,
      shouldRevalidate: route.shouldRevalidate
    };
    let entryRoute = {
      id: route.id,
      path: route.path,
      index: route.index,
      parentId,
      hasAction: route.action != null,
      hasLoader: route.loader != null,
      // When testing routes, you should just be stubbing loader/action, not
      // trying to re-implement the full loader/clientLoader/SSR/hydration flow.
      // That is better tested via E2E tests.
      hasClientAction: false,
      hasClientLoader: false,
      hasErrorBoundary: route.ErrorBoundary != null,
      // any need for these?
      module: "build/stub-path-to-module.js",
      clientActionModule: void 0,
      clientLoaderModule: void 0,
      hydrateFallbackModule: void 0
    };
    manifest.routes[newRoute.id] = entryRoute;
    routeModules[route.id] = {
      default: route.Component || Outlet,
      ErrorBoundary: route.ErrorBoundary || void 0,
      handle: route.handle,
      links: route.links,
      meta: route.meta,
      shouldRevalidate: route.shouldRevalidate
    };
    if (route.children) {
      newRoute.children = processRoutes(
        route.children,
        manifest,
        routeModules,
        newRoute.id
      );
    }
    return newRoute;
  });
}

// lib/server-runtime/cookies.ts


// lib/server-runtime/crypto.ts
var encoder = new TextEncoder();
var sign = async (value, secret) => {
  let data2 = encoder.encode(value);
  let key = await createKey2(secret, ["sign"]);
  let signature = await crypto.subtle.sign("HMAC", key, data2);
  let hash = btoa(String.fromCharCode(...new Uint8Array(signature))).replace(
    /=+$/,
    ""
  );
  return value + "." + hash;
};
var unsign = async (cookie, secret) => {
  let index = cookie.lastIndexOf(".");
  let value = cookie.slice(0, index);
  let hash = cookie.slice(index + 1);
  let data2 = encoder.encode(value);
  let key = await createKey2(secret, ["verify"]);
  let signature = byteStringToUint8Array(atob(hash));
  let valid = await crypto.subtle.verify("HMAC", key, signature, data2);
  return valid ? value : false;
};
var createKey2 = async (secret, usages) => crypto.subtle.importKey(
  "raw",
  encoder.encode(secret),
  { name: "HMAC", hash: "SHA-256" },
  false,
  usages
);
function byteStringToUint8Array(byteString) {
  let array = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    array[i] = byteString.charCodeAt(i);
  }
  return array;
}

// lib/server-runtime/cookies.ts
var createCookie = (name, cookieOptions = {}) => {
  let { secrets = [], ...options } = {
    path: "/",
    sameSite: "lax",
    ...cookieOptions
  };
  warnOnceAboutExpiresCookie(name, options.expires);
  return {
    get name() {
      return name;
    },
    get isSigned() {
      return secrets.length > 0;
    },
    get expires() {
      return typeof options.maxAge !== "undefined" ? new Date(Date.now() + options.maxAge * 1e3) : options.expires;
    },
    async parse(cookieHeader, parseOptions) {
      if (!cookieHeader) return null;
      let cookies = (0,cookie__WEBPACK_IMPORTED_MODULE_2__.parse)(cookieHeader, { ...options, ...parseOptions });
      if (name in cookies) {
        let value = cookies[name];
        if (typeof value === "string" && value !== "") {
          let decoded = await decodeCookieValue(value, secrets);
          return decoded;
        } else {
          return "";
        }
      } else {
        return null;
      }
    },
    async serialize(value, serializeOptions) {
      return (0,cookie__WEBPACK_IMPORTED_MODULE_2__.serialize)(
        name,
        value === "" ? "" : await encodeCookieValue(value, secrets),
        {
          ...options,
          ...serializeOptions
        }
      );
    }
  };
};
var isCookie = (object) => {
  return object != null && typeof object.name === "string" && typeof object.isSigned === "boolean" && typeof object.parse === "function" && typeof object.serialize === "function";
};
async function encodeCookieValue(value, secrets) {
  let encoded = encodeData(value);
  if (secrets.length > 0) {
    encoded = await sign(encoded, secrets[0]);
  }
  return encoded;
}
async function decodeCookieValue(value, secrets) {
  if (secrets.length > 0) {
    for (let secret of secrets) {
      let unsignedValue = await unsign(value, secret);
      if (unsignedValue !== false) {
        return decodeData(unsignedValue);
      }
    }
    return null;
  }
  return decodeData(value);
}
function encodeData(value) {
  return btoa(myUnescape(encodeURIComponent(JSON.stringify(value))));
}
function decodeData(value) {
  try {
    return JSON.parse(decodeURIComponent(myEscape(atob(value))));
  } catch (error) {
    return {};
  }
}
function myEscape(value) {
  let str = value.toString();
  let result = "";
  let index = 0;
  let chr, code;
  while (index < str.length) {
    chr = str.charAt(index++);
    if (/[\w*+\-./@]/.exec(chr)) {
      result += chr;
    } else {
      code = chr.charCodeAt(0);
      if (code < 256) {
        result += "%" + hex(code, 2);
      } else {
        result += "%u" + hex(code, 4).toUpperCase();
      }
    }
  }
  return result;
}
function hex(code, length) {
  let result = code.toString(16);
  while (result.length < length) result = "0" + result;
  return result;
}
function myUnescape(value) {
  let str = value.toString();
  let result = "";
  let index = 0;
  let chr, part;
  while (index < str.length) {
    chr = str.charAt(index++);
    if (chr === "%") {
      if (str.charAt(index) === "u") {
        part = str.slice(index + 1, index + 5);
        if (/^[\da-f]{4}$/i.exec(part)) {
          result += String.fromCharCode(parseInt(part, 16));
          index += 5;
          continue;
        }
      } else {
        part = str.slice(index, index + 2);
        if (/^[\da-f]{2}$/i.exec(part)) {
          result += String.fromCharCode(parseInt(part, 16));
          index += 2;
          continue;
        }
      }
    }
    result += chr;
  }
  return result;
}
function warnOnceAboutExpiresCookie(name, expires) {
  warnOnce(
    !expires,
    `The "${name}" cookie has an "expires" property set. This will cause the expires value to not be updated when the session is committed. Instead, you should set the expires value when serializing the cookie. You can use \`commitSession(session, { expires })\` if using a session storage object, or \`cookie.serialize("value", { expires })\` if you're using the cookie directly.`
  );
}

// lib/server-runtime/entry.ts
function createEntryRouteModules(manifest) {
  return Object.keys(manifest).reduce((memo2, routeId) => {
    let route = manifest[routeId];
    if (route) {
      memo2[routeId] = route.module;
    }
    return memo2;
  }, {});
}

// lib/server-runtime/mode.ts
var ServerMode = /* @__PURE__ */ ((ServerMode2) => {
  ServerMode2["Development"] = "development";
  ServerMode2["Production"] = "production";
  ServerMode2["Test"] = "test";
  return ServerMode2;
})(ServerMode || {});
function isServerMode(value) {
  return value === "development" /* Development */ || value === "production" /* Production */ || value === "test" /* Test */;
}

// lib/server-runtime/errors.ts
function sanitizeError(error, serverMode) {
  if (error instanceof Error && serverMode !== "development" /* Development */) {
    let sanitized = new Error("Unexpected Server Error");
    sanitized.stack = void 0;
    return sanitized;
  }
  return error;
}
function sanitizeErrors(errors, serverMode) {
  return Object.entries(errors).reduce((acc, [routeId, error]) => {
    return Object.assign(acc, { [routeId]: sanitizeError(error, serverMode) });
  }, {});
}
function serializeError(error, serverMode) {
  let sanitized = sanitizeError(error, serverMode);
  return {
    message: sanitized.message,
    stack: sanitized.stack
  };
}
function serializeErrors2(errors, serverMode) {
  if (!errors) return null;
  let entries = Object.entries(errors);
  let serialized = {};
  for (let [key, val] of entries) {
    if (isRouteErrorResponse(val)) {
      serialized[key] = { ...val, __type: "RouteErrorResponse" };
    } else if (val instanceof Error) {
      let sanitized = sanitizeError(val, serverMode);
      serialized[key] = {
        message: sanitized.message,
        stack: sanitized.stack,
        __type: "Error",
        // If this is a subclass (i.e., ReferenceError), send up the type so we
        // can re-create the same type during hydration.  This will only apply
        // in dev mode since all production errors are sanitized to normal
        // Error instances
        ...sanitized.name !== "Error" ? {
          __subType: sanitized.name
        } : {}
      };
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}

// lib/server-runtime/routeMatching.ts
function matchServerRoutes(routes, pathname, basename) {
  let matches = matchRoutes(
    routes,
    pathname,
    basename
  );
  if (!matches) return null;
  return matches.map((match) => ({
    params: match.params,
    pathname: match.pathname,
    route: match.route
  }));
}

// lib/server-runtime/data.ts
async function callRouteHandler(handler, args) {
  let result = await handler({
    request: stripRoutesParam(stripIndexParam2(args.request)),
    params: args.params,
    context: args.context
  });
  if (isDataWithResponseInit(result) && result.init && result.init.status && isRedirectStatusCode(result.init.status)) {
    throw new Response(null, result.init);
  }
  return result;
}
function stripIndexParam2(request) {
  let url = new URL(request.url);
  let indexValues = url.searchParams.getAll("index");
  url.searchParams.delete("index");
  let indexValuesToKeep = [];
  for (let indexValue of indexValues) {
    if (indexValue) {
      indexValuesToKeep.push(indexValue);
    }
  }
  for (let toKeep of indexValuesToKeep) {
    url.searchParams.append("index", toKeep);
  }
  let init = {
    method: request.method,
    body: request.body,
    headers: request.headers,
    signal: request.signal
  };
  if (init.body) {
    init.duplex = "half";
  }
  return new Request(url.href, init);
}
function stripRoutesParam(request) {
  let url = new URL(request.url);
  url.searchParams.delete("_routes");
  let init = {
    method: request.method,
    body: request.body,
    headers: request.headers,
    signal: request.signal
  };
  if (init.body) {
    init.duplex = "half";
  }
  return new Request(url.href, init);
}

// lib/server-runtime/invariant.ts
function invariant3(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    console.error(
      "The following error is a bug in React Router; please open an issue! https://github.com/remix-run/react-router/issues/new/choose"
    );
    throw new Error(message);
  }
}

// lib/server-runtime/routes.ts
function groupRoutesByParentId2(manifest) {
  let routes = {};
  Object.values(manifest).forEach((route) => {
    if (route) {
      let parentId = route.parentId || "";
      if (!routes[parentId]) {
        routes[parentId] = [];
      }
      routes[parentId].push(route);
    }
  });
  return routes;
}
function createRoutes(manifest, parentId = "", routesByParentId = groupRoutesByParentId2(manifest)) {
  return (routesByParentId[parentId] || []).map((route) => ({
    ...route,
    children: createRoutes(manifest, route.id, routesByParentId)
  }));
}
function createStaticHandlerDataRoutes(manifest, future, parentId = "", routesByParentId = groupRoutesByParentId2(manifest)) {
  return (routesByParentId[parentId] || []).map((route) => {
    let commonRoute = {
      // Always include root due to default boundaries
      hasErrorBoundary: route.id === "root" || route.module.ErrorBoundary != null,
      id: route.id,
      path: route.path,
      unstable_middleware: route.module.unstable_middleware,
      // Need to use RR's version in the param typed here to permit the optional
      // context even though we know it'll always be provided in remix
      loader: route.module.loader ? async (args) => {
        if (args.request.headers.has("X-React-Router-Prerender-Data")) {
          const preRenderedData = args.request.headers.get(
            "X-React-Router-Prerender-Data"
          );
          let encoded = preRenderedData ? decodeURI(preRenderedData) : preRenderedData;
          invariant3(encoded, "Missing prerendered data for route");
          let uint8array = new TextEncoder().encode(encoded);
          let stream = new ReadableStream({
            start(controller) {
              controller.enqueue(uint8array);
              controller.close();
            }
          });
          let decoded = await decodeViaTurboStream(stream, global);
          let data2 = decoded.value;
          invariant3(
            data2 && route.id in data2,
            "Unable to decode prerendered data"
          );
          let result = data2[route.id];
          invariant3("data" in result, "Unable to process prerendered data");
          return result.data;
        }
        let val = await callRouteHandler(route.module.loader, args);
        return val;
      } : void 0,
      action: route.module.action ? (args) => callRouteHandler(route.module.action, args) : void 0,
      handle: route.module.handle
    };
    return route.index ? {
      index: true,
      ...commonRoute
    } : {
      caseSensitive: route.caseSensitive,
      children: createStaticHandlerDataRoutes(
        manifest,
        future,
        route.id,
        routesByParentId
      ),
      ...commonRoute
    };
  });
}

// lib/server-runtime/markup.ts
var ESCAPE_LOOKUP3 = {
  "&": "\\u0026",
  ">": "\\u003e",
  "<": "\\u003c",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var ESCAPE_REGEX3 = /[&><\u2028\u2029]/g;
function escapeHtml2(html) {
  return html.replace(ESCAPE_REGEX3, (match) => ESCAPE_LOOKUP3[match]);
}

// lib/server-runtime/serverHandoff.ts
function createServerHandoffString(serverHandoff) {
  return escapeHtml2(JSON.stringify(serverHandoff));
}

// lib/server-runtime/dev.ts
var globalDevServerHooksKey = "__reactRouterDevServerHooks";
function setDevServerHooks(devServerHooks) {
  globalThis[globalDevServerHooksKey] = devServerHooks;
}
function getDevServerHooks() {
  return globalThis[globalDevServerHooksKey];
}

// lib/server-runtime/single-fetch.ts


// lib/server-runtime/headers.ts

function getDocumentHeaders(build, context) {
  let boundaryIdx = context.errors ? context.matches.findIndex((m) => context.errors[m.route.id]) : -1;
  let matches = boundaryIdx >= 0 ? context.matches.slice(0, boundaryIdx + 1) : context.matches;
  let errorHeaders;
  if (boundaryIdx >= 0) {
    let { actionHeaders, actionData, loaderHeaders, loaderData } = context;
    context.matches.slice(boundaryIdx).some((match) => {
      let id = match.route.id;
      if (actionHeaders[id] && (!actionData || !actionData.hasOwnProperty(id))) {
        errorHeaders = actionHeaders[id];
      } else if (loaderHeaders[id] && !loaderData.hasOwnProperty(id)) {
        errorHeaders = loaderHeaders[id];
      }
      return errorHeaders != null;
    });
  }
  return matches.reduce((parentHeaders, match, idx) => {
    let { id } = match.route;
    let route = build.routes[id];
    invariant3(route, `Route with id "${id}" not found in build`);
    let routeModule = route.module;
    let loaderHeaders = context.loaderHeaders[id] || new Headers();
    let actionHeaders = context.actionHeaders[id] || new Headers();
    let includeErrorHeaders = errorHeaders != null && idx === matches.length - 1;
    let includeErrorCookies = includeErrorHeaders && errorHeaders !== loaderHeaders && errorHeaders !== actionHeaders;
    if (routeModule.headers == null) {
      let headers2 = new Headers(parentHeaders);
      if (includeErrorCookies) {
        prependCookies(errorHeaders, headers2);
      }
      prependCookies(actionHeaders, headers2);
      prependCookies(loaderHeaders, headers2);
      return headers2;
    }
    let headers = new Headers(
      routeModule.headers ? typeof routeModule.headers === "function" ? routeModule.headers({
        loaderHeaders,
        parentHeaders,
        actionHeaders,
        errorHeaders: includeErrorHeaders ? errorHeaders : void 0
      }) : routeModule.headers : void 0
    );
    if (includeErrorCookies) {
      prependCookies(errorHeaders, headers);
    }
    prependCookies(actionHeaders, headers);
    prependCookies(loaderHeaders, headers);
    prependCookies(parentHeaders, headers);
    return headers;
  }, new Headers());
}
function prependCookies(parentHeaders, childHeaders) {
  let parentSetCookieString = parentHeaders.get("Set-Cookie");
  if (parentSetCookieString) {
    let cookies = (0,set_cookie_parser__WEBPACK_IMPORTED_MODULE_3__.splitCookiesString)(parentSetCookieString);
    let childCookies = new Set(childHeaders.getSetCookie());
    cookies.forEach((cookie) => {
      if (!childCookies.has(cookie)) {
        childHeaders.append("Set-Cookie", cookie);
      }
    });
  }
}

// lib/server-runtime/single-fetch.ts
var NO_BODY_STATUS_CODES = /* @__PURE__ */ new Set([100, 101, 204, 205, 304]);
var SINGLE_FETCH_REDIRECT_STATUS = 202;
async function singleFetchAction(build, serverMode, staticHandler, request, handlerUrl, loadContext, handleError) {
  try {
    let respond2 = function(context) {
      let headers = getDocumentHeaders(build, context);
      if (isRedirectStatusCode(context.statusCode) && headers.has("Location")) {
        return generateSingleFetchResponse(request, build, serverMode, {
          result: getSingleFetchRedirect(
            context.statusCode,
            headers,
            build.basename
          ),
          headers,
          status: SINGLE_FETCH_REDIRECT_STATUS
        });
      }
      if (context.errors) {
        Object.values(context.errors).forEach((err) => {
          if (!isRouteErrorResponse(err) || err.error) {
            handleError(err);
          }
        });
        context.errors = sanitizeErrors(context.errors, serverMode);
      }
      let singleFetchResult;
      if (context.errors) {
        singleFetchResult = { error: Object.values(context.errors)[0] };
      } else {
        singleFetchResult = {
          data: Object.values(context.actionData || {})[0]
        };
      }
      return generateSingleFetchResponse(request, build, serverMode, {
        result: singleFetchResult,
        headers,
        status: context.statusCode
      });
    };
    var respond = respond2;
    let handlerRequest = new Request(handlerUrl, {
      method: request.method,
      body: request.body,
      headers: request.headers,
      signal: request.signal,
      ...request.body ? { duplex: "half" } : void 0
    });
    let result = await staticHandler.query(handlerRequest, {
      requestContext: loadContext,
      skipLoaderErrorBubbling: true,
      skipRevalidation: true,
      unstable_respond: respond2
    });
    if (!isResponse(result)) {
      result = respond2(result);
    }
    if (isRedirectResponse(result)) {
      return generateSingleFetchResponse(request, build, serverMode, {
        result: getSingleFetchRedirect(
          result.status,
          result.headers,
          build.basename
        ),
        headers: result.headers,
        status: SINGLE_FETCH_REDIRECT_STATUS
      });
    }
    return result;
  } catch (error) {
    handleError(error);
    return generateSingleFetchResponse(request, build, serverMode, {
      result: { error },
      headers: new Headers(),
      status: 500
    });
  }
}
async function singleFetchLoaders(build, serverMode, staticHandler, request, handlerUrl, loadContext, handleError) {
  try {
    let respond2 = function(context) {
      let headers = getDocumentHeaders(build, context);
      if (isRedirectStatusCode(context.statusCode) && headers.has("Location")) {
        return generateSingleFetchResponse(request, build, serverMode, {
          result: {
            [SingleFetchRedirectSymbol]: getSingleFetchRedirect(
              context.statusCode,
              headers,
              build.basename
            )
          },
          headers,
          status: SINGLE_FETCH_REDIRECT_STATUS
        });
      }
      if (context.errors) {
        Object.values(context.errors).forEach((err) => {
          if (!isRouteErrorResponse(err) || err.error) {
            handleError(err);
          }
        });
        context.errors = sanitizeErrors(context.errors, serverMode);
      }
      let results = {};
      let loadedMatches = new Set(
        context.matches.filter(
          (m) => loadRouteIds ? loadRouteIds.has(m.route.id) : m.route.loader != null
        ).map((m) => m.route.id)
      );
      if (context.errors) {
        for (let [id, error] of Object.entries(context.errors)) {
          results[id] = { error };
        }
      }
      for (let [id, data2] of Object.entries(context.loaderData)) {
        if (!(id in results) && loadedMatches.has(id)) {
          results[id] = { data: data2 };
        }
      }
      return generateSingleFetchResponse(request, build, serverMode, {
        result: results,
        headers,
        status: context.statusCode
      });
    };
    var respond = respond2;
    let handlerRequest = new Request(handlerUrl, {
      headers: request.headers,
      signal: request.signal
    });
    let routesParam = new URL(request.url).searchParams.get("_routes");
    let loadRouteIds = routesParam ? new Set(routesParam.split(",")) : null;
    let result = await staticHandler.query(handlerRequest, {
      requestContext: loadContext,
      filterMatchesToLoad: (m) => !loadRouteIds || loadRouteIds.has(m.route.id),
      skipLoaderErrorBubbling: true,
      unstable_respond: respond2
    });
    if (!isResponse(result)) {
      result = respond2(result);
    }
    if (isRedirectResponse(result)) {
      return generateSingleFetchResponse(request, build, serverMode, {
        result: {
          [SingleFetchRedirectSymbol]: getSingleFetchRedirect(
            result.status,
            result.headers,
            build.basename
          )
        },
        headers: result.headers,
        status: SINGLE_FETCH_REDIRECT_STATUS
      });
    }
    return result;
  } catch (error) {
    handleError(error);
    return generateSingleFetchResponse(request, build, serverMode, {
      result: { root: { error } },
      headers: new Headers(),
      status: 500
    });
  }
}
function generateSingleFetchResponse(request, build, serverMode, {
  result,
  headers,
  status
}) {
  let resultHeaders = new Headers(headers);
  resultHeaders.set("X-Remix-Response", "yes");
  if (NO_BODY_STATUS_CODES.has(status)) {
    return new Response(null, { status, headers: resultHeaders });
  }
  resultHeaders.set("Content-Type", "text/x-script");
  return new Response(
    encodeViaTurboStream(
      result,
      request.signal,
      build.entry.module.streamTimeout,
      serverMode
    ),
    {
      status: status || 200,
      headers: resultHeaders
    }
  );
}
function getSingleFetchRedirect(status, headers, basename) {
  let redirect2 = headers.get("Location");
  if (basename) {
    redirect2 = stripBasename(redirect2, basename) || redirect2;
  }
  return {
    redirect: redirect2,
    status,
    revalidate: (
      // Technically X-Remix-Revalidate isn't needed here - that was an implementation
      // detail of ?_data requests as our way to tell the front end to revalidate when
      // we didn't have a response body to include that information in.
      // With single fetch, we tell the front end via this revalidate boolean field.
      // However, we're respecting it for now because it may be something folks have
      // used in their own responses
      // TODO(v3): Consider removing or making this official public API
      headers.has("X-Remix-Revalidate") || headers.has("Set-Cookie")
    ),
    reload: headers.has("X-Remix-Reload-Document"),
    replace: headers.has("X-Remix-Replace")
  };
}
function encodeViaTurboStream(data2, requestSignal, streamTimeout, serverMode) {
  let controller = new AbortController();
  let timeoutId = setTimeout(
    () => controller.abort(new Error("Server Timeout")),
    typeof streamTimeout === "number" ? streamTimeout : 4950
  );
  requestSignal.addEventListener("abort", () => clearTimeout(timeoutId));
  return (0,turbo_stream__WEBPACK_IMPORTED_MODULE_1__.encode)(data2, {
    signal: controller.signal,
    plugins: [
      (value) => {
        if (value instanceof Error) {
          let { name, message, stack } = serverMode === "production" /* Production */ ? sanitizeError(value, serverMode) : value;
          return ["SanitizedError", name, message, stack];
        }
        if (value instanceof ErrorResponseImpl) {
          let { data: data3, status, statusText } = value;
          return ["ErrorResponse", data3, status, statusText];
        }
        if (value && typeof value === "object" && SingleFetchRedirectSymbol in value) {
          return ["SingleFetchRedirect", value[SingleFetchRedirectSymbol]];
        }
      }
    ],
    postPlugins: [
      (value) => {
        if (!value) return;
        if (typeof value !== "object") return;
        return [
          "SingleFetchClassInstance",
          Object.fromEntries(Object.entries(value))
        ];
      },
      () => ["SingleFetchFallback"]
    ]
  });
}

// lib/server-runtime/server.ts
function derive(build, mode) {
  let routes = createRoutes(build.routes);
  let dataRoutes = createStaticHandlerDataRoutes(build.routes, build.future);
  let serverMode = isServerMode(mode) ? mode : "production" /* Production */;
  let staticHandler = createStaticHandler(dataRoutes, {
    basename: build.basename
  });
  let errorHandler = build.entry.module.handleError || ((error, { request }) => {
    if (serverMode !== "test" /* Test */ && !request.signal.aborted) {
      console.error(
        // @ts-expect-error This is "private" from users but intended for internal use
        isRouteErrorResponse(error) && error.error ? error.error : error
      );
    }
  });
  return {
    routes,
    dataRoutes,
    serverMode,
    staticHandler,
    errorHandler
  };
}
var createRequestHandler = (build, mode) => {
  let _build;
  let routes;
  let serverMode;
  let staticHandler;
  let errorHandler;
  return async function requestHandler(request, initialContext) {
    _build = typeof build === "function" ? await build() : build;
    let loadContext = _build.future.unstable_middleware ? new unstable_RouterContextProvider(
      initialContext
    ) : initialContext || {};
    if (typeof build === "function") {
      let derived = derive(_build, mode);
      routes = derived.routes;
      serverMode = derived.serverMode;
      staticHandler = derived.staticHandler;
      errorHandler = derived.errorHandler;
    } else if (!routes || !serverMode || !staticHandler || !errorHandler) {
      let derived = derive(_build, mode);
      routes = derived.routes;
      serverMode = derived.serverMode;
      staticHandler = derived.staticHandler;
      errorHandler = derived.errorHandler;
    }
    let url = new URL(request.url);
    let normalizedBasename = _build.basename || "/";
    let normalizedPath = url.pathname;
    if (stripBasename(normalizedPath, normalizedBasename) === "/_root.data") {
      normalizedPath = normalizedBasename;
    } else if (normalizedPath.endsWith(".data")) {
      normalizedPath = normalizedPath.replace(/\.data$/, "");
    }
    if (stripBasename(normalizedPath, normalizedBasename) !== "/" && normalizedPath.endsWith("/")) {
      normalizedPath = normalizedPath.slice(0, -1);
    }
    let params = {};
    let handleError = (error) => {
      if (mode === "development" /* Development */) {
        getDevServerHooks()?.processRequestError?.(error);
      }
      errorHandler(error, {
        context: loadContext,
        params,
        request
      });
    };
    if (!_build.ssr) {
      if (_build.prerender.length === 0) {
        request.headers.set("X-React-Router-SPA-Mode", "yes");
      } else if (!_build.prerender.includes(normalizedPath) && !_build.prerender.includes(normalizedPath + "/")) {
        if (url.pathname.endsWith(".data")) {
          errorHandler(
            new ErrorResponseImpl(
              404,
              "Not Found",
              `Refusing to SSR the path \`${normalizedPath}\` because \`ssr:false\` is set and the path is not included in the \`prerender\` config, so in production the path will be a 404.`
            ),
            {
              context: loadContext,
              params,
              request
            }
          );
          return new Response("Not Found", {
            status: 404,
            statusText: "Not Found"
          });
        } else {
          request.headers.set("X-React-Router-SPA-Mode", "yes");
        }
      }
    }
    let manifestUrl = `${normalizedBasename}/__manifest`.replace(/\/+/g, "/");
    if (url.pathname === manifestUrl) {
      try {
        let res = await handleManifestRequest(_build, routes, url);
        return res;
      } catch (e) {
        handleError(e);
        return new Response("Unknown Server Error", { status: 500 });
      }
    }
    let matches = matchServerRoutes(routes, url.pathname, _build.basename);
    if (matches && matches.length > 0) {
      Object.assign(params, matches[0].params);
    }
    let response;
    if (url.pathname.endsWith(".data")) {
      let handlerUrl = new URL(request.url);
      handlerUrl.pathname = normalizedPath;
      let singleFetchMatches = matchServerRoutes(
        routes,
        handlerUrl.pathname,
        _build.basename
      );
      response = await handleSingleFetchRequest(
        serverMode,
        _build,
        staticHandler,
        request,
        handlerUrl,
        loadContext,
        handleError
      );
      if (_build.entry.module.handleDataRequest) {
        response = await _build.entry.module.handleDataRequest(response, {
          context: loadContext,
          params: singleFetchMatches ? singleFetchMatches[0].params : {},
          request
        });
        if (isRedirectResponse(response)) {
          let result = getSingleFetchRedirect(
            response.status,
            response.headers,
            _build.basename
          );
          if (request.method === "GET") {
            result = {
              [SingleFetchRedirectSymbol]: result
            };
          }
          let headers = new Headers(response.headers);
          headers.set("Content-Type", "text/x-script");
          return new Response(
            encodeViaTurboStream(
              result,
              request.signal,
              _build.entry.module.streamTimeout,
              serverMode
            ),
            {
              status: SINGLE_FETCH_REDIRECT_STATUS,
              headers
            }
          );
        }
      }
    } else if (!request.headers.has("X-React-Router-SPA-Mode") && matches && matches[matches.length - 1].route.module.default == null && matches[matches.length - 1].route.module.ErrorBoundary == null) {
      response = await handleResourceRequest(
        serverMode,
        _build,
        staticHandler,
        matches.slice(-1)[0].route.id,
        request,
        loadContext,
        handleError
      );
    } else {
      let { pathname } = url;
      let criticalCss = void 0;
      if (_build.getCriticalCss) {
        criticalCss = await _build.getCriticalCss({ pathname });
      } else if (mode === "development" /* Development */ && getDevServerHooks()?.getCriticalCss) {
        criticalCss = await getDevServerHooks()?.getCriticalCss?.(pathname);
      }
      response = await handleDocumentRequest(
        serverMode,
        _build,
        staticHandler,
        request,
        loadContext,
        handleError,
        criticalCss
      );
    }
    if (request.method === "HEAD") {
      return new Response(null, {
        headers: response.headers,
        status: response.status,
        statusText: response.statusText
      });
    }
    return response;
  };
};
async function handleManifestRequest(build, routes, url) {
  if (build.assets.version !== url.searchParams.get("version")) {
    return new Response(null, {
      status: 204,
      headers: {
        "X-Remix-Reload-Document": "true"
      }
    });
  }
  let patches = {};
  if (url.searchParams.has("p")) {
    for (let path of url.searchParams.getAll("p")) {
      let matches = matchServerRoutes(routes, path, build.basename);
      if (matches) {
        for (let match of matches) {
          let routeId = match.route.id;
          let route = build.assets.routes[routeId];
          if (route) {
            patches[routeId] = route;
          }
        }
      }
    }
    return Response.json(patches, {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable"
      }
    });
  }
  return new Response("Invalid Request", { status: 400 });
}
async function handleSingleFetchRequest(serverMode, build, staticHandler, request, handlerUrl, loadContext, handleError) {
  let response = request.method !== "GET" ? await singleFetchAction(
    build,
    serverMode,
    staticHandler,
    request,
    handlerUrl,
    loadContext,
    handleError
  ) : await singleFetchLoaders(
    build,
    serverMode,
    staticHandler,
    request,
    handlerUrl,
    loadContext,
    handleError
  );
  return response;
}
async function handleDocumentRequest(serverMode, build, staticHandler, request, loadContext, handleError, criticalCss) {
  let isSpaMode = request.headers.has("X-React-Router-SPA-Mode");
  try {
    let response = await staticHandler.query(request, {
      requestContext: loadContext,
      unstable_respond: build.future.unstable_middleware ? (ctx) => renderHtml(ctx, isSpaMode) : void 0
    });
    return isResponse(response) ? response : renderHtml(response, isSpaMode);
  } catch (error) {
    handleError(error);
    return new Response(null, { status: 500 });
  }
  async function renderHtml(context, isSpaMode2) {
    if (isResponse(context)) {
      return context;
    }
    let headers = getDocumentHeaders(build, context);
    if (NO_BODY_STATUS_CODES.has(context.statusCode)) {
      return new Response(null, { status: context.statusCode, headers });
    }
    if (context.errors) {
      Object.values(context.errors).forEach((err) => {
        if (!isRouteErrorResponse(err) || err.error) {
          handleError(err);
        }
      });
      context.errors = sanitizeErrors(context.errors, serverMode);
    }
    let state = {
      loaderData: context.loaderData,
      actionData: context.actionData,
      errors: serializeErrors2(context.errors, serverMode)
    };
    let entryContext = {
      manifest: build.assets,
      routeModules: createEntryRouteModules(build.routes),
      staticHandlerContext: context,
      criticalCss,
      serverHandoffString: createServerHandoffString({
        basename: build.basename,
        criticalCss,
        future: build.future,
        ssr: build.ssr,
        isSpaMode: isSpaMode2
      }),
      serverHandoffStream: encodeViaTurboStream(
        state,
        request.signal,
        build.entry.module.streamTimeout,
        serverMode
      ),
      renderMeta: {},
      future: build.future,
      ssr: build.ssr,
      isSpaMode: isSpaMode2,
      serializeError: (err) => serializeError(err, serverMode)
    };
    let handleDocumentRequestFunction = build.entry.module.default;
    try {
      return await handleDocumentRequestFunction(
        request,
        context.statusCode,
        headers,
        entryContext,
        loadContext
      );
    } catch (error) {
      handleError(error);
      let errorForSecondRender = error;
      if (isResponse(error)) {
        try {
          let data2 = await unwrapResponse(error);
          errorForSecondRender = new ErrorResponseImpl(
            error.status,
            error.statusText,
            data2
          );
        } catch (e) {
        }
      }
      context = getStaticContextFromError(
        staticHandler.dataRoutes,
        context,
        errorForSecondRender
      );
      if (context.errors) {
        context.errors = sanitizeErrors(context.errors, serverMode);
      }
      let state2 = {
        loaderData: context.loaderData,
        actionData: context.actionData,
        errors: serializeErrors2(context.errors, serverMode)
      };
      entryContext = {
        ...entryContext,
        staticHandlerContext: context,
        serverHandoffString: createServerHandoffString({
          basename: build.basename,
          future: build.future,
          ssr: build.ssr,
          isSpaMode: isSpaMode2
        }),
        serverHandoffStream: encodeViaTurboStream(
          state2,
          request.signal,
          build.entry.module.streamTimeout,
          serverMode
        ),
        renderMeta: {}
      };
      try {
        return await handleDocumentRequestFunction(
          request,
          context.statusCode,
          headers,
          entryContext,
          loadContext
        );
      } catch (error2) {
        handleError(error2);
        return returnLastResortErrorResponse(error2, serverMode);
      }
    }
  }
}
async function handleResourceRequest(serverMode, build, staticHandler, routeId, request, loadContext, handleError) {
  try {
    let response = await staticHandler.queryRoute(request, {
      routeId,
      requestContext: loadContext,
      unstable_respond: build.future.unstable_middleware ? (ctx) => ctx : void 0
    });
    if (isResponse(response)) {
      return response;
    }
    if (typeof response === "string") {
      return new Response(response);
    }
    return Response.json(response);
  } catch (error) {
    if (isResponse(error)) {
      error.headers.set("X-Remix-Catch", "yes");
      return error;
    }
    if (isRouteErrorResponse(error)) {
      if (error) {
        handleError(error);
      }
      return errorResponseToJson(error, serverMode);
    }
    if (error instanceof Error && error.message === "Expected a response from queryRoute") {
      let newError = new Error(
        "Expected a Response to be returned from resource route handler"
      );
      handleError(newError);
      return returnLastResortErrorResponse(newError, serverMode);
    }
    handleError(error);
    return returnLastResortErrorResponse(error, serverMode);
  }
}
function errorResponseToJson(errorResponse, serverMode) {
  return Response.json(
    serializeError(
      // @ts-expect-error This is "private" from users but intended for internal use
      errorResponse.error || new Error("Unexpected Server Error"),
      serverMode
    ),
    {
      status: errorResponse.status,
      statusText: errorResponse.statusText,
      headers: {
        "X-Remix-Error": "yes"
      }
    }
  );
}
function returnLastResortErrorResponse(error, serverMode) {
  let message = "Unexpected Server Error";
  if (serverMode !== "production" /* Production */) {
    message += `

${String(error)}`;
  }
  return new Response(message, {
    status: 500,
    headers: {
      "Content-Type": "text/plain"
    }
  });
}
function unwrapResponse(response) {
  let contentType = response.headers.get("Content-Type");
  return contentType && /\bapplication\/json\b/.test(contentType) ? response.body == null ? null : response.json() : response.text();
}

// lib/server-runtime/sessions.ts
function flash(name) {
  return `__flash_${name}__`;
}
var createSession = (initialData = {}, id = "") => {
  let map = new Map(Object.entries(initialData));
  return {
    get id() {
      return id;
    },
    get data() {
      return Object.fromEntries(map);
    },
    has(name) {
      return map.has(name) || map.has(flash(name));
    },
    get(name) {
      if (map.has(name)) return map.get(name);
      let flashName = flash(name);
      if (map.has(flashName)) {
        let value = map.get(flashName);
        map.delete(flashName);
        return value;
      }
      return void 0;
    },
    set(name, value) {
      map.set(name, value);
    },
    flash(name, value) {
      map.set(flash(name), value);
    },
    unset(name) {
      map.delete(name);
    }
  };
};
var isSession = (object) => {
  return object != null && typeof object.id === "string" && typeof object.data !== "undefined" && typeof object.has === "function" && typeof object.get === "function" && typeof object.set === "function" && typeof object.flash === "function" && typeof object.unset === "function";
};
function createSessionStorage({
  cookie: cookieArg,
  createData,
  readData,
  updateData,
  deleteData
}) {
  let cookie = isCookie(cookieArg) ? cookieArg : createCookie(cookieArg?.name || "__session", cookieArg);
  warnOnceAboutSigningSessionCookie(cookie);
  return {
    async getSession(cookieHeader, options) {
      let id = cookieHeader && await cookie.parse(cookieHeader, options);
      let data2 = id && await readData(id);
      return createSession(data2 || {}, id || "");
    },
    async commitSession(session, options) {
      let { id, data: data2 } = session;
      let expires = options?.maxAge != null ? new Date(Date.now() + options.maxAge * 1e3) : options?.expires != null ? options.expires : cookie.expires;
      if (id) {
        await updateData(id, data2, expires);
      } else {
        id = await createData(data2, expires);
      }
      return cookie.serialize(id, options);
    },
    async destroySession(session, options) {
      await deleteData(session.id);
      return cookie.serialize("", {
        ...options,
        maxAge: void 0,
        expires: /* @__PURE__ */ new Date(0)
      });
    }
  };
}
function warnOnceAboutSigningSessionCookie(cookie) {
  warnOnce(
    cookie.isSigned,
    `The "${cookie.name}" cookie is not signed, but session cookies should be signed to prevent tampering on the client before they are sent back to the server. See https://remix.run/utils/cookies#signing-cookies for more information.`
  );
}

// lib/server-runtime/sessions/cookieStorage.ts
function createCookieSessionStorage({ cookie: cookieArg } = {}) {
  let cookie = isCookie(cookieArg) ? cookieArg : createCookie(cookieArg?.name || "__session", cookieArg);
  warnOnceAboutSigningSessionCookie(cookie);
  return {
    async getSession(cookieHeader, options) {
      return createSession(
        cookieHeader && await cookie.parse(cookieHeader, options) || {}
      );
    },
    async commitSession(session, options) {
      let serializedCookie = await cookie.serialize(session.data, options);
      if (serializedCookie.length > 4096) {
        throw new Error(
          "Cookie length will exceed browser maximum. Length: " + serializedCookie.length
        );
      }
      return serializedCookie;
    },
    async destroySession(_session, options) {
      return cookie.serialize("", {
        ...options,
        maxAge: void 0,
        expires: /* @__PURE__ */ new Date(0)
      });
    }
  };
}

// lib/server-runtime/sessions/memoryStorage.ts
function createMemorySessionStorage({ cookie } = {}) {
  let map = /* @__PURE__ */ new Map();
  return createSessionStorage({
    cookie,
    async createData(data2, expires) {
      let id = Math.random().toString(36).substring(2, 10);
      map.set(id, { data: data2, expires });
      return id;
    },
    async readData(id) {
      if (map.has(id)) {
        let { data: data2, expires } = map.get(id);
        if (!expires || expires > /* @__PURE__ */ new Date()) {
          return data2;
        }
        if (expires) map.delete(id);
      }
      return null;
    },
    async updateData(id, data2, expires) {
      map.set(id, { data: data2, expires });
    },
    async deleteData(id) {
      map.delete(id);
    }
  });
}

// lib/href.ts
function href(path, ...args) {
  let params = args[0];
  return path.split("/").map((segment) => {
    const match = segment.match(/^:([\w-]+)(\?)?/);
    if (!match) return segment;
    const param = match[1];
    const value = params ? params[param] : void 0;
    const isRequired = match[2] === void 0;
    if (isRequired && value === void 0) {
      throw Error(
        `Path '${path}' requires param '${param}' but it was not provided`
      );
    }
    return value;
  }).filter((segment) => segment !== void 0).join("/");
}

// lib/dom/ssr/errors.ts
function deserializeErrors2(errors) {
  if (!errors) return null;
  let entries = Object.entries(errors);
  let serialized = {};
  for (let [key, val] of entries) {
    if (val && val.__type === "RouteErrorResponse") {
      serialized[key] = new ErrorResponseImpl(
        val.status,
        val.statusText,
        val.data,
        val.internal === true
      );
    } else if (val && val.__type === "Error") {
      if (val.__subType) {
        let ErrorConstructor = window[val.__subType];
        if (typeof ErrorConstructor === "function") {
          try {
            let error = new ErrorConstructor(val.message);
            error.stack = val.stack;
            serialized[key] = error;
          } catch (e) {
          }
        }
      }
      if (serialized[key] == null) {
        let error = new Error(val.message);
        error.stack = val.stack;
        serialized[key] = error;
      }
    } else {
      serialized[key] = val;
    }
  }
  return serialized;
}




/***/ }),

/***/ "./node_modules/set-cookie-parser/lib/set-cookie.js":
/*!**********************************************************!*\
  !*** ./node_modules/set-cookie-parser/lib/set-cookie.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


var defaultParseOptions = {
  decodeValues: true,
  map: false,
  silent: false,
};

function isNonEmptyString(str) {
  return typeof str === "string" && !!str.trim();
}

function parseString(setCookieValue, options) {
  var parts = setCookieValue.split(";").filter(isNonEmptyString);

  var nameValuePairStr = parts.shift();
  var parsed = parseNameValuePair(nameValuePairStr);
  var name = parsed.name;
  var value = parsed.value;

  options = options
    ? Object.assign({}, defaultParseOptions, options)
    : defaultParseOptions;

  try {
    value = options.decodeValues ? decodeURIComponent(value) : value; // decode cookie value
  } catch (e) {
    console.error(
      "set-cookie-parser encountered an error while decoding a cookie with value '" +
        value +
        "'. Set options.decodeValues to false to disable this feature.",
      e
    );
  }

  var cookie = {
    name: name,
    value: value,
  };

  parts.forEach(function (part) {
    var sides = part.split("=");
    var key = sides.shift().trimLeft().toLowerCase();
    var value = sides.join("=");
    if (key === "expires") {
      cookie.expires = new Date(value);
    } else if (key === "max-age") {
      cookie.maxAge = parseInt(value, 10);
    } else if (key === "secure") {
      cookie.secure = true;
    } else if (key === "httponly") {
      cookie.httpOnly = true;
    } else if (key === "samesite") {
      cookie.sameSite = value;
    } else if (key === "partitioned") {
      cookie.partitioned = true;
    } else {
      cookie[key] = value;
    }
  });

  return cookie;
}

function parseNameValuePair(nameValuePairStr) {
  // Parses name-value-pair according to rfc6265bis draft

  var name = "";
  var value = "";
  var nameValueArr = nameValuePairStr.split("=");
  if (nameValueArr.length > 1) {
    name = nameValueArr.shift();
    value = nameValueArr.join("="); // everything after the first =, joined by a "=" if there was more than one part
  } else {
    value = nameValuePairStr;
  }

  return { name: name, value: value };
}

function parse(input, options) {
  options = options
    ? Object.assign({}, defaultParseOptions, options)
    : defaultParseOptions;

  if (!input) {
    if (!options.map) {
      return [];
    } else {
      return {};
    }
  }

  if (input.headers) {
    if (typeof input.headers.getSetCookie === "function") {
      // for fetch responses - they combine headers of the same type in the headers array,
      // but getSetCookie returns an uncombined array
      input = input.headers.getSetCookie();
    } else if (input.headers["set-cookie"]) {
      // fast-path for node.js (which automatically normalizes header names to lower-case
      input = input.headers["set-cookie"];
    } else {
      // slow-path for other environments - see #25
      var sch =
        input.headers[
          Object.keys(input.headers).find(function (key) {
            return key.toLowerCase() === "set-cookie";
          })
        ];
      // warn if called on a request-like object with a cookie header rather than a set-cookie header - see #34, 36
      if (!sch && input.headers.cookie && !options.silent) {
        console.warn(
          "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
        );
      }
      input = sch;
    }
  }
  if (!Array.isArray(input)) {
    input = [input];
  }

  if (!options.map) {
    return input.filter(isNonEmptyString).map(function (str) {
      return parseString(str, options);
    });
  } else {
    var cookies = {};
    return input.filter(isNonEmptyString).reduce(function (cookies, str) {
      var cookie = parseString(str, options);
      cookies[cookie.name] = cookie;
      return cookies;
    }, cookies);
  }
}

/*
  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
  that are within a single set-cookie field-value, such as in the Expires portion.

  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
  React Native's fetch does this for *every* header, including set-cookie.

  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
*/
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString;
  }
  if (typeof cookiesString !== "string") {
    return [];
  }

  var cookiesStrings = [];
  var pos = 0;
  var start;
  var ch;
  var lastComma;
  var nextStart;
  var cookiesSeparatorFound;

  function skipWhitespace() {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }

  function notSpecialChar() {
    ch = cookiesString.charAt(pos);

    return ch !== "=" && ch !== ";" && ch !== ",";
  }

  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;

    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        // ',' is a cookie separator if we have later first '=', not ';' or ','
        lastComma = pos;
        pos += 1;

        skipWhitespace();
        nextStart = pos;

        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }

        // currently special character
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          // we found cookies separator
          cookiesSeparatorFound = true;
          // pos is inside the next cookie, so back up and return it.
          pos = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos;
        } else {
          // in param ',' or param separator ';',
          // we continue from that comma
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }

    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }

  return cookiesStrings;
}

module.exports = parse;
module.exports.parse = parse;
module.exports.parseString = parseString;
module.exports.splitCookiesString = splitCookiesString;


/***/ }),

/***/ "./node_modules/turbo-stream/dist/turbo-stream.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/turbo-stream/dist/turbo-stream.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decode: () => (/* binding */ decode),
/* harmony export */   encode: () => (/* binding */ encode)
/* harmony export */ });
// src/utils.ts
var HOLE = -1;
var NAN = -2;
var NEGATIVE_INFINITY = -3;
var NEGATIVE_ZERO = -4;
var NULL = -5;
var POSITIVE_INFINITY = -6;
var UNDEFINED = -7;
var TYPE_BIGINT = "B";
var TYPE_DATE = "D";
var TYPE_ERROR = "E";
var TYPE_MAP = "M";
var TYPE_NULL_OBJECT = "N";
var TYPE_PROMISE = "P";
var TYPE_REGEXP = "R";
var TYPE_SET = "S";
var TYPE_SYMBOL = "Y";
var TYPE_URL = "U";
var TYPE_PREVIOUS_RESOLVED = "Z";
var Deferred = class {
  promise;
  resolve;
  reject;
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
};
function createLineSplittingTransform() {
  const decoder = new TextDecoder();
  let leftover = "";
  return new TransformStream({
    transform(chunk, controller) {
      const str = decoder.decode(chunk, { stream: true });
      const parts = (leftover + str).split("\n");
      leftover = parts.pop() || "";
      for (const part of parts) {
        controller.enqueue(part);
      }
    },
    flush(controller) {
      if (leftover) {
        controller.enqueue(leftover);
      }
    }
  });
}

// src/flatten.ts
function flatten(input) {
  const { indices } = this;
  const existing = indices.get(input);
  if (existing)
    return [existing];
  if (input === void 0)
    return UNDEFINED;
  if (input === null)
    return NULL;
  if (Number.isNaN(input))
    return NAN;
  if (input === Number.POSITIVE_INFINITY)
    return POSITIVE_INFINITY;
  if (input === Number.NEGATIVE_INFINITY)
    return NEGATIVE_INFINITY;
  if (input === 0 && 1 / input < 0)
    return NEGATIVE_ZERO;
  const index = this.index++;
  indices.set(input, index);
  stringify.call(this, input, index);
  return index;
}
function stringify(input, index) {
  const { deferred, plugins, postPlugins } = this;
  const str = this.stringified;
  const stack = [[input, index]];
  while (stack.length > 0) {
    const [input2, index2] = stack.pop();
    const partsForObj = (obj) => Object.keys(obj).map((k) => `"_${flatten.call(this, k)}":${flatten.call(this, obj[k])}`).join(",");
    let error = null;
    switch (typeof input2) {
      case "boolean":
      case "number":
      case "string":
        str[index2] = JSON.stringify(input2);
        break;
      case "bigint":
        str[index2] = `["${TYPE_BIGINT}","${input2}"]`;
        break;
      case "symbol": {
        const keyFor = Symbol.keyFor(input2);
        if (!keyFor) {
          error = new Error(
            "Cannot encode symbol unless created with Symbol.for()"
          );
        } else {
          str[index2] = `["${TYPE_SYMBOL}",${JSON.stringify(keyFor)}]`;
        }
        break;
      }
      case "object": {
        if (!input2) {
          str[index2] = `${NULL}`;
          break;
        }
        const isArray = Array.isArray(input2);
        let pluginHandled = false;
        if (!isArray && plugins) {
          for (const plugin of plugins) {
            const pluginResult = plugin(input2);
            if (Array.isArray(pluginResult)) {
              pluginHandled = true;
              const [pluginIdentifier, ...rest] = pluginResult;
              str[index2] = `[${JSON.stringify(pluginIdentifier)}`;
              if (rest.length > 0) {
                str[index2] += `,${rest.map((v) => flatten.call(this, v)).join(",")}`;
              }
              str[index2] += "]";
              break;
            }
          }
        }
        if (!pluginHandled) {
          let result = isArray ? "[" : "{";
          if (isArray) {
            for (let i = 0; i < input2.length; i++)
              result += (i ? "," : "") + (i in input2 ? flatten.call(this, input2[i]) : HOLE);
            str[index2] = `${result}]`;
          } else if (input2 instanceof Date) {
            str[index2] = `["${TYPE_DATE}",${input2.getTime()}]`;
          } else if (input2 instanceof URL) {
            str[index2] = `["${TYPE_URL}",${JSON.stringify(input2.href)}]`;
          } else if (input2 instanceof RegExp) {
            str[index2] = `["${TYPE_REGEXP}",${JSON.stringify(
              input2.source
            )},${JSON.stringify(input2.flags)}]`;
          } else if (input2 instanceof Set) {
            if (input2.size > 0) {
              str[index2] = `["${TYPE_SET}",${[...input2].map((val) => flatten.call(this, val)).join(",")}]`;
            } else {
              str[index2] = `["${TYPE_SET}"]`;
            }
          } else if (input2 instanceof Map) {
            if (input2.size > 0) {
              str[index2] = `["${TYPE_MAP}",${[...input2].flatMap(([k, v]) => [
                flatten.call(this, k),
                flatten.call(this, v)
              ]).join(",")}]`;
            } else {
              str[index2] = `["${TYPE_MAP}"]`;
            }
          } else if (input2 instanceof Promise) {
            str[index2] = `["${TYPE_PROMISE}",${index2}]`;
            deferred[index2] = input2;
          } else if (input2 instanceof Error) {
            str[index2] = `["${TYPE_ERROR}",${JSON.stringify(input2.message)}`;
            if (input2.name !== "Error") {
              str[index2] += `,${JSON.stringify(input2.name)}`;
            }
            str[index2] += "]";
          } else if (Object.getPrototypeOf(input2) === null) {
            str[index2] = `["${TYPE_NULL_OBJECT}",{${partsForObj(input2)}}]`;
          } else if (isPlainObject(input2)) {
            str[index2] = `{${partsForObj(input2)}}`;
          } else {
            error = new Error("Cannot encode object with prototype");
          }
        }
        break;
      }
      default: {
        const isArray = Array.isArray(input2);
        let pluginHandled = false;
        if (!isArray && plugins) {
          for (const plugin of plugins) {
            const pluginResult = plugin(input2);
            if (Array.isArray(pluginResult)) {
              pluginHandled = true;
              const [pluginIdentifier, ...rest] = pluginResult;
              str[index2] = `[${JSON.stringify(pluginIdentifier)}`;
              if (rest.length > 0) {
                str[index2] += `,${rest.map((v) => flatten.call(this, v)).join(",")}`;
              }
              str[index2] += "]";
              break;
            }
          }
        }
        if (!pluginHandled) {
          error = new Error("Cannot encode function or unexpected type");
        }
      }
    }
    if (error) {
      let pluginHandled = false;
      if (postPlugins) {
        for (const plugin of postPlugins) {
          const pluginResult = plugin(input2);
          if (Array.isArray(pluginResult)) {
            pluginHandled = true;
            const [pluginIdentifier, ...rest] = pluginResult;
            str[index2] = `[${JSON.stringify(pluginIdentifier)}`;
            if (rest.length > 0) {
              str[index2] += `,${rest.map((v) => flatten.call(this, v)).join(",")}`;
            }
            str[index2] += "]";
            break;
          }
        }
      }
      if (!pluginHandled) {
        throw error;
      }
    }
  }
}
var objectProtoNames = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function isPlainObject(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === objectProtoNames;
}

// src/unflatten.ts
var globalObj = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : void 0;
function unflatten(parsed) {
  const { hydrated, values } = this;
  if (typeof parsed === "number")
    return hydrate.call(this, parsed);
  if (!Array.isArray(parsed) || !parsed.length)
    throw new SyntaxError();
  const startIndex = values.length;
  for (const value of parsed) {
    values.push(value);
  }
  hydrated.length = values.length;
  return hydrate.call(this, startIndex);
}
function hydrate(index) {
  const { hydrated, values, deferred, plugins } = this;
  let result;
  const stack = [
    [
      index,
      (v) => {
        result = v;
      }
    ]
  ];
  let postRun = [];
  while (stack.length > 0) {
    const [index2, set] = stack.pop();
    switch (index2) {
      case UNDEFINED:
        set(void 0);
        continue;
      case NULL:
        set(null);
        continue;
      case NAN:
        set(NaN);
        continue;
      case POSITIVE_INFINITY:
        set(Infinity);
        continue;
      case NEGATIVE_INFINITY:
        set(-Infinity);
        continue;
      case NEGATIVE_ZERO:
        set(-0);
        continue;
    }
    if (hydrated[index2]) {
      set(hydrated[index2]);
      continue;
    }
    const value = values[index2];
    if (!value || typeof value !== "object") {
      hydrated[index2] = value;
      set(value);
      continue;
    }
    if (Array.isArray(value)) {
      if (typeof value[0] === "string") {
        const [type, b, c] = value;
        switch (type) {
          case TYPE_DATE:
            set(hydrated[index2] = new Date(b));
            continue;
          case TYPE_URL:
            set(hydrated[index2] = new URL(b));
            continue;
          case TYPE_BIGINT:
            set(hydrated[index2] = BigInt(b));
            continue;
          case TYPE_REGEXP:
            set(hydrated[index2] = new RegExp(b, c));
            continue;
          case TYPE_SYMBOL:
            set(hydrated[index2] = Symbol.for(b));
            continue;
          case TYPE_SET:
            const newSet = /* @__PURE__ */ new Set();
            hydrated[index2] = newSet;
            for (let i = 1; i < value.length; i++)
              stack.push([
                value[i],
                (v) => {
                  newSet.add(v);
                }
              ]);
            set(newSet);
            continue;
          case TYPE_MAP:
            const map = /* @__PURE__ */ new Map();
            hydrated[index2] = map;
            for (let i = 1; i < value.length; i += 2) {
              const r = [];
              stack.push([
                value[i + 1],
                (v) => {
                  r[1] = v;
                }
              ]);
              stack.push([
                value[i],
                (k) => {
                  r[0] = k;
                }
              ]);
              postRun.push(() => {
                map.set(r[0], r[1]);
              });
            }
            set(map);
            continue;
          case TYPE_NULL_OBJECT:
            const obj = /* @__PURE__ */ Object.create(null);
            hydrated[index2] = obj;
            for (const key of Object.keys(b).reverse()) {
              const r = [];
              stack.push([
                b[key],
                (v) => {
                  r[1] = v;
                }
              ]);
              stack.push([
                Number(key.slice(1)),
                (k) => {
                  r[0] = k;
                }
              ]);
              postRun.push(() => {
                obj[r[0]] = r[1];
              });
            }
            set(obj);
            continue;
          case TYPE_PROMISE:
            if (hydrated[b]) {
              set(hydrated[index2] = hydrated[b]);
            } else {
              const d = new Deferred();
              deferred[b] = d;
              set(hydrated[index2] = d.promise);
            }
            continue;
          case TYPE_ERROR:
            const [, message, errorType] = value;
            let error = errorType && globalObj && globalObj[errorType] ? new globalObj[errorType](message) : new Error(message);
            hydrated[index2] = error;
            set(error);
            continue;
          case TYPE_PREVIOUS_RESOLVED:
            set(hydrated[index2] = hydrated[b]);
            continue;
          default:
            if (Array.isArray(plugins)) {
              const r = [];
              const vals = value.slice(1);
              for (let i = 0; i < vals.length; i++) {
                const v = vals[i];
                stack.push([
                  v,
                  (v2) => {
                    r[i] = v2;
                  }
                ]);
              }
              postRun.push(() => {
                for (const plugin of plugins) {
                  const result2 = plugin(value[0], ...r);
                  if (result2) {
                    set(hydrated[index2] = result2.value);
                    return;
                  }
                }
                throw new SyntaxError();
              });
              continue;
            }
            throw new SyntaxError();
        }
      } else {
        const array = [];
        hydrated[index2] = array;
        for (let i = 0; i < value.length; i++) {
          const n = value[i];
          if (n !== HOLE) {
            stack.push([
              n,
              (v) => {
                array[i] = v;
              }
            ]);
          }
        }
        set(array);
        continue;
      }
    } else {
      const object = {};
      hydrated[index2] = object;
      for (const key of Object.keys(value).reverse()) {
        const r = [];
        stack.push([
          value[key],
          (v) => {
            r[1] = v;
          }
        ]);
        stack.push([
          Number(key.slice(1)),
          (k) => {
            r[0] = k;
          }
        ]);
        postRun.push(() => {
          object[r[0]] = r[1];
        });
      }
      set(object);
      continue;
    }
  }
  while (postRun.length > 0) {
    postRun.pop()();
  }
  return result;
}

// src/turbo-stream.ts
async function decode(readable, options) {
  const { plugins } = options ?? {};
  const done = new Deferred();
  const reader = readable.pipeThrough(createLineSplittingTransform()).getReader();
  const decoder = {
    values: [],
    hydrated: [],
    deferred: {},
    plugins
  };
  const decoded = await decodeInitial.call(decoder, reader);
  let donePromise = done.promise;
  if (decoded.done) {
    done.resolve();
  } else {
    donePromise = decodeDeferred.call(decoder, reader).then(done.resolve).catch((reason) => {
      for (const deferred of Object.values(decoder.deferred)) {
        deferred.reject(reason);
      }
      done.reject(reason);
    });
  }
  return {
    done: donePromise.then(() => reader.closed),
    value: decoded.value
  };
}
async function decodeInitial(reader) {
  const read = await reader.read();
  if (!read.value) {
    throw new SyntaxError();
  }
  let line;
  try {
    line = JSON.parse(read.value);
  } catch (reason) {
    throw new SyntaxError();
  }
  return {
    done: read.done,
    value: unflatten.call(this, line)
  };
}
async function decodeDeferred(reader) {
  let read = await reader.read();
  while (!read.done) {
    if (!read.value)
      continue;
    const line = read.value;
    switch (line[0]) {
      case TYPE_PROMISE: {
        const colonIndex = line.indexOf(":");
        const deferredId = Number(line.slice(1, colonIndex));
        const deferred = this.deferred[deferredId];
        if (!deferred) {
          throw new Error(`Deferred ID ${deferredId} not found in stream`);
        }
        const lineData = line.slice(colonIndex + 1);
        let jsonLine;
        try {
          jsonLine = JSON.parse(lineData);
        } catch (reason) {
          throw new SyntaxError();
        }
        const value = unflatten.call(this, jsonLine);
        deferred.resolve(value);
        break;
      }
      case TYPE_ERROR: {
        const colonIndex = line.indexOf(":");
        const deferredId = Number(line.slice(1, colonIndex));
        const deferred = this.deferred[deferredId];
        if (!deferred) {
          throw new Error(`Deferred ID ${deferredId} not found in stream`);
        }
        const lineData = line.slice(colonIndex + 1);
        let jsonLine;
        try {
          jsonLine = JSON.parse(lineData);
        } catch (reason) {
          throw new SyntaxError();
        }
        const value = unflatten.call(this, jsonLine);
        deferred.reject(value);
        break;
      }
      default:
        throw new SyntaxError();
    }
    read = await reader.read();
  }
}
function encode(input, options) {
  const { plugins, postPlugins, signal } = options ?? {};
  const encoder = {
    deferred: {},
    index: 0,
    indices: /* @__PURE__ */ new Map(),
    stringified: [],
    plugins,
    postPlugins,
    signal
  };
  const textEncoder = new TextEncoder();
  let lastSentIndex = 0;
  const readable = new ReadableStream({
    async start(controller) {
      const id = flatten.call(encoder, input);
      if (Array.isArray(id)) {
        throw new Error("This should never happen");
      }
      if (id < 0) {
        controller.enqueue(textEncoder.encode(`${id}
`));
      } else {
        controller.enqueue(
          textEncoder.encode(`[${encoder.stringified.join(",")}]
`)
        );
        lastSentIndex = encoder.stringified.length - 1;
      }
      const seenPromises = /* @__PURE__ */ new WeakSet();
      while (Object.keys(encoder.deferred).length > 0) {
        for (const [deferredId, deferred] of Object.entries(encoder.deferred)) {
          if (seenPromises.has(deferred))
            continue;
          seenPromises.add(
            encoder.deferred[Number(deferredId)] = raceSignal(
              deferred,
              encoder.signal
            ).then(
              (resolved) => {
                const id2 = flatten.call(encoder, resolved);
                if (Array.isArray(id2)) {
                  controller.enqueue(
                    textEncoder.encode(
                      `${TYPE_PROMISE}${deferredId}:[["${TYPE_PREVIOUS_RESOLVED}",${id2[0]}]]
`
                    )
                  );
                  encoder.index++;
                  lastSentIndex++;
                } else if (id2 < 0) {
                  controller.enqueue(
                    textEncoder.encode(`${TYPE_PROMISE}${deferredId}:${id2}
`)
                  );
                } else {
                  const values = encoder.stringified.slice(lastSentIndex + 1).join(",");
                  controller.enqueue(
                    textEncoder.encode(
                      `${TYPE_PROMISE}${deferredId}:[${values}]
`
                    )
                  );
                  lastSentIndex = encoder.stringified.length - 1;
                }
              },
              (reason) => {
                if (!reason || typeof reason !== "object" || !(reason instanceof Error)) {
                  reason = new Error("An unknown error occurred");
                }
                const id2 = flatten.call(encoder, reason);
                if (Array.isArray(id2)) {
                  controller.enqueue(
                    textEncoder.encode(
                      `${TYPE_ERROR}${deferredId}:[["${TYPE_PREVIOUS_RESOLVED}",${id2[0]}]]
`
                    )
                  );
                  encoder.index++;
                  lastSentIndex++;
                } else if (id2 < 0) {
                  controller.enqueue(
                    textEncoder.encode(`${TYPE_ERROR}${deferredId}:${id2}
`)
                  );
                } else {
                  const values = encoder.stringified.slice(lastSentIndex + 1).join(",");
                  controller.enqueue(
                    textEncoder.encode(
                      `${TYPE_ERROR}${deferredId}:[${values}]
`
                    )
                  );
                  lastSentIndex = encoder.stringified.length - 1;
                }
              }
            ).finally(() => {
              delete encoder.deferred[Number(deferredId)];
            })
          );
        }
        await Promise.race(Object.values(encoder.deferred));
      }
      await Promise.all(Object.values(encoder.deferred));
      controller.close();
    }
  });
  return readable;
}
function raceSignal(promise, signal) {
  if (!signal)
    return promise;
  if (signal.aborted)
    return Promise.reject(signal.reason || new Error("Signal was aborted."));
  const abort = new Promise((resolve, reject) => {
    signal.addEventListener("abort", (event) => {
      reject(signal.reason || new Error("Signal was aborted."));
    });
    promise.then(resolve).catch(reject);
  });
  abort.catch(() => {
  });
  return Promise.race([abort, promise]);
}



/***/ }),

/***/ "./src/components/badge/Badge.js":
/*!***************************************!*\
  !*** ./src/components/badge/Badge.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Badge: () => (/* binding */ Badge)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Badge component
 *
 * @param label {string}
 * @param icon {JSX.Element | null}
 * @param rounded {boolean}
 * @param className {string}
 * @param props
 */

const Badge = ({
  label,
  icon: Icon = null,
  rounded = false,
  className = '',
  ...props
}) => {
  const classes = [className, 'nfd-solutions-badge', {
    'nfd-solutions-badge--with-icon': !!Icon,
    'nfd-solutions-badge--rounded': rounded
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(classes),
    ...props,
    children: [Icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon, {}), label]
  });
};

/***/ }),

/***/ "./src/components/badge/index.js":
/*!***************************************!*\
  !*** ./src/components/badge/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Badge: () => (/* reexport safe */ _Badge__WEBPACK_IMPORTED_MODULE_0__.Badge)
/* harmony export */ });
/* harmony import */ var _Badge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Badge */ "./src/components/badge/Badge.js");



/***/ }),

/***/ "./src/components/brand-logo/BrandLogo.js":
/*!************************************************!*\
  !*** ./src/components/brand-logo/BrandLogo.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrandLogo: () => (/* binding */ BrandLogo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const BrandLogo = ({
  width,
  height,
  ...props
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    viewBox: "0 0 116.8 19.3",
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    ...props,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
      fill: "#3575d3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "m0 0h5.3v5.3h-5.3zm6.8 0h5.3v5.3h-5.3zm6.9 0h5.3v5.3h-5.3zm-13.7 6.8h5.3v5.3h-5.3zm6.8 0h5.3v5.3h-5.3zm6.9 0h5.3v5.3h-5.3zm-13.7 6.9h5.3v5.3h-5.3zm6.8 0h5.3v5.3h-5.3z"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "m13.7 13.7h5.3v5.3h-5.3z"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "m29.8 8.2c1.1-1 2.5-1.5 4-1.5 2.7 0 5.3 1.8 5.3 6.3s-2.9 6.3-6.1 6.3c-1.6 0-3.2-.4-4.6-1.3v-18h1.4zm0 9.1c1 .5 2.1.8 3.2.8 2.5 0 4.8-1.5 4.8-5.1 0-3.2-1.8-5.1-4.1-5.1-1.5.1-2.9.8-3.9 1.9zm11.7 1.7v-19h1.3v19zm5.8-4.7c0 2.9 1.4 3.7 2.8 3.7 1.8-.1 3.3-1.1 4.2-2.7v-8.4h1.4v12.2h-1.4v-2.4c-1 1.5-2.8 2.5-4.6 2.5-1.9 0-3.8-1.1-3.8-4.8v-7.5h1.4zm21.4 3.9c-1.3.7-2.8 1.1-4.3 1-4.1-.1-6.2-3.4-6.1-6.8 0-3.2 2.5-5.8 5.6-5.8h.4c3.3.1 5.5 2.7 5.1 6.6h-9.8c0 2.6 2.1 4.7 4.7 4.8h.1c1.3 0 2.6-.3 3.8-.9zm-.5-6.1c.1-2.2-1.6-4.1-3.8-4.2h-.2c-2.4-.1-4.4 1.8-4.5 4.2zm5.6-2.9c1-1.6 2.6-2.5 4.5-2.6 2.4 0 3.9 1.8 3.9 4.6v7.8h-1.3v-7.6c0-2.6-1.4-3.6-2.8-3.6-1.8.2-3.3 1.2-4.2 2.7v8.5h-1.3v-19h1.4c-.2 0-.2 9.2-.2 9.2zm22.3 3.7c0 4-2.7 6.3-5.9 6.3-3.5 0-5.9-2.8-5.9-6.3-.2-3.3 2.3-6.1 5.6-6.3h.3c3.2.1 5.9 2.4 5.9 6.3zm-10.3 0c0 2.7 1.6 5 4.5 5s4.5-2.4 4.5-5-1.7-5-4.5-5-4.5 2.3-4.5 5zm13.4 4c1 .6 2.1 1 3.2 1 1.3 0 2.9-.5 2.8-1.8 0-1.1-1.2-2-3-2.7-2.1-.8-3.9-1.6-3.9-3.5s1.8-3.3 4.2-3.3c1.2 0 2.3.3 3.4.9l-.5 1.1c-.9-.5-1.8-.7-2.8-.7-2 0-2.9 1-2.9 2 0 1.3 1.5 1.8 3.4 2.6 2.9 1.1 3.6 2.5 3.6 3.6 0 1.9-1.8 3.1-4.2 3.1-1.4 0-2.7-.4-3.9-1.1zm16.4-10v1.1h-4v6.7c0 2 .8 3.2 2.6 3.3.8 0 1.6-.1 2.3-.5l.4 1.2c-.9.3-1.8.5-2.7.5-2.2 0-3.9-1.3-3.9-4.5v-6.7h-2.3v-1.1h2.2v-4.1h1.4v4.1z"
      })]
    })
  });
};

/***/ }),

/***/ "./src/components/brand-logo/index.js":
/*!********************************************!*\
  !*** ./src/components/brand-logo/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrandLogo: () => (/* reexport safe */ _BrandLogo__WEBPACK_IMPORTED_MODULE_0__.BrandLogo)
/* harmony export */ });
/* harmony import */ var _BrandLogo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BrandLogo */ "./src/components/brand-logo/BrandLogo.js");



/***/ }),

/***/ "./src/components/header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/header/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _brand_logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../brand-logo */ "./src/components/brand-logo/index.js");
/* harmony import */ var _newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @newfold/ui-component-library */ "./node_modules/@newfold/ui-component-library/elements/title/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const Header = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "nfd-solutions-app-header nfd-flex nfd-flex-col nfd-gap-y-4 nfd-mb-8",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_brand_logo__WEBPACK_IMPORTED_MODULE_0__.BrandLogo, {
      width: '140px',
      className: "nfd-mb-8"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Premium tools available in your Commerce solution', 'wp-module-solutions')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
      children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Discover the complete list of advanced features provided by your hosting provider Bluehost, designed to deliver unmatched value and elevate your online experience.', 'wp-module-solutions'), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
        href: '#',
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Learn more about our Solutions', 'wp-module-solutions')
      })]
    })]
  });
};

/***/ }),

/***/ "./src/components/header/index.js":
/*!****************************************!*\
  !*** ./src/components/header/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__.Header)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/components/header/Header.js");



/***/ }),

/***/ "./src/components/icons/AdvancedReviewIcon.jsx":
/*!*****************************************************!*\
  !*** ./src/components/icons/AdvancedReviewIcon.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "311",
  height: "220",
  fill: "none",
  viewBox: "0 0 311 220",
  className: "nfd-solutions-advanced-review-icon",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    filter: "url(#filter0_d_1651_988)",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "206",
      height: "119",
      x: "6",
      y: "1",
      fill: "#fff",
      rx: "5"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#A8ABB2",
    d: "M24.353 27.1a2.9 2.9 0 0 1-1.272-.267 2.27 2.27 0 0 1-.891-.739 1.96 1.96 0 0 1-.348-1.072h1.278q.036.447.387.731.352.28.845.28.387 0 .69-.177.301-.178.475-.493.174-.316.17-.721a1.46 1.46 0 0 0-.173-.732 1.3 1.3 0 0 0-.487-.5 1.36 1.36 0 0 0-.71-.185 1.7 1.7 0 0 0-.643.12q-.315.125-.5.327l-1.19-.195.38-3.75h4.219v1.1h-3.129l-.21 1.93h.043q.203-.239.572-.395.369-.16.81-.16.66 0 1.178.313.519.309.817.852.299.543.298 1.243 0 .72-.333 1.285a2.36 2.36 0 0 1-.92.885q-.586.32-1.357.32"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#D9D9D9",
    fillOpacity: "0.5",
    d: "M47.371 19h146.171v7H47.371z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#646464",
    fillOpacity: "0.5",
    d: "M47.371 19h122.985v7H47.371z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#646464",
    fillOpacity: "0.5",
    d: "M47.371 19h122.985v7H47.371z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#646464",
    fillOpacity: "0.5",
    d: "M47.371 19h122.985v7H47.371z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#D58743",
    d: "M47.371 19h122.985v7H47.371z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#D9D9D9",
    fillOpacity: "0.5",
    d: "M47.371 38h146.171v7H47.371zM47.371 57h146.171v7H47.371zM47.371 77h146.171v7H47.371zM47.371 96h146.171v7H47.371z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#646464",
    fillOpacity: "0.5",
    d: "M47.371 38h107.864v7H47.371z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#646464",
    fillOpacity: "0.5",
    d: "M47.371 38h107.864v7H47.371z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#646464",
    fillOpacity: "0.5",
    d: "M47.371 38h107.864v7H47.371z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#D58743",
    d: "M47.371 38h107.864v7H47.371z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#646464",
    fillOpacity: "0.5",
    d: "M47.371 57h87.703v7H47.371z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#646464",
    fillOpacity: "0.5",
    d: "M47.371 57h87.703v7H47.371z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#646464",
    fillOpacity: "0.5",
    d: "M47.371 57h87.703v7H47.371z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#D58743",
    d: "M47.371 57h87.703v7H47.371z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#646464",
    fillOpacity: "0.5",
    d: "M47.371 77h29.234v7H47.371z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#646464",
    fillOpacity: "0.5",
    d: "M47.371 77h29.234v7H47.371z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#646464",
    fillOpacity: "0.5",
    d: "M47.371 77h29.234v7H47.371z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#D58743",
    d: "M47.371 77h29.234v7H47.371z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#fff",
    d: "M66.062 110.819a.9.9 0 0 0-.366-.668q-.323-.238-.877-.238-.377 0-.636.107a.9.9 0 0 0-.398.288.7.7 0 0 0-.134.419.6.6 0 0 0 .081.34.84.84 0 0 0 .252.253q.16.103.37.181.21.074.447.128l.653.156q.477.107.874.284.398.177.689.437t.451.61q.164.353.167.807-.003.668-.341 1.157-.333.487-.966.757-.628.266-1.516.266-.881 0-1.534-.27a2.25 2.25 0 0 1-1.016-.799q-.362-.532-.38-1.317h1.488q.025.365.21.61.188.242.5.366.317.121.714.121.39 0 .678-.114.292-.113.451-.316a.73.73 0 0 0 .16-.465.6.6 0 0 0-.145-.412 1.1 1.1 0 0 0-.42-.284 4.3 4.3 0 0 0-.67-.213l-.793-.199q-.92-.224-1.452-.699-.533-.477-.53-1.282a1.9 1.9 0 0 1 .352-1.155q.36-.494.984-.77.625-.277 1.42-.277.81 0 1.414.277.608.276.945.77t.347 1.144zm4.145-2.092V116h-1.538v-7.273zm6.087 2.351a1.6 1.6 0 0 0-.21-.458q-.135-.203-.33-.341a1.4 1.4 0 0 0-.44-.217 1.9 1.9 0 0 0-.543-.074q-.557 0-.98.277-.42.277-.654.806-.234.525-.234 1.286 0 .76.23 1.292.233.533.654.813.423.277.998.277.522 0 .892-.184.373-.189.568-.529.198-.341.198-.807l.313.047h-1.875v-1.158h3.043v.916q0 .959-.405 1.648-.404.686-1.115 1.058-.71.369-1.626.369-1.022 0-1.797-.451a3.13 3.13 0 0 1-1.207-1.289q-.43-.837-.43-1.988 0-.884.256-1.577a3.4 3.4 0 0 1 .724-1.179 3.1 3.1 0 0 1 1.083-.735 3.5 3.5 0 0 1 1.34-.252q.616 0 1.15.181.533.177.944.504.415.327.678.778.263.447.338.987zm8.868-2.351V116h-1.328l-3.164-4.577h-.053V116h-1.538v-7.273h1.35l3.139 4.574h.064v-4.574zm5.763 0h1.538v4.723q0 .797-.38 1.392-.377.597-1.055.931-.678.33-1.58.33-.906 0-1.584-.33a2.54 2.54 0 0 1-1.055-.931q-.376-.596-.376-1.392v-4.723h1.537v4.592q0 .415.182.739.185.323.518.507.334.185.778.185.447 0 .778-.185.334-.185.514-.507.186-.324.185-.739zM93.728 116v-7.273h2.87q.825 0 1.409.316.582.313.888.87.309.555.309 1.279t-.313 1.278-.905.863q-.59.309-1.428.309H94.73v-1.232h1.58q.444 0 .732-.153.291-.156.433-.43.146-.276.146-.635a1.3 1.3 0 0 0-.146-.632.97.97 0 0 0-.433-.423q-.29-.153-.739-.153h-1.037V116zm8.512-6.005v-1.268h5.973v1.268h-2.227V116h-1.52v-6.005zm13.308 2.369q0 1.189-.451 2.024a3.14 3.14 0 0 1-1.222 1.275 3.45 3.45 0 0 1-1.733.436q-.969 0-1.74-.44a3.12 3.12 0 0 1-1.218-1.275q-.447-.835-.447-2.02 0-1.19.447-2.025.447-.834 1.218-1.271a3.45 3.45 0 0 1 1.74-.44q.962 0 1.733.44a3.1 3.1 0 0 1 1.222 1.271q.45.835.451 2.025m-1.559 0q0-.77-.231-1.3-.228-.529-.643-.803a1.73 1.73 0 0 0-.973-.273q-.557 0-.973.273-.415.274-.646.803-.227.53-.227 1.3t.227 1.299q.23.53.646.803t.973.273q.558 0 .973-.273t.643-.803q.231-.529.231-1.299m5.012 3.636v-7.273h2.87q.824 0 1.406.295.586.291.891.827.309.533.309 1.254 0 .724-.312 1.246a2.03 2.03 0 0 1-.906.796q-.59.277-1.428.277h-1.921v-1.236h1.673q.44 0 .731-.121a.87.87 0 0 0 .434-.362q.145-.242.145-.6 0-.362-.145-.611a.9.9 0 0 0-.437-.376q-.291-.132-.735-.132h-1.037V116zm3.928-3.31 1.807 3.31h-1.697l-1.769-3.31zm2.635 3.31v-7.273h4.9v1.268h-3.363v1.733h3.111v1.268h-3.111v1.736h3.378V116zm7.376 0h-1.647l2.51-7.273h1.982l2.507 7.273h-1.648l-1.822-5.611h-.056zm-.103-2.859h3.892v1.201h-3.892zm8.908 2.859h-2.578v-7.273h2.6q1.097 0 1.889.437.792.433 1.218 1.247.43.813.43 1.946 0 1.136-.43 1.953a2.96 2.96 0 0 1-1.225 1.253q-.796.437-1.904.437m-1.04-1.317h.976q.682 0 1.147-.242.469-.245.704-.756.238-.516.238-1.328 0-.807-.238-1.318a1.55 1.55 0 0 0-.7-.753q-.465-.241-1.147-.241h-.98z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#0F172A",
    fillRule: "evenodd",
    d: "M37.268 18.586a.523.523 0 0 0-.962 0l-1.015 2.421-2.635.21a.516.516 0 0 0-.298.908l2.008 1.705-.614 2.55c-.107.448.383.802.78.562l2.255-1.367 2.255 1.367c.396.24.887-.114.78-.561l-.614-2.55 2.007-1.706a.516.516 0 0 0-.297-.909l-2.635-.209z",
    clipRule: "evenodd",
    opacity: "0.36"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#A8ABB2",
    d: "M21.693 44.65v-1.047l3.086-4.876h.873v1.492h-.533l-2.077 3.291v.057h4.308v1.083zm3.47 1.35v-1.67l.013-.468v-5.135h1.243V46z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#0F172A",
    fillRule: "evenodd",
    d: "M37.268 37.586a.523.523 0 0 0-.962 0l-1.015 2.421-2.635.21a.516.516 0 0 0-.298.907l2.008 1.706-.614 2.55c-.107.448.383.802.78.562l2.255-1.367 2.255 1.367c.396.24.887-.114.78-.561l-.614-2.55 2.007-1.707a.516.516 0 0 0-.297-.907l-2.635-.21z",
    clipRule: "evenodd",
    opacity: "0.36"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#A8ABB2",
    d: "M24.434 65.1q-.767 0-1.364-.263a2.3 2.3 0 0 1-.937-.732 1.9 1.9 0 0 1-.366-1.083h1.335a.9.9 0 0 0 .196.515q.177.217.472.337.296.12.66.121.392 0 .693-.135.302-.138.472-.383a.95.95 0 0 0 .167-.565.98.98 0 0 0-.17-.582 1.14 1.14 0 0 0-.505-.395 2 2 0 0 0-.788-.142h-.643v-1.015h.643q.38 0 .664-.132.288-.13.451-.369a.95.95 0 0 0 .16-.558.97.97 0 0 0-.139-.536.94.94 0 0 0-.394-.358 1.3 1.3 0 0 0-.593-.128q-.333 0-.618.12-.284.122-.458.345a.87.87 0 0 0-.184.526H21.92q.015-.611.351-1.073.341-.465.91-.724a3 3 0 0 1 1.274-.263q.729 0 1.265.273.54.27.834.728.295.459.295 1.012.003.615-.362 1.03a1.7 1.7 0 0 1-.952.544v.056q.767.106 1.175.569.412.458.409 1.14 0 .61-.348 1.093-.345.48-.952.753-.603.273-1.385.274"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#0F172A",
    fillRule: "evenodd",
    d: "M37.268 56.586a.523.523 0 0 0-.962 0l-1.015 2.421-2.635.21a.516.516 0 0 0-.298.907l2.008 1.706-.614 2.55c-.107.448.383.802.78.562l2.255-1.367 2.255 1.367c.396.24.887-.114.78-.561l-.614-2.55 2.007-1.707a.516.516 0 0 0-.297-.907l-2.635-.21z",
    clipRule: "evenodd",
    opacity: "0.36"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#A8ABB2",
    d: "M21.824 84v-.952l2.525-2.475q.362-.365.604-.65.24-.284.362-.55.12-.267.12-.568 0-.345-.156-.59a1.04 1.04 0 0 0-.43-.383 1.4 1.4 0 0 0-.62-.135q-.36 0-.63.149-.27.146-.419.415-.144.27-.145.643H21.78q0-.692.316-1.204.316-.511.87-.791.558-.282 1.279-.281.732 0 1.285.273.555.274.86.75.309.476.309 1.086 0 .409-.157.803-.156.395-.55.873-.39.48-1.097 1.162l-1.254 1.275v.05h3.168V84z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#0F172A",
    fillRule: "evenodd",
    d: "M37.268 75.586a.523.523 0 0 0-.962 0l-1.015 2.421-2.635.21a.516.516 0 0 0-.298.907l2.008 1.706-.614 2.55c-.107.448.383.802.78.562l2.255-1.367 2.255 1.367c.396.24.887-.114.78-.561l-.614-2.55 2.007-1.707a.516.516 0 0 0-.297-.907l-2.635-.21z",
    clipRule: "evenodd",
    opacity: "0.36"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#A8ABB2",
    d: "M25.782 94.727V102h-1.317v-5.991h-.043l-1.701 1.087v-1.208l1.808-1.16z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#0F172A",
    fillRule: "evenodd",
    d: "M37.268 93.586a.523.523 0 0 0-.962 0l-1.015 2.421-2.635.21a.516.516 0 0 0-.298.907l2.008 1.706-.614 2.551c-.107.447.383.801.78.561l2.255-1.367 2.255 1.367c.396.24.887-.114.78-.561l-.614-2.55 2.007-1.707a.516.516 0 0 0-.297-.907l-2.635-.21z",
    clipRule: "evenodd",
    opacity: "0.36"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    filter: "url(#filter1_d_1651_988)",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "179",
      height: "140",
      x: "124",
      y: "71",
      fill: "#fff",
      rx: "5"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#D58743",
    fillRule: "evenodd",
    d: "M153.087 175.884c-.324-.772-1.427-.772-1.75 0l-1.846 4.401-4.79.381c-.84.067-1.181 1.107-.541 1.651l3.65 3.102-1.115 4.637c-.196.813.696 1.456 1.415 1.02l4.102-2.485 4.101 2.485c.719.436 1.611-.207 1.416-1.02l-1.115-4.637 3.649-3.102c.641-.544.3-1.584-.54-1.651l-4.791-.381zM174.257 175.884c-.324-.772-1.427-.772-1.75 0l-1.846 4.401-4.79.381c-.841.067-1.181 1.107-.541 1.651l3.65 3.102-1.115 4.637c-.196.813.696 1.456 1.415 1.02l4.102-2.485 4.101 2.485c.719.436 1.611-.207 1.416-1.02l-1.115-4.637 3.649-3.102c.641-.544.3-1.584-.54-1.651l-4.791-.381zM195.427 175.884c-.324-.772-1.427-.772-1.75 0l-1.846 4.401-4.79.381c-.841.067-1.181 1.107-.541 1.651l3.65 3.102-1.115 4.637c-.196.813.696 1.456 1.415 1.02l4.102-2.485 4.101 2.485c.719.436 1.611-.207 1.416-1.02l-1.116-4.637 3.65-3.102c.64-.544.3-1.584-.54-1.651l-4.791-.381zM216.594 175.884c-.323-.772-1.426-.772-1.749 0l-1.846 4.401-4.79.381c-.841.067-1.181 1.107-.541 1.651l3.65 3.102-1.115 4.637c-.196.813.696 1.456 1.415 1.02l4.102-2.485 4.101 2.485c.719.436 1.611-.207 1.416-1.02l-1.116-4.637 3.65-3.102c.64-.544.3-1.584-.54-1.651l-4.791-.381z",
    clipRule: "evenodd"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    stroke: "#D58743",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M235.445 175.916a.474.474 0 0 1 .873 0l1.786 4.259a.47.47 0 0 0 .399.287l4.635.369a.468.468 0 0 1 .27.823l-3.532 3.002a.46.46 0 0 0-.152.464l1.079 4.488a.472.472 0 0 1-.706.509l-3.969-2.405a.48.48 0 0 0-.493 0l-3.968 2.405c-.359.217-.804-.104-.706-.509l1.079-4.488a.47.47 0 0 0-.152-.464l-3.532-3.002a.467.467 0 0 1 .269-.823l4.636-.369a.47.47 0 0 0 .399-.287z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M149.06 101.586q0 .937-.762 1.641a2.5 2.5 0 0 1-1.773.703q-1.611 0-2.475-1.07t-.864-2.959q0-1.757 1.479-3.545a9.74 9.74 0 0 1 3.589-2.71l.644 1.04q-1.655.807-2.592 1.875-.938 1.07-1.084 2.593h.82q.908 0 1.479.205.572.206.923.572.337.351.469.776.147.424.147.879m7.221 0q0 .937-.761 1.641a2.5 2.5 0 0 1-1.773.703q-1.61 0-2.476-1.07-.864-1.07-.864-2.959 0-1.757 1.48-3.545a9.74 9.74 0 0 1 3.589-2.71l.644 1.04q-1.655.807-2.593 1.875-.937 1.07-1.084 2.593h.821q.907 0 1.479.205.572.206.923.572.337.351.469.776.146.424.146.879"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#ADA4A4",
    fillOpacity: "0.5",
    d: "M142.131 127h146.171v4H142.131zM142.131 116h146.171v4H142.131z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#080808",
    fillOpacity: "0.5",
    d: "M169.35 91h118.953v4H169.35zM169.35 100h118.953v4H169.35z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#ADA4A4",
    fillOpacity: "0.5",
    d: "M142.131 139h146.171v4H142.131zM142.131 151h146.171v4H142.131z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
      id: "filter0_d_1651_988",
      width: "213.2",
      height: "126.2",
      x: "0.4",
      y: "0.4",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology", {
        in: "SourceAlpha",
        radius: "1",
        result: "effect1_dropShadow_1651_988"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset", {
        dx: "-2",
        dy: "3"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
        stdDeviation: "2.3"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
        in2: "hardAlpha",
        operator: "out"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        values: "0 0 0 0 0.893057 0 0 0 0 0.845663 0 0 0 0 0.826149 0 0 0 1 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_1651_988"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_1651_988",
        result: "shape"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
      id: "filter1_d_1651_988",
      width: "194.2",
      height: "155.2",
      x: "116.4",
      y: "64.4",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset", {
        dy: "1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
        stdDeviation: "3.8"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
        in2: "hardAlpha",
        operator: "out"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        values: "0 0 0 0 0.930252 0 0 0 0 0.91737 0 0 0 0 0.912066 0 0 0 1 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_1651_988"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_1651_988",
        result: "shape"
      })]
    })]
  })]
}));

/***/ }),

/***/ "./src/components/icons/BookingIcon.jsx":
/*!**********************************************!*\
  !*** ./src/components/icons/BookingIcon.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "297",
  height: "245",
  fill: "none",
  viewBox: "0 0 297 245",
  className: "nfd-solutions-booking-icon",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    filter: "url(#filter0_d_1651_1362)",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "162",
      height: "192",
      x: "15",
      y: "17",
      fill: "#fff",
      rx: "6"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#555",
    d: "M39.246 49.273V36.545h.815v12.728zm2.162-8.527q-.06-.6-.512-.934-.451-.333-1.228-.333-.527 0-.89.149-.363.144-.556.403a.97.97 0 0 0-.19.586.84.84 0 0 0 .115.477q.13.204.353.353.225.145.517.254.293.105.627.179l.914.219q.666.15 1.223.397.557.249.965.612t.631.855a2.7 2.7 0 0 1 .234 1.129q-.005.934-.477 1.62-.468.68-1.353 1.06-.88.372-2.123.372-1.233 0-2.147-.378-.91-.378-1.422-1.118-.508-.745-.532-1.845h2.083q.034.513.293.855.264.339.701.512.442.17 1 .17.545 0 .95-.16.406-.159.63-.442t.224-.651a.85.85 0 0 0-.204-.577q-.199-.233-.586-.398a6 6 0 0 0-.94-.298l-1.109-.279q-1.287-.312-2.033-.979-.746-.666-.74-1.795-.006-.925.492-1.615.501-.69 1.377-1.08.875-.387 1.988-.387 1.134 0 1.979.388.85.387 1.322 1.079.473.69.488 1.6zm7.355 7.393q-1.114 0-1.984-.383-.866-.388-1.367-1.063a2.67 2.67 0 0 1-.512-1.572h2.167q.02.373.244.657a1.5 1.5 0 0 0 .606.432q.379.154.85.154.494 0 .87-.174.379-.174.592-.482.214-.308.214-.71a1.2 1.2 0 0 0-.229-.722 1.46 1.46 0 0 0-.646-.497 2.5 2.5 0 0 0-.994-.179h-.95v-1.58h.95q.487 0 .86-.17.378-.169.586-.467.21-.303.21-.706a1.22 1.22 0 0 0-.692-1.129 1.65 1.65 0 0 0-.755-.164q-.438 0-.8.16a1.4 1.4 0 0 0-.583.442 1.17 1.17 0 0 0-.233.676h-2.064q.015-.88.503-1.551a3.26 3.26 0 0 1 1.312-1.05q.83-.381 1.874-.382 1.054 0 1.845.383t1.228 1.034q.442.646.437 1.452.005.855-.532 1.426-.531.573-1.387.726v.08q1.125.144 1.71.78.592.632.587 1.581a2.5 2.5 0 0 1-.502 1.547q-.502.675-1.387 1.063t-2.028.388m9.457.085q-1.282-.005-2.208-.632-.92-.626-1.416-1.814-.493-1.188-.488-2.859 0-1.665.492-2.839.498-1.173 1.417-1.785.925-.615 2.203-.616 1.278 0 2.197.616.925.617 1.422 1.79.498 1.17.492 2.834 0 1.676-.497 2.864-.492 1.188-1.412 1.814t-2.202.627m0-1.785q.875 0 1.397-.88t.517-2.64q0-1.158-.239-1.929-.234-.771-.666-1.158a1.45 1.45 0 0 0-1.01-.388q-.87 0-1.391.87-.522.87-.527 2.605 0 1.173.233 1.959.24.78.672 1.173a1.47 1.47 0 0 0 1.014.388m6.494 1.69q-.492 0-.845-.348a1.16 1.16 0 0 1-.348-.845q0-.487.348-.835.353-.348.845-.348.478 0 .835.348.358.348.358.835 0 .329-.169.602-.164.269-.432.432a1.14 1.14 0 0 1-.592.16m6.494.095q-1.282-.005-2.207-.632-.92-.626-1.417-1.814-.492-1.188-.487-2.859 0-1.665.492-2.839.496-1.173 1.417-1.785.924-.615 2.202-.616 1.278 0 2.198.616.924.617 1.421 1.79.498 1.17.493 2.834 0 1.676-.498 2.864-.492 1.188-1.412 1.814t-2.202.627m0-1.785q.875 0 1.397-.88t.517-2.64q0-1.158-.239-1.929-.233-.771-.666-1.158a1.45 1.45 0 0 0-1.009-.388q-.87 0-1.392.87t-.527 2.605q0 1.173.234 1.959.239.78.67 1.173a1.47 1.47 0 0 0 1.015.388m9.639 1.785q-1.282-.005-2.208-.632-.92-.626-1.416-1.814-.493-1.188-.488-2.859 0-1.665.493-2.839.496-1.173 1.416-1.785.925-.615 2.203-.616 1.278 0 2.197.616.925.617 1.422 1.79.498 1.17.492 2.834 0 1.676-.497 2.864-.492 1.188-1.412 1.814t-2.202.627m0-1.785q.875 0 1.397-.88t.517-2.64q0-1.158-.239-1.929-.234-.771-.666-1.158a1.45 1.45 0 0 0-1.01-.388q-.87 0-1.391.87-.522.87-.527 2.605 0 1.173.233 1.959.24.78.672 1.173a1.47 1.47 0 0 0 1.014.388"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#717171",
    d: "M38.247 82h-1.804v-5.09h1.82q.767 0 1.322.305.554.303.852.872.3.57.3 1.363 0 .795-.3 1.367a2.07 2.07 0 0 1-.857.877q-.558.306-1.333.306m-.728-.922h.683q.478 0 .803-.17.33-.17.492-.529.167-.36.167-.93 0-.564-.166-.922a1.08 1.08 0 0 0-.49-.527q-.326-.168-.803-.169h-.686zm4.607.922h-1.154l1.758-5.09h1.387L45.872 82h-1.154l-1.275-3.928h-.04zm-.072-2.001h2.724v.84h-2.724zm3.614-2.203v-.887h4.182v.887H48.29V82h-1.064v-4.204zM50.539 82v-5.09h3.43v.886h-2.354v1.214h2.178v.887h-2.178v1.216h2.364V82zm7.048-3.627a.63.63 0 0 0-.256-.467q-.225-.167-.614-.167-.264 0-.445.075a.63.63 0 0 0-.278.201.5.5 0 0 0-.095.294.4.4 0 0 0 .057.238.6.6 0 0 0 .177.177q.111.072.258.126.147.052.314.09l.457.11q.333.074.611.198.279.125.483.306t.315.427q.115.247.117.565a1.4 1.4 0 0 1-.238.81 1.5 1.5 0 0 1-.676.53q-.441.186-1.062.186a2.8 2.8 0 0 1-1.074-.189 1.57 1.57 0 0 1-.71-.56q-.254-.372-.267-.921h1.042q.017.256.147.427a.8.8 0 0 0 .35.256q.22.085.5.085.273 0 .474-.08a.73.73 0 0 0 .316-.221.5.5 0 0 0 .112-.326.42.42 0 0 0-.102-.288.8.8 0 0 0-.293-.199 3 3 0 0 0-.47-.149l-.554-.14q-.645-.156-1.017-.489-.373-.333-.37-.897-.003-.463.246-.808.251-.345.688-.54a2.4 2.4 0 0 1 .995-.194q.566 0 .989.194.425.195.661.54t.244.8zM36.443 123v-5.091h2.008q.579 0 .987.221a1.5 1.5 0 0 1 .621.609q.217.388.217.895t-.22.895-.633.604q-.412.216-1 .216h-1.28v-.862h1.107q.31 0 .512-.107a.7.7 0 0 0 .303-.301.94.94 0 0 0 .102-.445.9.9 0 0 0-.102-.442.7.7 0 0 0-.303-.296 1.1 1.1 0 0 0-.517-.107h-.726V123zm4.532 0v-5.091h3.43v.888h-2.354v1.213h2.178v.887H42.05v1.216h2.364V123zm8.964-2.545q0 .833-.316 1.416a2.2 2.2 0 0 1-.855.893q-.54.306-1.213.306-.678 0-1.218-.309a2.2 2.2 0 0 1-.852-.892q-.315-.584-.314-1.414 0-.834.314-1.417.313-.585.852-.89.54-.309 1.218-.309.675 0 1.213.309.543.305.855.89.316.583.316 1.417m-1.091 0q0-.54-.162-.91a1.23 1.23 0 0 0-.45-.562 1.2 1.2 0 0 0-.68-.191q-.391 0-.682.191a1.25 1.25 0 0 0-.452.562q-.16.37-.16.91 0 .539.16.909.16.371.452.562.291.192.681.192t.681-.192.45-.562q.162-.37.162-.909M50.736 123v-5.091h2.009q.579 0 .987.221a1.5 1.5 0 0 1 .621.609q.216.388.216.895t-.218.895-.634.604q-.412.216-1 .216h-1.28v-.862h1.107q.31 0 .512-.107a.7.7 0 0 0 .303-.301.94.94 0 0 0 .102-.445.9.9 0 0 0-.102-.442.68.68 0 0 0-.303-.296 1.1 1.1 0 0 0-.517-.107h-.726V123zm4.533 0v-5.091h1.076v4.204h2.183V123zm3.971 0v-5.091h3.43v.888h-2.353v1.213h2.177v.887h-2.177v1.216h2.364V123z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#121212",
    d: "m38.474 56 1.127 1.922 2.176.478-1.48 1.666.219 2.218-2.042-.893-2.042.893.218-2.218-1.48-1.666 2.177-.478zM47.737 56l1.127 1.922 2.177.478-1.48 1.666.218 2.218-2.042-.893-2.042.893.218-2.218-1.48-1.666 2.177-.478zM57 56l1.127 1.922 2.177.478-1.48 1.666.218 2.218L57 61.391l-2.042.893.218-2.218-1.48-1.666 2.177-.478zM66.263 56l1.127 1.922 2.177.478-1.48 1.666.218 2.218-2.042-.893-2.042.893.218-2.218-1.48-1.666 2.177-.478z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#fff",
    stroke: "#9D9D9D",
    d: "m75.526 56 1.127 1.922 2.177.478-1.48 1.666.218 2.218-2.042-.893-2.041.893.218-2.218-1.48-1.666 2.176-.478z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "120",
    height: "18",
    x: "35.5",
    y: "87.5",
    fill: "#fff",
    stroke: "#EDEDED",
    rx: "0.5"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#fff",
    stroke: "#EDEDED",
    d: "M35.5 128.5h120v18h-120z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "120",
    height: "28",
    x: "36",
    y: "158",
    fill: "#49A3B3",
    rx: "3"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#fff",
    d: "M54.569 175v-6.545h2.62q.723 0 1.206.214.482.214.725.594.243.378.243.869 0 .384-.154.675a1.3 1.3 0 0 1-.421.473q-.266.182-.608.259v.064q.375.015.7.211.33.195.534.546.205.348.205.831 0 .52-.26.93-.255.406-.757.642-.5.237-1.237.237zm1.384-1.131h1.128q.579 0 .844-.221a.74.74 0 0 0 .265-.594.9.9 0 0 0-.131-.48.9.9 0 0 0-.374-.326 1.3 1.3 0 0 0-.572-.118h-1.16zm0-2.675h1.026q.285 0 .505-.1a.84.84 0 0 0 .351-.287.75.75 0 0 0 .131-.444.72.72 0 0 0-.252-.573q-.25-.216-.71-.217h-1.051zm10.581.533q0 1.07-.406 1.822a2.8 2.8 0 0 1-1.1 1.147 3.1 3.1 0 0 1-1.559.393 3.1 3.1 0 0 1-1.566-.396 2.8 2.8 0 0 1-1.096-1.147q-.403-.751-.403-1.819 0-1.071.403-1.821a2.8 2.8 0 0 1 1.096-1.145 3.1 3.1 0 0 1 1.566-.396 3.1 3.1 0 0 1 1.56.396q.695.393 1.1 1.145.405.75.405 1.821m-1.403 0q0-.693-.208-1.169a1.6 1.6 0 0 0-.578-.723 1.56 1.56 0 0 0-.876-.246q-.501 0-.876.246-.374.246-.581.723-.205.476-.205 1.169t.205 1.17q.207.476.581.722t.876.246.876-.246.578-.722q.208-.476.208-1.17m8.443 0q0 1.07-.406 1.822a2.8 2.8 0 0 1-1.1 1.147 3.1 3.1 0 0 1-1.559.393 3.1 3.1 0 0 1-1.566-.396 2.8 2.8 0 0 1-1.096-1.147q-.403-.751-.403-1.819 0-1.071.403-1.821a2.8 2.8 0 0 1 1.096-1.145 3.1 3.1 0 0 1 1.566-.396q.866 0 1.56.396.695.393 1.1 1.145.405.75.405 1.821m-1.403 0q0-.693-.208-1.169a1.6 1.6 0 0 0-.578-.723 1.56 1.56 0 0 0-.876-.246q-.502 0-.876.246t-.581.723q-.205.476-.205 1.169t.205 1.17q.207.476.581.722t.876.246.876-.246.578-.722q.208-.476.208-1.17M74.599 175v-6.545h1.384v2.886h.086l2.356-2.886h1.659l-2.43 2.93L80.113 175h-1.655l-1.793-2.691-.681.831V175zm13.763-6.545V175h-1.195l-2.848-4.12h-.048V175h-1.384v-6.545h1.215l2.825 4.116h.058v-4.116zm7.158 3.272q0 1.07-.406 1.822a2.8 2.8 0 0 1-1.099 1.147 3.1 3.1 0 0 1-1.56.393 3.1 3.1 0 0 1-1.566-.396 2.8 2.8 0 0 1-1.096-1.147q-.402-.751-.403-1.819 0-1.071.403-1.821a2.8 2.8 0 0 1 1.096-1.145 3.1 3.1 0 0 1 1.566-.396q.867 0 1.56.396.697.393 1.1 1.145.405.75.405 1.821m-1.403 0q0-.693-.208-1.169a1.6 1.6 0 0 0-.578-.723 1.56 1.56 0 0 0-.876-.246q-.501 0-.875.246-.375.246-.582.723-.204.476-.205 1.169 0 .694.205 1.17.207.476.582.722.373.246.875.246t.876-.246.578-.722q.208-.476.208-1.17M97.773 175l-1.873-6.545h1.512l1.083 4.547h.054l1.196-4.547h1.294l1.192 4.557h.058l1.083-4.557h1.512L103.011 175h-1.349l-1.246-4.279h-.051L99.121 175z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    filter: "url(#filter1_d_1651_1362)",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "169.532",
      height: "156.356",
      x: "106",
      y: "69",
      fill: "#fff",
      rx: "6"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#313131",
    d: "M123.134 105.174h1.332l1.408 3.434h.06l1.407-3.434h1.333v5.111h-1.048v-3.326h-.043l-1.322 3.301h-.714l-1.323-3.314h-.042v3.339h-1.048zM145.778 106.065v-.891h4.197v.891h-1.565v4.22h-1.068v-4.22zM168.204 110.285l-1.462-5.111h1.18l.846 3.551h.043l.933-3.551h1.011l.931 3.559h.045l.846-3.559h1.18l-1.462 5.111h-1.054l-.973-3.341h-.04l-.97 3.341zM190.576 106.065v-.891h4.198v.891h-1.565v4.22h-1.068v-4.22zM211.853 110.285v-5.111h3.384v.891h-2.304v1.218h2.079v.891h-2.079v2.111zM234.828 106.644a.63.63 0 0 0-.257-.469q-.226-.167-.616-.167a1.2 1.2 0 0 0-.447.075.62.62 0 0 0-.279.202.5.5 0 0 0-.095.294.43.43 0 0 0 .057.24.6.6 0 0 0 .178.177q.112.073.259.127.147.052.315.09l.459.11q.334.075.614.2.279.124.484.307.204.181.317.429.114.246.117.566a1.4 1.4 0 0 1-.24.814 1.5 1.5 0 0 1-.678.531q-.442.187-1.066.187-.62 0-1.078-.189a1.6 1.6 0 0 1-.714-.562q-.254-.374-.267-.926h1.046a.8.8 0 0 0 .147.43.8.8 0 0 0 .352.257q.222.084.502.085.274 0 .476-.08a.74.74 0 0 0 .317-.222.5.5 0 0 0 .112-.327.43.43 0 0 0-.102-.29.8.8 0 0 0-.294-.199 3 3 0 0 0-.472-.15l-.557-.14q-.646-.158-1.02-.491-.375-.335-.372-.901-.002-.465.247-.811.252-.347.691-.542.44-.195.998-.195.57 0 .994.195.426.195.663.542t.245.803zM255.91 106.644a.63.63 0 0 0-.257-.469q-.227-.167-.616-.167-.266 0-.447.075a.63.63 0 0 0-.28.202.5.5 0 0 0-.094.294.4.4 0 0 0 .057.24.6.6 0 0 0 .177.177q.113.073.26.127.147.052.314.09l.459.11q.335.075.614.2.28.124.484.307.205.181.317.429.115.246.118.566a1.4 1.4 0 0 1-.24.814 1.5 1.5 0 0 1-.679.531q-.441.187-1.065.187-.62 0-1.078-.189a1.6 1.6 0 0 1-.714-.562q-.255-.374-.267-.926h1.046q.017.258.147.43a.8.8 0 0 0 .352.257q.222.084.501.085.275 0 .477-.08a.75.75 0 0 0 .317-.222.5.5 0 0 0 .112-.327.43.43 0 0 0-.102-.29.8.8 0 0 0-.295-.199 3 3 0 0 0-.471-.15l-.557-.14q-.646-.158-1.021-.491-.374-.335-.371-.901-.003-.465.247-.811.252-.347.691-.542t.998-.195q.57 0 .993.195.427.195.664.542t.245.803z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "15",
    height: "14",
    x: "184",
    y: "135",
    fill: "#49A3B3",
    rx: "3"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#898989",
    d: "M254.453 122.742v5.111h-1.081v-4.085h-.03l-1.17.733v-.958l1.265-.801zM122.225 144.542v-.778l1.82-1.685q.231-.224.389-.404.16-.18.242-.352a.9.9 0 0 0 .082-.377.7.7 0 0 0-.102-.386.67.67 0 0 0-.279-.252.9.9 0 0 0-.402-.09.83.83 0 0 0-.409.095.64.64 0 0 0-.27.272.9.9 0 0 0-.095.421h-1.025q0-.5.227-.871.227-.369.636-.571a2.1 2.1 0 0 1 .943-.202q.55 0 .956.194.41.194.636.534.228.343.227.784 0 .29-.114.572a2.4 2.4 0 0 1-.402.626 9 9 0 0 1-.816.821l-.746.731v.035h2.146v.883zM146.953 144.612q-.56 0-.996-.192a1.7 1.7 0 0 1-.686-.534 1.35 1.35 0 0 1-.257-.788h1.088a.57.57 0 0 0 .122.329.76.76 0 0 0 .305.217q.189.077.426.077.248 0 .437-.087a.7.7 0 0 0 .297-.242.6.6 0 0 0 .107-.357.6.6 0 0 0-.114-.362.74.74 0 0 0-.325-.249 1.3 1.3 0 0 0-.499-.09h-.477v-.794h.477q.245 0 .432-.084a.7.7 0 0 0 .294-.235.6.6 0 0 0 .105-.354.61.61 0 0 0-.347-.567.8.8 0 0 0-.379-.082 1 1 0 0 0-.402.08.7.7 0 0 0-.292.222.6.6 0 0 0-.117.339h-1.036q.007-.441.252-.778.245-.338.659-.527.417-.192.941-.192.529 0 .926.192t.616.519q.222.324.22.729.001.43-.267.716-.267.287-.697.364v.04q.565.072.859.392.297.317.294.794.003.436-.252.776-.252.339-.696.534a2.5 2.5 0 0 1-1.018.194M166.068 143.644v-.851l2.134-3.361h.734v1.177h-.435l-1.345 2.129v.04h3.032v.866zm2.453.898v-1.158l.02-.376v-3.576h1.013v5.11z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#fff",
    d: "M191.729 144.612q-.53 0-.943-.194a1.64 1.64 0 0 1-.654-.537 1.4 1.4 0 0 1-.252-.784h1.048a.64.64 0 0 0 .25.482.86.86 0 0 0 .551.185.9.9 0 0 0 .449-.113.8.8 0 0 0 .307-.316.96.96 0 0 0 .112-.47.96.96 0 0 0-.114-.474.8.8 0 0 0-.312-.319.9.9 0 0 0-.457-.117q-.224 0-.437.092a.8.8 0 0 0-.327.252l-.96-.172.242-2.695h3.124v.883h-2.233l-.133 1.28h.03a1 1 0 0 1 .407-.314q.272-.125.609-.125.462 0 .823.217.362.217.572.597.21.376.207.868a1.684 1.684 0 0 1-.911 1.547 2.1 2.1 0 0 1-.998.227"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#898989",
    d: "M212.906 144.612a2.3 2.3 0 0 1-.762-.132 1.7 1.7 0 0 1-.653-.422 2 2 0 0 1-.459-.773q-.168-.482-.168-1.183a4.3 4.3 0 0 1 .148-1.151q.147-.509.419-.863a1.84 1.84 0 0 1 .656-.539q.382-.187.856-.187.512 0 .903.199a1.67 1.67 0 0 1 .919 1.298h-1.066a.7.7 0 0 0-.262-.419.8.8 0 0 0-.494-.152.83.83 0 0 0-.759.434q-.256.434-.262 1.18h.035q.115-.226.31-.387.197-.162.446-.247.253-.087.532-.087.454 0 .809.215.354.212.559.584.204.37.204.851 0 .518-.242.923-.24.404-.671.634a2.1 2.1 0 0 1-.998.224m-.005-.848a.84.84 0 0 0 .756-.444.94.94 0 0 0 .112-.46.9.9 0 0 0-.112-.456.827.827 0 0 0-.749-.442.85.85 0 0 0-.808.554.935.935 0 0 0 .044.799.9.9 0 0 0 .31.327q.196.122.447.122M231.35 144.542l2.118-4.192v-.035H231v-.883h3.586v.896l-2.121 4.214zM254.136 144.612a2.6 2.6 0 0 1-1.026-.187 1.7 1.7 0 0 1-.701-.516 1.17 1.17 0 0 1-.255-.742q0-.32.145-.586.147-.27.399-.447a1.3 1.3 0 0 1 .564-.229v-.035a1.1 1.1 0 0 1-.664-.397 1.15 1.15 0 0 1-.254-.736q0-.397.232-.706.232-.312.636-.49.407-.179.924-.179.516 0 .92.179.408.18.639.492.232.31.235.704a1.14 1.14 0 0 1-.26.736q-.257.315-.658.397v.035q.306.05.556.229.252.177.399.447a1.2 1.2 0 0 1-.105 1.328q-.254.326-.703.516a2.6 2.6 0 0 1-1.023.187m0-.793q.257 0 .449-.093a.73.73 0 0 0 .299-.259.7.7 0 0 0 .11-.384.7.7 0 0 0-.112-.392.8.8 0 0 0-.305-.27.95.95 0 0 0-.441-.1.96.96 0 0 0-.442.1.77.77 0 0 0-.307.27.7.7 0 0 0-.11.392q0 .216.107.384.108.165.302.259.195.093.45.093m0-2.284a.8.8 0 0 0 .381-.087.65.65 0 0 0 .357-.599.638.638 0 0 0-.354-.586.8.8 0 0 0-.384-.088.8.8 0 0 0-.385.088.65.65 0 0 0-.262.237.66.66 0 0 0-.092.349.652.652 0 0 0 .357.599.8.8 0 0 0 .382.087M124.075 156.052q.393 0 .758.132.368.132.654.422.29.29.457.768.17.477.172 1.171 0 .651-.147 1.163a2.6 2.6 0 0 1-.417.866 1.8 1.8 0 0 1-.656.544 2 2 0 0 1-.859.184q-.511 0-.903-.197a1.7 1.7 0 0 1-.632-.541 1.7 1.7 0 0 1-.287-.774h1.066a.73.73 0 0 0 .262.434.8.8 0 0 0 .494.152.83.83 0 0 0 .759-.434q.26-.436.262-1.195h-.035q-.115.225-.31.387a1.4 1.4 0 0 1-.446.247 1.6 1.6 0 0 1-.532.087q-.452 0-.806-.212a1.5 1.5 0 0 1-.559-.584 1.74 1.74 0 0 1-.204-.848 1.73 1.73 0 0 1 .237-.916q.239-.402.668-.629a2.1 2.1 0 0 1 1.004-.227m.007.848a.85.85 0 0 0-.759.442.9.9 0 0 0-.109.452q0 .252.109.454a.9.9 0 0 0 .305.319q.195.117.444.117.187 0 .347-.069a.9.9 0 0 0 .277-.193.91.91 0 0 0 .14-1.075.87.87 0 0 0-.31-.324.8.8 0 0 0-.444-.123M148.125 161.345q-.645-.003-1.108-.317-.462-.315-.712-.911-.246-.597-.244-1.435 0-.835.247-1.425.249-.589.711-.896.464-.309 1.106-.309.64 0 1.103.309.464.31.713.899.25.587.247 1.422 0 .841-.249 1.437-.247.597-.709.911t-1.105.315m0-.896q.438 0 .701-.442.262-.441.259-1.325 0-.582-.119-.968-.118-.387-.335-.582a.73.73 0 0 0-.506-.194q-.436 0-.699.436t-.265 1.308q0 .589.118.983.12.392.337.589.216.195.509.195M144.906 156.122v5.11h-1.08v-4.085h-.03l-1.171.734v-.958l1.266-.801zM171.004 156.122v5.11h-1.08v-4.085h-.03l-1.17.734v-.958l1.265-.801zM167.566 156.122v5.11h-1.08v-4.085h-.03l-1.171.734v-.958l1.266-.801zM190.686 161.232v-.778l1.819-1.685q.233-.224.39-.404.16-.18.242-.352a.9.9 0 0 0 .082-.377.676.676 0 0 0-.382-.638.9.9 0 0 0-.402-.09.84.84 0 0 0-.409.095.65.65 0 0 0-.269.272.9.9 0 0 0-.095.421h-1.026q0-.5.227-.871.228-.369.637-.571t.943-.202q.549 0 .956.194.409.194.636.534.227.343.227.784 0 .29-.115.571a2.4 2.4 0 0 1-.401.627 9 9 0 0 1-.816.821l-.747.731v.035h2.146v.883zM189.471 156.122v5.11h-1.08v-4.085h-.03l-1.17.734v-.958l1.265-.801zM216.271 161.302a2.45 2.45 0 0 1-.995-.192 1.7 1.7 0 0 1-.686-.534 1.34 1.34 0 0 1-.257-.789h1.088a.56.56 0 0 0 .122.33.76.76 0 0 0 .304.217q.19.077.427.077.247 0 .437-.087a.7.7 0 0 0 .297-.242.6.6 0 0 0 .107-.357.6.6 0 0 0-.115-.362.74.74 0 0 0-.324-.249 1.3 1.3 0 0 0-.499-.09h-.477v-.794h.477q.245 0 .431-.085a.7.7 0 0 0 .295-.234.6.6 0 0 0 .105-.354.6.6 0 0 0-.093-.337.6.6 0 0 0-.254-.23.8.8 0 0 0-.38-.082 1 1 0 0 0-.401.08.7.7 0 0 0-.292.222.6.6 0 0 0-.118.339h-1.035q.007-.441.252-.779.245-.337.659-.526.417-.192.94-.192.53 0 .926.192.397.192.617.519.222.324.219.729a1 1 0 0 1-.267.716q-.267.287-.696.364v.04q.564.072.858.392.297.317.295.793.003.437-.252.777-.252.339-.696.534a2.5 2.5 0 0 1-1.019.194M213.168 156.122v5.11h-1.081v-4.085h-.03l-1.17.734v-.958l1.265-.801zM233.63 160.334v-.851l2.134-3.361h.733v1.177h-.434l-1.345 2.129v.04h3.032v.866zm2.453.898v-1.158l.02-.376v-3.576h1.013v5.11zM232.493 156.122v5.11h-1.081v-4.085h-.03l-1.17.734v-.958l1.265-.801zM254.899 161.302q-.529 0-.944-.194a1.64 1.64 0 0 1-.653-.537 1.37 1.37 0 0 1-.252-.784h1.048a.64.64 0 0 0 .249.482.86.86 0 0 0 .552.185.9.9 0 0 0 .449-.113.8.8 0 0 0 .307-.317.95.95 0 0 0 .112-.469.95.95 0 0 0-.115-.474.8.8 0 0 0-.312-.319.9.9 0 0 0-.456-.118q-.225 0-.437.093a.8.8 0 0 0-.327.252l-.961-.172.242-2.695h3.125v.883h-2.234l-.132 1.28h.03a1 1 0 0 1 .407-.314q.272-.125.609-.125.461 0 .823.217.362.218.572.596.209.377.207.869.002.516-.24.918a1.7 1.7 0 0 1-.671.629 2.1 2.1 0 0 1-.998.227M251.817 156.122v5.11h-1.08v-4.085h-.03l-1.17.734v-.958l1.265-.801zM127.53 177.992a2.2 2.2 0 0 1-.943-.195 1.65 1.65 0 0 1-.654-.537 1.4 1.4 0 0 1-.252-.783h1.048a.64.64 0 0 0 .25.481.85.85 0 0 0 .551.185q.255 0 .449-.112a.8.8 0 0 0 .307-.317.96.96 0 0 0 .113-.469.96.96 0 0 0-.115-.474.8.8 0 0 0-.312-.32.9.9 0 0 0-.457-.117 1.1 1.1 0 0 0-.436.092.8.8 0 0 0-.327.252l-.961-.172.242-2.695h3.124v.883h-2.233l-.132 1.281h.03a1 1 0 0 1 .406-.315q.273-.125.609-.125.462 0 .824.218.361.216.571.596.21.377.207.868.003.517-.239.919a1.7 1.7 0 0 1-.672.629 2.1 2.1 0 0 1-.998.227M124.449 172.811v5.111h-1.081v-4.085h-.03l-1.17.733v-.958l1.265-.801zM147.092 177.922l2.118-4.193v-.035h-2.468v-.883h3.586v.896l-2.121 4.215zM145.675 172.811v5.111h-1.081v-4.085h-.03l-1.17.733v-.958l1.265-.801zM170.083 177.992q-.576 0-1.025-.187a1.7 1.7 0 0 1-.701-.517 1.17 1.17 0 0 1-.255-.741q0-.32.145-.587.147-.269.399-.446a1.3 1.3 0 0 1 .564-.23v-.035a1.1 1.1 0 0 1-.664-.397 1.14 1.14 0 0 1-.254-.736q0-.396.232-.706.233-.312.636-.489.407-.18.923-.18.517 0 .921.18.406.18.639.491.232.31.235.704a1.14 1.14 0 0 1-.26.736q-.257.315-.659.397v.035q.307.05.557.23.252.177.399.446.15.267.152.587a1.18 1.18 0 0 1-.257.741q-.254.327-.703.517a2.65 2.65 0 0 1-1.024.187m0-.794q.258 0 .45-.092a.73.73 0 0 0 .299-.26.7.7 0 0 0 .11-.384.7.7 0 0 0-.112-.392.8.8 0 0 0-.305-.269.94.94 0 0 0-.442-.1.95.95 0 0 0-.441.1.77.77 0 0 0-.307.269.7.7 0 0 0-.11.392q0 .218.107.384a.74.74 0 0 0 .302.26q.195.092.449.092m0-2.283a.8.8 0 0 0 .382-.088.65.65 0 0 0 .357-.598.64.64 0 0 0-.354-.587.8.8 0 0 0-.385-.087.8.8 0 0 0-.384.087.65.65 0 0 0-.262.237.66.66 0 0 0-.092.35.645.645 0 0 0 .357.598.8.8 0 0 0 .381.088M166.962 172.811v5.111h-1.08v-4.085h-.03l-1.171.733v-.958l1.266-.801zM191.99 172.741q.393 0 .758.132.368.133.654.422.29.29.457.769.17.477.172 1.17 0 .651-.147 1.163a2.6 2.6 0 0 1-.417.866q-.273.357-.656.544a2 2 0 0 1-.859.185q-.511 0-.903-.197a1.7 1.7 0 0 1-.632-.542 1.7 1.7 0 0 1-.287-.774h1.066a.73.73 0 0 0 .262.435.8.8 0 0 0 .494.152.83.83 0 0 0 .759-.434q.26-.437.262-1.196h-.035q-.115.225-.31.387a1.4 1.4 0 0 1-.446.247 1.6 1.6 0 0 1-.532.088q-.452 0-.806-.213a1.5 1.5 0 0 1-.559-.584 1.73 1.73 0 0 1-.205-.848 1.74 1.74 0 0 1 .238-.916q.239-.401.668-.629a2.1 2.1 0 0 1 1.004-.227m.007.849a.85.85 0 0 0-.449.119.9.9 0 0 0-.31.322.9.9 0 0 0-.109.452q0 .252.109.454.113.2.305.32.195.117.444.117a.85.85 0 0 0 .624-.262.92.92 0 0 0 .254-.631.9.9 0 0 0-.114-.445.9.9 0 0 0-.31-.324.8.8 0 0 0-.444-.122M188.926 172.811v5.111h-1.081v-4.085h-.03l-1.17.733v-.958l1.265-.801zM217.374 178.034q-.643-.002-1.108-.317-.46-.314-.711-.911-.247-.596-.244-1.435 0-.836.247-1.424.249-.59.711-.896.464-.31 1.105-.31.642 0 1.103.31.465.309.714.898.25.587.247 1.422 0 .841-.249 1.438-.247.596-.709.911-.462.314-1.106.314m0-.896q.44 0 .702-.441.261-.442.259-1.326 0-.58-.12-.968-.117-.387-.334-.581a.73.73 0 0 0-.507-.195q-.437 0-.698.437-.262.437-.265 1.307 0 .59.117.984.12.391.337.589a.74.74 0 0 0 .509.194M210.944 177.922v-.779l1.819-1.684q.232-.225.39-.404.16-.18.242-.352a.9.9 0 0 0 .082-.377.7.7 0 0 0-.102-.387.67.67 0 0 0-.28-.252.9.9 0 0 0-.401-.09.85.85 0 0 0-.41.095.65.65 0 0 0-.269.272.9.9 0 0 0-.095.422h-1.026q0-.502.227-.871.228-.37.637-.572t.943-.202q.55 0 .956.195.41.192.636.534.228.342.227.783 0 .29-.115.572a2.4 2.4 0 0 1-.401.626 9 9 0 0 1-.816.821l-.746.731v.035h2.146v.884zM236.919 172.811v5.111h-1.081v-4.085h-.03l-1.17.733v-.958l1.265-.801zM230.269 177.922v-.779l1.819-1.684q.233-.225.39-.404.16-.18.242-.352a.9.9 0 0 0 .082-.377.7.7 0 0 0-.102-.387.67.67 0 0 0-.28-.252.9.9 0 0 0-.402-.09.85.85 0 0 0-.409.095.65.65 0 0 0-.269.272.9.9 0 0 0-.095.422h-1.026q0-.502.227-.871.228-.37.637-.572t.943-.202q.55 0 .956.195.41.192.636.534t.227.783q0 .29-.115.572a2.4 2.4 0 0 1-.401.626 9 9 0 0 1-.816.821l-.747.731v.035h2.147v.884zM254.02 177.922v-.779l1.82-1.684a8 8 0 0 0 .389-.404q.16-.18.242-.352a.9.9 0 0 0 .082-.377.7.7 0 0 0-.102-.387.67.67 0 0 0-.279-.252.9.9 0 0 0-.402-.09.85.85 0 0 0-.41.095.65.65 0 0 0-.269.272.9.9 0 0 0-.095.422h-1.025q0-.502.227-.871.227-.37.636-.572t.943-.202q.55 0 .956.195.41.192.636.534t.227.783q0 .29-.114.572a2.4 2.4 0 0 1-.402.626 9 9 0 0 1-.816.821l-.746.731v.035h2.146v.884zM249.594 177.922v-.779l1.819-1.684q.233-.225.39-.404.16-.18.242-.352a.9.9 0 0 0 .082-.377.676.676 0 0 0-.382-.639.9.9 0 0 0-.402-.09.85.85 0 0 0-.409.095.65.65 0 0 0-.269.272.9.9 0 0 0-.095.422h-1.026q0-.502.227-.871.228-.37.637-.572a2.1 2.1 0 0 1 .943-.202q.549 0 .956.195.409.192.636.534t.227.783q0 .29-.115.572a2.4 2.4 0 0 1-.402.626 9 9 0 0 1-.816.821l-.746.731v.035h2.146v.884zM128.541 194.682q-.56 0-.996-.193a1.7 1.7 0 0 1-.686-.534 1.34 1.34 0 0 1-.257-.788h1.088a.57.57 0 0 0 .122.329.75.75 0 0 0 .305.217q.189.078.426.078.248 0 .437-.088a.7.7 0 0 0 .297-.242.6.6 0 0 0 .107-.357.6.6 0 0 0-.114-.361.73.73 0 0 0-.325-.25 1.3 1.3 0 0 0-.499-.09h-.477v-.793h.477q.244 0 .432-.085a.7.7 0 0 0 .294-.235.6.6 0 0 0 .105-.354.62.62 0 0 0-.347-.567.995.995 0 0 0-.781-.002.7.7 0 0 0-.292.222.6.6 0 0 0-.117.339h-1.036q.007-.442.252-.778.245-.337.659-.527.416-.192.941-.192.529 0 .926.192t.616.519q.222.326.22.729.001.43-.267.716-.267.287-.697.365v.039q.564.073.859.392.297.317.294.794.003.437-.252.776-.252.339-.696.534t-1.018.195M122.225 194.612v-.779l1.82-1.684q.231-.225.389-.405a1.6 1.6 0 0 0 .242-.351.9.9 0 0 0 .082-.377.7.7 0 0 0-.102-.387.67.67 0 0 0-.279-.252.9.9 0 0 0-.402-.09.84.84 0 0 0-.409.095.65.65 0 0 0-.27.272.9.9 0 0 0-.095.422h-1.025q0-.502.227-.871.227-.37.636-.572t.943-.202q.55 0 .956.195.41.192.636.534.228.342.227.783 0 .29-.114.572a2.4 2.4 0 0 1-.402.626 9 9 0 0 1-.816.821l-.746.731v.035h2.146v.884zM146.96 193.713v-.851l2.133-3.361h.734v1.178h-.434l-1.345 2.128v.04h3.032v.866zm2.453.899v-1.158l.02-.377v-3.576h1.013v5.111zM142.72 194.612v-.779l1.82-1.684q.231-.225.389-.405a1.6 1.6 0 0 0 .242-.351.9.9 0 0 0 .082-.377.7.7 0 0 0-.102-.387.66.66 0 0 0-.28-.252.9.9 0 0 0-.401-.09.85.85 0 0 0-.41.095.65.65 0 0 0-.269.272.9.9 0 0 0-.095.422h-1.026q0-.502.228-.871.227-.37.636-.572t.943-.202q.55 0 .956.195.41.192.636.534t.227.783q0 .29-.114.572a2.4 2.4 0 0 1-.402.626 9 9 0 0 1-.816.821l-.746.731v.035h2.146v.884zM171.035 194.682q-.53 0-.943-.195a1.64 1.64 0 0 1-.654-.537 1.4 1.4 0 0 1-.252-.783h1.048a.64.64 0 0 0 .25.481.85.85 0 0 0 .551.185q.255 0 .449-.112a.8.8 0 0 0 .307-.317.96.96 0 0 0 .113-.469.96.96 0 0 0-.115-.474.8.8 0 0 0-.312-.32.9.9 0 0 0-.457-.117q-.224 0-.437.092a.8.8 0 0 0-.326.252l-.961-.172.242-2.695h3.124v.883h-2.233l-.132 1.281h.029a1 1 0 0 1 .407-.315q.273-.125.609-.125.462 0 .824.217.361.218.571.597.21.377.207.868.003.517-.239.919a1.7 1.7 0 0 1-.672.628 2.1 2.1 0 0 1-.998.228M164.742 194.612v-.779l1.819-1.684q.232-.225.39-.405a1.6 1.6 0 0 0 .242-.351.9.9 0 0 0 .082-.377.7.7 0 0 0-.102-.387.67.67 0 0 0-.28-.252.9.9 0 0 0-.401-.09.85.85 0 0 0-.41.095.65.65 0 0 0-.269.272.9.9 0 0 0-.095.422h-1.026q0-.502.227-.871.228-.37.637-.572t.943-.202q.55 0 .956.195.41.192.636.534.228.342.227.783 0 .29-.115.572a2.4 2.4 0 0 1-.401.626 9 9 0 0 1-.816.821l-.746.731v.035h2.146v.884zM193.035 194.682a2.3 2.3 0 0 1-.761-.133 1.7 1.7 0 0 1-.654-.421 2.05 2.05 0 0 1-.459-.774q-.167-.481-.167-1.183a4.2 4.2 0 0 1 .147-1.15q.147-.51.419-.864.274-.354.657-.539.38-.187.856-.187.512 0 .903.2.392.197.629.536.239.34.289.761h-1.065a.72.72 0 0 0-.262-.419.8.8 0 0 0-.494-.152.83.83 0 0 0-.759.434q-.257.435-.262 1.181h.035q.115-.228.309-.387.198-.162.447-.247.252-.088.532-.088a1.53 1.53 0 0 1 1.367.799q.205.371.205.851 0 .52-.242.923-.24.405-.672.634a2.1 2.1 0 0 1-.998.225m-.005-.849a.85.85 0 0 0 .756-.444.94.94 0 0 0 .113-.459.9.9 0 0 0-.113-.457.83.83 0 0 0-.748-.442.9.9 0 0 0-.347.07.88.88 0 0 0-.462.484.9.9 0 0 0-.067.347.9.9 0 0 0 .112.452q.116.204.309.327a.84.84 0 0 0 .447.122M186.647 194.612v-.779l1.82-1.684q.231-.225.389-.405a1.6 1.6 0 0 0 .242-.351.9.9 0 0 0 .082-.377.7.7 0 0 0-.102-.387.66.66 0 0 0-.28-.252.9.9 0 0 0-.401-.09.85.85 0 0 0-.41.095.65.65 0 0 0-.269.272.9.9 0 0 0-.095.422h-1.026q0-.502.228-.871.226-.37.636-.572t.943-.202q.55 0 .956.195.41.192.636.534t.227.783q0 .29-.114.572a2.4 2.4 0 0 1-.402.626 9 9 0 0 1-.816.821l-.746.731v.035h2.146v.884zM215.573 194.612l2.118-4.193v-.035h-2.468v-.883h3.586v.896l-2.121 4.215zM210.944 194.612v-.779l1.819-1.684q.232-.225.39-.405a1.6 1.6 0 0 0 .242-.351.9.9 0 0 0 .082-.377.7.7 0 0 0-.102-.387.67.67 0 0 0-.28-.252.9.9 0 0 0-.401-.09.85.85 0 0 0-.41.095.65.65 0 0 0-.269.272.9.9 0 0 0-.095.422h-1.026q0-.502.227-.871.228-.37.637-.572t.943-.202q.55 0 .956.195.41.192.636.534.228.342.227.783 0 .29-.115.572a2.4 2.4 0 0 1-.401.626 9 9 0 0 1-.816.821l-.747.731v.035h2.147v.884zM236.602 194.682q-.576 0-1.026-.188a1.7 1.7 0 0 1-.701-.516 1.17 1.17 0 0 1-.255-.741q0-.32.145-.587.147-.269.399-.446a1.3 1.3 0 0 1 .564-.23v-.035a1.138 1.138 0 0 1-.918-1.133q0-.397.232-.706.232-.312.637-.489.407-.18.923-.18t.921.18q.406.18.639.491.231.31.234.704a1.14 1.14 0 0 1-.259.736q-.257.315-.659.397v.035q.307.05.556.23.252.177.4.446.149.267.152.587a1.2 1.2 0 0 1-.257.741q-.255.327-.704.516a2.6 2.6 0 0 1-1.023.188m0-.794q.257 0 .449-.092a.74.74 0 0 0 .3-.26.7.7 0 0 0 .109-.384.7.7 0 0 0-.112-.392.76.76 0 0 0-.304-.269.94.94 0 0 0-.442-.1.95.95 0 0 0-.442.1.76.76 0 0 0-.307.269.7.7 0 0 0-.11.392.69.69 0 0 0 .41.644q.194.092.449.092m0-2.283q.214 0 .382-.088a.67.67 0 0 0 .262-.242.67.67 0 0 0 .095-.357.64.64 0 0 0-.355-.586.8.8 0 0 0-.384-.087.8.8 0 0 0-.384.087.65.65 0 0 0-.262.237.65.65 0 0 0-.093.349.67.67 0 0 0 .095.357.66.66 0 0 0 .262.242.8.8 0 0 0 .382.088M230.269 194.612v-.779l1.819-1.684q.233-.225.39-.405a1.6 1.6 0 0 0 .242-.351.9.9 0 0 0 .082-.377.676.676 0 0 0-.382-.639.9.9 0 0 0-.402-.09.85.85 0 0 0-.409.095.65.65 0 0 0-.269.272.9.9 0 0 0-.095.422h-1.026q0-.502.227-.871.228-.37.637-.572a2.1 2.1 0 0 1 .943-.202q.548 0 .956.195.409.192.636.534t.227.783q0 .29-.115.572a2.4 2.4 0 0 1-.402.626 9 9 0 0 1-.816.821l-.746.731v.035h2.146v.884zM255.87 189.431q.393 0 .758.132.368.133.654.422.29.29.457.769.17.477.172 1.17 0 .651-.147 1.163a2.6 2.6 0 0 1-.417.866q-.272.357-.656.544a2 2 0 0 1-.859.185q-.512 0-.903-.198a1.7 1.7 0 0 1-.632-.541 1.7 1.7 0 0 1-.287-.774h1.066a.73.73 0 0 0 .262.435.8.8 0 0 0 .494.152.83.83 0 0 0 .759-.434q.26-.437.262-1.196h-.035q-.115.225-.31.387a1.4 1.4 0 0 1-.446.247 1.6 1.6 0 0 1-.532.087q-.452 0-.806-.212a1.5 1.5 0 0 1-.559-.584 1.73 1.73 0 0 1-.205-.848 1.74 1.74 0 0 1 .238-.916q.239-.401.668-.629a2.1 2.1 0 0 1 1.004-.227m.007.849a.85.85 0 0 0-.449.119.9.9 0 0 0-.31.322.9.9 0 0 0-.109.452q0 .252.109.454.113.2.305.32.195.117.444.117a.85.85 0 0 0 .624-.262.92.92 0 0 0 .254-.631.9.9 0 0 0-.114-.445.9.9 0 0 0-.31-.324.8.8 0 0 0-.444-.122M249.594 194.612v-.779l1.819-1.684q.233-.225.389-.405.16-.18.242-.351a.9.9 0 0 0 .083-.377.7.7 0 0 0-.103-.387.67.67 0 0 0-.279-.252.9.9 0 0 0-.402-.09.85.85 0 0 0-.409.095.66.66 0 0 0-.27.272.9.9 0 0 0-.094.422h-1.026q0-.502.227-.871.227-.37.636-.572t.944-.202q.549 0 .955.195.41.192.637.534t.227.783q0 .29-.115.572a2.4 2.4 0 0 1-.402.626 9 9 0 0 1-.816.821l-.746.731v.035h2.146v.884zM128.862 211.413q-.645-.002-1.108-.316-.462-.315-.712-.911-.246-.597-.244-1.435 0-.835.247-1.425.249-.589.711-.896.464-.309 1.106-.309.641 0 1.102.309.465.31.714.898.25.587.247 1.423 0 .84-.249 1.437-.247.596-.709.911t-1.105.314m0-.895q.438 0 .701-.442t.259-1.325q0-.582-.12-.968-.117-.387-.334-.582a.73.73 0 0 0-.506-.195q-.438 0-.699.437-.262.436-.265 1.308 0 .588.118.983.12.392.336.589a.74.74 0 0 0 .51.195M124.115 211.371q-.56 0-.996-.192a1.7 1.7 0 0 1-.686-.534 1.34 1.34 0 0 1-.257-.789h1.088a.56.56 0 0 0 .122.33.76.76 0 0 0 .304.217q.19.077.427.077.247 0 .437-.087a.7.7 0 0 0 .297-.242.6.6 0 0 0 .107-.357.6.6 0 0 0-.115-.362.73.73 0 0 0-.324-.249 1.3 1.3 0 0 0-.499-.09h-.477v-.794h.477q.245 0 .431-.085a.7.7 0 0 0 .295-.234.6.6 0 0 0 .105-.355.61.61 0 0 0-.347-.566.8.8 0 0 0-.38-.082 1 1 0 0 0-.401.079.7.7 0 0 0-.292.223.6.6 0 0 0-.118.339h-1.035q.007-.442.252-.779t.659-.526q.417-.192.94-.192.53 0 .926.192.397.192.617.519.222.324.219.728a1 1 0 0 1-.267.717q-.267.286-.696.364v.04q.564.072.858.392.297.317.295.793.003.437-.252.776-.252.34-.696.534-.445.195-1.018.195"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#313131",
    d: "M206.525 91.838v-4.312h1.159v.752h.045q.119-.401.396-.606.279-.208.64-.208a2 2 0 0 1 .377.043v1.06a2.105 2.105 0 0 0-.506-.065.95.95 0 0 0-.471.116.84.84 0 0 0-.326.315.9.9 0 0 0-.118.466v2.44zM203.765 91.923q-.665 0-1.145-.27a1.85 1.85 0 0 1-.736-.769q-.258-.5-.258-1.182 0-.666.258-1.168.259-.502.728-.783.471-.28 1.106-.28.426 0 .794.137a1.77 1.77 0 0 1 1.078 1.092q.155.41.155.96v.329h-3.642v-.742h2.516a.9.9 0 0 0-.112-.457.8.8 0 0 0-.312-.312.9.9 0 0 0-.458-.115.9.9 0 0 0-.483.126.9.9 0 0 0-.325.334.94.94 0 0 0-.121.464v.704q0 .32.118.553a.86.86 0 0 0 .34.36q.219.126.519.126.2 0 .365-.056a.8.8 0 0 0 .284-.169.74.74 0 0 0 .179-.275l1.106.073a1.5 1.5 0 0 1-.345.697q-.258.294-.668.46a2.5 2.5 0 0 1-.941.163M196.797 91.838v-5.75h1.196v2.163h.036q.079-.175.228-.354.151-.183.393-.303.244-.124.606-.124.472 0 .87.247.4.245.638.739.238.49.238 1.232 0 .722-.233 1.218-.23.495-.629.75a1.6 1.6 0 0 1-.887.253q-.348 0-.592-.116a1.2 1.2 0 0 1-.396-.289 1.5 1.5 0 0 1-.236-.356h-.053v.69zm1.17-2.156q0 .385.107.671.106.287.309.447a.78.78 0 0 0 .491.157q.293 0 .494-.16a1 1 0 0 0 .306-.45q.107-.288.107-.665 0-.374-.104-.657a1 1 0 0 0-.306-.443.78.78 0 0 0-.497-.16.8.8 0 0 0-.494.154.97.97 0 0 0-.306.438 1.9 1.9 0 0 0-.107.668M189.563 91.839v-4.313h1.14v.761h.051q.135-.38.449-.598.315-.219.752-.219.444 0 .756.222.311.219.415.595h.045q.132-.37.477-.592.348-.225.823-.225.603 0 .98.385.379.382.379 1.084v2.9h-1.194v-2.665q0-.36-.191-.539a.67.67 0 0 0-.477-.18q-.325 0-.508.208-.183.206-.182.542v2.633h-1.16V89.15q0-.318-.182-.505a.63.63 0 0 0-.475-.188.66.66 0 0 0-.359.1.7.7 0 0 0-.25.279.9.9 0 0 0-.093.415v2.588zM186.804 91.923q-.666 0-1.146-.27a1.84 1.84 0 0 1-.735-.769q-.258-.5-.258-1.182 0-.666.258-1.168t.727-.783q.471-.28 1.106-.28.427 0 .795.137.37.134.645.407.279.272.433.685.154.41.154.96v.329h-3.641v-.742h2.515a.9.9 0 0 0-.112-.457.8.8 0 0 0-.312-.312.9.9 0 0 0-.457-.115.9.9 0 0 0-.483.126.9.9 0 0 0-.326.334.95.95 0 0 0-.121.464v.704q0 .32.118.553a.87.87 0 0 0 .34.36q.219.126.519.126.2 0 .365-.056a.739.739 0 0 0 .464-.444l1.106.073a1.5 1.5 0 0 1-.346.697q-.258.294-.668.46a2.5 2.5 0 0 1-.94.163M182.147 91.923q-.663 0-1.14-.281a1.9 1.9 0 0 1-.73-.786 2.55 2.55 0 0 1-.252-1.157q0-.662.255-1.162.258-.502.733-.783.474-.284 1.128-.284.565 0 .989.205.423.206.671.576.246.37.272.87h-1.129a.88.88 0 0 0-.252-.52.72.72 0 0 0-.531-.199.8.8 0 0 0-.486.152.97.97 0 0 0-.32.435q-.115.286-.115.693 0 .414.112.702a1 1 0 0 0 .323.441.8.8 0 0 0 .486.152.8.8 0 0 0 .368-.085.7.7 0 0 0 .272-.244.9.9 0 0 0 .143-.39h1.129a1.77 1.77 0 0 1-.27.87 1.63 1.63 0 0 1-.659.584q-.421.21-.997.21M177.439 91.923q-.665 0-1.145-.27a1.84 1.84 0 0 1-.736-.769q-.258-.5-.258-1.182 0-.666.258-1.168a1.9 1.9 0 0 1 .727-.783q.472-.28 1.106-.28.428 0 .795.137.37.134.645.407.279.272.433.685.154.41.154.96v.329h-3.641v-.742h2.515a.9.9 0 0 0-.112-.457.8.8 0 0 0-.311-.312.9.9 0 0 0-.458-.115.9.9 0 0 0-.483.126.9.9 0 0 0-.326.334.95.95 0 0 0-.12.464v.704q0 .32.118.553.12.233.339.36t.52.126q.199 0 .365-.056a.727.727 0 0 0 .463-.444l1.106.073a1.5 1.5 0 0 1-.345.697q-.259.294-.669.46a2.5 2.5 0 0 1-.94.163M171.783 91.838h-2.038v-5.75h2.055q.867 0 1.493.346.627.342.963.986.34.642.34 1.538 0 .899-.34 1.544a2.33 2.33 0 0 1-.968.991q-.63.345-1.505.345m-.823-1.041h.772q.54 0 .907-.191.37-.194.556-.598.188-.406.188-1.05 0-.638-.188-1.041a1.22 1.22 0 0 0-.553-.596q-.368-.19-.907-.19h-.775z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    stroke: "#858585",
    strokeLinejoin: "round",
    d: "m253.572 86.568 3.074 2.635-3.074 2.635m-126.93-5.27-3.074 2.635 3.074 2.635"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
      id: "filter0_d_1651_1362",
      width: "198",
      height: "228",
      x: "0",
      y: "0",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology", {
        in: "SourceAlpha",
        operator: "dilate",
        radius: "2",
        result: "effect1_dropShadow_1651_1362"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset", {
        dx: "3",
        dy: "1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
        stdDeviation: "8"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
        in2: "hardAlpha",
        operator: "out"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        values: "0 0 0 0 0.663347 0 0 0 0 0.684163 0 0 0 0 0.913139 0 0 0 0.16 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_1651_1362"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_1651_1362",
        result: "shape"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
      id: "filter1_d_1651_1362",
      width: "205.532",
      height: "192.356",
      x: "91",
      y: "52",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology", {
        in: "SourceAlpha",
        operator: "dilate",
        radius: "2",
        result: "effect1_dropShadow_1651_1362"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset", {
        dx: "3",
        dy: "1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
        stdDeviation: "8"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
        in2: "hardAlpha",
        operator: "out"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        values: "0 0 0 0 0.663347 0 0 0 0 0.684163 0 0 0 0 0.913139 0 0 0 0.16 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_1651_1362"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_1651_1362",
        result: "shape"
      })]
    })]
  })]
}));

/***/ }),

/***/ "./src/components/icons/EmailTemplatesIcon.jsx":
/*!*****************************************************!*\
  !*** ./src/components/icons/EmailTemplatesIcon.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "244",
  height: "130",
  fill: "none",
  viewBox: "0 0 244 130",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    opacity: "0.7",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
      filter: "url(#filter0_d_1651_1265)",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        width: "234",
        height: "107",
        x: "5",
        y: "6",
        fill: "#FCFCFC",
        rx: "5"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#E2EAFF",
      d: "M23 58h203v4H23zM23 48h203v4H23zM23 78h203v4H23zM23 68h203v4H23zM23 98h203v4H23zM23 88h203v4H23z"
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    clipPath: "url(#clip0_1651_1265)",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#fff",
      d: "M175.451 122.501 67.5 122.406l.05-72.116 53.763-36.79 54.188 36.885z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#000",
      d: "m175.451 123-107.952-.095a.5.5 0 0 1-.499-.5l.05-72.116c0-.165.08-.32.22-.41l53.758-36.794a.5.5 0 0 1 .564 0l54.188 36.884c.135.095.22.25.22.415l-.05 72.116a.493.493 0 0 1-.499.5m-107.452-1.094 106.952.095.05-71.352-53.688-36.545-53.264 36.45z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#fff",
      d: "m77.416 72.653 44.087 14.92 44.083-14.92V20.568h-88.17z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#E2EAFF",
      d: "M121.503 88.324a.8.8 0 0 1-.24-.04L77.175 73.363a.75.75 0 0 1-.509-.71V20.568c0-.415.335-.75.75-.75h88.174c.414 0 .749.335.749.75v52.085c0 .32-.205.605-.51.71l-44.087 14.92a.8.8 0 0 1-.239.04m-43.339-16.21 43.339 14.67 43.338-14.67V21.317H78.164z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#E2EAFF",
      d: "M85.834 48.247h38.75v-5.98h-38.75zM85.833 36.118h26.048v-5.98H85.833z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#000",
      d: "M127.854 76.844h-17.29a.5.5 0 0 1-.5-.5c0-.274.225-.499.5-.499h17.29a.5.5 0 0 1 0 1M127.889 68.497h-28.48a.5.5 0 0 1-.499-.5.5.5 0 0 1 .5-.499h28.479a.5.5 0 0 1 0 1M144.899 68.497h-10.695a.5.5 0 0 1-.499-.5c0-.274.225-.499.499-.499h10.695c.275 0 .5.225.5.5 0 .274-.225.5-.5.5M106.863 60.155H86.742a.5.5 0 0 1-.5-.5.5.5 0 0 1 .5-.499h20.121c.274 0 .499.225.499.5s-.225.5-.499.5M157.301 60.155h-39.104a.5.5 0 0 1-.5-.5c0-.274.225-.499.5-.499h39.104a.5.5 0 0 1 0 1"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#fff",
      d: "M175.451 122.501 67.5 122.406l.05-72.116 53.709 36.18 54.242-36.085z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#000",
      d: "m175.451 123-107.952-.095a.5.5 0 0 1-.499-.499l.05-72.116c0-.185.1-.355.265-.44a.51.51 0 0 1 .514.025l53.434 35.99 53.963-35.9c.155-.1.35-.11.514-.025a.49.49 0 0 1 .265.44l-.05 72.116a.493.493 0 0 1-.499.499zm-107.452-1.094 106.952.095.05-70.682-53.464 35.57a.51.51 0 0 1-.554 0L68.049 51.23z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#000",
      d: "M171.776 120.677a.5.5 0 0 1-.28-.084l-47.502-31.965a.499.499 0 1 1 .559-.83l47.503 31.965a.5.5 0 0 1-.28.914M71.803 120.248a.503.503 0 0 1-.285-.915L117.2 88.128a.5.5 0 0 1 .694.13c.154.23.095.54-.13.694l-45.68 31.211a.5.5 0 0 1-.28.085"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#B8CBFD",
      d: "M156.977 27.746H133.38c-.816 0-1.478.662-1.478 1.479v17.923c0 .816.662 1.478 1.478 1.478h23.597c.816 0 1.478-.662 1.478-1.478V29.225c0-.817-.662-1.479-1.478-1.479"
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    clipPath: "url(#clip1_1651_1265)",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#fff",
      d: "m165.064 22.441 1.048-.659 3.687.838 1.283-2.432a3.5 3.5 0 1 1 3.231 5.13l-2.748.106-.838 3.688-1.047.66-1.319-2.095-11.825 7.446a2.11 2.11 0 0 1-1.594.272 2.11 2.11 0 0 0-1.594.272l-1.354.853-.659-1.047 1.354-.853c.474-.298.81-.773.934-1.32.124-.546.461-1.02.935-1.319l11.825-7.445z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      stroke: "#0F172A",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.2",
      d: "m168.361 27.677 1.319 2.094 1.047-.659.838-3.688 2.748-.105a3.5 3.5 0 1 0-3.231-5.13l-1.283 2.431-3.687-.838-1.048.66 1.319 2.094m1.978 3.141-11.825 7.446a2.11 2.11 0 0 1-1.594.272 2.11 2.11 0 0 0-1.594.272l-1.354.853-.659-1.047 1.354-.853c.474-.298.81-.773.934-1.32.124-.546.461-1.02.935-1.319l11.825-7.445m1.978 3.141-1.978-3.141"
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
    cx: "64",
    cy: "104",
    r: "26",
    fill: "#D7EBFF"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.2",
    d: "M68.66 104.674h9.368c.887 0 1.606.711 1.606 1.589v10.785c0 .878-.72 1.589-1.606 1.589H64.786a1.6 1.6 0 0 1-1.606-1.589v-7.356M74.08 92.022v8.729M69.332 93.437v-1.51h9.499v1.51M72.123 100.751h3.918M50.191 110.786h9.28M50.191 113.786h9.28M50.191 116.789h9.28"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.2",
    d: "M65.737 89.363H48.594a1.22 1.22 0 0 0-1.227 1.213v16.086c0 .67.55 1.214 1.227 1.214h17.143a1.22 1.22 0 0 0 1.227-1.214V90.576c0-.67-.55-1.213-1.227-1.213"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.2",
    d: "m53.424 103.58 5.7-7.558 5.701 7.558M55.79 98.267l-1.052-1.174-5.234 6.487M62.894 95.762c.88 0 1.595-.709 1.595-1.582s-.714-1.582-1.595-1.582-1.595.708-1.595 1.582c0 .873.714 1.581 1.595 1.581"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
      id: "clip0_1651_1265",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fill: "#fff",
        d: "M67 13h109v110H67z"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
      id: "clip1_1651_1265",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fill: "#fff",
        d: "m154.205 11 27.304 6.205-6.206 27.304L148 38.304z"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
      id: "filter0_d_1651_1265",
      width: "244",
      height: "117",
      x: "0",
      y: "0",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology", {
        in: "SourceAlpha",
        operator: "dilate",
        radius: "5",
        result: "effect1_dropShadow_1651_1265"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset", {
        dy: "-1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
        in2: "hardAlpha",
        operator: "out"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        values: "0 0 0 0 0.760077 0 0 0 0 0.858475 0 0 0 0 0.932274 0 0 0 0.13 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_1651_1265"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_1651_1265",
        result: "shape"
      })]
    })]
  })]
}));

/***/ }),

/***/ "./src/components/icons/GiftCardsIcon.jsx":
/*!************************************************!*\
  !*** ./src/components/icons/GiftCardsIcon.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "185",
  height: "110",
  fill: "none",
  viewBox: "0 0 185 110",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    filter: "url(#filter0_d_1651_1314)",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "175",
      height: "100",
      x: "5",
      y: "6",
      fill: "#fff",
      rx: "5"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "73",
    height: "85",
    x: "12",
    y: "12",
    fill: "#EBEBEB",
    rx: "5"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    stroke: "#ACACAC",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    clipPath: "url(#clip0_1651_1314)",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M67.354 37.523H27.646c-2.273 0-4.116 1.819-4.116 4.064v27.826c0 2.245 1.843 4.064 4.116 4.064h39.708c2.273 0 4.116-1.819 4.116-4.064V41.587c0-2.245-1.843-4.064-4.116-4.064M71.47 51.883H52.408M27.51 51.883h-3.98M52.143 62.365h12.631M52.143 66.29h12.631M39.96 73.474v-15.28M39.96 47.838V37.523"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M32.542 61.656a13.54 13.54 0 0 0 6.124-6.696l1.293-3.077 1.292 3.077a13.54 13.54 0 0 0 6.124 6.696M46.051 56.07c2.342 0 4.238-1.874 4.238-4.187s-1.896-4.187-4.238-4.187c-2.341 0-6.092 4.187-6.092 4.187s3.751 4.186 6.092 4.186M33.867 56.07c-2.341 0-4.237-1.874-4.237-4.187s1.896-4.187 4.237-4.187 6.092 4.187 6.092 4.187-3.75 4.186-6.092 4.186"
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M99.784 51.455V36.909h.932v14.546zm2.688-9.892q-.08-.745-.671-1.16-.585-.414-1.523-.414-.659 0-1.13.199-.472.198-.722.54a1.3 1.3 0 0 0-.255.778q0 .363.164.63.17.267.46.455.291.181.642.307.352.124.711.21l1.091.273q.658.153 1.267.414.613.262 1.096.66.49.398.773.96t.284 1.318q0 1.023-.523 1.801-.522.773-1.511 1.21-.983.432-2.381.432-1.358 0-2.358-.42-.993-.42-1.556-1.228-.557-.807-.603-1.965h2.074q.045.608.375 1.01.33.404.858.603.534.2 1.193.199.688 0 1.205-.205.522-.21.818-.58a1.4 1.4 0 0 0 .301-.874q-.006-.455-.267-.75-.26-.3-.733-.5a7 7 0 0 0-1.091-.364l-1.324-.34q-1.437-.37-2.272-1.12-.83-.755-.83-2.006 0-1.028.557-1.8.562-.774 1.528-1.2.966-.431 2.188-.431 1.239 0 2.17.431.938.426 1.472 1.188.534.755.551 1.739zm8.686-3.2V50h-2.108v-9.585h-.068l-2.722 1.738v-1.931l2.892-1.858zm7.255 11.859q-1.403 0-2.409-.71-1-.717-1.54-2.063-.534-1.353-.534-3.256.006-1.903.54-3.238.54-1.341 1.54-2.046 1.006-.704 2.403-.704t2.404.704q1.005.705 1.54 2.046.539 1.34.539 3.238 0 1.91-.539 3.262-.535 1.346-1.54 2.056-1 .71-2.404.71m0-1.779q1.091 0 1.722-1.074.636-1.08.636-3.176 0-1.386-.289-2.33-.29-.942-.819-1.42a1.8 1.8 0 0 0-1.25-.483q-1.085 0-1.716 1.08-.63 1.074-.636 3.153-.006 1.393.278 2.341.29.95.819 1.432a1.8 1.8 0 0 0 1.255.477m10.672 1.779q-1.402 0-2.409-.71-1-.717-1.54-2.063-.534-1.353-.534-3.256.006-1.903.54-3.238.54-1.341 1.54-2.046 1.005-.704 2.403-.704t2.404.704q1.005.705 1.539 2.046.54 1.34.54 3.238 0 1.91-.54 3.262-.534 1.346-1.539 2.056-1 .71-2.404.71m0-1.779q1.091 0 1.722-1.074.636-1.08.636-3.176 0-1.386-.29-2.33-.289-.942-.818-1.42a1.8 1.8 0 0 0-1.25-.483q-1.085 0-1.716 1.08-.63 1.074-.636 3.153-.006 1.393.278 2.341.29.95.819 1.432.528.477 1.255.477M101.437 23.532a2.9 2.9 0 0 0-.36-.752 2.3 2.3 0 0 0-.531-.573 2.2 2.2 0 0 0-.706-.364 2.8 2.8 0 0 0-.863-.125q-.8 0-1.44.41-.643.412-1.016 1.206-.37.788-.37 1.934 0 1.149.374 1.944.374.793 1.025 1.204t1.482.411q.771 0 1.343-.314.578-.313.891-.886.32-.577.319-1.357l.369.07h-2.705v-1.178h3.716v1.076q0 1.19-.508 2.068a3.46 3.46 0 0 1-1.394 1.348q-.886.475-2.031.475-1.284 0-2.253-.59-.965-.592-1.505-1.676-.54-1.09-.54-2.586 0-1.13.314-2.03.314-.901.882-1.529a3.85 3.85 0 0 1 1.343-.965 4.2 4.2 0 0 1 1.694-.337q.767 0 1.427.226.665.226 1.182.642a3.65 3.65 0 0 1 1.325 2.248zM105.11 30v-7.09h1.38V30zm.697-8.185a.88.88 0 0 1-.619-.24.78.78 0 0 1-.254-.582q0-.34.254-.581a.87.87 0 0 1 .619-.245q.36 0 .614.245.258.24.258.581a.78.78 0 0 1-.258.582.86.86 0 0 1-.614.24m5.915 1.094v1.108h-4.008v-1.108zM108.813 30v-7.913q0-.664.291-1.103.291-.443.771-.66.48-.222 1.043-.222.415 0 .711.07.295.064.439.12l-.323 1.117a7 7 0 0 0-.25-.065 1.4 1.4 0 0 0-.369-.041q-.503 0-.72.249-.213.249-.213.72V30zm7.643-7.09v1.107h-3.874v-1.108zm-2.835-1.7h1.381v6.708q0 .402.12.605.12.198.309.272.194.07.42.07.167 0 .291-.024.125-.022.194-.037l.249 1.14q-.12.047-.342.093a2.7 2.7 0 0 1-.554.055 2.4 2.4 0 0 1-1.015-.194 1.74 1.74 0 0 1-.762-.627q-.291-.425-.291-1.067zm15.765 2.41h-1.44a2.2 2.2 0 0 0-.863-1.408 2.4 2.4 0 0 0-.734-.37 2.9 2.9 0 0 0-.854-.124q-.817 0-1.464.41-.641.412-1.015 1.206-.37.794-.37 1.939 0 1.155.37 1.948.373.795 1.02 1.2.647.406 1.454.406.448 0 .85-.12.405-.124.734-.364.327-.24.554-.587.23-.35.318-.803l1.44.005a3.9 3.9 0 0 1-.447 1.283q-.328.582-.845 1.006-.513.42-1.173.651t-1.44.231q-1.228 0-2.188-.581-.96-.587-1.515-1.676-.549-1.09-.549-2.6 0-1.514.554-2.598.554-1.09 1.514-1.671.96-.587 2.184-.587.752 0 1.403.217.656.213 1.178.628.52.412.863 1.006.341.591.461 1.353m3.66 6.537a2.9 2.9 0 0 1-1.219-.25 2.05 2.05 0 0 1-.863-.733q-.314-.48-.314-1.178 0-.6.231-.987.231-.389.623-.614.393-.227.877-.342a9 9 0 0 1 .988-.175l1.034-.12q.397-.051.577-.162t.181-.36v-.033q0-.604-.342-.937-.337-.332-1.007-.332-.696 0-1.098.31-.397.304-.55.678l-1.297-.296a2.5 2.5 0 0 1 .674-1.043 2.7 2.7 0 0 1 1.03-.582 4 4 0 0 1 1.223-.184q.424 0 .9.101.48.098.896.36.42.264.688.753.267.485.267 1.26V30h-1.348v-.97h-.055a2 2 0 0 1-.402.527 2.1 2.1 0 0 1-.687.43q-.421.17-1.007.17m.3-1.108q.573 0 .979-.226a1.6 1.6 0 0 0 .623-.591 1.53 1.53 0 0 0 .217-.79v-.914q-.074.075-.286.139a5 5 0 0 1-.476.106l-.521.079-.425.055q-.401.05-.734.17-.328.12-.526.347-.195.222-.194.59 0 .514.378.777.379.258.965.258m5.038.951v-7.09h1.334v1.125h.074q.194-.572.683-.9.495-.332 1.117-.332a6 6 0 0 1 .587.032v1.32a3 3 0 0 0-.296-.05 3 3 0 0 0-.424-.033 1.8 1.8 0 0 0-.873.208 1.55 1.55 0 0 0-.822 1.39V30zm7.39.139a2.75 2.75 0 0 1-1.533-.44q-.67-.442-1.052-1.26-.38-.82-.379-1.97 0-1.15.383-1.967.388-.818 1.062-1.251.674-.434 1.528-.434.66 0 1.062.221.406.217.628.508.225.291.351.513h.083v-3.514h1.38V30h-1.348v-1.103h-.115q-.126.226-.361.517a2 2 0 0 1-.637.508q-.405.216-1.052.216m.304-1.178q.596 0 1.007-.314.415-.318.628-.881.217-.564.217-1.311 0-.74-.213-1.293a1.9 1.9 0 0 0-.623-.863q-.41-.31-1.016-.31-.622 0-1.038.323-.415.324-.628.882a3.6 3.6 0 0 0-.208 1.26q0 .71.213 1.28.211.567.627.9.42.327 1.034.327"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "76",
    height: "21",
    x: "95.5",
    y: "73.5",
    fill: "#353535",
    stroke: "#272727",
    rx: "2.5"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#fff",
    d: "M126.05 87v-6.546h2.621q.723 0 1.205.215.483.213.725.594.243.377.243.87 0 .383-.153.674-.153.288-.422.473a1.7 1.7 0 0 1-.607.259v.064q.373.015.7.21.328.195.534.547.204.349.204.831 0 .52-.259.93-.255.406-.757.642-.502.237-1.237.237zm1.384-1.131h1.128q.579 0 .844-.22a.74.74 0 0 0 .265-.595.87.87 0 0 0-.131-.48.9.9 0 0 0-.374-.326 1.3 1.3 0 0 0-.572-.118h-1.16zm0-2.675h1.026q.285 0 .505-.1a.85.85 0 0 0 .352-.287.75.75 0 0 0 .131-.444.72.72 0 0 0-.253-.573q-.249-.217-.709-.217h-1.052zm8.61-2.74h1.383v4.251q0 .716-.342 1.253a2.3 2.3 0 0 1-.949.838q-.61.297-1.422.297-.815 0-1.425-.297a2.3 2.3 0 0 1-.95-.838q-.338-.537-.338-1.253v-4.25h1.383v4.132q0 .374.163.665.167.29.467.457.3.165.7.166.403 0 .7-.166.3-.166.463-.457.167-.291.167-.665zm2.138 0h1.551l1.492 2.82h.064l1.493-2.82h1.55l-2.388 4.232V87h-1.374v-2.314z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#EBEBEB",
    d: "M95 56h77v3H95zM95 62h77v3H95z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
      id: "clip0_1651_1314",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fill: "#fff",
        d: "M23 37h49v37H23z"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
      id: "filter0_d_1651_1314",
      width: "185",
      height: "110",
      x: "0",
      y: "0",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology", {
        in: "SourceAlpha",
        operator: "dilate",
        radius: "5",
        result: "effect1_dropShadow_1651_1314"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset", {
        dy: "-1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
        in2: "hardAlpha",
        operator: "out"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        values: "0 0 0 0 0.760077 0 0 0 0 0.858475 0 0 0 0 0.932274 0 0 0 0.13 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_1651_1314"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_1651_1314",
        result: "shape"
      })]
    })]
  })]
}));

/***/ }),

/***/ "./src/components/icons/MembershipIcon.jsx":
/*!*************************************************!*\
  !*** ./src/components/icons/MembershipIcon.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "243",
  height: "141",
  fill: "none",
  viewBox: "0 0 243 141",
  style: {
    paddingTop: '3%'
  },
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    opacity: "0.54",
    className: "nfd-svg-rotate--5deg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
      filter: "url(#filter0_d_1651_1076)",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        width: "155",
        height: "118",
        x: "5",
        y: "1",
        fill: "#fff",
        rx: "5"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#D9D9D9",
      fillOpacity: "0.5",
      d: "M21 26h123v4H21zM21 15h123v4H21zM21 38h123v4H21zM21 50h123v4H21zM21 62h123v4H21z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "123",
      height: "25",
      x: "21",
      y: "79",
      fill: "#699CB5",
      rx: "5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#fff",
      d: "M39.577 89.819a.9.9 0 0 0-.365-.668q-.324-.237-.878-.238-.375 0-.635.107a.9.9 0 0 0-.398.288.7.7 0 0 0-.135.419.6.6 0 0 0 .082.34.85.85 0 0 0 .252.253q.16.103.37.18.209.075.447.129l.653.156q.476.106.874.284.398.177.689.437.291.258.45.61.164.353.168.807-.004.667-.341 1.157-.334.487-.966.757-.63.266-1.517.266-.88 0-1.534-.27a2.25 2.25 0 0 1-1.015-.799q-.362-.532-.38-1.317h1.488q.024.365.21.61.188.241.5.366.316.12.714.12.39 0 .678-.113a1.04 1.04 0 0 0 .45-.316.73.73 0 0 0 .16-.465q0-.244-.145-.412a1.1 1.1 0 0 0-.419-.284 4 4 0 0 0-.671-.213l-.792-.199q-.92-.224-1.452-.7-.533-.475-.53-1.282-.003-.66.352-1.154.36-.493.984-.77t1.42-.277q.81 0 1.413.277.608.276.945.77t.348 1.144zm4.145-2.092V95h-1.537v-7.273zm6.088 2.351a1.6 1.6 0 0 0-.21-.458q-.135-.203-.33-.34a1.4 1.4 0 0 0-.44-.218 1.9 1.9 0 0 0-.543-.074q-.558 0-.98.277-.42.277-.654.806-.234.525-.234 1.285t.23 1.293.654.813q.422.277.998.277.522 0 .891-.184.373-.189.568-.53.2-.34.2-.806l.312.047h-1.875v-1.158h3.043v.916q0 .96-.405 1.648a2.76 2.76 0 0 1-1.115 1.058q-.71.37-1.626.37-1.023 0-1.797-.452a3.13 3.13 0 0 1-1.208-1.289q-.43-.837-.43-1.988 0-.885.256-1.577.26-.696.725-1.179t1.083-.735a3.5 3.5 0 0 1 1.339-.252q.618 0 1.15.18.532.179.945.505.416.327.678.778.263.447.338.987zm8.868-2.35V95H57.35l-3.164-4.577h-.053V95h-1.538v-7.273h1.35l3.139 4.574h.063v-4.574zm5.763 0h1.537v4.722q0 .796-.38 1.392a2.54 2.54 0 0 1-1.054.93q-.68.33-1.58.331-.906 0-1.584-.33a2.54 2.54 0 0 1-1.055-.93q-.377-.597-.377-1.393v-4.723h1.538v4.592q0 .415.181.739.184.322.519.507.333.185.777.185.448 0 .778-.185.334-.184.515-.507.185-.323.185-.74zM67.243 95v-7.273h2.87q.826 0 1.41.316.582.314.887.87.31.555.31 1.279 0 .725-.313 1.278-.313.555-.906.863-.59.309-1.427.309h-1.83V91.41h1.581q.444 0 .732-.153.29-.156.433-.43.145-.276.145-.635 0-.362-.145-.632a.97.97 0 0 0-.433-.423q-.291-.153-.739-.153h-1.037V95zm8.513-6.005v-1.268h5.972v1.268h-2.226V95h-1.52v-6.005zm13.307 2.369q0 1.189-.45 2.024a3.13 3.13 0 0 1-1.222 1.275 3.45 3.45 0 0 1-1.733.436 3.44 3.44 0 0 1-1.74-.44 3.13 3.13 0 0 1-1.218-1.275q-.448-.835-.448-2.02 0-1.19.448-2.025a3.1 3.1 0 0 1 1.218-1.27 3.44 3.44 0 0 1 1.74-.441q.962 0 1.733.44.774.437 1.221 1.272.451.834.451 2.024m-1.559 0q0-.77-.23-1.3-.228-.529-.643-.803a1.73 1.73 0 0 0-.973-.273 1.73 1.73 0 0 0-.973.273q-.416.274-.647.803-.227.53-.227 1.3t.227 1.3q.231.529.647.802.415.273.973.273.557 0 .973-.273t.643-.803q.23-.529.23-1.3M92.517 95v-7.273h2.87q.822 0 1.405.295.586.291.892.827.309.532.309 1.254 0 .724-.313 1.246-.312.519-.905.796-.59.277-1.428.277h-1.921v-1.236h1.672q.441 0 .732-.12a.87.87 0 0 0 .433-.363q.146-.24.146-.6a1.2 1.2 0 0 0-.146-.61.9.9 0 0 0-.437-.377q-.291-.132-.735-.132h-1.036V95zm3.927-3.31L98.252 95h-1.697l-1.769-3.31zM99.08 95v-7.273h4.901v1.268h-3.363v1.733h3.111v1.268h-3.111v1.736h3.377V95zm7.377 0h-1.648l2.511-7.273h1.981L111.808 95h-1.648l-1.822-5.61h-.057zm-.103-2.859h3.892v1.2h-3.892zM115.261 95h-2.578v-7.273h2.599q1.098 0 1.89.437.79.433 1.218 1.246.429.814.429 1.947 0 1.136-.429 1.953a2.96 2.96 0 0 1-1.226 1.253q-.795.437-1.903.437m-1.04-1.317h.976q.682 0 1.147-.242.47-.244.703-.756.238-.515.238-1.329 0-.806-.238-1.317a1.54 1.54 0 0 0-.699-.753q-.466-.24-1.147-.241h-.98zM57 22h40v40H57z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#B6B6B6",
      fillRule: "evenodd",
      d: "M77.5 26.45a6.525 6.525 0 0 0-6.525 6.525v5.075h-.725a2.9 2.9 0 0 0-2.9 2.9v8.7a2.9 2.9 0 0 0 2.9 2.9h14.5a2.9 2.9 0 0 0 2.9-2.9v-8.7a2.9 2.9 0 0 0-2.9-2.9h-.725v-5.075A6.525 6.525 0 0 0 77.5 26.45m4.35 11.6v-5.075a4.35 4.35 0 0 0-8.7 0v5.075z",
      clipRule: "evenodd"
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    filter: "url(#filter1_d_1651_1076)",
    className: "nfd-svg-rotate-5deg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "134",
      height: "106",
      x: "104",
      y: "26",
      fill: "#fff",
      rx: "5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#7F7F7F",
      d: "M131.279 110.417a.74.74 0 0 0-.284-.547q-.25-.198-.713-.198-.307 0-.512.08a.66.66 0 0 0-.306.221.53.53 0 0 0-.106.316.47.47 0 0 0 .058.259.6.6 0 0 0 .191.198q.129.082.307.147.18.064.403.112l.562.128q.486.105.857.281.374.176.626.419.256.243.387.559t.134.71q-.003.62-.313 1.064t-.892.681q-.578.236-1.396.236-.822 0-1.432-.246a2 2 0 0 1-.949-.748q-.339-.501-.349-1.269h1.515a1 1 0 0 0 .17.528q.15.21.412.319.265.11.614.109.32 0 .543-.086a.8.8 0 0 0 .348-.24.57.57 0 0 0 .125-.352.48.48 0 0 0-.115-.316.9.9 0 0 0-.345-.23 3.6 3.6 0 0 0-.588-.182l-.684-.16q-.85-.195-1.339-.63-.489-.438-.486-1.182-.004-.608.326-1.065.329-.457.911-.712.581-.256 1.326-.256.76 0 1.32.259.563.255.872.719t.317 1.074zm3.985-1.962V115h-1.582v-6.545zm5.289 2.138a1.1 1.1 0 0 0-.16-.355 1 1 0 0 0-.259-.265 1.1 1.1 0 0 0-.351-.163 1.5 1.5 0 0 0-.435-.058q-.476 0-.824.23a1.48 1.48 0 0 0-.534.671q-.189.438-.189 1.065 0 .628.182 1.074.183.444.528.677t.837.233q.435 0 .735-.14.304-.144.46-.406t.157-.617l.294.035h-1.592v-1.154h2.823v.867q0 .879-.374 1.505a2.5 2.5 0 0 1-1.023.962q-.649.335-1.493.335-.936 0-1.646-.405a2.8 2.8 0 0 1-1.105-1.157q-.397-.755-.397-1.79 0-.805.24-1.429.24-.626.668-1.061.432-.435.997-.658a3.3 3.3 0 0 1 1.224-.224q.569 0 1.058.163.492.163.869.46.381.297.617.707.237.409.294.898zm8.175-2.138V115h-1.343l-2.604-3.778h-.042V115h-1.582v-6.545h1.362l2.576 3.771h.054v-3.771zm4.954 0h1.579v4.221q0 .732-.348 1.276-.348.54-.972.837-.623.294-1.448.294-.834 0-1.457-.294a2.3 2.3 0 0 1-.968-.837q-.346-.544-.346-1.276v-4.221h1.582v4.084q0 .339.147.604.151.265.419.416.269.15.623.15.356 0 .62-.15a1.1 1.1 0 0 0 .419-.416q.15-.265.15-.604zm2.571 6.545v-6.545h2.704q.735 0 1.268.287.537.285.828.796.291.508.291 1.183 0 .676-.297 1.185a2 2 0 0 1-.841.783q-.547.279-1.297.278h-1.669v-1.246h1.375q.357 0 .597-.125a.86.86 0 0 0 .368-.348q.124-.227.124-.527a1.05 1.05 0 0 0-.124-.525.84.84 0 0 0-.368-.345 1.3 1.3 0 0 0-.597-.121h-.78V115zm7.59-5.261v-1.284h5.533v1.284h-1.985V115h-1.56v-5.261zm12.184 1.988q0 1.08-.415 1.832-.415.75-1.125 1.141-.706.39-1.585.389a3.2 3.2 0 0 1-1.589-.393 2.86 2.86 0 0 1-1.122-1.141q-.412-.75-.412-1.828 0-1.08.412-1.831a2.84 2.84 0 0 1 1.122-1.141 3.23 3.23 0 0 1 1.589-.39q.879 0 1.585.39.71.39 1.125 1.141t.415 1.831m-1.617 0q0-.639-.182-1.08a1.4 1.4 0 0 0-.518-.668 1.4 1.4 0 0 0-.808-.227 1.4 1.4 0 0 0-.809.227 1.43 1.43 0 0 0-.521.668q-.179.441-.179 1.08t.179 1.081q.182.44.521.667t.809.227q.472 0 .808-.227a1.4 1.4 0 0 0 .518-.667q.182-.442.182-1.081m6.044 3.273-1.905-6.545h1.748l.988 4.289h.054l1.128-4.289h1.426l1.128 4.298h.054l.991-4.298h1.745L185.909 115h-1.524l-1.179-3.969h-.052L181.975 115zm8.715 0h-1.701l2.209-6.545h2.106l2.208 6.545h-1.7l-1.537-4.896h-.051zm-.227-2.576h3.554v1.202h-3.554zm4.723-2.685v-1.284h5.532v1.284h-1.985V115h-1.56v-5.261zm11.947 1.087h-1.598a1.4 1.4 0 0 0-.131-.444 1.08 1.08 0 0 0-.649-.553 1.5 1.5 0 0 0-.489-.077q-.476 0-.821.233a1.5 1.5 0 0 0-.527.675q-.183.441-.183 1.067 0 .652.186 1.093.188.438.527.662.342.22.809.22.261 0 .476-.067a1.1 1.1 0 0 0 .38-.195 1.1 1.1 0 0 0 .272-.316q.108-.189.15-.425l1.598.009q-.042.435-.252.857a2.8 2.8 0 0 1-.572.77q-.365.346-.889.55a3.3 3.3 0 0 1-1.195.204q-.889 0-1.592-.389a2.8 2.8 0 0 1-1.106-1.145q-.406-.75-.406-1.828 0-1.08.413-1.831a2.8 2.8 0 0 1 1.115-1.141q.703-.39 1.576-.39.594 0 1.099.166.505.163.889.48.383.312.623.77.24.457.297 1.045m.905 4.174v-6.545h1.582v2.627h2.58v-2.627h1.578V115h-1.578v-2.63h-2.58V115z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "98",
      height: "59",
      x: "121",
      y: "38",
      fill: "#EBEBEB",
      rx: "5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#A7A7A7",
      fillRule: "evenodd",
      d: "M155.916 67.318c0-6.502 5.271-11.773 11.773-11.773s11.773 5.27 11.773 11.773c0 6.502-5.271 11.773-11.773 11.773s-11.773-5.27-11.773-11.773m16.935-1.187a1.358 1.358 0 0 1 0 2.375l-6.765 3.758a1.358 1.358 0 0 1-2.018-1.187V63.56a1.358 1.358 0 0 1 2.018-1.188z",
      clipRule: "evenodd"
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
      id: "filter0_d_1651_1076",
      width: "165",
      height: "128",
      x: "0",
      y: "0",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology", {
        in: "SourceAlpha",
        operator: "dilate",
        radius: "1",
        result: "effect1_dropShadow_1651_1076"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset", {
        dy: "4"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
        stdDeviation: "2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
        in2: "hardAlpha",
        operator: "out"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        values: "0 0 0 0 0.760077 0 0 0 0 0.858475 0 0 0 0 0.932274 0 0 0 0.37 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_1651_1076"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_1651_1076",
        result: "shape"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
      id: "filter1_d_1651_1076",
      width: "144",
      height: "116",
      x: "99",
      y: "25",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology", {
        in: "SourceAlpha",
        operator: "dilate",
        radius: "1",
        result: "effect1_dropShadow_1651_1076"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset", {
        dy: "4"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
        stdDeviation: "2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
        in2: "hardAlpha",
        operator: "out"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        values: "0 0 0 0 0.760077 0 0 0 0 0.858475 0 0 0 0 0.932274 0 0 0 0.37 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_1651_1076"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_1651_1076",
        result: "shape"
      })]
    })]
  })]
}));

/***/ }),

/***/ "./src/components/icons/OneClickCheckoutIcon.jsx":
/*!*******************************************************!*\
  !*** ./src/components/icons/OneClickCheckoutIcon.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "215",
  height: "112",
  fill: "none",
  viewBox: "0 0 215 112",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    filter: "url(#filter0_d_1651_1336)",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#fff",
      d: "M210 96.465c0 3.321-2.358 6.535-5.885 6.535H11.385C7.858 103 5 99.786 5 96.465V7.014C5 3.693 7.858 1 11.385 1h192.729C207.642 1 210 3.693 210 7.014z"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#EBEBEB",
    d: "M19 20.571a5 5 0 0 1 5-5h56a5 5 0 0 1 5 5v62.857a5 5 0 0 1-5 5H24a5 5 0 0 1-5-5z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#DADADA",
    d: "M95 17.653h96v3.122H95zm0 7.286h96v3.122H95zm0 7.285h65v3.123H95z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#666",
    d: "M97.875 53.544V44.93h.551v8.614zm1.463-5.77a.85.85 0 0 0-.346-.633q-.307-.225-.832-.225-.356 0-.602.1a.85.85 0 0 0-.377.273.66.66 0 0 0-.127.397.57.57 0 0 0 .077.323.8.8 0 0 0 .239.239q.15.097.35.172.198.07.424.12l.619.149q.45.1.828.269.376.168.652.414t.428.578q.154.333.158.764-.004.633-.323 1.097-.317.46-.915.717-.596.252-1.437.252-.835 0-1.454-.255a2.13 2.13 0 0 1-.962-.758q-.344-.504-.36-1.248h1.41q.023.346.198.579.179.229.475.346.3.115.676.115.37 0 .643-.108a1 1 0 0 0 .427-.3.7.7 0 0 0 .151-.44.57.57 0 0 0-.138-.39 1.05 1.05 0 0 0-.397-.27 4 4 0 0 0-.636-.202l-.75-.188q-.871-.212-1.376-.663-.505-.45-.502-1.214a1.8 1.8 0 0 1 .334-1.094q.34-.468.932-.73a3.3 3.3 0 0 1 1.346-.263q.766 0 1.339.263.575.262.895.73t.329 1.084zm7.621-1.982v6.89h-1.457v-5.507h-.04l-1.578.989v-1.292l1.706-1.08zm4.155 6.985q-.714 0-1.272-.263a2.2 2.2 0 0 1-.882-.723 1.86 1.86 0 0 1-.339-1.057h1.413a.86.86 0 0 0 .336.65q.314.249.744.249.343 0 .606-.152.266-.154.413-.427.152-.276.152-.633 0-.363-.155-.639a1.1 1.1 0 0 0-.421-.43 1.23 1.23 0 0 0-.615-.159q-.303 0-.589.125a1.06 1.06 0 0 0-.441.34l-1.295-.232.326-3.634h4.213v1.19h-3.012l-.178 1.727h.04q.181-.256.549-.424.366-.168.821-.168.623 0 1.11.292.487.294.771.805.282.508.279 1.17.003.698-.323 1.239a2.3 2.3 0 0 1-.905.848q-.58.306-1.346.306m4.939-1.037-.037.37a5 5 0 0 1-.168.886 9 9 0 0 1-.256.804q-.13.36-.212.565h-.928l.138-.555q.087-.353.165-.794.077-.441.097-.899l.017-.377zm3.661-6.043q.532 0 1.023.179.495.178.882.568.39.39.615 1.037.23.642.232 1.578 0 .878-.198 1.568-.195.686-.562 1.167-.366.482-.885.734a2.6 2.6 0 0 1-1.157.249q-.69 0-1.218-.266a2.3 2.3 0 0 1-.852-.73 2.3 2.3 0 0 1-.387-1.043h1.437a.98.98 0 0 0 .353.585q.27.206.667.206.672 0 1.023-.586.35-.588.353-1.612h-.047a1.7 1.7 0 0 1-.417.522 2 2 0 0 1-.603.333 2.2 2.2 0 0 1-.716.118q-.61 0-1.087-.286a2.05 2.05 0 0 1-.754-.788 2.33 2.33 0 0 1-.276-1.144 2.34 2.34 0 0 1 .32-1.234 2.25 2.25 0 0 1 .902-.848q.582-.31 1.352-.307m.01 1.144a1.14 1.14 0 0 0-1.023.596q-.151.273-.148.609 0 .34.148.612.151.27.411.431.262.158.599.158a1.15 1.15 0 0 0 .841-.353 1.22 1.22 0 0 0 .343-.851 1.24 1.24 0 0 0-.155-.6 1.2 1.2 0 0 0-.417-.437 1.1 1.1 0 0 0-.599-.165m6.245-1.144q.532 0 1.023.179.495.178.882.568.39.39.615 1.037.229.642.233 1.578 0 .878-.199 1.568-.195.686-.562 1.167-.366.482-.885.734a2.6 2.6 0 0 1-1.157.249q-.69 0-1.218-.266a2.3 2.3 0 0 1-.852-.73 2.3 2.3 0 0 1-.387-1.043h1.437a.98.98 0 0 0 .353.585q.27.206.667.206.672 0 1.023-.586.35-.588.353-1.612h-.047a1.65 1.65 0 0 1-.417.522 2 2 0 0 1-.603.333 2.2 2.2 0 0 1-.716.118q-.61 0-1.087-.286a2.05 2.05 0 0 1-.754-.788 2.33 2.33 0 0 1-.276-1.144 2.34 2.34 0 0 1 .32-1.234 2.25 2.25 0 0 1 .902-.848q.582-.31 1.352-.307m.01 1.144a1.14 1.14 0 0 0-1.023.596q-.151.273-.148.609 0 .34.148.612.151.27.411.431.262.158.599.158a1.16 1.16 0 0 0 1.093-.74q.091-.218.091-.464a1.24 1.24 0 0 0-.155-.6 1.2 1.2 0 0 0-.417-.437 1.1 1.1 0 0 0-.599-.165"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#61A1B1",
    d: "M196 83.224c0 .828-.316 1.623-.879 2.208a2.94 2.94 0 0 1-2.121.915H98a2.94 2.94 0 0 1-2.121-.915A3.2 3.2 0 0 1 95 83.224v-13.53c0-.828.316-1.623.879-2.208A2.94 2.94 0 0 1 98 66.57h95a2.94 2.94 0 0 1 2.121.915c.563.585.879 1.38.879 2.208z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#fff",
    d: "M114.123 73.131v5.818h-1.23V74.3h-.034l-1.333.835v-1.091l1.441-.912zm4.113 2.429v.96h-2.654v-.96zm6.187-.392h-1.244a1.2 1.2 0 0 0-.139-.429 1.1 1.1 0 0 0-.27-.324 1.2 1.2 0 0 0-.381-.204 1.5 1.5 0 0 0-.463-.071q-.451 0-.787.224a1.44 1.44 0 0 0-.52.648q-.184.423-.184 1.028 0 .622.184 1.046.188.423.523.639a1.4 1.4 0 0 0 .776.216q.246 0 .457-.066.213-.065.378-.19.165-.127.273-.31.11-.182.153-.414l1.244.005a2.2 2.2 0 0 1-.241.773 2.34 2.34 0 0 1-1.281 1.122q-.444.168-1.003.168-.779 0-1.392-.352a2.5 2.5 0 0 1-.966-1.02q-.353-.667-.353-1.617 0-.951.358-1.62.359-.666.972-1.016a2.7 2.7 0 0 1 1.381-.352q.505 0 .937.141.435.143.77.415.335.27.546.662t.272.898m2.07-2.037v5.818h-1.21v-5.818zm.969 5.818v-4.363h1.211v4.363zm.608-4.926a.66.66 0 0 1-.463-.179.58.58 0 0 1-.19-.435q0-.25.19-.428a.65.65 0 0 1 .463-.182q.27 0 .461.181.192.18.193.43a.58.58 0 0 1-.193.434.65.65 0 0 1-.461.18m3.544 5.011q-.67 0-1.154-.284a1.9 1.9 0 0 1-.738-.795 2.6 2.6 0 0 1-.256-1.17q0-.671.258-1.177.262-.508.742-.792.48-.288 1.142-.287.571 0 1 .207t.679.582.275.881h-1.142a.88.88 0 0 0-.255-.525.73.73 0 0 0-.537-.202.8.8 0 0 0-.492.153 1 1 0 0 0-.324.44 1.9 1.9 0 0 0-.116.702q0 .419.114.71a1 1 0 0 0 .326.447q.21.153.492.153a.8.8 0 0 0 .372-.085.7.7 0 0 0 .276-.247.95.95 0 0 0 .144-.395h1.142a1.8 1.8 0 0 1-.272.88 1.65 1.65 0 0 1-.668.591q-.426.213-1.008.213m3.82-1.34.003-1.452h.176l1.398-1.656h1.389l-1.878 2.193h-.287zm-1.097 1.255v-5.818h1.211v5.818zm2.728 0-1.284-1.9.806-.856 1.895 2.756zm8.936-3.781h-1.244a1.2 1.2 0 0 0-.139-.429 1.1 1.1 0 0 0-.27-.324 1.2 1.2 0 0 0-.381-.204 1.5 1.5 0 0 0-.463-.071q-.451 0-.787.224a1.44 1.44 0 0 0-.52.648q-.184.423-.184 1.028 0 .622.184 1.046.188.423.523.639t.776.216q.247 0 .457-.066.213-.065.378-.19.165-.127.273-.31.111-.182.153-.414l1.244.005a2.322 2.322 0 0 1-.755 1.435q-.321.29-.767.46-.444.168-1.003.168-.779 0-1.392-.352a2.5 2.5 0 0 1-.966-1.02q-.352-.667-.352-1.617 0-.951.358-1.62.357-.666.971-1.016a2.7 2.7 0 0 1 1.381-.352q.505 0 .937.141.435.143.77.415.336.27.546.662.213.392.272.898m2.07 1.258v2.523h-1.21v-5.818h1.176v2.225h.051q.148-.387.477-.606.33-.22.827-.221.454 0 .793.199.34.195.528.565.19.366.188.878v2.778h-1.211v-2.562q.003-.404-.204-.628-.205-.225-.574-.225a.9.9 0 0 0-.438.106.74.74 0 0 0-.295.306 1.04 1.04 0 0 0-.108.48m5.771 2.608q-.674 0-1.16-.272a1.87 1.87 0 0 1-.744-.779q-.261-.506-.261-1.196 0-.674.261-1.181.262-.51.736-.793.477-.285 1.119-.284.432 0 .804.139a1.79 1.79 0 0 1 1.091 1.105q.156.415.156.972v.332h-3.684v-.75h2.545a.94.94 0 0 0-.113-.463.8.8 0 0 0-.316-.315.9.9 0 0 0-.463-.117.93.93 0 0 0-.488.128.9.9 0 0 0-.33.338.95.95 0 0 0-.122.469v.713q0 .323.119.56a.88.88 0 0 0 .344.363q.222.128.525.128.202 0 .37-.057a.8.8 0 0 0 .287-.17.75.75 0 0 0 .182-.279l1.119.074a1.5 1.5 0 0 1-.35.705 1.75 1.75 0 0 1-.676.466q-.412.165-.951.164m4.764 0q-.67 0-1.154-.284a1.9 1.9 0 0 1-.738-.795 2.6 2.6 0 0 1-.256-1.17q0-.671.259-1.177.261-.508.741-.792.48-.288 1.142-.287.571 0 1 .207t.679.582.276.881h-1.142a.9.9 0 0 0-.256-.525.73.73 0 0 0-.537-.202.8.8 0 0 0-.491.153.97.97 0 0 0-.324.44 1.9 1.9 0 0 0-.117.702q0 .419.114.71a.98.98 0 0 0 .327.447.8.8 0 0 0 .491.153.8.8 0 0 0 .372-.085.7.7 0 0 0 .276-.247.95.95 0 0 0 .145-.395h1.142q-.029.5-.273.88a1.65 1.65 0 0 1-.668.591q-.426.213-1.008.213m3.82-1.34.003-1.452h.176l1.398-1.656h1.389l-1.878 2.193h-.287zm-1.096 1.255v-5.818h1.21v5.818zm2.727 0-1.284-1.9.807-.856 1.894 2.756zm3.721.085q-.663 0-1.145-.28a1.93 1.93 0 0 1-.742-.79 2.55 2.55 0 0 1-.261-1.18q0-.675.261-1.181.262-.51.742-.79.482-.285 1.145-.284.662 0 1.142.284.483.28.744.79.261.505.261 1.181 0 .67-.261 1.18-.261.505-.744.79-.48.28-1.142.28m.005-.937a.75.75 0 0 0 .503-.17 1.05 1.05 0 0 0 .304-.472q.105-.298.105-.68 0-.38-.105-.678a1.05 1.05 0 0 0-.304-.472.74.74 0 0 0-.503-.173.77.77 0 0 0-.511.173q-.204.174-.31.472a2.1 2.1 0 0 0-.102.679q0 .38.102.679.106.298.31.472.207.17.511.17m5.728-1.006v-2.505h1.21v4.363h-1.162v-.792h-.046a1.3 1.3 0 0 1-.491.616q-.341.233-.832.233a1.47 1.47 0 0 1-.77-.199 1.37 1.37 0 0 1-.52-.565 1.96 1.96 0 0 1-.188-.878v-2.778h1.211v2.562q.002.387.207.61.204.225.548.225a.9.9 0 0 0 .409-.1.8.8 0 0 0 .307-.3.9.9 0 0 0 .117-.492m4.499-2.505v.909h-2.628v-.91zm-2.031-1.046h1.21v4.068q0 .168.051.262a.28.28 0 0 0 .142.127.6.6 0 0 0 .216.037q.086 0 .17-.014l.131-.025.19.9q-.09.03-.255.066a2 2 0 0 1-.401.048 1.8 1.8 0 0 1-.767-.117 1.07 1.07 0 0 1-.508-.414q-.183-.282-.179-.71z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    stroke: "#ACACAC",
    strokeMiterlimit: "10",
    strokeWidth: "1.5",
    d: "M69.039 42.567a13.2 13.2 0 0 0-8.1-5.83L57.864 36a5.94 5.94 0 0 1-5.554 3.85c-2.54 0-4.703-1.599-5.555-3.85l-3.075.738a13.2 13.2 0 0 0-8.1 5.83L33 46.687l6.586 4.556 2.427-4.037h.106V65.12h20.386V47.209h.105l2.427 4.037 6.586-4.556-2.582-4.12z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
      id: "filter0_d_1651_1336",
      width: "215",
      height: "112",
      x: "0",
      y: "0",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology", {
        in: "SourceAlpha",
        operator: "dilate",
        radius: "1",
        result: "effect1_dropShadow_1651_1336"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset", {
        dy: "4"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
        stdDeviation: "2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
        in2: "hardAlpha",
        operator: "out"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        values: "0 0 0 0 0.760077 0 0 0 0 0.858475 0 0 0 0 0.932274 0 0 0 0.37 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_1651_1336"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_1651_1336",
        result: "shape"
      })]
    })
  })]
}));

/***/ }),

/***/ "./src/components/icons/ProductAddonsIcon.jsx":
/*!****************************************************!*\
  !*** ./src/components/icons/ProductAddonsIcon.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "228",
  height: "120",
  fill: "none",
  viewBox: "0 0 228 120",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    filter: "url(#filter0_d_1651_1345)",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#fff",
      d: "M223 105.728c0 2.679-2.358 5.272-5.885 5.272H11.385C7.858 111 5 108.407 5 105.728V5.852C5 3.172 7.858 1 11.385 1h205.729C220.642 1 223 3.172 223 5.852z"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#EBEBEB",
    d: "M103.011 14.166h39.355v4.255h-39.355z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#B3B3B3",
    d: "M112.583 36.37h28.187v2.127h-28.187zm49.992 0h28.187v2.127h-28.187z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    stroke: "#61A1B1",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    d: "M147.5 46.437c0 .587-.476 1.063-1.063 1.063h-41.874a1.06 1.06 0 0 1-1.063-1.063V27.563c0-.587.476-1.063 1.063-1.063h41.873c.587 0 1.063.477 1.063 1.063v18.874z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    stroke: "#E6E6E6",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    d: "M198.5 46.437c0 .587-.476 1.063-1.063 1.063h-41.873a1.06 1.06 0 0 1-1.063-1.063V27.563c0-.587.476-1.063 1.063-1.063h41.873c.587 0 1.063.477 1.063 1.063z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#61A1B1",
    d: "M143.828 33.178a5.85 5.85 0 1 0 0-11.7 5.85 5.85 0 0 0 0 11.7"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    stroke: "#fff",
    strokeMiterlimit: "10",
    d: "m141.169 26.717 2.128 1.808 3.085-3.297"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#EBEBEB",
    d: "M103.011 61.221h39.355v4.255h-39.355z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#B3B3B3",
    d: "M116.838 75.979h28.187v2.127h-28.187z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#fff",
    stroke: "#61A1B1",
    strokeMiterlimit: "10",
    d: "M107.177 81.433a4.344 4.344 0 1 0 0-8.688 4.344 4.344 0 0 0 0 8.688Z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#B3B3B3",
    d: "M116.838 89.807h28.187v2.127h-28.187z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#fff",
    stroke: "#E6E6E6",
    strokeMiterlimit: "10",
    d: "M107.177 95.26a4.344 4.344 0 1 0 0-8.688 4.344 4.344 0 0 0 0 8.688Z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#61A1B1",
    d: "M107.177 79.837a2.748 2.748 0 1 0 0-5.496 2.748 2.748 0 0 0 0 5.496"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#EBEBEB",
    d: "M19 20a5 5 0 0 1 5-5h60a5 5 0 0 1 5 5v71a5 5 0 0 1-5 5H24a5 5 0 0 1-5-5z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    stroke: "#B3B3B3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "10",
    strokeWidth: "1.5",
    d: "M35.33 61.798V41.732a1.74 1.74 0 0 1 .505-1.225A1.72 1.72 0 0 1 37.05 40H70.95c.95 0 1.721.775 1.721 1.732v20.066m2.313 2.798-.616 1.938c-.135.426-.4.797-.76 1.06-.357.264-.79.406-1.233.406H35.626c-.444 0-.876-.142-1.234-.406a2.1 2.1 0 0 1-.76-1.06l-.615-1.938a.903.903 0 0 1 .881-1.082h15.255c.497 0 .899.405.899.907a.9.9 0 0 0 .9.903h6.096a.9.9 0 0 0 .898-.903c0-.502.403-.907.9-.907H74.1c.567 0 .993.522.883 1.082"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
      id: "filter0_d_1651_1345",
      width: "228",
      height: "120",
      x: "0",
      y: "0",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology", {
        in: "SourceAlpha",
        operator: "dilate",
        radius: "1",
        result: "effect1_dropShadow_1651_1345"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset", {
        dy: "4"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
        stdDeviation: "2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
        in2: "hardAlpha",
        operator: "out"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        values: "0 0 0 0 0.760077 0 0 0 0 0.858475 0 0 0 0 0.932274 0 0 0 0.37 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_1651_1345"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_1651_1345",
        result: "shape"
      })]
    })
  })]
}));

/***/ }),

/***/ "./src/components/icons/SenseiIcon.jsx":
/*!*********************************************!*\
  !*** ./src/components/icons/SenseiIcon.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "246",
  height: "127",
  fill: "none",
  viewBox: "0 0 246 127",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    opacity: "0.5",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
      filter: "url(#filter0_d_1651_1185)",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        width: "196.982",
        height: "75.421",
        x: "5",
        y: "6",
        fill: "#fff",
        rx: "5"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#B5B5B5",
      d: "M69.347 22.298v8.048h-1.702v-6.433h-.047l-1.843 1.155V23.56l1.993-1.261zM61.925 22.298v8.048h-1.47l-3.5-5.065h-.06v5.065h-1.701v-8.048h1.493l3.474 5.062h.07v-5.062zM53.933 26.322q0 1.317-.499 2.24a3.46 3.46 0 0 1-1.352 1.411q-.852.483-1.918.483-1.073 0-1.925-.487a3.47 3.47 0 0 1-1.348-1.41q-.495-.924-.495-2.237 0-1.316.495-2.24t1.348-1.407q.852-.487 1.925-.487 1.065 0 1.918.487a3.43 3.43 0 0 1 1.352 1.407q.5.924.5 2.24m-1.725 0q0-.853-.255-1.438-.252-.586-.712-.888a1.9 1.9 0 0 0-1.077-.303q-.616 0-1.076.303-.46.302-.715.888-.252.586-.252 1.438 0 .853.252 1.439.255.585.715.888.46.302 1.076.302t1.077-.302.712-.889q.255-.586.255-1.438M43.652 24.613a1 1 0 0 0-.405-.74q-.358-.262-.97-.262-.418 0-.704.117a1 1 0 0 0-.44.319q-.15.204-.15.463a.66.66 0 0 0 .09.378q.103.16.28.279.177.114.408.2.232.082.496.142l.723.173q.526.117.966.314t.763.483q.322.288.499.676.18.39.185.892-.004.74-.378 1.281-.369.539-1.069.838-.695.294-1.678.294-.975 0-1.697-.298-.72-.3-1.124-.885-.402-.59-.42-1.458h1.646q.027.406.232.676.208.267.554.405.35.135.79.134.432 0 .75-.126.322-.125.5-.35a.8.8 0 0 0 .176-.515.67.67 0 0 0-.16-.455 1.2 1.2 0 0 0-.465-.315 5 5 0 0 0-.742-.236l-.877-.22q-1.017-.247-1.607-.774-.59-.526-.585-1.418a2.1 2.1 0 0 1 .389-1.278 2.6 2.6 0 0 1 1.088-.853q.691-.306 1.572-.306.896 0 1.564.306.672.308 1.046.853.373.546.385 1.266zM36.4 24.613a1 1 0 0 0-.405-.74q-.357-.262-.97-.262-.416 0-.704.117a1 1 0 0 0-.44.319q-.15.204-.15.463a.66.66 0 0 0 .091.378q.102.16.28.279.175.114.408.2.232.082.495.142l.723.173a5 5 0 0 1 .967.314q.44.197.762.483.323.288.5.676.18.39.184.892-.003.74-.377 1.281-.37.539-1.07.838-.694.294-1.677.294-.975 0-1.698-.298-.72-.3-1.124-.885-.4-.59-.42-1.458h1.646q.028.406.232.676.21.267.554.405.35.135.79.134.433 0 .75-.126.324-.125.5-.35a.8.8 0 0 0 .177-.515.67.67 0 0 0-.161-.455 1.2 1.2 0 0 0-.464-.315 5 5 0 0 0-.743-.236l-.876-.22q-1.019-.247-1.608-.774-.59-.526-.585-1.418a2.1 2.1 0 0 1 .389-1.278 2.6 2.6 0 0 1 1.089-.853q.691-.306 1.571-.306.897 0 1.565.306.672.308 1.045.853.373.546.385 1.266zM25.258 30.346v-8.048h5.423V23.7H26.96v1.918h3.442v1.402H26.96v1.922h3.737v1.403zM18.98 30.346v-8.048h1.7v6.645h3.451v1.403z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#EBEBEB",
      d: "M18.31 37.056h69.21v1.775H18.31zM18.31 42.379h69.21v1.775H18.31zM18.31 47.704h69.21v1.775H18.31zM18.31 53.027h69.21v1.775H18.31zM18.31 58.351h69.21v1.775H18.31z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "85.181",
      height: "54.126",
      x: "103",
      y: "16",
      fill: "#EBEBEB",
      rx: "5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "silver",
      fillRule: "evenodd",
      d: "M134.547 42.269c0-6.31 5.115-11.424 11.425-11.424 6.309 0 11.424 5.115 11.424 11.424 0 6.31-5.115 11.424-11.424 11.424-6.31 0-11.425-5.115-11.425-11.424m16.432-1.152a1.318 1.318 0 0 1 0 2.304l-6.565 3.647a1.318 1.318 0 0 1-1.958-1.152v-7.294c0-1.005 1.08-1.64 1.958-1.153z",
      clipRule: "evenodd"
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    filter: "url(#filter1_d_1651_1185)",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "216",
      height: "86",
      x: "25",
      y: "37",
      fill: "#fff",
      rx: "5"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#B5B5B5",
    d: "M90.554 63.257q-.834 0-1.486-.307a2.6 2.6 0 0 1-1.03-.845 2.17 2.17 0 0 1-.396-1.234h1.65q.028.468.393.758.365.291.869.291.4 0 .707-.177.31-.18.483-.499a1.5 1.5 0 0 0 .177-.738q0-.424-.18-.747a1.3 1.3 0 0 0-.492-.503q-.315-.18-.719-.185-.354 0-.688.146-.33.145-.514.397l-1.514-.272.382-4.244h4.92v1.391h-3.517l-.209 2.016h.047q.213-.298.641-.495.428-.196.959-.196.727 0 1.297.342.57.34.9.939.33.593.326 1.367a2.7 2.7 0 0 1-.377 1.447 2.66 2.66 0 0 1-1.058.99q-.675.357-1.571.358M83.694 55.098v8.049h-1.47l-3.501-5.066h-.06v5.066h-1.7v-8.049h1.493l3.474 5.062H82v-5.062zM75.702 59.123q0 1.316-.5 2.24a3.46 3.46 0 0 1-1.351 1.41q-.853.483-1.918.484-1.073 0-1.926-.488a3.47 3.47 0 0 1-1.348-1.41q-.495-.924-.495-2.236 0-1.317.495-2.24.496-.924 1.348-1.407.853-.488 1.926-.488 1.065 0 1.918.488a3.43 3.43 0 0 1 1.352 1.407q.498.923.499 2.24m-1.725 0q0-.853-.256-1.439-.252-.585-.711-.888a1.9 1.9 0 0 0-1.077-.303q-.616 0-1.077.303t-.715.888q-.252.585-.252 1.439 0 .852.252 1.438.256.585.715.888.46.303 1.077.303t1.077-.303.711-.888q.255-.585.255-1.438M65.42 57.413a1 1 0 0 0-.404-.739q-.358-.263-.971-.263-.416 0-.704.118a1 1 0 0 0-.44.318q-.15.203-.15.464a.66.66 0 0 0 .091.377q.102.16.28.28.175.113.408.2.233.082.495.141l.723.173a5 5 0 0 1 .967.314q.44.196.762.484.323.285.5.676.18.388.184.892-.003.739-.377 1.28-.37.54-1.069.838-.696.294-1.678.295-.975 0-1.698-.3-.72-.297-1.124-.883-.4-.59-.42-1.458h1.646q.028.405.232.676.21.267.554.404a2.2 2.2 0 0 0 .79.134q.433 0 .75-.126.323-.126.5-.35a.8.8 0 0 0 .177-.514.67.67 0 0 0-.161-.456 1.2 1.2 0 0 0-.464-.314 5 5 0 0 0-.743-.236l-.876-.22q-1.018-.248-1.607-.775-.59-.526-.586-1.418a2.1 2.1 0 0 1 .39-1.277 2.6 2.6 0 0 1 1.088-.853q.69-.307 1.572-.307.895 0 1.564.307.672.306 1.045.853t.385 1.265zM58.169 57.413a1 1 0 0 0-.405-.739q-.358-.263-.97-.263-.417 0-.704.118a1 1 0 0 0-.44.318q-.15.203-.15.464a.66.66 0 0 0 .09.377q.103.16.28.28.177.113.408.2.232.082.496.141l.723.173q.526.117.966.314.44.196.763.484.322.285.499.676.18.388.185.892-.004.739-.378 1.28-.369.54-1.069.838-.695.294-1.678.295-.975 0-1.697-.3-.72-.297-1.124-.883-.401-.59-.42-1.458h1.646q.028.405.232.676.208.267.554.404a2.2 2.2 0 0 0 .79.134q.432 0 .75-.126.323-.126.5-.35a.8.8 0 0 0 .176-.514.67.67 0 0 0-.16-.456 1.2 1.2 0 0 0-.465-.314 5 5 0 0 0-.742-.236l-.877-.22q-1.017-.248-1.607-.775-.59-.526-.586-1.418a2.1 2.1 0 0 1 .39-1.277 2.6 2.6 0 0 1 1.088-.853q.691-.307 1.572-.307.896 0 1.564.307.672.306 1.045.853.374.546.386 1.265zM47.027 63.147v-8.049h5.423v1.403h-3.722v1.918h3.443v1.403h-3.443v1.921h3.737v1.404zM40.748 63.147v-8.049h1.701v6.645h3.45v1.404z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#EBEBEB",
    d: "M40.178 72.418h78.93v2.024h-78.93zM40.178 78.489h78.93v2.024h-78.93zM40.178 84.561h78.93v2.024h-78.93zM40.178 90.632h78.93v2.024h-78.93zM40.178 96.704h78.93v2.024h-78.93z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "97.145",
    height: "61.728",
    x: "130",
    y: "49",
    fill: "#EBEBEB",
    rx: "5"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#6A85CE",
    fillRule: "evenodd",
    d: "M167.533 80.338c0-7.195 5.833-13.028 13.029-13.028s13.029 5.833 13.029 13.028-5.834 13.029-13.029 13.029-13.029-5.833-13.029-13.029m18.741-1.314a1.503 1.503 0 0 1 0 2.628l-7.486 4.16a1.504 1.504 0 0 1-2.234-1.314v-8.32a1.504 1.504 0 0 1 2.234-1.313z",
    clipRule: "evenodd"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
      id: "filter0_d_1651_1185",
      width: "206.982",
      height: "85.421",
      x: "0",
      y: "0",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology", {
        in: "SourceAlpha",
        operator: "dilate",
        radius: "5",
        result: "effect1_dropShadow_1651_1185"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset", {
        dy: "-1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
        in2: "hardAlpha",
        operator: "out"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        values: "0 0 0 0 0.760077 0 0 0 0 0.858475 0 0 0 0 0.932274 0 0 0 0.13 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_1651_1185"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_1651_1185",
        result: "shape"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
      id: "filter1_d_1651_1185",
      width: "226",
      height: "96",
      x: "20",
      y: "31",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology", {
        in: "SourceAlpha",
        operator: "dilate",
        radius: "5",
        result: "effect1_dropShadow_1651_1185"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset", {
        dy: "-1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
        in2: "hardAlpha",
        operator: "out"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        values: "0 0 0 0 0.760077 0 0 0 0 0.858475 0 0 0 0 0.932274 0 0 0 0.13 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_1651_1185"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_1651_1185",
        result: "shape"
      })]
    })]
  })]
}));

/***/ }),

/***/ "./src/components/icons/SocialLoginIcon.jsx":
/*!**************************************************!*\
  !*** ./src/components/icons/SocialLoginIcon.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "232",
  height: "120",
  fill: "none",
  viewBox: "0 0 232 120",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    filter: "url(#filter0_d_1651_1098)",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#fff",
      d: "M5 7.4C5 3.864 7.24 1 10.003 1h211.994C224.76 1 227 3.865 227 7.4V102.6c0 3.534-2.24 6.399-5.003 6.399H10.003C7.24 109 5 106.135 5 102.601z"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#B5B5B5",
    fillRule: "evenodd",
    d: "M196.5 26.19h-161c-5.247 0-9.5 5.064-9.5 11.31s4.253 11.31 9.5 11.31h161c5.247 0 9.5-5.064 9.5-11.31s-4.253-11.31-9.5-11.31M35.5 25C29.701 25 25 30.596 25 37.5S29.701 50 35.5 50h161c5.799 0 10.5-5.596 10.5-12.5S202.299 25 196.5 25z",
    clipRule: "evenodd"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#B5B5B5",
    fillRule: "evenodd",
    d: "M196.5 26.19h-161c-5.247 0-9.5 5.064-9.5 11.31s4.253 11.31 9.5 11.31h161c5.247 0 9.5-5.064 9.5-11.31s-4.253-11.31-9.5-11.31M35.5 25C29.701 25 25 30.596 25 37.5S29.701 50 35.5 50h161c5.799 0 10.5-5.596 10.5-12.5S202.299 25 196.5 25z",
    clipRule: "evenodd"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#B5B5B5",
    fillRule: "evenodd",
    d: "M196.5 26.19h-161c-5.247 0-9.5 5.064-9.5 11.31s4.253 11.31 9.5 11.31h161c5.247 0 9.5-5.064 9.5-11.31s-4.253-11.31-9.5-11.31M35.5 25C29.701 25 25 30.596 25 37.5S29.701 50 35.5 50h161c5.799 0 10.5-5.596 10.5-12.5S202.299 25 196.5 25z",
    clipRule: "evenodd"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#3575D3",
    d: "M25 71.5C25 64.596 29.701 59 35.5 59h161c5.799 0 10.5 5.596 10.5 12.5S202.299 84 196.5 84h-161C29.701 84 25 78.404 25 71.5"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#fff",
    d: "m41.524 71.887.37-2.25h-2.15v-.796c0-1.189.417-1.646 1.496-1.646.335 0 .605.01.76.028v-2.04c-.294-.092-1.014-.183-1.43-.183-2.2 0-3.213 1.162-3.213 3.668v.97H36v2.25h1.357v4.895a5.9 5.9 0 0 0 2.387.163v-5.059z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    clipPath: "url(#clip0_1651_1098)",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#A3A3A3",
      d: "m44.703 36.075-.06-.257h-5.584v2.364h3.336c-.346 1.644-1.954 2.51-3.266 2.51-.956 0-1.962-.402-2.629-1.048a3.75 3.75 0 0 1-1.12-2.648c0-.996.448-1.991 1.099-2.646.65-.655 1.634-1.022 2.611-1.022 1.12 0 1.922.595 2.222.866l1.679-1.67C42.498 32.09 41.145 31 39.036 31c-1.627 0-3.187.623-4.328 1.76C33.583 33.88 33 35.498 33 37s.551 3.04 1.642 4.168C35.807 42.37 37.458 43 39.157 43c1.547 0 3.012-.606 4.057-1.705 1.027-1.082 1.558-2.58 1.558-4.15a7 7 0 0 0-.07-1.07"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    clipPath: "url(#clip1_1651_1098)",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#2B2B2B",
      fillRule: "evenodd",
      d: "M175.882 89.45a.67.67 0 0 1-.303.905l-4.644 2.311a.69.69 0 0 1-.92-.297.67.67 0 0 1 .302-.906l4.645-2.311a.69.69 0 0 1 .92.297M201.688 76.596a.67.67 0 0 1-.302.906l-4.645 2.314a.69.69 0 0 1-.92-.298.67.67 0 0 1 .302-.906l4.645-2.314a.69.69 0 0 1 .92.298M191.335 67.937c.36.116.556.496.439.85l-1.608 4.854a.686.686 0 0 1-.863.432.67.67 0 0 1-.438-.85l1.607-4.854a.687.687 0 0 1 .863-.432M177.767 68.974a.69.69 0 0 1 .922.291l2.372 4.55a.67.67 0 0 1-.296.908.69.69 0 0 1-.922-.292l-2.372-4.55a.67.67 0 0 1 .296-.907M168.94 79.096a.687.687 0 0 1 .862-.434l4.961 1.579c.36.115.557.495.441.849a.687.687 0 0 1-.862.434l-4.961-1.579a.67.67 0 0 1-.441-.849",
      clipRule: "evenodd"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#fff",
      d: "m183.641 80.238 29.768 20.533-12.74.503 6.937 13.334-9.644 4.813-6.94-13.334-7.907 9.794z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#2B2B2B",
      fillRule: "evenodd",
      d: "M183.329 79.637a.69.69 0 0 1 .704.048l29.769 20.534a.67.67 0 0 1 .264.742.68.68 0 0 1-.629.484l-11.671.461 6.45 12.395c.083.16.098.345.041.516a.68.68 0 0 1-.341.393l-9.644 4.813a.69.69 0 0 1-.919-.294l-6.456-12.404-7.246 8.976a.69.69 0 0 1-.766.215.675.675 0 0 1-.455-.645l.526-35.643a.67.67 0 0 1 .373-.59m.978 1.883-.478 32.394 6.657-8.246a.69.69 0 0 1 1.145.112l6.63 12.737 8.422-4.204-6.623-12.731a.67.67 0 0 1 .018-.648.69.69 0 0 1 .563-.333l10.714-.424z",
      clipRule: "evenodd"
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#7F7F7F",
    d: "M68.727 41v-6.545h1.582v5.26h2.723V41zm11.047-3.273q0 1.08-.416 1.832a2.83 2.83 0 0 1-1.125 1.14q-.705.39-1.585.39a3.2 3.2 0 0 1-1.588-.393 2.86 2.86 0 0 1-1.122-1.14q-.412-.751-.412-1.829 0-1.08.412-1.831.415-.75 1.122-1.141.706-.39 1.588-.39.88 0 1.585.39.71.39 1.125 1.141.416.75.416 1.831m-1.617 0q0-.639-.182-1.08a1.4 1.4 0 0 0-.518-.668 1.4 1.4 0 0 0-.809-.227 1.4 1.4 0 0 0-.808.227q-.34.227-.521.668-.18.441-.18 1.08 0 .64.18 1.08.182.442.52.668.339.228.81.227.471 0 .808-.227.338-.225.518-.668.182-.441.182-1.08m6.836-1.134a1.2 1.2 0 0 0-.16-.355 1 1 0 0 0-.259-.265 1.1 1.1 0 0 0-.351-.163 1.6 1.6 0 0 0-.435-.058q-.475 0-.825.23-.344.23-.533.671-.189.438-.189 1.065 0 .63.182 1.073.183.445.528.678t.837.233q.435 0 .735-.14.304-.144.46-.406a1.2 1.2 0 0 0 .157-.617l.294.035h-1.592V37.42h2.823v.867q0 .878-.374 1.505a2.5 2.5 0 0 1-1.023.962q-.649.336-1.493.336-.936 0-1.646-.406a2.8 2.8 0 0 1-1.106-1.157q-.396-.755-.396-1.79 0-.805.24-1.429.24-.626.668-1.06.432-.435.997-.66.57-.223 1.224-.223.57 0 1.058.163.492.163.87.46.38.297.616.707.237.408.294.898zm4.186-2.139V41h-1.582v-6.545zm6.564 0V41H94.4l-2.604-3.778h-.042V41h-1.582v-6.545h1.362l2.576 3.77h.054v-3.77zM100.24 41l-1.904-6.545h1.748l.987 4.289h.055l1.128-4.29h1.425l1.129 4.3h.054l.991-4.3h1.745L105.696 41h-1.524l-1.18-3.97h-.051L101.762 41zm9.593-6.545V41h-1.582v-6.545zm.779 1.284v-1.284h5.533v1.284h-1.985V41h-1.56v-5.26zM116.917 41v-6.545h1.582v2.627h2.579v-2.627h1.579V41h-1.579v-2.63h-2.579V41zm12.962-4.407a1.2 1.2 0 0 0-.16-.355 1 1 0 0 0-.259-.265 1.1 1.1 0 0 0-.352-.163 1.6 1.6 0 0 0-.434-.058q-.477 0-.825.23-.345.23-.533.671-.189.438-.189 1.065 0 .63.182 1.073.183.445.527.678.346.233.838.233.435 0 .735-.14.303-.144.46-.406t.157-.617l.294.035h-1.592V37.42h2.822v.867q0 .878-.374 1.505a2.5 2.5 0 0 1-1.022.962q-.649.336-1.493.336-.936 0-1.646-.406a2.8 2.8 0 0 1-1.106-1.157q-.396-.755-.396-1.79 0-.805.24-1.429.239-.626.668-1.06.431-.435.997-.66.569-.223 1.224-.223.569 0 1.058.163.492.163.869.46.38.297.617.707.237.408.294.898zm8.782 1.134q0 1.08-.416 1.832a2.83 2.83 0 0 1-1.125 1.14q-.706.39-1.585.39a3.2 3.2 0 0 1-1.589-.393 2.87 2.87 0 0 1-1.121-1.14q-.413-.751-.413-1.829 0-1.08.413-1.831a2.84 2.84 0 0 1 1.121-1.141 3.23 3.23 0 0 1 1.589-.39q.879 0 1.585.39.71.39 1.125 1.141.416.75.416 1.831m-1.618 0q0-.639-.182-1.08a1.4 1.4 0 0 0-.518-.668 1.4 1.4 0 0 0-.808-.227q-.47 0-.809.227a1.44 1.44 0 0 0-.521.668q-.179.441-.179 1.08 0 .64.179 1.08.183.442.521.668.34.228.809.227.473 0 .808-.227.34-.225.518-.668.183-.441.182-1.08m8.719 0q0 1.08-.415 1.832a2.83 2.83 0 0 1-1.125 1.14q-.707.39-1.586.39a3.2 3.2 0 0 1-1.588-.393 2.86 2.86 0 0 1-1.122-1.14q-.412-.751-.412-1.829 0-1.08.412-1.831.416-.75 1.122-1.141.706-.39 1.588-.39.88 0 1.586.39.71.39 1.125 1.141.415.75.415 1.831m-1.617 0q0-.639-.182-1.08a1.4 1.4 0 0 0-.518-.668 1.4 1.4 0 0 0-.809-.227q-.47 0-.808.227-.34.227-.521.668-.179.441-.179 1.08 0 .64.179 1.08.182.442.521.668.339.228.808.227.474 0 .809-.227a1.4 1.4 0 0 0 .518-.668q.182-.441.182-1.08m6.836-1.134a1.1 1.1 0 0 0-.16-.355 1 1 0 0 0-.258-.265 1.1 1.1 0 0 0-.352-.163 1.6 1.6 0 0 0-.435-.058 1.46 1.46 0 0 0-.824.23q-.345.23-.534.671-.189.438-.189 1.065 0 .63.183 1.073.182.445.527.678t.837.233q.435 0 .735-.14.304-.144.461-.406.156-.262.156-.617l.294.035h-1.591V37.42h2.822v.867q0 .878-.374 1.505a2.5 2.5 0 0 1-1.023.962q-.649.336-1.492.336-.937 0-1.646-.406a2.8 2.8 0 0 1-1.106-1.157q-.396-.755-.396-1.79 0-.805.239-1.429.24-.626.668-1.06.432-.435.997-.66.57-.223 1.224-.223.57 0 1.058.163.492.163.87.46.38.297.616.707.237.408.294.898zM153.585 41v-6.545h1.582v5.26h2.723V41zm5.124 0v-6.545h4.564v1.284h-2.982v1.343h2.749v1.288h-2.749v1.345h2.982V41z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#fff",
    d: "M68.727 74v-6.546h1.582v5.261h2.723V74zm11.047-3.273q0 1.08-.416 1.832a2.83 2.83 0 0 1-1.125 1.14q-.705.39-1.585.39a3.2 3.2 0 0 1-1.588-.393 2.86 2.86 0 0 1-1.122-1.14q-.412-.751-.412-1.829 0-1.08.412-1.831.415-.75 1.122-1.141.706-.39 1.588-.39.88 0 1.585.39.71.39 1.125 1.141.416.75.416 1.831m-1.617 0q0-.639-.182-1.08a1.4 1.4 0 0 0-.518-.668 1.4 1.4 0 0 0-.809-.227 1.4 1.4 0 0 0-.808.227q-.34.227-.521.668-.18.441-.18 1.08t.18 1.08q.182.442.52.668.339.228.81.227.471 0 .808-.227.338-.226.518-.667.182-.442.182-1.08m6.836-1.134a1.2 1.2 0 0 0-.16-.355 1 1 0 0 0-.259-.265 1.1 1.1 0 0 0-.351-.163 1.6 1.6 0 0 0-.435-.058q-.475 0-.825.23-.344.23-.533.671-.189.438-.189 1.065 0 .63.182 1.073.183.445.528.678t.837.233q.435 0 .735-.14.304-.144.46-.406a1.2 1.2 0 0 0 .157-.617l.294.035h-1.592v-1.153h2.823v.866q0 .878-.374 1.505a2.5 2.5 0 0 1-1.023.962q-.649.335-1.493.335-.936 0-1.646-.405a2.8 2.8 0 0 1-1.106-1.157q-.396-.755-.396-1.79 0-.805.24-1.429.24-.626.668-1.06.432-.435.997-.66.57-.222 1.224-.223.57 0 1.058.163.492.163.87.46.38.297.616.707.237.409.294.898zm4.186-2.139V74h-1.582v-6.546zm6.564 0V74H94.4l-2.604-3.778h-.042V74h-1.582v-6.546h1.362l2.576 3.772h.054v-3.772zM100.24 74l-1.904-6.546h1.748l.987 4.29h.055l1.128-4.29h1.425l1.129 4.3h.054l.991-4.3h1.745L105.696 74h-1.524l-1.18-3.97h-.051L101.762 74zm9.593-6.546V74h-1.582v-6.546zm.779 1.285v-1.285h5.533v1.285h-1.985V74h-1.56v-5.26zM116.917 74v-6.546h1.582v2.628h2.579v-2.627h1.579V74h-1.579v-2.63h-2.579V74zm12.962-4.407a1.2 1.2 0 0 0-.16-.355 1 1 0 0 0-.259-.265 1.1 1.1 0 0 0-.352-.163 1.6 1.6 0 0 0-.434-.058q-.477 0-.825.23-.345.23-.533.671-.189.438-.189 1.065 0 .63.182 1.073.183.445.527.678.346.234.838.233.435 0 .735-.14.303-.144.46-.406t.157-.617l.294.035h-1.592v-1.153h2.822v.866q0 .878-.374 1.505a2.5 2.5 0 0 1-1.022.962q-.649.335-1.493.335-.936 0-1.646-.405a2.8 2.8 0 0 1-1.106-1.157q-.396-.755-.396-1.79 0-.805.24-1.429.239-.626.668-1.06.431-.435.997-.66.569-.222 1.224-.223.569 0 1.058.163.492.163.869.46.38.297.617.707.237.409.294.898zm8.782 1.134q0 1.08-.416 1.832a2.83 2.83 0 0 1-1.125 1.14q-.706.39-1.585.39a3.2 3.2 0 0 1-1.589-.393 2.87 2.87 0 0 1-1.121-1.14q-.413-.751-.413-1.829 0-1.08.413-1.831a2.84 2.84 0 0 1 1.121-1.141 3.23 3.23 0 0 1 1.589-.39q.879 0 1.585.39.71.39 1.125 1.141.416.75.416 1.831m-1.618 0q0-.639-.182-1.08a1.4 1.4 0 0 0-.518-.668 1.4 1.4 0 0 0-.808-.227q-.47 0-.809.227a1.44 1.44 0 0 0-.521.668q-.179.441-.179 1.08t.179 1.08q.183.442.521.668.34.228.809.227.473 0 .808-.227.34-.226.518-.667.183-.442.182-1.08m8.719 0q0 1.08-.415 1.832a2.83 2.83 0 0 1-1.125 1.14q-.707.39-1.586.39a3.2 3.2 0 0 1-1.588-.393 2.86 2.86 0 0 1-1.122-1.14q-.412-.751-.412-1.829 0-1.08.412-1.831.416-.75 1.122-1.141.706-.39 1.588-.39.88 0 1.586.39.71.39 1.125 1.141.415.75.415 1.831m-1.617 0q0-.639-.182-1.08a1.4 1.4 0 0 0-.518-.668 1.4 1.4 0 0 0-.809-.227q-.47 0-.808.227-.34.227-.521.668-.179.441-.179 1.08t.179 1.08q.182.442.521.668.339.228.808.227.474 0 .809-.227a1.4 1.4 0 0 0 .518-.667q.182-.442.182-1.08m6.836-1.134a1.1 1.1 0 0 0-.16-.355 1 1 0 0 0-.258-.265 1.1 1.1 0 0 0-.352-.163 1.6 1.6 0 0 0-.435-.058 1.46 1.46 0 0 0-.824.23q-.345.23-.534.671-.189.438-.189 1.065 0 .63.183 1.073.182.445.527.678t.837.233q.435 0 .735-.14.304-.144.461-.406.156-.262.156-.617l.294.035h-1.591v-1.153h2.822v.866q0 .878-.374 1.505a2.5 2.5 0 0 1-1.023.962q-.649.335-1.492.335-.937 0-1.646-.405a2.8 2.8 0 0 1-1.106-1.157q-.396-.755-.396-1.79 0-.805.239-1.429.24-.626.668-1.06.432-.435.997-.66.57-.222 1.224-.223.57 0 1.058.163.492.163.87.46.38.297.616.707.237.409.294.898zM153.585 74v-6.546h1.582v5.261h2.723V74zm5.124 0v-6.546h4.564v1.285h-2.982v1.343h2.749v1.288h-2.749v1.345h2.982V74z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
      id: "clip0_1651_1098",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fill: "#fff",
        d: "M33 31h12v12H33z"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
      id: "clip1_1651_1098",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fill: "#fff",
        d: "M169 68h45v52h-45z"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
      id: "filter0_d_1651_1098",
      width: "232",
      height: "118",
      x: "0",
      y: "0",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology", {
        in: "SourceAlpha",
        operator: "dilate",
        radius: "1",
        result: "effect1_dropShadow_1651_1098"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset", {
        dy: "4"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
        stdDeviation: "2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
        in2: "hardAlpha",
        operator: "out"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        values: "0 0 0 0 0.760077 0 0 0 0 0.858475 0 0 0 0 0.932274 0 0 0 0.37 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_1651_1098"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_1651_1098",
        result: "shape"
      })]
    })]
  })]
}));

/***/ }),

/***/ "./src/components/icons/SubscriptionIcon.jsx":
/*!***************************************************!*\
  !*** ./src/components/icons/SubscriptionIcon.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "257",
  height: "141",
  fill: "none",
  style: {
    paddingTop: '3%'
  },
  viewBox: "0 0 257 141",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    className: "nfd-svg-rotate--5deg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
      filter: "url(#filter0_d_1651_1025)",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        width: "217",
        height: "105",
        x: "5",
        y: "1",
        fill: "#fff",
        rx: "5"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "94",
      height: "20",
      x: "107.5",
      y: "63.5",
      fill: "#353535",
      stroke: "#272727",
      rx: "4.5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#fff",
      d: "M132.12 71.337a.81.81 0 0 0-.33-.6q-.29-.216-.789-.215-.338 0-.572.096a.8.8 0 0 0-.358.259.62.62 0 0 0-.121.377q-.007.176.073.307a.8.8 0 0 0 .227.227q.144.092.332.163.189.067.403.115l.588.14q.429.096.786.256.359.16.62.393.262.234.406.55.147.316.151.725a1.8 1.8 0 0 1-.307 1.042q-.3.439-.87.681-.566.24-1.364.24-.793 0-1.381-.243a2 2 0 0 1-.914-.72q-.325-.478-.342-1.185h1.339q.023.33.189.55.17.217.45.329.285.109.643.109.351 0 .61-.103a.94.94 0 0 0 .406-.284.66.66 0 0 0 .144-.419.55.55 0 0 0-.131-.37 1 1 0 0 0-.377-.256 4 4 0 0 0-.604-.192l-.713-.179q-.828-.201-1.307-.63-.48-.428-.476-1.153a1.7 1.7 0 0 1 .316-1.04q.323-.443.885-.693t1.279-.249q.728 0 1.272.25.546.249.85.693.303.445.313 1.029zm6.389-1.883h1.384v4.251q0 .716-.342 1.253a2.3 2.3 0 0 1-.949.838q-.61.297-1.422.297-.816 0-1.426-.297-.61-.3-.949-.838-.339-.537-.339-1.253v-4.25h1.384v4.132q0 .374.163.665.167.29.467.457.3.165.7.166.403 0 .7-.166.3-.166.463-.457.166-.291.166-.665zM141.032 76v-6.546h2.621q.722 0 1.204.215.483.213.726.594.243.377.243.87 0 .383-.154.674-.153.288-.421.473-.266.182-.608.259v.064q.375.015.7.21.33.195.534.547.204.349.204.831 0 .52-.258.93-.256.406-.758.642-.502.237-1.237.237zm1.384-1.131h1.128q.579 0 .844-.22a.74.74 0 0 0 .265-.595.9.9 0 0 0-.131-.48.9.9 0 0 0-.374-.326 1.3 1.3 0 0 0-.572-.118h-1.16zm0-2.675h1.026q.284 0 .505-.1a.84.84 0 0 0 .351-.287.75.75 0 0 0 .131-.444.72.72 0 0 0-.252-.573q-.25-.217-.71-.217h-1.051zm8.117-.857a.81.81 0 0 0-.329-.6q-.29-.216-.79-.215-.339 0-.572.096a.8.8 0 0 0-.358.259.62.62 0 0 0-.121.377q-.007.176.073.307a.8.8 0 0 0 .227.227q.144.092.332.163.189.067.403.115l.588.14q.429.096.786.256.359.16.62.393.263.234.406.55.147.316.151.725a1.8 1.8 0 0 1-.307 1.042q-.3.439-.87.681-.566.24-1.364.24-.793 0-1.381-.243a2 2 0 0 1-.914-.72q-.325-.478-.342-1.185h1.339q.023.33.189.55.17.217.45.329.285.109.643.109.351 0 .61-.103a.94.94 0 0 0 .406-.284.66.66 0 0 0 .144-.419.55.55 0 0 0-.131-.37 1 1 0 0 0-.377-.256 4 4 0 0 0-.604-.192l-.713-.179q-.828-.201-1.307-.63-.48-.428-.476-1.153a1.7 1.7 0 0 1 .316-1.04q.322-.443.885-.693t1.279-.249q.729 0 1.272.25.546.249.85.693.303.445.313 1.029zm8.122.41h-1.4a1.4 1.4 0 0 0-.157-.484 1.2 1.2 0 0 0-.303-.364 1.4 1.4 0 0 0-.429-.23 1.6 1.6 0 0 0-.521-.08q-.508 0-.885.253a1.6 1.6 0 0 0-.585.728q-.208.476-.208 1.157 0 .7.208 1.176.212.477.588.72.378.242.873.242.278 0 .514-.073.24-.074.425-.214.186-.144.307-.349a1.4 1.4 0 0 0 .173-.466l1.4.006q-.055.45-.272.87a2.63 2.63 0 0 1-1.441 1.262 3.2 3.2 0 0 1-1.129.189 3.1 3.1 0 0 1-1.566-.397 2.8 2.8 0 0 1-1.086-1.147q-.397-.75-.397-1.819 0-1.07.403-1.822a2.8 2.8 0 0 1 1.093-1.144q.69-.396 1.553-.396.57 0 1.055.16.49.16.866.466.377.304.614.745.24.44.307 1.01m.992 4.253v-6.546h2.582q.742 0 1.266.266.528.261.802.745.279.48.278 1.128 0 .651-.281 1.121a1.8 1.8 0 0 1-.815.716q-.53.25-1.285.25h-1.729v-1.113h1.506q.396 0 .658-.108a.78.78 0 0 0 .39-.326q.13-.218.131-.54 0-.326-.131-.55a.8.8 0 0 0-.393-.339 1.6 1.6 0 0 0-.662-.118h-.933V76zm3.535-2.979L164.809 76h-1.528l-1.592-2.979zm3.755-3.567V76h-1.384v-6.546zM168.076 76v-6.546h2.62q.723 0 1.205.215.483.213.726.594.243.377.243.87 0 .383-.154.674-.153.288-.422.473a1.7 1.7 0 0 1-.607.259v.064q.375.015.7.21.33.195.534.547.204.349.204.831 0 .52-.258.93-.256.406-.758.642-.501.237-1.237.237zm1.384-1.131h1.128q.578 0 .844-.22a.74.74 0 0 0 .265-.595.9.9 0 0 0-.131-.48.9.9 0 0 0-.374-.326 1.3 1.3 0 0 0-.572-.118h-1.16zm0-2.675h1.026q.283 0 .505-.1a.84.84 0 0 0 .351-.287.75.75 0 0 0 .131-.444.72.72 0 0 0-.252-.573q-.25-.217-.71-.217h-1.051zM174.026 76v-6.546h4.41v1.142h-3.026v1.56h2.8v1.14h-2.8v1.563h3.039V76z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#000",
      d: "M112.588 53.09V42.183h.699V53.09zm2.016-7.418a1.17 1.17 0 0 0-.503-.87q-.439-.31-1.142-.31-.494 0-.848.149-.354.15-.541.404a.99.99 0 0 0-.069 1.057q.129.2.346.341.217.137.481.23.264.094.533.158l.818.204q.494.115.95.312.46.195.823.494.366.298.579.72.213.421.213.989 0 .767-.392 1.35-.392.58-1.133.908-.738.324-1.786.324-1.018 0-1.768-.315a2.64 2.64 0 0 1-1.168-.92q-.417-.606-.452-1.475h1.556q.034.456.281.758.247.303.644.452.4.15.894.15.516 0 .904-.154a1.47 1.47 0 0 0 .614-.435q.221-.28.225-.656a.83.83 0 0 0-.2-.563 1.5 1.5 0 0 0-.55-.375 5 5 0 0 0-.818-.272l-.993-.256q-1.078-.278-1.704-.84-.622-.566-.622-1.504 0-.771.417-1.35a2.76 2.76 0 0 1 1.146-.9q.724-.324 1.641-.324.929 0 1.628.324.704.32 1.104.89.4.568.413 1.305zm5.994-2.519q.627.005 1.219.222.597.213 1.074.699.477.48.759 1.291.28.81.281 2.003.004 1.125-.239 2.011-.239.883-.686 1.492a3 3 0 0 1-1.078.929q-.632.32-1.419.32-.827 0-1.466-.325a2.75 2.75 0 0 1-1.509-2.173h1.556q.118.52.486.827.37.302.933.302.907 0 1.398-.788.49-.789.49-2.19h-.06q-.209.375-.541.647a2.5 2.5 0 0 1-.754.414 2.7 2.7 0 0 1-.887.145 2.64 2.64 0 0 1-1.38-.367 2.7 2.7 0 0 1-.968-1.006q-.354-.639-.358-1.461 0-.852.392-1.53a2.84 2.84 0 0 1 1.104-1.074q.708-.396 1.653-.388m.005 1.279q-.46 0-.831.226-.367.221-.58.605a1.73 1.73 0 0 0-.209.848q.005.464.209.844.209.379.567.6.362.222.827.222a1.57 1.57 0 0 0 1.163-.499q.226-.24.349-.54.129-.304.124-.64a1.66 1.66 0 0 0-.213-.827 1.65 1.65 0 0 0-.575-.61 1.5 1.5 0 0 0-.831-.23m7.777-1.279q.626.005 1.218.222.597.213 1.074.699.477.48.759 1.291.28.81.281 2.003.004 1.125-.239 2.011-.238.883-.686 1.492a3 3 0 0 1-1.078.929q-.63.32-1.419.32-.827 0-1.466-.325a2.76 2.76 0 0 1-1.027-.886 2.8 2.8 0 0 1-.481-1.287h1.555q.12.52.486.827.37.302.933.302.907 0 1.398-.788.49-.789.49-2.19h-.06q-.208.375-.541.647a2.5 2.5 0 0 1-.754.414 2.7 2.7 0 0 1-.887.145 2.64 2.64 0 0 1-1.38-.367 2.7 2.7 0 0 1-.968-1.006 3 3 0 0 1-.358-1.461q0-.852.393-1.53a2.85 2.85 0 0 1 1.103-1.074q.708-.396 1.654-.388m.004 1.279q-.46 0-.831.226-.367.221-.58.605a1.73 1.73 0 0 0-.208.848q.004.464.208.844.21.379.567.6.362.222.827.222a1.57 1.57 0 0 0 1.163-.499q.226-.24.35-.54.127-.304.123-.64a1.66 1.66 0 0 0-.213-.827 1.65 1.65 0 0 0-.575-.61 1.5 1.5 0 0 0-.831-.23m11.303-1.568-2.812 10.449h-1.351l2.812-10.45zm.985 9.136v-6.545h1.474v1.112h.077q.204-.563.677-.878.474-.32 1.129-.32.666 0 1.121.324.46.32.648.874h.068q.217-.546.733-.87.52-.328 1.232-.328.903 0 1.474.571t.571 1.666V52h-1.547v-4.155q0-.61-.324-.89a1.16 1.16 0 0 0-.792-.286q-.559 0-.874.35-.31.345-.311.899V52h-1.513v-4.219q0-.507-.307-.81-.302-.302-.792-.302-.332 0-.605.17a1.2 1.2 0 0 0-.435.474 1.5 1.5 0 0 0-.162.707V52zm13.624.128q-.959 0-1.662-.422a2.87 2.87 0 0 1-1.091-1.18q-.383-.759-.383-1.773t.383-1.777a2.86 2.86 0 0 1 1.091-1.185q.703-.422 1.662-.422t1.662.422 1.087 1.185q.388.762.388 1.777t-.388 1.773q-.384.758-1.087 1.18t-1.662.422m.009-1.236q.52 0 .869-.286.35-.29.52-.775.174-.486.175-1.082 0-.601-.175-1.087a1.7 1.7 0 0 0-.52-.78q-.35-.29-.869-.29-.533 0-.887.29a1.75 1.75 0 0 0-.524.78q-.17.486-.17 1.087 0 .596.17 1.082.175.486.524.775.354.286.887.286m5.979-2.727V52h-1.542v-6.545h1.474v1.112h.077q.226-.55.72-.874.499-.324 1.232-.324.677 0 1.18.29.507.29.784.84.282.549.277 1.333V52h-1.542v-3.929q0-.656-.341-1.027-.337-.37-.934-.37-.404 0-.72.178a1.24 1.24 0 0 0-.49.507q-.175.333-.175.806m9.039-2.71v1.193h-3.763v-1.194zm-2.834-1.569h1.543v6.145q0 .312.093.477a.5.5 0 0 0 .256.222 1 1 0 0 0 .349.06q.145 0 .265-.021.124-.022.187-.039l.26 1.206q-.123.043-.354.094-.225.051-.554.06a2.5 2.5 0 0 1-1.044-.175 1.63 1.63 0 0 1-.737-.605q-.268-.41-.264-1.023zm5.807 4.279V52h-1.542v-8.727h1.508v3.294h.077q.23-.554.711-.874.486-.324 1.236-.324.682 0 1.189.286.507.285.784.835.281.55.281 1.342V52h-1.542v-3.929q0-.66-.341-1.027-.336-.37-.946-.37-.41 0-.733.178a1.25 1.25 0 0 0-.503.507q-.179.333-.179.806"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#B4B4B4",
      fillOpacity: "0.5",
      d: "M107 18h94v3h-94zM107 25h94v3h-94zM107 32h49v3h-49z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "69",
      height: "67",
      x: "23",
      y: "20",
      fill: "#EBEBEB",
      rx: "5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      stroke: "#848484",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeOpacity: "0.6",
      strokeWidth: "1.5",
      d: "M42 42v17.476l15.39 6.977 15.39-6.977V42.001M66.647 59.032l3.188-1.447"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      stroke: "#848484",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeOpacity: "0.6",
      strokeWidth: "1.5",
      d: "M63.162 46.374v.002l-5.772 2.625L42 42 57.39 35l15.39 7-7.981 3.63"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      stroke: "#848484",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeOpacity: "0.6",
      strokeWidth: "1.5",
      d: "m42 42 15.39-7 15.39 7M57.39 49.096v17.068"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      stroke: "#848484",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeOpacity: "0.6",
      strokeWidth: "1.5",
      d: "m53.393 38.432 13.615 6.193v4.64l-3.846 1.75v-4.64L49.545 40.18"
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    className: "nfd-svg-rotate-5deg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
      filter: "url(#filter1_d_1651_1025)",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        width: "217",
        height: "105",
        x: "35",
        y: "27",
        fill: "#fff",
        rx: "5"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "94",
      height: "20",
      x: "137.5",
      y: "89.5",
      fill: "#353535",
      stroke: "#272727",
      rx: "4.5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#fff",
      d: "M205.042 103v-6.545h4.411v1.14h-3.027v1.56h2.8v1.141h-2.8v1.563h3.039V103zM199.092 103v-6.545h2.621q.722 0 1.204.214.483.213.726.594.243.377.243.87 0 .383-.154.674a1.3 1.3 0 0 1-.421.473q-.266.182-.608.259v.064q.375.015.7.21.33.195.534.547.204.348.205.831 0 .52-.259.93a1.75 1.75 0 0 1-.758.643q-.501.236-1.237.236zm1.384-1.131h1.128q.579 0 .844-.221a.74.74 0 0 0 .265-.594.9.9 0 0 0-.131-.48.9.9 0 0 0-.374-.326 1.3 1.3 0 0 0-.572-.118h-1.16zm0-2.675h1.026q.284 0 .505-.1a.84.84 0 0 0 .351-.287.75.75 0 0 0 .131-.444.72.72 0 0 0-.252-.573q-.25-.217-.71-.217h-1.051zM197.953 96.455V103h-1.384v-6.545zM190.663 103v-6.545h2.583q.741 0 1.265.265.528.262.802.745.278.48.278 1.128 0 .651-.281 1.121-.28.468-.815.716-.53.25-1.285.25h-1.729v-1.113h1.506q.396 0 .658-.108a.78.78 0 0 0 .39-.326q.13-.218.131-.54 0-.326-.131-.55a.8.8 0 0 0-.393-.339 1.6 1.6 0 0 0-.662-.118h-.933V103zm3.535-2.979 1.627 2.979h-1.528l-1.592-2.979zM189.671 98.746h-1.4a1.4 1.4 0 0 0-.157-.482 1.2 1.2 0 0 0-.303-.365 1.4 1.4 0 0 0-.429-.23 1.6 1.6 0 0 0-.521-.08q-.507 0-.885.253a1.6 1.6 0 0 0-.585.728q-.207.477-.207 1.158 0 .699.207 1.176a1.6 1.6 0 0 0 .588.719q.378.243.873.243.278 0 .514-.074.24-.073.426-.214.184-.144.306-.348.125-.205.173-.467l1.4.006a2.604 2.604 0 0 1-.85 1.614q-.362.326-.863.518a3.2 3.2 0 0 1-1.128.189 3.1 3.1 0 0 1-1.567-.397 2.8 2.8 0 0 1-1.086-1.147q-.396-.751-.396-1.819 0-1.07.402-1.821.403-.751 1.093-1.145.69-.396 1.554-.396.568 0 1.054.16.49.16.866.467.377.303.614.744.24.441.307 1.01M181.549 98.337a.81.81 0 0 0-.329-.6q-.29-.215-.79-.215-.338 0-.572.096a.8.8 0 0 0-.358.259.62.62 0 0 0-.121.377q-.006.176.073.307a.8.8 0 0 0 .227.227q.144.093.333.163.188.067.402.115l.588.14q.429.097.787.256.357.16.62.393.262.234.406.55.147.317.15.726a1.8 1.8 0 0 1-.307 1.041q-.3.438-.869.681-.566.24-1.365.24-.793 0-1.381-.243a2.03 2.03 0 0 1-.914-.719q-.326-.48-.342-1.186h1.339q.023.33.189.55.17.217.451.329.284.108.642.109.351 0 .61-.103a.94.94 0 0 0 .406-.284.66.66 0 0 0 .144-.419.54.54 0 0 0-.131-.37 1 1 0 0 0-.377-.256 4 4 0 0 0-.604-.192l-.713-.179q-.827-.201-1.307-.63-.48-.428-.476-1.153a1.7 1.7 0 0 1 .316-1.039q.322-.444.885-.694t1.279-.249q.729 0 1.272.25.546.249.85.693.303.445.313 1.03zM172.048 103v-6.545h2.621q.722 0 1.205.214.482.213.725.594.243.377.243.87 0 .383-.153.674-.154.288-.422.473-.266.182-.608.259v.064q.375.015.7.21.33.195.534.547.205.348.205.831 0 .52-.259.93a1.75 1.75 0 0 1-.758.643q-.501.236-1.237.236zm1.384-1.131h1.128q.579 0 .844-.221a.74.74 0 0 0 .265-.594.9.9 0 0 0-.131-.48.9.9 0 0 0-.374-.326 1.3 1.3 0 0 0-.572-.118h-1.16zm0-2.675h1.026q.284 0 .505-.1a.84.84 0 0 0 .351-.287.75.75 0 0 0 .131-.444.72.72 0 0 0-.252-.573q-.25-.217-.71-.217h-1.051zM169.525 96.455h1.384v4.25q0 .716-.342 1.253a2.3 2.3 0 0 1-.949.837q-.61.298-1.422.298-.815 0-1.426-.298a2.3 2.3 0 0 1-.949-.837q-.339-.537-.339-1.253v-4.25h1.384v4.132q0 .374.163.665.167.29.467.457.3.166.7.166.403 0 .7-.166.3-.166.463-.457.166-.291.166-.665zM163.136 98.337a.81.81 0 0 0-.329-.6q-.29-.215-.79-.215-.339 0-.572.096a.8.8 0 0 0-.358.259.62.62 0 0 0-.121.377q-.007.176.073.307a.8.8 0 0 0 .227.227q.144.093.333.163.188.067.402.115l.588.14q.429.097.787.256.357.16.62.393.262.234.405.55.148.317.151.726a1.8 1.8 0 0 1-.307 1.041q-.3.438-.869.681-.567.24-1.365.24-.793 0-1.381-.243a2.03 2.03 0 0 1-.914-.719q-.326-.48-.342-1.186h1.339q.023.33.189.55.17.217.45.329.285.108.643.109.351 0 .61-.103a.94.94 0 0 0 .406-.284.66.66 0 0 0 .144-.419.54.54 0 0 0-.131-.37 1 1 0 0 0-.377-.256 4 4 0 0 0-.604-.192l-.713-.179q-.828-.201-1.307-.63-.48-.428-.476-1.153a1.7 1.7 0 0 1 .316-1.039q.322-.444.885-.694t1.279-.249q.729 0 1.272.25.547.249.85.693.303.445.313 1.03z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#000",
      d: "M202.296 74.165V78h-1.542v-8.728h1.508v3.294h.077q.23-.553.711-.873.486-.324 1.236-.324.682 0 1.189.286.507.285.784.835.282.55.282 1.342V78h-1.543v-3.93q0-.66-.341-1.026-.336-.37-.946-.371-.41 0-.733.179a1.25 1.25 0 0 0-.503.507q-.179.332-.179.806M199.323 71.454v1.194h-3.763v-1.194zm-2.834-1.568h1.543v6.145q0 .311.093.477a.5.5 0 0 0 .256.222 1 1 0 0 0 .349.06q.145 0 .265-.022.124-.021.187-.038l.26 1.206q-.123.043-.354.094-.225.051-.554.06a2.5 2.5 0 0 1-1.044-.175 1.63 1.63 0 0 1-.737-.606q-.268-.408-.264-1.022zM190.284 74.165V78h-1.542v-6.546h1.474v1.113h.077q.227-.55.72-.874.499-.324 1.232-.324.677 0 1.18.29.507.29.784.84.282.549.277 1.333V78h-1.542v-3.93q0-.656-.341-1.026-.337-.37-.934-.37-.404 0-.72.178-.31.175-.49.507-.175.332-.175.806M184.296 78.128q-.959 0-1.662-.422a2.87 2.87 0 0 1-1.091-1.18q-.383-.759-.383-1.773 0-1.015.383-1.777a2.87 2.87 0 0 1 1.091-1.185q.703-.422 1.662-.422t1.662.422 1.087 1.185q.388.762.388 1.777t-.388 1.772q-.384.76-1.087 1.18-.703.423-1.662.423m.009-1.236q.52 0 .869-.286.35-.29.52-.775.175-.486.175-1.083 0-.6-.175-1.086a1.7 1.7 0 0 0-.52-.78q-.35-.29-.869-.29-.533 0-.887.29a1.75 1.75 0 0 0-.524.78q-.17.486-.17 1.086 0 .597.17 1.083.175.486.524.775.354.285.887.286M170.672 78v-6.546h1.474v1.113h.077q.204-.563.677-.878.474-.32 1.129-.32.666 0 1.121.324.46.32.648.874h.068q.217-.546.733-.87.52-.328 1.232-.328.903 0 1.474.571.571.57.571 1.666V78h-1.547v-4.155q0-.61-.324-.89a1.16 1.16 0 0 0-.792-.286q-.559 0-.874.35-.31.346-.311.898V78h-1.513V73.78q0-.507-.307-.81-.302-.302-.792-.302-.332 0-.605.17a1.2 1.2 0 0 0-.435.473 1.5 1.5 0 0 0-.162.708V78zM169.687 68.863l-2.812 10.45h-1.351l2.812-10.45zM158.38 69.153q.626.004 1.218.222.597.213 1.074.698.477.483.759 1.292.28.81.281 2.003.004 1.125-.239 2.01-.238.883-.686 1.492a3 3 0 0 1-1.078.93q-.63.319-1.419.319-.827 0-1.466-.324a2.76 2.76 0 0 1-1.027-.886 2.8 2.8 0 0 1-.481-1.287h1.555q.12.52.486.826.37.303.933.303.907 0 1.398-.788.49-.789.49-2.19h-.06q-.208.374-.541.647a2.5 2.5 0 0 1-.754.413 2.7 2.7 0 0 1-.887.145 2.64 2.64 0 0 1-1.38-.366 2.7 2.7 0 0 1-.968-1.006 3 3 0 0 1-.358-1.462q0-.852.393-1.53a2.85 2.85 0 0 1 1.103-1.073q.708-.397 1.654-.388m.004 1.278q-.46 0-.831.226-.366.222-.58.605a1.73 1.73 0 0 0-.208.848q.004.465.208.844.21.38.567.601.362.222.827.222a1.57 1.57 0 0 0 1.163-.499q.226-.24.35-.541.127-.303.123-.64a1.66 1.66 0 0 0-.213-.826 1.65 1.65 0 0 0-.575-.61 1.5 1.5 0 0 0-.831-.23M150.598 69.153q.627.004 1.219.222.597.213 1.074.698.477.483.759 1.292.28.81.281 2.003.004 1.125-.239 2.01-.239.883-.686 1.492a3 3 0 0 1-1.078.93q-.632.319-1.419.319-.827 0-1.466-.324a2.75 2.75 0 0 1-1.509-2.173h1.556q.119.52.486.826.37.303.933.303.907 0 1.398-.788.49-.789.49-2.19h-.06q-.209.374-.541.647a2.5 2.5 0 0 1-.754.413 2.7 2.7 0 0 1-.887.145 2.64 2.64 0 0 1-1.38-.366 2.7 2.7 0 0 1-.968-1.006q-.354-.639-.358-1.462 0-.852.392-1.53a2.84 2.84 0 0 1 1.104-1.073q.708-.397 1.653-.388m.005 1.278q-.46 0-.831.226-.367.222-.58.605a1.73 1.73 0 0 0-.209.848q.005.465.209.844.209.38.567.601.362.222.827.222a1.57 1.57 0 0 0 1.163-.499q.226-.24.349-.541.129-.303.124-.64a1.66 1.66 0 0 0-.213-.826 1.65 1.65 0 0 0-.575-.61 1.5 1.5 0 0 0-.831-.23M142.588 79.09V68.183h.699V79.09zm2.016-7.418a1.17 1.17 0 0 0-.503-.87q-.439-.31-1.142-.31-.495 0-.848.148-.354.15-.541.405a.99.99 0 0 0-.069 1.057q.129.2.346.341.217.136.481.23t.533.158l.818.204q.495.115.95.311.46.197.823.495.366.298.579.72.213.421.213.988 0 .768-.392 1.351-.392.58-1.133.908-.738.324-1.786.324-1.018 0-1.768-.315a2.64 2.64 0 0 1-1.168-.92q-.417-.606-.452-1.475h1.556q.034.456.281.758t.644.452q.4.15.894.15.516 0 .904-.154a1.47 1.47 0 0 0 .614-.435q.221-.28.225-.656a.83.83 0 0 0-.2-.563 1.5 1.5 0 0 0-.55-.375 5 5 0 0 0-.818-.273l-.993-.255q-1.078-.278-1.704-.84-.622-.566-.622-1.504 0-.771.417-1.35a2.76 2.76 0 0 1 1.147-.9q.723-.324 1.64-.324.929 0 1.628.324.703.32 1.104.89.4.568.413 1.305z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#B4B4B4",
      fillOpacity: "0.5",
      d: "M137 44h94v3h-94zM137 51h94v3h-94zM137 58h49v3h-49z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "69",
      height: "67",
      x: "53",
      y: "46",
      fill: "#EBEBEB",
      rx: "5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      stroke: "#848484",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeOpacity: "0.6",
      strokeWidth: "1.5",
      d: "M72 68v17.476l15.39 6.977 15.39-6.977V68.001M96.647 85.032l3.188-1.447"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      stroke: "#848484",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeOpacity: "0.6",
      strokeWidth: "1.5",
      d: "M93.162 72.374v.002l-5.772 2.625L72 68 87.39 61l15.39 7-7.981 3.63"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      stroke: "#848484",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeOpacity: "0.6",
      strokeWidth: "1.5",
      d: "m72 68 15.39-7 15.39 7M87.39 75.096v17.068"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      stroke: "#848484",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeOpacity: "0.6",
      strokeWidth: "1.5",
      d: "m83.393 64.432 13.615 6.193v4.64l-3.846 1.75v-4.64L79.545 66.18"
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
      id: "filter0_d_1651_1025",
      width: "227",
      height: "115",
      x: "0",
      y: "0",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology", {
        in: "SourceAlpha",
        operator: "dilate",
        radius: "1",
        result: "effect1_dropShadow_1651_1025"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset", {
        dy: "4"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
        stdDeviation: "2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
        in2: "hardAlpha",
        operator: "out"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        values: "0 0 0 0 0.760077 0 0 0 0 0.858475 0 0 0 0 0.932274 0 0 0 0.37 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_1651_1025"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_1651_1025",
        result: "shape"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
      id: "filter1_d_1651_1025",
      width: "227",
      height: "115",
      x: "30",
      y: "26",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology", {
        in: "SourceAlpha",
        operator: "dilate",
        radius: "1",
        result: "effect1_dropShadow_1651_1025"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset", {
        dy: "4"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
        stdDeviation: "2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
        in2: "hardAlpha",
        operator: "out"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        values: "0 0 0 0 0.760077 0 0 0 0 0.858475 0 0 0 0 0.932274 0 0 0 0.37 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_1651_1025"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_1651_1025",
        result: "shape"
      })]
    })]
  })]
}));

/***/ }),

/***/ "./src/components/icons/WishlistIcon.jsx":
/*!***********************************************!*\
  !*** ./src/components/icons/WishlistIcon.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "248",
  height: "135",
  fill: "none",
  viewBox: "0 0 248 135",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    opacity: "0.5",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
      filter: "url(#filter0_d_1651_1151)",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        width: "175",
        height: "88",
        x: "5",
        y: "1",
        fill: "#fff",
        rx: "5"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#EBEBEB",
      d: "M86.38 19.576h78.839v2.516H86.38zM86.38 25.447h78.839v2.516H86.38zM86.38 31.076h78.839v2.516H86.38zM86.38 36.947h78.839v2.516H86.38zM86.38 42.575h78.727v2.654H86.38zM86.38 48.767h41.097v2.516H86.38zM86.38 59.382h40.69v13.269H86.38z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "57.871",
      height: "56.194",
      x: "20.038",
      y: "16.038",
      fill: "#EBEBEB",
      rx: "5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      stroke: "#ACACAC",
      strokeMiterlimit: "10",
      strokeWidth: "1.5",
      d: "M68.039 36.567a13.2 13.2 0 0 0-8.1-5.83L56.864 30a5.94 5.94 0 0 1-5.554 3.85c-2.54 0-4.703-1.599-5.555-3.85l-3.075.738a13.2 13.2 0 0 0-8.1 5.83L32 40.687l6.586 4.556 2.427-4.037h.106V59.12h20.386V41.209h.105l2.427 4.037 6.586-4.556-2.582-4.12z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "#949494",
      d: "m72.42 25.374-.005-.002-.015-.009-.058-.032-.21-.12a17.631 17.631 0 0 1-2.972-2.22c-1.612-1.503-3.319-3.734-3.319-6.483 0-2.05 1.725-3.676 3.808-3.676 1.225 0 2.321.56 3.02 1.436a3.85 3.85 0 0 1 3.02-1.437c2.082 0 3.808 1.627 3.808 3.677 0 2.749-1.708 4.98-3.319 6.482a17.6 17.6 0 0 1-3.183 2.341l-.057.032-.016.009-.005.002-.002.001a.53.53 0 0 1-.493 0z"
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    filter: "url(#filter1_d_1651_1151)",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "182.875",
      height: "91.438",
      x: "60",
      y: "34",
      fill: "#fff",
      rx: "5"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#EBEBEB",
    d: "M144.658 53.324h82.014v2.617h-82.014zM144.658 59.432h82.014v2.617h-82.014zM144.658 65.287h82.014v2.617h-82.014zM144.658 71.394h82.014v2.617h-82.014zM144.658 77.249h81.897v2.761h-81.897zM144.658 83.69h42.752v2.617h-42.752zM144.658 94.733h42.329v13.803h-42.329z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "60.202",
    height: "58.457",
    x: "75.643",
    y: "49.643",
    fill: "#EBEBEB",
    rx: "5"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#6A85CE",
    d: "m129.768 60.79-.005-.003-.019-.01-.067-.038q-.088-.048-.246-.14a20.574 20.574 0 0 1-3.472-2.594c-1.883-1.755-3.877-4.362-3.877-7.574 0-2.395 2.016-4.295 4.449-4.295a4.5 4.5 0 0 1 3.528 1.679 4.5 4.5 0 0 1 3.528-1.679c2.433 0 4.449 1.9 4.449 4.295 0 3.212-1.995 5.819-3.877 7.573a20.6 20.6 0 0 1-3.473 2.594q-.158.093-.246.142l-.067.037-.018.01-.006.002-.002.002a.61.61 0 0 1-.576 0z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    stroke: "#ACACAC",
    strokeMiterlimit: "10",
    strokeWidth: "1.5",
    d: "M109.246 67.677c2.516 5.884 8.118 8.367 16.543 3.939.658-.345 1.452.117 1.452.855v14.156c0 1.538-1.262 2.786-2.817 2.786H85.939c-1.555 0-2.817-1.248-2.817-2.786V84.52c0-5.829 5.51-6.411 9.235-7.754a7.3 7.3 0 0 0 2.658-1.676c3.778-3.746 7.74-6.241 12.292-8.174.741-.315 1.623.03 1.937.762zM127.15 84.519H83.122"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    stroke: "#ACACAC",
    strokeMiterlimit: "10",
    strokeWidth: "1.5",
    d: "M127.195 79.56h-9.434c-2.769 0-5.012 2.221-5.012 4.957h.419M104.3 68.505l2.188 3.596M100.578 70.893l2.187 3.594M96.856 73.444l1.808 2.976"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
      id: "filter0_d_1651_1151",
      width: "185",
      height: "98",
      x: "0",
      y: "0",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology", {
        in: "SourceAlpha",
        operator: "dilate",
        radius: "1",
        result: "effect1_dropShadow_1651_1151"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset", {
        dy: "4"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
        stdDeviation: "2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
        in2: "hardAlpha",
        operator: "out"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        values: "0 0 0 0 0.760077 0 0 0 0 0.858475 0 0 0 0 0.932274 0 0 0 0.37 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_1651_1151"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_1651_1151",
        result: "shape"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
      id: "filter1_d_1651_1151",
      width: "192.875",
      height: "101.438",
      x: "55",
      y: "33",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology", {
        in: "SourceAlpha",
        operator: "dilate",
        radius: "1",
        result: "effect1_dropShadow_1651_1151"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset", {
        dy: "4"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
        stdDeviation: "2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
        in2: "hardAlpha",
        operator: "out"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        values: "0 0 0 0 0.760077 0 0 0 0 0.858475 0 0 0 0 0.932274 0 0 0 0.37 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_1651_1151"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_1651_1151",
        result: "shape"
      })]
    })]
  })]
}));

/***/ }),

/***/ "./src/components/icons/WonderCartIcon.jsx":
/*!*************************************************!*\
  !*** ./src/components/icons/WonderCartIcon.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "235",
  height: "127",
  fill: "none",
  viewBox: "0 0 235 127",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    opacity: "0.5",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
      filter: "url(#filter0_d_1651_1228)",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
        width: "149.994",
        height: "90.319",
        x: "5",
        y: "13",
        fill: "#fff",
        rx: "5"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "52.417",
      height: "75.804",
      x: "13.064",
      y: "19.451",
      fill: "#EBEBEB",
      rx: "5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
      stroke: "#4C4C4E",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      opacity: "0.5",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M40.363 78.334h-7.178V85h7.178zM33.185 78.333c-1.637-.405-2.797-1.49-2.956-2.766L26.903 49h19.741l-3.327 26.568c-.16 1.276-1.32 2.36-2.954 2.765M46.312 51.667H27.235M41.26 55.667h-8.973M39.466 58.334h-5.384"
      })
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    filter: "url(#filter1_d_1651_1228)",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "186",
      height: "117",
      x: "44",
      y: "6",
      fill: "#fff",
      rx: "5"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "65",
    height: "99",
    x: "54",
    y: "14",
    fill: "#EBEBEB",
    rx: "5"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    stroke: "#949494",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M92.257 48.074H80.095v6.043h12.162zM101.378 42.03h-4.645c-.945 0-1.876.218-2.72.64l-1.487.739a6.1 6.1 0 0 1-2.72.638h-9.713v-4.03h9.713c.945 0 1.875-.218 2.72-.64l1.486-.738a6.1 6.1 0 0 1 2.72-.639h4.646v4.031M83.135 44.045v4.03M89.216 44.045v4.03M90.23 54.117a5.59 5.59 0 0 0 3.845 5.302c3.15 1.044 5.276 3.974 5.276 7.274v23.681a2.02 2.02 0 0 1-2.027 2.015H75.027A2.02 2.02 0 0 1 73 90.374V66.693a7.67 7.67 0 0 1 5.276-7.274 5.59 5.59 0 0 0 3.846-5.302"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    stroke: "#949494",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M94.284 66.204H78.068v22.158h16.216zM78.068 71.24h16.216M82.122 77.283h8.108M83.135 82.318h6.081"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#EBEBEB",
    d: "M129 30h91v3h-91z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#BEBEBE",
    d: "M129.506 22v-5.818h1.23v2.4h2.497v-2.4h1.227V22h-1.227v-2.403h-2.497V22zm11.315-2.91q0 .953-.361 1.62a2.5 2.5 0 0 1-.977 1.02 2.76 2.76 0 0 1-1.386.35q-.775 0-1.392-.353a2.5 2.5 0 0 1-.975-1.02q-.358-.667-.358-1.616 0-.952.358-1.62.359-.668.975-1.017a2.76 2.76 0 0 1 1.392-.352q.77 0 1.386.352.62.35.977 1.018.361.667.361 1.619m-1.247 0q0-.616-.185-1.039a1.4 1.4 0 0 0-.514-.642 1.4 1.4 0 0 0-.778-.219q-.446 0-.779.22-.332.218-.517.641-.182.423-.182 1.04 0 .616.182 1.04.185.423.517.642.333.218.779.218.445 0 .778-.218.333-.219.514-.642.185-.424.185-1.04m7.025-2.908V22h-1.063l-2.531-3.662h-.043V22h-1.23v-5.818h1.08l2.511 3.659h.051v-3.66zM147.615 22v-5.818h3.921v1.014h-2.691v1.386h2.489v1.015h-2.489v1.389h2.702V22zm4.558-5.818h1.377l1.327 2.506h.057l1.327-2.506h1.377l-2.122 3.761V22h-1.221v-2.057zm11.145 1.673a.72.72 0 0 0-.292-.534q-.26-.19-.702-.19-.301 0-.509.085a.7.7 0 0 0-.318.23.55.55 0 0 0-.108.335.47.47 0 0 0 .066.273.7.7 0 0 0 .201.202q.128.082.296.145.167.06.358.102l.522.125q.381.085.699.227t.551.35q.234.207.361.488.13.282.134.645a1.6 1.6 0 0 1-.273.926q-.267.39-.773.605-.502.213-1.213.213-.705 0-1.227-.216a1.8 1.8 0 0 1-.813-.639q-.29-.426-.304-1.054h1.191a.9.9 0 0 0 .167.489.93.93 0 0 0 .401.293q.253.096.571.096.312 0 .543-.09a.83.83 0 0 0 .36-.254.58.58 0 0 0 .128-.372q0-.195-.116-.33a.9.9 0 0 0-.335-.227 3.4 3.4 0 0 0-.537-.17l-.634-.16q-.735-.178-1.162-.559-.426-.38-.423-1.025-.003-.529.281-.924.287-.394.787-.616a2.8 2.8 0 0 1 1.136-.222q.648 0 1.131.222.486.222.756.616.27.396.278.915zm7.433 1.236q0 .951-.361 1.62a2.5 2.5 0 0 1-.977 1.02q-.616.348-1.387.348-.775 0-1.392-.352a2.5 2.5 0 0 1-.974-1.02q-.358-.667-.358-1.616 0-.952.358-1.62.357-.668.974-1.017a2.76 2.76 0 0 1 1.392-.352q.77 0 1.387.352.619.35.977 1.018.36.667.361 1.619m-1.247 0q0-.617-.185-1.04a1.4 1.4 0 0 0-.514-.642 1.4 1.4 0 0 0-.779-.219q-.446 0-.778.22a1.4 1.4 0 0 0-.517.641q-.182.423-.182 1.04 0 .616.182 1.04.184.423.517.642.332.218.778.218.447 0 .779-.218.332-.219.514-.642.185-.424.185-1.04M172.337 22h-1.319l2.009-5.818h1.585L176.618 22H175.3l-1.458-4.489h-.045zm-.083-2.287h3.114v.96h-3.114zM177.318 22v-5.818h2.296q.662 0 1.127.253.467.249.711.696.246.443.247 1.022 0 .58-.25 1.023a1.72 1.72 0 0 1-.725.69q-.471.248-1.142.248h-1.463v-.986h1.265q.354 0 .585-.122a.8.8 0 0 0 .346-.344q.117-.221.117-.509 0-.29-.117-.505a.77.77 0 0 0-.346-.338 1.3 1.3 0 0 0-.591-.122h-.83V22z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#EBEBEB",
    d: "M129 37h91v3h-91zM129 44h91v3h-91z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#FDF4B1",
    d: "M129 51h91v33h-91z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#EBEBEB",
    d: "M129 89h91v3h-91z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M156.495 65v-6.545h2.73q.735 0 1.23.207.5.209.748.582.252.374.253.866 0 .375-.157.668a1.4 1.4 0 0 1-.431.483 1.7 1.7 0 0 1-.636.268v.064q.396.02.731.214.339.195.544.543.204.345.204.819 0 .527-.268.943a1.83 1.83 0 0 1-.777.651q-.508.237-1.233.237zm1.582-1.275h.978q.515 0 .758-.195a.65.65 0 0 0 .246-.544.8.8 0 0 0-.118-.434.76.76 0 0 0-.336-.285 1.2 1.2 0 0 0-.521-.102h-1.007zm0-2.58h.876q.26 0 .46-.086a.67.67 0 0 0 .429-.642.63.63 0 0 0-.234-.518q-.233-.188-.629-.188h-.902zm8.355-2.69h1.579v4.221q0 .732-.349 1.276-.348.54-.971.837-.624.294-1.448.294-.834 0-1.457-.294a2.3 2.3 0 0 1-.969-.837q-.345-.543-.345-1.276v-4.221h1.582v4.084q0 .339.147.604.15.266.419.416.268.15.623.15.354 0 .62-.15.268-.15.419-.416.15-.265.15-.604zm2.244 0h1.768l1.384 2.739h.057l1.384-2.74h1.767l-2.394 4.36V65h-1.572v-2.186zm11.971 0V65h-1.579v-5.069h-.038l-1.464.895v-1.368l1.614-1.003z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#B40000",
    d: "M160.791 72.593a1.2 1.2 0 0 0-.16-.355 1 1 0 0 0-.259-.265 1.1 1.1 0 0 0-.351-.163 1.6 1.6 0 0 0-.435-.058q-.476 0-.825.23-.345.23-.533.671-.189.438-.189 1.065 0 .63.182 1.073.182.445.528.678.345.234.837.233.435 0 .735-.14.303-.144.46-.406t.157-.617l.294.035h-1.592v-1.153h2.822v.866q0 .878-.374 1.505a2.5 2.5 0 0 1-1.022.962q-.649.335-1.493.335-.936 0-1.646-.405a2.8 2.8 0 0 1-1.106-1.157q-.396-.755-.396-1.79 0-.805.24-1.429a3 3 0 0 1 .668-1.06q.431-.435.997-.66.569-.222 1.224-.223.569 0 1.058.163.492.163.869.46.38.297.617.707.237.409.294.898zM163.395 77v-6.546h4.564v1.285h-2.982v1.343h2.748v1.288h-2.748v1.345h2.982V77zm5.34-5.26v-1.285h5.533v1.284h-1.985V77h-1.56v-5.26zm11.253-1.285V77h-1.579v-5.069h-.038l-1.464.895v-1.368l1.614-1.004zM183.381 77v-6.546h4.468v1.285h-2.886v1.343h2.602v1.288h-2.602V77zm5.265 0v-6.546h2.704q.735 0 1.268.266.537.261.828.754.291.49.291 1.16 0 .681-.297 1.157a1.9 1.9 0 0 1-.844.722q-.546.247-1.294.247h-1.71v-1.247h1.416q.357 0 .597-.093a.75.75 0 0 0 .368-.287.9.9 0 0 0 .124-.499.93.93 0 0 0-.124-.502.75.75 0 0 0-.368-.3 1.5 1.5 0 0 0-.597-.102h-.78V77zm3.685-2.992 1.63 2.992h-1.726l-1.598-2.992zM194.605 77v-6.546h4.564v1.285h-2.982v1.343h2.748v1.288h-2.748v1.345h2.982V77zm5.554 0v-6.546h4.564v1.285h-2.982v1.343h2.749v1.288h-2.749v1.345h2.982V77z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    clipPath: "url(#clip0_1651_1228)",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "m145.619 68.338-4.297-2.312m-3.056-1.18 2.81 9.36 1.818-1.447 2.313.207 1.818-1.447 2.314.206-2.811-9.36c-.183-.61-.784-1-1.412-.888a28 28 0 0 0-6.162 1.85 1.25 1.25 0 0 0-.688 1.519m6.072.724-.004.002.001.004.004-.002zm-.207.062a.217.217 0 0 0 .269.145.215.215 0 0 0 .144-.269.216.216 0 0 0-.413.124m-1.528 3.161-.004.002.002.004.004-.002zm-.206.062a.215.215 0 1 0 .413-.124.215.215 0 0 0-.413.124"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#EBEBEB",
    d: "M129 99h42.329v13.803H129z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
    cx: "44.5",
    cy: "33.5",
    r: "20.5",
    fill: "#6A85CE"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    clipPath: "url(#clip1_1651_1228)",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      stroke: "#fff",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "m41.424 35.236 7.472-4.02m5.315-2.052L49.324 45.44l-3.16-2.515-4.024.358-3.16-2.515-4.023.358 4.887-16.275c.319-1.06 1.364-1.738 2.455-1.544a48.5 48.5 0 0 1 10.714 3.217c1.017.44 1.516 1.58 1.198 2.641m-10.559 1.26.007.002-.002.007-.007-.002zm.36.108a.375.375 0 1 1-.72-.216.375.375 0 0 1 .72.216m2.656 5.496.007.002-.002.007-.007-.002zm.36.108a.375.375 0 1 1-.72-.216.375.375 0 0 1 .72.216"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
      id: "clip0_1651_1228",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fill: "#fff",
        d: "M148.22 59 135 62.97l3.97 13.22 13.22-3.97z"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
      id: "clip1_1651_1228",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fill: "#fff",
        d: "m36.902 19 22.986 6.902-6.902 22.986L30 41.986z"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
      id: "filter0_d_1651_1228",
      width: "159.994",
      height: "100.319",
      x: "0",
      y: "7",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology", {
        in: "SourceAlpha",
        operator: "dilate",
        radius: "5",
        result: "effect1_dropShadow_1651_1228"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset", {
        dy: "-1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
        in2: "hardAlpha",
        operator: "out"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        values: "0 0 0 0 0.760077 0 0 0 0 0.858475 0 0 0 0 0.932274 0 0 0 0.13 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_1651_1228"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_1651_1228",
        result: "shape"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
      id: "filter1_d_1651_1228",
      width: "194.6",
      height: "125.6",
      x: "39.7",
      y: "0.7",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology", {
        in: "SourceAlpha",
        operator: "dilate",
        radius: "3",
        result: "effect1_dropShadow_1651_1228"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset", {
        dy: "-1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
        stdDeviation: "0.65"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
        in2: "hardAlpha",
        operator: "out"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        values: "0 0 0 0 0.760077 0 0 0 0 0.858475 0 0 0 0 0.932274 0 0 0 0.13 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_1651_1228"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_1651_1228",
        result: "shape"
      })]
    })]
  })]
}));

/***/ }),

/***/ "./src/components/icons/YoastPremiumIcon.jsx":
/*!***************************************************!*\
  !*** ./src/components/icons/YoastPremiumIcon.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  width: "250",
  height: "127",
  fill: "none",
  viewBox: "0 0 250 127",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    filter: "url(#filter0_d_1651_1134)",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "234",
      height: "111",
      x: "8",
      y: "9",
      fill: "#fff",
      rx: "5"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "url(#pattern0_1651_1134)",
    d: "M97 22h50v17H97z",
    opacity: "0.67"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    width: "203",
    height: "23",
    x: "23",
    y: "82",
    fill: "#DDA93B",
    rx: "10"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    filter: "url(#filter1_d_1651_1134)",
    shapeRendering: "crispEdges",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "203",
      height: "22",
      x: "23",
      y: "50",
      fill: "#fff",
      fillOpacity: "0.5",
      rx: "5"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "204",
      height: "23",
      x: "22.5",
      y: "49.5",
      stroke: "#D5AD46",
      rx: "5.5"
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    stroke: "#C58224",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M37.175 55.187a.352.352 0 0 1 .65 0l1.328 3.194c.05.122.165.205.297.216l3.449.276a.352.352 0 0 1 .2.618l-2.627 2.25a.35.35 0 0 0-.114.35l.803 3.365a.352.352 0 0 1-.525.381l-2.953-1.803a.35.35 0 0 0-.366 0l-2.953 1.803a.352.352 0 0 1-.525-.381l.803-3.366a.35.35 0 0 0-.114-.348l-2.627-2.251a.352.352 0 0 1 .2-.618l3.45-.276a.35.35 0 0 0 .296-.216z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#F8F9FA",
    stroke: "#2B2B2B",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M221.669 67.15c-9.533-9.533-24.986-9.533-34.519 0s-9.533 24.989 0 34.522 24.986 9.533 34.519 0 9.533-24.989 0-34.522"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#fff",
    d: "m225.814 97.817.105-.105 14.728 14.745-7.212 7.188-14.728-14.741.058-.058"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    stroke: "#2B2B2B",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "m225.814 97.817.105-.105 14.728 14.745-7.212 7.188-14.728-14.741.058-.058"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    clipPath: "url(#clip0_1651_1134)",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "url(#paint0_linear_1651_1134)",
      d: "M200.526 76.252h-5.23l5.116 13.136a4.2 4.2 0 0 1 0 3.062c-.452 1.15-1.212 2.378-3.384 2.67l-.322.044h-1.01a4.585 4.585 0 0 1-4.572-4.564V77.774a4.584 4.584 0 0 1 4.572-4.574h11.652l-4.132 11.478z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "url(#paint1_linear_1651_1134)",
      d: "M216.71 77.774v17.39h-12.422a26 26 0 0 0 1.922-4.294l6.572-17.622a4.6 4.6 0 0 1 3.928 4.526"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "url(#paint2_linear_1651_1134)",
      d: "m213.492 69.15-8.004 21.45c-.678 1.896-1.364 3.4-2.096 4.558a10 10 0 0 1-1.358 1.744c-1.24 1.246-2.7 1.868-4.57 1.942v-3.016a5.1 5.1 0 0 0 1.8-.664c1.038-.648 1.542-1.6 1.87-2.434a4.97 4.97 0 0 0 0-3.62l-4.714-12.092h3.544l3.2 10.048 6.458-17.916z"
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#fff",
    d: "M88.759 98v-8.727h3.443q.993 0 1.692.379.697.375 1.065 1.044.37.665.37 1.534 0 .87-.374 1.534-.376.665-1.087 1.036-.708.37-1.713.37H89.96v-1.478h1.897q.532 0 .877-.183.35-.188.52-.516.175-.333.175-.763 0-.435-.175-.758a1.17 1.17 0 0 0-.52-.507q-.35-.184-.886-.184h-1.244V98zm8.13 0v-8.727h3.442q.989 0 1.688.353.703.35 1.069.993.37.64.371 1.505 0 .87-.375 1.495a2.43 2.43 0 0 1-1.087.955q-.707.333-1.713.332h-2.305v-1.483h2.007q.528 0 .878-.145.35-.144.52-.434.175-.29.175-.72 0-.435-.175-.733a1.08 1.08 0 0 0-.524-.452q-.35-.158-.882-.158h-1.245V98zm4.712-3.972L103.77 98h-2.037l-2.122-3.972zM105.123 98v-8.727h5.881v1.521h-4.036v2.08h3.733v1.52h-3.733v2.085h4.053V98zm7.708-8.727h2.275l2.404 5.863h.102l2.403-5.863h2.276V98h-1.79v-5.68h-.072l-2.259 5.637h-1.219l-2.258-5.659h-.073V98h-1.789zm13.185 0V98h-1.845v-8.727zm7.269 0h1.845v5.667q0 .956-.456 1.67-.452.717-1.265 1.117-.814.396-1.897.397-1.087 0-1.9-.397a3.05 3.05 0 0 1-1.266-1.116q-.452-.716-.452-1.67v-5.668h1.846v5.51q0 .498.217.886.222.388.622.61.4.22.933.221.537 0 .934-.222.4-.22.617-.609.222-.388.222-.886zm3.723 0h2.276l2.403 5.863h.103l2.403-5.863h2.276V98h-1.79v-5.68h-.073l-2.258 5.637h-1.219l-2.258-5.659h-.073V98h-1.79zM78.616 88.504a.415.415 0 0 0-.222-.459.426.426 0 0 0-.505.094l-4.781 5.278a.41.41 0 0 0-.071.448c.068.15.218.246.385.246h3.697l-.735 3.385c-.04.185.051.373.222.459.17.085.378.047.505-.094l4.781-5.278a.41.41 0 0 0 .071-.448.42.42 0 0 0-.385-.246h-3.697z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M50.22 57.727h1.488l1.78 3.218h.07l1.78-3.218h1.487l-2.645 4.56V65h-1.314v-2.713zm8.845 7.38q-.798 0-1.385-.352a2.4 2.4 0 0 1-.909-.984q-.32-.631-.32-1.477 0-.845.32-1.48.324-.637.91-.988.585-.351 1.384-.352.8 0 1.385.352.586.351.906.987.323.636.323 1.481t-.323 1.477q-.32.633-.906.984-.585.352-1.385.352m.007-1.03q.434 0 .725-.238.29-.242.433-.646.146-.405.146-.902 0-.501-.146-.906a1.43 1.43 0 0 0-.433-.65 1.1 1.1 0 0 0-.725-.241q-.444 0-.738.241-.292.242-.437.65-.142.405-.142.906 0 .496.142.902.145.405.437.646.294.238.738.238m7.174-1.371v-3.16h1.286V65h-1.246v-.97h-.057a1.64 1.64 0 0 1-.608.75q-.418.291-1.033.291-.535 0-.948-.238a1.65 1.65 0 0 1-.64-.7q-.23-.461-.23-1.114v-3.474h1.285v3.275q0 .518.284.824.285.305.746.305.285 0 .55-.139a1.1 1.1 0 0 0 .437-.412q.174-.276.174-.692M68.854 65v-5.455H70.1v.91h.057a1.36 1.36 0 0 1 1.346-.988q.106 0 .238.011.135.007.224.025v1.182a1.4 1.4 0 0 0-.26-.05 2.4 2.4 0 0 0-.337-.024 1.3 1.3 0 0 0-.632.153q-.277.148-.437.415a1.17 1.17 0 0 0-.16.614V65zm10.454-5.273a.97.97 0 0 0-.419-.725q-.364-.26-.951-.26-.412 0-.707.125a1.05 1.05 0 0 0-.451.338.82.82 0 0 0-.057.88.94.94 0 0 0 .288.284q.18.114.401.192.22.078.444.132l.682.17q.411.096.792.26.383.162.685.411.306.249.483.6.178.353.178.824 0 .64-.327 1.126-.327.483-.945.756-.614.27-1.488.27-.848 0-1.473-.263a2.2 2.2 0 0 1-.973-.767q-.348-.504-.377-1.228h1.296q.029.38.235.632t.536.376q.333.124.746.124.429 0 .753-.128a1.2 1.2 0 0 0 .51-.362.87.87 0 0 0 .19-.547.7.7 0 0 0-.168-.468 1.2 1.2 0 0 0-.458-.313 4.4 4.4 0 0 0-.682-.227l-.827-.213q-.9-.23-1.42-.7-.519-.472-.519-1.253 0-.643.348-1.126a2.3 2.3 0 0 1 .955-.75q.604-.27 1.367-.27.775 0 1.357.27.585.267.92.743.333.472.344 1.087zM81.793 65v-5.455h1.286V65zm.647-6.229a.75.75 0 0 1-.526-.202.65.65 0 0 1-.22-.494q0-.29.22-.493a.74.74 0 0 1 .526-.206q.308 0 .525.206.22.203.22.493a.65.65 0 0 1-.22.494.74.74 0 0 1-.525.202m4.685.774v.995h-3.136v-.995zm-2.362-1.306h1.285v5.12q0 .26.079.398.081.135.213.185.13.05.29.05.122 0 .221-.018.103-.018.156-.032l.217 1.005q-.103.035-.295.078a2.4 2.4 0 0 1-.462.05q-.482.013-.87-.146a1.35 1.35 0 0 1-.614-.504q-.223-.342-.22-.853zm5.793 6.868q-.821 0-1.417-.341a2.3 2.3 0 0 1-.913-.973q-.32-.633-.32-1.488 0-.842.32-1.478.323-.639.902-.994.58-.359 1.36-.359.505 0 .952.164.45.16.795.497.349.337.547.86.2.518.2 1.235v.394H88.51v-.866h3.239a1.4 1.4 0 0 0-.16-.657 1.16 1.16 0 0 0-.437-.458 1.23 1.23 0 0 0-.646-.167q-.395 0-.692.192a1.3 1.3 0 0 0-.466.497 1.4 1.4 0 0 0-.166.67v.757q0 .477.174.817.174.338.486.519.312.177.731.177.282 0 .508-.078a1.1 1.1 0 0 0 .394-.238 1 1 0 0 0 .253-.387l1.2.135a1.9 1.9 0 0 1-.433.83q-.316.353-.81.548-.495.192-1.13.191"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
      id: "paint0_linear_1651_1134",
      x1: "199.236",
      x2: "199.236",
      y1: "95.164",
      y2: "73.202",
      gradientUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        stopColor: "#570732"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.02",
        stopColor: "#5D0936"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.16",
        stopColor: "#771549"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.3",
        stopColor: "#8B1D58"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.47",
        stopColor: "#992362"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.67",
        stopColor: "#A12768"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "1",
        stopColor: "#A4286A"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
      id: "paint1_linear_1651_1134",
      x1: "210.498",
      x2: "210.498",
      y1: "95.164",
      y2: "73.248",
      gradientUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        stopColor: "#570732"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.02",
        stopColor: "#5D0936"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.16",
        stopColor: "#771549"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.3",
        stopColor: "#8B1D58"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.47",
        stopColor: "#992362"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.67",
        stopColor: "#A12768"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "1",
        stopColor: "#A4286A"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
      id: "paint2_linear_1651_1134",
      x1: "204.956",
      x2: "204.956",
      y1: "69.15",
      y2: "98.85",
      gradientUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        stopColor: "#77B227"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.47",
        stopColor: "#75B027"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.64",
        stopColor: "#6EAB27"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.75",
        stopColor: "#63A027"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.85",
        stopColor: "#529228"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.93",
        stopColor: "#3C8028"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "1",
        stopColor: "#246B29"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
      id: "filter0_d_1651_1134",
      width: "248.8",
      height: "125.8",
      x: "0.6",
      y: "0.6",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology", {
        in: "SourceAlpha",
        operator: "dilate",
        radius: "5",
        result: "effect1_dropShadow_1651_1134"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset", {
        dy: "-1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
        stdDeviation: "1.2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
        in2: "hardAlpha",
        operator: "out"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        values: "0 0 0 0 0.760077 0 0 0 0 0.858475 0 0 0 0 0.932274 0 0 0 0.13 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_1651_1134"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_1651_1134",
        result: "shape"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
      id: "filter1_d_1651_1134",
      width: "218.2",
      height: "37.2",
      x: "14.4",
      y: "42.4",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology", {
        in: "SourceAlpha",
        radius: "1",
        result: "effect1_dropShadow_1651_1134"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset", {
        dx: "-1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
        stdDeviation: "3.8"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
        in2: "hardAlpha",
        operator: "out"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        values: "0 0 0 0 0.978141 0 0 0 0 0.875727 0 0 0 0 0.754366 0 0 0 0.41 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_1651_1134"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_1651_1134",
        result: "shape"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
      id: "clip0_1651_1134",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fill: "#fff",
        d: "M189 69h30v30h-30z"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pattern", {
      id: "pattern0_1651_1134",
      width: "1",
      height: "1",
      patternContentUnits: "objectBoundingBox",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("use", {
        xlinkHref: "#image0_1651_1134",
        transform: "scale(.004 .01176)"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("image", {
      xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAABVCAQAAADKrzGNAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfoBw0CDy23SqNWAAASiUlEQVR42u1deXwUxbb+qichwZBAIotRAUHZIsuNIMgiEFGUAF4EE5Dn8vThC6LIIlsIZM5MCCFEuFfeVS4obiB4AwgXVEAWWYxo4AqIJCCLiiwCsgQSsk+9P0KSma7qmZ6ekER/ffyD2F1zurq+OlVnrWYwQORnaVHaBs1YMK8PBaXsKr+GMzgcfjyuGCbVemLeNF4QcKkPohCF++AvbVCCQ9jKtvEv6bo5tH980Bn1xDOIQaiu1tewEu/RV+bwekf27g4XYVKuJe6rIdBJYQP5TNzvNe8DLNm6CtwEU/e2eUklVN9R55vxHMVjR6KRxdcZgBzoxNNptz3SBLO2kVvQZzWntfgMbXzg382RSfPm1zUH+g8COg0t2Ye/+vwEP0y8+h/7veZQ13rQqQ4twmqdaptnaufYTY+bg12rQad6WIf/rdLnBOMTGmMOd+0gPwnkt2EjOrn91Ul8yQ7gMD+N3DrXioKVYH472vKOiEJzzd9YEEOLqcQc8loIekpo4SZ01Gz/Kz7EMjrscu0CgAPYAADUFk/jOdwp+eX2oEGTTchrBans9LSgvM3ortH2RyRjuWdZpTp4FjNUMr89aNDkPHO4a4edrpL0vHc1IL+OpPB5+jzrVIR3aDkSMLnCWWtCXnuXd9s4HittdRgx9INXc/Y6EmgNPsbdAHZhsAl5LdXe7ZF8rrTNGnT2DvIbwO+t0w1fYXvQAMo1B7pWgp5ucSxCHUmL9yNijMbMpl/EIxhoSnmtXd6zXpb619dFjIot9UE1KTCHuNZKOoWAJHe/wXBfIDepVks6G8tFl+sVy8iZpqT+WSWd6vEJknsTZv5kDtCfd3mPxa3Cna/pA3N4/syg/7fkzlQz5+VPDHrS3eglXM8wM9z+1Ipc6QAxU469WTu6Rw3QF33QAfegIYIAXMUFHMU+7AzZMTHfB763oC8eRCTuQWMEA8jFRRzFQbYjYPu0HB/4NkZ/RKEDWiAMCnJxBgfZl3w9nbxJ4xPI+vG+iERrNEIggBz8jCzsxOfunsgAWivkx+QFNalxlwqjRxGHAQjQuH8Na/EWfeM9Y3t3xxgMQT2N2wX4HIvoCwMAPIRXMVAWrIYDG2CnTACg/1NFN36gis3Vu4BLUrvSCYhFfelNB7ax162btIZWwUU0UF1Np+E1i7jtUT7XTYC3knZgEu31ApiueB0P6mi4j022bvViIkU6Fkg2SWfiWIIJlEsb8JjL9W/pAe9BTw4vfh0jPKa1bsdLqjD4jT39LgFysO01CfjsW2kV36gLcqAPvqV/6Eu8pFtoIXbrghyI5Fvo4xRd6WLkR8mOTA+QAwyjsHX2rVWyqI8ozsZIz5nM6Iu9FCsDva2kf1/X4C7etWg/hnmlir58dU/S3Z6aJbXCHozWMVCVNLxwv72z5ymKLZguXdRF6lq0Ay193vbmY4XGoi5SED6m2WqdTQa6o96PNQZ5NLZJ827c072lX7uHx35/aQYivObbzLHd9qjb/t5etBN9vOkpWvs0Pgq9iwneTRLEU4pae28iNDvljV5MsehncMp+bf1AUIVWI9AQs8aOLRRF+zUg7+DYiDBDfOvxdbZB1s3ym3PqF2wwMJV8oTSpT8UTTbVdsM5zBj1YaPK7Vwy7G82b5c3hAnpSm9K1BiEHgAZYR/fR7zIzyrHBIOQAUIevpC50TLaXF/xbp+ZRVevg05jo5vZ55KMRbpGOdao9M3FX5fIugl5dxloLV4uzdKWkL2Uv8zYGWyLqhgSEKe1ZLJZDbkk3xYeS2jyGZbhD2j4HyxCjtA8IqxtiiWCP4x1ckLarj/QFMsPRqrGw5+FfbITSPiAssIHSHsOxEvlVMVyzmkPuPSnCuywadakJ3UX1LG3ZFPwitLE4PpxTv1LSFYmNVz3kqsnGo4OkTS7mhaQ6bTeXcQgrU0ILp2KcZFUYYHvaulQlHc/jEelA/RNWulLx/9nIxnoax8byeImSFHl5EpKFLWOa1D7+yH9ywjmniXUI6cnhxal42ruycJFKXkeI5PIqTKafK0V65hGk0RuwIl71vLsKqFwbUJAr0fiqh25xmcVTJC2yLB2JRA0j/jJNw4M4I1nG0tJcep8ajFQJ39PKAzTOCfLyCXLdmooukFi2PGGWarVwvCXR2HNYf3rWCfIblHCWnmXPw6cEcOqKJ8V5gHEU4wR5edsiSmBjhdZjym0cBVeFm6HVBHpg5VwsmSSR28zAHtrBXdqLbhBeF02uu2gYBaPRUGhzwq+bdt03HQvogf8Il+uWTHJxHvWT2OWX0VvboWP9gMX6tIZOklx7iRZoPu9NrFdrJ6XTy0G/KBoqi/yrBfSS8jgeheAF4e45DHPvBadTylBxt+TjSKk0cPirkh33iRmn3fGNv4yhkt19FDk5bvkkycL+LH3vjq91DV437LBqhCeEi/PoHc2xqUMjJJrMSGoIAAo7ItzyP9+yWkCvTLd8UtQ5WRyd8sQgcR9LEC42R++Kvx+S2PzT3UMDAHSSvSQabxhasRndIdETFtKnnviGz8ARY0NV/KSwmfwmTXADMKspJeEXrMB94trKngcAhWeLPyvtXi2gV+6p4izOtP5bl9m3EOLUGOKG78mwRXr4Wj/Bd9p8S4bBorqX75/smWtcMeYaNG8fE4RiliSxnNkeoU9KfsIM3KbB50UwQAk/LjEovPExJQSE6fmvTmMUqtWpsn/SLaI/nOkcHCpg4q4WVfFXX+HeG68W6htlpImjUrFxRAn3liac1cV3mYZZ6Mmr1lO9mfitUo1EAxpPh/kXeEKYkM7G7yoKAPziiukrYbEaSH5660vpOnRlxVNHIUh6Q0az2ghGUlGg7tCm8mmpeoK0n193Yj5A9dBOaP6pXr6BGwqKVWdoheEelDmoewiorNM5WkW0FSO81tybCulsmc42gj3SMQYj5W6ZCspgC0NXlU15BWCixtmIPVLli3kXYaBuVM2wVmIHp17Ty3ZmtuCKUHLvAQCllWAZnyDdUYVpORBi9WU9pTA0Vt0o5F/qFtptBgRdDCdllitsthja7PgOo9xAXoCliKRe1o/KVzk/gG3kc4TVbXRZ6XEV0gPCMw7c+Lep0PaYV5yPqaviHU1xEHD4zle17dzo6V2ipqC/Boj9aCD18HaByxkgqUVpHF7gjdz+MhtvBS5VW0F+QOIB+l7wIQ+mCMqqOsQX+Z8dKly8kfzAgoVh+M0r5kJrFnwz+Ur8Yue8kNrzBtQ4wV3G/0LrS6PdBoqLsZYttG6Xpbf6AQB7n88XVIdkie5rmH7rL+xKh6jcoyZW0HlX8HhV4va5mXxFN5IXWXWlRjLwxDdxrxecZm/zt+mMph4EAP7LJMrYEPeRZC/nqhiJq8jf4qL10NAr5o3l4N4svpKx8iYfpqH3o8e8CdhksNjwFlabNuQ3QJ9+AYslQC1OqSKHrP1BiGdLrZbY6+XUxCv2QmueczP5Kjk+8TUAuuRNZJSDBWhHvawrPR0ecWNX8J8LsWqtWeESXyNDZXa4Q3Q/HqbKlKwTwt37vNEWxOic5bgG347k50XHhVwc5TgAOI4L+2QzL3LfDETg2QmPTbLZeNxJ42RpkJqgJ5zF3yR3n6A5voOelYquwms4e43FjranZnq5n+0pWPn5bU4CQPhPgjsoVNHta6SW4kmZjiMAQLn4VT3Lih/WPRwG8owcR6FdO1yIZUoPirC+of/ohwr9LyQJsvk0xTbVN8htz+M14eIF7uQMpVNitIzF6H6AmO25u6y8Oq4Y3wrD5wvfY1Suz+8SFn6dfOfUl3gJPU/AXMjjBadhq9OUnknc7R2/CtAn5rMxMvWez6FU44s8TeSySNBc1awU3EN8cpquqD41k8TntrpxhLw46w49fFODJVO1spdbJGtiez18C17WLLJwT+KbODAMzYimG3DrOll61k3SJR6YQuvIQI5ZuoXexDyJLXk0RJX2w/4lqkZ5U3Q9ZLbg3OWWCm7Kx6LRVZKsh21+vEThquAWuEaIVyjQIRrUEOONKkYS5FqTjvg8EU1XazIukIRPQ4b0l4Own4Z4KeOts3ZAdjCoAy+oc2HabZNkdSVQf49bRxz+S7i4a+bx8j9nHoGYwf8cveCR70CIm9oJ7Cz/c1qOk+1RTtE02ZM+hnfRyOCKmQnRVZZIHpVCGolEJGO36zrkAnpcsX8M5JpiU6yhz+06T31PCaW5OCBEhsponlgPG1sqSS+wYIW9p1tohvE3JCPrqnrKkqXedD+BqTdfJq5PbK6LXKVKtsJk2zPuIKc5GGxcN2LiCNXFGnJbI0AP4x0wAF2w11neVS+XcNbSH1pBwgGOTNpMI90XEdk701uFP2OyRjLz+oh42eWQJZLUpzDHFttzGq/jR9N5uqS4McPqEjOg9eWhCRe/2mqakm7RgGYUNouFXjgW+r4L3x+wXGjjxz8gmzzriG6hJZgCH4h/BDFY1BI76C9as8Q2Fp+hHKsAZ3mX7EP2Do4vtILwAIA87GRfYr/lxxkny+Y7Kf6NSls72qEbHoU7RWlvUF+taljbYC4PT2Yo8YlfOctVuiU7mqdAdoJ8CTqr82LsnR3fSiPMB1l8u40uxygxe29HisaJmQNoo0qsw4uzpcVF2Wxqu8+d+ZIfe4KnaR6VrLuAkR6TBsEKsADz6Lxq6kbBLllpC9lY69sa33Chltigs/wmF8UI8BDJLadvAqLjL7tZjJZAa7f9FetxhJ2GHw9HJwzU3BkTaLZkOlk5abS/gPU4yM6iBHfyNhisWVC1iEZL+D7Fl7vjizNwsDt4B/zVrRfOi6pVWowXpTxKsA3f4CiuIBCN0QmPakyxIqVX4h7IC+/oBPXEKl35M/oNkK0YEu/WfRDyytVO6KyhUYyB59NQ1kHqSuJJ6IYB0l80wgs6+GbKdW7rCuqBV7T5AqjqE1zGowtk38TxQ394VHvB2ejEPZI9vQL23/EQm4aqO0NuMaI9eYwm5iMaxksnM/CU3IQhR1AMdhvmexgDtY5AjBiPT1CNRNcRDcMnfrEE63tSRc55qKypShQOVUFfL2M4xVGRjpc6jz6SnHM9tAXR2okMk/PQ32BSyF7/vqRZ2xdbiuF4v1ph/82/J7438EOO16wpGtq7yhDcFR7JJuGaD73kWObfjtL1v1TdKHzs9TPmh0fTVQ+OzCFY4PVquwxRCW4TJKgE/wO7F0UMb1da+8Yo4WxAX6GMwRNdxOM039lh4BmIMDaWv2qo7nMTZhk5pcr2DE/THa48xl7ROltFeJNo/MO1bNINncUkWq6zv/34Ityto+E8TMFnVXD8CKOXkCwxLOW0AaNdjx3ScTIDXbLa0JyNRoYXknIF7yld6DFjB5NZlwa2QbKOKPIZvBbWXi/kAH2OCDZFR9LUJdjRVi/kgHVrSAc2A5fcNvoFg2mSROsoNDBAnN7yb4sFOvKQ92MARatPmvIqlEIt2WDeD73dHH7BkYVd2BS24dVC+EipwfnD8RR6Sy2MfGzGirA1Rp6yIODyUD4SD0vdR8XYgRVIN3JCPYVgJJ5DV4kgHWCLQt8t6yttV1lFm6hC8m1Tuavj6wwtdvfE2Y2KnsJI3C8V3d+xHovlp28ZiJ+lW460drRFa94cIaiHIFxHAa7gHE7gBH6gS1WruqQFXe+BjrwVbkUDcFzBORxV9jXI9HVSLQi41I1F8lZojAZguILfcRTfB+329Sg1asj68A5ohRAE4ApOsUPKNucyTPpelfSximJ8e2JKaFEvRPBWqI8GyMNFXMAxS8bMw9rrMoNJ1Up0WpXQ/HeaUN19UEwYqhXyhghXSd3J6u+FCXqVbEFpeg9y6CWsrVkm6H84SmpDf887nfeazubqrGDO91R/n8093TClW7If52PQDwzAVdzruZ6ebsPPqnBwFtXA96b9TPCMUHKTklFZcaislgvBkvRoj9+7ISEDYF1N9N5c3g1R8TA+C64Fkv2z/uZ+3aShiBMurq6J3pvLuzEtPBDHxVpSvBP2ipb/wDacvwd1zpGTC9aU9NoPegGTnSI36tIe6i1pfSct4isEyMHSaqb3pqQbB/4zREtv7Gar+Q6cCsm5Gqo0cdyPRzBI6vLNoAdr5js5piJnmPxHFWdKE6y68+5AWaWzm5hrgfJSTX0ayVzeDVPCWWUQDH86mE1MPFhTPTdB94ESD7DHYewzP3OtC2uu3+ae7iPZOzk2qP3pHohjFllr8qt3pqT7LO24D2u9+MFFNpwSa/ZDh6akV40mPwIpklOn1FSK9/1n6jxm0AS99lO6JWsYJkDb2XIeS/FPOlYb+mqCXrUSfxseQj90QDOEog4KkINTOM72sp2OPeQwx8ckk0wyyaSbSP8PqwrXwTJp9YUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjQtMDctMTNUMDI6MTU6NDQrMDA6MDCDk4ouAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI0LTA3LTEzVDAyOjE1OjQ0KzAwOjAw8s4ykgAAAABJRU5ErkJggg==",
      id: "image0_1651_1134",
      width: "250",
      height: "85",
      preserveAspectRatio: "none"
    })]
  })]
}));

/***/ }),

/***/ "./src/components/icons/YoastSeoIcon.jsx":
/*!***********************************************!*\
  !*** ./src/components/icons/YoastSeoIcon.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  width: "250",
  height: "127",
  fill: "none",
  viewBox: "0 0 250 127",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    filter: "url(#filter0_d_1651_1117)",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "234",
      height: "111",
      x: "8",
      y: "9",
      fill: "#fff",
      rx: "5"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "url(#pattern0_1651_1117)",
    d: "M97 22h50v17H97z",
    opacity: "0.67"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#ADA4A4",
    fillOpacity: "0.5",
    d: "M23 92h203v4H23zM23 102h203v4H23zM23 82h203v4H23z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
    filter: "url(#filter1_d_1651_1117)",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "203",
      height: "22",
      x: "23",
      y: "50",
      fill: "#fff",
      fillOpacity: "0.5",
      rx: "5",
      shapeRendering: "crispEdges"
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    stroke: "#8F2B63",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M37.175 55.187a.352.352 0 0 1 .65 0l1.328 3.194c.05.122.165.205.297.216l3.449.276a.352.352 0 0 1 .2.618l-2.627 2.25a.35.35 0 0 0-.114.35l.803 3.365a.352.352 0 0 1-.525.381l-2.953-1.803a.35.35 0 0 0-.366 0l-2.953 1.803a.352.352 0 0 1-.525-.381l.803-3.366a.35.35 0 0 0-.114-.348l-2.627-2.251a.352.352 0 0 1 .2-.618l3.45-.276a.35.35 0 0 0 .296-.216z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#F8F9FA",
    stroke: "#2B2B2B",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "M221.669 67.15c-9.533-9.533-24.986-9.533-34.519 0s-9.533 24.989 0 34.522 24.986 9.533 34.519 0 9.533-24.989 0-34.522"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#fff",
    d: "m225.814 97.817.105-.105 14.728 14.745-7.212 7.188-14.728-14.741.058-.058"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    stroke: "#2B2B2B",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.5",
    d: "m225.814 97.817.105-.105 14.728 14.745-7.212 7.188-14.728-14.741.058-.058"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
    clipPath: "url(#clip0_1651_1117)",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "url(#paint0_linear_1651_1117)",
      d: "M200.526 76.252h-5.23l5.116 13.136a4.2 4.2 0 0 1 0 3.062c-.452 1.15-1.212 2.378-3.384 2.67l-.322.044h-1.01a4.585 4.585 0 0 1-4.572-4.564V77.774a4.584 4.584 0 0 1 4.572-4.574h11.652l-4.132 11.478z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "url(#paint1_linear_1651_1117)",
      d: "M216.71 77.774v17.39h-12.422a26 26 0 0 0 1.922-4.294l6.572-17.622a4.6 4.6 0 0 1 3.928 4.526"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      fill: "url(#paint2_linear_1651_1117)",
      d: "m213.492 69.15-8.004 21.45c-.678 1.896-1.364 3.4-2.096 4.558a10 10 0 0 1-1.358 1.744c-1.24 1.246-2.7 1.868-4.57 1.942v-3.016a5.1 5.1 0 0 0 1.8-.664c1.038-.648 1.542-1.6 1.87-2.434a4.97 4.97 0 0 0 0-3.62l-4.714-12.092h3.544l3.2 10.048 6.458-17.916z"
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    fill: "#000",
    d: "M50.22 56.727h1.488l1.78 3.218h.07l1.78-3.218h1.487l-2.645 4.56V64h-1.314v-2.713zm8.845 7.38q-.798 0-1.385-.352a2.4 2.4 0 0 1-.909-.984q-.32-.631-.32-1.477 0-.845.32-1.48.324-.637.91-.988.585-.351 1.384-.352.8 0 1.385.352.586.351.906.987.323.636.323 1.481t-.323 1.477q-.32.633-.906.984-.585.351-1.385.351m.007-1.03q.434 0 .725-.238.29-.242.433-.646.146-.405.146-.902 0-.501-.146-.906a1.43 1.43 0 0 0-.433-.65 1.1 1.1 0 0 0-.725-.241q-.444 0-.738.241-.292.242-.437.65-.142.405-.142.906 0 .496.142.902.145.405.437.646.294.238.738.238m7.174-1.371v-3.16h1.286V64h-1.246v-.97h-.057a1.64 1.64 0 0 1-.608.75q-.418.291-1.033.291-.535 0-.948-.238a1.65 1.65 0 0 1-.64-.7q-.23-.461-.23-1.114v-3.474h1.285v3.275q0 .518.284.824.285.305.746.305.285 0 .55-.139a1.1 1.1 0 0 0 .437-.412q.174-.276.174-.692M68.854 64v-5.455H70.1v.91h.057a1.36 1.36 0 0 1 1.346-.988q.106 0 .238.011.135.007.224.025v1.182a1.4 1.4 0 0 0-.26-.05 2.4 2.4 0 0 0-.337-.024 1.3 1.3 0 0 0-.632.153q-.277.148-.437.415a1.17 1.17 0 0 0-.16.614V64zm10.454-5.273a.97.97 0 0 0-.419-.725q-.364-.26-.951-.26-.412 0-.707.125a1.05 1.05 0 0 0-.451.338.82.82 0 0 0-.057.88.94.94 0 0 0 .288.284q.18.114.401.192.22.078.444.132l.682.17q.411.096.792.26.383.162.685.411.306.249.483.6.178.353.178.824 0 .64-.327 1.126-.327.483-.945.756-.614.27-1.488.27-.848 0-1.473-.263a2.2 2.2 0 0 1-.973-.767q-.348-.504-.377-1.228h1.296q.029.38.235.632t.536.376q.333.124.746.124.429 0 .753-.128a1.2 1.2 0 0 0 .51-.362.87.87 0 0 0 .19-.547.7.7 0 0 0-.168-.468 1.2 1.2 0 0 0-.458-.313 4.4 4.4 0 0 0-.682-.227l-.827-.213q-.9-.23-1.42-.7-.519-.472-.519-1.253 0-.643.348-1.126a2.3 2.3 0 0 1 .955-.75q.604-.27 1.367-.27.775 0 1.357.27.585.267.92.743.333.472.344 1.087zM81.793 64v-5.455h1.286V64zm.647-6.229a.75.75 0 0 1-.526-.202.65.65 0 0 1-.22-.494q0-.29.22-.493a.74.74 0 0 1 .526-.206q.308 0 .525.206.22.203.22.493a.65.65 0 0 1-.22.494.74.74 0 0 1-.525.202m4.685.774v.995h-3.136v-.995zm-2.362-1.306h1.285v5.12q0 .26.079.398.081.135.213.185.13.05.29.05.122 0 .221-.018.103-.018.156-.032l.217 1.005q-.103.035-.295.078a2.4 2.4 0 0 1-.462.05q-.482.013-.87-.146a1.35 1.35 0 0 1-.614-.504q-.223-.342-.22-.853zm5.793 6.868q-.821 0-1.417-.341a2.3 2.3 0 0 1-.913-.973q-.32-.633-.32-1.488 0-.842.32-1.478.323-.639.902-.994.58-.359 1.36-.359.505 0 .952.164.45.16.795.497.349.337.547.86.2.518.2 1.235v.394H88.51v-.866h3.239a1.4 1.4 0 0 0-.16-.657 1.16 1.16 0 0 0-.437-.458 1.23 1.23 0 0 0-.646-.167q-.395 0-.692.192a1.3 1.3 0 0 0-.466.497 1.4 1.4 0 0 0-.166.67v.757q0 .477.174.817.174.338.486.519.312.177.731.177.282 0 .508-.078a1.1 1.1 0 0 0 .394-.238 1 1 0 0 0 .253-.387l1.2.135a1.9 1.9 0 0 1-.433.83q-.316.353-.81.548-.495.192-1.13.191"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("defs", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
      id: "paint0_linear_1651_1117",
      x1: "199.236",
      x2: "199.236",
      y1: "95.164",
      y2: "73.202",
      gradientUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        stopColor: "#570732"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.02",
        stopColor: "#5D0936"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.16",
        stopColor: "#771549"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.3",
        stopColor: "#8B1D58"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.47",
        stopColor: "#992362"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.67",
        stopColor: "#A12768"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "1",
        stopColor: "#A4286A"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
      id: "paint1_linear_1651_1117",
      x1: "210.498",
      x2: "210.498",
      y1: "95.164",
      y2: "73.248",
      gradientUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        stopColor: "#570732"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.02",
        stopColor: "#5D0936"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.16",
        stopColor: "#771549"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.3",
        stopColor: "#8B1D58"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.47",
        stopColor: "#992362"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.67",
        stopColor: "#A12768"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "1",
        stopColor: "#A4286A"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
      id: "paint2_linear_1651_1117",
      x1: "204.956",
      x2: "204.956",
      y1: "69.15",
      y2: "98.85",
      gradientUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        stopColor: "#77B227"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.47",
        stopColor: "#75B027"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.64",
        stopColor: "#6EAB27"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.75",
        stopColor: "#63A027"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.85",
        stopColor: "#529228"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "0.93",
        stopColor: "#3C8028"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
        offset: "1",
        stopColor: "#246B29"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
      id: "filter0_d_1651_1117",
      width: "248.8",
      height: "125.8",
      x: "0.6",
      y: "0.6",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology", {
        in: "SourceAlpha",
        operator: "dilate",
        radius: "5",
        result: "effect1_dropShadow_1651_1117"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset", {
        dy: "-1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
        stdDeviation: "1.2"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
        in2: "hardAlpha",
        operator: "out"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        values: "0 0 0 0 0.760077 0 0 0 0 0.858475 0 0 0 0 0.932274 0 0 0 0.13 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_1651_1117"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_1651_1117",
        result: "shape"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", {
      id: "filter1_d_1651_1117",
      width: "216.2",
      height: "35.2",
      x: "15.4",
      y: "43.4",
      colorInterpolationFilters: "sRGB",
      filterUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feFlood", {
        floodOpacity: "0",
        result: "BackgroundImageFix"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        in: "SourceAlpha",
        result: "hardAlpha",
        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feMorphology", {
        in: "SourceAlpha",
        radius: "1",
        result: "effect1_dropShadow_1651_1117"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feOffset", {
        dx: "-1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", {
        stdDeviation: "3.8"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", {
        in2: "hardAlpha",
        operator: "out"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", {
        values: "0 0 0 0 0.389697 0 0 0 0 0.569484 0 0 0 0 0.80459 0 0 0 0.41 0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in2: "BackgroundImageFix",
        result: "effect1_dropShadow_1651_1117"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feBlend", {
        in: "SourceGraphic",
        in2: "effect1_dropShadow_1651_1117",
        result: "shape"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("clipPath", {
      id: "clip0_1651_1117",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        fill: "#fff",
        d: "M189 69h30v30h-30z"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pattern", {
      id: "pattern0_1651_1117",
      width: "1",
      height: "1",
      patternContentUnits: "objectBoundingBox",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("use", {
        xlinkHref: "#image0_1651_1117",
        transform: "scale(.004 .01176)"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("image", {
      xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAABVCAQAAADKrzGNAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfoBw0CDy23SqNWAAASiUlEQVR42u1deXwUxbb+qichwZBAIotRAUHZIsuNIMgiEFGUAF4EE5Dn8vThC6LIIlsIZM5MCCFEuFfeVS4obiB4AwgXVEAWWYxo4AqIJCCLiiwCsgQSsk+9P0KSma7qmZ6ekER/ffyD2F1zurq+OlVnrWYwQORnaVHaBs1YMK8PBaXsKr+GMzgcfjyuGCbVemLeNF4QcKkPohCF++AvbVCCQ9jKtvEv6bo5tH980Bn1xDOIQaiu1tewEu/RV+bwekf27g4XYVKuJe6rIdBJYQP5TNzvNe8DLNm6CtwEU/e2eUklVN9R55vxHMVjR6KRxdcZgBzoxNNptz3SBLO2kVvQZzWntfgMbXzg382RSfPm1zUH+g8COg0t2Ye/+vwEP0y8+h/7veZQ13rQqQ4twmqdaptnaufYTY+bg12rQad6WIf/rdLnBOMTGmMOd+0gPwnkt2EjOrn91Ul8yQ7gMD+N3DrXioKVYH472vKOiEJzzd9YEEOLqcQc8loIekpo4SZ01Gz/Kz7EMjrscu0CgAPYAADUFk/jOdwp+eX2oEGTTchrBans9LSgvM3ortH2RyRjuWdZpTp4FjNUMr89aNDkPHO4a4edrpL0vHc1IL+OpPB5+jzrVIR3aDkSMLnCWWtCXnuXd9s4HittdRgx9INXc/Y6EmgNPsbdAHZhsAl5LdXe7ZF8rrTNGnT2DvIbwO+t0w1fYXvQAMo1B7pWgp5ucSxCHUmL9yNijMbMpl/EIxhoSnmtXd6zXpb619dFjIot9UE1KTCHuNZKOoWAJHe/wXBfIDepVks6G8tFl+sVy8iZpqT+WSWd6vEJknsTZv5kDtCfd3mPxa3Cna/pA3N4/syg/7fkzlQz5+VPDHrS3eglXM8wM9z+1Ipc6QAxU469WTu6Rw3QF33QAfegIYIAXMUFHMU+7AzZMTHfB763oC8eRCTuQWMEA8jFRRzFQbYjYPu0HB/4NkZ/RKEDWiAMCnJxBgfZl3w9nbxJ4xPI+vG+iERrNEIggBz8jCzsxOfunsgAWivkx+QFNalxlwqjRxGHAQjQuH8Na/EWfeM9Y3t3xxgMQT2N2wX4HIvoCwMAPIRXMVAWrIYDG2CnTACg/1NFN36gis3Vu4BLUrvSCYhFfelNB7ax162btIZWwUU0UF1Np+E1i7jtUT7XTYC3knZgEu31ApiueB0P6mi4j022bvViIkU6Fkg2SWfiWIIJlEsb8JjL9W/pAe9BTw4vfh0jPKa1bsdLqjD4jT39LgFysO01CfjsW2kV36gLcqAPvqV/6Eu8pFtoIXbrghyI5Fvo4xRd6WLkR8mOTA+QAwyjsHX2rVWyqI8ozsZIz5nM6Iu9FCsDva2kf1/X4C7etWg/hnmlir58dU/S3Z6aJbXCHozWMVCVNLxwv72z5ymKLZguXdRF6lq0Ay193vbmY4XGoi5SED6m2WqdTQa6o96PNQZ5NLZJ827c072lX7uHx35/aQYivObbzLHd9qjb/t5etBN9vOkpWvs0Pgq9iwneTRLEU4pae28iNDvljV5MsehncMp+bf1AUIVWI9AQs8aOLRRF+zUg7+DYiDBDfOvxdbZB1s3ym3PqF2wwMJV8oTSpT8UTTbVdsM5zBj1YaPK7Vwy7G82b5c3hAnpSm9K1BiEHgAZYR/fR7zIzyrHBIOQAUIevpC50TLaXF/xbp+ZRVevg05jo5vZ55KMRbpGOdao9M3FX5fIugl5dxloLV4uzdKWkL2Uv8zYGWyLqhgSEKe1ZLJZDbkk3xYeS2jyGZbhD2j4HyxCjtA8IqxtiiWCP4x1ckLarj/QFMsPRqrGw5+FfbITSPiAssIHSHsOxEvlVMVyzmkPuPSnCuywadakJ3UX1LG3ZFPwitLE4PpxTv1LSFYmNVz3kqsnGo4OkTS7mhaQ6bTeXcQgrU0ILp2KcZFUYYHvaulQlHc/jEelA/RNWulLx/9nIxnoax8byeImSFHl5EpKFLWOa1D7+yH9ywjmniXUI6cnhxal42ruycJFKXkeI5PIqTKafK0V65hGk0RuwIl71vLsKqFwbUJAr0fiqh25xmcVTJC2yLB2JRA0j/jJNw4M4I1nG0tJcep8ajFQJ39PKAzTOCfLyCXLdmooukFi2PGGWarVwvCXR2HNYf3rWCfIblHCWnmXPw6cEcOqKJ8V5gHEU4wR5edsiSmBjhdZjym0cBVeFm6HVBHpg5VwsmSSR28zAHtrBXdqLbhBeF02uu2gYBaPRUGhzwq+bdt03HQvogf8Il+uWTHJxHvWT2OWX0VvboWP9gMX6tIZOklx7iRZoPu9NrFdrJ6XTy0G/KBoqi/yrBfSS8jgeheAF4e45DHPvBadTylBxt+TjSKk0cPirkh33iRmn3fGNv4yhkt19FDk5bvkkycL+LH3vjq91DV437LBqhCeEi/PoHc2xqUMjJJrMSGoIAAo7ItzyP9+yWkCvTLd8UtQ5WRyd8sQgcR9LEC42R++Kvx+S2PzT3UMDAHSSvSQabxhasRndIdETFtKnnviGz8ARY0NV/KSwmfwmTXADMKspJeEXrMB94trKngcAhWeLPyvtXi2gV+6p4izOtP5bl9m3EOLUGOKG78mwRXr4Wj/Bd9p8S4bBorqX75/smWtcMeYaNG8fE4RiliSxnNkeoU9KfsIM3KbB50UwQAk/LjEovPExJQSE6fmvTmMUqtWpsn/SLaI/nOkcHCpg4q4WVfFXX+HeG68W6htlpImjUrFxRAn3liac1cV3mYZZ6Mmr1lO9mfitUo1EAxpPh/kXeEKYkM7G7yoKAPziiukrYbEaSH5660vpOnRlxVNHIUh6Q0az2ghGUlGg7tCm8mmpeoK0n193Yj5A9dBOaP6pXr6BGwqKVWdoheEelDmoewiorNM5WkW0FSO81tybCulsmc42gj3SMQYj5W6ZCspgC0NXlU15BWCixtmIPVLli3kXYaBuVM2wVmIHp17Ty3ZmtuCKUHLvAQCllWAZnyDdUYVpORBi9WU9pTA0Vt0o5F/qFtptBgRdDCdllitsthja7PgOo9xAXoCliKRe1o/KVzk/gG3kc4TVbXRZ6XEV0gPCMw7c+Lep0PaYV5yPqaviHU1xEHD4zle17dzo6V2ipqC/Boj9aCD18HaByxkgqUVpHF7gjdz+MhtvBS5VW0F+QOIB+l7wIQ+mCMqqOsQX+Z8dKly8kfzAgoVh+M0r5kJrFnwz+Ur8Yue8kNrzBtQ4wV3G/0LrS6PdBoqLsZYttG6Xpbf6AQB7n88XVIdkie5rmH7rL+xKh6jcoyZW0HlX8HhV4va5mXxFN5IXWXWlRjLwxDdxrxecZm/zt+mMph4EAP7LJMrYEPeRZC/nqhiJq8jf4qL10NAr5o3l4N4svpKx8iYfpqH3o8e8CdhksNjwFlabNuQ3QJ9+AYslQC1OqSKHrP1BiGdLrZbY6+XUxCv2QmueczP5Kjk+8TUAuuRNZJSDBWhHvawrPR0ecWNX8J8LsWqtWeESXyNDZXa4Q3Q/HqbKlKwTwt37vNEWxOic5bgG347k50XHhVwc5TgAOI4L+2QzL3LfDETg2QmPTbLZeNxJ42RpkJqgJ5zF3yR3n6A5voOelYquwms4e43FjranZnq5n+0pWPn5bU4CQPhPgjsoVNHta6SW4kmZjiMAQLn4VT3Lih/WPRwG8owcR6FdO1yIZUoPirC+of/ohwr9LyQJsvk0xTbVN8htz+M14eIF7uQMpVNitIzF6H6AmO25u6y8Oq4Y3wrD5wvfY1Suz+8SFn6dfOfUl3gJPU/AXMjjBadhq9OUnknc7R2/CtAn5rMxMvWez6FU44s8TeSySNBc1awU3EN8cpquqD41k8TntrpxhLw46w49fFODJVO1spdbJGtiez18C17WLLJwT+KbODAMzYimG3DrOll61k3SJR6YQuvIQI5ZuoXexDyJLXk0RJX2w/4lqkZ5U3Q9ZLbg3OWWCm7Kx6LRVZKsh21+vEThquAWuEaIVyjQIRrUEOONKkYS5FqTjvg8EU1XazIukIRPQ4b0l4Own4Z4KeOts3ZAdjCoAy+oc2HabZNkdSVQf49bRxz+S7i4a+bx8j9nHoGYwf8cveCR70CIm9oJ7Cz/c1qOk+1RTtE02ZM+hnfRyOCKmQnRVZZIHpVCGolEJGO36zrkAnpcsX8M5JpiU6yhz+06T31PCaW5OCBEhsponlgPG1sqSS+wYIW9p1tohvE3JCPrqnrKkqXedD+BqTdfJq5PbK6LXKVKtsJk2zPuIKc5GGxcN2LiCNXFGnJbI0AP4x0wAF2w11neVS+XcNbSH1pBwgGOTNpMI90XEdk701uFP2OyRjLz+oh42eWQJZLUpzDHFttzGq/jR9N5uqS4McPqEjOg9eWhCRe/2mqakm7RgGYUNouFXjgW+r4L3x+wXGjjxz8gmzzriG6hJZgCH4h/BDFY1BI76C9as8Q2Fp+hHKsAZ3mX7EP2Do4vtILwAIA87GRfYr/lxxkny+Y7Kf6NSls72qEbHoU7RWlvUF+taljbYC4PT2Yo8YlfOctVuiU7mqdAdoJ8CTqr82LsnR3fSiPMB1l8u40uxygxe29HisaJmQNoo0qsw4uzpcVF2Wxqu8+d+ZIfe4KnaR6VrLuAkR6TBsEKsADz6Lxq6kbBLllpC9lY69sa33Chltigs/wmF8UI8BDJLadvAqLjL7tZjJZAa7f9FetxhJ2GHw9HJwzU3BkTaLZkOlk5abS/gPU4yM6iBHfyNhisWVC1iEZL+D7Fl7vjizNwsDt4B/zVrRfOi6pVWowXpTxKsA3f4CiuIBCN0QmPakyxIqVX4h7IC+/oBPXEKl35M/oNkK0YEu/WfRDyytVO6KyhUYyB59NQ1kHqSuJJ6IYB0l80wgs6+GbKdW7rCuqBV7T5AqjqE1zGowtk38TxQ394VHvB2ejEPZI9vQL23/EQm4aqO0NuMaI9eYwm5iMaxksnM/CU3IQhR1AMdhvmexgDtY5AjBiPT1CNRNcRDcMnfrEE63tSRc55qKypShQOVUFfL2M4xVGRjpc6jz6SnHM9tAXR2okMk/PQ32BSyF7/vqRZ2xdbiuF4v1ph/82/J7438EOO16wpGtq7yhDcFR7JJuGaD73kWObfjtL1v1TdKHzs9TPmh0fTVQ+OzCFY4PVquwxRCW4TJKgE/wO7F0UMb1da+8Yo4WxAX6GMwRNdxOM039lh4BmIMDaWv2qo7nMTZhk5pcr2DE/THa48xl7ROltFeJNo/MO1bNINncUkWq6zv/34Ityto+E8TMFnVXD8CKOXkCwxLOW0AaNdjx3ScTIDXbLa0JyNRoYXknIF7yld6DFjB5NZlwa2QbKOKPIZvBbWXi/kAH2OCDZFR9LUJdjRVi/kgHVrSAc2A5fcNvoFg2mSROsoNDBAnN7yb4sFOvKQ92MARatPmvIqlEIt2WDeD73dHH7BkYVd2BS24dVC+EipwfnD8RR6Sy2MfGzGirA1Rp6yIODyUD4SD0vdR8XYgRVIN3JCPYVgJJ5DV4kgHWCLQt8t6yttV1lFm6hC8m1Tuavj6wwtdvfE2Y2KnsJI3C8V3d+xHovlp28ZiJ+lW460drRFa94cIaiHIFxHAa7gHE7gBH6gS1WruqQFXe+BjrwVbkUDcFzBORxV9jXI9HVSLQi41I1F8lZojAZguILfcRTfB+329Sg1asj68A5ohRAE4ApOsUPKNucyTPpelfSximJ8e2JKaFEvRPBWqI8GyMNFXMAxS8bMw9rrMoNJ1Up0WpXQ/HeaUN19UEwYqhXyhghXSd3J6u+FCXqVbEFpeg9y6CWsrVkm6H84SmpDf887nfeazubqrGDO91R/n8093TClW7If52PQDwzAVdzruZ6ebsPPqnBwFtXA96b9TPCMUHKTklFZcaislgvBkvRoj9+7ISEDYF1N9N5c3g1R8TA+C64Fkv2z/uZ+3aShiBMurq6J3pvLuzEtPBDHxVpSvBP2ipb/wDacvwd1zpGTC9aU9NoPegGTnSI36tIe6i1pfSct4isEyMHSaqb3pqQbB/4zREtv7Gar+Q6cCsm5Gqo0cdyPRzBI6vLNoAdr5js5piJnmPxHFWdKE6y68+5AWaWzm5hrgfJSTX0ayVzeDVPCWWUQDH86mE1MPFhTPTdB94ESD7DHYewzP3OtC2uu3+ae7iPZOzk2qP3pHohjFllr8qt3pqT7LO24D2u9+MFFNpwSa/ZDh6akV40mPwIpklOn1FSK9/1n6jxm0AS99lO6JWsYJkDb2XIeS/FPOlYb+mqCXrUSfxseQj90QDOEog4KkINTOM72sp2OPeQwx8ckk0wyyaSbSP8PqwrXwTJp9YUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjQtMDctMTNUMDI6MTU6NDQrMDA6MDCDk4ouAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI0LTA3LTEzVDAyOjE1OjQ0KzAwOjAw8s4ykgAAAABJRU5ErkJggg==",
      id: "image0_1651_1117",
      width: "250",
      height: "85",
      preserveAspectRatio: "none"
    })]
  })]
}));

/***/ }),

/***/ "./src/components/icons/index.js":
/*!***************************************!*\
  !*** ./src/components/icons/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedReviewIcon: () => (/* reexport safe */ _AdvancedReviewIcon__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   BookingIcon: () => (/* reexport safe */ _BookingIcon__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   EmailTemplatesIcon: () => (/* reexport safe */ _EmailTemplatesIcon__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   GiftCardsIcon: () => (/* reexport safe */ _GiftCardsIcon__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   MembershipIcon: () => (/* reexport safe */ _MembershipIcon__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   OneClickCheckoutIcon: () => (/* reexport safe */ _OneClickCheckoutIcon__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   ProductAddonsIcon: () => (/* reexport safe */ _ProductAddonsIcon__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   SenseiIcon: () => (/* reexport safe */ _SenseiIcon__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   SocialLoginIcon: () => (/* reexport safe */ _SocialLoginIcon__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   SubscriptionIcon: () => (/* reexport safe */ _SubscriptionIcon__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   WishlistIcon: () => (/* reexport safe */ _WishlistIcon__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   WonderCartIcon: () => (/* reexport safe */ _WonderCartIcon__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   YoastPremiumIcon: () => (/* reexport safe */ _YoastPremiumIcon__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   YoastSeoIcon: () => (/* reexport safe */ _YoastSeoIcon__WEBPACK_IMPORTED_MODULE_13__["default"])
/* harmony export */ });
/* harmony import */ var _AdvancedReviewIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedReviewIcon */ "./src/components/icons/AdvancedReviewIcon.jsx");
/* harmony import */ var _BookingIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookingIcon */ "./src/components/icons/BookingIcon.jsx");
/* harmony import */ var _EmailTemplatesIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmailTemplatesIcon */ "./src/components/icons/EmailTemplatesIcon.jsx");
/* harmony import */ var _GiftCardsIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GiftCardsIcon */ "./src/components/icons/GiftCardsIcon.jsx");
/* harmony import */ var _MembershipIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MembershipIcon */ "./src/components/icons/MembershipIcon.jsx");
/* harmony import */ var _OneClickCheckoutIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OneClickCheckoutIcon */ "./src/components/icons/OneClickCheckoutIcon.jsx");
/* harmony import */ var _ProductAddonsIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProductAddonsIcon */ "./src/components/icons/ProductAddonsIcon.jsx");
/* harmony import */ var _SenseiIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SenseiIcon */ "./src/components/icons/SenseiIcon.jsx");
/* harmony import */ var _SocialLoginIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./SocialLoginIcon */ "./src/components/icons/SocialLoginIcon.jsx");
/* harmony import */ var _SubscriptionIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SubscriptionIcon */ "./src/components/icons/SubscriptionIcon.jsx");
/* harmony import */ var _WishlistIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WishlistIcon */ "./src/components/icons/WishlistIcon.jsx");
/* harmony import */ var _WonderCartIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./WonderCartIcon */ "./src/components/icons/WonderCartIcon.jsx");
/* harmony import */ var _YoastPremiumIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./YoastPremiumIcon */ "./src/components/icons/YoastPremiumIcon.jsx");
/* harmony import */ var _YoastSeoIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./YoastSeoIcon */ "./src/components/icons/YoastSeoIcon.jsx");
















/***/ }),

/***/ "./src/components/sidebar/Sidebar.js":
/*!*******************************************!*\
  !*** ./src/components/sidebar/Sidebar.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sidebar: () => (/* binding */ Sidebar)
/* harmony export */ });
/* harmony import */ var _newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @newfold/ui-component-library */ "./node_modules/@newfold/ui-component-library/components/sidebar-navigation/index.js");
/* harmony import */ var _newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @newfold/ui-component-library */ "./node_modules/@newfold/ui-component-library/elements/title/index.js");
/* harmony import */ var _newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @newfold/ui-component-library */ "./node_modules/@newfold/ui-component-library/elements/text-input/index.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/FireIcon.js");
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/StarIcon.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_FilterContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/FilterContext */ "./src/contexts/FilterContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const Sidebar = () => {
  const {
    search,
    setSearch
  } = (0,_contexts_FilterContext__WEBPACK_IMPORTED_MODULE_1__.useFilter)();
  const categories = [];
  NewfoldSolutions.categories.map(cat => {
    const {
      id,
      name: label,
      priority,
      count
    } = cat;
    categories.push({
      id,
      label,
      priority,
      count
    });
  });
  categories.sort((a, b) => a.priority > b.priority ? -1 : 1);
  const {
    category,
    setCategory
  } = (0,_contexts_FilterContext__WEBPACK_IMPORTED_MODULE_1__.useFilter)();
  const staticCategories = [{
    id: 'popular',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Most popular', 'wp-module-solutions'),
    icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    id: 'premium',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Premium Tools', 'wp-module-solutions'),
    icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__["default"]
  }];
  const mergedCats = [{
    id: 'all',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('All', 'wp-module-solutions')
  }, ...categories, ...staticCategories];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("aside", {
    className: 'nfd-solutions-sidebar',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_5__["default"], {
      activePath: category,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_5__["default"].Sidebar, {
        className: "nfd-w-[300px]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: "nfd-solutions-search nfd-flex nfd-flex-col nfd-gap-4 nfd-mb-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_6__["default"], {
            as: "h4",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Search', 'wp-module-solutions')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_7__["default"], {
            value: search,
            onChange: e => {
              setSearch(e.target.value);
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_5__["default"].MenuItem, {
          label: "Categories",
          defaultOpen: true,
          className: 'nfd-hidden',
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_6__["default"], {
            as: "h4",
            className: "nfd-solutions-categories-title nfd-mb-4",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Categories', 'wp-module-solutions')
          }), mergedCats.map(cat => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_5__["default"].SubmenuItem, {
            pathProp: "id",
            id: cat.id,
            label: cat.label + (cat?.count ? ` (${cat.count})` : ''),
            icon: cat.icon,
            onClick: () => setCategory(cat.id)
          }, cat.id))]
        })]
      })
    })
  });
};

/***/ }),

/***/ "./src/components/sidebar/index.js":
/*!*****************************************!*\
  !*** ./src/components/sidebar/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Sidebar: () => (/* reexport safe */ _Sidebar__WEBPACK_IMPORTED_MODULE_0__.Sidebar)
/* harmony export */ });
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar */ "./src/components/sidebar/Sidebar.js");



/***/ }),

/***/ "./src/components/tools/EmptyTools.js":
/*!********************************************!*\
  !*** ./src/components/tools/EmptyTools.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmptyTools: () => (/* binding */ EmptyTools)
/* harmony export */ });
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/24/outline */ "./node_modules/@heroicons/react/24/outline/esm/MagnifyingGlassIcon.js");
/* harmony import */ var _newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @newfold/ui-component-library */ "./node_modules/@newfold/ui-component-library/elements/title/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const EmptyTools = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "nfd-solutions-tools--empty nfd-flex nfd-flex-col nfd-items-center nfd-justify-center nfd-gap-5 nfd-max-w-3xl nfd-h-full nfd--mt-12",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: 'nfd-solutions-tools--empty__icon',
      width: 150
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_3__["default"], {
      as: "h2",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No matching tools', 'wp-module-solutions')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Check the spelling or try another keyword', 'wp-module-solutions')
    })]
  });
};

/***/ }),

/***/ "./src/components/tools/Tools.js":
/*!***************************************!*\
  !*** ./src/components/tools/Tools.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tools: () => (/* binding */ Tools)
/* harmony export */ });
/* harmony import */ var _EmptyTools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmptyTools */ "./src/components/tools/EmptyTools.js");
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tool */ "./src/components/tools/tool/index.js");
/* harmony import */ var _contexts_FilterContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../contexts/FilterContext */ "./src/contexts/FilterContext.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../icons */ "./src/components/icons/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const toolsIcons = {
  'Memberships': _icons__WEBPACK_IMPORTED_MODULE_3__.MembershipIcon,
  'Subscriptions': _icons__WEBPACK_IMPORTED_MODULE_3__.SubscriptionIcon,
  'Social Login': _icons__WEBPACK_IMPORTED_MODULE_3__.SocialLoginIcon,
  'Yoast SEO': _icons__WEBPACK_IMPORTED_MODULE_3__.YoastSeoIcon,
  'Yoast WooCommerce SEO': _icons__WEBPACK_IMPORTED_MODULE_3__.YoastPremiumIcon,
  'Advanced Reviews': _icons__WEBPACK_IMPORTED_MODULE_3__.AdvancedReviewIcon,
  'Bookings & Appointments': _icons__WEBPACK_IMPORTED_MODULE_3__.BookingIcon,
  'Custom Email Templates': _icons__WEBPACK_IMPORTED_MODULE_3__.EmailTemplatesIcon,
  'Gift Cards': _icons__WEBPACK_IMPORTED_MODULE_3__.GiftCardsIcon,
  'One-Click Checkout': _icons__WEBPACK_IMPORTED_MODULE_3__.OneClickCheckoutIcon,
  'Product Add-Ons & Extra Options': _icons__WEBPACK_IMPORTED_MODULE_3__.ProductAddonsIcon,
  'Sensei': _icons__WEBPACK_IMPORTED_MODULE_3__.SenseiIcon,
  'Wishlists': _icons__WEBPACK_IMPORTED_MODULE_3__.WishlistIcon,
  'WonderCart': _icons__WEBPACK_IMPORTED_MODULE_3__.WonderCartIcon
};
function layoutTools(tools) {
  const layout = [];
  let rowSpaces = 3;
  let row = [];
  const pushRow = () => {
    layout.push(...row);
    row = [];
    rowSpaces = 3;
  };
  while (tools.length) {
    if (tools[0]?.wide) {
      if (rowSpaces > 1) {
        row.push(tools.shift());
        rowSpaces -= 2;
      } else {
        for (let i = 0; i < tools.length; i++) {
          if (!tools[i]?.wide) {
            row.push(...tools.splice(i, 1));
            rowSpaces -= 1;
            break;
          }
        }
        pushRow();
      }
    } else if (rowSpaces > 0) {
      row.push(tools.shift());
      rowSpaces -= 1;
    }
    if (!rowSpaces) {
      pushRow();
    }
  }
  pushRow();
  return layout;
}
const Tools = () => {
  const {
    category,
    search
  } = (0,_contexts_FilterContext__WEBPACK_IMPORTED_MODULE_2__.useFilter)();
  let tools = NewfoldSolutions.entitlements
  //.filter( tool => Object.keys( toolsIcons ).includes( tool.name ) )
  .sort((a, b) => {
    const aHasIcon = Object.keys(toolsIcons).includes(a.name);
    const bHasIcon = Object.keys(toolsIcons).includes(b.name);
    if (aHasIcon && !bHasIcon) return -1;
    if (!aHasIcon && bHasIcon) return 1;
    return 0;
  });
  if ('all' !== category) {
    tools = tools.filter(tool => tool.category === category);
  }
  if (search) {
    tools = tools.filter(tool => tool?.name?.toLowerCase().includes(search.toLowerCase()) || tool?.plsSlug?.toLowerCase().includes(search.toLowerCase()));
  }
  tools = layoutTools([...tools]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [!tools.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_EmptyTools__WEBPACK_IMPORTED_MODULE_0__.EmptyTools, {}), !!tools.length && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "nfd-solutions-tools nfd-grid nfd-gap-4",
      children: tools.map(tool => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tool__WEBPACK_IMPORTED_MODULE_1__.Tool, {
        name: tool?.name,
        description: tool.description,
        href: tool.cta?.url.replace('{siteUrl}', NewfoldSolutions.siteUrl),
        icon: toolsIcons[tool?.name],
        smallIcon: !toolsIcons[tool?.name] ? tool.image.primaryImage : null,
        wide: tool?.wide,
        premium: tool?.premium,
        popular: tool?.popular,
        isActive: tool?.isActive,
        plsProvider: tool?.plsProviderName,
        plsSlug: tool?.plsSlug
      }, tool?.name))
    })]
  });
};

/***/ }),

/***/ "./src/components/tools/index.js":
/*!***************************************!*\
  !*** ./src/components/tools/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tools: () => (/* reexport safe */ _Tools__WEBPACK_IMPORTED_MODULE_0__.Tools)
/* harmony export */ });
/* harmony import */ var _Tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tools */ "./src/components/tools/Tools.js");



/***/ }),

/***/ "./src/components/tools/tool/Tool.js":
/*!*******************************************!*\
  !*** ./src/components/tools/tool/Tool.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tool: () => (/* binding */ Tool)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @newfold/ui-component-library */ "./node_modules/@newfold/ui-component-library/components/card/index.js");
/* harmony import */ var _newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @newfold/ui-component-library */ "./node_modules/@newfold/ui-component-library/elements/title/index.js");
/* harmony import */ var _newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @newfold/ui-component-library */ "./node_modules/@newfold/ui-component-library/elements/button/index.js");
/* harmony import */ var _badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../badge */ "./src/components/badge/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/20/solid */ "./node_modules/@heroicons/react/20/solid/esm/FireIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const PopularBadge = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_badge__WEBPACK_IMPORTED_MODULE_1__.Badge, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Popular', 'wp-module-solutions'),
  icon: _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__["default"],
  rounded: true,
  className: 'nfd-mb-2 nfd-solutions-badge--popular'
});
const PremiumBadge = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_badge__WEBPACK_IMPORTED_MODULE_1__.Badge, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Premium', 'wp-module-solutions'),
  rounded: true,
  className: 'nfd-mb-2 nfd-solutions-badge--premium'
});
const Tool = ({
  name,
  description = '',
  premium = false,
  popular = false,
  wide = false,
  href = '',
  icon: Icon = null,
  smallIcon = null,
  plsSlug,
  plsProvider,
  isActive
}) => {
  const classes = ['nfd-solutions-tool-card', 'nfd-bg-white', 'nfd-justify-end', 'nfd-solutions-tool-card-' + plsSlug, {
    'nfd-solutions-tool-card--with-icon': Icon,
    'nfd-solutions-tool-card--with-small-icon': smallIcon,
    'nfd-solutions-tool-card--wide': wide,
    'nfd-solutions-tool-card--premium': premium
  }];
  const Header = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: Icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_5__["default"].Header, {
      className: "nfd-solutions-tool-card__header nfd-bg-inherit nfd-bg-transparent",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Icon, {})
    })
  });
  const Content = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_5__["default"].Content, {
    children: [!!smallIcon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
      className: "nfd-solutions-card__small-icon",
      src: smallIcon
    }), (premium || popular) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "nfd-solutions-card-badges nfd-flex nfd-gap-1",
      children: [premium && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(PremiumBadge, {}), popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(PopularBadge, {})]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_6__["default"], {
      as: 'h4',
      className: "nfd-solutions-card-title",
      children: name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
      className: "nfd-solutions-card-description",
      children: description
    })]
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes),
    children: [wide && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "nfd-solutions-tool-card--wide-body nfd-flex nfd-gap-4 nfd-items-end",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Content, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Header, {})]
    }), !wide && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Header, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Content, {})]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_5__["default"].Footer, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_7__["default"], {
        as: 'a',
        href: href,
        "data-nfd-installer-pls-slug": !isActive ? plsSlug : null,
        "data-nfd-installer-pls-provider": !isActive ? plsProvider : null,
        "data-nfd-installer-plugin-activate": isActive,
        "data-nfd-installer-plugin-name": !isActive ? name : null,
        children: premium ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Get it', 'wp-module-solutions') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Manage', 'wp-module-solutions')
      })
    })]
  });
};

/***/ }),

/***/ "./src/components/tools/tool/index.js":
/*!********************************************!*\
  !*** ./src/components/tools/tool/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tool: () => (/* reexport safe */ _Tool__WEBPACK_IMPORTED_MODULE_0__.Tool)
/* harmony export */ });
/* harmony import */ var _Tool__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tool */ "./src/components/tools/tool/Tool.js");



/***/ }),

/***/ "./src/contexts/FilterContext.js":
/*!***************************************!*\
  !*** ./src/contexts/FilterContext.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterProvider: () => (/* binding */ FilterProvider),
/* harmony export */   useFilter: () => (/* binding */ useFilter)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const FilterContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)();
const FilterProvider = ({
  children
}) => {
  const params = new URLSearchParams(window.location.search);
  const initialCategory = params.get('category');
  const initialSearch = params.get('s');
  const [category, setCategory] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(initialCategory || 'all');
  const [search, setSearch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(initialSearch || '');
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const paramsToUpdate = {
      s: search,
      category
    };
    Object.keys(paramsToUpdate).map(key => {
      if (paramsToUpdate[key]) {
        params.set(key, paramsToUpdate[key]);
      } else {
        params.delete(key);
      }
    });
    const newUrl = `${url.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }, [search, category]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FilterContext.Provider, {
    value: {
      category,
      setCategory,
      search,
      setSearch
    },
    children: children
  });
};
const useFilter = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(FilterContext);

/***/ }),

/***/ "./src/tailwind.pcss":
/*!***************************!*\
  !*** ./src/tailwind.pcss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["domReady"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tailwind_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tailwind.pcss */ "./src/tailwind.pcss");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @newfold/ui-component-library */ "./node_modules/@newfold/ui-component-library/components/root/index.js");
/* harmony import */ var _newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @newfold/ui-component-library */ "./node_modules/@newfold/ui-component-library/components/page/index.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header */ "./src/components/header/index.js");
/* harmony import */ var _contexts_FilterContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contexts/FilterContext */ "./src/contexts/FilterContext.js");
/* harmony import */ var _components_sidebar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sidebar */ "./src/components/sidebar/index.js");
/* harmony import */ var _components_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tools */ "./src/components/tools/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/development/chunk-K6CSEXPM.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










const WP_SOLUTIONS_PAGE_ROOT_ELEMENT = 'nfd-solutions-app';
const App = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_8__["default"], {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.HashRouter, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_contexts_FilterContext__WEBPACK_IMPORTED_MODULE_4__.FilterProvider, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_newfold_ui_component_library__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: "nfd-solutions-app-container nfd-page min-[783px]:nfd-p-8 min-[783px]:nfd-max-w-full xl:nfd-max-w-screen-xl 2xl:nfd-max-w-screen-2xl nfd-my-0",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_header__WEBPACK_IMPORTED_MODULE_3__.Header, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: "nfd-flex nfd-gap-6 nfd-max-w-full xl:nfd-max-w-screen-xl 2xl:nfd-max-w-screen-2xl nfd-my-0",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_sidebar__WEBPACK_IMPORTED_MODULE_5__.Sidebar, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("main", {
              className: "nfd-w-full",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_tools__WEBPACK_IMPORTED_MODULE_6__.Tools, {})
            })]
          })]
        })
      })
    })
  });
};
const SolutionsPageRender = () => {
  const DOM_ELEMENT = document.getElementById(WP_SOLUTIONS_PAGE_ROOT_ELEMENT);
  if (null !== DOM_ELEMENT) {
    if ('undefined' !== typeof _wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createRoot) {
      (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createRoot)(DOM_ELEMENT).render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(App, {}));
    }
  }
};
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_1___default()(SolutionsPageRender);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map