import React from "react";
import {View, Text} from 'react-native';

const Label = ({children, label, tableStyle, subLabel, subLabelStyle}) => {
return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        {children}
    </View>
)}
