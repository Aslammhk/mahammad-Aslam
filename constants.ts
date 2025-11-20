
import { Dish, DietaryType, MainCategory, AboutSection } from './types';

export const TRANSLATIONS: any = {
  en: {
    ingredients: "Ingredients",
    calories: "Calories",
    prepTime: "Prep Time",
    rating: "Rating",
    min: "min",
    fullIngredients: "Full Ingredients",
    customizeOrder: "Customize Order",
    recommended: "Recommended With This",
    totalAmount: "Total Amount",
    addToOrder: "Add to Order",
    chefInsight: "Chef's AI Insight",
    watchVideo: "Watch Preparation Video",
    askingChef: "Asking the chef...",
    consulting: "Consulting the Chef...",
    thinking: "Thinking...",
    startingAt: "Starting at",
    cartTitle: "Your Order",
    checkout: "Checkout",
    emptyCart: "Your cart is empty",
    total: "Total",
    veg: "Veg",
    nonVeg: "Non Veg",
    all: "All",
    view: "View",
    about: "About Us",
    feedback: "Feedback",
    chatWithUs: "Chat with us",
    send: "Send",
    askAnything: "Ask about our food...",
    excellent: "Excellent",
    good: "Good",
    average: "Average",
    poor: "Poor",
    submitFeedback: "Submit Feedback",
    qualityFood: "Quality of Food",
    speedService: "Speed of Service",
    ambience: "Ambience & Decoration",
    staff: "Staff Friendliness",
    value: "Value for Money",
    suggestions: "Suggestions",
    feedbackSuccess: "Thank you for your feedback!",
    bookEvent: "Book Event",
    callUs: "Call Us",
    visitSocial: "Visit",
    portionSize: "Portion Size",
    single: "Single (40%)",
    half: "Half (70%)",
    full: "Full (100%)",
    popular: "Popular",
    sold: "Sold"
  },
  // ... (Other languages would need the new keys added similarly, keeping simple for brevity in update)
  fr: {
    // ... existing keys
    ingredients: "Ingrédients",
    calories: "Calories",
    prepTime: "Préparation",
    rating: "Note",
    min: "min",
    fullIngredients: "Ingrédients Complets",
    customizeOrder: "Personnaliser",
    recommended: "Recommandé avec ceci",
    totalAmount: "Montant Total",
    addToOrder: "Ajouter à la commande",
    chefInsight: "L'avis du Chef (IA)",
    watchVideo: "Voir la vidéo de préparation",
    askingChef: "Demande au chef...",
    consulting: "Consultation du Chef...",
    thinking: "Réflexion...",
    startingAt: "À partir de",
    cartTitle: "Votre Commande",
    checkout: "Payer",
    emptyCart: "Votre panier est vide",
    total: "Total",
    veg: "Végé",
    nonVeg: "Non Végé",
    all: "Tous",
    view: "Voir",
    about: "À Propos",
    feedback: "Avis",
    chatWithUs: "Discutez avec nous",
    send: "Envoyer",
    askAnything: "Posez une question...",
    excellent: "Excellent",
    good: "Bon",
    average: "Moyen",
    poor: "Mauvais",
    submitFeedback: "Envoyer l'avis",
    qualityFood: "Qualité de la nourriture",
    speedService: "Rapidité du service",
    ambience: "Ambiance & Décoration",
    staff: "Amabilité du personnel",
    value: "Rapport qualité/prix",
    suggestions: "Suggestions",
    feedbackSuccess: "Merci pour votre avis !",
    bookEvent: "Réserver un événement",
    callUs: "Appelez-nous",
    visitSocial: "Visiter",
    portionSize: "Taille de la portion",
    single: "Individuel (40%)",
    half: "Demi (70%)",
    full: "Entier (100%)",
    popular: "Populaire",
    sold: "Vendu"
  },
  // Added fallback for others to prevent crash, ideally fill these out
  es: { portionSize: "Porción", single: "Individual", half: "Medio", full: "Completo", popular: "Popular", sold: "Vendido", ingredients: "Ingredientes", calories: "Calorías", prepTime: "Tiempo", rating: "Valoración", min: "min", fullIngredients: "Ingredientes Completos", customizeOrder: "Personalizar", recommended: "Recomendado con esto", totalAmount: "Importe Total", addToOrder: "Añadir al pedido", chefInsight: "Opinión del Chef (IA)", watchVideo: "Ver video de preparación", askingChef: "Preguntando al chef...", consulting: "Consultando al Chef...", thinking: "Pensando...", startingAt: "Desde", cartTitle: "Tu Pedido", checkout: "Pagar", emptyCart: "Tu carrito está vacío", total: "Total", veg: "Veg", nonVeg: "No Veg", all: "Todos", view: "Ver", about: "Nosotros", feedback: "Opinión", chatWithUs: "Chatea con nosotros", send: "Enviar", askAnything: "Pregunta sobre nuestra comida...", excellent: "Excelente", good: "Bueno", average: "Regular", poor: "Malo", submitFeedback: "Enviar opinión", qualityFood: "Calidad de la comida", speedService: "Velocidad del servicio", ambience: "Ambiente y decoración", staff: "Amabilidad del personal", value: "Relación calidad-precio", suggestions: "Sugerencias", feedbackSuccess: "¡Gracias por tu opinión!", bookEvent: "Reservar evento", callUs: "Llámanos", visitSocial: "Visitar" },
  de: { portionSize: "Portion", single: "Einzeln", half: "Halb", full: "Voll", popular: "Beliebt", sold: "Verkauft", ingredients: "Zutaten", calories: "Kalorien", prepTime: "Zubereitung", rating: "Bewertung", min: "min", fullIngredients: "Vollständige Zutaten", customizeOrder: "Bestellung anpassen", recommended: "Dazu empfohlen", totalAmount: "Gesamtbetrag", addToOrder: "Hinzufügen", chefInsight: "Chef-Einblick (KI)", watchVideo: "Video ansehen", askingChef: "Frage den Chef...", consulting: "Konsultiere...", thinking: "Nachdenken...", startingAt: "Ab", cartTitle: "Ihre Bestellung", checkout: "Kasse", emptyCart: "Leer", total: "Gesamt", veg: "Veg", nonVeg: "Fleisch", all: "Alle", view: "Ansehen", about: "Über Uns", feedback: "Feedback", chatWithUs: "Chatten Sie mit uns", send: "Senden", askAnything: "Fragen Sie uns...", excellent: "Exzellent", good: "Gut", average: "Durchschnitt", poor: "Schlecht", submitFeedback: "Feedback senden", qualityFood: "Lebensmittelqualität", speedService: "Servicegeschwindigkeit", ambience: "Ambiente & Dekoration", staff: "Freundlichkeit", value: "Preis-Leistungs-Verhältnis", suggestions: "Vorschläge", feedbackSuccess: "Danke für Ihr Feedback!", bookEvent: "Event buchen", callUs: "Anrufen", visitSocial: "Besuchen" },
  it: { portionSize: "Porzione", single: "Singolo", half: "Mezzo", full: "Intero", popular: "Popolare", sold: "Venduto", ingredients: "Ingredienti", calories: "Calorie", prepTime: "Prep", rating: "Voto", min: "min", fullIngredients: "Ingredienti Completi", customizeOrder: "Personalizza", recommended: "Consigliato", totalAmount: "Totale", addToOrder: "Aggiungi", chefInsight: "Chef (IA)", watchVideo: "Video", askingChef: "Chiedo...", consulting: "Consulto...", thinking: "...", startingAt: "Da", cartTitle: "Ordine", checkout: "Cassa", emptyCart: "Vuoto", total: "Totale", veg: "Veg", nonVeg: "No Veg", all: "Tutti", view: "Vedi", about: "Chi Siamo", feedback: "Feedback", chatWithUs: "Chatta con noi", send: "Invia", askAnything: "Chiedi...", excellent: "Eccellente", good: "Buono", average: "Medio", poor: "Scarso", submitFeedback: "Invia Feedback", qualityFood: "Qualità del cibo", speedService: "Velocità del servizio", ambience: "Ambiente e decorazione", staff: "Cordialità", value: "Rapporto qualità-prezzo", suggestions: "Suggerimenti", feedbackSuccess: "Grazie per il feedback!", bookEvent: "Prenota Evento", callUs: "Chiama", visitSocial: "Visita" },
  ar: { portionSize: "حجم الوجبة", single: "فردي", half: "نصف", full: "كامل", popular: "شائع", sold: "مباع", ingredients: "مكونات", calories: "سعرات حرارية", prepTime: "تحضير", rating: "تقييم", min: "دقيقة", fullIngredients: "المكونات الكاملة", customizeOrder: "تخصيص الطلب", recommended: "موصى به مع هذا", totalAmount: "المبلغ الإجمالي", addToOrder: "أضف إلى الطلب", chefInsight: "رأي الشيف (ذكاء اصطناعي)", watchVideo: "شاهد فيديو التحضير", askingChef: "سؤال الشيف...", consulting: "استشارة الشيف...", thinking: "تفكير...", startingAt: "يبدأ من", cartTitle: "طلبك", checkout: "الدفع", emptyCart: "عربة التسوق فارغة", total: "الإجمالي", veg: "نباتي", nonVeg: "غير نباتي", all: "الكل", view: "عرض", about: "معلومات عنا", feedback: "رايك", chatWithUs: "دردش معنا", send: "إرسال", askAnything: "اسأل عن طعامنا...", excellent: "ممتاز", good: "جيد", average: "متوسط", poor: "سيء", submitFeedback: "إرسال التعليقات", qualityFood: "جودة الطعام", speedService: "سرعة الخدمة", ambience: "الجو والديكور", staff: "ود الموظفين", value: "القيمة مقابل المال", suggestions: "اقتراحات", feedbackSuccess: "شكرا لملاحظاتك!", bookEvent: "حجز موعد", callUs: "اتصل بنا", visitSocial: "زيارة" },
  ru: { portionSize: "Порция", single: "Малая", half: "Средняя", full: "Полная", popular: "Популярно", sold: "Продано", ingredients: "Ингредиенты", calories: "Калории", prepTime: "Время", rating: "Рейтинг", min: "мин", fullIngredients: "Полный состав", customizeOrder: "Настроить", recommended: "Рекомендуем", totalAmount: "Итого", addToOrder: "В корзину", chefInsight: "Мнение шефа (ИИ)", watchVideo: "Смотреть видео", askingChef: "Спрашиваем шефа...", consulting: "Консультация...", thinking: "Думаем...", startingAt: "От", cartTitle: "Ваш заказ", checkout: "Оплата", emptyCart: "Корзина пуста", total: "Итого", veg: "Вег", nonVeg: "Мясо", all: "Все", view: "Вид", about: "О нас", feedback: "Отзыв", chatWithUs: "Чат с нами", send: "Отправить", askAnything: "Спросите о еде...", excellent: "Отлично", good: "Хорошо", average: "Средне", poor: "Плохо", submitFeedback: "Отправить отзыв", qualityFood: "Качество еды", speedService: "Скорость обслуживания", ambience: "Атмосфера", staff: "Персонал", value: "Цена/Качество", suggestions: "Предложения", feedbackSuccess: "Спасибо за отзыв!", bookEvent: "Забронировать", callUs: "Позвонить", visitSocial: "Посетить" },
  zh: { portionSize: "份量", single: "小份", half: "半份", full: "全份", popular: "热门", sold: "已售", ingredients: "成分", calories: "卡路里", prepTime: "准备时间", rating: "评分", min: "分钟", fullIngredients: "全部成分", customizeOrder: "定制订单", recommended: "推荐搭配", totalAmount: "总金额", addToOrder: "加入订单", chefInsight: "主厨点评 (AI)", watchVideo: "观看制作视频", askingChef: "询问主厨...", consulting: "咨询主厨中...", thinking: "思考中...", startingAt: "起价", cartTitle: "您的订单", checkout: "结账", emptyCart: "购物车是空的", total: "总计", veg: "素食", nonVeg: "非素食", all: "全部", view: "查看", about: "关于我们", feedback: "反馈", chatWithUs: "联系我们", send: "发送", askAnything: "询问关于菜品...", excellent: "极好", good: "好", average: "一般", poor: "差", submitFeedback: "提交反馈", qualityFood: "食物质量", speedService: "服务速度", ambience: "环境与装饰", staff: "员工态度", value: "性价比", suggestions: "建议", feedbackSuccess: "感谢您的反馈！", bookEvent: "预订活动", callUs: "致电我们", visitSocial: "访问" }
};

