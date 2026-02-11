import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {App} from "@/app/App";
import '../shared/config/i18n';
import './styles/global.css';
import {BrandProvider} from "@/app/providers/BrandProvider";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrandProvider>
      <App/>
    </BrandProvider>
  </StrictMode>,
)
