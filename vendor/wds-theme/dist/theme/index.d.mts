import _default from "./atomic/index.mjs";

//#region src/theme/index.d.ts
/**
 * Theme without css variable
 */
declare const lightOriginTheme: {
  atomic: {
    blue: {
      readonly 10: "#001536";
      readonly 20: "#002966";
      readonly 30: "#003E9C";
      readonly 40: "#0054D1";
      readonly 45: "#005EEB";
      readonly 50: "#0066FF";
      readonly 55: "#1A75FF";
      readonly 60: "#3385FF";
      readonly 65: "#4F95FF";
      readonly 70: "#69A5FF";
      readonly 80: "#9EC5FF";
      readonly 90: "#C9DEFE";
      readonly 95: "#EAF2FE";
      readonly 99: "#F7FBFF";
    };
    common: {
      readonly 0: "#000000";
      readonly 100: "#ffffff";
    };
    coolNeutral: {
      readonly 5: "#0F0F10";
      readonly 7: "#141415";
      readonly 10: "#171719";
      readonly 15: "#1B1C1E";
      readonly 17: "#212225";
      readonly 20: "#292A2D";
      readonly 22: "#2E2F33";
      readonly 23: "#333438";
      readonly 25: "#37383C";
      readonly 30: "#46474C";
      readonly 40: "#5A5C63";
      readonly 50: "#70737C";
      readonly 60: "#878A93";
      readonly 70: "#989BA2";
      readonly 80: "#AEB0B6";
      readonly 90: "#C2C4C8";
      readonly 95: "#DBDCDF";
      readonly 96: "#E1E2E4";
      readonly 97: "#EAEBEC";
      readonly 98: "#F4F4F5";
      readonly 99: "#F7F7F8";
    };
    cyan: {
      readonly 10: "#00252B";
      readonly 20: "#004854";
      readonly 30: "#006F82";
      readonly 40: "#0098B2";
      readonly 50: "#00BDDE";
      readonly 60: "#28D0ED";
      readonly 70: "#57DFF7";
      readonly 80: "#8AEDFF";
      readonly 90: "#B5F4FF";
      readonly 95: "#DEFAFF";
      readonly 99: "#F7FEFF";
    };
    green: {
      readonly 10: "#00240C";
      readonly 20: "#004517";
      readonly 30: "#006E25";
      readonly 40: "#009632";
      readonly 50: "#00BF40";
      readonly 60: "#1ED45A";
      readonly 70: "#49E57D";
      readonly 80: "#7DF5A5";
      readonly 90: "#ACFCC7";
      readonly 95: "#D9FFE6";
      readonly 99: "#F2FFF6";
    };
    lightBlue: {
      readonly 10: "#002130";
      readonly 20: "#004261";
      readonly 30: "#006796";
      readonly 40: "#008DCF";
      readonly 50: "#00AEFF";
      readonly 60: "#3DC2FF";
      readonly 70: "#70D2FF";
      readonly 80: "#A1E1FF";
      readonly 90: "#C4ECFE";
      readonly 95: "#E5F6FE";
      readonly 99: "#F7FDFF";
    };
    lime: {
      readonly 10: "#112900";
      readonly 20: "#225200";
      readonly 30: "#347D00";
      readonly 37: "#429E00";
      readonly 40: "#48AD00";
      readonly 50: "#58CF04";
      readonly 60: "#6BE016";
      readonly 70: "#88F03E";
      readonly 80: "#AEF779";
      readonly 90: "#CCFCA9";
      readonly 95: "#E6FFD4";
      readonly 99: "#F8FFF2";
    };
    neutral: {
      readonly 5: "#0F0F0F";
      readonly 10: "#171717";
      readonly 15: "#1C1C1C";
      readonly 20: "#2A2A2A";
      readonly 22: "#303030";
      readonly 30: "#474747";
      readonly 40: "#5C5C5C";
      readonly 50: "#737373";
      readonly 60: "#8A8A8A";
      readonly 70: "#9B9B9B";
      readonly 80: "#B0B0B0";
      readonly 90: "#C4C4C4";
      readonly 95: "#DCDCDC";
      readonly 99: "#F7F7F7";
    };
    orange: {
      readonly 10: "#361E00";
      readonly 20: "#663A00";
      readonly 30: "#9C5800";
      readonly 39: "#D17600";
      readonly 40: "#D47800";
      readonly 50: "#FF9200";
      readonly 60: "#FFA938";
      readonly 70: "#FFC06E";
      readonly 80: "#FFD49C";
      readonly 90: "#FEE6C6";
      readonly 95: "#FEF4E6";
      readonly 99: "#FFFCF7";
    };
    pink: {
      readonly 10: "#3D0133";
      readonly 20: "#730560";
      readonly 30: "#A81690";
      readonly 40: "#D331B8";
      readonly 46: "#E846CD";
      readonly 50: "#F553DA";
      readonly 60: "#FA73E3";
      readonly 70: "#FF94ED";
      readonly 80: "#FFB8F3";
      readonly 90: "#FED3F7";
      readonly 95: "#FEECFB";
      readonly 99: "#FFFAFE";
    };
    purple: {
      readonly 99: "#FEFBFF";
      readonly 95: "#F9EDFF";
      readonly 90: "#F2D6FF";
      readonly 80: "#E9BAFF";
      readonly 70: "#DE96FF";
      readonly 60: "#D478FF";
      readonly 50: "#CB59FF";
      readonly 40: "#AD36E3";
      readonly 30: "#861CB8";
      readonly 20: "#580A7D";
      readonly 10: "#290247";
    };
    red: {
      readonly 10: "#3B0101";
      readonly 20: "#730303";
      readonly 30: "#B00C0C";
      readonly 40: "#E52222";
      readonly 50: "#FF4242";
      readonly 60: "#FF6363";
      readonly 70: "#FF8C8C";
      readonly 80: "#FFB5B5";
      readonly 90: "#FED5D5";
      readonly 95: "#FEECEC";
      readonly 99: "#FFFAFA";
    };
    violet: {
      readonly 10: "#11024D";
      readonly 20: "#23098F";
      readonly 30: "#3A16C9";
      readonly 40: "#4F29E5";
      readonly 45: "#5B37ED";
      readonly 50: "#6541F2";
      readonly 60: "#7D5EF7";
      readonly 70: "#9E86FC";
      readonly 80: "#C0B0FF";
      readonly 90: "#DBD3FE";
      readonly 95: "#F0ECFE";
      readonly 99: "#FBFAFF";
    };
    redOrange: {
      readonly 10: "#290F00";
      readonly 20: "#592100";
      readonly 30: "#913500";
      readonly 40: "#C94A00";
      readonly 48: "#F55A00";
      readonly 50: "#FF5E00";
      readonly 60: "#FF7B2E";
      readonly 70: "#FF9B61";
      readonly 80: "#FFBD96";
      readonly 90: "#FED9C4";
      readonly 95: "#FEEEE5";
      readonly 99: "#FFFAF7";
    };
  };
  semantic: {
    platform: {
      ios: {
        navigation: string;
      };
    };
    static: {
      white: "#ffffff";
      black: "#000000";
    };
    primary: {
      normal: "#0066FF";
      strong: "#005EEB";
      heavy: "#0054D1";
    };
    label: {
      normal: "#171719";
      strong: "#000000";
      neutral: string;
      alternative: string;
      assistive: string;
      disable: string;
    };
    background: {
      normal: {
        normal: "#ffffff";
        alternative: "#F7F7F8";
      };
      elevated: {
        normal: "#ffffff";
        alternative: "#F7F7F8";
      };
      transparent: {
        normal: string;
        alternative: string;
      };
      status: {
        negative: string;
        cautionary: string;
        positive: string;
      };
    };
    interaction: {
      inactive: "#989BA2";
      disable: "#F4F4F5";
    };
    line: {
      normal: {
        normal: string;
        neutral: string;
        alternative: string;
      };
      solid: {
        normal: "#E1E2E4";
        neutral: "#EAEBEC";
        alternative: "#F4F4F5";
      };
      primary: {
        normal: string;
        strong: string;
      };
      status: {
        negative: {
          normal: string;
          strong: string;
        };
        cautionary: {
          normal: string;
        };
        positive: {
          normal: string;
        };
      };
    };
    status: {
      positive: "#00BF40";
      cautionary: "#FF9200";
      negative: "#FF4242";
    };
    accent: {
      background: {
        redOrange: "#FF5E00";
        lime: "#58CF04";
        cyan: "#00BDDE";
        lightBlue: "#00AEFF";
        violet: "#6541F2";
        purple: "#CB59FF";
        pink: "#F553DA";
      };
      foreground: {
        red: "#E52222";
        redOrange: "#F55A00";
        orange: "#D17600";
        lime: "#429E00";
        green: "#009632";
        cyan: "#0098B2";
        lightBlue: "#008DCF";
        blue: "#005EEB";
        violet: "#5B37ED";
        purple: "#AD36E3";
        pink: "#E846CD";
      };
    };
    inverse: {
      primary: "#3385FF";
      background: "#1B1C1E";
      label: "#F7F7F8";
    };
    fill: {
      normal: string;
      strong: string;
      alternative: string;
    };
    material: {
      dimmer: string;
    };
    elevation: {
      shadow: {
        normal: {
          xsmall: string;
          small: string;
          medium: string;
          large: string;
          xlarge: string;
        };
        drop: {
          xsmall: string;
          small: string;
          medium: string;
          large: string;
          xlarge: string;
        };
        spread: {
          small: string;
          medium: string;
        };
      };
    };
  };
  opacity: {
    readonly 0: 0;
    readonly 5: 0.05;
    readonly 8: 0.08;
    readonly 12: 0.12;
    readonly 16: 0.16;
    readonly 22: 0.22;
    readonly 28: 0.28;
    readonly 35: 0.35;
    readonly 43: 0.43;
    readonly 52: 0.52;
    readonly 61: 0.61;
    readonly 74: 0.74;
    readonly 88: 0.88;
    readonly 97: 0.97;
    readonly 100: 1;
  };
  breakpoint: {
    readonly xl: "1600px";
    readonly lg: "1200px";
    readonly md: "992px";
    readonly sm: "768px";
    readonly xs: "0px";
  };
  spacing: {
    readonly 0: "0px";
    readonly 0.5: "0.5px";
    readonly 1: "1px";
    readonly 2: "2px";
    readonly 4: "4px";
    readonly 6: "6px";
    readonly 8: "8px";
    readonly 10: "10px";
    readonly 12: "12px";
    readonly 14: "14px";
    readonly 16: "16px";
    readonly 20: "20px";
    readonly 24: "24px";
    readonly 32: "32px";
    readonly 40: "40px";
    readonly 48: "48px";
    readonly 56: "56px";
    readonly 64: "64px";
    readonly 72: "72px";
    readonly 80: "80px";
  };
  zIndex: {
    readonly modal: 1300;
  };
};
/**
 * Theme without css variable
 */
