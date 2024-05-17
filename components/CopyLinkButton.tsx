import React, { useState } from "react";
import { IoMdCopy } from "react-icons/io";
import Modal from "./Modal";
import Button from "./Button";

const CopyLinkButton = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCopy = () => {
    const url = window.location.href
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setShowModal(true)
        setTimeout(() => setShowModal(false), 2000)
      })
      .catch((err) => {
        console.error("Gagal menyalin URL: ", err);
      });
  };

  return (
    <>
      <Button name="Salin Link" icon={<IoMdCopy />} color="purple" onclick={handleCopy}/>

      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default CopyLinkButton;
