import React from "react";

const CallLogContainer = React.lazy(()=>import("./CallLogsContainer"));

export {CallLogContainer as CallLogsPage};