"use client"

import { Post } from '@/app/lib/types';
import React, { useEffect, useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSave: (post: Omit<Post, "id"> & {id?: string}) => void;
  // Omit<t, k> 타입 t에서 t키를 제외한 새 타입 생성 
  // 위는 Post에서 id를 제외한 새로운 타입임
  post: Post | null;
}

export default function PostModal({ modalOpen, onClose, onSave, post }: Props) {
  const [title, setTitle] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setDateTime(post.dateTime);
      setContent(post.content);
    } else {
      setTitle("");
      setDateTime("");
      setContent("");
    }
  }, [post]);

  if (!modalOpen) return null // 열렸을 때만 렌더링하고 아니면 null
  
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: post?.id,
      title,
      dateTime,
      content,
      resourceUid: post?.resourceUid || "c1"
    })
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-40 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg z-50">
        <div className="text-xl font-bold pb-4">{post ? "Edit Post" : "Add Post"}</div>
        <form onSubmit={handleSubmit} className='space-y-3'>
          <input 
            className="w-full border p-2"
            placeholder='Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required // 빈 공간 허용 x
          />
          <input 
            className="w-full border p-2"
            placeholder='Date (YYYY-MM)'
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            required // 빈 공간 허용 x
          />
          <textarea 
            className="w-full border p-2"
            placeholder='Content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required // 빈 공간 허용 x
          />
          <div className="flex justify-end gap-4 mt-4">
            <button
              type='button'
              onClick={onClose}
               className="text-xl flex items-center justify-center px-4 py-2 border rounded gap-2 hover:bg-red-500 hover:text-white"
            >
              <IoMdClose/> Cancel
            </button>
            <button
              type='submit'
             className="text-xl flex items-center justify-center px-4 py-2 border rounded gap-2 hover:bg-green-500 hover:text-white"
            >
              <FaCheck/> Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
