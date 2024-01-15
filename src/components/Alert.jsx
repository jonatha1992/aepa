
import { useState } from 'react';

export function Alert({ message }) {

  const [visible, setVisible] = useState(true);

  function handleClose() {
    setVisible(false);
  }

  return (
    <>
      {visible && (
        <div 
          className="alert alert-danger alert-dismissible fade show mt-2 p-2 align-items-center"
          role="alert"
          
        >
          <span className='p-2'>{message}</span>
          <button
            type="button"
            className="btn-close "
            aria-label="Close"
            onClick={handleClose}  
            style={{padding: '0.70rem'}}
          />
        </div>  
      )}
    </>
  );

}