import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Semi 2.103 的 exports 未暴露 dist 路径，用相对路径直接引入编译好的全量样式。
import '../node_modules/@douyinfe/semi-ui/dist/css/semi.min.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
