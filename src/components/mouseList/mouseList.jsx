import styles from './mouseList.module.css'
import mouse from '../mouse/mouse'

const mouse = [
  {
    id: 1,
    title: 'BBC mouse',
    price: 33.11,
    description:
      'BBC for BBC people',
    category: "big mouses",
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    rating: { rate: 4.5, count: 28 },
  },
  {
    id: 2,
    title: 'chtochto mouse',
    price: 9.99,
    description:
      'goat mouse',
    category: "small mouses",
    image:
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1767&q=80',
    rating: { rate: 4.1, count: 40 },
  },
  {
    id: 3,
    title: 'Ecselcio',
    price: 59.99,
    description:
      'make mouses great again',
    category: "big mouses",
    image: "https://images.unsplash.com/photo-1563297007-0686b7003af7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2117&q=80",
    rating: { rate: 4.9, count: 2 },
  },
  {
    id: 4,
    title: 'homeless',
    price: 2.99,
    description:
      'just a mouse',
    category: 'small mouses',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c6/Wheel_mouse.JPG',
    rating: { rate: 2.1, count: 343 },
  },
  {
    id: 5,
    title:
      'beLoud!',
    price: 79.49,
    description:
      'great experience, great materials, great headphones',
    category: "headphones",
    image: 'https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg?w=2000',
    rating: { rate: 4.0, count: 121 },
  },
]

function mouseList() {
  return (
    <ul className={styles.mouseList}>
      {mouses.map((mouse) => {
        return <mouse mouse={mouse} key={mouse.id} />
      })}
    </ul>
  )
}

export default mouseList