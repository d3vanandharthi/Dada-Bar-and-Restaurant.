import { motion } from 'motion/react';

const menuItems = [
  {
    category: "Signature Dishes",
    items: [
      { name: "Prawn Curry Rice", desc: "Traditional Goan coconut curry, local spices, served with steaming rice.", price: "₹280" },
      { name: "Chicken Cafreal", desc: "Pan-fried chicken marinated in fresh coriander, green chilies, and Goan vinegar.", price: "₹250" },
      { name: "Beef Roast", desc: "Slow-roasted with cloves and cinnamon, a local favorite.", price: "₹220" },
      { name: "Rawa Fried Fish", desc: "Catch of the day, marinated in recheado and crusted in semolina.", price: "Market" }
    ]
  },
  {
    category: "Bar Bites",
    items: [
      { name: "Choris Pão", desc: "Spiced Goan sausages stuffed in warm local bread.", price: "₹180" },
      { name: "Masala Peanuts", desc: "Roasted peanuts tossed with onions, tomatoes, and lime.", price: "₹80" },
      { name: "Squid Chilli Fry", desc: "Tender local squid tossed with onions and green chilies.", price: "₹260" },
      { name: "Gobi Manchurian", desc: "Crispy cauliflower in tangy, spicy sauce.", price: "₹160" }
    ]
  },
  {
    category: "Drinks",
    items: [
      { name: "Cashew Feni", desc: "Locally distilled, served neat or with Limca.", price: "₹90" },
      { name: "King's Beer", desc: "The quintessential Goan pilsner.", price: "₹110" },
      { name: "Fresh Lime Soda", desc: "Sweet, salted, or mixed.", price: "₹60" },
      { name: "Old Monk", desc: "Classic dark rum, perfect for monsoons.", price: "₹80" }
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 md:py-40 px-6 bg-[#1a1209] text-[#f0e6ce]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#c87941] mb-4 block">Our Offerings</span>
          <h2 className="font-display text-4xl md:text-6xl font-medium tracking-tight">
            Food & <span className="italic text-[#e8c97e]">Drinks</span>
          </h2>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {menuItems.map((section, sectionIndex) => (
            <motion.div 
              key={section.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: sectionIndex * 0.2 }}
            >
              <h3 className="font-mono text-sm uppercase tracking-widest text-[#e8c97e] border-b border-[#c87941]/20 pb-4 mb-8">
                {section.category}
              </h3>
              
              <div className="space-y-8">
                {section.items.map((item, itemIndex) => (
                  <div 
                    key={item.name}
                    className="group flex flex-col gap-2 transition-transform duration-300 hover:-translate-y-1.5 cursor-default p-4 -mx-4 rounded-xl hover:bg-[#2a1d10] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[#c87941]/10"
                  >
                    <div className="flex justify-between items-baseline gap-4">
                      <h4 className="font-display text-xl sm:text-2xl font-medium group-hover:text-[#e8c97e] transition-colors">{item.name}</h4>
                      <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-[#f0e6ce]/20 to-transparent hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="font-mono text-sm text-[#c87941]">{item.price}</span>
                    </div>
                    <p className="font-serif text-[#f0e6ce]/60 text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.8 }}
           className="mt-24 text-center border-t border-[#c87941]/20 pt-12"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-[#f0e6ce]/40 mb-4">Please note</p>
          <p className="font-serif italic text-lg text-[#f0e6ce]/70 max-w-2xl mx-auto">
            Our menu changes based on the daily catch and fresh local availability. Ask our staff about today's specials.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
