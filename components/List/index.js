import React, { useState, useRef } from 'react';
import { List, Divider, Input, Button, notification } from 'antd';
import { DeleteOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons'

const PlayerList = () => {

  const [data, setData] = useState([
    'Çağlayan', 'Atakan', 'Atılay', 'Kemal', 'Cihan', 'Berk',
    'Yusuf', 'Ali', 'Veli', 'Serhat', 'Cem', 'Dora', 'Onur', 'Ediz'
  ]);

  const [inputVal, setInputVal] = useState('');

  const inputRef = useRef(null);

  const openNotificationWithIcon = (type, message) => {
    notification[type]({
      message,
      placement: 'bottomRight'
    });
  };

  const addUser = () => {
    let userAlreadyExist = false;
    data.forEach(item => {
      if (item.toLowerCase() === inputVal.toLowerCase()) {
        userAlreadyExist = true;
      }
    })
    if (userAlreadyExist) {
      openNotificationWithIcon('error', 'Bu isimle bir oyuncu zaten var.');
      setInputVal('');
      return;
    }
    const newList = [...data];
    newList.unshift(inputVal);
    setData(newList);
    if (newList.length > 14) {
      openNotificationWithIcon('warning', `${inputVal}, liste full olduğu için şuan yedeksiniz.`);
    } else {
      openNotificationWithIcon('success', `${inputVal} eklendi.`);
    }
    setInputVal('');
    inputRef.current.focus();
  }

  const removeItem = player => {
    const filteredData = data.filter(item => item !== player);
    setData(filteredData);
  };

  const handleInput = (event) => {
    if (event.code === 'Enter') {
      addUser();
    }
  }

  return (
    <>
      <div className="input-container">
        <Input
          size="large"
          placeholder="username..."
          prefix={<UserOutlined />}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) => handleInput(e)} 
          ref={inputRef}
          />
        <Button type="primary" onClick={addUser}>Add <UserAddOutlined /></Button>
      </div>
      <Divider orientation="center">Oyuncu Listesi</Divider>
      <List
        header={<div>Oyuncu Sayısı: <span className="player-count">{data.length} / 14</span></div>}
        bordered
        dataSource={data}
        size="small"
        renderItem={(item, index) => {
          return (
            <List.Item>
              <span className={((data.length - index <= 14) ? 'active-item' : 'backup-item')}>{item} ({(data.length - index <= 14 ? 'Oyuncu' : 'Yedek')})</span>
              <DeleteOutlined style={{ color: '#F23A3C', fontSize: '30px', cursor: 'pointer' }} onClick={() => removeItem(item)} />
            </List.Item>
          )
        }}
      />
    </>
  );
};

export default PlayerList;