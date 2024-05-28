/* eslint-disable react/prop-types */
function Footer() {
    return (
      <div className="mt-8 bg-black pt-9">
        <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
          <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
            <div className="md:w-[316px]">
              <div className="text-[18px] font-medium text-white">
                <h1 className="text-white font-extrabold">
                  <span className="text-rose-600">YOUR</span>LOGO
                </h1>
              </div>
              <p className="mt-[18px] text-[15px] font-normal text-gray-9s00/[80%]">Apple Day a most trusted brand in the world. We are here to help you.
              </p>
              <div className="mt-[18px] flex gap-4">
                <a className="hover:scale-110" target="_blank" rel="noopener noreferrer" href="#">
                  <img alt="facebook icon" loading="lazy" width="36" height="36" decoding="async" src="https://www.englishyaari.com/img/facebook.svg" />
                </a>
                <a className="hover:scale-110" target="_blank" rel="noopener noreferrer" href="#">
                  <img alt="linkedin icon" loading="lazy" width="36" height="36" decoding="async" src="https://www.englishyaari.com/img/linkdin.svg" />
                </a>
                <a className="hover:scale-110" target="_blank" rel="noopener noreferrer" href="#">
                  <img alt="instagram icon" loading="lazy" width="36" height="36" decoding="async" src="https://www.englishyaari.com/img/instagram1.svg" />
                </a>
                <a className="hover:scale-110" target="_blank" rel="noopener noreferrer" href="#">
                  <img alt="twitter icon" loading="lazy" width="36" height="36" decoding="async" src="https://www.englishyaari.com/img/twitter.svg" />
                </a>
                <a className="hover:scale-110" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/">
                  <img alt="youtube icon" loading="lazy" width="36" height="36" decoding="async" src="https://www.englishyaari.com/img/youtube.svg" />
                </a>
              </div>
            </div>
            <div className="md:w-[316px]">
              <ContactInfo
                iconPath="M20.8472 14.8554L16.4306 12.8764L16.4184 12.8707C16.1892 12.7727 15.939 12.7333 15.6907 12.7562C15.4424 12.7792 15.2037 12.8636 14.9963 13.002C14.9718 13.0181 14.9484 13.0357 14.9259 13.0545L12.6441 14.9998C11.1984 14.2976 9.70595 12.8164 9.00376 11.3895L10.9519 9.07294C10.9706 9.0495 10.9884 9.02606 11.0053 9.00075C11.1407 8.79384 11.2229 8.55667 11.2445 8.31035C11.2661 8.06402 11.2264 7.81618 11.1291 7.58887V7.57762L9.14438 3.15356C9.0157 2.85662 8.79444 2.60926 8.51362 2.44841C8.2328 2.28756 7.9075 2.22184 7.58626 2.26106C6.31592 2.42822 5.14986 3.05209 4.30588 4.01615C3.4619 4.98021 2.99771 6.21852 3.00001 7.49981C3.00001 14.9436 9.05626 20.9998 16.5 20.9998C17.7813 21.0021 19.0196 20.5379 19.9837 19.6939C20.9477 18.85 21.5716 17.6839 21.7388 16.4136C21.7781 16.0924 21.7125 15.7672 21.5518 15.4864C21.3911 15.2056 21.144 14.9843 20.8472 14.8554ZM16.5 19.4998C13.3185 19.4963 10.2682 18.2309 8.01856 15.9813C5.76888 13.7316 4.50348 10.6813 4.50001 7.49981C4.49648 6.58433 4.82631 5.69887 5.42789 5.00879C6.02947 4.3187 6.86167 3.87118 7.76907 3.74981C7.7687 3.75355 7.7687 3.75732 7.76907 3.76106L9.73782 8.16731L7.80001 10.4867C7.78034 10.5093 7.76247 10.5335 7.74657 10.5589C7.60549 10.7754 7.52273 11.0246 7.5063 11.2825C7.48988 11.5404 7.54035 11.7981 7.65282 12.0307C8.5022 13.7679 10.2525 15.5051 12.0084 16.3536C12.2428 16.465 12.502 16.5137 12.7608 16.495C13.0196 16.4762 13.2692 16.3907 13.485 16.2467C13.5091 16.2305 13.5322 16.2129 13.5544 16.1942L15.8334 14.2498L20.2397 16.2232C20.2397 16.2232 20.2472 16.2232 20.25 16.2232C20.1301 17.1319 19.6833 17.9658 18.9931 18.5689C18.3028 19.172 17.4166 19.5029 16.5 19.4998Z"
                contact="tel:+911800123444"
                label="Support Number"
              />
              <ContactInfo
                iconPath="M19 0H1C0.801088 0 0.610322 0.0790178 0.46967 0.21967C0.329018 0.360322 0.25 0.551088 0.25 0.75V13.5C0.25 13.8978 0.408035 14.2794 0.68934 14.5607C0.970644 14.842 1.35218 15 1.75 15H18.25C18.6478 15 19.0294 14.842 19.3107 14.5607C19.592 14.2794 19.75 13.8978 19.75 13.5V0.75C19.75 0.551088 19.671 0.360322 19.5303 0.21967C19.3897 0.0790178 19.1989 0 19 0ZM10 7.98281L2.92844 1.5H17.0716L10 7.98281ZM7.25406 7.5L1.75 12.5447V2.45531L7.25406 7.5ZM8.36406 8.51719L9.48906 9.55312C9.62743 9.68014 9.80842 9.75062 9.99625 9.75062C10.1841 9.75062 10.3651 9.68014 10.5034 9.55312L11.6284 8.51719L17.1894 13.5H2.81062L8.36406 8.51719ZM12.7459 7.5L18.25 2.45531V12.5447L12.7459 7.5Z"
                contact="mailto:support@example.com"
                label="Support Email"
              />
            </div>
            <div className="md:w-[316px]">
              <ContactInfo
                iconPath="M17.5 6.75C17.5 7.04782 17.6183 7.33148 17.829 7.54201C18.0395 7.75254 18.3232 7.87083 18.621 7.87083C18.9188 7.87083 19.2025 7.75254 19.413 7.54201C19.6235 7.33148 19.7418 7.04782 19.7418 6.75C19.7418 6.45218 19.6235 6.16852 19.413 5.958C19.2025 5.74746 18.9188 5.62917 18.621 5.62917C18.3232 5.62917 18.0395 5.74746 17.829 5.958C17.6183 6.16852 17.5 6.45218 17.5 6.75ZM10 10.25C10 10.5478 10.1183 10.8315 10.329 11.042C10.5395 11.2525 10.8232 11.3708 11.121 11.3708C11.4188 11.3708 11.7025 11.2525 11.913 11.042C12.1235 10.8315 12.2418 10.5478 12.2418 10.25C12.2418 9.95218 12.1235 9.66852 11.913 9.458C11.7025 9.24746 11.4188 9.12917 11.121 9.12917C10.8232 9.12917 10.5395 9.24746 10.329 9.458C10.1183 9.66852 10 9.95218 10 10.25ZM2.5 6.75C2.5 7.04782 2.61829 7.33148 2.82883 7.54201C3.03937 7.75254 3.32304 7.87083 3.62087 7.87083C3.9187 7.87083 4.20237 7.75254 4.41291 7.54201C4.62344 7.33148 4.74174 7.04782 4.74174 6.75C4.74174 6.45218 4.62344 6.16852 4.41291 5.958C4.20237 5.74746 3.9187 5.62917 3.62087 5.62917C3.32304 5.62917 3.03937 5.74746 2.82883 5.958C2.61829 6.16852 2.5 6.45218 2.5 6.75ZM10 2.25C10 2.54782 10.1183 2.83148 10.329 3.04201C10.5395 3.25254 10.8232 3.37083 11.121 3.37083C11.4188 3.37083 11.7025 3.25254 11.913 3.04201C12.1235 2.83148 12.2418 2.54782 12.2418 2.25C12.2418 1.95218 12.1235 1.66852 11.913 1.458C11.7025 1.24746 11.4188 1.12917 11.121 1.12917C10.8232 1.12917 10.5395 1.24746 10.329 1.458C10.1183 1.66852 10 1.95218 10 2.25ZM10.8708 1.125H8.12917L0.504167 8.6875L2.2625 10.4583L8.125 4.57083L8.125 14.0417H10.875V4.57083L16.7375 10.4583L18.4958 8.6875L10.8708 1.125ZM0.625 14.0417H18.375V11.2917H0.625V14.0417Z"
                contact="https://www.google.com/maps"
                label="Office Address"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  function ContactInfo({ iconPath, contact, label }) {
    return (
      <div className="mt-[18px] flex items-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="fill-white">
          <path d={iconPath}></path>
        </svg>
        <div className="pl-5">
          <p className="text-[15px] font-medium text-white">{label}</p>
          <a href={contact} className="text-[15px] font-normal text-white/[80%] hover:text-rose-600">
            {contact}
          </a>
        </div>
      </div>
    );
  }
  
  export default Footer;
  