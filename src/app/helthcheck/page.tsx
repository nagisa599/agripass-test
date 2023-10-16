'use client';
import React, { useState } from 'react'
import axios from 'axios';
const Page = () => {
  const [name,setname] = useState<string>("");  

  const createUser = async (e:any) => {
    e.preventDefault(); // フォームのデフォルトの送信を阻止
    const body = {
      name: name,
    }
    //await
    await axios.post("/api/user", body, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  }
  return (
    <div>
      こちらはhealthcheckです1(ダークモード設定後回し見にくいかも)
      <form onSubmit={createUser}>
        <input
          value={name}
          onChange = {(e)=>{
            {setname(e.target.value)} 
          }}
        />
        <button type="submit"
        >
        ログイン
        </button>
      </form>
    </div>
  )
}

export default Page
