import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';
type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  direction: Direction;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.properties': 'Properties',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Find Your Dream Home',
    'hero.subtitle': 'in UAE, supported by',
    'hero.expertise': 'U.S. Expertise',
    'hero.description': 'Discover luxury properties in Dubai with our premium real estate expertise backed by American standards and local knowledge.',
    'hero.cta.primary': 'Browse Listings',
    'hero.cta.secondary': 'Contact Us',
    
    // Search
    'search.placeholder': 'Search by location, price, or property type...',
    'search.location': 'Location',
    'search.price': 'Price Range',
    'search.type': 'Property Type',
    'search.button': 'Search Properties',
    
    // Currency
    'currency.aed': 'AED',
    'currency.usd': 'USD',
    
    // Properties
    'properties.title': 'Featured Properties',
    'properties.subtitle': 'Discover our handpicked selection of premium properties',
    'properties.bedrooms': 'Bedrooms',
    'properties.bathrooms': 'Bathrooms',
    'properties.sqft': 'Sq Ft',
    'properties.view': 'View Details',
    
    // About
    'about.title': 'About Tatweer Aldar',
    'about.description': 'With years of expertise in Dubai\'s luxury real estate market, we bridge American real estate standards with deep local knowledge to deliver exceptional service and results.',
    'about.cta': 'Learn More',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to find your perfect property? Contact us today.',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.message': 'Message',
    'contact.submit': 'Send Message',
    
    // Footer
    'footer.company': 'Tatweer Aldar Real Estate',
    'footer.description': 'Premium real estate services in Dubai',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    
    // Trust Badges
    'trust.bitrix24': 'Powered by Bitrix24',
    'trust.certified': 'RERA Certified',
    'trust.experience': 'Years of Experience',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.properties': 'العقارات',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    
    // Hero Section
    'hero.title': 'اكتشف منزل أحلامك',
    'hero.subtitle': 'في دولة الإمارات، بدعم من',
    'hero.expertise': 'الخبرة الأمريكية',
    'hero.description': 'اكتشف العقارات الفاخرة في دبي مع خبرتنا العقارية المتميزة المدعومة بالمعايير الأمريكية والمعرفة المحلية.',
    'hero.cta.primary': 'تصفح العقارات',
    'hero.cta.secondary': 'اتصل بنا',
    
    // Search
    'search.placeholder': 'البحث بالموقع أو السعر أو نوع العقار...',
    'search.location': 'الموقع',
    'search.price': 'نطاق السعر',
    'search.type': 'نوع العقار',
    'search.button': 'البحث عن العقارات',
    
    // Currency
    'currency.aed': 'درهم',
    'currency.usd': 'دولار',
    
    // Properties
    'properties.title': 'عقارات مميزة',
    'properties.subtitle': 'اكتشف مجموعتنا المختارة من العقارات المتميزة',
    'properties.bedrooms': 'غرف النوم',
    'properties.bathrooms': 'الحمامات',
    'properties.sqft': 'قدم مربع',
    'properties.view': 'عرض التفاصيل',
    
    // About
    'about.title': 'عن تطوير الدار',
    'about.description': 'بسنوات من الخبرة في سوق العقارات الفاخرة في دبي، نربط بين معايير العقارات الأمريكية والمعرفة المحلية العميقة لتقديم خدمة ونتائج استثنائية.',
    'about.cta': 'اعرف المزيد',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'مستعد للعثور على العقار المثالي؟ اتصل بنا اليوم.',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'عنوان البريد الإلكتروني',
    'contact.phone': 'رقم الهاتف',
    'contact.message': 'الرسالة',
    'contact.submit': 'إرسال الرسالة',
    
    // Footer
    'footer.company': 'تطوير الدار العقارية',
    'footer.description': 'خدمات عقارية متميزة في دبي',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    
    // Trust Badges
    'trust.bitrix24': 'مدعوم بـ Bitrix24',
    'trust.certified': 'معتمد من رايرا',
    'trust.experience': 'سنوات من الخبرة',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
    
    // Add RTL/LTR specific font loading
    if (language === 'ar') {
      const link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@300;400;500;600;700&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  }, [language, direction]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, direction, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};