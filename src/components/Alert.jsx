
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
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          <span>{message}</span>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={handleClose}  
          />
        </div>  
      )}
    </>
  );

}