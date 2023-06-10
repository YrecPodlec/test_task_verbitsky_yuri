import React from 'react';
import { useTypedSelector } from "../../hooks/useTypedSelector.tsx";
import styles from "../../Components/DogCard/DogCard.module.scss";
import { useAction } from "../../hooks/useAction.tsx";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { pink } from "@mui/material/colors";

const Likes: React.FC = () => {
    const { like } = useTypedSelector(state => state);
    const { removeItem } = useAction();
    return (
        <div>
            {like.length ? (
                <div className={styles.list_dogs_likes}>
                    {like.map(dogItem => {
                        const isExist = like.some(item => item.id === dogItem.id);
                        return (
                            <div className={styles.card_dog} key={dogItem.id}>
                                <div className={styles.favourite_btn}>
                                    <FavoriteIcon
                                        onClick={() => {
                                            if (isExist) {
                                                removeItem({ id: dogItem.id });
                                            }
                                        }}
                                        sx={{ color: isExist ? pink[700] : pink[50] }}
                                    />
                                </div>
                                <div className={styles.card_dog_img}>
                                    <img src={dogItem.image.url} alt="" />
                                </div>
                                <div className={styles.card_dog_text}>
                                    <h3>Порода: {dogItem.name}</h3>
                                    {dogItem.bred_for && (
                                        <div>
                                            <p style={{ fontWeight: "bold" }}>Разводят для:</p>
                                            <p>{dogItem.bred_for}</p>
                                        </div>
                                    )}
                                    {dogItem.life_span && (
                                        <div>
                                            <p style={{ fontWeight: "bold" }}>Продолжительность жизни:</p>
                                            <p>{dogItem.life_span}</p>
                                        </div>
                                    )}
                                    {dogItem.temperament && (
                                        <div>
                                            <p style={{ fontWeight: "bold" }}>Характер:</p>
                                            <p>{dogItem.temperament}</p>
                                        </div>
                                    )}
                                    {dogItem.breed_group && (
                                        <div style={{ display: "flex" }}>
                                            <p style={{ fontWeight: "bold" }}>Группа:</p>
                                            <p style={{ marginLeft: "10px" }}>{dogItem.breed_group}</p>
                                        </div>
                                    )}
                                    {dogItem.origin && (
                                        <div>
                                            <p style={{ fontWeight: "bold" }}>Зона обитания:</p>
                                            <p>{dogItem.origin}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div>No items</div>
            )}
        </div>
    );
};

export default Likes;
