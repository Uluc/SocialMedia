import { configure } from '@testing-library/react';
import {useState, useEffect} from 'react';
import {projectStorage} from '../firebase/config.js'; 

const useStorage = (file) => {
    const [progess, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
}