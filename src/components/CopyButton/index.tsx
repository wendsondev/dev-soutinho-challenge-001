import { toast } from 'react-toastify';
import { Button } from './styles';

type CopyButtonProps = {
  children: string;
};

export function CopyButton({ children }: CopyButtonProps) {
  const handleCopyText = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);

      toast.success('CSS Copied Successfully', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } catch (error) {
      toast.error('Error, try again later', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
  };

  return (
    <Button title="Copy CSS" onClick={() => handleCopyText(children)}>
      {children}
    </Button>
  );
}
