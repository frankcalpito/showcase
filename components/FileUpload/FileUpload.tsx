import './fileUpload.scss';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '../Button/Button';


export interface FileUploadProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * label for the file upload component
   */
  label?: string;
  /**
   * whether a file is required
   */
  required?: boolean;
  /**
   * function callback when uploadedFiles state is changed
   * 
   * @param files list of uploaded files
   * @returns 
   */
  onChange?: (files: any) => void;
  /**
   * classes added to the wrapper div
   */
  wrapperClass?: string;
  /**
   * error text
   */
  errorText?: string;
  /**
   * maximum files that can be accepted (default: 1)
   */
  maxFileCount?: number;
}

export const FileUpload = function ({
  id = 'file-upload',
  name,
  wrapperClass,
  onChange,
  errorText,
  maxFileCount = 1,
  label,
  ...props
}: FileUploadProps) {
  const fileUploadRef = useRef<HTMLInputElement>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  useEffect(() => {
    if (onChange) {
      onChange(uploadedFiles);
    }
  }, [uploadedFiles]);

  const handleUploadFiles = (files: any) => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;
    files.some((file: any) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === maxFileCount) return false;
        if (uploaded.length > maxFileCount) {
          alert(`You can only add a maximum of ${maxFileCount} ${maxFileCount === 1 ? 'file' : 'files'}`);
          limitExceeded = true;
          return true;
        }
      }
    })
    if (!limitExceeded) setUploadedFiles(uploaded)
  }

  const handleFileEvent = (e: any) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files)
    handleUploadFiles(chosenFiles);
  }

  const handleRemoveFile = (file: any) => {
    const uploaded = [...uploadedFiles.filter((x: any) => file.name !== x.name && file.size !== x.size)];
    if (uploaded.length === 0 && fileUploadRef.current) {
      fileUploadRef.current.value = '';
    }
    setUploadedFiles(uploaded);
  }

  const isDisabled = useMemo(() => uploadedFiles.length >= maxFileCount, [uploadedFiles, maxFileCount]);

  return (
    <div className={[`col justify-center items-start file-upload-wrapper`, wrapperClass, errorText && 'error'].join(' ')}>
      <input data-testid={id} ref={fileUploadRef} id={id} type="file" name={name || id} multiple accept='image/*' className="hidden" onChange={handleFileEvent} {...props} />
      <div className="w-full flex items-center py-3">
        {label && <label>{label}</label>}
        <Button label="Choose file" className="upload-button flex-0 w-auto ml-4" onClick={() => fileUploadRef && fileUploadRef.current?.click()} disabled={isDisabled} />
        {errorText && <div className="error-text">{errorText}</div>}
      </div>
      <div className="mt-4 w-full grid grid-cols-1 gap-y-1 overflow-y-scroll pr-4 custom-scrollbar">
        {uploadedFiles.map((file: any, i: number) => (
          <div className="w-full border-[1px] py-2 px-2 border-default-500 inline-flex justify-between items-center h-16">
            <img src={URL.createObjectURL(file)} className='w-12 h-12' />
            <label>
              {file.name}
            </label>
            <Button className="!p-0 w-9 h-9 items-center flex justify-center" data-testid={`remove-file-${i}`} onClick={() => handleRemoveFile(file)} icon={<>x</>} />
          </div>
        ))}
      </div>
    </div>
  );
};
