"use client"
import React, { useEffect, useState } from 'react'
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';


const Page = () => {

    
        const [authToken, setAuthToken] = useState<string | null>(null);
        useEffect(() =>{
            const token = sessionStorage.getItem('googleIdToken');
            if (token) {
                setAuthToken(token);
            } else {
                console.error('No auth token found');
            }
        }, [])
        const props: UploadProps = {
            name: 'file',
                action:  `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/uploads/orders`,
            headers: {
              authorization: `Bearer ${authToken}`,
            },
            onChange(info) {
              if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
              }
              if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
              } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
              }
            },
          };

  return (
    <div className='h-screen flex flex-col px-10 mt-10 text-xl '>
    <h1 className='text-5xl font-bold' >Orders</h1>
    <div className='mt-5'>
            <Upload {...props}>
        <Button icon={<UploadOutlined />}>Bulk Upload</Button>
      </Upload>
            </div>
</div>
  )
}

export default Page