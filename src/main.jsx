diff --git a/src/main.jsx b/src/main.jsx
index b9a1a6d..41b4d85 100644
--- a/src/main.jsx
+++ b/src/main.jsx
@@ -1,10 +1,11 @@
-import { StrictMode } from 'react'
-import { createRoot } from 'react-dom/client'
-import './index.css'
-import App from './App.jsx'
+import React from 'react';
+import ReactDOM from 'react-dom/client';
+import App from './App.jsx';
+import './index.css';
 
-createRoot(document.getElementById('root')).render(
-  <StrictMode>
+ReactDOM.createRoot(document.getElementById('root')).render(
+  <React.StrictMode>
     <App />
-  </StrictMode>,
-)
+  </React.StrictMode>
+);
+