declare const darkOriginTheme: {
  atomic: {
    blue: {
      readonly 10: "#001536";
      readonly 20: "#002966";
      readonly 30: "#003E9C";
      readonly 40: "#0054D1";
      readonly 45: "#005EEB";
      readonly 50: "#0066FF";
      readonly 55: "#1A75FF";
      readonly 60: "#3385FF";
      readonly 65: "#4F95FF";
      readonly 70: "#69A5FF";
      readonly 80: "#9EC5FF";
      readonly 90: "#C9DEFE";
      readonly 95: "#EAF2FE";
      readonly 99: "#F7FBFF";
    };
    common: {
      readonly 0: "#000000";
      readonly 100: "#ffffff";
    };
    coolNeutral: {
      readonly 5: "#0F0F10";
      readonly 7: "#141415";
      readonly 10: "#171719";
      readonly 15: "#1B1C1E";
      readonly 17: "#212225";
      readonly 20: "#292A2D";
      readonly 22: "#2E2F33";
      readonly 23: "#333438";
      readonly 25: "#37383C";
      readonly 30: "#46474C";
      readonly 40: "#5A5C63";
      readonly 50: "#70737C";
      readonly 60: "#878A93";
      readonly 70: "#989BA2";
      readonly 80: "#AEB0B6";
      readonly 90: "#C2C4C8";
      readonly 95: "#DBDCDF";
      readonly 96: "#E1E2E4";
      readonly 97: "#EAEBEC";
      readonly 98: "#F4F4F5";
      readonly 99: "#F7F7F8";
    };
    cyan: {
      readonly 10: "#00252B";
      readonly 20: "#004854";
      readonly 30: "#006F82";
      readonly 40: "#0098B2";
      readonly 50: "#00BDDE";
      readonly 60: "#28D0ED";
      readonly 70: "#57DFF7";
      readonly 80: "#8AEDFF";
      readonly 90: "#B5F4FF";
      readonly 95: "#DEFAFF";
      readonly 99: "#F7FEFF";
    };
    green: {
      readonly 10: "#00240C";
      readonly 20: "#004517";
      readonly 30: "#006E25";
      readonly 40: "#009632";
      readonly 50: "#00BF40";
      readonly 60: "#1ED45A";
      readonly 70: "#49E57D";
      readonly 80: "#7DF5A5";
      readonly 90: "#ACFCC7";
      readonly 95: "#D9FFE6";
      readonly 99: "#F2FFF6";
    };
    lightBlue: {
      readonly 10: "#002130";
      readonly 20: "#004261";
      readonly 30: "#006796";
      readonly 40: "#008DCF";
      readonly 50: "#00AEFF";
      readonly 60: "#3DC2FF";
      readonly 70: "#70D2FF";
      readonly 80: "#A1E1FF";
      readonly 90: "#C4ECFE";
      readonly 95: "#E5F6FE";
      readonly 99: "#F7FDFF";
    };
    lime: {
      readonly 10: "#112900";
      readonly 20: "#225200";
      readonly 30: "#347D00";
      readonly 37: "#429E00";
      readonly 40: "#48AD00";
      readonly 50: "#58CF04";
      readonly 60: "#6BE016";
      readonly 70: "#88F03E";
      readonly 80: "#AEF779";
      readonly 90: "#CCFCA9";
      readonly 95: "#E6FFD4";
      readonly 99: "#F8FFF2";
    };
    neutral: {
      readonly 5: "#0F0F0F";
      readonly 10: "#171717";
      readonly 15: "#1C1C1C";
      readonly 20: "#2A2A2A";
      readonly 22: "#303030";
      readonly 30: "#474747";
      readonly 40: "#5C5C5C";
      readonly 50: "#737373";
      readonly 60: "#8A8A8A";
      readonly 70: "#9B9B9B";
      readonly 80: "#B0B0B0";
      readonly 90: "#C4C4C4";
      readonly 95: "#DCDCDC";
      readonly 99: "#F7F7F7";
    };
    orange: {
      readonly 10: "#361E00";
      readonly 20: "#663A00";
      readonly 30: "#9C5800";
      readonly 39: "#D17600";
      readonly 40: "#D47800";
      readonly 50: "#FF9200";
      readonly 60: "#FFA938";
      readonly 70: "#FFC06E";
      readonly 80: "#FFD49C";
      readonly 90: "#FEE6C6";
      readonly 95: "#FEF4E6";
      readonly 99: "#FFFCF7";
    };
    pink: {
      readonly 10: "#3D0133";
      readonly 20: "#730560";
      readonly 30: "#A81690";
      readonly 40: "#D331B8";
      readonly 46: "#E846CD";
      readonly 50: "#F553DA";
      readonly 60: "#FA73E3";
      readonly 70: "#FF94ED";
      readonly 80: "#FFB8F3";
      readonly 90: "#FED3F7";
      readonly 95: "#FEECFB";
      readonly 99: "#FFFAFE";
    };
    purple: {
      readonly 99: "#FEFBFF";
      readonly 95: "#F9EDFF";
      readonly 90: "#F2D6FF";
      readonly 80: "#E9BAFF";
      readonly 70: "#DE96FF";
      readonly 60: "#D478FF";
      readonly 50: "#CB59FF";
      readonly 40: "#AD36E3";
      readonly 30: "#861CB8";
      readonly 20: "#580A7D";
      readonly 10: "#290247";
    };
    red: {
      readonly 10: "#3B0101";
      readonly 20: "#730303";
      readonly 30: "#B00C0C";
      readonly 40: "#E52222";
      readonly 50: "#FF4242";
      readonly 60: "#FF6363";
      readonly 70: "#FF8C8C";
      readonly 80: "#FFB5B5";
      readonly 90: "#FED5D5";
      readonly 95: "#FEECEC";
      readonly 99: "#FFFAFA";
    };
    violet: {
      readonly 10: "#11024D";
      readonly 20: "#23098F";
      readonly 30: "#3A16C9";
      readonly 40: "#4F29E5";
      readonly 45: "#5B37ED";
      readonly 50: "#6541F2";
      readonly 60: "#7D5EF7";
      readonly 70: "#9E86FC";
      readonly 80: "#C0B0FF";
      readonly 90: "#DBD3FE";
      readonly 95: "#F0ECFE";
      readonly 99: "#FBFAFF";
    };
    redOrange: {
      readonly 10: "#290F00";
      readonly 20: "#592100";
      readonly 30: "#913500";
      readonly 40: "#C94A00";
      readonly 48: "#F55A00";
      readonly 50: "#FF5E00";
      readonly 60: "#FF7B2E";
      readonly 70: "#FF9B61";
      readonly 80: "#FFBD96";
      readonly 90: "#FED9C4";
      readonly 95: "#FEEEE5";
      readonly 99: "#FFFAF7";
    };
  };
  semantic: {
    platform: {
      ios: {
        navigation: string;
      };
    };
    static: {
      white: "#ffffff";
      black: "#000000";
    };
    primary: {
      normal: "#3385FF";
      strong: "#1A75FF";
      heavy: "#0066FF";
    };
    label: {
      normal: "#F7F7F8";
      strong: "#ffffff";
      neutral: string;
      alternative: string;
      assistive: string;
      disable: string;
    };
    background: {
      normal: {
        normal: "#1B1C1E";
        alternative: "#0F0F10";
      };
      elevated: {
        normal: "#212225";
        alternative: "#141415";
      };
      transparent: {
        normal: string;
        alternative: string;
      };
      status: {
        negative: string;
        cautionary: string;
        positive: string;
      };
    };
    interaction: {
      inactive: "#5A5C63";
      disable: "#2E2F33";
    };
    line: {
      normal: {
        normal: string;
        neutral: string;
        alternative: string;
      };
      solid: {
        normal: "#37383C";
        neutral: "#333438";
        alternative: "#2E2F33";
      };
      primary: {
        normal: string;
        strong: string;
      };
      status: {
        negative: {
          normal: string;
          strong: string;
        };
        cautionary: {
          normal: string;
        };
        positive: {
          normal: string;
        };
      };
    };
    status: {
      positive: "#1ED45A";
      cautionary: "#FFA938";
      negative: "#FF6363";
    };
    accent: {
      background: {
        redOrange: "#FF7B2E";
        lime: "#6BE016";
        cyan: "#28D0ED";
        lightBlue: "#3DC2FF";
        violet: "#7D5EF7";
        purple: "#D478FF";
        pink: "#FA73E3";
      };
      foreground: {
        red: "#FF6363";
        redOrange: "#FF7B2E";
        orange: "#FF9200";
        lime: "#58CF04";
        green: "#1ED45A";
        cyan: "#00BDDE";
        lightBlue: "#00AEFF";
        blue: "#4F95FF";
        violet: "#9E86FC";
        purple: "#D478FF";
        pink: "#FA73E3";
      };
    };
    inverse: {
      primary: "#0066FF";
      background: "#ffffff";
      label: "#171719";
    };
    fill: {
      normal: string;
      strong: string;
      alternative: string;
    };
    material: {
      dimmer: string;
    };
    elevation: {
      shadow: {
        normal: {
          xsmall: string;
          small: string;
          medium: string;
          large: string;
          xlarge: string;
        };
        drop: {
          xsmall: string;
          small: string;
          medium: string;
          large: string;
          xlarge: string;
        };
        spread: {
          small: string;
          medium: string;
        };
      };
    };
  };
  opacity: {
    readonly 0: 0;
    readonly 5: 0.05;
    readonly 8: 0.08;
    readonly 12: 0.12;
    readonly 16: 0.16;
    readonly 22: 0.22;
    readonly 28: 0.28;
    readonly 35: 0.35;
    readonly 43: 0.43;
    readonly 52: 0.52;
    readonly 61: 0.61;
    readonly 74: 0.74;
    readonly 88: 0.88;
    readonly 97: 0.97;
    readonly 100: 1;
  };
  breakpoint: {
    readonly xl: "1600px";
    readonly lg: "1200px";
    readonly md: "992px";
    readonly sm: "768px";
    readonly xs: "0px";
  };
  spacing: {
    readonly 0: "0px";
    readonly 0.5: "0.5px";
    readonly 1: "1px";
    readonly 2: "2px";
    readonly 4: "4px";
    readonly 6: "6px";
    readonly 8: "8px";
    readonly 10: "10px";
    readonly 12: "12px";
    readonly 14: "14px";
    readonly 16: "16px";
    readonly 20: "20px";
    readonly 24: "24px";
    readonly 32: "32px";
    readonly 40: "40px";
    readonly 48: "48px";
    readonly 56: "56px";
    readonly 64: "64px";
    readonly 72: "72px";
    readonly 80: "80px";
  };
  zIndex: {
    readonly modal: 1300;
  };
};
declare const lightTheme: {
  atomic: typeof _default;
  semantic: {
    platform: {
      ios: {
        navigation: string;
      };
    };
    static: {
      white: "#ffffff";
      black: "#000000";
    };
    primary: {
      normal: "#0066FF";
      strong: "#005EEB";
      heavy: "#0054D1";
    };
    label: {
      normal: "#171719";
      strong: "#000000";
      neutral: string;
      alternative: string;
      assistive: string;
      disable: string;
    };
    background: {
      normal: {
        normal: "#ffffff";
        alternative: "#F7F7F8";
      };
      elevated: {
        normal: "#ffffff";
        alternative: "#F7F7F8";
      };
      transparent: {
        normal: string;
        alternative: string;
      };
      status: {
        negative: string;
        cautionary: string;
        positive: string;
      };
    };
    interaction: {
      inactive: "#989BA2";
      disable: "#F4F4F5";
    };
    line: {
      normal: {
        normal: string;
        neutral: string;
        alternative: string;
      };
      solid: {
        normal: "#E1E2E4";
        neutral: "#EAEBEC";
        alternative: "#F4F4F5";
      };
      primary: {
        normal: string;
        strong: string;
      };
      status: {
        negative: {
          normal: string;
          strong: string;
        };
        cautionary: {
          normal: string;
        };
        positive: {
          normal: string;
        };
      };
    };
    status: {
      positive: "#00BF40";
      cautionary: "#FF9200";
      negative: "#FF4242";
    };
    accent: {
      background: {
        redOrange: "#FF5E00";
        lime: "#58CF04";
        cyan: "#00BDDE";
        lightBlue: "#00AEFF";
        violet: "#6541F2";
        purple: "#CB59FF";
        pink: "#F553DA";
      };
      foreground: {
        red: "#E52222";
        redOrange: "#F55A00";
        orange: "#D17600";
        lime: "#429E00";
        green: "#009632";
        cyan: "#0098B2";
        lightBlue: "#008DCF";
        blue: "#005EEB";
        violet: "#5B37ED";
        purple: "#AD36E3";
        pink: "#E846CD";
      };
    };
    inverse: {
      primary: "#3385FF";
      background: "#1B1C1E";
      label: "#F7F7F8";
    };
    fill: {
      normal: string;
      strong: string;
      alternative: string;
    };
    material: {
      dimmer: string;
    };
    elevation: {
      shadow: {
        normal: {
          xsmall: string;
          small: string;
          medium: string;
          large: string;
          xlarge: string;
        };
        drop: {
          xsmall: string;
          small: string;
          medium: string;
          large: string;
          xlarge: string;
        };
        spread: {
          small: string;
          medium: string;
        };
      };
    };
  };
  opacity: {
    readonly 0: 0;
    readonly 5: 0.05;
    readonly 8: 0.08;
    readonly 12: 0.12;
    readonly 16: 0.16;
    readonly 22: 0.22;
    readonly 28: 0.28;
    readonly 35: 0.35;
    readonly 43: 0.43;
    readonly 52: 0.52;
    readonly 61: 0.61;
    readonly 74: 0.74;
    readonly 88: 0.88;
    readonly 97: 0.97;
    readonly 100: 1;
  };
  breakpoint: {
    readonly xl: "1600px";
    readonly lg: "1200px";
    readonly md: "992px";
    readonly sm: "768px";
    readonly xs: "0px";
  };
  spacing: {
    readonly 0: "0px";
    readonly 0.5: "0.5px";
    readonly 1: "1px";
    readonly 2: "2px";
    readonly 4: "4px";
    readonly 6: "6px";
    readonly 8: "8px";
    readonly 10: "10px";
    readonly 12: "12px";
    readonly 14: "14px";
    readonly 16: "16px";
    readonly 20: "20px";
    readonly 24: "24px";
    readonly 32: "32px";
    readonly 40: "40px";
    readonly 48: "48px";
    readonly 56: "56px";
    readonly 64: "64px";
    readonly 72: "72px";
    readonly 80: "80px";
  };
  zIndex: {
    readonly modal: 1300;
  };
};
declare const darkTheme: {
  atomic: typeof _default;
  semantic: {
    platform: {
      ios: {
        navigation: string;
      };
    };
    static: {
      white: "#ffffff";
      black: "#000000";
    };
    primary: {
      normal: "#3385FF";
      strong: "#1A75FF";
      heavy: "#0066FF";
    };
    label: {
      normal: "#F7F7F8";
      strong: "#ffffff";
      neutral: string;
      alternative: string;
      assistive: string;
      disable: string;
    };
    background: {
      normal: {
        normal: "#1B1C1E";
        alternative: "#0F0F10";
      };
      elevated: {
        normal: "#212225";
        alternative: "#141415";
      };
      transparent: {
        normal: string;
        alternative: string;
      };
      status: {
        negative: string;
        cautionary: string;
        positive: string;
      };
    };
    interaction: {
      inactive: "#5A5C63";
      disable: "#2E2F33";
    };
    line: {
      normal: {
        normal: string;
        neutral: string;
        alternative: string;
      };
      solid: {
        normal: "#37383C";
        neutral: "#333438";
        alternative: "#2E2F33";
      };
      primary: {
        normal: string;
        strong: string;
      };
      status: {
        negative: {
          normal: string;
          strong: string;
        };
        cautionary: {
          normal: string;
        };
        positive: {
          normal: string;
        };
      };
    };
    status: {
      positive: "#1ED45A";
      cautionary: "#FFA938";
      negative: "#FF6363";
    };
    accent: {
      background: {
        redOrange: "#FF7B2E";
        lime: "#6BE016";
        cyan: "#28D0ED";
        lightBlue: "#3DC2FF";
        violet: "#7D5EF7";
        purple: "#D478FF";
        pink: "#FA73E3";
      };
      foreground: {
        red: "#FF6363";
        redOrange: "#FF7B2E";
        orange: "#FF9200";
        lime: "#58CF04";
        green: "#1ED45A";
        cyan: "#00BDDE";
        lightBlue: "#00AEFF";
        blue: "#4F95FF";
        violet: "#9E86FC";
        purple: "#D478FF";
        pink: "#FA73E3";
      };
    };
    inverse: {
      primary: "#0066FF";
      background: "#ffffff";
      label: "#171719";
    };
    fill: {
      normal: string;
      strong: string;
      alternative: string;
    };
    material: {
      dimmer: string;
    };
    elevation: {
      shadow: {
        normal: {
          xsmall: string;
          small: string;
          medium: string;
          large: string;
          xlarge: string;
        };
        drop: {
          xsmall: string;
          small: string;
          medium: string;
          large: string;
          xlarge: string;
        };
        spread: {
          small: string;
          medium: string;
        };
      };
    };
  };
  opacity: {
    readonly 0: 0;
    readonly 5: 0.05;
    readonly 8: 0.08;
    readonly 12: 0.12;
    readonly 16: 0.16;
    readonly 22: 0.22;
    readonly 28: 0.28;
    readonly 35: 0.35;
    readonly 43: 0.43;
    readonly 52: 0.52;
    readonly 61: 0.61;
    readonly 74: 0.74;
    readonly 88: 0.88;
    readonly 97: 0.97;
    readonly 100: 1;
  };
  breakpoint: {
    readonly xl: "1600px";
    readonly lg: "1200px";
    readonly md: "992px";
    readonly sm: "768px";
    readonly xs: "0px";
  };
  spacing: {
    readonly 0: "0px";
    readonly 0.5: "0.5px";
    readonly 1: "1px";
    readonly 2: "2px";
    readonly 4: "4px";
    readonly 6: "6px";
    readonly 8: "8px";
    readonly 10: "10px";
    readonly 12: "12px";
    readonly 14: "14px";
    readonly 16: "16px";
    readonly 20: "20px";
    readonly 24: "24px";
    readonly 32: "32px";
    readonly 40: "40px";
    readonly 48: "48px";
    readonly 56: "56px";
    readonly 64: "64px";
    readonly 72: "72px";
    readonly 80: "80px";
  };
  zIndex: {
    readonly modal: 1300;
  };
};
declare const theme: {
  light: {
    atomic: typeof _default;
    semantic: {
      platform: {
        ios: {
          navigation: string;
        };
      };
      static: {
        white: "#ffffff";
        black: "#000000";
      };
      primary: {
        normal: "#0066FF";
        strong: "#005EEB";
        heavy: "#0054D1";
      };
      label: {
        normal: "#171719";
        strong: "#000000";
        neutral: string;
        alternative: string;
        assistive: string;
        disable: string;
      };
      background: {
        normal: {
          normal: "#ffffff";
          alternative: "#F7F7F8";
        };
        elevated: {
          normal: "#ffffff";
          alternative: "#F7F7F8";
        };
        transparent: {
          normal: string;
          alternative: string;
        };
        status: {
          negative: string;
          cautionary: string;
          positive: string;
        };
      };
      interaction: {
        inactive: "#989BA2";
        disable: "#F4F4F5";
      };
      line: {
        normal: {
          normal: string;
          neutral: string;
          alternative: string;
        };
        solid: {
          normal: "#E1E2E4";
          neutral: "#EAEBEC";
          alternative: "#F4F4F5";
        };
        primary: {
          normal: string;
          strong: string;
        };
        status: {
          negative: {
            normal: string;
            strong: string;
          };
          cautionary: {
            normal: string;
          };
          positive: {
            normal: string;
          };
        };
      };
      status: {
        positive: "#00BF40";
        cautionary: "#FF9200";
        negative: "#FF4242";
      };
      accent: {
        background: {
          redOrange: "#FF5E00";
          lime: "#58CF04";
          cyan: "#00BDDE";
          lightBlue: "#00AEFF";
          violet: "#6541F2";
          purple: "#CB59FF";
          pink: "#F553DA";
        };
        foreground: {
          red: "#E52222";
          redOrange: "#F55A00";
          orange: "#D17600";
          lime: "#429E00";
          green: "#009632";
          cyan: "#0098B2";
          lightBlue: "#008DCF";
          blue: "#005EEB";
          violet: "#5B37ED";
          purple: "#AD36E3";
          pink: "#E846CD";
        };
      };
      inverse: {
        primary: "#3385FF";
        background: "#1B1C1E";
        label: "#F7F7F8";
      };
      fill: {
        normal: string;
        strong: string;
        alternative: string;
      };
      material: {
        dimmer: string;
      };
      elevation: {
        shadow: {
          normal: {
            xsmall: string;
            small: string;
            medium: string;
            large: string;
            xlarge: string;
          };
          drop: {
            xsmall: string;
            small: string;
            medium: string;
            large: string;
            xlarge: string;
          };
          spread: {
            small: string;
            medium: string;
          };
        };
      };
    };
    opacity: {
      readonly 0: 0;
      readonly 5: 0.05;
      readonly 8: 0.08;
      readonly 12: 0.12;
      readonly 16: 0.16;
      readonly 22: 0.22;
      readonly 28: 0.28;
      readonly 35: 0.35;
      readonly 43: 0.43;
      readonly 52: 0.52;
      readonly 61: 0.61;
      readonly 74: 0.74;
      readonly 88: 0.88;
      readonly 97: 0.97;
      readonly 100: 1;
    };
    breakpoint: {
      readonly xl: "1600px";
      readonly lg: "1200px";
      readonly md: "992px";
      readonly sm: "768px";
      readonly xs: "0px";
    };
    spacing: {
      readonly 0: "0px";
      readonly 0.5: "0.5px";
      readonly 1: "1px";
      readonly 2: "2px";
      readonly 4: "4px";
      readonly 6: "6px";
      readonly 8: "8px";
      readonly 10: "10px";
      readonly 12: "12px";
      readonly 14: "14px";
      readonly 16: "16px";
      readonly 20: "20px";
      readonly 24: "24px";
      readonly 32: "32px";
      readonly 40: "40px";
      readonly 48: "48px";
      readonly 56: "56px";
      readonly 64: "64px";
      readonly 72: "72px";
      readonly 80: "80px";
    };
    zIndex: {
      readonly modal: 1300;
    };
  };
  dark: {
    atomic: typeof _default;
    semantic: {
      platform: {
        ios: {
          navigation: string;
        };
      };
      static: {
        white: "#ffffff";
        black: "#000000";
      };
      primary: {
        normal: "#3385FF";
        strong: "#1A75FF";
        heavy: "#0066FF";
      };
      label: {
        normal: "#F7F7F8";
        strong: "#ffffff";
        neutral: string;
        alternative: string;
        assistive: string;
        disable: string;
      };
      background: {
        normal: {
          normal: "#1B1C1E";
          alternative: "#0F0F10";
        };
        elevated: {
          normal: "#212225";
          alternative: "#141415";
        };
        transparent: {
          normal: string;
          alternative: string;
        };
        status: {
          negative: string;
          cautionary: string;
          positive: string;
        };
      };
      interaction: {
        inactive: "#5A5C63";
        disable: "#2E2F33";
      };
      line: {
        normal: {
          normal: string;
          neutral: string;
          alternative: string;
        };
        solid: {
          normal: "#37383C";
          neutral: "#333438";
          alternative: "#2E2F33";
        };
        primary: {
          normal: string;
          strong: string;
        };
        status: {
          negative: {
            normal: string;
            strong: string;
          };
          cautionary: {
            normal: string;
          };
          positive: {
            normal: string;
          };
        };
      };
      status: {
        positive: "#1ED45A";
        cautionary: "#FFA938";
        negative: "#FF6363";
      };
      accent: {
        background: {
          redOrange: "#FF7B2E";
          lime: "#6BE016";
          cyan: "#28D0ED";
          lightBlue: "#3DC2FF";
          violet: "#7D5EF7";
          purple: "#D478FF";
          pink: "#FA73E3";
        };
        foreground: {
          red: "#FF6363";
          redOrange: "#FF7B2E";
          orange: "#FF9200";
          lime: "#58CF04";
          green: "#1ED45A";
          cyan: "#00BDDE";
          lightBlue: "#00AEFF";
          blue: "#4F95FF";
          violet: "#9E86FC";
          purple: "#D478FF";
          pink: "#FA73E3";
        };
      };
      inverse: {
        primary: "#0066FF";
        background: "#ffffff";
        label: "#171719";
      };
      fill: {
        normal: string;
        strong: string;
        alternative: string;
      };
      material: {
        dimmer: string;
      };
      elevation: {
        shadow: {
          normal: {
            xsmall: string;
            small: string;
            medium: string;
            large: string;
            xlarge: string;
          };
          drop: {
            xsmall: string;
            small: string;
            medium: string;
            large: string;
            xlarge: string;
          };
          spread: {
            small: string;
            medium: string;
          };
        };
      };
    };
    opacity: {
      readonly 0: 0;
      readonly 5: 0.05;
      readonly 8: 0.08;
      readonly 12: 0.12;
      readonly 16: 0.16;
      readonly 22: 0.22;
      readonly 28: 0.28;
      readonly 35: 0.35;
      readonly 43: 0.43;
      readonly 52: 0.52;
      readonly 61: 0.61;
      readonly 74: 0.74;
      readonly 88: 0.88;
      readonly 97: 0.97;
      readonly 100: 1;
    };
    breakpoint: {
      readonly xl: "1600px";
      readonly lg: "1200px";
      readonly md: "992px";
      readonly sm: "768px";
      readonly xs: "0px";
    };
    spacing: {
      readonly 0: "0px";
      readonly 0.5: "0.5px";
      readonly 1: "1px";
      readonly 2: "2px";
      readonly 4: "4px";
      readonly 6: "6px";
      readonly 8: "8px";
      readonly 10: "10px";
      readonly 12: "12px";
      readonly 14: "14px";
      readonly 16: "16px";
      readonly 20: "20px";
      readonly 24: "24px";
      readonly 32: "32px";
      readonly 40: "40px";
      readonly 48: "48px";
      readonly 56: "56px";
      readonly 64: "64px";
      readonly 72: "72px";
      readonly 80: "80px";
    };
    zIndex: {
      readonly modal: 1300;
    };
  };
};
//#endregion
export { darkOriginTheme, darkTheme, lightOriginTheme, lightTheme, theme };