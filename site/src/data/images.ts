// Central image registry. Sources: Good Create PDFs and gc-c.co.jp hero video stills.
import awardCeremony from '../assets/img/award-ceremony.jpg';
import couplePhones from '../assets/img/couple-phones.jpg';
import crowdCity from '../assets/img/crowd-city.jpg';
import deviceBlack from '../assets/img/device-black.jpg';
import halalCeremony from '../assets/img/halal-ceremony.jpg';
import halalCertificate from '../assets/img/halal-certificate.jpg';
import handPhoneCity from '../assets/img/hand-phone-city.jpg';
import phoneRender from '../assets/img/phone-render.jpg';
import shieldPhone from '../assets/img/shield-phone-wide.jpg';
import skyline from '../assets/img/skyline.jpg';
import wallet from '../assets/img/wallet.jpg';
import waraviConsult from '../assets/img/waravi-consult.jpg';
import waraviFamily from '../assets/img/waravi-family.jpg';
import waraviTv from '../assets/img/waravi-tv.jpg';
import waraviWave from '../assets/img/waravi-wave.jpg';
import waraviYoung from '../assets/img/waravi-young.jpg';
import womanPhoneData from '../assets/img/woman-phone-data.jpg';
import womanPhoneIcons from '../assets/img/woman-phone-icons.jpg';
import womanPhoneStreet from '../assets/img/woman-phone-street.jpg';

import logoGc from '../assets/brand/goodcreate.png';
import logoGcWhite from '../assets/brand/goodcreate-white.png';
import logoPop from '../assets/brand/pop.png';
import logoSt from '../assets/brand/securitytalk.png';
import iconSt from '../assets/brand/securitytalk-icon.png';
import iconWaravi from '../assets/brand/waravi-icon.png';
import logoWaravi from '../assets/brand/waravi.png';

export const img = {
  awardCeremony, couplePhones, crowdCity, deviceBlack, halalCeremony, halalCertificate,
  handPhoneCity, phoneRender, shieldPhone, skyline, wallet, waraviConsult, waraviFamily,
  waraviTv, waraviWave, waraviYoung, womanPhoneData, womanPhoneIcons, womanPhoneStreet,
};

export const logos = { gc: logoGc, gcWhite: logoGcWhite, pop: logoPop, st: logoSt, waravi: logoWaravi, stIcon: iconSt, waraviIcon: iconWaravi };

// Per-solution imagery
export const solutionMedia: Record<string, { hero: ImageMetadata; feature: ImageMetadata; logo?: ImageMetadata; gallery?: { src: ImageMetadata; alt: string }[]; alt: string }> = {
  securitytalk: { hero: couplePhones, feature: shieldPhone, logo: iconSt, alt: 'Hands holding a smartphone beside a digital security shield' },
  'secure-device': { hero: shieldPhone, feature: phoneRender, alt: 'Dedicated secure smartphone terminal' },
  waravi: {
    hero: waraviTv, feature: waraviWave, logo: iconWaravi,
    alt: 'An elderly man waving to a caregiver on a TV video call',
    gallery: [
      { src: waraviFamily, alt: 'Grandparents on a TV video call with their family' },
      { src: waraviTv, alt: 'A man playing a game on the TV with the remote control' },
      { src: waraviConsult, alt: 'A woman receiving a product consultation through the TV' },
      { src: waraviYoung, alt: 'A young man greeting his grandfather on the TV' },
    ],
  },
  'halal-sns': { hero: halalCeremony, feature: halalCeremony, alt: 'Halal certification ceremony for SecurityTalk', gallery: [{ src: halalCertificate, alt: 'Halal certification document for SecurityTalk' }] },
  tsugite: { hero: wallet, feature: wallet, alt: 'A wallet holding cards' },
};

// @CREATOR brochure imagery (public/docs/atcreator-brochure.pdf)
import cHero from '../assets/img/creator/hero.jpg';
import cLogo from '../assets/img/creator/logo.png';
import cMockup from '../assets/img/creator/mockup.jpg';
import tplBeauty from '../assets/img/creator/tpl-beauty.jpg';
import tplCafe from '../assets/img/creator/tpl-cafe.jpg';
import tplDiner from '../assets/img/creator/tpl-diner.jpg';
import tplApparel from '../assets/img/creator/tpl-apparel.jpg';
import tplSalon from '../assets/img/creator/tpl-salon.jpg';
import tplPizza from '../assets/img/creator/tpl-pizza.jpg';
import tplForest from '../assets/img/creator/tpl-forest.jpg';
import scrStore from '../assets/img/creator/scr-store.jpg';
import scrMap from '../assets/img/creator/scr-map.jpg';
import scrCoupons from '../assets/img/creator/scr-coupons.jpg';
import scrStamp from '../assets/img/creator/scr-stamp.jpg';
import scrShop from '../assets/img/creator/scr-shop.jpg';
import scrCart from '../assets/img/creator/scr-cart.jpg';
import scrBooking from '../assets/img/creator/scr-booking.jpg';
import scrDining from '../assets/img/creator/scr-dining.jpg';
import scrChat from '../assets/img/creator/scr-chat.jpg';

export const creator = {
  hero: cHero, logo: cLogo, mockup: cMockup,
  tplBeauty, tplCafe, tplDiner, tplApparel, tplSalon, tplPizza, tplForest,
  scrStore, scrMap, scrCoupons, scrStamp, scrShop, scrCart, scrBooking, scrDining, scrChat,
};
