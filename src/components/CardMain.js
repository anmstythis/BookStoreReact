import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardItem from './CardItem';

const Card = ({ head, term, route }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/media')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const addToCart = (id) => {
    const Item = data.find(item => item.id === id);
    if (Item) {
      Item.addedToCart = true;
      Item.addedAmount += 1;
      axios.put(`http://localhost:3001/media/${Item.id}`, Item)
        .then(() => {
          setData(data.map(item => item.id === Item.id ? { ...item, ...Item } : item));
          console.log(Item);
        })
        .catch(err => console.error(err));
    }
  };

  const becomeFavorite = (id) => {
    const Book = data.find(item => item.id === id);
    Book.isFavorite = !Book.isFavorite;
    axios.put(`http://localhost:3001/media/${Book.id}`, Book)
      .then(() => {
        setData(data.map(item => item.id === Book.id ? { ...item, isFavorite: Book.isFavorite } : item));
      })
      .catch(err => console.log(err));
  };

  const removeFromCart = (id) => {
    const Item = data.find(item => item.id === id);
    if (Item) {
      if (Item.addedAmount <= 1)
        {
          Item.addedAmount = 0;
          Item.addedToCart = false;
        }
      else
      {
        Item.addedAmount -= 1;
      }
      axios.put(`http://localhost:3001/media/${Item.id}`, Item)
        .then(() => {
          setData(data.map(item => item.id === Item.id ? { ...item, ...Item } : item));
          console.log(Item);
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <div>
      <u><header className='head'>{head}</header></u>
      <div className="cards">
        {data.filter(term).map((item, i) => (
          <CardItem
            key={i}
            item={item}
            becomeFavorite={becomeFavorite}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            changePrice={route === "cart" ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
