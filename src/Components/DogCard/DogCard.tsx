import React from 'react';
import styles from "./DogCard.module.scss";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {DogsTypes} from "../../store/dogs/dogs.types.tsx";
import {useAction} from "../../hooks/useAction.tsx";
import {useTypedSelector} from "../../hooks/useTypedSelector.tsx";
import {pink} from "@mui/material/colors";
const DogCard: React.FC<{ dog: DogsTypes }> = ({dog}) => {
    const {addItem} = useAction()
    const {like} = useTypedSelector(state => state)
    const isExist = like.some(p => p.id === dog.id)
    return (
        <div>
                <div className={styles.card_dog} >
                    <div className={styles.favourite_btn}>
                        <FavoriteIcon
                            onClick={() => !isExist && addItem(dog)}
                            sx={{ color: isExist ? pink[700] : pink[50] }}
                        />
                    </div>
                    <div className={styles.card_dog_img}>
                        <img src={dog.image.url} alt="" />
                    </div>
                    <div className={styles.card_dog_text}>
                        <h3>Порода: {dog.name}</h3>
                        {dog.bred_for && (
                            <div>
                                <p style={{ fontWeight: "bold" }}>Разводят для:</p>
                                <p>{dog.bred_for}</p>
                            </div>
                        )}
                        {dog.life_span && (
                            <div>
                                <p style={{ fontWeight: "bold" }}>Продолжительность жизни:</p>
                                <p>{dog.life_span}</p>
                            </div>
                        )}
                        {dog.temperament && (
                            <div>
                                <p style={{ fontWeight: "bold" }}>Характер:</p>
                                <p>{dog.temperament}</p>
                            </div>
                        )}
                        {dog.breed_group && (
                            <div style={{ display: "flex" }}>
                                <p style={{ fontWeight: "bold" }}>Группа:</p>
                                <p style={{ marginLeft: "10px" }}>{dog.breed_group}</p>
                            </div>
                        )}
                        {dog.origin && (
                            <div>
                                <p style={{ fontWeight: "bold" }}>Зона обитания:</p>
                                <p>{dog.origin}</p>
                            </div>
                        )}
                    </div>
                </div>
        </div>
    );
};

export default DogCard;