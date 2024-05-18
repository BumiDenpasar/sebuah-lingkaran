import Image from "next/image";

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
  let isLoading = true;
  if (!show && isLoading) {
    return null;
  }

  const handleImageLoad = () => {
    isLoading = false;
  };


  return (
    <div className="fixed z-50 inset-0 h-screen flex justify-center items-center">
      <div className="bg-white dark:bg-neutral-900 flex flex-col items-center justify-center px-10 py-5 text-lg rounded-2xl shadow-lg text-center">
        <div className="w-52 h-52 relative">
          <Image
            src="/images/success.webp"
            alt="success"
            layout="fill"
            objectFit="cover"
            onLoad={handleImageLoad} 
            />
        </div>
        <p className="text-lg">URL telah disalin ke clipboard!</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-2xl border-r-4 border-b-4 border-purple-700 w-full"
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

export default Modal;
