import { useState } from 'react';

function useLocalStorage (key, initialValue) {
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key);
        if(jsonValue != null) return JSON.parse(jsonValue);
        localStorage.setItem(key, JSON.stringify(initialValue)); 
    });

    function setLocalStorageValue (newValue) {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    }   

    return [value, setLocalStorageValue]
}

export default useLocalStorage;