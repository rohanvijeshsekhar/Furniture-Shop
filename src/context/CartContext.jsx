import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const initialProducts = [
  {
    id: 'chairs',
    category: 'CHAIRS',
    title: 'Textured Boucle Accent Chair',
    price: 680,
    image: 'https://images.ctfassets.net/tuohjudwxvzs/9Ff7V1JqJwu0cfYEJ4kWt/ef7b0e440769d005afdc9466fae600a0/chairs_nemcam.png',
    secondaryImage: 'https://images.ctfassets.net/tuohjudwxvzs/6L5rxJi0JyWPr41ZbaoBbu/14ca5dda93736787b1f004c4da9ae3cd/chairs-mb_haymwf.png',
    description: 'Masterfully crafted chair with textured fur fabric and solid wood base.'
  },
  {
    id: 'tables',
    category: 'TABLES',
    title: 'Sculptural Teak Dining Table',
    price: 1150,
    image: 'https://images.ctfassets.net/tuohjudwxvzs/3l4UZJUfxYdqFZnPT4qQ5f/10a77a6ca201d02798df92cc48cc250a/tables_gokhgz.png',
    secondaryImage: 'https://images.ctfassets.net/tuohjudwxvzs/fO4HVOlQv4IKCfYs6cVay/74888751796597c8ee93425cfb9fc014/tables-mb_ljzlgt.png',
    description: 'Architectural dining table featuring organic wood textures.'
  },
  {
    id: 'lamps',
    category: 'LAMPS',
    title: 'Brushed Brass Ambient Lamp',
    price: 340,
    image: 'https://images.ctfassets.net/tuohjudwxvzs/4mnTMMdY2Om1Fi61u6hF7O/795d642216b2551c90e946756d4a8386/lamps_v27n9t.png',
    secondaryImage: 'https://images.ctfassets.net/tuohjudwxvzs/7MJGYGfL2FnbkB3s6lRtqG/52e59a170fca6aa3b5085e64c911fc3c/lamps-mb_wtugjk.png',
    description: 'Hand-crafted brass lamp providing warm ambient studio lighting.'
  },
  {
    id: 'shelves',
    category: 'SHELVES',
    title: 'Minimalist Modular Shelving',
    price: 890,
    image: 'https://images.ctfassets.net/tuohjudwxvzs/1sGOK3xQvFTpDjkAAUtKY1/34680bc73428b1a991e939b7d300e86a/shelve_wi8ipx_u6na85.webp',
    secondaryImage: 'https://images.ctfassets.net/tuohjudwxvzs/5KTiBZ1fkTZx9H1ofXUrXA/4c5369d037c7058909e0594f4dee8859/shelves_qy9agg.webp',
    description: 'Sleek open shelving unit designed for timeless interior display.'
  }
];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('props_lumio_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('props_lumio_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`Added ${product.title} to cart`);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
        isMenuOpen,
        setIsMenuOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toastMessage,
        products: initialProducts
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
