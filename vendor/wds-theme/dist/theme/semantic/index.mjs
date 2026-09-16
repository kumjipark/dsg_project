import { addHexOpacity } from "../../utils/index.mjs";
import opacity from "../opacity/index.mjs";
import atomic_default from "../atomic/index.mjs";
//#region src/theme/semantic/index.ts
const light = {
	static: {
		white: atomic_default.common[100],
		black: atomic_default.common[0]
	},
	primary: {
		normal: atomic_default.blue[50],
		strong: atomic_default.blue[45],
		heavy: atomic_default.blue[40]
	},
	label: {
		normal: atomic_default.coolNeutral[10],
		strong: atomic_default.common[0],
		neutral: addHexOpacity(atomic_default.coolNeutral[22], opacity[88]),
		alternative: addHexOpacity(atomic_default.coolNeutral[25], opacity[61]),
		assistive: addHexOpacity(atomic_default.coolNeutral[25], opacity[28]),
		disable: addHexOpacity(atomic_default.coolNeutral[25], opacity[16])
	},
	background: {
		normal: {
			normal: atomic_default.common[100],
			alternative: atomic_default.coolNeutral[99]
		},
		elevated: {
			normal: atomic_default.common[100],
			alternative: atomic_default.coolNeutral[99]
		},
		transparent: {
			normal: addHexOpacity(atomic_default.common[100], opacity[8]),
			alternative: addHexOpacity(atomic_default.common[100], opacity[28])
		},
		status: {
			negative: addHexOpacity(atomic_default.red[50], opacity[8]),
			cautionary: addHexOpacity(atomic_default.orange[50], opacity[8]),
			positive: addHexOpacity(atomic_default.green[50], opacity[8])
		}
	},
	interaction: {
		inactive: atomic_default.coolNeutral[70],
		disable: atomic_default.coolNeutral[98]
	},
	line: {
		normal: {
			normal: addHexOpacity(atomic_default.coolNeutral[50], opacity[22]),
			neutral: addHexOpacity(atomic_default.coolNeutral[50], opacity[16]),
			alternative: addHexOpacity(atomic_default.coolNeutral[50], opacity[8])
		},
		solid: {
			normal: atomic_default.coolNeutral[96],
			neutral: atomic_default.coolNeutral[97],
			alternative: atomic_default.coolNeutral[98]
		},
		primary: {
			normal: addHexOpacity(atomic_default.blue[50], opacity[28]),
			strong: addHexOpacity(atomic_default.blue[50], opacity[43])
		},
		status: {
			negative: {
				normal: addHexOpacity(atomic_default.red[50], opacity[43]),
				strong: addHexOpacity(atomic_default.red[50], opacity[52])
			},
			cautionary: { normal: addHexOpacity(atomic_default.orange[50], opacity[43]) },
			positive: { normal: addHexOpacity(atomic_default.green[50], opacity[43]) }
		}
	},
	status: {
		positive: atomic_default.green[50],
		cautionary: atomic_default.orange[50],
		negative: atomic_default.red[50]
	},
	accent: {
		background: {
			redOrange: atomic_default.redOrange[50],
			lime: atomic_default.lime[50],
			cyan: atomic_default.cyan[50],
			lightBlue: atomic_default.lightBlue[50],
			violet: atomic_default.violet[50],
			purple: atomic_default.purple[50],
			pink: atomic_default.pink[50]
		},
		foreground: {
			red: atomic_default.red[40],
			redOrange: atomic_default.redOrange[48],
			orange: atomic_default.orange[39],
			lime: atomic_default.lime[37],
			green: atomic_default.green[40],
			cyan: atomic_default.cyan[40],
			lightBlue: atomic_default.lightBlue[40],
			blue: atomic_default.blue[45],
			violet: atomic_default.violet[45],
			purple: atomic_default.purple[40],
			pink: atomic_default.pink[46]
		}
	},
	inverse: {
		primary: atomic_default.blue[60],
		background: atomic_default.coolNeutral[15],
		label: atomic_default.coolNeutral[99]
	},
	fill: {
		normal: addHexOpacity(atomic_default.coolNeutral[50], opacity[8]),
		strong: addHexOpacity(atomic_default.coolNeutral[50], opacity[16]),
		alternative: addHexOpacity(atomic_default.coolNeutral[50], opacity[5])
	},
	material: { dimmer: addHexOpacity(atomic_default.coolNeutral[10], opacity[52]) },
	elevation: { shadow: {
		normal: {
			xsmall: `0px 1px 2px -1px ${addHexOpacity(atomic_default.neutral[10], .1)}`,
			small: `0px 2px 4px -2px ${addHexOpacity(atomic_default.neutral[10], .06)}, 0px 4px 6px -1px ${addHexOpacity(atomic_default.neutral[10], .06)}`,
			medium: `0px 4px 6px -2px ${addHexOpacity(atomic_default.neutral[10], .07)}, 0px 10px 15px -3px ${addHexOpacity(atomic_default.neutral[10], .07)}`,
			large: `0px 6px 10px -4px ${addHexOpacity(atomic_default.neutral[10], .08)}, 0px 16px 24px -6px ${addHexOpacity(atomic_default.neutral[10], .08)}`,
			xlarge: `0px 10px 15px -5px ${addHexOpacity(atomic_default.neutral[10], .1)}, 0px 24px 38px -10px ${addHexOpacity(atomic_default.neutral[10], .12)}`
		},
		drop: {
			xsmall: `drop-shadow(0px 1px 0.5px ${addHexOpacity(atomic_default.neutral[10], .05)})`,
			small: `drop-shadow(0px 2px 1px ${addHexOpacity(atomic_default.neutral[10], .03)}) drop-shadow(0px 4px 2.5px ${addHexOpacity(atomic_default.neutral[10], .03)})`,
			medium: `drop-shadow(0px 4px 2px ${addHexOpacity(atomic_default.neutral[10], .035)}) drop-shadow(0px 10px 6px ${addHexOpacity(atomic_default.neutral[10], .035)})`,
			large: `drop-shadow(0px 6px 3px ${addHexOpacity(atomic_default.neutral[10], .04)}) drop-shadow(0px 16px 9px ${addHexOpacity(atomic_default.neutral[10], .03)})`,
			xlarge: `drop-shadow(0px 10px 5px ${addHexOpacity(atomic_default.neutral[10], .05)}) drop-shadow(0px 24px 14px ${addHexOpacity(atomic_default.neutral[10], .06)})`
		},
		spread: {
			small: `0px 0px 60px 0px ${addHexOpacity(atomic_default.neutral[10], .1)}`,
			medium: `0px 15px 75px 0px ${addHexOpacity(atomic_default.neutral[10], .16)}`
		}
	} }
};
const dark = {
	static: {
		white: atomic_default.common[100],
		black: atomic_default.common[0]
	},
	primary: {
		normal: atomic_default.blue[60],
		strong: atomic_default.blue[55],
		heavy: atomic_default.blue[50]
	},
	label: {
		normal: atomic_default.coolNeutral[99],
		strong: atomic_default.common[100],
		neutral: addHexOpacity(atomic_default.coolNeutral[90], opacity[88]),
		alternative: addHexOpacity(atomic_default.coolNeutral[80], opacity[61]),
		assistive: addHexOpacity(atomic_default.coolNeutral[80], opacity[28]),
		disable: addHexOpacity(atomic_default.coolNeutral[70], opacity[16])
	},
	background: {
		normal: {
			normal: atomic_default.coolNeutral[15],
			alternative: atomic_default.coolNeutral[5]
		},
		elevated: {
			normal: atomic_default.coolNeutral[17],
			alternative: atomic_default.coolNeutral[7]
		},
		transparent: {
			normal: addHexOpacity(atomic_default.coolNeutral[17], opacity[61]),
			alternative: addHexOpacity(atomic_default.coolNeutral[17], opacity[61])
		},
		status: {
			negative: addHexOpacity(atomic_default.red[60], opacity[8]),
			cautionary: addHexOpacity(atomic_default.orange[60], opacity[8]),
			positive: addHexOpacity(atomic_default.green[60], opacity[8])
		}
	},
	interaction: {
		inactive: atomic_default.coolNeutral[40],
		disable: atomic_default.coolNeutral[22]
	},
	line: {
		normal: {
			normal: addHexOpacity(atomic_default.coolNeutral[50], .32),
			neutral: addHexOpacity(atomic_default.coolNeutral[50], opacity[28]),
			alternative: addHexOpacity(atomic_default.coolNeutral[50], opacity[22])
		},
		solid: {
			normal: atomic_default.coolNeutral[25],
			neutral: atomic_default.coolNeutral[23],
			alternative: atomic_default.coolNeutral[22]
		},
		primary: {
			normal: addHexOpacity(atomic_default.blue[60], opacity[28]),
			strong: addHexOpacity(atomic_default.blue[60], opacity[43])
		},
		status: {
			negative: {
				normal: addHexOpacity(atomic_default.red[60], opacity[43]),
				strong: addHexOpacity(atomic_default.red[60], opacity[52])
			},
			cautionary: { normal: addHexOpacity(atomic_default.orange[60], opacity[43]) },
			positive: { normal: addHexOpacity(atomic_default.green[60], opacity[43]) }
		}
	},
	status: {
		positive: atomic_default.green[60],
		cautionary: atomic_default.orange[60],
		negative: atomic_default.red[60]
	},
	accent: {
		background: {
			redOrange: atomic_default.redOrange[60],
			lime: atomic_default.lime[60],
			cyan: atomic_default.cyan[60],
			lightBlue: atomic_default.lightBlue[60],
			violet: atomic_default.violet[60],
			purple: atomic_default.purple[60],
			pink: atomic_default.pink[60]
		},
		foreground: {
			red: atomic_default.red[60],
			redOrange: atomic_default.redOrange[60],
			orange: atomic_default.orange[50],
			lime: atomic_default.lime[50],
			green: atomic_default.green[60],
			cyan: atomic_default.cyan[50],
			lightBlue: atomic_default.lightBlue[50],
			blue: atomic_default.blue[65],
			violet: atomic_default.violet[70],
			purple: atomic_default.purple[60],
			pink: atomic_default.pink[60]
		}
	},
	inverse: {
		primary: atomic_default.blue[50],
		background: atomic_default.common[100],
		label: atomic_default.coolNeutral[10]
	},
	fill: {
		normal: addHexOpacity(atomic_default.coolNeutral[50], opacity[22]),
		strong: addHexOpacity(atomic_default.coolNeutral[50], opacity[28]),
		alternative: addHexOpacity(atomic_default.coolNeutral[50], opacity[12])
	},
	material: { dimmer: addHexOpacity(atomic_default.coolNeutral[10], opacity[74]) },
	elevation: { shadow: {
		normal: {
			xsmall: `0px 1px 2px -1px ${addHexOpacity(atomic_default.neutral[10], .1)}`,
			small: `0px 2px 4px -2px ${addHexOpacity(atomic_default.neutral[10], .06)}, 0px 4px 6px -1px ${addHexOpacity(atomic_default.neutral[10], .06)}`,
			medium: `0px 4px 6px -2px ${addHexOpacity(atomic_default.neutral[10], .07)}, 0px 10px 15px -3px ${addHexOpacity(atomic_default.neutral[10], .07)}`,
			large: `0px 6px 10px -4px ${addHexOpacity(atomic_default.neutral[10], .08)}, 0px 16px 24px -6px ${addHexOpacity(atomic_default.neutral[10], .08)}`,
			xlarge: `0px 10px 15px -5px ${addHexOpacity(atomic_default.neutral[10], .1)}, 0px 24px 38px -10px ${addHexOpacity(atomic_default.neutral[10], .12)}`
		},
		drop: {
			xsmall: `drop-shadow(0px 1px 0.5px ${addHexOpacity(atomic_default.neutral[10], .05)})`,
			small: `drop-shadow(0px 2px 1px ${addHexOpacity(atomic_default.neutral[10], .03)}) drop-shadow(0px 4px 2.5px ${addHexOpacity(atomic_default.neutral[10], .03)})`,
			medium: `drop-shadow(0px 4px 2px ${addHexOpacity(atomic_default.neutral[10], .035)}) drop-shadow(0px 10px 6px ${addHexOpacity(atomic_default.neutral[10], .035)})`,
			large: `drop-shadow(0px 6px 3px ${addHexOpacity(atomic_default.neutral[10], .04)}) drop-shadow(0px 16px 9px ${addHexOpacity(atomic_default.neutral[10], .03)})`,
			xlarge: `drop-shadow(0px 10px 5px ${addHexOpacity(atomic_default.neutral[10], .05)}) drop-shadow(0px 24px 14px ${addHexOpacity(atomic_default.neutral[10], .06)})`
		},
		spread: {
			small: `0px 0px 60px 0px ${addHexOpacity(atomic_default.neutral[10], .1)}`,
			medium: `0px 15px 75px 0px ${addHexOpacity(atomic_default.neutral[10], .16)}`
		}
	} }
};
//#endregion
export { dark, light };
