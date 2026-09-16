//#region src/theme/semantic/index.d.ts
declare const light: {
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
declare const dark: {
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
//#endregion
export { dark, light };