const iconsFactory: Map<string, string> = new Map<string, string>([
  [
    'cross',
    '<svg width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">\n' +
      '    <path d="M8.52866 7.59566L14.0161 2.1082C14.1246 1.98157 14.1812 1.81868 14.1748 1.65208C14.1684 1.48549 14.0993 1.32746 13.9814 1.20957C13.8635 1.09168 13.7055 1.02262 13.5389 1.01619C13.3723 1.00975 13.2094 1.06642 13.0828 1.17486L7.59532 6.66233L2.10785 1.16824C1.98321 1.0436 1.81415 0.973572 1.63788 0.973572C1.4616 0.973572 1.29255 1.0436 1.1679 1.16824C1.04325 1.29289 0.973229 1.46194 0.973229 1.63822C0.973229 1.81449 1.04325 1.98355 1.1679 2.1082L6.66199 7.59566L1.1679 13.0831C1.09861 13.1425 1.04233 13.2155 1.0026 13.2976C0.962865 13.3797 0.940538 13.4692 0.937017 13.5604C0.933496 13.6515 0.948856 13.7424 0.982135 13.8274C1.01541 13.9123 1.06589 13.9895 1.1304 14.054C1.19491 14.1185 1.27206 14.169 1.357 14.2022C1.44194 14.2355 1.53285 14.2509 1.62401 14.2474C1.71517 14.2438 1.80462 14.2215 1.88674 14.1818C1.96887 14.142 2.04189 14.0858 2.10123 14.0165L7.59532 8.529L13.0828 14.0165C13.2094 14.1249 13.3723 14.1816 13.5389 14.1751C13.7055 14.1687 13.8635 14.0996 13.9814 13.9818C14.0993 13.8639 14.1684 13.7058 14.1748 13.5392C14.1812 13.3727 14.1246 13.2098 14.0161 13.0831L8.52866 7.59566Z"/>\n' +
      '</svg>\n',
  ],
  [
    'chat',
    '<svg width="42" height="42" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg">\n' +
      '    <path d="M20.9996 3.34723C10.9546 3.34723 2.77734 10.4995 2.77734 19.2917C2.77734 28.0839 10.9546 35.2361 20.9996 35.2361C22.8789 35.2339 24.749 34.9734 26.5573 34.4617L32.8554 38.4706C33.0273 38.5809 33.2258 38.6429 33.4299 38.6502C33.6341 38.6574 33.8364 38.6096 34.0158 38.5118C34.1951 38.414 34.3448 38.2698 34.4492 38.0942C34.5537 37.9186 34.6089 37.7182 34.6093 37.5139V29.8492C36.0343 28.4821 37.1715 26.8438 37.9538 25.0307C38.7362 23.2176 39.1479 21.2663 39.1648 19.2917C39.2218 10.4995 31.0446 3.34723 20.9996 3.34723ZM32.7187 28.5281C32.6042 28.6343 32.5128 28.7629 32.4501 28.9059C32.3874 29.0489 32.3548 29.2033 32.3543 29.3595V35.4411L27.366 32.2636C27.2268 32.1757 27.0702 32.1189 26.9071 32.0973C26.7439 32.0757 26.5779 32.0897 26.4207 32.1383C24.6653 32.6835 22.8376 32.96 20.9996 32.9583C12.2073 32.9583 5.05512 26.8311 5.05512 19.2917C5.05512 11.7522 12.2073 5.62501 20.9996 5.62501C29.7918 5.62501 36.944 11.7522 36.944 19.2917C36.918 21.04 36.5291 22.7638 35.8017 24.3538C35.0743 25.9438 34.0245 27.3652 32.7187 28.5281Z"/>\n' +
      '    <path d="M28.972 18.1528H13.0276C12.7255 18.1528 12.4358 18.2728 12.2222 18.4863C12.0087 18.6999 11.8887 18.9896 11.8887 19.2917C11.8887 19.5937 12.0087 19.8834 12.2222 20.097C12.4358 20.3106 12.7255 20.4305 13.0276 20.4305H28.972C29.2741 20.4305 29.5637 20.3106 29.7773 20.097C29.9909 19.8834 30.1109 19.5937 30.1109 19.2917C30.1109 18.9896 29.9909 18.6999 29.7773 18.4863C29.5637 18.2728 29.2741 18.1528 28.972 18.1528Z"/>\n' +
      '    <path d="M25.2704 23.8472H16.7287C16.4267 23.8472 16.137 23.9672 15.9234 24.1808C15.7098 24.3944 15.5898 24.6841 15.5898 24.9861C15.5898 25.2882 15.7098 25.5779 15.9234 25.7914C16.137 26.005 16.4267 26.125 16.7287 26.125H25.2704C25.5725 26.125 25.8621 26.005 26.0757 25.7914C26.2893 25.5779 26.4093 25.2882 26.4093 24.9861C26.4093 24.6841 26.2893 24.3944 26.0757 24.1808C25.8621 23.9672 25.5725 23.8472 25.2704 23.8472Z"/>\n' +
      '    <path d="M13.3469 14.7361H28.6536C28.9556 14.7361 29.2453 14.6161 29.4589 14.4025C29.6725 14.189 29.7925 13.8993 29.7925 13.5972C29.7925 13.2952 29.6725 13.0055 29.4589 12.7919C29.2453 12.5783 28.9556 12.4583 28.6536 12.4583H13.3469C13.0448 12.4583 12.7552 12.5783 12.5416 12.7919C12.328 13.0055 12.208 13.2952 12.208 13.5972C12.208 13.8993 12.328 14.189 12.5416 14.4025C12.7552 14.6161 13.0448 14.7361 13.3469 14.7361Z"/>\n' +
      '</svg>\n',
  ],
  [
    'arrow-right',
    '<svg width="30" height="15" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path d="M2 8H21M21 8L15 2M21 8L15 14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
      '</svg>\n',
  ],
  [
    'arrow-up',
    '<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z"/>\n' +
      '</svg>',
  ],
  [
    'avatar',
    '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path d="M10.0002 9.44444C10.7694 9.44444 11.5212 9.21636 12.1608 8.78905C12.8003 8.36173 13.2987 7.75437 13.5931 7.04377C13.8874 6.33317 13.9644 5.55124 13.8144 4.79687C13.6643 4.0425 13.2939 3.34957 12.7501 2.8057C12.2062 2.26182 11.5133 1.89144 10.7589 1.74139C10.0045 1.59134 9.22261 1.66835 8.512 1.96269C7.8014 2.25703 7.19404 2.75548 6.76672 3.395C6.33941 4.03453 6.11133 4.78641 6.11133 5.55555C6.11133 6.58695 6.52105 7.57611 7.25036 8.30541C7.97967 9.03472 8.96882 9.44444 10.0002 9.44444ZM10.0002 2.77778C10.5496 2.77778 11.0867 2.94069 11.5435 3.24592C12.0003 3.55114 12.3563 3.98497 12.5665 4.49255C12.7768 5.00012 12.8318 5.55864 12.7246 6.09747C12.6174 6.63631 12.3529 7.13126 11.9644 7.51974C11.5759 7.90822 11.081 8.17278 10.5421 8.27996C10.0033 8.38714 9.44478 8.33213 8.93721 8.12189C8.42963 7.91164 7.99581 7.55561 7.69058 7.09881C7.38535 6.642 7.22244 6.10495 7.22244 5.55555C7.22244 4.81884 7.5151 4.1123 8.03603 3.59137C8.55697 3.07043 9.2635 2.77778 10.0002 2.77778Z"/>\n' +
      '<path d="M16.9273 13.5389C16.0364 12.5972 14.9628 11.8472 13.7721 11.3346C12.5814 10.8219 11.2987 10.5576 10.0023 10.5576C8.70601 10.5576 7.42328 10.8219 6.2326 11.3346C5.04192 11.8472 3.96829 12.5972 3.07735 13.5389C2.88419 13.7452 2.77691 14.0174 2.77735 14.3V17.2222C2.77735 17.5169 2.89441 17.7995 3.10278 18.0079C3.31116 18.2163 3.59377 18.3333 3.88846 18.3333H16.1107C16.4054 18.3333 16.688 18.2163 16.8964 18.0079C17.1047 17.7995 17.2218 17.5169 17.2218 17.2222V14.3C17.2237 14.0181 17.1185 13.7461 16.9273 13.5389ZM16.1107 17.2222H3.88846V14.2944C4.6758 13.4654 5.62362 12.8052 6.67421 12.354C7.7248 11.9029 8.85621 11.6703 9.99957 11.6703C11.1429 11.6703 12.2743 11.9029 13.3249 12.354C14.3755 12.8052 15.3233 13.4654 16.1107 14.2944V17.2222Z"/>\n' +
      '</svg>\n',
  ],
  [
    'heart',
    '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path d="M9.99977 18.0167C9.87702 18.0163 9.75785 17.9753 9.66088 17.9C6.57199 15.5 4.44421 13.4333 2.95532 11.3944C1.05532 8.78889 0.621986 6.38334 1.66643 4.24445C2.41087 2.71667 4.54976 1.46667 7.04976 2.19445C8.24173 2.53875 9.2817 3.27711 9.99977 4.28889C10.7178 3.27711 11.7578 2.53875 12.9498 2.19445C15.4442 1.47778 17.5887 2.71667 18.3331 4.24445C19.3775 6.38334 18.9442 8.78889 17.0442 11.3944C15.5553 13.4333 13.4275 15.5 10.3387 17.9C10.2417 17.9753 10.1225 18.0163 9.99977 18.0167ZM5.62754 3.1C5.03268 3.07685 4.44275 3.21614 3.92107 3.50292C3.39938 3.7897 2.96565 4.21314 2.66643 4.72778C1.80532 6.49445 2.19421 8.46111 3.85532 10.7333C5.62064 13.0103 7.68777 15.0363 9.99977 16.7556C12.3114 15.038 14.3785 13.0139 16.1442 10.7389C17.8109 8.46112 18.1942 6.49445 17.3331 4.73334C16.7775 3.62223 15.1109 2.73889 13.2553 3.26112C12.6603 3.43695 12.1088 3.7354 11.6361 4.13727C11.1634 4.53913 10.7801 5.03551 10.5109 5.59445C10.469 5.69634 10.3978 5.7835 10.3063 5.84483C10.2148 5.90616 10.1071 5.93891 9.99699 5.93891C9.88683 5.93891 9.77916 5.90616 9.68766 5.84483C9.59616 5.7835 9.52495 5.69634 9.4831 5.59445C9.21586 5.03411 8.83322 4.53658 8.36026 4.13446C7.88729 3.73234 7.33468 3.43473 6.73865 3.26112C6.37753 3.15623 6.00359 3.10201 5.62754 3.1Z"/>\n' +
      '</svg>\n',
  ],
  [
    'shopping-bag',
    '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path d="M13.8893 6.66666V5.02777C13.8893 4.51708 13.7887 4.01138 13.5933 3.53956C13.3979 3.06774 13.1114 2.63903 12.7503 2.27791C12.3892 1.9168 11.9605 1.63034 11.4886 1.43491C11.0168 1.23947 10.5111 1.13889 10.0004 1.13889C9.48974 1.13889 8.98404 1.23947 8.51222 1.43491C8.0404 1.63034 7.61169 1.9168 7.25057 2.27791C6.88946 2.63903 6.603 3.06774 6.40757 3.53956C6.21213 4.01138 6.11154 4.51708 6.11154 5.02777V8.91666C6.11154 9.064 6.17008 9.20531 6.27426 9.3095C6.37845 9.41369 6.51976 9.47222 6.6671 9.47222C6.81444 9.47222 6.95575 9.41369 7.05994 9.3095C7.16412 9.20531 7.22266 9.064 7.22266 8.91666V7.77777H11.6671V6.66666H7.22266V5.02777C7.22266 4.29106 7.51531 3.58452 8.03625 3.06359C8.55718 2.54265 9.26372 2.25 10.0004 2.25C10.7371 2.25 11.4437 2.54265 11.9646 3.06359C12.4856 3.58452 12.7782 4.29106 12.7782 5.02777V8.88889C12.7782 9.03623 12.8367 9.17754 12.9409 9.28172C13.0451 9.38591 13.1864 9.44444 13.3338 9.44444C13.4811 9.44444 13.6224 9.38591 13.7266 9.28172C13.8308 9.17754 13.8893 9.03623 13.8893 8.88889V7.77777H16.6671V17.7778H3.33377V7.77777H5.00043V6.66666H2.22266V17.8278C2.22266 18.1092 2.33445 18.3791 2.53345 18.5781C2.73245 18.7771 3.00234 18.8889 3.28377 18.8889H16.7171C16.9985 18.8889 17.2684 18.7771 17.4674 18.5781C17.6664 18.3791 17.7782 18.1092 17.7782 17.8278V6.66666H13.8893Z"/>\n' +
      '</svg>\n',
  ],
  [
    'eye',
    '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\n' +
      '<path d="M18.6783 9.73887C16.8061 6.27776 13.5227 4.18332 9.88939 4.18332C6.25605 4.18332 2.96717 6.27776 1.11161 9.73887L0.956055 9.99999L1.1005 10.2667C2.97272 13.7278 6.25605 15.8222 9.88939 15.8222C13.5227 15.8222 16.8116 13.7555 18.6783 10.2667L18.8227 9.99999L18.6783 9.73887ZM9.88939 14.6833C6.76161 14.6833 3.88939 12.9389 2.22272 9.99999C3.88939 7.0611 6.76161 5.31665 9.88939 5.31665C13.0172 5.31665 15.8561 7.06665 17.5505 9.99999C15.8561 12.9389 13.0116 14.6833 9.88939 14.6833Z"/>\n' +
      '<path d="M10.0499 6.20556C9.29663 6.21106 8.56189 6.43966 7.93847 6.86249C7.31505 7.28533 6.83091 7.88343 6.54721 8.58125C6.26352 9.27907 6.19298 10.0453 6.34451 10.7832C6.49604 11.5211 6.86284 12.1975 7.39859 12.7271C7.93433 13.2566 8.61499 13.6155 9.3546 13.7585C10.0942 13.9014 10.8596 13.8219 11.554 13.5301C12.2485 13.2383 12.8409 12.7472 13.2565 12.1189C13.672 11.4906 13.8921 10.7533 13.8888 10C13.8866 9.49858 13.7855 9.00252 13.5913 8.54024C13.397 8.07796 13.1135 7.65856 12.7568 7.30606C12.4002 6.95357 11.9775 6.67492 11.513 6.48607C11.0485 6.29723 10.5513 6.2019 10.0499 6.20556ZM10.0499 12.7167C9.51782 12.7112 8.99922 12.5486 8.55924 12.2493C8.11926 11.9501 7.77751 11.5275 7.57692 11.0346C7.37633 10.5418 7.32584 10.0007 7.4318 9.4792C7.53775 8.95775 7.79542 8.47922 8.17244 8.10373C8.54947 7.72825 9.02904 7.47253 9.55092 7.36871C10.0728 7.26489 10.6137 7.31758 11.1058 7.52018C11.5978 7.72278 12.019 8.06625 12.3164 8.50745C12.6139 8.94865 12.7744 9.46791 12.7777 10C12.7792 10.3581 12.7095 10.713 12.5728 11.044C12.4361 11.375 12.2351 11.6755 11.9814 11.9282C11.7276 12.1809 11.4262 12.3808 11.0947 12.5161C10.7631 12.6514 10.408 12.7196 10.0499 12.7167Z"/>\n' +
      '</svg>\n',
  ],
  [
    'cart',
    '<svg width="17" height="18" viewBox="0 0 17 18" xmlns="http://www.w3.org/2000/svg">' +
      '    <path d="M12.2402 5.66669V4.0278C12.2402 3.51711 12.1388 3.01141 11.9417 2.53959C11.7445 2.06777 11.4556 1.63906 11.0914 1.27795C10.7271 0.916829 10.2947 0.630375 9.8188 0.43494C9.3429 0.239505 8.83283 0.138916 8.31772 0.138916C7.8026 0.138916 7.29253 0.239505 6.81663 0.43494C6.34072 0.630375 5.90831 0.916829 5.54407 1.27795C5.17983 1.63906 4.8909 2.06777 4.69377 2.53959C4.49665 3.01141 4.39519 3.51711 4.39519 4.0278V7.91669C4.39519 8.06404 4.45422 8.20534 4.55931 8.30953C4.6644 8.41372 4.80693 8.47225 4.95555 8.47225C5.10416 8.47225 5.24669 8.41372 5.35178 8.30953C5.45687 8.20534 5.51591 8.06404 5.51591 7.91669V6.7778H9.9988V5.66669H5.51591V4.0278C5.51591 3.29109 5.8111 2.58455 6.33654 2.06362C6.86198 1.54269 7.57463 1.25003 8.31772 1.25003C9.0608 1.25003 9.77345 1.54269 10.2989 2.06362C10.8243 2.58455 11.1195 3.29109 11.1195 4.0278V7.88892C11.1195 8.03626 11.1786 8.17757 11.2836 8.28175C11.3887 8.38594 11.5313 8.44447 11.6799 8.44447C11.8285 8.44447 11.971 8.38594 12.0761 8.28175C12.1812 8.17757 12.2402 8.03626 12.2402 7.88892V6.7778H15.0421V16.7778H1.59338V6.7778H3.27446V5.66669H0.472656V16.8278C0.472656 17.1092 0.585419 17.3791 0.786137 17.5781C0.986855 17.7771 1.25909 17.8889 1.54295 17.8889H15.0925C15.3763 17.8889 15.6486 17.7771 15.8493 17.5781C16.05 17.3791 16.1628 17.1092 16.1628 16.8278V5.66669H12.2402Z"/>' +
      '</svg>',
  ],
]);

export default iconsFactory;