export const MOCK_MENU: Record<string, Dish[]> = {
  [MainCategory.BESTSELLER]: [
    {
      id: 'b1',
      name: 'Truffle Cream Pancakes',
      description: 'Fluffy pancakes topped with savory truffle cream, maple glaze, and fresh berries.',
      basePrice: 12.00,
      image: 'https://picsum.photos/id/493/800/600',
      dietaryType: DietaryType.VEG,
      ingredients: ['Flour', 'Sugar', 'Baking Powder', 'Truffle Oil', 'Heavy Cream', 'Berries'],
      calories: 450,
      rating: 4.8,
      prepTime: '15 mins',
      servings: 1,
      addOns: [
        { name: 'Extra Maple Syrup', price: 2.00 },
        { name: 'Vanilla Scoop', price: 3.00 }
      ],
      recommendedDishIds: ['d1', 's1'],
      salesMetrics: { totalSold: 5230, dailyOnlineOrders: 45, popularityScore: 0.98 }
    },
    {
      id: 'b2',
      name: 'Smoked Salmon Carpaccio',
      description: 'Thinly sliced smoked salmon served with capers, dill, and a lemon vinaigrette.',
      basePrice: 18.50,
      image: 'https://picsum.photos/id/429/800/600',
      dietaryType: DietaryType.NON_VEG,
      ingredients: ['Salmon', 'Capers', 'Lemon', 'Dill', 'Olive Oil', 'Black Pepper'],
      calories: 320,
      rating: 4.9,
      prepTime: '10 mins',
      servings: 2,
      addOns: [
        { name: 'Extra Toast', price: 1.50 },
        { name: 'Avocado', price: 2.50 }
      ],
      recommendedDishIds: ['d1', 'b4'],
      salesMetrics: { totalSold: 3100, dailyOnlineOrders: 22, popularityScore: 0.85 }
    },
    {
      id: 'b3',
      name: 'Spicy Basil Chicken',
      description: 'Wok-tossed chicken breast with fresh thai basil, chilies, and garlic sauce.',
      basePrice: 16.00,
      image: 'https://picsum.photos/id/488/800/600',
      dietaryType: DietaryType.NON_VEG,
      ingredients: ['Chicken Breast', 'Thai Basil', 'Chili', 'Garlic', 'Soy Sauce'],
      calories: 500,
      rating: 4.7,
      prepTime: '20 mins',
      servings: 1,
      addOns: [
        { name: 'Fried Egg', price: 1.50 },
        { name: 'Jasmine Rice', price: 2.00 }
      ],
      recommendedDishIds: ['d1'],
      salesMetrics: { totalSold: 4500, dailyOnlineOrders: 38, popularityScore: 0.92 }
    },
     {
      id: 'b4',
      name: 'Classic Margherita Pizza',
      description: 'Wood-fired pizza with San Marzano tomato sauce, mozzarella di bufala, and fresh basil.',
      basePrice: 14.00,
      image: 'https://picsum.photos/id/312/800/600',
      dietaryType: DietaryType.VEG,
      ingredients: ['Dough', 'Tomato Sauce', 'Mozzarella', 'Basil', 'Olive Oil'],
      calories: 700,
      rating: 4.6,
      prepTime: '15 mins',
      servings: 2,
      addOns: [
        { name: 'Extra Cheese', price: 2.50 },
        { name: 'Olives', price: 1.50 }
      ],
      recommendedDishIds: ['s1', 'd1'],
      salesMetrics: { totalSold: 8900, dailyOnlineOrders: 65, popularityScore: 0.99 }
    }
  ],
  [MainCategory.TODAYS_SPECIAL]: [
    {
      id: 't1',
      name: 'Lobster Thermidor',
      description: 'Fresh lobster meat cooked in a rich wine sauce, stuffed back into the shell and browned.',
      basePrice: 45.00,
      image: 'https://picsum.photos/id/292/800/600',
      dietaryType: DietaryType.NON_VEG,
      ingredients: ['Lobster', 'White Wine', 'Cream', 'Mustard', 'Gruyère Cheese'],
      calories: 850,
      rating: 5.0,
      prepTime: '30 mins',
      servings: 1,
      addOns: [
        { name: 'Garlic Butter', price: 2.00 },
        { name: 'Side Salad', price: 4.00 }
      ],
      recommendedDishIds: ['b4', 'd1'],
      salesMetrics: { totalSold: 150, dailyOnlineOrders: 5, popularityScore: 0.95 }
    },
     {
      id: 't2',
      name: 'Wild Mushroom Risotto',
      description: 'Creamy arborio rice cooked with porcini and wild mushrooms, finished with truffle oil.',
      basePrice: 22.00,
      image: 'https://picsum.photos/id/1080/800/600',
      dietaryType: DietaryType.VEG,
      ingredients: ['Arborio Rice', 'Mushrooms', 'Parmesan', 'White Wine', 'Vegetable Stock'],
      calories: 600,
      rating: 4.8,
      prepTime: '25 mins',
      servings: 1,
      addOns: [
        { name: 'Extra Parmesan', price: 1.50 },
        { name: 'Grilled Asparagus', price: 3.50 }
      ],
      recommendedDishIds: ['b1'],
      salesMetrics: { totalSold: 1200, dailyOnlineOrders: 18, popularityScore: 0.88 }
    }
  ],
  [MainCategory.CHEFS_SPECIAL]: [
    {
      id: 'c1',
      name: 'Wagyu Beef Burger',
      description: 'Premium Wagyu beef patty, caramelized onions, brie cheese, and truffle aioli.',
      basePrice: 28.00,
      image: 'https://picsum.photos/id/163/800/600',
      dietaryType: DietaryType.NON_VEG,
      ingredients: ['Wagyu Beef', 'Brioche Bun', 'Brie', 'Onions', 'Truffle Oil'],
      calories: 950,
      rating: 5.0,
      prepTime: '20 mins',
      servings: 1,
      addOns: [
        { name: 'Bacon', price: 3.00 },
        { name: 'Sweet Potato Fries', price: 4.00 }
      ],
      recommendedDishIds: ['d1', 's1'],
      salesMetrics: { totalSold: 6000, dailyOnlineOrders: 55, popularityScore: 0.97 }
    }
  ],
  [MainCategory.SWEET_DRINKS]: [
    {
      id: 'd1',
      name: 'Tropical Paradise Punch',
      description: 'A refreshing blend of pineapple, mango, and passion fruit juices with a hint of mint.',
      basePrice: 8.00,
      image: 'https://picsum.photos/id/431/800/600',
      dietaryType: DietaryType.VEG,
      ingredients: ['Pineapple Juice', 'Mango Nectar', 'Passion Fruit', 'Mint', 'Ice'],
      calories: 180,
      rating: 4.5,
      prepTime: '5 mins',
      servings: 1,
      addOns: [
        { name: 'Rum Shot', price: 5.00 },
        { name: 'Umbrella', price: 0.00 }
      ],
      recommendedDishIds: ['c1'],
      salesMetrics: { totalSold: 12000, dailyOnlineOrders: 110, popularityScore: 0.90 }
    },
    {
      id: 's1',
      name: 'Molten Lava Cake',
      description: 'Warm chocolate cake with a gooey center, served with vanilla bean ice cream.',
      basePrice: 11.00,
      image: 'https://picsum.photos/id/292/800/600',
      dietaryType: DietaryType.VEG,
      ingredients: ['Dark Chocolate', 'Butter', 'Eggs', 'Sugar', 'Flour'],
      calories: 550,
      rating: 4.9,
      prepTime: '15 mins',
      servings: 1,
      addOns: [
        { name: 'Strawberries', price: 2.00 },
        { name: 'Whipped Cream', price: 1.00 }
      ],
      recommendedDishIds: ['d1'],
      salesMetrics: { totalSold: 8500, dailyOnlineOrders: 75, popularityScore: 0.96 }
    }
  ]
};

