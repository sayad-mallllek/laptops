export type LightItemType = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string | number;
  smallDescription?: string;
};

/*
 {
    id: 1,
    title: "HP Envy 13",
    description: "HP Envy 13 2020",
    image:
      "https://www.techadvisor.com/wp-content/uploads/2022/06/hp_envy_13_2020_review_10.jpg?quality=50&strip=all&w=1024",
    price: 999.99,
    smallDescription: "HP Envy 13 2020, 8GB RAM, 512GB SSD,",
    cpu: "Intel Core i5-1135G7",
    gpu: "Intel Iris Xe Graphics",
    ram: "8GB",
    storage: "512GB SSD",
    display: "13.3-inch, 1920 x 1080",
    ports: "2x USB-C, 1x USB-A, 1x headphone jack",
    weight: "1.3kg",
    os: "Windows 10 Home",
  },
*/

export type ItemType = LightItemType & {
  cpu: string;
  gpu: string;
  ram: string;
  storage: string;
  display: string;
  ports: string;
  weight: string;
  os: string;
};
