'use client'

import { useSession } from 'next-auth/react'
import { PlusIcon } from "@heroicons/react/24/solid"
import { useRouter } from 'next/navigation';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

function NewChat() {
  const {data: session} = useSession();
  const router = useRouter();
  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"), {
        messages: [],
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );
    router.push(`/chat/${doc.id}`);
  }
  return (
    <div
    onClick={createNewChat}
      className="border-gray-700 border mb-2 chatRow"
    >
        <PlusIcon className='w-4 h-4' />
        <p>New Chat</p>
    </div>
  )
}

export default NewChat