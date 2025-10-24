import '../App.css'
import { Button } from '../components/Button'
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Card } from '../components/Card';
import { CreateContentModal } from '../components/CreateContentModal';
import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';

export  function Dashboard() {
  const [modalOpen, setModalOpen] = useState(true);

  return <div>
    <Sidebar />
    <div className='p-4 ml-72 min-h-screen bg-gray-100'>
      <CreateContentModal open={modalOpen} onClose={() => {
        setModalOpen(false);
      }}/>
      <div className='flex justify-end gap-4'>
        <Button onClick={() => {
          setModalOpen(true);
        }} variant="primary" text="Add content" startIcon={<PlusIcon />}></Button>
        <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon />}></Button>
      </div>
      <div className='flex gap-4 pt-10'>
        <Card link='https://youtu.be/gViEtIJ1DCw?si=KRd9jUHwYFowOxz_' title='Harkirat-video'/>
      <Card link='https://youtu.be/gViEtIJ1DCw?si=KRd9jUHwYFowOxz_' title='100xdevs'/>
      </div>
    </div>
   
  </div>
}

