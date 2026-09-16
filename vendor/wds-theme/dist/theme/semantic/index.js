Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const require_utils_index = require("../../utils/index.js");
const require_theme_opacity_index = require("../opacity/index.js");
const require_theme_atomic_index = require("../atomic/index.js");
//#region src/theme/semantic/index.ts
const light = {
	static: {
		white: require_theme_atomic_index.default.common[100],
		black: require_theme_atomic_index.default.common[0]
	},
	primary: {
		normal: require_theme_atomic_index.default.blue[50],
		strong: require_theme_atomic_index.default.blue[45],
		heavy: require_theme_atomic_index.default.blue[40]
	},
	label: {
		normal: require_theme_atomic_index.default.coolNeutral[10],
		strong: require_theme_atomic_index.default.common[0],
		neutral: require_utils_index.addHexOpacity(require_theme_atomic_index.default.coolNeutral[22], require_theme_opacity_index.default[88]),
		alternative: require_utils_index.addHexOpacity(require_theme_atomic_index.default.coolNeutral[25], require_theme_opacity_index.default[61]),
		assistive: require_utils_index.addHexOpacity(require_theme_atomic_index.default.coolNeutral[25], require_theme_opacity_index.default[28]),
		disable: require_utils_index.addHexOpacity(require_theme_atomic_index.default.coolNeutral[25], require_theme_opacity_index.default[16])
	},
	background: {
		normal: {
			normal: require_theme_atomic_index.default.common[100],
			alternative: require_theme_atomic_index.default.coolNeutral[99]
		},
		elevated: {
			normal: require_theme_atomic_index.default.common[100],
			alternative: require_theme_atomic_index.default.coolNeutral[99]
		},
		transparent: {
			normal: require_utils_index.addHexOpacity(require_theme_atomic_index.default.common[100], require_theme_opacity_index.default[8]),
			alternative: require_utils_index.addHexOpacity(require_theme_atomic_index.default.common[100], require_theme_opacity_index.default[28])
		},
		status: {
			negative: require_utils_index.addHexOpacity(require_theme_atomic_index.default.red[50], require_theme_opacity_index.default[8]),
			cautionary: require_utils_index.addHexOpacity(require_theme_atomic_index.default.orange[50], require_theme_opacity_index.default[8]),
			positive: require_utils_index.addHexOpacity(require_theme_atomic_index.default.green[50], require_theme_opacity_index.default[8])
		}
	},
	interaction: {
		inactive: require_theme_atomic_index.default.coolNeutral[70],
		disable: require_theme_atomic_index.default.coolNeutral[98]
	},
	line: {
		normal: {
			normal: require_utils_index.addHexOpacity(require_theme_atomic_index.default.coolNeutral[50], require_theme_opacity_index.default[22]),
			neutral: require_utils_index.addHexOpacity(require_theme_atomic_index.default.coolNeutral[50], require_theme_opacity_index.default[16]),
			alternative: require_utils_index.addHexOpacity(require_theme_atomic_index.default.coolNeutral[50], require_theme_opacity_index.default[8])
		},
		solid: {
			normal: require_theme_atomic_index.default.coolNeutral[96],
			neutral: require_theme_atomic_index.default.coolNeutral[97],
			alternative: require_theme_atomic_index.default.coolNeutral[98]
		},
		primary: {
			normal: require_utils_index.addHexOpacity(require_theme_atomic_index.default.blue[50], require_theme_opacity_index.default[28]),
			strong: require_utils_index.addHexOpacity(require_theme_atomic_index.default.blue[50], require_theme_opacity_index.default[43])
		},
		status: {
			negative: {
				normal: require_utils_index.addHexOpacity(require_theme_atomic_index.default.red[50], require_theme_opacity_index.default[43]),
				strong: require_utils_index.addHexOpacity(require_theme_atomic_index.default.red[50], require_theme_opacity_index.default[52])
			},
			cautionary: { normal: require_utils_index.addHexOpacity(require_theme_atomic_index.default.orange[50], require_theme_opacity_index.default[43]) },
			positive: { normal: require_utils_index.addHexOpacity(require_theme_atomic_index.default.green[50], require_theme_opacity_index.default[43]) }
		}
	},
	status: {
		positive: require_theme_atomic_index.default.green[50],
		cautionary: require_theme_atomic_index.default.orange[50],
		negative: require_theme_atomic_index.default.red[50]
	},
	accent: {
		background: {
			redOrange: require_theme_atomic_index.default.redOrange[50],
			lime: require_theme_atomic_index.default.lime[50],
			cyan: require_theme_atomic_index.default.cyan[50],
			lightBlue: require_theme_atomic_index.default.lightBlue[50],
			violet: require_theme_atomic_index.default.violet[50],
			purple: require_theme_atomic_index.default.purple[50],
			pink: require_theme_atomic_index.default.pink[50]
		},
		foreground: {
			red: require_theme_atomic_index.default.red[40],
			redOrange: require_theme_atomic_index.default.redOrange[48],
			orange: require_theme_atomic_index.default.orange[39],
			lime: require_theme_atomic_index.default.lime[37],
			green: require_theme_atomic_index.default.green[40],
			cyan: require_theme_atomic_index.default.cyan[40],
			lightBlue: require_theme_atomic_index.default.lightBlue[40],
			blue: require_theme_atomic_index.default.blue[45],
			violet: require_theme_atomic_index.default.violet[45],
			purple: require_theme_atomic_index.default.purple[40],
			pink: require_theme_atomic_index.default.pink[46]
		}
	},
	inverse: {
		primary: require_theme_atomic_index.default.blue[60],
		background: require_theme_atomic_index.default.coolNeutral[15],
		label: require_theme_atomic_index.default.coolNeutral[99]
	},
	fill: {
		normal: require_utils_index.addHexOpacity(require_theme_atomic_index.default.coolNeutral[50], require_theme_opacity_index.default[8]),
		strong: require_utils_index.addHexOpacity(require_theme_atomic_index.default.coolNeutral[50], require_theme_opacity_index.default[16]),
		alternative: require_utils_index.addHexOpacity(require_theme_atomic_index.default.coolNeutral[50], require_theme_opacity_index.default[5])
	},
	material: { dimmer: require_utils_index.addHexOpacity(require_theme_atomic_index.default.coolNeutral[10], require_theme_opacity_index.default[52]) },
	elevation: { shadow: {
		normal: {
			xsmall: `0px 1px 2px -1px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .1)}`,
			small: `0px 2px 4px -2px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .06)}, 0px 4px 6px -1px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .06)}`,
			medium: `0px 4px 6px -2px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .07)}, 0px 10px 15px -3px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .07)}`,
			large: `0px 6px 10px -4px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .08)}, 0px 16px 24px -6px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .08)}`,
			xlarge: `0px 10px 15px -5px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .1)}, 0px 24px 38px -10px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .12)}`
		},
		drop: {
			xsmall: `drop-shadow(0px 1px 0.5px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .05)})`,
			small: `drop-shadow(0px 2px 1px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .03)}) drop-shadow(0px 4px 2.5px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .03)})`,
			medium: `drop-shadow(0px 4px 2px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .035)}) drop-shadow(0px 10px 6px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .035)})`,
			large: `drop-shadow(0px 6px 3px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .04)}) drop-shadow(0px 16px 9px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .03)})`,
			xlarge: `drop-shadow(0px 10px 5px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .05)}) drop-shadow(0px 24px 14px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .06)})`
		},
		spread: {
			small: `0px 0px 60px 0px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .1)}`,
			medium: `0px 15px 75px 0px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .16)}`
		}
	} }
};
const dark = {
	static: {
		white: require_theme_atomic_index.default.common[100],
		black: require_theme_atomic_index.default.common[0]
	},
	primary: {
		normal: require_theme_atomic_index.default.blue[60],
		strong: require_theme_atomic_index.default.blue[55],
		heavy: require_theme_atomic_index.default.blue[50]
	},
	label: {
		normal: require_theme_atomic_index.default.coolNeutral[99],
		strong: require_theme_atomic_index.default.common[100],
		neutral: require_utils_index.addHexOpacity(require_theme_atomic_index.default.coolNeutral[90], require_theme_opacity_index.default[88]),
		alternative: require_utils_index.addHexOpacity(require_theme_atomic_index.default.coolNeutral[80], require_theme_opacity_index.default[61]),
		assistive: require_utils_index.addHexOpacity(require_theme_atomic_index.default.coolNeutral[80], require_theme_opacity_index.default[28]),
		disable: require_utils_index.addHexOpacity(require_theme_atomic_index.default.coolNeutral[70], require_theme_opacity_index.default[16])
	},
	background: {
		normal: {
			normal: require_theme_atomic_index.default.coolNeutral[15],
			alternative: require_theme_atomic_index.default.coolNeutral[5]
		},
		elevated: {
			normal: require_theme_atomic_index.default.coolNeutral[17],
			alternative: require_theme_atomic_index.default.coolNeutral[7]
		},
		transparent: {
			normal: require_utils_index.addHexOpacity(require_theme_atomic_index.default.coolNeutral[17], require_theme_opacity_index.default[61]),
			alternative: require_utils_index.addHexOpacity(require_theme_atomic_index.default.coolNeutral[17], require_theme_opacity_index.default[61])
		},
		status: {
			negative: require_utils_index.addHexOpacity(require_theme_atomic_index.default.red[60], require_theme_opacity_index.default[8]),
			cautionary: require_utils_index.addHexOpacity(require_theme_atomic_index.default.orange[60], require_theme_opacity_index.default[8]),
			positive: require_utils_index.addHexOpacity(require_theme_atomic_index.default.green[60], require_theme_opacity_index.default[8])
		}
	},
	interaction: {
		inactive: require_theme_atomic_index.default.coolNeutral[40],
		disable: require_theme_atomic_index.default.coolNeutral[22]
	},
	line: {
		normal: {
			normal: require_utils_index.addHexOpacity(require_theme_atomic_index.default.coolNeutral[50], .32),
			neutral: require_utils_index.addHexOpacity(require_theme_atomic_index.default.coolNeutral[50], require_theme_opacity_index.default[28]),
			alternative: require_utils_index.addHexOpacity(require_theme_atomic_index.default.coolNeutral[50], require_theme_opacity_index.default[22])
		},
		solid: {
			normal: require_theme_atomic_index.default.coolNeutral[25],
			neutral: require_theme_atomic_index.default.coolNeutral[23],
			alternative: require_theme_atomic_index.default.coolNeutral[22]
		},
		primary: {
			normal: require_utils_index.addHexOpacity(require_theme_atomic_index.default.blue[60], require_theme_opacity_index.default[28]),
			strong: require_utils_index.addHexOpacity(require_theme_atomic_index.default.blue[60], require_theme_opacity_index.default[43])
		},
		status: {
			negative: {
				normal: require_utils_index.addHexOpacity(require_theme_atomic_index.default.red[60], require_theme_opacity_index.default[43]),
				strong: require_utils_index.addHexOpacity(require_theme_atomic_index.default.red[60], require_theme_opacity_index.default[52])
			},
			cautionary: { normal: require_utils_index.addHexOpacity(require_theme_atomic_index.default.orange[60], require_theme_opacity_index.default[43]) },
			positive: { normal: require_utils_index.addHexOpacity(require_theme_atomic_index.default.green[60], require_theme_opacity_index.default[43]) }
		}
	},
	status: {
		positive: require_theme_atomic_index.default.green[60],
		cautionary: require_theme_atomic_index.default.orange[60],
		negative: require_theme_atomic_index.default.red[60]
	},
	accent: {
		background: {
			redOrange: require_theme_atomic_index.default.redOrange[60],
			lime: require_theme_atomic_index.default.lime[60],
			cyan: require_theme_atomic_index.default.cyan[60],
			lightBlue: require_theme_atomic_index.default.lightBlue[60],
			violet: require_theme_atomic_index.default.violet[60],
			purple: require_theme_atomic_index.default.purple[60],
			pink: require_theme_atomic_index.default.pink[60]
		},
		foreground: {
			red: require_theme_atomic_index.default.red[60],
			redOrange: require_theme_atomic_index.default.redOrange[60],
			orange: require_theme_atomic_index.default.orange[50],
			lime: require_theme_atomic_index.default.lime[50],
			green: require_theme_atomic_index.default.green[60],
			cyan: require_theme_atomic_index.default.cyan[50],
			lightBlue: require_theme_atomic_index.default.lightBlue[50],
			blue: require_theme_atomic_index.default.blue[65],
			violet: require_theme_atomic_index.default.violet[70],
			purple: require_theme_atomic_index.default.purple[60],
			pink: require_theme_atomic_index.default.pink[60]
		}
	},
	inverse: {
		primary: require_theme_atomic_index.default.blue[50],
		background: require_theme_atomic_index.default.common[100],
		label: require_theme_atomic_index.default.coolNeutral[10]
	},
	fill: {
		normal: require_utils_index.addHexOpacity(require_theme_atomic_index.default.coolNeutral[50], require_theme_opacity_index.default[22]),
		strong: require_utils_index.addHexOpacity(require_theme_atomic_index.default.coolNeutral[50], require_theme_opacity_index.default[28]),
		alternative: require_utils_index.addHexOpacity(require_theme_atomic_index.default.coolNeutral[50], require_theme_opacity_index.default[12])
	},
	material: { dimmer: require_utils_index.addHexOpacity(require_theme_atomic_index.default.coolNeutral[10], require_theme_opacity_index.default[74]) },
	elevation: { shadow: {
		normal: {
			xsmall: `0px 1px 2px -1px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .1)}`,
			small: `0px 2px 4px -2px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .06)}, 0px 4px 6px -1px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .06)}`,
			medium: `0px 4px 6px -2px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .07)}, 0px 10px 15px -3px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .07)}`,
			large: `0px 6px 10px -4px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .08)}, 0px 16px 24px -6px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .08)}`,
			xlarge: `0px 10px 15px -5px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .1)}, 0px 24px 38px -10px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .12)}`
		},
		drop: {
			xsmall: `drop-shadow(0px 1px 0.5px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .05)})`,
			small: `drop-shadow(0px 2px 1px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .03)}) drop-shadow(0px 4px 2.5px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .03)})`,
			medium: `drop-shadow(0px 4px 2px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .035)}) drop-shadow(0px 10px 6px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .035)})`,
			large: `drop-shadow(0px 6px 3px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .04)}) drop-shadow(0px 16px 9px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .03)})`,
			xlarge: `drop-shadow(0px 10px 5px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .05)}) drop-shadow(0px 24px 14px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .06)})`
		},
		spread: {
			small: `0px 0px 60px 0px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .1)}`,
			medium: `0px 15px 75px 0px ${require_utils_index.addHexOpacity(require_theme_atomic_index.default.neutral[10], .16)}`
		}
	} }
};
//#endregion
exports.dark = dark;
exports.light = light;
