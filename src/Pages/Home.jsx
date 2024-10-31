import React, { useEffect,useState } from 'react';
// import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { FcLike } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import Tshirt from "../assets/T shirt.png"
import png from "../assets/npg tshirt.png"
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import video from "../assets/AnimeV.webm"
import benner from "../assets/banner/anime-banner.jpg"
import cardTshirt from "../assets/cards/anime t shirt.png"
import seasonal from "../assets/cards/sweatshirt.png"
import clothing from "../assets/cards/many t shirts.png"



 
export default function Home({setshowcard}) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([])
  const [open, setOpen] = useState(8)
  const [productfilter , setproductsfilter] = useState([])



  useEffect(()=>{
    async function fetchData() {
      const response = await axios.get('https://fakestoreapi.com/products');
      console.log(response.data)
      setProducts(response.data)
    }
    fetchData()
  },[])

  useEffect(()=>{
     const filterdata = products.filter(item=>item.id<=open)
     setproductsfilter(filterdata)
     console.log("filter ", filterdata)
  },[open,products])

  function hendlepage(id){
    let data = products.filter(item=>item.id == id)
    setshowcard(data)
    navigate("/customized")
  }

  return (


    <div className="w-full  mt-10 xl:ml-0 ">
      
      <Carousel interval={3000} controls={true} indicators={true}>
      <Carousel.Item>
        <img
          src="https://img.freepik.com/premium-psd/new-arrival-t-shirt-banner-template_361928-1580.jpg"
          alt='first'
          // style={{ width: '100%', height: '700px', background:"red"}}
          className='w-full xl:h-[95vh] h-[30vh]'
        />

      </Carousel.Item>
       
      <Carousel.Item>
        <img
          src="https://media.contra.com/image/upload/aj53mqlr3nih4jnyy5og"
          alt='second'
          // style={{ width: '100%', height: '700px',background:"blue" }}
             className='w-full xl:h-[95vh] h-[30vh]'
        />
      
      </Carousel.Item>

      <Carousel.Item>
        <img
          src="https://www.vocso.com/blog/wp-content/uploads/2023/02/TheMangaStore-Ecommerce-Case-Study.jpg"
          alt='third'
          // style={{ width: '100%', height: '700px', background:"green" }}
             className='w-full xl:h-[95vh] h-[30vh]'
        />
     
      </Carousel.Item>
    </Carousel>
        
    <div className='  xl:h-[430px] md:h-[200px]  rounded-sm flex justify-center  mt-20'>
  <img src={benner}  className='w-full h-full'/>
</div>
      
      
   
  


{/* 
      <div   className="mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4  mt-20  p-5 "   >
    
    

<div
  className=' cardsb  xl:h-96 h-52 rounded-md align-middle cursor-pointer overflow-hidden grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
  onClick={() => navigate("/Tshirt")}
>
  <div className='xl:w-96  xl:h-full h-52 w-52 p-2'>
    <img
      src={cardTshirt}
      className=' w-full h-full  align-middle mr-10 p-5'
      alt="Tshirt"
    />
  </div>
</div>

<div
  className=' cardsb xl:h-96 h-52 rounded-md align-middle cursor-pointer overflow-hidden grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
  onClick={() => navigate("/bottom-wear")}
>
  <div className='xl:w-96 xl:h-full h-52 w-52 p-2'>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQ6shZ9JVDI-tUgY7HhoxFfcQ6zLf1Tm-Jg&s"
      className=' w-full h-full  align-middle p-5'
      alt="bottom-wear"
    />
  </div>
</div>


  
  <div
  className=' cardsb xl:h-96 h-52 rounded-md align-middle cursor-pointer overflow-hidden grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
  onClick={() => navigate("/Hoodie")}
>
  <div className='xl:w-96 xl:h-full h-52 w-52 p-2'>
    <img
      src={seasonal}
      className=' w-full h-full  align-middle p-5'
      alt="Tshirt"
    />
  </div>
</div>
 
  <div
  className=' cardsb xl:h-96 h-52 rounded-md align-middle cursor-pointer overflow-hidden grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
  onClick={() => navigate("/seasonals")}
>
  <div className='xl:w-96 xl:h-full h-52 w-52 object-center p-2'>
    <img
      src={clothing}
      className=' w-full h-full  align-middle p-5'
      alt="/seasonals"
    />
  </div>
</div>
     </div>
      */}
     
     
     
     <div className="mb-16 grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-20">
        
        <div
            className="group cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
            onClick={() => navigate("/Tshirt")}
          >
            <div className="relative aspect-square">
              <img
                src="https://cdn.dribbble.com/userupload/14573009/file/original-31d1b24111ed36bda8368039d460dcba.jpg?resize=400x300&vertical=center"
         
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
           </div>
          </div>

         <div
            className="group cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl "
            onClick={() => navigate("/bottom-wear")}
          >
            <div className="relative aspect-square ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJQ6shZ9JVDI-tUgY7HhoxFfcQ6zLf1Tm-Jg&s"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
           </div>
          </div>
       
         
         <div
            className="group cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
            onClick={() => navigate("/Hoodie")}
          >
            <div className="relative aspect-square">
              <img
                src={seasonal}
              
                
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
           
           
           </div>
          </div>

      <div
            className="group cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
            onClick={() => navigate("/seasonals")}
          >
            <div className="relative aspect-square">
              <img
                src={clothing}
              
                
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
        
        
           </div>
          </div>

      </div>
     
  



    


     

      <h1 className='font-semibold text-4xl text-center mt-5'>Latest Collection</h1>


      <div 
      // className="mt-20 mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 grid-cols-2 "
      className="mb-16 grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-20"
      >
{/* {
  productfilter.map((category, index) => (
    <div
      key={index}
      className='relative  xl:w-80 w-48 overflow-hidden xl:h-96 bg-gray-100 hover:bg-gray-300 max-h-fit pb-10 '
      // className="group cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative aspect-square">
        <img
          src={png}
          alt={category.title}  // Fixed: Use title for alt text
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className=" bg-black/40 p-4 opacity-0 transition-opacity group-hover:opacity-100">
          <h3 className="text-xl font-bold text-white">{category.price} hello</h3>
        </div>
       
    </div>
  ))} */}
  
  
 
  {productfilter.map((category, index) => (
  <div
    key={index}
    className='relative xl:w-80 w-48 overflow-hidden xl:h-96 h-80 bg-gray-100 hover:bg-gray-300 pb-10 '
  >
    <div className="xl:h-72 line-clamp-2">
      <img
        src={png}
        alt={category.title || 'Product image'} // Added fallback alt text
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    
    {/* Display title below the image */}
    <div className="p-4">
      <h3 className="text-lg font-semibold line-clamp-1">{category.title}</h3>
      <p className="mt-2">${category.price}</p>
    </div>

    {/* Hover overlay */}
    {/* <div className="absolute inset-0 bg-black/40 p-4 opacity-0 transition-opacity group-hover:opacity-100">
      <h3 className="text-xl font-bold text-white">{category.title}</h3>
    </div> */}
  </div>
))}
  
</div>
     
      <button onClick={()=>navigate('new-arrivals')} className='border-2 border-black  mt-10 ml-36  xl:ml-[95vh] rounded-md font-semibold p-1 px-5 '>View More</button>
      
      <div className=' h-[500px]'>
        <video src={video}   loop muted autoPlay className='w-full h-[500px]  mt-10 object-cover '></video>
      </div>
      
      





      <h1 className='font-semibold text-4xl text-center mt-20'>Our Arrivals</h1>
  

      <div 
      // className="mb-16 grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4  mt-20"
      className="mb-16 grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 mt-20"
      >
{/* {
  productfilter.map((category, index) => (
    <div
      key={index}
      className='relative  xl:w-80 w-48 overflow-hidden xl:h-96 bg-gray-100 hover:bg-gray-300  '
      // className="group cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
    >
      <div className="xl:h-48">
        <img
          src={png}
          alt={category.title}  // Fixed: Use title for alt text
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
       
      <div className="absolute inset-0 bg-black/40 p-4 opacity-0 transition-opacity group-hover:opacity-100">
          <h3 className="text-xl font-bold text-white">{category.title}</h3>
        </div>
    </div>
  ))} */}
  
  
  {productfilter.map((category, index) => (
  <div
    key={index}
    className='relative xl:w-80 w-48 overflow-hidden xl:h-96 h-72 bg-gray-100 hover:bg-gray-300 '
  >
    <div className="xl:h-72 ">
      <img
        src={png}
        alt={category.title || 'Product image'} // Added fallback alt text
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    
    {/* Display title below the image */}
    <div className="p-4">
      <h3 className="text-sm font-semibold line-clamp-2">{category.title}</h3>
      <p className="mt-2">${category.price}</p>
    </div>

    {/* Hover overlay */}
    <div className="absolute inset-0 bg-black/40 p-4 opacity-0 transition-opacity group-hover:opacity-100">
      <h3 className="text-xl font-bold text-white">{category.title}</h3>
    </div>
  </div>
))}

</div>



      <button onClick={()=>navigate('new-arrivals')} className='border-2 border-black  mt-2 ml-32 xl:ml-[95vh] rounded-md font-semibold p-1 px-5 '>View More</button>
    {/* <h1 className='text-black xl:text-5xl  text-3xl text-center mt-5'>Create you now customize T shirt</h1>

     <div className='flex justify-center items-center mt-2'>
  <div className='xl:w-[69rem]  rounded-md mx-auto bg-red-50 xl:h-[600px] flex justify-center items-center'>
   <img src={Tshirt} alt='Image' className='relative w-96 h-96 p-5 xl:w-[500px] xl:h-[500px] animate-rotateLR'/>
   <h1 className='absolute text-6xl xl:text-9xl font-semibold ml-32 mb-20'>T   SHIRT </h1>
   <h1  className='absolute text-1xl xl:text-3xl font-semibold xl:ml-72 xl:mt-16 ml-52'>ANIMATED MOCKUP</h1>
  </div>
</div> */}



<div className='snap-x flex overflow-x-auto  xl:w-screen  w-96 ml-5  justify-start gap-28  p-5 scroll-auto mt-5 scrollbar-hide'>
  {
    productfilter.map((product, index) => (
      <div onClick={()=>hendlepage(product.id)} key={index} className='cursor-pointer flex-shrink-0 snap-center w-72 rounded-md overflow-hidden h-96 bg-white max-h-fit pb-10 '> 
        <img src="https://media.istockphoto.com/id/991893524/photo/stylish-young-male-and-female-models-in-colorful-hoodies-sitting-on-chairs-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=HlsYbtPQRka-6b0XlZYDpmFPZPtDGuFi-uNzTmL4bbA=" alt="" className='w-full h-52'/>
        <div className='flex justify-evenly align-middle mt-3'>
          <h2>{product.category}</h2>
          <h2 className='border-2 px-3 p-1 rounded-md border-black'>{product.price}</h2>
        </div>
        <p className='text-xs ml-3 mt-2 '>{product.title}</p>
        <button className='text-white ml-3 text-xs rounded-md p-2 mt-2 bg-black'>Order Now</button>
      </div>
    ))
  }
</div>

    </div>
    
  );
}



















// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [favorites, setFavorites] = useState([]);
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const bannerImages = [
//     "https://img.freepik.com/premium-psd/new-arrival-t-shirt-banner-template_361928-1580.jpg",
//     "https://media.contra.com/image/upload/aj53mqlr3nih4jnyy5og",
//     "https://www.vocso.com/blog/wp-content/uploads/2023/02/TheMangaStore-Ecommerce-Case-Study.jpg"
//   ];

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const data = await response.json();
//         setProducts(data);
//         setFilteredProducts(data.slice(0, 8));
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleAddToCart = (product, e) => {
//     e.stopPropagation();
//     setCart(prev => {
//       const exists = prev.find(item => item.id === product.id);
//       if (exists) {
//         return prev.map(item =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };

//   const toggleFavorite = (productId, e) => {
//     e.stopPropagation();
//     setFavorites(prev =>
//       prev.includes(productId)
//         ? prev.filter(id => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   const ProductCard = ({ product }) => (
//     <div 
//       className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl"
//       onMouseEnter={() => setHoveredProduct(product.id)}
//       onMouseLeave={() => setHoveredProduct(null)}
//       onClick={() => navigate(`/product/${product.id}`)}
//     >
//       <div className="relative aspect-square overflow-hidden">
//         <img 
//           src={product.image || "/api/placeholder/300/300"} 
//           alt={product.title}
//           className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
//         />
//         <span className="absolute left-2 top-2 rounded bg-red-500 px-2 py-1 text-xs text-white">
//           New
//         </span>
        
//         <div 
//           className={`absolute right-2 top-2 flex flex-col gap-2 transition-all duration-300 
//             ${hoveredProduct === product.id ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
//             md:translate-x-0 md:opacity-100`}
//         >
//           <button
//             onClick={(e) => toggleFavorite(product.id, e)}
//             className={`rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-100
//               ${favorites.includes(product.id) ? 'text-red-500' : 'text-gray-600'}`}
//           >
//             ❤️
//           </button>
//           <button
//             onClick={(e) => handleAddToCart(product, e)}
//             className="rounded-full bg-white p-2 text-gray-600 shadow-md transition-colors hover:bg-gray-100"
//           >
//             🛒
//           </button>
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               navigate(`/product/${product.id}`);
//             }}
//             className="rounded-full bg-white p-2 text-gray-600 shadow-md transition-colors hover:bg-gray-100"
//           >
//             👁️
//           </button>
//         </div>
//       </div>

//       <div className="p-4">
//         <div className="mb-2 flex items-center justify-between">
//           <h3 className="line-clamp-1 font-medium">{product.title}</h3>
//           <span className="font-bold">${product.price}</span>
//         </div>
//         <p className="line-clamp-2 text-sm text-gray-600">{product.description}</p>
//       </div>
//     </div>
//   );

//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Banner Carousel */}
//       <div className="relative mb-16 overflow-hidden rounded-lg">
//         <div className="relative h-[500px] md:h-[600px]">
//           {bannerImages.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={`Banner ${index + 1}`}
//               className={`absolute h-full w-full object-cover transition-opacity duration-500
//                 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
//             />
//           ))}
//         </div>
//         <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
//           {bannerImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`h-2 w-2 rounded-full transition-all
//                 ${currentSlide === index ? 'w-4 bg-white' : 'bg-white/50'}`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Category Cards */}
   
   
//       <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         {['T-Shirts', 'Bottom Wear', 'Hoodies', 'Seasonals'].map((category, index) => (
//           <div
//             key={index}
//             className="group cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
//             onClick={() => navigate(`/${category.toLowerCase()}`)}
//           >
//             <div className="relative aspect-square">
//               <img
//                 src={`/api/placeholder/400/400`}
//                 alt={category}
//                 className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-black/40 p-4 opacity-0 transition-opacity group-hover:opacity-100">
//                 <h3 className="text-xl font-bold text-white">{category}</h3>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Latest Collection */}
//       <section className="mb-16">
//         <h2 className="mb-8 text-center text-3xl font-bold">Latest Collection</h2>
//         <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {filteredProducts.map(product => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//         <button
//           onClick={() => navigate('/new-arrivals')}
//           className="mx-auto mt-8 block rounded-md bg-black px-6 py-2 text-white transition-colors hover:bg-gray-800"
//         >
//           View More
//         </button>
//       </section>

//       {/* Custom T-shirt Section */}
//       {/* <section className="rounded-lg bg-gray-50 p-8 text-center">
//         <h2 className="mb-4 text-3xl font-bold">Create Your Custom T-shirt</h2>
//         <p className="mb-8 text-gray-600">Design your unique style with our customization tools</p>
//         <button
//           onClick={() => navigate('/customize')}
//           className="rounded-md bg-black px-6 py-3 text-white transition-colors hover:bg-gray-800"
//         >
//           Start Designing
//         </button>
//       </section> */}
//     </div>
//   );
// };

// export default Home;