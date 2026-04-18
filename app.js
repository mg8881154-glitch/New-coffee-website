const products=[
{id:1,name:"Cappuccino",desc:"Rich espresso topped with velvety steamed milk foam.",price:3.50,img:"https://images.unsplash.com/photo-1509042239860-f550ce710b93",rating:4.5,cat:"hot"},
{id:2,name:"Latte",desc:"Smooth espresso blended with creamy steamed milk.",price:4.00,img:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",rating:4.7,cat:"hot"},
{id:3,name:"Mocha",desc:"A rich blend of espresso, chocolate syrup and steamed milk.",price:4.50,img:"https://images.unsplash.com/photo-1511920170033-f8396924c348",rating:4.8,cat:"hot"},
{id:4,name:"Espresso",desc:"Bold concentrated coffee shot.",price:2.50,img:"https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04",rating:4.3,cat:"hot"},
{id:5,name:"Cold Brew",desc:"Slow-steeped for 12 hours for ultra-smooth cold coffee.",price:5.00,img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735",rating:4.6,cat:"cold"},
{id:6,name:"Flat White",desc:"Velvety microfoam espresso with higher coffee-to-milk ratio.",price:4.00,img:"https://images.unsplash.com/photo-1572442388796-11668a67e53d",rating:4.4,cat:"hot"},
{id:7,name:"Americano",desc:"Espresso diluted with hot water for smooth bold coffee.",price:3.00,img:"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",rating:4.2,cat:"hot"},
{id:8,name:"Macchiato",desc:"Espresso stained with a dash of foamed milk.",price:3.50,img:"https://images.unsplash.com/photo-1485808191679-5f86510bd9d4",rating:4.4,cat:"hot"},
{id:9,name:"Irish Coffee",desc:"Hot coffee with Irish whiskey brown sugar and whipped cream.",price:6.50,img:"https://images.unsplash.com/photo-1544787219-7f47ccb76574",rating:4.6,cat:"hot"},
{id:10,name:"Iced Latte",desc:"Chilled espresso poured over ice with cold milk.",price:4.50,img:"https://images.unsplash.com/photo-1517701604599-bb29b565090c",rating:4.7,cat:"cold"},
{id:11,name:"Affogato",desc:"Vanilla ice cream drowned in a hot espresso shot.",price:5.50,img:"https://images.unsplash.com/photo-1568649929103-28ffbefaca1e",rating:4.9,cat:"hot"},
{id:12,name:"Turkish Coffee",desc:"Finely ground coffee brewed in a cezve. Rich and strong.",price:3.50,img:"https://images.unsplash.com/photo-1578374173705-969cbe6f2d6b",rating:4.5,cat:"hot"},
{id:13,name:"Cortado",desc:"Equal parts espresso and warm milk.",price:3.50,img:"https://images.unsplash.com/photo-1534778101976-62847782c213",rating:4.4,cat:"hot"},
{id:14,name:"Ristretto",desc:"Shorter more concentrated espresso shot.",price:2.50,img:"https://images.unsplash.com/photo-1596952954288-16862d37405b",rating:4.3,cat:"hot"},
{id:15,name:"Vienna Coffee",desc:"Strong black coffee topped with whipped cream.",price:4.50,img:"https://images.unsplash.com/photo-1606791405792-1004f1718d0c",rating:4.6,cat:"hot"},
{id:16,name:"Dalgona Coffee",desc:"Whipped instant coffee foam over cold milk.",price:4.00,img:"https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e",rating:4.7,cat:"cold"},
{id:17,name:"Lungo",desc:"Long espresso shot brewed with more water.",price:3.00,img:"https://images.unsplash.com/photo-1497515114629-f71d768fd07c",rating:4.2,cat:"hot"},
{id:18,name:"Nitro Cold Brew",desc:"Cold brew infused with nitrogen for creamy texture.",price:5.50,img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64",rating:4.8,cat:"cold"},
{id:19,name:"Kopi Luwak",desc:"The worlds rarest coffee. Earthy and smooth.",price:35.00,img:"https://images.unsplash.com/photo-1447933601403-0c6688de566e",rating:4.9,cat:"premium"},
{id:20,name:"Black Ivory Coffee",desc:"Thai elephant-processed coffee. Ultra-rare and complex.",price:45.00,img:"https://images.unsplash.com/photo-1504630083234-14187a9df0f5",rating:5.0,cat:"premium"},
{id:21,name:"Jamaican Blue Mountain",desc:"Grown at 7500ft altitude. Mild bright and no bitterness.",price:28.00,img:"https://images.unsplash.com/photo-1498804103079-a6351b050096",rating:4.9,cat:"premium"},
{id:22,name:"Hawaiian Kona",desc:"Sun-grown on volcanic slopes of Hawaii.",price:22.00,img:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",rating:4.8,cat:"premium"},
{id:23,name:"Panama Geisha",desc:"Floral jasmine-like aroma. The most awarded coffee.",price:30.00,img:"https://images.unsplash.com/photo-1511920170033-f8396924c348",rating:5.0,cat:"premium"},
{id:24,name:"Caramel Macchiato",desc:"Vanilla syrup steamed milk espresso and caramel drizzle.",price:5.00,img:"https://images.unsplash.com/photo-1485808191679-5f86510bd9d4",rating:4.7,cat:"hot"},
{id:25,name:"Hazelnut Latte",desc:"Espresso with hazelnut syrup and creamy steamed milk.",price:4.50,img:"https://images.unsplash.com/photo-1517701604599-bb29b565090c",rating:4.6,cat:"hot"},
{id:26,name:"Pumpkin Spice Latte",desc:"Espresso with pumpkin cinnamon nutmeg and clove.",price:5.50,img:"https://images.unsplash.com/photo-1572442388796-11668a67e53d",rating:4.5,cat:"hot"},
{id:27,name:"Coconut Latte",desc:"Espresso with coconut milk and a hint of vanilla.",price:5.00,img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735",rating:4.6,cat:"hot"},
{id:28,name:"Matcha Latte",desc:"Premium Japanese matcha blended with steamed milk.",price:5.50,img:"https://images.unsplash.com/photo-1536256263959-770b48d82b0a",rating:4.7,cat:"hot"},
{id:29,name:"Chai Latte",desc:"Spiced black tea with steamed milk.",price:4.00,img:"https://images.unsplash.com/photo-1571934811356-5cc061b6821f",rating:4.5,cat:"hot"},
{id:30,name:"Honey Oat Latte",desc:"Espresso with oat milk and a drizzle of honey.",price:5.00,img:"https://images.unsplash.com/photo-1509042239860-f550ce710b93",rating:4.8,cat:"hot"},
{id:31,name:"Iced Americano",desc:"Espresso shots over ice with cold water.",price:3.50,img:"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",rating:4.4,cat:"cold"},
{id:32,name:"Iced Cappuccino",desc:"Chilled espresso with cold foam and ice.",price:4.00,img:"https://images.unsplash.com/photo-1572442388796-11668a67e53d",rating:4.5,cat:"cold"},
{id:33,name:"Iced Mocha",desc:"Espresso chocolate syrup cold milk and ice.",price:5.00,img:"https://images.unsplash.com/photo-1511920170033-f8396924c348",rating:4.7,cat:"cold"},
{id:34,name:"Iced Caramel Latte",desc:"Espresso caramel syrup milk and ice.",price:5.00,img:"https://images.unsplash.com/photo-1485808191679-5f86510bd9d4",rating:4.8,cat:"cold"},
{id:35,name:"Frappuccino",desc:"Blended ice espresso and milk topped with whipped cream.",price:5.50,img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735",rating:4.9,cat:"cold"},
{id:36,name:"Cold Foam Latte",desc:"Espresso with cold milk and thick cold foam.",price:4.50,img:"https://images.unsplash.com/photo-1517701604599-bb29b565090c",rating:4.6,cat:"cold"},
{id:37,name:"Iced Matcha Latte",desc:"Premium matcha over ice with cold milk.",price:5.50,img:"https://images.unsplash.com/photo-1536256263959-770b48d82b0a",rating:4.7,cat:"cold"},
{id:38,name:"Iced Hazelnut Latte",desc:"Espresso hazelnut syrup and cold milk over ice.",price:5.00,img:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",rating:4.5,cat:"cold"},
{id:39,name:"Indian Cold Coffee",desc:"Chilled milk blended with instant coffee and sugar.",price:2.50,img:"https://images.unsplash.com/photo-1461023058943-07fcbe16d735",rating:4.6,cat:"indian"},
{id:40,name:"Filter Coffee Shake",desc:"South Indian filter coffee blended with cold milk.",price:3.00,img:"https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd",rating:4.7,cat:"indian"},
{id:41,name:"Badam Cold Coffee",desc:"Cold coffee with almond paste and saffron.",price:3.50,img:"https://images.unsplash.com/photo-1517701604599-bb29b565090c",rating:4.8,cat:"indian"},
{id:42,name:"Rose Cold Coffee",desc:"Cold coffee with rose syrup and chilled milk.",price:3.00,img:"https://images.unsplash.com/photo-1572442388796-11668a67e53d",rating:4.5,cat:"indian"},
{id:43,name:"Kesar Cold Coffee",desc:"Saffron-infused cold coffee with chilled milk.",price:4.00,img:"https://images.unsplash.com/photo-1509042239860-f550ce710b93",rating:4.9,cat:"indian"},
{id:44,name:"Irani Cold Coffee",desc:"Inspired by Irani cafes of Hyderabad.",price:3.50,img:"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",rating:4.7,cat:"indian"}
];

const COUPONS={"COFFEE10":10,"BREW20":20,"ARTISAN15":15};
let cart={},wishlist=new Set(),discount=0,currentDetailId=null;
let currentUser=JSON.parse(localStorage.getItem("acUser")||"null");

function starsHTML(r){
  return "★".repeat(Math.floor(r))+(r%1>=0.5?"½":"")+"☆".repeat(5-Math.floor(r)-(r%1>=0.5?1:0));
}

function renderProducts(list){
  const grid=document.getElementById("productGrid");
  if(!grid)return;
  if(!list.length){grid.innerHTML='<div class="no-results">No coffee found ☕</div>';return;}
  grid.innerHTML=list.map(p=>`
    <div class="product-card" onclick="openDetail(${p.id})">
      ${p.price>=20?'<span class="card-badge">Premium</span>':""}
      <button class="card-wishlist ${wishlist.has(p.id)?"active":""}" onclick="event.stopPropagation();toggleWish(${p.id})">${wishlist.has(p.id)?"❤️":"🤍"}</button>
      <div class="card-img-wrap"><img src="${p.img}?w=400&q=70" alt="${p.name}" loading="lazy"></div>
      <div class="card-body">
        <div class="card-name">${p.name}</div>
        <div class="card-rating"><span class="stars">${starsHTML(p.rating)}</span><span class="rating-num">${p.rating}</span></div>
        <div class="card-desc">${p.desc}</div>
        <div class="card-footer">
          <span class="card-price">$${p.price.toFixed(2)}</span>
          <div style="display:flex;gap:8px;align-items:center;" onclick="event.stopPropagation()">
            <div class="qty-control">
              <button class="qty-btn" onclick="changeQty(${p.id},-1)">−</button>
              <span class="qty-num" id="qty-${p.id}">0</span>
              <button class="qty-btn" onclick="changeQty(${p.id},1)">+</button>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart(${p.id})">Add</button>
          </div>
        </div>
      </div>
    </div>`).join("");
}

let activeCategory="all";
function filterProducts(){
  const q=(document.getElementById("searchInput").value||"").toLowerCase();
  const sort=document.getElementById("sortSelect").value;
  let list=products.filter(p=>(activeCategory==="all"||p.cat===activeCategory)&&(p.name.toLowerCase().includes(q)||p.desc.toLowerCase().includes(q)));
  if(sort==="price-asc")list.sort((a,b)=>a.price-b.price);
  if(sort==="price-desc")list.sort((a,b)=>b.price-a.price);
  if(sort==="name")list.sort((a,b)=>a.name.localeCompare(b.name));
  if(sort==="rating")list.sort((a,b)=>b.rating-a.rating);
  renderProducts(list);
}

function changeQty(id,delta){
  const el=document.getElementById("qty-"+id);
  if(el)el.innerText=Math.max(0,parseInt(el.innerText)+delta);
}

function addToCart(id){
  const el=document.getElementById("qty-"+id);
  const qty=el?parseInt(el.innerText):1;
  if(qty===0){showToast("Select quantity first!");return;}
  cart[id]=(cart[id]||0)+qty;
  if(el)el.innerText=0;
  updateCartCount();updateOrderSummary();
  showToast(products.find(p=>p.id===id).name+" x"+qty+" added ☕");
}

function updateCartCount(){
  const total=Object.values(cart).reduce((a,b)=>a+b,0);
  ["cartCount","cartCountM"].forEach(id=>{const el=document.getElementById(id);if(el)el.innerText=total;});
}

function openDetail(id){
  const p=products.find(x=>x.id===id);
  currentDetailId=id;
  document.getElementById("pmName").innerText=p.name;
  document.getElementById("pmImg").src=p.img+"?w=600&q=80";
  document.getElementById("pmStars").innerHTML=starsHTML(p.rating);
  document.getElementById("pmRating").innerText="("+p.rating+")";
  document.getElementById("pmDesc").innerText=p.desc;
  document.getElementById("pmPrice").innerText="$"+p.price.toFixed(2);
  document.getElementById("pmQty").innerText=1;
  openModal("productModal");
}
function changeModalQty(d){
  const el=document.getElementById("pmQty");
  el.innerText=Math.max(1,parseInt(el.innerText)+d);
}
function addModalToCart(){
  const qty=parseInt(document.getElementById("pmQty").innerText);
  cart[currentDetailId]=(cart[currentDetailId]||0)+qty;
  updateCartCount();updateOrderSummary();closeAllModals();
  showToast(products.find(p=>p.id===currentDetailId).name+" x"+qty+" added ☕");
}

function toggleWish(id){
  wishlist.has(id)?wishlist.delete(id):wishlist.add(id);
  ["wishlistCount","wishlistCountM"].forEach(elId=>{const el=document.getElementById(elId);if(el)el.innerText=wishlist.size;});
  filterProducts();
  showToast(wishlist.has(id)?"Added to wishlist ❤️":"Removed from wishlist");
}

function openWishlistModal(){
  const c=document.getElementById("wishlistItems");
  if(!wishlist.size){c.innerHTML='<div class="empty-state"><div class="empty-icon">🤍</div><p>Wishlist is empty</p></div>';}
  else c.innerHTML=[...wishlist].map(id=>{
    const p=products.find(x=>x.id==id);
    return `<div class="cart-item"><img src="${p.img}?w=120" alt="${p.name}"><div class="cart-item-info"><div class="cart-item-name">${p.name}</div><div class="cart-item-price">$${p.price.toFixed(2)}</div></div><button class="cart-item-remove" onclick="toggleWish(${id});openWishlistModal()">🗑</button></div>`;
  }).join("");
  openModal("wishlistModal");
}

function openCartModal(){
  renderCart();
  const ci=document.getElementById("couponInput");
  const cm=document.getElementById("couponMsg");
  if(ci)ci.value="";if(cm)cm.innerText="";
  openModal("cartModal");
}

function renderCart(){
  const c=document.getElementById("cartItems");
  const keys=Object.keys(cart).filter(k=>cart[k]>0);
  if(!keys.length){
    if(c)c.innerHTML='<div class="empty-state"><div class="empty-icon">🛒</div><p>Cart is empty</p></div>';
    ["cartSubtotal","cartTotal"].forEach(id=>{const el=document.getElementById(id);if(el)el.innerText="";});
    return;
  }
  let sub=0;
  if(c)c.innerHTML=keys.map(id=>{
    const p=products.find(x=>x.id==id);const s=p.price*cart[id];sub+=s;
    return `<div class="cart-item"><img src="${p.img}?w=120" alt="${p.name}"><div class="cart-item-info"><div class="cart-item-name">${p.name}</div><div class="cart-item-price">${cart[id]} x $${p.price.toFixed(2)}</div></div><span style="color:var(--gold);font-weight:600;">$${s.toFixed(2)}</span><button class="cart-item-remove" onclick="removeFromCart(${id})">✕</button></div>`;
  }).join("");
  const total=sub*(1-discount/100);
  const cs=document.getElementById("cartSubtotal");const ct=document.getElementById("cartTotal");
  if(cs)cs.innerText="$"+sub.toFixed(2);if(ct)ct.innerText="$"+total.toFixed(2);
  const dr=document.getElementById("discountRow");const cd=document.getElementById("cartDiscount");
  if(discount&&dr&&cd){dr.style.display="flex";cd.innerText="-"+discount+"% (-$"+(sub*discount/100).toFixed(2)+")";}
  else if(dr)dr.style.display="none";
}

function removeFromCart(id){delete cart[id];updateCartCount();renderCart();updateOrderSummary();}

function applyCoupon(){
  const code=document.getElementById("couponInput").value.trim().toUpperCase();
  const msg=document.getElementById("couponMsg");
  if(COUPONS[code]){discount=COUPONS[code];msg.style.color="#6dbf6d";msg.innerText="✅ "+discount+"% off applied!";renderCart();}
  else{discount=0;msg.style.color="#e05555";msg.innerText="❌ Invalid coupon";}
}

function proceedToOrder(){
  closeAllModals();
  const el=document.getElementById("contact");
  if(el)el.scrollIntoView({behavior:"smooth"});
}

function updateOrderSummary(){
  const keys=Object.keys(cart).filter(k=>cart[k]>0);
  const empty=document.getElementById("orderSummaryEmpty");
  const items=document.getElementById("orderSummaryItems");
  const totEl=document.getElementById("orderSummaryTotal");
  if(!empty||!items||!totEl)return;
  if(!keys.length){empty.style.display="block";items.innerHTML="";totEl.style.display="none";return;}
  empty.style.display="none";let sub=0;
  items.innerHTML=keys.map(id=>{
    const p=products.find(x=>x.id==id);const s=p.price*cart[id];sub+=s;
    return `<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid rgba(201,168,76,0.08);font-size:0.88rem;"><span style="color:var(--cream)">${p.name} x ${cart[id]}</span><span style="color:var(--gold)">$${s.toFixed(2)}</span></div>`;
  }).join("");
  const total=sub*(1-discount/100);
  const os=document.getElementById("oSubtotal");const ot=document.getElementById("oTotal");
  if(os)os.innerText="$"+sub.toFixed(2);if(ot)ot.innerText="$"+total.toFixed(2);
  totEl.style.display="block";
}

function placeOrder(e){
  e.preventDefault();
  const keys=Object.keys(cart).filter(k=>cart[k]>0);
  if(!keys.length){showToast("Add items to cart first!");return;}
  const name=document.getElementById("orderName").value.trim();
  const address=document.getElementById("orderAddress").value.trim();
  const payment=document.getElementById("orderPayment").value;
  let sub=0;
  const items=keys.map(id=>{const p=products.find(x=>x.id==id);sub+=p.price*cart[id];return p.name+" x "+cart[id];});
  const total=(sub*(1-discount/100)).toFixed(2);
  const order={date:new Date().toLocaleString(),name,address,payment,items,total};
  const history=JSON.parse(localStorage.getItem("coffeeOrders")||"[]");
  history.unshift(order);localStorage.setItem("coffeeOrders",JSON.stringify(history));
  showToast("Order placed! Thank you "+name.split(" ")[0]+" ☕");
  cart={};discount=0;updateCartCount();updateOrderSummary();
  document.getElementById("orderForm").reset();
}

function openOrdersModal(){
  const history=JSON.parse(localStorage.getItem("coffeeOrders")||"[]");
  const c=document.getElementById("ordersItems");
  if(!history.length){c.innerHTML='<div class="empty-state"><div class="empty-icon">📋</div><p>No orders yet</p></div>';}
  else c.innerHTML=history.map(o=>`<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(201,168,76,0.1);border-radius:10px;padding:16px;margin-bottom:12px;"><div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:8px;">📅 ${o.date}</div><div style="font-weight:600;color:var(--cream);margin-bottom:4px;">${o.name}</div><div style="font-size:0.82rem;color:var(--text-muted);margin-bottom:4px;">${o.items.join(", ")}</div><div style="font-size:0.82rem;color:var(--text-muted);">Payment: ${o.payment.toUpperCase()}</div><div style="color:var(--gold);font-weight:600;margin-top:8px;">Total: $${o.total}</div></div>`).join("");
  openModal("ordersModal");
}

function openModal(id){
  const bd=document.getElementById("modalBackdrop");
  const el=document.getElementById(id);
  if(bd)bd.style.display="block";
  if(el)el.style.display="flex";
}
function closeAllModals(){
  const bd=document.getElementById("modalBackdrop");
  if(bd)bd.style.display="none";
  ["cartModal","productModal","wishlistModal","ordersModal","authModal","profileModal"].forEach(id=>{
    const el=document.getElementById(id);if(el)el.style.display="none";
  });
}

function updateAuthUI(){
  const label=currentUser?"👤 "+currentUser.name.split(" ")[0]:"👤 Login";
  ["loginNavBtn","loginNavBtnM"].forEach(id=>{const el=document.getElementById(id);if(el)el.innerText=label;});
}
function handleAuthClick(){
  if(currentUser){
    const pn=document.getElementById("profileName");const pe=document.getElementById("profileEmail");
    if(pn)pn.innerText=currentUser.name;if(pe)pe.innerText=currentUser.email;
    openModal("profileModal");
  }else{switchAuthTab("login");openModal("authModal");}
}
function switchAuthTab(tab){
  const isLogin=tab==="login";
  const lf=document.getElementById("loginForm");const sf=document.getElementById("signupForm");
  const at=document.getElementById("authModalTitle");
  const tl=document.getElementById("tabLogin");const ts=document.getElementById("tabSignup");
  if(lf)lf.style.display=isLogin?"flex":"none";
  if(sf)sf.style.display=isLogin?"none":"flex";
  if(at)at.innerText=isLogin?"👤 Login":"👤 Sign Up";
  if(tl){tl.style.background=isLogin?"var(--gold)":"transparent";tl.style.color=isLogin?"var(--espresso)":"var(--text-muted)";}
  if(ts){ts.style.background=isLogin?"transparent":"var(--gold)";ts.style.color=isLogin?"var(--text-muted)":"var(--espresso)";}
  const le=document.getElementById("loginError");const se=document.getElementById("signupError");
  if(le)le.innerText="";if(se)se.innerText="";
}
function submitLogin(e){
  e.preventDefault();
  const email=document.getElementById("loginEmail").value.trim();
  const password=document.getElementById("loginPassword").value;
  const users=JSON.parse(localStorage.getItem("acUsers")||"[]");
  const user=users.find(u=>u.email===email&&u.password===password);
  if(!user){document.getElementById("loginError").innerText="Invalid email or password.";return;}
  currentUser={name:user.name,email:user.email};
  localStorage.setItem("acUser",JSON.stringify(currentUser));
  updateAuthUI();closeAllModals();showToast("Welcome back "+user.name.split(" ")[0]+"! ☕");
}
function submitSignup(e){
  e.preventDefault();
  const name=document.getElementById("signupName").value.trim();
  const email=document.getElementById("signupEmail").value.trim();
  const password=document.getElementById("signupPassword").value;
  if(password.length<6){document.getElementById("signupError").innerText="Password must be at least 6 characters.";return;}
  const users=JSON.parse(localStorage.getItem("acUsers")||"[]");
  if(users.find(u=>u.email===email)){document.getElementById("signupError").innerText="Email already registered.";return;}
  users.push({name,email,password});localStorage.setItem("acUsers",JSON.stringify(users));
  currentUser={name,email};localStorage.setItem("acUser",JSON.stringify(currentUser));
  updateAuthUI();closeAllModals();showToast("Welcome "+name.split(" ")[0]+"! ☕");
}
function logoutUser(){
  currentUser=null;localStorage.removeItem("acUser");updateAuthUI();closeAllModals();showToast("Logged out.");
}
function togglePass(inputId,btn){
  const inp=document.getElementById(inputId);
  if(inp.type==="password"){inp.type="text";btn.innerText="🙈";}
  else{inp.type="password";btn.innerText="👁";}
}

function showToast(msg){
  const wrap=document.getElementById("toast");if(!wrap)return;
  const t=document.createElement("div");
  t.innerText=msg;
  t.style.cssText="background:#C9A84C;color:#0D0705;padding:12px 20px;border-radius:8px;font-size:0.88rem;font-weight:500;opacity:0;transform:translateY(10px);transition:all 0.35s;box-shadow:0 4px 20px rgba(0,0,0,0.4);";
  wrap.appendChild(t);
  requestAnimationFrame(()=>{t.style.opacity="1";t.style.transform="translateY(0)";});
  setTimeout(()=>{t.style.opacity="0";t.style.transform="translateY(10px)";setTimeout(()=>t.remove(),400);},2800);
}

// ── INIT ──────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded",()=>{
  // Loader
  setTimeout(()=>{
    const l=document.getElementById("loader");
    if(l){l.style.opacity="0";l.style.transition="opacity 0.6s";setTimeout(()=>l.style.display="none",600);}
  },2200);

  // Navbar scroll
  window.addEventListener("scroll",()=>{
    const n=document.getElementById("navbar");
    if(n)n.classList.toggle("scrolled",window.scrollY>50);
  });

  // Hamburger
  const hb=document.getElementById("hamburger");
  if(hb)hb.addEventListener("click",()=>{
    hb.classList.toggle("open");
    document.getElementById("mobileMenu").classList.toggle("open");
  });

  // Search & Sort
  const si=document.getElementById("searchInput");
  const ss=document.getElementById("sortSelect");
  if(si)si.addEventListener("input",filterProducts);
  if(ss)ss.addEventListener("change",filterProducts);

  // Filter tabs
  const ft=document.getElementById("filterTabs");
  if(ft)ft.addEventListener("click",e=>{
    const btn=e.target.closest(".filter-tab");
    if(!btn)return;
    document.querySelectorAll(".filter-tab").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    activeCategory=btn.dataset.cat;
    filterProducts();
  });

  // Fade-in observer
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible");});
  },{threshold:0.1});
  document.querySelectorAll(".fade-in").forEach(el=>obs.observe(el));

  // Init
  renderProducts(products);
  updateAuthUI();
  updateCartCount();
});



// ── INIT ─────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {

  // Loader
  setTimeout(function() {
    var l = document.getElementById('loader');
    if (l) { l.style.opacity = '0'; l.style.transition = 'opacity 0.6s'; setTimeout(function(){ l.style.display='none'; }, 600); }
  }, 2200);

  // Navbar scroll
  window.addEventListener('scroll', function() {
    var n = document.getElementById('navbar');
    if (n) n.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Hamburger
  var hb = document.getElementById('hamburger');
  if (hb) hb.addEventListener('click', function() {
    hb.classList.toggle('open');
    document.getElementById('mobileMenu').classList.toggle('open');
  });

  // Search & Sort
  var si = document.getElementById('searchInput');
  var ss = document.getElementById('sortSelect');
  if (si) si.addEventListener('input', filterProducts);
  if (ss) ss.addEventListener('change', filterProducts);

  // Filter tabs
  var ft = document.getElementById('filterTabs');
  if (ft) ft.addEventListener('click', function(e) {
    var btn = e.target.closest('.filter-tab');
    if (!btn) return;
    document.querySelectorAll('.filter-tab').forEach(function(b){ b.classList.remove('active'); });
    btn.classList.add('active');
    activeCategory = btn.dataset.cat;
    filterProducts();
  });

  // Fade-in observer
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e){ if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(function(el){ obs.observe(el); });

  // INIT
  renderProducts(products);
  updateAuthUI();
  updateCartCount();
});

function closeMobileMenu() {
  var hb = document.getElementById('hamburger');
  if (hb) hb.classList.remove('open');
  var mm = document.getElementById('mobileMenu');
  if (mm) mm.classList.remove('open');
}
