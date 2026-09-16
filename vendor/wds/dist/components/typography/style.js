'use client';
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
require("../../_virtual/_rolldown/runtime.js");
let _wanteddev_wds_engine = require("@wanteddev/wds-engine");
//#region src/components/typography/style.ts
const variantMap = {
	display1: _wanteddev_wds_engine.css`
    font-size: 3.5rem;
    line-height: 4.5rem;
    letter-spacing: -0.0319em;
  `,
	display2: _wanteddev_wds_engine.css`
    font-size: 2.5rem;
    line-height: 3.25rem;
    letter-spacing: -0.0282em;
  `,
	display3: _wanteddev_wds_engine.css`
    font-size: 2.25rem;
    line-height: 3rem;
    letter-spacing: -0.027em;
  `,
	title1: _wanteddev_wds_engine.css`
    font-size: 2rem;
    line-height: 2.75rem;
    letter-spacing: -0.0253em;
  `,
	title2: _wanteddev_wds_engine.css`
    font-size: 1.75rem;
    line-height: 2.375rem;
    letter-spacing: -0.0236em;
  `,
	title3: _wanteddev_wds_engine.css`
    font-size: 1.5rem;
    line-height: 2rem;
    letter-spacing: -0.023em;
  `,
	heading1: _wanteddev_wds_engine.css`
    font-size: 1.375rem;
    line-height: 1.875rem;
    letter-spacing: -0.0194em;
  `,
	heading2: _wanteddev_wds_engine.css`
    font-size: 1.25rem;
    line-height: 1.75rem;
    letter-spacing: -0.012em;
  `,
	headline1: _wanteddev_wds_engine.css`
    font-size: 1.125rem;
    line-height: 1.625rem;
    letter-spacing: -0.002em;
  `,
	headline2: _wanteddev_wds_engine.css`
    font-size: 1.0625rem;
    line-height: 1.5rem;
    letter-spacing: 0em;
  `,
	body1: _wanteddev_wds_engine.css`
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 0.0057em;
  `,
	"body1-reading": _wanteddev_wds_engine.css`
    font-size: 1rem;
    line-height: 1.625rem;
    letter-spacing: 0.0057em;
  `,
	body2: _wanteddev_wds_engine.css`
    font-size: 0.9375rem;
    line-height: 1.375rem;
    letter-spacing: 0.0096em;
  `,
	"body2-reading": _wanteddev_wds_engine.css`
    font-size: 0.9375rem;
    line-height: 1.5rem;
    letter-spacing: 0.0096em;
  `,
	label1: _wanteddev_wds_engine.css`
    font-size: 0.875rem;
    line-height: 1.25rem;
    letter-spacing: 0.0145em;
  `,
	"label1-reading": _wanteddev_wds_engine.css`
    font-size: 0.875rem;
    line-height: 1.375rem;
    letter-spacing: 0.0145em;
  `,
	label2: _wanteddev_wds_engine.css`
    font-size: 0.8125rem;
    line-height: 1.125rem;
    letter-spacing: 0.0194em;
  `,
	caption1: _wanteddev_wds_engine.css`
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: 0.0252em;
  `,
	caption2: _wanteddev_wds_engine.css`
    font-size: 0.6875rem;
    line-height: 0.875rem;
    letter-spacing: 0.0311em;
  `
};
const getWeightMap = (variant) => ({
	regular: _wanteddev_wds_engine.css`
    font-weight: 400;
  `,
	medium: _wanteddev_wds_engine.css`
    font-weight: 500;
  `,
	bold: variant === "display1" || variant === "display2" || variant === "display3" || variant === "title1" || variant === "title2" || variant === "title3" ? _wanteddev_wds_engine.css`
          font-weight: 700;
        ` : _wanteddev_wds_engine.css`
          font-weight: 600;
        `
});
//#endregion
exports.getWeightMap = getWeightMap;
exports.variantMap = variantMap;
