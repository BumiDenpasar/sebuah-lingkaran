import Image from 'next/image';


interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0   bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white dark:bg-neutral-900 flex flex-col items-center justify-center px-7 py-5 text-lg rounded-2xl shadow-lg text-center">
        <div className='w-52 h-52 relative'>
            <Image  
                src="/images/success.png"
                alt="success"
                layout="fill"
                objectFit="cover"
            />
        </div>
        <p className='text-lg'>URL telah disalin ke clipboard!</p>
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
