import React, { useState, useEffect } from 'react';
import { View, TextInput } from 'react-native';

const Input = () => {
    const [name, setName] = useState('Ali');
    
    useEffect(() => {
        setName('Tanveer Salman');
    }, [])

    return (
        <View>
            <TextInput placeholder="value" value={name} onChange={(e) => setName(e)} />
        </View>
    )
}

export default Input;