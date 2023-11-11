import{b as m,g as c,j as s,m as d,Q as j,n as w,k as f,l as t}from"./index-33a26ca7.js";const y=({product:e})=>{const n=m(),r=l=>{const i=[];for(let a=1;a<=5;a++)a<=l?i.push(s.jsx(t,{className:"text-yellow-500"},a)):i.push(s.jsx(t,{className:"text-gray-300"},a));return i},x=e.title,h=(l=>String(l).toLowerCase().split(" ").join("-"))(x),o=c(),g=()=>{o(`/product/${h}`,{state:{item:e}})};return s.jsxs("article",{className:"group cursor-pointer border p-3 rounded-xl bg-white hover:shadow-2xl transition-all duration-300 ease-in-out",children:[s.jsxs("div",{onClick:g,className:"",children:[s.jsxs("div",{className:"w-full h-80 overflow-hidden rounded-xl relative",children:[s.jsx("img",{src:e==null?void 0:e.image,alt:e==null?void 0:e.title,className:"object-cover w-full h-full rounded-xl transition-all duration-400 ease-linear group-hover:scale-125 opacity-95 hover:opacity-100"}),(e==null?void 0:e.isNew)&&s.jsx("h6",{className:"bg-black text-white absolute top-10 right-0 p-1 px-2 rounded-sm",children:"New Arrival"})]}),s.jsxs("div",{className:"my-3",children:[s.jsx("h6",{className:"text-black/60 bg-purple-100 capitalize py-1 px-3 text-base font-bold rounded-sm tracking-widest inline ",children:e==null?void 0:e.category}),s.jsx("h2",{className:"text-xl md:text-2xl font-semibold capitalize my-3.5 text-gray-700 truncate tracking-wide",children:e==null?void 0:e.title}),s.jsx("div",{className:"flex gap-3 text-2xl md:text-3xl",children:r(e==null?void 0:e.rating)})]})]}),s.jsxs("div",{className:"flex justify-between mt-4",children:[s.jsxs("div",{className:"flex gap-2 items-center",children:[s.jsxs("h5",{className:"line-through text-gray-400 text-lg tracking-wide",children:["$",e==null?void 0:e.oldPrice]}),s.jsxs("h5",{className:"font-semibold text-gray-800 text-2xl tracking-wide",children:["$",e==null?void 0:e.price]})]}),s.jsxs("button",{onClick:()=>n(d({_id:e._id,title:e.title,image:e.image,price:e.price,quantity:1,description:e.description}))&&j.success(`${e.title} added successfully`),className:"text-2xl w-12 h-12 rounded-full bg-purple-100 text-purple-700 grid place-items-center hover:bg-purple-700 hover:text-white transition-all duration-200",children:[" ",s.jsx(w,{})," "]})]}),s.jsx(f,{position:"top-left",autoClose:3e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"})]})};export{y as P};