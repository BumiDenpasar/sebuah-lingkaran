import React, { useState } from 'react';
import { IoMdCopy } from 'react-icons/io';
import Modal from './Modal';

const CopyLinkButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCopy = () => {
    const url = window.location.href; // Mendapatkan URL saat ini
    navigator.clipboard.writeText(url).then(() => {
      setShowModal(true);
      setTimeout(() => setShowModal(false), 2000); // Modal hilang setelah 2 detik
    }).catch(err => {
      console.error('Gagal menyalin URL: ', err);
    });
  };

  return (
    <>
      <button
        onClick={handleCopy}
        className='px-5 py-2 flex items-center space-x-2 border-r-2 border-b-2 hover:border-r-4 hover:border-b-4 w-full  border-purple-600 rounded-xl bg-purple-400 text-white font-semibold'
      >
        <IoMdCopy />
        <p>Copy Link</p>
      </button>
      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default CopyLinkButton;
