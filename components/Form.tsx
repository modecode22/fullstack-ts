"use client"
import React, { useState } from 'react'

interface FormData {
  title: string;
  content: string;
  id: string;
}


const Form = () => {
    const [form, setForm] = useState<FormData>({title:"" , content:"", id:""})
  return (
    <form
      className=" w-96 bg-white border rounded-xl shadow-lg hover:shadow-sm duration-100 grid grid-cols-2 p-2 gap-2 font-bold text-slate-900"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="p-2">
        <label htmlFor="id">id</label>
        <input
          name="id"
          type="text"
          onChange={(e) => {
            setForm({ ...form, id: e.target.value });
          }}
          className="border border-sky-100 p-1 w-full h-8 rounded-lg bg-slate-100"
        />
      </div>
      <div className="p-2">
        <label htmlFor="title">title</label>
        <input
          name="title"
          type="text"
          onChange={(e) => {
            setForm({ ...form, title: e.target.value });
          }}
          className="border border-sky-100 p-1 w-full h-8 rounded-lg bg-slate-100"
        />
      </div>
      <div className="p-2">
        <label htmlFor="content">content</label>
        <input
          name="content"
          type="text"
          onChange={(e) => {
            setForm({ ...form, content: e.target.value });
          }}
          className="border border-sky-100 p-1 w-full h-8 rounded-lg bg-slate-100"
        />
      </div>

      <button
        className="col-span-2 h-10 w-full bg-sky-600 rounded-lg hover:bg-sky-500 duration-100"
        type="submit"
      >
        add to back end
      </button>
    </form>
  );
}

export default Form