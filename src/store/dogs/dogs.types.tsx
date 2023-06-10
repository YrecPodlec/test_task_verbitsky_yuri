interface Image {
    url: string;
}
export interface DogsTypes{
    image: Image;
    id: number;
    name: string;
    bred_for?: string;
    life_span?: string;
    temperament?: string;
    breed_group?: string;
    origin?: string;
}