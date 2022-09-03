import React, {useEffect, useState, useTransition} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import Loading from '../components/Loading';
import '../styles/md.scss';
import Back from '../icons/Back';

const NoteDetail = () => {
    const [content, setContent] = useState<string>('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const filename: string = params.filename || '';
        try {
            // Add ./ for dynamic import
            const filePath = require('./../sources/md/' + filename);

            fetch(filePath)
                .then(
                    res => {
                        return res.text()
                    },
                    _ => {
                        throw new Error('Failed to fetch')
                    }
                )
                .then(text => setContent(text || ''));
        }catch (e){
            // File doesn't exist or failed to fetch, redirect to note page
            console.log('Error finding the file');
            navigate('/Note');
        }

    }, []);

    // Not ready
    if(!content) return <Loading/>

    return (
        <div className='md page'>
            <ReactMarkdown linkTarget='_blank'>
                { content }
            </ReactMarkdown>
            <Back className='icon icon--extra-large'/>
        </div>
    );
}

export default React.memo(NoteDetail);