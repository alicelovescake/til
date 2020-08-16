import { useState, useEffect, useRef } from 'react';
import { FiX } from 'react-icons/fi';
import useOnClickOutside from 'src/hooks/useOnClickOutside/useOnClickOutside'
import Portal from 'src/components/Portal/Portal'

const Modal = ({ children, open, onModalClose }) => {
  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleClose = () => {
    setIsOpen(false);
    if (onModalClose) {
      onModalClose();
    }
  }

  useOnClickOutside(modalRef, handleClose);

  return (
    <>
      {
        isOpen && (
          <Portal selector="body">
            <div className="z-50 fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center px-5 sm:px-0">
              <div
                className="space-y-4 shadow-xl p-10 bg-white rounded-lg relative"
                ref={modalRef}
              >
                <FiX
                  className="absolute top-0 right-0 m-1 hover:cursor-pointer hover:text-gray-700"
                  onClick={handleClose}
                />
                {children}
              </div>
            </div>
          </Portal>
        )
      }
    </>
  )
}

export default Modal