export const ABOUT_CONTENT: Record<AboutSection, any> = {
  [AboutSection.RESTAURANT]: {
    image: 'https://picsum.photos/id/431/800/600',
    title: 'Our Heritage',
    text: 'Since 1984, Gourmet Touch has been an institution in the heart of the city. We combine traditional recipes with modern culinary techniques to bring you an unforgettable dining experience. Our restaurant was founded on the belief that food should be an experience, not just a meal.'
  },
  [AboutSection.EVENTS]: {
    image: 'https://picsum.photos/id/250/800/600',
    title: 'Private Dining & Events',
    text: 'Host your next event with us. From intimate birthday dinners to large corporate gatherings, our venue provides the perfect backdrop. We offer custom menus, dedicated service, and a range of audio-visual equipment for presentations.'
  },
  [AboutSection.CHEFS]: {
    image: 'https://picsum.photos/id/338/800/600',
    title: 'Master Chefs',
    text: 'Our kitchen is led by Chef Antoine, a Michelin-trained expert with 20 years of experience in French and Mediterranean cuisine. He is supported by a talented team of sous-chefs who share his passion for perfection and fresh ingredients.'
  },
  [AboutSection.REVIEWS]: {
    image: 'https://picsum.photos/id/447/800/600',
    title: 'What People Say',
    text: '"The best dining experience I have ever had!" - Foodie Weekly. "An absolute gem in the city." - City Guide. Rated 4.9 stars on Google Reviews with over 1000 happy customers.',
    isReview: true
  },
  [AboutSection.SOCIAL]: {
    image: 'https://picsum.photos/id/364/800/600',
    title: 'Connect With Us',
    text: 'Follow us on Instagram, Facebook, and TikTok for daily updates, behind-the-scenes kitchen action, and exclusive offers. Tag us @GourmetTouch to be featured!'
  },
  [AboutSection.CONTACT]: {
    image: 'https://picsum.photos/id/201/800/600',
    title: 'Get in Touch',
    text: 'We are located at 123 Culinary Ave, Food City. Call us at +1 (555) 123-4567 or email bookings@gourmettouch.com. Open daily from 11 AM to 11 PM.'
  }
};
