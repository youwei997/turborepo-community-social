import { Database } from '@repo/supabase-service/supabase';
import { createClient } from '@supabase/supabase-js';
import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import type { Instrument } from './types/supabase/types'; // 导入 Instrument 类型
import typescriptLogo from '/typescript.svg';

console.log(import.meta.env.VITE_SUPABASE_URL);
const supabase = createClient<Database>(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);

const App = () => {
  const [instruments, setInstruments] = useState<Instrument[]>([]); // 指定 instruments 的类型
  useEffect(() => {
    getInstruments();
  }, []);
  async function getInstruments() {
    const { data } = await supabase.from('instruments').select(); // 指定查询返回的类型
    console.log(data);

    setInstruments(data || []); // 确保 data 不为 null
  }
  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>
      <a href="https://www.typescriptlang.org/" target="_blank">
        <img src={typescriptLogo} className="logo vanilla" alt="TypeScript logo" />
      </a>
    </div>
  );
};

createRoot(document.getElementById('app')!).render(<App />);
