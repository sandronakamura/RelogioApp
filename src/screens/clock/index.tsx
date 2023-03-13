import { useCallback, useEffect, useState } from 'react';
import {Button, DatePickerIOSComponent, FlatList, Keyboard, NativeEventEmitter, Platform, RefreshControl, ScrollView, Text, TextInput, View} from 'react-native';

import DateTimePicker from '@react-native-community/datetimepicker';


import  useAlarm  from './hooks/useAlarm';

// Styles
import {styles} from './styles';


export default function Clock(this: any) {

    const {
        data
       } = useAlarm();

    const [dataValues, setDataValues] = useState(data);   
    const [hour, setHour] = useState('00');
    const [minute, setMinute] = useState('00');
    const [description, setdescription] = useState('');
    const [value, setValue] = useState(data);
    const [date, setDate] = useState('00:00:00');
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [showAlarm, setAlarm] = useState(false);


    const cadastrar = () => {
        setShowTimePicker(Platform.OS === 'ios');

        if((Number(hour) < 24 && Number(hour) >= 0) && (Number(minute) < 60 && Number(minute) >= 0)){
            dataValues.push({id: dataValues.length+1, hora: `${hour}H${minute}`, texto: description});
            console.log(dataValues);
            Keyboard.dismiss();
        }

    }

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
            console.log(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
      
        }, 1000 * 1);
        return () => clearInterval(interval);
    },  [] );

    
  return (
    <>
    
    <View style={styles.container}>
    
        <View style={styles.clock}>
        <Text style={styles.clockText}>{date}</Text>
        </View>
   
        <Text style={styles.title}>Cadastre um novo alarme: </Text>
        <Text>Hora: </Text>
        <TextInput
        style={styles.input}
        onChangeText={(value) => setHour(value)}
        placeholder="00"
        keyboardType="numeric"
        />

        <Text>Minuto: </Text>
        <TextInput
        style={styles.input}
        onChangeText={(value) => setMinute(value)}
        placeholder="00"
        keyboardType="numeric"
        />

        <Text>Descrição: </Text>
        <TextInput
        style={styles.input}
        onChangeText={(value) => setdescription(value)}
        placeholder="Exemplo: Almoço"
    
        />

        <Button title='Cadastrar' onPress={() => cadastrar()} />
        
      
        <Text style={styles.title}>Alarmes Cadastrados:</Text>
        
        <FlatList 
        data={value}
        keyExtractor={ item => String(item.id)}
        renderItem={ ({ item }) => <ListItem data={item}
        /> }
        />
    </View>
    </>
  );
};

function ListItem({ data }: {data:any}){
    return (<View>
        <Text style={styles.itens}>{data.hora} - {data.texto}</Text>
        
    </View>)
}

