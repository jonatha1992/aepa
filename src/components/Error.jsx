


export function Error({ message }) {
  return (
    <>
        <div 
          className="alert alert-danger alert-dismissible fade show mt-2 p-2 align-items-center"
          role="alert"
        >
          <span className='p-2'>{message}</span>
        </div>  
    </>
  );
}